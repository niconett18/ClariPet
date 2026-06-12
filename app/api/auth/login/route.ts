import { createClient } from "@/lib/supabase/server";
import { loginSchema } from "@/lib/validators/auth";
import { ok, error } from "@/lib/helpers/response";
import { withErrorHandling } from "@/lib/helpers/handler";

export const POST = withErrorHandling(async (req: Request) => {
  const body = await req.json();
  const { email, password } = loginSchema.parse(body);

  const supabase = createClient();
  const { data, error: authError } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (authError) {
    return error(authError.message, 401);
  }

  return ok({
    user: data.user,
    session: data.session,
  });
});
