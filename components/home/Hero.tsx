import Link from "next/link";
import Image from "next/image";
import { Placeholder } from "@/components/Placeholder";
import { PrimaryButton } from "@/components/ui/PrimaryButton";
import { SecondaryButton } from "@/components/ui/SecondaryButton";

export function Hero() {
  return (
    <section className="hero">
      <div className="hero-blob" aria-hidden="true" />
      <div className="wrap hero-grid">
        <div className="hero-copy">
          <div className="eyebrow" style={{ marginBottom: 16 }}>
            Premium Pet Care for Cats & Dogs
          </div>
          <h1 className="h-display">Helping You Helping Them.</h1>
          <p className="lead">
            Merawat hewan peliharaan seharusnya tidak terasa rumit. Karena itu, setiap produk ClariPet dirancang untuk membantu Anda merawat mereka dengan lebih mudah, lebih nyaman, dan lebih percaya diri setiap hari.
          </p>
          <div className="hero-actions">
            <Link href="/shop" tabIndex={-1} aria-hidden="true">
              <PrimaryButton size="lg" icon="arrowRight" aria-label="Shop Products">
                Shop Products
              </PrimaryButton>
            </Link>
            <Link href="/quiz" tabIndex={-1} aria-hidden="true">
              <SecondaryButton size="lg" aria-label="Find My Product">
                Find My Product
              </SecondaryButton>
            </Link>
          </div>
          <div style={{ marginTop: 24, fontSize: '0.875rem', display: 'flex', alignItems: 'center', gap: 6 }} aria-label="Trusted by pet parents across Indonesia">
             <span aria-hidden="true" role="img" aria-label="5 stars">★★★★★</span> Trusted by pet parents across Indonesia
          </div>
        </div>
        <div style={{ position: "relative" }}>
          <div className="hero-media">
            <div style={{ width: "100%", height: "100%", background: "var(--sky-50)", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <Image src="/images/brand/logo.png" alt="ClariPet" width={200} height={64} className="object-contain" />
            </div>
          </div>
          <div className="hero-bottle" style={{ left: "4%", background: "transparent" }}>
            <Image src="/images/products/baby-powder.png" alt="Baby Powder" fill style={{ objectFit: "contain" }} />
          </div>
          <div className="hero-bottle" style={{ left: "34%", bottom: "-12px", background: "transparent" }}>
            <Image src="/images/products/smell-clean.png" alt="Smell Clean" fill style={{ objectFit: "contain" }} />
          </div>
          <div className="hero-bottle" style={{ left: "64%", background: "transparent" }}>
            <Image src="/images/products/gentle-wash.png" alt="Gentle Wash" fill style={{ objectFit: "contain" }} />
          </div>
        </div>
      </div>
    </section>
  );
}
