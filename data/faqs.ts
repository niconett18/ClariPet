export type Faq = { q: string; a: string; icon: string };

/**
 * Single source of truth for the FAQ content. Consumed by the FAQ UI
 * (components/faq/FaqView.tsx) and the FAQPage JSON-LD (app/faq/page.tsx),
 * so the structured data can never drift from what's rendered on screen.
 */
export const FAQS: Faq[] = [
  {
    icon: "batch",
    q: "Is ClariPet safe for my pet?",
    a: "Yes. Every ClariPet product is made with gentle, pet-safe ingredients and tested to be kind to skin, coats, and noses — suitable for both cats and dogs.",
  },
  {
    icon: "sparkle",
    q: "Are ClariPet products effective?",
    a: "Our formulas are crafted for real, visible results — fresher breath, brighter eyes, cleaner coats — without harsh chemicals.",
  },
  {
    icon: "dog",
    q: "Can I use the same product on both dogs and cats?",
    a: "Most of our products are suitable for both. Always check the product label, and reach out if you're unsure which is best for your pet.",
  },
  {
    icon: "droplet",
    q: "How do I use ClariPet products?",
    a: "Each product page includes a simple 'How to Use' section. In general, our products are designed to fit easily into your pet's everyday routine.",
  },
  {
    icon: "package",
    q: "How long does shipping take?",
    a: "Orders are processed within 1–2 business days and typically arrive within 2–5 business days across Indonesia. Free shipping on orders over Rp 300.000.",
  },
  {
    icon: "heart",
    q: "What if my pet doesn't like a product?",
    a: "Your satisfaction matters. If something isn't right, contact us within 7 days of delivery and our team will help with a return or exchange.",
  },
  {
    icon: "leaf",
    q: "Are your products cruelty-free?",
    a: "Absolutely. We never test on animals, and we hold every formula to the standard of 'would we use it on our own pets?'",
  },
  {
    icon: "pin",
    q: "Where are ClariPet products made?",
    a: "Proudly made in Indonesia in small batches, with premium ingredients and global quality standards.",
  },
];
