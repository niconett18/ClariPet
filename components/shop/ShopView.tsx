"use client";

import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { PRODUCTS } from "@/data/products";
import { CATEGORIES, getCategory } from "@/data/categories";
import { PageHead } from "@/components/PageHead";
import { ProductCard } from "@/components/ProductCard";

type SortKey = "featured" | "price-low" | "price-high" | "rating";

export function ShopView() {
  const router = useRouter();
  const params = useSearchParams();
  const queryCat = params.get("category") ?? "all";
  const [cat, setCat] = useState(queryCat);
  const [sort, setSort] = useState<SortKey>("featured");

  useEffect(() => {
    setCat(params.get("category") ?? "all");
  }, [params]);

  const selectCat = (c: string) => {
    setCat(c);
    router.push(c === "all" ? "/shop" : `/shop?category=${c}`);
  };

  let list = cat === "all" ? [...PRODUCTS] : PRODUCTS.filter((p) => p.category === cat);
  list = [...list];
  if (sort === "price-low") list.sort((a, b) => a.price - b.price);
  else if (sort === "price-high") list.sort((a, b) => b.price - a.price);
  else if (sort === "rating") list.sort((a, b) => b.rating - a.rating);
  else list.sort((a, b) => Number(b.bestSeller) - Number(a.bestSeller));

  const activeCat = getCategory(cat);

  return (
    <main>
      <PageHead
        title={activeCat ? activeCat.name : "Shop All Products"}
        subtitle={activeCat ? activeCat.blurb : "Gentle, pet-safe care for every part of their routine."}
      />
      <div className="wrap section-sm" style={{ paddingTop: 0 }}>
        <div className="shop-toolbar">
          <div className="filter-pills">
            <button className={"pill" + (cat === "all" ? " active" : "")} onClick={() => selectCat("all")}>
              All
            </button>
            {CATEGORIES.map((c) => (
              <button
                key={c.slug}
                className={"pill" + (cat === c.slug ? " active" : "")}
                onClick={() => selectCat(c.slug)}
              >
                {c.name}
              </button>
            ))}
          </div>
          <select
            className="sort-select"
            value={sort}
            onChange={(e) => setSort(e.target.value as SortKey)}
            aria-label="Sort products"
          >
            <option value="featured">Featured</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
            <option value="rating">Top Rated</option>
          </select>
        </div>
        <div className="muted" style={{ marginBottom: 20, fontSize: 14 }}>
          {list.length} product{list.length !== 1 ? "s" : ""}
        </div>
        <div className="prod-grid">
          {list.map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
        </div>
      </div>
    </main>
  );
}
