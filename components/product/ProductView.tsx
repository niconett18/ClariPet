"use client";

import { useState } from "react";
import type { Product, Tone } from "@/lib/types";
import { PRODUCTS } from "@/data/products";
import { formatPrice } from "@/lib/format";
import { Icon } from "@/components/icons";
import { Placeholder } from "@/components/Placeholder";
import { Breadcrumb } from "@/components/Breadcrumb";
import { StarRating } from "@/components/ui/StarRating";
import { QuantityStepper } from "@/components/ui/QuantityStepper";
import { PrimaryButton } from "@/components/ui/PrimaryButton";
import { Accordion, type AccordionItem } from "@/components/ui/Accordion";
import { Mascot } from "@/components/Mascot";
import { ProductCard } from "@/components/ProductCard";
import { useCart } from "@/context/CartContext";

const FEATURE_ICONS = ["shield", "droplet", "clock", "pin"];

export function ProductView({ product }: { product: Product }) {
  const cart = useCart();
  const [activeThumb, setActiveThumb] = useState(0);
  const [size, setSize] = useState(product.sizes[0]);
  const [qty, setQty] = useState(1);
  const [wish, setWish] = useState(false);

  const thumbTones: Tone[] = [product.tone, "sky", "cream", "sage"];

  const related = PRODUCTS.filter((p) => p.slug !== product.slug && p.category === product.category).slice(0, 4);
  const fill =
    related.length < 4
      ? PRODUCTS.filter((p) => p.slug !== product.slug && !related.includes(p)).slice(0, 4 - related.length)
      : [];
  const relatedAll = [...related, ...fill];

  const accItems: AccordionItem[] = [
    {
      title: "Description",
      content: (
        <p>
          {product.short} Crafted in small batches in Indonesia using thoughtfully selected, pet-safe
          ingredients.
        </p>
      ),
    },
    { title: "Ingredients", content: <p>{product.ingredients}</p> },
    { title: "How to Use", content: <p>{product.howto}</p> },
    {
      title: "FAQ",
      content: (
        <ul>
          <li>Is it safe for daily use? Yes — it’s formulated to be gentle enough for everyday care.</li>
          <li>Can I use it on both dogs and cats? Yes, it’s suitable for both.</li>
          <li>When will I see results? Most pet parents notice a difference within 1–2 weeks.</li>
        </ul>
      ),
    },
    {
      title: `Reviews (${product.reviews})`,
      content: (
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 14 }}>
            <StarRating rating={product.rating} showCount={false} />
            <span style={{ fontWeight: 600, color: "var(--navy)" }}>{product.rating} out of 5</span>
            <span className="muted">· {product.reviews} reviews</span>
          </div>
          <p>
            “Honestly the easiest product to use and my pup actually doesn’t mind it. Noticed a real
            difference quickly.” — Verified Buyer
          </p>
        </div>
      ),
    },
  ];

  return (
    <main>
      <Breadcrumb
        trail={[
          { label: "Home", href: "/" },
          { label: product.categoryName, href: `/shop?category=${product.category}` },
          { label: product.name },
        ]}
      />
      <div className="wrap pdp">
        <div className="pdp-gallery">
          <div className="pdp-thumbs">
            {thumbTones.map((t, i) => (
              <button
                key={i}
                className={"pdp-thumb" + (activeThumb === i ? " active" : "")}
                onClick={() => setActiveThumb(i)}
                aria-label={`View image ${i + 1}`}
              >
                <Placeholder tone={t} paw={i === 0} label="" />
              </button>
            ))}
          </div>
          <div className="pdp-main">
            <Placeholder tone={thumbTones[activeThumb]} label={product.name} />
          </div>
        </div>

        <div className="pdp-info">
          <div className="eyebrow" style={{ marginBottom: 10 }}>
            {product.categoryName}
          </div>
          <h1 className="h2">{product.name}</h1>
          <div style={{ margin: "14px 0" }}>
            <StarRating rating={product.rating} reviews={product.reviews} />
          </div>
          <div className="pdp-price">{formatPrice(product.price)}</div>
          <p className="pdp-desc">{product.short}</p>

          <div>
            {product.benefits.map((b, i) => (
              <div className="benefit" key={i}>
                <span className="benefit-ic">
                  <Icon name="check" size={16} strokeWidth={3} />
                </span>
                <span>{b}</span>
              </div>
            ))}
          </div>

          <div style={{ marginTop: 22 }}>
            <div style={{ fontWeight: 600, color: "var(--navy)", marginBottom: 6 }}>Size</div>
            <div className="size-row" style={{ margin: 0 }}>
              {product.sizes.map((s) => (
                <button key={s} className={"size-opt" + (size === s ? " active" : "")} onClick={() => setSize(s)}>
                  {s}
                </button>
              ))}
            </div>
          </div>

          <div className="pdp-buy">
            <QuantityStepper value={qty} onChange={setQty} />
            <PrimaryButton size="lg" onClick={() => cart.add(product.slug, size, qty)}>
              Add to Cart
            </PrimaryButton>
            <button
              className={"wishlist" + (wish ? " active" : "")}
              style={{ position: "static", width: 50, height: 50, background: "var(--mist)" }}
              aria-label="Add to wishlist"
              onClick={() => setWish(!wish)}
            >
              <Icon name="heart" size={19} />
            </button>
          </div>

          <div className="feature-row">
            {product.features.map((f, i) => (
              <div className="feature-item" key={i}>
                <div className="fic">
                  <Icon name={FEATURE_ICONS[i] ?? "check"} size={22} />
                </div>
                <span>{f}</span>
              </div>
            ))}
          </div>

          <Mascot tone={product.tone} speech={product.mascot} sub="ClariPet care tip" />

          <div style={{ marginTop: 28 }}>
            <Accordion items={accItems} defaultOpen={0} />
          </div>
        </div>
      </div>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="sec-head">
            <h2 className="h3">You might also like</h2>
          </div>
          <div className="prod-grid">
            {relatedAll.map((p) => (
              <ProductCard key={p.slug} product={p} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
