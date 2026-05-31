"use client";

import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { PRODUCTS } from "@/data/products";
import { formatPrice } from "@/lib/format";
import { Icon } from "@/components/icons";
import { Placeholder } from "@/components/Placeholder";

export function SearchOverlay({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [q, setQ] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  useEffect(() => {
    if (open) {
      setQ("");
      const t = setTimeout(() => inputRef.current?.focus(), 80);
      return () => clearTimeout(t);
    }
  }, [open]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  const results = q.trim()
    ? PRODUCTS.filter((p) =>
        `${p.name} ${p.subtitle} ${p.categoryName}`.toLowerCase().includes(q.toLowerCase()),
      )
    : PRODUCTS.filter((p) => p.bestSeller);

  const goTo = (slug: string) => {
    onClose();
    router.push(`/product/${slug}`);
  };

  return (
    <div className={"search-overlay" + (open ? " open" : "")} onClick={onClose}>
      <div className="search-box" onClick={(e) => e.stopPropagation()}>
        <div className="search-field">
          <Icon name="search" className="muted" size={20} />
          <input
            ref={inputRef}
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Search products…"
            aria-label="Search products"
          />
          <button className="icon-btn" aria-label="Close search" onClick={onClose}>
            <Icon name="close" size={21} />
          </button>
        </div>
        <div className="search-results">
          {!q.trim() && (
            <div
              className="search-empty"
              style={{
                padding: "14px 12px 4px",
                textAlign: "left",
                fontSize: 12,
                fontWeight: 600,
                letterSpacing: ".06em",
                textTransform: "uppercase",
              }}
            >
              Popular products
            </div>
          )}
          {results.length === 0 && <div className="search-empty">No products match “{q}”.</div>}
          {results.map((p) => (
            <div key={p.slug} className="search-result" onClick={() => goTo(p.slug)}>
              <div className="thumb">
                <Placeholder tone={p.tone} paw={false} label="" />
              </div>
              <div>
                <div style={{ fontWeight: 600, color: "var(--navy)" }}>{p.name}</div>
                <div className="muted" style={{ fontSize: 13 }}>
                  {p.categoryName} · {formatPrice(p.price)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
