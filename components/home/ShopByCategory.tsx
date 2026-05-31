import Link from "next/link";
import { CATEGORIES } from "@/data/categories";
import { Icon } from "@/components/icons";
import { CategoryCard } from "@/components/CategoryCard";

export function ShopByCategory() {
  return (
    <section className="section">
      <div className="wrap">
        <div className="sec-head">
          <div>
            <div className="eyebrow" style={{ marginBottom: 10 }}>
              Find their match
            </div>
            <h2 className="h2">Shop by Category</h2>
          </div>
          <Link className="link" href="/shop">
            View all <Icon name="arrowRight" size={17} />
          </Link>
        </div>
        <div className="cat-grid">
          {CATEGORIES.map((c) => (
            <CategoryCard key={c.slug} cat={c} />
          ))}
        </div>
      </div>
    </section>
  );
}
