export const dynamic = "force-dynamic";

import { createClient } from "@/lib/supabase/server";
import { requireAdmin } from "@/lib/helpers/auth";
import { ok, error } from "@/lib/helpers/response";
import { withErrorHandling } from "@/lib/helpers/handler";
import type { NextRequest } from "next/server";

// GET /api/admin/inventory — low stock report
export const GET = withErrorHandling(async (req: NextRequest) => {
  await requireAdmin();
  const { searchParams } = new URL(req.url);
  const threshold = Number(searchParams.get("threshold") ?? 10);

  const supabase = createClient();

  const { data, error: dbError } = await supabase
    .from("product_sizes")
    .select("*, product:products(id, slug, name, status)")
    .lte("stock", threshold)
    .order("stock", { ascending: true });

  if (dbError) return error(dbError.message, 500);

  return ok(data ?? []);
});
