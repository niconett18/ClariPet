import { createClient } from "@/lib/supabase/server";
import { signupSchema } from "@/lib/validators/auth";
import { ok, error, serverError } from "@/lib/helpers/response";
import { withErrorHandling } from "@/lib/helpers/handler";

export const POST = withErrorHandling(async (req: Request) => {
  const body = await req.json();
  const { email, password, full_name } = signupSchema.parse(body);

  const supabase = createClient();
  const { data, error: authError } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: { full_name },
    },
  });

  if (authError) {
    return error(authError.message, 400);
  }

  return ok({ user: data.user }, 201);
});
