import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { Hero } from "@/components/home/Hero";
import { TrustBadges } from "@/components/home/TrustBadges";
import { SITE_URL } from "@/lib/site";

const ShopByCategory = dynamic(() =>
  import("@/components/home/ShopByCategory").then((mod) => mod.ShopByCategory),
);
const WhyChoose = dynamic(() =>
  import("@/components/home/WhyChoose").then((mod) => mod.WhyChoose),
);
const QuizCTA = dynamic(() =>
  import("@/components/home/QuizCTA").then((mod) => mod.QuizCTA),
);

export const metadata: Metadata = {
  title: "ClariPetAr | Premium Pet Care",
  description:
    "Safe. Gentle. Effective. Premium, pet-safe care products for cats and dogs, made with love in Indonesia.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "ClariPetAr | Premium Pet Care",
    description:
      "Safe. Gentle. Effective. Premium, pet-safe care products for cats and dogs, made with love in Indonesia.",
    url: "/",
    type: "website",
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "ClariPet",
  url: SITE_URL,
  description:
    "Premium, pet-safe care made with love in Indonesia. Gentle formulas for happy, healthy pets.",
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "ClariPet",
  url: SITE_URL,
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: `${SITE_URL}/shop?q={search_term_string}`,
    },
    "query-input": "required name=search_term_string",
  },
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
      />
      <main>
        <Hero />
        <TrustBadges />
        <ShopByCategory />
        <WhyChoose />
        <QuizCTA />
      </main>
    </>
  );
}
