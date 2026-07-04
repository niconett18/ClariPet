import type { Metadata } from "next";
import Link from "next/link";
import { getAllProducts, getAllCategories, getBestSellers } from "@/lib/data";
import { PageHead } from "@/components/PageHead";
import { ProductCard } from "@/components/ProductCard";
import { CategoryCard } from "@/components/CategoryCard";
import { Icon } from "@/components/icons";
import { ShopCategoryPills } from "@/components/shop/ShopCategoryPills";

export const metadata: Metadata = {
  title: "Shop ClariPet",
  description:
    "Everything your pet needs for grooming, wellness, hygiene and everyday care.",
  alternates: { canonical: "/shop" },
  openGraph: {
    title: "Shop ClariPet",
    description:
      "Everything your pet needs for grooming, wellness, hygiene and everyday care.",
    url: "/shop",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shop ClariPet",
    description:
      "Everything your pet needs for grooming, wellness, hygiene and everyday care.",
  },
};

export default async function ShopPage() {
  const [products, categories, bestSellers] = await Promise.all([
    getAllProducts(),
    getAllCategories(),
    getBestSellers(),
  ]);
  const featured = [...products].sort(
    (a, b) => Number(b.bestSeller) - Number(a.bestSeller),
  );

  return (
    <main>
      <ShopCategoryPills />
      <PageHead
        title="Shop ClariPet"
        subtitle="Everything your pet needs for grooming, wellness, hygiene and everyday care."
      />

      {/* Mobile: Hot & Trending first (horizontal carousel of best sellers) */}
      <section className="shop-mobile-featured wrap section-sm" style={{ paddingTop: 0 }}>
        <div className="sec-head">
          <div>
            <div className="eyebrow" style={{ marginBottom: 10 }}>
              Hot &amp; Trending
            </div>
            <h2 className="h2">Featured Products</h2>
          </div>
        </div>
        <div className="prod-grid shop-featured-row">
          {bestSellers.map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
        </div>
        <Link href="#all-products" className="btn btn-primary btn-block shop-all-btn">
          View All Products <Icon name="arrowRight" size={18} />
        </Link>
      </section>

      {/* Desktop: Categories first (original order) */}
      <section className="wrap section-sm shop-desktop-categories" style={{ paddingTop: 0 }}>
        <div className="sec-head">
          <div>
            <div className="eyebrow" style={{ marginBottom: 10 }}>
              Browse
            </div>
            <h2 className="h2">Shop by Category</h2>
          </div>
        </div>
        <div className="cat-grid">
          {categories.map((c) => (
            <CategoryCard key={c.slug} cat={c} />
          ))}
        </div>
      </section>

      {/* Mobile: Categories as a small side-scroll carousel */}
      <section className="shop-mobile-categories wrap section-sm" style={{ paddingTop: 0 }}>
        <div className="sec-head">
          <div>
            <div className="eyebrow" style={{ marginBottom: 10 }}>
              Browse
            </div>
            <h2 className="h2">Shop by Category</h2>
          </div>
        </div>
        <div className="cat-scroll">
          {categories.map((c) => (
            <CategoryCard key={c.slug} cat={c} />
          ))}
        </div>
      </section>

      <section id="all-products" className="wrap section-sm" style={{ paddingTop: 0, scrollMarginTop: '90px' }}>
        <div className="sec-head">
          <div>
            <div className="eyebrow" style={{ marginBottom: 10 }}>
              Everything in one place
            </div>
            <h2 className="h2">All Products</h2>
          </div>
          <span className="muted" style={{ fontSize: 14 }}>
            {products.length} products
          </span>
        </div>
        <div className="prod-grid prod-grid-vertical">
          {featured.map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
        </div>
      </section>

      <section className="wrap section-sm" style={{ paddingTop: 0 }}>
        <div className="shop-banner">
          <div>
            <h2 className="h2" style={{ marginBottom: 10 }}>
              Helping You Help Them.
            </h2>
            <p className="lead" style={{ marginBottom: 22 }}>
              Not sure where to start? Take our quick quiz and we&apos;ll match
              your pet with the right care.
            </p>
            <Link href="/quiz" className="btn btn-primary btn-lg">
              <Icon name="sparkle" size={18} /> Find My Product
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
