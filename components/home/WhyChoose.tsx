"use client";

import { useEffect, useRef, useState } from "react";
import {
  ShieldCheck,
  FlaskConical,
  Heart,
  HeartHandshake,
  HandHeart,
  Sparkles,
  CalendarHeart,
  MapPin,
} from "lucide-react";

/* ------------------------------------------------------------------ */
/*  Feature data                                                       */
/* ------------------------------------------------------------------ */

const TOP_FEATURES = [
  {
    icon: ShieldCheck,
    bg: "bg-indigo-50",
    color: "text-indigo-500",
    title: "Pet Safe Formulations",
    desc: "Gentle and safe for pets of all ages and breeds.",
  },
  {
    icon: FlaskConical,
    bg: "bg-emerald-50",
    color: "text-emerald-600",
    title: "Premium Ingredients",
    desc: "Carefully selected, high-quality ingredients for the best results.",
  },
  {
    icon: Heart,
    bg: "bg-rose-50",
    color: "text-rose-500",
    title: "Made in Indonesia",
    desc: "Proudly made locally with global quality standards.",
  },
  {
    icon: HeartHandshake,
    bg: "bg-blue-50",
    color: "text-blue-500",
    title: "Trusted by Thousands",
    desc: "Real pet parents, real stories, real love and trust.",
  },
];

const BOTTOM_FEATURES = [
  {
    icon: HandHeart,
    title: "Crafted With Care",
    desc: "Not mass-produced, every ClariPet product is thoughtfully developed around real pet care needs.",
  },
  {
    icon: Sparkles,
    title: "Beyond Just Fragrance",
    desc: "From oral care to skin support, ClariPet is designed as a complete pet care ecosystem.",
  },
  {
    icon: CalendarHeart,
    title: "Everyday Friendly",
    desc: "Gentle enough to become part of your routine, not just used when problems appear.",
  },
];

/* ------------------------------------------------------------------ */
/*  Decorative doodle SVGs                                             */
/* ------------------------------------------------------------------ */

function DoodlePaw() {
  return (
    <svg width="64" height="64" viewBox="0 0 64 64" fill="none" className="select-none pointer-events-none" aria-hidden>
      <ellipse cx="34" cy="40" rx="10" ry="9" stroke="#818cf8" strokeWidth="1.5" fill="none" opacity="0.18" />
      <ellipse cx="21" cy="28" rx="5" ry="6" stroke="#818cf8" strokeWidth="1.5" fill="none" opacity="0.18" />
      <ellipse cx="34" cy="22" rx="5" ry="6" stroke="#818cf8" strokeWidth="1.5" fill="none" opacity="0.18" />
      <ellipse cx="47" cy="28" rx="5" ry="6" stroke="#818cf8" strokeWidth="1.5" fill="none" opacity="0.18" />
      <ellipse cx="48" cy="44" rx="4" ry="5" stroke="#818cf8" strokeWidth="1.5" fill="none" opacity="0.18" />
    </svg>
  );
}

function DoodleHeartLine() {
  return (
    <svg width="80" height="64" viewBox="0 0 80 64" fill="none" className="select-none pointer-events-none" aria-hidden>
      <path d="M8 44 Q28 8 48 32 Q60 18 72 28" stroke="#818cf8" strokeWidth="1.5" strokeDasharray="4 3" fill="none" opacity="0.18" />
      <path d="M66 24 C66 18 72 14 74 18 C76 14 82 18 82 24 C82 30 74 36 74 36 C74 36 66 30 66 24Z" stroke="#818cf8" strokeWidth="1.3" fill="none" opacity="0.18" transform="translate(-6,0)" />
    </svg>
  );
}

function DoodleSparkle() {
  return (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" className="select-none pointer-events-none" aria-hidden>
      <path d="M24 4 L26 18 L40 20 L26 22 L24 36 L22 22 L8 20 L22 18 Z" stroke="#818cf8" strokeWidth="1.3" fill="none" opacity="0.18" />
    </svg>
  );
}

