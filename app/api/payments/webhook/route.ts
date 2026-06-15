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

    // Verify webhook signature from Midtrans
    const crypto = await import("crypto");
    const serverKey = process.env.MIDTRANS_SERVER_KEY || "";
    
    // Midtrans signature formula: SHA512(order_id + status_code + gross_amount + ServerKey)
    const hashData = `${body.order_id}${body.status_code}${body.gross_amount}${serverKey}`;
    const expectedSignature = crypto.createHash("sha512").update(hashData).digest("hex");

    if (body.signature_key !== expectedSignature) {
      console.error("[Payment Webhook Error] Invalid signature");
      return NextResponse.json({ error: "Invalid signature" }, { status: 401 });
    }

    const orderId = body.order_id;
    const paymentStatus = body.transaction_status; // e.g., "settlement", "pending", "deny", "expire"

    if (!orderId) {
      return NextResponse.json({ error: "Missing order_id" }, { status: 400 });
    }

    const supabase = createAdminClient();

    // Map payment gateway status to our order status
    let orderStatus: string;
    
    // Check for Fraud Detection System challenge first
    if (body.fraud_status === "challenge") {
      orderStatus = "challenged";
    } else {
      switch (paymentStatus) {
        case "settlement":
        case "capture":
          orderStatus = "paid";
          break;
        case "deny":
        case "expire":
        case "cancel":
          orderStatus = "cancelled";
          break;
        default:
          orderStatus = "pending";
      }
    }

    // Call atomic RPC to handle status update and optional stock restoration safely
    const { error: rpcError } = await supabase.rpc("handle_payment_webhook", {
      p_order_id: orderId,
      p_new_status: orderStatus,
      p_payment_ref: body.transaction_id ?? null,
    });

    if (rpcError) {
      console.error("[Supabase RPC Error]", rpcError);
      return NextResponse.json({ error: "Failed to process webhook securely" }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("[Payment Webhook Error]", err);
    return NextResponse.json({ error: "Webhook processing failed" }, { status: 500 });
  }
}
