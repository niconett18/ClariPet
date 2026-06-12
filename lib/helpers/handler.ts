import { ZodError } from "zod";
import { error, unauthorized, forbidden, serverError } from "./response";

/**
 * Wrap an API route handler with standard error handling.
 * Converts thrown auth errors and Zod validation errors into
 * appropriate HTTP responses.
 */
export function withErrorHandling<Args extends unknown[]>(
  handler: (...args: Args) => Promise<Response>,
) {
  return async (...args: Args): Promise<Response> => {
    try {
      return await handler(...args);
    } catch (err) {
      if (err instanceof ZodError) {
        const msg = err.issues.map((i) => i.message).join(", ");
        return error(msg, 422);
      }
      if (err instanceof Error) {
        if (err.message === "UNAUTHORIZED") return unauthorized();
        if (err.message === "FORBIDDEN") return forbidden();
      }
      console.error("[API ERROR]", err);
      return serverError();
    }
  };
}
