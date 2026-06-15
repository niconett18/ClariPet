"use client";

import { useState } from "react";
import Link from "next/link";
import { Icon } from "@/components/icons";
import { PageHead } from "@/components/PageHead";

const WHATSAPP = "6281234567890";

type Faq = { q: string; a: string; icon: string };

const FAQS: Faq[] = [
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

export function FaqView() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <main>
      <PageHead
        title="Curious About ClariPet?"
        subtitle="Everything you need to know — what we do, and how we're helping you help them."
      />

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="center" style={{ marginBottom: 38 }}>
            <div className="eyebrow" style={{ marginBottom: 10 }}>
              <Icon name="sparkle" size={16} /> Top Questions
            </div>
            <h2 className="h2">Here are the most common questions about ClariPet</h2>
          </div>

          <div className="faq-grid">
            {FAQS.map((f, i) => (
              <div key={i} className={"faq-card" + (open === i ? " open" : "")}>
                <button
                  className="faq-head"
                  aria-expanded={open === i}
                  onClick={() => setOpen(open === i ? null : i)}
                >
                  <span className="faq-ic">
                    <Icon name={f.icon} size={20} />
                  </span>
                  <span className="faq-q">{f.q}</span>
                  <Icon name="chevDown" size={18} className="chev" />
                </button>
                <div className="faq-body">
                  <div>
                    <p>{f.a}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="faq-cta">
            <div>
              <h2 className="h2" style={{ marginBottom: 10 }}>
                Still Have Questions?
              </h2>
              <p className="muted">
                We're always happy to help. Reach our team and we'll get back to you quickly.
              </p>
            </div>
            <div className="faq-cta-actions">
              <a
                className="btn btn-primary btn-lg"
                href={`https://wa.me/${WHATSAPP}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                Chat on WhatsApp
              </a>
              <Link className="btn btn-secondary btn-lg" href="/contact">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
