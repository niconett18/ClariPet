import Link from "next/link";
import { PrimaryButton } from "@/components/ui/PrimaryButton";
import { SecondaryButton } from "@/components/ui/SecondaryButton";

export function Hero() {
  return (
    <section 
      className="hero" 
      style={{ 
        position: "relative", 
        minHeight: "700px", 
        display: "flex", 
        alignItems: "center", 
        overflow: "hidden",
        backgroundColor: "#f4f8fb"
      }}
    >
      {/* Background Image Container with Gradient Mask */}
      <div 
        style={{
          position: "absolute",
          top: 0,
          right: 0,
          bottom: 0,
          left: "30%", // Start image partway through to leave solid color for text
          backgroundImage: "url('/images/hero-home.png')",
          backgroundSize: "cover",
          backgroundPosition: "center 20%",
          maskImage: "linear-gradient(to right, transparent, black 30%)",
          WebkitMaskImage: "linear-gradient(to right, transparent, black 30%)",
          zIndex: 0
        }}
      />
      <div className="wrap" style={{ position: "relative", zIndex: 1, width: "100%", display: "flex", alignItems: "center", minHeight: "700px" }}>
        <div className="hero-copy" style={{ flex: "1", padding: "80px 0", maxWidth: "650px", paddingRight: "40px" }}>
          <div className="eyebrow" style={{ marginBottom: 20, color: "#4B9FE3", fontWeight: 600, letterSpacing: "1px", fontSize: "0.85rem", display: "flex", alignItems: "center", gap: "8px" }}>
            PREMIUM PET CARE FOR CATS & DOGS <span style={{ fontSize: "1.4em", color: "#8eb6dc" }}>🐾</span>
          </div>
          <h1 className="h-display" style={{ color: "var(--navy)", fontSize: "4.5rem", lineHeight: 1.1, marginBottom: "24px" }}>
            Helping You<br />Help Them.<span style={{ color: "#8eb6dc" }}>♡</span>
          </h1>
          <p className="lead" style={{ color: "var(--navy)", maxWidth: "520px", fontSize: "1.1rem", lineHeight: 1.6, opacity: 0.9 }}>
            Perawatan hewan peliharaan yang lembut dan efektif untuk memudahkan rutinitas grooming, menjaga kesehatan, dan mempererat ikatan setiap hari.
          </p>
          <div className="hero-actions" style={{ display: 'flex', gap: '16px', marginTop: '40px' }}>
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
          <div style={{ marginTop: 32, fontSize: '0.875rem', display: 'flex', alignItems: 'center', gap: 12, color: "var(--navy)", fontWeight: 500 }} aria-label="Trusted by pet parents across Indonesia.">
             <span aria-hidden="true" role="img" aria-label="5 stars" style={{ color: "#fbb03b", fontSize: "1.2rem", letterSpacing: "2px", display: "flex" }}>★★★★★</span> <span style={{ opacity: 0.8 }}>Trusted by pet parents across Indonesia.</span>
          </div>
        </div>
      </div>
    </section>
  );
}
