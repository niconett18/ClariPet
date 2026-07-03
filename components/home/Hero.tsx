import Link from "next/link";
import Image from "next/image";
import { PrimaryButton } from "@/components/ui/PrimaryButton";
import { SecondaryButton } from "@/components/ui/SecondaryButton";

export function Hero() {
  return (
    <section className="hero" style={{ background: "#ffffff" }}>
      <div className="wrap hero-inner">
        {/* Image sits behind the copy and melts into white on the left edge */}
        <div className="hero-media" aria-hidden="false">
          <Image
            src="/images/hero-home.png"
            alt="A happy, healthy pet cared for with ClariPet premium grooming and wellness products"
            fill
            priority
            sizes="(max-width: 768px) 130vw, 900px"
            style={{ objectFit: "contain" }}
            className="hero-img"
          />
        </div>

        {/* Copy floats on top */}
        <div className="hero-copy">
          <span className="hero-eyebrow hero-mobile-hide">
            <span aria-hidden="true">🐾</span>
            PREMIUM PET CARE FOR CATS &amp; DOGS
          </span>
          <h1 className="h-display hero-title">
            Helping You<br />
            Help Them.<span className="hero-title-accent">♡</span>
          </h1>
          <p className="lead hero-sub hero-mobile-hide">
            Perawatan hewan peliharaan yang lembut dan efektif untuk memudahkan rutinitas grooming, menjaga kesehatan, dan mempererat ikatan setiap hari.
          </p>

          <div className="hero-actions">
            <Link
              href="/shop"
              tabIndex={-1}
              aria-hidden="true"
              style={{ "--primary-btn-bg": "#348dda", "--primary-btn-border": "#348dda" } as React.CSSProperties}
              className="hero-action-link"
            >
              <PrimaryButton size="lg" icon="arrowRight" aria-label="Shop Products" className="w-full justify-center">
                Shop Products
              </PrimaryButton>
            </Link>
            <Link
              href="/quiz"
              tabIndex={-1}
              aria-hidden="true"
              style={{ "--secondary-btn-bg": "transparent", "--secondary-btn-border": "#348dda", "--secondary-btn-text": "#348dda" } as React.CSSProperties}
              className="hero-action-link hero-mobile-hide"
            >
              <SecondaryButton size="lg" aria-label="Find My Product" className="w-full justify-center">
                Find My Product
              </SecondaryButton>
            </Link>
          </div>

          <div className="hero-trust hero-mobile-hide" aria-label="Trusted by pet parents across Indonesia.">
            <span aria-hidden="true" role="img" aria-label="5 stars" className="hero-stars">★★★★★</span>
            <span className="hero-trust-text">Trusted by pet parents across Indonesia.</span>
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{
        __html: `
        /* ---------- Layout ---------- */
        .hero { position: relative; overflow: hidden; }
        .hero-inner {
          position: relative;
          display: grid;
          grid-template-columns: 1fr;
          padding: 28px 24px 56px;
          min-height: calc(100vh - var(--nav-h, 76px));
        }

        /* ---------- Image: behind copy, melts into white ---------- */
        .hero-media {
          position: absolute;
          top: 0; right: 0; bottom: 0;
          width: 100%;
          z-index: 0;
          pointer-events: none;
        }
        .hero-img {
          /* Default (desktop): fade the left edge into white so the image merges with the copy */
          -webkit-mask-image: linear-gradient(to right, transparent 0%, rgba(0,0,0,0.4) 35%, black 65%, black 100%);
          mask-image: linear-gradient(to right, transparent 0%, rgba(0,0,0,0.4) 35%, black 65%, black 100%);
        }

        /* ---------- Copy on top ---------- */
        .hero-copy {
          position: relative;
          z-index: 2;
          max-width: 640px;
          padding-top: 8px;
        }

        /* ---------- Eyebrow ---------- */
        .hero-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: #fff;
          border: 1px solid rgba(75,159,227,0.22);
          color: #2c7cb8;
          font-weight: 700;
          font-size: 0.72rem;
          letter-spacing: 0.08em;
          padding: 7px 13px;
          border-radius: 999px;
          margin-bottom: 20px;
        }

        /* ---------- Title ---------- */
        .hero-title { color: var(--navy); font-weight: 800; line-height: 1.02; margin-bottom: 22px; letter-spacing: -0.02em; }
        .hero-title-accent { color: #8eb6dc; }
        .h-display.hero-title { font-size: clamp(2.6rem, 10vw, 3.5rem); }

        /* ---------- Subtext ---------- */
        .hero-sub { color: var(--navy); max-width: 520px; opacity: 0.88; font-size: 1.02rem; line-height: 1.6; margin: 0; }

        /* ---------- Actions ---------- */
        .hero-actions { display: flex; flex-direction: column; gap: 12px; margin-top: 26px; }
        .hero-action-link { width: 100%; }

        /* ---------- Trust row ---------- */
        .hero-trust { display: flex; flex-direction: row; align-items: center; gap: 10px; margin-top: 24px; color: var(--navy); font-weight: 600; font-size: 0.85rem; }
        .hero-stars { color: #fbb03b; letter-spacing: 2px; font-size: 1.1rem; }
        .hero-trust-text { opacity: 0.85; }

        /* ---------- Mobile: full-bg image, minimal copy pinned to bottom ---------- */
        @media (max-width: 767px) {
          .hero-inner {
            display: block;
            padding: 0;
            min-height: calc(100vh - var(--nav-h, 76px));
            position: relative;
          }
          .hero-media {
            position: absolute;
            inset: 0;
            width: 100%;
            height: 100%;
          }
          .hero-img {
            object-fit: contain !important;
            object-position: top center !important;
            -webkit-mask-image: none !important;
            mask-image: none !important;
          }
          /* Soft fade at the bottom so headline sits cleanly over white */
          .hero::after {
            content: "";
            position: absolute;
            left: 0; right: 0; bottom: 0;
            height: 40%;
            background: linear-gradient(to top, #ffffff 0%, rgba(255,255,255,0.85) 40%, transparent 100%);
            z-index: 1;
            pointer-events: none;
          }
          .hero-copy {
            position: absolute;
            left: 0; right: 0; bottom: 0;
            z-index: 2;
            max-width: none;
            padding: 0 24px max(28px, env(safe-area-inset-bottom));
            padding-top: 40px;
          }
          .hero-mobile-hide { display: none !important; }
          .hero-title {
            font-size: clamp(2.5rem, 11vw, 3.4rem) !important;
            margin-bottom: 18px !important;
            text-shadow: 0 2px 24px rgba(255,255,255,0.6);
          }
          .hero-actions {
            flex-direction: row !important;
            gap: 12px;
            margin-top: 18px !important;
          }
          .hero-action-link { width: auto; flex: 1; }
        }

        /* ---------- Desktop ---------- */
        @media (min-width: 768px) {
          .hero-inner { padding: 48px 28px 64px; }
          .hero-media { width: 62%; }
          .hero-eyebrow { font-size: 0.85rem; padding: 8px 15px; margin-bottom: 24px; }
          .h-display.hero-title { font-size: clamp(3.25rem, 5vw, 5rem); }
          .hero-sub { font-size: 1.2rem; max-width: 560px; }
          .hero-actions { flex-direction: row; gap: 14px; margin-top: 32px; }
          .hero-action-link { width: auto; }
          .hero-trust { font-size: 1rem; margin-top: 32px; }
          .hero-stars { font-size: 1.25rem; }
          .hero-copy { padding-top: 12px; }
        }

        /* ---------- Large desktop ---------- */
        @media (min-width: 1200px) {
          .hero-inner { padding: 56px 28px 72px; }
          .h-display.hero-title { font-size: clamp(4rem, 5.2vw, 5.5rem); }
          .hero-media { width: 58%; }
        }

        /* ---------- Small phones ---------- */
        @media (max-width: 380px) {
          .hero-eyebrow { font-size: 0.68rem; padding: 6px 11px; }
          .h-display.hero-title { font-size: 2.35rem; }
          .hero-sub { font-size: 0.95rem; }
        }
        `
      }} />
    </section>
  );
}
