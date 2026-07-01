import Link from "next/link";
import { PrimaryButton } from "@/components/ui/PrimaryButton";
import { SecondaryButton } from "@/components/ui/SecondaryButton";

export function Hero() {
  return (
    <section 
      className="hero relative flex items-center overflow-hidden min-h-[calc(100vh-var(--nav-h,76px))]" 
      style={{ backgroundColor: "#f4f8fb" }}
    >
      {/* Background Image Container with Gradient Mask */}
      <div 
        className="hero-bg"
        style={{
          position: "absolute",
          top: 0,
          right: 0,
          bottom: 0,
          zIndex: 0,
          backgroundImage: "url('/images/hero-home.png')",
          backgroundSize: "cover",
          backgroundPosition: "right center",
          backgroundRepeat: "no-repeat",
          maskImage: "linear-gradient(to right, transparent, black 30%)",
          WebkitMaskImage: "linear-gradient(to right, transparent, black 30%)",
        }}
      />
      
      {/* Mobile fade overlay to ensure text readability */}
      <div className="absolute inset-0 bg-white/40 md:bg-transparent z-[1]" />
      
      <div 
        className="hero-inner relative z-10 w-full max-w-[1440px] ml-0 mr-auto flex items-center justify-start min-h-[calc(100vh-var(--nav-h,76px))]"
      >
        <div className="hero-copy w-full max-w-[800px]">
          <div className="eyebrow flex items-center gap-2 mb-6 text-[#4B9FE3] font-bold tracking-[1.5px]">
            PREMIUM PET CARE FOR CATS & DOGS <span className="text-xl md:text-2xl text-[#8eb6dc]">🐾</span>
          </div>
          <h1 className="h-display" style={{ color: "var(--navy)", fontWeight: 800, lineHeight: 1.05, marginBottom: "28px" }}>
            Helping You<br />Help Them.<span style={{ color: "#8eb6dc" }}>♡</span>
          </h1>
          <p className="lead" style={{ color: "var(--navy)", maxWidth: "600px", lineHeight: 1.6, opacity: 0.9 }}>
            Perawatan hewan peliharaan yang lembut dan efektif untuk memudahkan rutinitas grooming, menjaga kesehatan, dan mempererat ikatan setiap hari.
          </p>
          <div className="hero-actions flex flex-col sm:flex-row gap-4 mt-8 md:mt-12">
            <Link href="/shop" tabIndex={-1} aria-hidden="true" style={{ "--primary-btn-bg": "#348dda", "--primary-btn-border": "#348dda" } as React.CSSProperties} className="w-full sm:w-auto">
              <PrimaryButton size="lg" icon="arrowRight" aria-label="Shop Products" className="w-full justify-center">
                Shop Products
              </PrimaryButton>
            </Link>
            <Link href="/quiz" tabIndex={-1} aria-hidden="true" style={{ "--secondary-btn-bg": "transparent", "--secondary-btn-border": "#348dda", "--secondary-btn-text": "#348dda" } as React.CSSProperties} className="w-full sm:w-auto">
              <SecondaryButton size="lg" aria-label="Find My Product" className="w-full justify-center">
                Find My Product
              </SecondaryButton>
            </Link>
          </div>
          <div className="trust-row mt-8 md:mt-10 flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-3 text-[var(--navy)] font-medium" aria-label="Trusted by pet parents across Indonesia.">
             <span aria-hidden="true" role="img" aria-label="5 stars" className="text-[#fbb03b] tracking-[2px] flex">★★★★★</span> <span className="opacity-80">Trusted by pet parents across Indonesia.</span>
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{
        __html: `
        /* Default mobile styles */
        .hero-bg {
          left: 0;
          opacity: 0.3; /* lower opacity on mobile to act as background texture */
        }
        .hero-inner {
          padding-left: 24px;
          padding-right: 24px;
        }
        .hero-copy {
          padding: 40px 0;
          margin-top: 24px;
        }
        .eyebrow {
          font-size: 0.875rem;
        }
        .h-display {
          font-size: clamp(3rem, 12vw, 4rem);
        }
        .lead {
          font-size: 1.1rem;
        }
        .trust-row {
          font-size: 0.875rem;
        }
        .trust-row > span:first-child {
          font-size: 1.2rem;
        }

        /* Desktop styles (min-width 768px) */
        @media (min-width: 768px) {
          .hero-bg {
            left: 30%;
            opacity: 1; /* full opacity on desktop */
          }
          .hero-inner {
            padding-left: clamp(97px, 14vw, 217px);
            padding-right: 24px;
          }
          .hero-copy {
            padding: 80px 0;
            margin-top: 0;
          }
          .eyebrow {
            font-size: 1rem;
          }
          .h-display {
            font-size: clamp(4.5rem, 6vw, 6rem);
          }
          .lead {
            font-size: 1.3rem;
          }
          .trust-row {
            font-size: 1rem;
          }
          .trust-row > span:first-child {
            font-size: 1.3rem;
          }
        }
        `
      }} />
    </section>
  );
}
