import type { Metadata } from "next";
import { LegalView } from "@/components/legal/LegalView";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description:
    "The terms that govern your use of the ClariPet website and services.",
  alternates: { canonical: "/terms" },
  robots: {
    index: false,
    follow: true,
  },
};

export default function TermsPage() {
  return (
    <LegalView
      title="Terms & Conditions"
      intro="The terms that govern your use of ClariPet."
      updated="June 2026"
      sections={[
        {
          heading: "Acceptance of Terms",
          body: [
            "By accessing or using the ClariPet website, you agree to these Terms & Conditions. If you do not agree, please do not use the site.",
          ],
        },
        {
          heading: "Orders & Pricing",
          body: [
            "All prices are listed in Indonesian Rupiah (IDR) and include applicable taxes unless stated otherwise.",
            "We reserve the right to refuse or cancel an order in the event of pricing errors, stock issues, or suspected fraud.",
          ],
        },
        {
          heading: "Product Information",
          body: [
            "We strive to describe our products accurately. Colours and packaging may vary slightly from images shown on the site.",
          ],
        },
        {
          heading: "Intellectual Property",
          body: [
            "All content on this site — including logos, text, images, and the ClariPet mascot — is owned by ClariPet and may not be reused without permission.",
          ],
        },
        {
          heading: "Limitation of Liability",
          body: [
            "ClariPet products are intended for their described purpose. Always follow usage instructions. If your pet has a known sensitivity, consult your veterinarian before use.",
          ],
        },
      ]}
    />
  );
}
