export type Category = {
  slug: string;
  name: string;
  blurb: string;
  icon: string;
  tone: "sky" | "pink" | "sage" | "lavender" | "cream" | "peach";
  image?: string;
};

export const CATEGORIES: Category[] = [
  {
    slug: "perfumes",
    name: "Perfumes",
    blurb: "Parfum Non-Alkohol yang diracik khusus untuk kehangatan pelukan setiap hari.",
    icon: "sparkle",
    tone: "pink",
  },
  {
    slug: "hygiene",
    name: "Hygiene",
    blurb: "Perawatan gentle untuk hewan peliharaan yang segar, bersih, dan ceria.",
    icon: "batch",
    tone: "sky",
  },
  {
    slug: "skin-care",
    name: "Skin Care",
    blurb: "Perawatan khusus untuk mengatasi masalah kulit",
    icon: "shield",
    tone: "sage",
  },
  {
    slug: "grooming",
    name: "Grooming",
    blurb: "Perawatan mandi agar kulit dan bulu senantiasa bersih.",
    icon: "droplet",
    tone: "sky",
  },
  {
    slug: "beauty-coat-care",
    name: "Beauty & Coat Care",
    blurb: "Untuk bulu yang sehat, berkilau, dan indah",
    icon: "leaf",
    tone: "lavender",
  },
  {
    slug: "beauty-supplement",
    name: "Beauty Supplement",
    blurb: "Dukungan nutrisi dari dalam untuk kulit yang sehat.",
    icon: "heart",
    tone: "peach",
  },
  {
    slug: "behavior-training",
    name: "Behavior & Training",
    blurb: "Solusi lembut untuk hewan peliharaan yang nakal",
    icon: "smile",
    tone: "peach",
  },
  {
    slug: "home-environment-care",
    name: "Home & Environment Care",
    blurb: "Solusi efektif menghilangkan bau tak sedap di rumah",
    icon: "pin",
    tone: "sky",
  },
];

export function getCategory(slug: string): Category | undefined {
  return CATEGORIES.find((c) => c.slug === slug);
}

