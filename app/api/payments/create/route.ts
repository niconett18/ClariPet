import { ok } from "@/lib/helpers/response";
import { withErrorHandling } from "@/lib/helpers/handler";
import { requireUser } from "@/lib/helpers/auth";

/**
 * POST /api/payments/create
 * Placeholder — returns a mock payment URL.
 * Replace this with Midtrans/Xendit integration when ready.
 */
export const POST = withErrorHandling(async (req: Request) => {
  await requireUser();
  const body = await req.json();
  const orderId = body.order_id;

  // Placeholder: in production, call your payment gateway here
  // e.g., const snap = await midtrans.createTransaction(...)
  return ok({
    order_id: orderId,
    payment_url: null, // Will be set by payment gateway
    message:
      "Payment gateway not configured yet. Integrate Midtrans or Xendit here.",
  });
});
