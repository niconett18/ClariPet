import type { Metadata } from "next";
import { LegalView } from "@/components/legal/LegalView";

export const metadata: Metadata = {
  title: "Shipping & Delivery Policy",
  description: "Shipping options, delivery times, and order tracking for ClariPet orders.",
  alternates: { canonical: "/shipping" },
};

export default function ShippingPage() {
  return (
    <LegalView
      title="Shipping & Delivery"
      intro="How and when your ClariPet order reaches you."
      updated="June 2026"
      sections={[
        {
          heading: "Processing Time",
          body: [
            "Orders are processed within 1–2 business days. You'll receive a confirmation and tracking details once your order ships.",
          ],
        },
        {
          heading: "Delivery Areas & Times",
          body: [
            "We ship across Indonesia. Estimated delivery is 2–5 business days depending on your location.",
            "Remote areas may require additional time.",
          ],
        },
        {
          heading: "Shipping Costs",
          body: [
            "Shipping is calculated at checkout based on your address and order weight.",
            "Enjoy free shipping on orders over Rp 300.000.",
          ],
        },
        {
          heading: "Order Tracking",
          body: [
            "Track your order any time from your My ClariPet account under My Orders, or via the tracking link in your shipping confirmation.",
          ],
        },
      ]}
    />
  );
}
