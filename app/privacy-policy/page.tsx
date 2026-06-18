import type { Metadata } from "next";
import { LegalView } from "@/components/legal/LegalView";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How ClariPet collects, uses, and protects your personal information.",
  alternates: { canonical: "/privacy-policy" },
  robots: {
    index: false,
    follow: true,
  },
};

export default function PrivacyPolicyPage() {
  return (
    <LegalView
      title="Privacy Policy"
      intro="How we collect, use, and protect your information."
      updated="June 2026"
      sections={[
        {
          heading: "Information We Collect",
          body: [
            "We collect information you provide when you create an account, place an order, or contact us — such as your name, email, phone number, and shipping address.",
            "We also collect limited technical data (device, browser, and usage information) to help us improve the ClariPet experience.",
          ],
        },
        {
          heading: "How We Use Your Information",
          body: [
            "Your information is used to process orders, provide customer support, send order updates, and — with your consent — share product news and offers.",
            "We never sell your personal data to third parties.",
          ],
        },
        {
          heading: "Data Security",
          body: [
            "We use industry-standard safeguards to protect your information. Payment details are handled by our payment provider and are never stored on our servers.",
          ],
        },
        {
          heading: "Your Choices",
          body: [
            "You can access or update your account details at any time, and unsubscribe from marketing messages using the link in any email.",
          ],
        },
        {
          heading: "Contact Us",
          body: [
            "Questions about your privacy? Reach us through our Contact page or via WhatsApp — we're happy to help.",
          ],
        },
      ]}
    />
  );
}
