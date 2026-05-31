import Link from "next/link";
import { BEST_SELLERS } from "@/data/products";
import { Icon } from "@/components/icons";
import { ProductCard } from "@/components/ProductCard";

export function BestSellers() {
  return (
    <section className="section" style={{ paddingTop: 0 }}>
      <div className="wrap">
        <div className="sec-head">
          <div>
            <div className="eyebrow" style={{ marginBottom: 10 }}>
              Loved most
            </div>
            <h2 className="h2">Best Sellers</h2>
          </div>
          <Link className="link" href="/shop">
            View all products <Icon name="arrowRight" size={17} />
          </Link>
        </div>
        <div className="prod-grid">
          {BEST_SELLERS.map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
