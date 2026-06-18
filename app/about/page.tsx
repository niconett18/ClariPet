import type { Metadata } from "next";
import { AboutView } from "@/components/about/AboutView";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "ClariPet began with a simple wish: gentle, effective care for the pets we love. Proudly made in Indonesia in small batches, trusted by pet parents nationwide.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About ClariPet",
    description:
      "ClariPet began with a simple wish: gentle, effective care for the pets we love. Proudly made in Indonesia in small batches.",
    url: "/about",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About ClariPet",
    description:
      "ClariPet began with a simple wish: gentle, effective care for the pets we love. Proudly made in Indonesia in small batches.",
  },
};

export default function AboutPage() {
  return <AboutView />;
}
