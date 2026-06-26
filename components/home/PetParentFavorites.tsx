import Link from "next/link";
import { Icon } from "@/components/icons";
import { BEST_SELLERS } from "@/data/products";
import { ProductCard } from "@/components/ProductCard";

export function PetParentFavorites() {
  return (
    <section className="section bg-sand" style={{ background: "var(--sand)" }}>
      <div className="wrap">
        <div className="sec-head reveal">
          <div>
            <h2 className="h2">Pet Parent Favorites</h2>
            <p className="lead" style={{ marginTop: 8 }}>The products our customers keep coming back for</p>
          </div>
          <Link className="link" href="/shop">
            View All Products <Icon name="arrowRight" size={17} />
          </Link>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 32 }}>
          {BEST_SELLERS.slice(0, 4).map((p, i) => (
            <div key={p.slug} className={`reveal reveal-d${Math.min(i + 1, 5)}`}>
              <ProductCard product={p} />
            </div>
          ))}
        </div>
        <div className="center reveal reveal-d5" style={{ marginTop: 48 }}>
          <p className="lead" style={{ maxWidth: 800, margin: "0 auto" }}>
            Mulai dari bau badan, bau mulut, tear stain, perawatan bulu, hingga masalah kulit, ClariPet hadir untuk membantu kebutuhan sehari-hari hewan peliharaan Anda.
          </p>
        </div>
      </div>
    </section>
  );
}

