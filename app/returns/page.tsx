import type { Metadata } from "next";
import { LegalView } from "@/components/legal/LegalView";

export const metadata: Metadata = {
  title: "Return & Refund Policy",
  description: "How returns, exchanges, and refunds work for ClariPet orders.",
  alternates: { canonical: "/returns" },
};

export default function ReturnsPage() {
  return (
    <LegalView
      title="Return & Refund Policy"
      intro="Your satisfaction matters to us."
      updated="June 2026"
      sections={[
        {
          heading: "Our Promise",
          body: [
            "If something isn't right with your order, we want to make it right. Reach out within 7 days of delivery and our team will help.",
          ],
        },
        {
          heading: "Eligibility",
          body: [
            "Returns are accepted for unopened products in their original packaging, or for items that arrived damaged or incorrect.",
            "For hygiene reasons, opened products can only be returned if faulty.",
          ],
        },
        {
          heading: "How to Request a Return",
          body: [
            "Contact us via WhatsApp or our Contact page with your order number and a short description (and photos, if the item arrived damaged).",
          ],
        },
        {
          heading: "Refunds",
          body: [
            "Once your return is received and inspected, approved refunds are issued to your original payment method within 5–7 business days.",
          ],
        },
      ]}
    />
  );
}
