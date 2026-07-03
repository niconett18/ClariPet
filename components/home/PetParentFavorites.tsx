import Link from "next/link";
import { Icon } from "@/components/icons";
import { BEST_SELLERS } from "@/data/products";
import dynamic from "next/dynamic";

const FavoriteCardBody = dynamic(() => import("./FavoriteCardBody").then(m => m.FavoriteCardBody));

const FAVORITE_TAGS = [
  "Most Loved",
  "Visible Results",
  "Customer Favorite",
  "Everyday Essential",
];

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

        <div className="favorites-grid">
          {FAVORITE_TAGS.map((tag, i) => {
            const p = BEST_SELLERS[i];
            if (!p) return null;
            
            // Determine custom styling per product
            let bg = "#fff";
            let imgSrc = p.images?.[0]?.url;
            let objFit = "contain" as any;
            let imgPad = "16px";

            if (p.slug === "claripet-botanica-bloom") {
              bg = "#fbf6f6";
              imgSrc = "/images/products/botanica-bloom-1.png";
              objFit = "cover";
              imgPad = "0";
            } else if (p.slug === "claripet-breath") {
              bg = "#e5f1ec";
              imgSrc = "/images/products/breath-1.png";
              objFit = "cover";
              imgPad = "0";
            } else if (p.slug === "claripet-tear-stain-remover") {
              bg = "#FBF0E0";
              imgSrc = "/images/products/tear-stain-1.png";
              objFit = "cover";
              imgPad = "0";
            } else if (p.slug === "claripet-vitabulu-beauty-shampoo") {
              bg = "#FDE8E8";
              imgSrc = "/images/products/vitabulu-beauty-shampoo-1.png";
              objFit = "cover";
              imgPad = "0";
            }

            return (
              <div key={p.slug} className={`prod-card reveal reveal-d${Math.min(i + 1, 5)}`} style={{ backgroundColor: bg, height: "100%" }}>
                <Link href={`/product/${p.slug}`} className="prod-media" style={{ display: "block", aspectRatio: "1/1", position: "relative", backgroundColor: "transparent" }}>
                  <span className="prod-tag tag" style={{ 
                    position: "absolute", 
                    top: 14, 
                    left: 14, 
                    zIndex: 2, 
                    background: "#FCE7C8", 
                    color: "#8B6B42", 
                    padding: "4px 10px", 
                    borderRadius: 99, 
                    fontSize: 12, 
                    fontWeight: 600 
                  }}>
                    {tag}
                  </span>
                  {imgSrc && (
                    <img 
                      src={imgSrc} 
                      alt={p.name} 
                      style={{ 
                        width: "100%", 
                        height: "100%", 
                        objectFit: objFit, 
                        padding: imgPad 
                      }} 
                    />
                  )}
                </Link>
                <FavoriteCardBody product={p} />
              </div>
            );
          })}
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

