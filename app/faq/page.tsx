import type { Metadata } from "next";
import { FaqView } from "@/components/faq/FaqView";

export const metadata: Metadata = {
  title: "FAQ",
  description: "Frequently asked questions about ClariPet products, shipping, and care.",
  alternates: { canonical: "/faq" },
};

export default function FaqPage() {
  return <FaqView />;
}
