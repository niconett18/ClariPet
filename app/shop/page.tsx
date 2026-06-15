import type { Metadata } from "next";
import Link from "next/link";
import { getAllProducts, getAllCategories } from "@/lib/data";
import { PageHead } from "@/components/PageHead";
import { ProductCard } from "@/components/ProductCard";
import { CategoryCard } from "@/components/CategoryCard";
import { Icon } from "@/components/icons";

export const metadata: Metadata = {
  title: "Shop ClariPet",
  description: "Everything your pet needs for grooming, wellness, hygiene and everyday care.",
  alternates: { canonical: "/shop" },
};

export default async function ShopPage() {
  const [products, categories] = await Promise.all([getAllProducts(), getAllCategories()]);
  const featured = [...products].sort((a, b) => Number(b.bestSeller) - Number(a.bestSeller));

  return (
    <main>
      <PageHead
        title="Shop ClariPet"
        subtitle="Everything your pet needs for grooming, wellness, hygiene and everyday care."
      />

      <section className="wrap section-sm" style={{ paddingTop: 0 }}>
        <div className="sec-head">
          <div>
            <div className="eyebrow" style={{ marginBottom: 10 }}>Browse</div>
            <h2 className="h2">Shop by Category</h2>
          </div>
        </div>
        <div className="cat-grid">
          {categories.map((c) => (
            <CategoryCard key={c.slug} cat={c} />
          ))}
        </div>
      </section>

      <section className="wrap section-sm" style={{ paddingTop: 0 }}>
        <div className="sec-head">
          <div>
            <div className="eyebrow" style={{ marginBottom: 10 }}>Everything in one place</div>
            <h2 className="h2">All Products</h2>
          </div>
          <span className="muted" style={{ fontSize: 14 }}>{products.length} products</span>
        </div>
        <div className="prod-grid">
          {featured.map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
        </div>
      </section>

      <section className="wrap section-sm" style={{ paddingTop: 0 }}>
        <div className="shop-banner">
          <div>
            <h2 className="h2" style={{ marginBottom: 10 }}>Helping You Help Them.</h2>
            <p className="lead" style={{ marginBottom: 22 }}>
              Not sure where to start? Take our quick quiz and we'll match your pet with the right care.
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
