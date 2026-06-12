import type { Metadata } from "next";
import Link from "next/link";
import { getAllProducts, getAllCategories } from "@/lib/data";
import { PageHead } from "@/components/PageHead";
import { ProductCard } from "@/components/ProductCard";
import { SortSelect, type SortKey } from "@/components/shop/SortSelect";

type SearchParams = { category?: string; sort?: string };

export async function generateMetadata({ searchParams }: { searchParams: SearchParams }): Promise<Metadata> {
  const categories = await getAllCategories();
  const cat = categories.find((c) => c.slug === (searchParams.category ?? ""));
  return {
    title: cat ? `${cat.name} — Shop` : "Shop All Products",
    description: cat?.blurb ?? "Gentle, pet-safe care for every part of their routine.",
    alternates: { canonical: cat ? `/shop?category=${cat.slug}` : "/shop" },
  };
}

function shopHref(category: string, sort: SortKey) {
  const params = new URLSearchParams();
  if (category !== "all") params.set("category", category);
  if (sort !== "featured") params.set("sort", sort);
  const qs = params.toString();
  return qs ? `/shop?${qs}` : "/shop";
}

export default async function ShopPage({ searchParams }: { searchParams: SearchParams }) {
  const [products, categories] = await Promise.all([getAllProducts(), getAllCategories()]);

  const activeCat = categories.find((c) => c.slug === (searchParams.category ?? ""));
  const cat = activeCat?.slug ?? "all";
  const sortParam = searchParams.sort ?? "featured";
  const sort: SortKey = ["featured", "price-low", "price-high", "rating"].includes(sortParam)
    ? (sortParam as SortKey)
    : "featured";

  const list = cat === "all" ? [...products] : products.filter((p) => p.category === cat);
  if (sort === "price-low") list.sort((a, b) => a.price - b.price);
  else if (sort === "price-high") list.sort((a, b) => b.price - a.price);
  else if (sort === "rating") list.sort((a, b) => b.rating - a.rating);
  else list.sort((a, b) => Number(b.bestSeller) - Number(a.bestSeller));

  return (
    <main>
      <PageHead
        title={activeCat ? activeCat.name : "Shop All Products"}
        subtitle={activeCat ? activeCat.blurb : "Gentle, pet-safe care for every part of their routine."}
      />
      <div className="wrap section-sm" style={{ paddingTop: 0 }}>
        <div className="shop-toolbar">
          <div className="filter-pills">
            <Link className={"pill" + (cat === "all" ? " active" : "")} href={shopHref("all", sort)}>
              All
            </Link>
            {categories.map((c) => (
              <Link
                key={c.slug}
                className={"pill" + (cat === c.slug ? " active" : "")}
                href={shopHref(c.slug, sort)}
              >
                {c.name}
              </Link>
            ))}
          </div>
          <SortSelect value={sort} category={cat} />
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
