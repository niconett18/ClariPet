import { NextResponse, type NextRequest } from "next/server";
import { createAdminClient } from "@/lib/supabase/admin";

/**
 * POST /api/payments/webhook
 * Placeholder webhook handler for payment gateways.
 * 
 * When integrating Midtrans or Xendit:
 * 1. Verify the webhook signature
 * 2. Parse the payment notification
 * 3. Update the order status
 */
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    // TODO: Verify webhook signature from payment gateway
    // const isValid = verifySignature(req.headers, body);
    // if (!isValid) return NextResponse.json({ error: "Invalid signature" }, { status: 401 });

    const orderId = body.order_id;
    const paymentStatus = body.transaction_status; // e.g., "settlement", "pending", "deny", "expire"

    if (!orderId) {
      return NextResponse.json({ error: "Missing order_id" }, { status: 400 });
    }

    const supabase = createAdminClient();

    // Map payment gateway status to our order status
    let orderStatus: string;
    switch (paymentStatus) {
      case "settlement":
      case "capture":
        orderStatus = "paid";
        break;
      case "deny":
      case "expire":
      case "cancel":
        orderStatus = "cancelled";
        // Restore stock
        await supabase.rpc("restore_stock_for_order", { p_order_id: orderId });
        break;
      default:
        orderStatus = "pending";
    }

    const { error: updateError } = await supabase
      .from("orders")
      .update({
        status: orderStatus,
        payment_ref: body.transaction_id ?? null,
      })
      .eq("id", orderId);

    if (updateError) {
      console.error("[Supabase Update Error]", updateError);
      return NextResponse.json({ error: "Failed to update database" }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("[Payment Webhook Error]", err);
    return NextResponse.json({ error: "Webhook processing failed" }, { status: 500 });
  }
}
