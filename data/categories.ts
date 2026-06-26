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
    name: "Hygiene & Grooming",
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
    slug: "fur-supplements",
    name: "Fur Care & Supplements",
    blurb: "Untuk bulu yang sehat, berkilau, dan indah",
    icon: "leaf",
    tone: "lavender",
  },
  {
    slug: "behavior-training",
    name: "Behavior & Training",
    blurb: "Solusi lembut untuk hewan peliharaan yang nakal",
    icon: "smile",
    tone: "peach",
  },
  {
    slug: "odor-remover",
    name: "Odor Remover",
    blurb: "Solusi efektif menghilangkan bau tak sedap di rumah",
    icon: "pin",
    tone: "sky",
  },
];

export function getCategory(slug: string): Category | undefined {
  return CATEGORIES.find((c) => c.slug === slug);
}