function DoodleMolecule() {
  return (
    <svg width="64" height="56" viewBox="0 0 64 56" fill="none" className="select-none pointer-events-none" aria-hidden>
      <circle cx="12" cy="12" r="5" stroke="#818cf8" strokeWidth="1.3" fill="none" opacity="0.18" />
      <circle cx="32" cy="6" r="5" stroke="#818cf8" strokeWidth="1.3" fill="none" opacity="0.18" />
      <circle cx="50" cy="14" r="5" stroke="#818cf8" strokeWidth="1.3" fill="none" opacity="0.18" />
      <circle cx="20" cy="30" r="5" stroke="#818cf8" strokeWidth="1.3" fill="none" opacity="0.18" />
      <circle cx="42" cy="28" r="5" stroke="#818cf8" strokeWidth="1.3" fill="none" opacity="0.18" />
      <line x1="16" y1="16" x2="20" y2="26" stroke="#818cf8" strokeWidth="1.3" opacity="0.18" />
      <line x1="28" y1="10" x2="24" y2="26" stroke="#818cf8" strokeWidth="1.3" opacity="0.18" />
      <line x1="36" y1="10" x2="38" y2="24" stroke="#818cf8" strokeWidth="1.3" opacity="0.18" />
      <line x1="46" y1="18" x2="38" y2="24" stroke="#818cf8" strokeWidth="1.3" opacity="0.18" />
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/*  Botanical decorative SVGs                                          */
/* ------------------------------------------------------------------ */

function BotanicalLeft() {
  return (
    <svg width="200" height="400" viewBox="0 0 200 400" fill="none" className="select-none pointer-events-none" aria-hidden>
      <path d="M40 400 Q50 320 30 240" stroke="#C5B6E0" strokeWidth="1.8" fill="none" opacity="0.35" />
      <path d="M50 400 Q60 310 45 220" stroke="#C5B6E0" strokeWidth="1.4" fill="none" opacity="0.3" />
      <ellipse cx="30" cy="245" rx="6" ry="8" stroke="#C5B6E0" strokeWidth="1.2" fill="none" opacity="0.35" />
      <ellipse cx="35" cy="260" rx="5" ry="7" stroke="#C5B6E0" strokeWidth="1.2" fill="none" opacity="0.3" />
      <ellipse cx="25" cy="270" rx="5" ry="7" stroke="#C5B6E0" strokeWidth="1.2" fill="none" opacity="0.3" />
      <ellipse cx="38" cy="280" rx="4" ry="6" stroke="#C5B6E0" strokeWidth="1.2" fill="none" opacity="0.25" />
      <ellipse cx="45" cy="225" rx="5" ry="7" stroke="#C5B6E0" strokeWidth="1.2" fill="none" opacity="0.3" />
      <ellipse cx="42" cy="210" rx="4" ry="6" stroke="#C5B6E0" strokeWidth="1.2" fill="none" opacity="0.25" />
      <ellipse cx="48" cy="240" rx="4" ry="6" stroke="#C5B6E0" strokeWidth="1.2" fill="none" opacity="0.25" />
      <path d="M60 360 Q75 350 70 335" stroke="#B5C8B5" strokeWidth="1.5" fill="none" opacity="0.25" />
      <path d="M65 330 Q80 320 75 305" stroke="#B5C8B5" strokeWidth="1.5" fill="none" opacity="0.25" />
      <path d="M55 310 Q70 300 65 285" stroke="#B5C8B5" strokeWidth="1.5" fill="none" opacity="0.2" />
    </svg>
  );
}

function BotanicalRight() {
  return (
    <svg width="200" height="400" viewBox="0 0 200 400" fill="none" className="select-none pointer-events-none" aria-hidden>
      <path d="M160 400 Q155 310 165 230" stroke="#A8C8A8" strokeWidth="1.8" fill="none" opacity="0.35" />
      <path d="M150 400 Q148 320 155 250" stroke="#A8C8A8" strokeWidth="1.4" fill="none" opacity="0.3" />
      <ellipse cx="170" cy="370" rx="14" ry="5" stroke="#A8C8A8" strokeWidth="1.3" fill="none" opacity="0.3" transform="rotate(-15 170 370)" />
      <ellipse cx="148" cy="365" rx="12" ry="4.5" stroke="#A8C8A8" strokeWidth="1.3" fill="none" opacity="0.3" transform="rotate(15 148 365)" />
      <ellipse cx="172" cy="340" rx="13" ry="4.5" stroke="#A8C8A8" strokeWidth="1.3" fill="none" opacity="0.25" transform="rotate(-18 172 340)" />
      <ellipse cx="146" cy="335" rx="11" ry="4" stroke="#A8C8A8" strokeWidth="1.3" fill="none" opacity="0.25" transform="rotate(18 146 335)" />
      <ellipse cx="168" cy="310" rx="12" ry="4" stroke="#A8C8A8" strokeWidth="1.3" fill="none" opacity="0.2" transform="rotate(-12 168 310)" />
      <ellipse cx="150" cy="305" rx="10" ry="3.5" stroke="#A8C8A8" strokeWidth="1.3" fill="none" opacity="0.2" transform="rotate(12 150 305)" />
      <ellipse cx="170" cy="280" rx="11" ry="4" stroke="#A8C8A8" strokeWidth="1.3" fill="none" opacity="0.2" transform="rotate(-20 170 280)" />
      <ellipse cx="152" cy="270" rx="10" ry="3.5" stroke="#A8C8A8" strokeWidth="1.3" fill="none" opacity="0.18" transform="rotate(15 152 270)" />
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/*  Bottom banner SVG illustration                                     */
/* ------------------------------------------------------------------ */

function BannerIllustration() {
  return (
    <svg width="280" height="200" viewBox="0 0 280 200" fill="none" className="w-full h-auto max-w-[260px]" aria-hidden>
      <rect x="50" y="90" width="80" height="70" rx="3" fill="white" fillOpacity="0.3" stroke="white" strokeWidth="1.5" />
      <rect x="60" y="100" width="25" height="30" rx="2" fill="white" fillOpacity="0.25" stroke="white" strokeWidth="1" />
      <rect x="95" y="100" width="25" height="30" rx="2" fill="white" fillOpacity="0.25" stroke="white" strokeWidth="1" />
      <rect x="60" y="140" width="60" height="20" rx="2" fill="white" fillOpacity="0.2" stroke="white" strokeWidth="1" />
      <path d="M40 95 L90 70 L140 95" stroke="white" strokeWidth="1.5" fill="white" fillOpacity="0.15" />
      <rect x="72" y="75" width="36" height="12" rx="2" fill="white" fillOpacity="0.2" />
      <text x="90" y="84" textAnchor="middle" fill="white" fontSize="6" fontWeight="600" opacity="0.7">ClariPet</text>
      <ellipse cx="190" cy="50" rx="28" ry="14" fill="white" fillOpacity="0.2" />
      <ellipse cx="205" cy="46" rx="20" ry="12" fill="white" fillOpacity="0.15" />
      <ellipse cx="60" cy="35" rx="22" ry="11" fill="white" fillOpacity="0.15" />
      <ellipse cx="72" cy="32" rx="16" ry="9" fill="white" fillOpacity="0.12" />
      <path d="M170 160 L175 130 L180 160Z" fill="white" fillOpacity="0.2" />
      <path d="M220 160 L226 120 L232 160Z" fill="white" fillOpacity="0.18" />
      <rect x="178" y="160" width="4" height="10" fill="white" fillOpacity="0.15" />
      <rect x="228" y="160" width="4" height="10" fill="white" fillOpacity="0.13" />
      <ellipse cx="140" cy="170" rx="130" ry="12" fill="white" fillOpacity="0.1" />
    </svg>
  );
}

function IndonesiaMap() {
  return (
    <svg width="140" height="100" viewBox="0 0 140 100" fill="none" className="select-none pointer-events-none" aria-hidden>
      <path d="M10 55 Q20 48 35 50 Q45 45 55 48 Q60 42 70 45 Q80 40 90 44 Q95 38 105 42 Q110 36 120 40 Q125 35 130 38 L132 42 Q125 48 115 46 Q105 50 95 48 Q85 52 75 50 Q65 54 55 52 Q45 56 35 54 Q25 58 15 56Z" fill="#3669c9" fillOpacity="0.15" stroke="#3669c9" strokeWidth="1.2" strokeOpacity="0.25" />
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/*  Scroll-triggered animation hook (inView + reduced-motion-aware)    */
/* ------------------------------------------------------------------ */

function useInViewOnce(ref: React.RefObject<HTMLElement | null>) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const prefsReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefsReduced) {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [ref]);

  return visible;
}

/* ------------------------------------------------------------------ */
/*  Animated wrapper                                                   */
/* ------------------------------------------------------------------ */

function FadeUp({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const visible = useInViewOnce(ref);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(20px)",
        transition: `opacity 0.6s cubic-bezier(0.22,1,0.36,1) ${delay}s, transform 0.6s cubic-bezier(0.22,1,0.36,1) ${delay}s`,
      }}
    >
      {children}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Hairline divider component                                         */
/* ------------------------------------------------------------------ */

function Hairline({ className = "", style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <div
      className={`hidden md:block ${className}`}
      style={{
        width: 1,
        minHeight: "70%",
        alignSelf: "center",
        background: "#E2E8F0",
        flexShrink: 0,
        ...style,
      }}
    />
  );
}

/* ------------------------------------------------------------------ */
/*  Main component                                                     */
/* ------------------------------------------------------------------ */

export function WhyChoose() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingVisible = useInViewOnce(sectionRef);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden"
      style={{
        padding: "84px 0",
        background: "var(--offwhite)",
      }}
    >
      {/* Decorative doodles — hidden below md */}
      <div className="hidden md:block absolute top-10 left-[8%]" style={{ zIndex: 0 }}>
        <DoodlePaw />
      </div>
      <div className="hidden md:block absolute top-16 left-[22%]" style={{ zIndex: 0 }}>
        <DoodleHeartLine />
      </div>
      <div className="hidden md:block absolute top-8 right-[12%]" style={{ zIndex: 0 }}>
        <DoodleSparkle />
      </div>
      <div className="hidden md:block absolute bottom-24 right-[18%]" style={{ zIndex: 0 }}>
        <DoodleMolecule />
      </div>

      <div className="wrap" style={{ position: "relative", zIndex: 1 }}>
        {/* ---- Section header ---- */}
        <div
          className="text-center mb-12"
          style={{
            opacity: headingVisible ? 1 : 0,
            transform: headingVisible ? "translateY(0)" : "translateY(20px)",
            transition: "opacity 0.6s cubic-bezier(0.22,1,0.36,1) 0s, transform 0.6s cubic-bezier(0.22,1,0.36,1) 0s",
          }}
        >
          <h2
            className="font-bold"
            style={{
              fontSize: "clamp(1.75rem, 4vw, 2.75rem)",
              color: "#1B2A4A",
              lineHeight: 1.2,
              marginBottom: 12,
            }}
          >
            Why Pet Parents Choose ClariPet
          </h2>
          <p
            className="font-normal"
            style={{
              fontSize: "clamp(0.95rem, 1.5vw, 1.125rem)",
              color: "#5A6072",
              maxWidth: 540,
              margin: "0 auto",
            }}
          >
            Thoughtfully crafted pet care designed for everyday life.
          </p>
        </div>

        {/* ---- Main white card ---- */}
        <div
          className="relative"
          style={{
            background: "#fff",
            borderRadius: 24,
            boxShadow: "0 20px 50px rgba(27, 42, 74, 0.10)",
            padding: 0,
            overflow: "hidden",
          }}
        >
          {/* Botanicals bleeding in from edges — hidden below md */}
          <div className="hidden md:block absolute left-0 top-0 h-full" style={{ zIndex: 0, width: 200, pointerEvents: "none" }}>
            <div className="absolute" style={{ bottom: 0, left: 0 }}>
              <BotanicalLeft />
            </div>
          </div>
          <div className="hidden md:block absolute right-0 top-0 h-full" style={{ zIndex: 0, width: 200, pointerEvents: "none" }}>
            <div className="absolute" style={{ bottom: 0, right: 0 }}>
              <BotanicalRight />
            </div>
          </div>

          {/* Card content */}
          <div className="relative" style={{ zIndex: 1, padding: "60px 56px" }}>
            {/* ---- Top row: 4 columns ---- */}
            <div
              className="why-choose-grid-4"
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(4, 1fr)",
                gap: 0,
              }}
            >
              {TOP_FEATURES.map((feat, i) => (
                <div
                  key={feat.title}
                  className="flex flex-col items-center text-center"
                  style={{ padding: "0 20px" }}
                >
                  <FadeUp delay={i * 0.1}>
                    <div
                      className={`${feat.bg} flex items-center justify-center mx-auto`}
                      style={{
                        width: 64,
                        height: 64,
                        borderRadius: "50%",
                        marginBottom: 16,
                      }}
                    >
                      <feat.icon className={feat.color} size={28} aria-hidden />
                    </div>
                    <h3
                      className="font-semibold"
                      style={{
                        fontSize: "1rem",
                        color: "#1B2A4A",
                        lineHeight: 1.3,
                        marginBottom: 8,
                      }}
                    >
                      {feat.title}
                    </h3>
                    <p
                      style={{
                        fontSize: "0.875rem",
                        color: "#5A6072",
                        lineHeight: 1.6,
                        maxWidth: 220,
                        margin: "0 auto",
                      }}
                    >
                      {feat.desc}
                    </p>
                  </FadeUp>
                </div>
              ))}
            </div>

            {/* ---- Hairline dividers between top columns ---- */}
            <div className="hidden md:flex" style={{ justifyContent: "space-around", marginTop: -16, marginBottom: 8, position: "relative", height: 0, overflow: "visible" }}>
              <Hairline className="relative" style={{ left: "12.5%" }} />
              <Hairline className="relative" style={{ left: "12.5%" }} />
              <Hairline className="relative" style={{ left: "12.5%" }} />
            </div>

            {/* ---- Second row: 3 columns ---- */}
            <div
              className="why-choose-grid-3"
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                marginTop: 48,
                paddingTop: 40,
                borderTop: "1px solid #F1F1F6",
              }}
            >
              {BOTTOM_FEATURES.map((feat, i) => (
                <div
                  key={feat.title}
                  className="flex"
                  style={{
                    padding: "0 20px",
                    gap: 16,
                    alignItems: "flex-start",
                  }}
                >
                  <FadeUp delay={i * 0.1}>
                    <div className="flex" style={{ gap: 16, alignItems: "center" }}>
                      <div
                        className="bg-blue-50 flex items-center justify-center flex-shrink-0"
                        style={{
                          width: 48,
                          height: 48,
                          borderRadius: "50%",
                        }}
                      >
                        <feat.icon className="text-blue-500" size={22} aria-hidden />
                      </div>
                      <div>
                        <h3
                          className="font-semibold"
                          style={{
                            fontSize: "0.95rem",
                            color: "#1B2A4A",
                            lineHeight: 1.3,
                            marginBottom: 4,
                          }}
                        >
                          {feat.title}
                        </h3>
                        <p
                          style={{
                            fontSize: "0.85rem",
                            color: "#5A6072",
                            lineHeight: 1.6,
                          }}
                        >
                          {feat.desc}
                        </p>
                      </div>
                    </div>
                  </FadeUp>
                </div>
              ))}
            </div>

            {/* ---- Hairline dividers between second-row columns ---- */}
            <div className="hidden md:flex" style={{ justifyContent: "space-around", marginTop: -24, position: "relative", height: 0, overflow: "visible" }}>
              <Hairline className="relative" style={{ left: "16.66%" }} />
              <Hairline className="relative" style={{ left: "16.66%" }} />
            </div>
          </div>
        </div>

        {/* ---- Bottom banner ---- */}
        <div
          className="relative overflow-hidden flex flex-col md:flex-row items-center"
          style={{
            marginTop: 40,
            borderRadius: 24,
            background: "linear-gradient(135deg, #C9D6F5 0%, #9FB3E8 100%)",
            minHeight: 160,
            padding: "36px 48px",
          }}
        >
          {/* Left illustration */}
          <div className="flex-shrink-0 mb-6 md:mb-0 md:mr-8">
            <BannerIllustration />
          </div>

          {/* Center text */}
          <div className="flex-1 text-center md:text-left" style={{ zIndex: 1 }}>
            <h3
              className="font-bold"
              style={{
                fontSize: "clamp(1.25rem, 2.5vw, 1.75rem)",
                color: "#1B2A4A",
                marginBottom: 4,
              }}
            >
              Made in Indonesia
            </h3>
            <p
              style={{
                fontFamily: "var(--font-caveat)",
                fontSize: "clamp(1.2rem, 2vw, 1.5rem)",
                color: "#3669c9",
                marginBottom: 4,
              }}
            >
              Loved Everywhere. ♡
            </p>
            <p
              style={{
                fontSize: "0.85rem",
                color: "#5A6072",
              }}
            >
              Local pride, global love.
            </p>
          </div>

          {/* Right — Indonesia map with pin */}
          <div className="relative flex-shrink-0 mt-4 md:mt-0">
            <IndonesiaMap />
            <MapPin
              size={22}
              className="text-blue-600 absolute"
              style={{
                fill: "#3669c9",
                color: "#3669c9",
                left: "48%",
                top: "48%",
                transform: "translate(-50%, -50%)",
              }}
              aria-hidden
            />
          </div>
        </div>
      </div>

      {/* Responsive overrides */}
      <style dangerouslySetInnerHTML={{
        __html: `
        @media (max-width: 1023px) {
          .why-choose-grid-4 { grid-template-columns: repeat(2, 1fr) !important; }
          .why-choose-grid-3 { grid-template-columns: 1fr !important; }
          .why-choose-grid-3 > div { border-top: 1px solid #F1F1F6; padding-top: 24px; margin-top: 24px; }
          .why-choose-grid-3 > div:first-child { border-top: none; padding-top: 0; margin-top: 0; }
        }
        @media (max-width: 639px) {
          .why-choose-grid-4 { grid-template-columns: 1fr !important; }
          .why-choose-grid-4 > div:not(:last-child) { border-bottom: 1px solid #F1F1F6; padding-bottom: 28px; margin-bottom: 28px; }
        }
        @media (max-width: 860px) {
          .card-content { padding: 32px 24px !important; }
        }
        @media (prefers-reduced-motion: reduce) {
          .why-choose-fade { opacity: 1 !important; transform: none !important; transition: none !important; }
        }
      `}} />
    </section>
  );
}
