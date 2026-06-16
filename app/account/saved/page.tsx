"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { useAuth } from "@/context/AuthContext";
import { Icon } from "@/components/icons";
import { AccountShell } from "@/components/account/AccountShell";
import { ProductCard } from "@/components/ProductCard";
import type { Product } from "@/lib/types";

export default function SavedPage() {
  return (
    <AccountShell title="Saved Items">
      <SavedList />
    </AccountShell>
  );
}

function SavedList() {
  const { user, loading: authLoading } = useAuth();
  const [slugs, setSlugs] = useState<string[]>([]);
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  const load = useCallback(async () => {
    const [wRes, pRes] = await Promise.all([fetch("/api/wishlist"), fetch("/api/products")]);
    const [w, p] = await Promise.all([wRes.json(), pRes.json()]);
    if (w.success) setSlugs(w.data);
    if (p.success) setProducts(p.data);
    setLoading(false);
  }, []);

  useEffect(() => {
    if (!authLoading && user) load();
  }, [authLoading, user, load]);

  const remove = async (slug: string) => {
    await fetch(`/api/wishlist?slug=${encodeURIComponent(slug)}`, { method: "DELETE" });
    setSlugs((s) => s.filter((x) => x !== slug));
  };

  if (loading) return <p className="muted">Loading your saved items…</p>;

  const saved = slugs
    .map((slug) => products.find((p) => p.slug === slug))
    .filter((p): p is Product => Boolean(p));

  if (saved.length === 0) {
    return (
      <div className="empty-state">
        <div className="ec"><Icon name="heart" size={32} /></div>
        <h3 className="h3" style={{ marginBottom: 8 }}>No saved items yet</h3>
        <p className="muted" style={{ marginBottom: 18 }}>
          Tap the heart on any product to save it here for later.
        </p>
        <Link href="/shop" className="btn btn-primary">Browse products</Link>
      </div>
    );
  }

  return (
    <div className="prod-grid">
      {saved.map((p) => (
        <div key={p.slug} className="saved-wrap">
          <ProductCard product={p} />
          <button className="saved-remove" onClick={() => remove(p.slug)}>
            <Icon name="trash" size={15} /> Remove
          </button>
        </div>
      ))}
    </div>
  );
}
