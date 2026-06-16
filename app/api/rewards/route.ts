export const dynamic = "force-dynamic";

import { createClient } from "@/lib/supabase/server";
import { requireUser } from "@/lib/helpers/auth";
import { ok, error } from "@/lib/helpers/response";
import { withErrorHandling } from "@/lib/helpers/handler";

// GET /api/rewards -> { balance, lifetime, tier, events[] }
export const GET = withErrorHandling(async () => {
  const user = await requireUser();
  const supabase = createClient();

  const { data: points } = await supabase
    .from("reward_points")
    .select("balance, lifetime, tier")
    .eq("user_id", user.id)
    .maybeSingle();

  const { data: events, error: evErr } = await supabase
    .from("reward_events")
    .select("id, points, reason, created_at")
    .eq("user_id", user.id)
    .order("created_at", { ascending: false })
    .limit(20);

  if (evErr) return error(evErr.message, 500);

  return ok({
    balance: points?.balance ?? 0,
    lifetime: points?.lifetime ?? 0,
    tier: points?.tier ?? "Friend",
    events: events ?? [],
  });
});
