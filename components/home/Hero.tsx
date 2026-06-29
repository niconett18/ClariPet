import Link from "next/link";
import { PrimaryButton } from "@/components/ui/PrimaryButton";
import { SecondaryButton } from "@/components/ui/SecondaryButton";

export function Hero() {
  return (
    <section 
      className="hero" 
      style={{ 
        position: "relative", 
        minHeight: "600px", 
        display: "flex", 
        alignItems: "center", 
        overflow: "hidden",
        backgroundImage: "url('/images/hero-home.png')",
        backgroundSize: "cover",
        backgroundPosition: "center right",
      }}
    >
      <div 
        style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(to right, rgba(255,255,255,1) 0%, rgba(255,255,255,0.8) 40%, rgba(255,255,255,0) 100%)",
          zIndex: 0
        }}
      />
      <div className="wrap" style={{ position: "relative", zIndex: 1, width: "100%", display: "flex", alignItems: "center", minHeight: "600px" }}>
        <div className="hero-copy" style={{ flex: "1", padding: "60px 0", maxWidth: "600px", paddingRight: "40px" }}>
          <div className="eyebrow" style={{ marginBottom: 16, color: "#348dda" }}>
            PREMIUM PET CARE FOR CATS & DOGS <span style={{ fontSize: "1.2em", marginLeft: 4 }}>🐾</span>
          </div>
          <h1 className="h-display" style={{ color: "var(--navy)" }}>
            Helping You<br />Help Them. <span style={{ color: "#8eb6dc", fontSize: "0.8em" }}>♡</span>
          </h1>
          <p className="lead" style={{ color: "var(--navy)", maxWidth: "480px" }}>
            Perawatan hewan peliharaan yang lembut dan efektif untuk memudahkan rutinitas grooming, menjaga kesehatan, dan mempererat ikatan setiap hari.
          </p>
          <div className="hero-actions" style={{ display: 'flex', gap: '16px', marginTop: '32px' }}>
            <Link href="/shop" tabIndex={-1} aria-hidden="true" style={{ "--primary-btn-bg": "#348dda", "--primary-btn-border": "#348dda" } as React.CSSProperties}>
              <PrimaryButton size="lg" icon="arrowRight" aria-label="Shop Products">
                Shop Products
              </PrimaryButton>
            </Link>
            <Link href="/quiz" tabIndex={-1} aria-hidden="true" style={{ "--secondary-btn-bg": "transparent", "--secondary-btn-border": "#348dda", "--secondary-btn-text": "#348dda" } as React.CSSProperties}>
              <SecondaryButton size="lg" aria-label="Find My Product">
                Find My Product
              </SecondaryButton>
            </Link>
          </div>
          <div style={{ marginTop: 24, fontSize: '0.875rem', display: 'flex', alignItems: 'center', gap: 8, color: "var(--navy)", fontWeight: 500 }} aria-label="Trusted by pet parents across Indonesia.">
             <span aria-hidden="true" role="img" aria-label="5 stars" style={{ color: "#fbb03b", fontSize: "1.2rem", letterSpacing: "2px" }}>★★★★★</span> Trusted by pet parents across Indonesia.
          </div>
        </div>
      </div>
    </section>
  );
}
