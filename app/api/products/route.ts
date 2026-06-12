export const dynamic = "force-dynamic";

import { createClient } from "@/lib/supabase/server";
import { productQuerySchema } from "@/lib/validators/product";
import { ok, error } from "@/lib/helpers/response";
import { withErrorHandling } from "@/lib/helpers/handler";
import type { NextRequest } from "next/server";

export const GET = withErrorHandling(async (req: NextRequest) => {
  const { searchParams } = new URL(req.url);
  const query = productQuerySchema.parse({
    category: searchParams.get("category") ?? undefined,
    search: searchParams.get("search") ?? undefined,
    sort: searchParams.get("sort") ?? undefined,
    page: searchParams.get("page") ?? 1,
    limit: searchParams.get("limit") ?? 20,
  });

  const supabase = createClient();

  let qb = supabase
    .from("products")
    .select(
      "*, category:categories(*), sizes:product_sizes(*)",
      { count: "exact" },
    )
    .eq("status", "active");

  // Filter by category slug
  if (query.category) {
    const { data: cat } = await supabase
      .from("categories")
      .select("id")
      .eq("slug", query.category)
      .single();
    if (cat) {
      qb = qb.eq("category_id", cat.id);
    } else {
      return ok({ products: [], total: 0, page: query.page, limit: query.limit });
    }
  }

  // Search
  if (query.search) {
    qb = qb.ilike("name", `%${query.search}%`);
  }

  // Sort
  switch (query.sort) {
    case "price_asc":
      qb = qb.order("price", { ascending: true });
      break;
    case "price_desc":
      qb = qb.order("price", { ascending: false });
      break;
    case "name":
      qb = qb.order("name", { ascending: true });
      break;
    case "newest":
      qb = qb.order("created_at", { ascending: false });
      break;
    default:
      qb = qb.order("best_seller", { ascending: false }).order("created_at", { ascending: false });
  }

  // Pagination
  const from = (query.page - 1) * query.limit;
  const to = from + query.limit - 1;
  qb = qb.range(from, to);

  const { data, count, error: dbError } = await qb;

  if (dbError) {
    return error(dbError.message, 500);
  }

  return ok({
    products: data ?? [],
    total: count ?? 0,
    page: query.page,
    limit: query.limit,
  });
});
