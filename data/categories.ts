import type { Category } from "@/lib/types";

export const CATEGORIES: Category[] = [
  { slug: "perfumes", name: "Perfumes", tone: "pink", icon: "spray", blurb: "Long-lasting, gentle fragrances" },
  { slug: "oral-care", name: "Oral Care", tone: "sky", icon: "droplet", blurb: "Fresh breath, healthy gums" },
  { slug: "tear-stain-care", name: "Tear Stain Care", tone: "lavender", icon: "sparkle", blurb: "Clear, bright-eyed faces" },
  { slug: "skin-care", name: "Skin Care", tone: "sage", icon: "leaf", blurb: "Soothe, calm & protect" },
  { slug: "grooming", name: "Grooming", tone: "cream", icon: "smile", blurb: "Clean coats, happy days" },
  { slug: "beauty", name: "Beauty", tone: "peach", icon: "sparkle", blurb: "Enhanced pet beauty routines" },
];

export function getCategory(slug: string): Category | undefined {
  return CATEGORIES.find((c) => c.slug === slug);
}
