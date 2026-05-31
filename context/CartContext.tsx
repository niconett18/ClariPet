"use client";

import {
  createContext, useContext, useState, useEffect, useRef, useCallback, type ReactNode,
} from "react";
import type { CartItem, Product } from "@/lib/types";
import { getProduct } from "@/data/products";

interface DetailedItem extends CartItem {
  product: Product;
}

interface CartContextValue {
  items: CartItem[];
  detailed: DetailedItem[];
  count: number;
  subtotal: number;
  toast: string | null;
  add: (slug: string, size?: string, qty?: number) => void;
  updateQty: (slug: string, size: string, qty: number) => void;
  remove: (slug: string, size: string) => void;
  clear: () => void;
}

const CartContext = createContext<CartContextValue | null>(null);

const STORAGE_KEY = "claripet_cart";

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [toast, setToast] = useState<string | null>(null);
  const [hydrated, setHydrated] = useState(false);
  const toastTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  // hydrate from localStorage on mount
  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) setItems(JSON.parse(raw) as CartItem[]);
    } catch {
      /* ignore */
    }
    setHydrated(true);
  }, []);

  // persist
  useEffect(() => {
    if (hydrated) localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  }, [items, hydrated]);

  const showToast = useCallback((msg: string) => {
    setToast(msg);
    if (toastTimer.current) clearTimeout(toastTimer.current);
    toastTimer.current = setTimeout(() => setToast(null), 2400);
  }, []);

  const add = useCallback(
    (slug: string, size?: string, qty = 1) => {
      const product = getProduct(slug);
      const sz = size ?? (product ? product.sizes[0] : "");
      setItems((prev) => {
        const idx = prev.findIndex((i) => i.slug === slug && i.size === sz);
        if (idx >= 0) {
          const next = [...prev];
          next[idx] = { ...next[idx], qty: next[idx].qty + qty };
          return next;
        }
        return [...prev, { slug, size: sz, qty }];
      });
      if (product) showToast(`${product.name} added to cart`);
    },
    [showToast],
  );

  const updateQty = useCallback((slug: string, size: string, qty: number) => {
    setItems((prev) =>
      prev.map((i) => (i.slug === slug && i.size === size ? { ...i, qty: Math.max(1, qty) } : i)),
    );
  }, []);

  const remove = useCallback((slug: string, size: string) => {
    setItems((prev) => prev.filter((i) => !(i.slug === slug && i.size === size)));
  }, []);

  const clear = useCallback(() => setItems([]), []);

  const count = items.reduce((s, i) => s + i.qty, 0);
  const detailed: DetailedItem[] = items
    .map((i) => ({ ...i, product: getProduct(i.slug) }))
    .filter((i): i is DetailedItem => Boolean(i.product));
  const subtotal = detailed.reduce((s, i) => s + i.product.price * i.qty, 0);

  return (
    <CartContext.Provider
      value={{ items, detailed, count, subtotal, toast, add, updateQty, remove, clear }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart(): CartContextValue {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within a CartProvider");
  return ctx;
}

export const FREE_SHIPPING_THRESHOLD = 250000;
export const SHIPPING_FEE = 20000;
