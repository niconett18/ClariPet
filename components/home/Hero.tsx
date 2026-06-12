import Link from "next/link";
import { Icon } from "@/components/icons";
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
            <Icon name="leaf" size={16} /> Pet-safe · Made in Indonesia
          </div>
          <h1 className="h-display">Premium care for happy, healthy fur babies.</h1>
          <p className="lead">Safe. Gentle. Effective. Because they deserve the best.</p>
          <div className="hero-actions">
            <Link href="/shop">
              <PrimaryButton size="lg" icon="arrowRight">
                Shop Now
              </PrimaryButton>
            </Link>
            <Link href="/quiz">
              <SecondaryButton size="lg">
                Take the Quiz
              </SecondaryButton>
            </Link>
          </div>
        </div>
        <div style={{ position: "relative" }}>
          <div className="hero-media">
            <Placeholder tone="sky" label="Poodle & cat with ClariPet products" />
          </div>
          <div className="hero-bottle" style={{ left: "4%", background: "var(--pink)" }}>
            <Placeholder tone="pink" paw={false} label="" />
          </div>
          <div className="hero-bottle" style={{ left: "34%", bottom: "-12px", background: "var(--sage)" }}>
            <Placeholder tone="sage" paw={false} label="" />
          </div>
          <div className="hero-bottle" style={{ left: "64%", background: "var(--lavender)" }}>
            <Placeholder tone="lavender" paw={false} label="" />
          </div>
        </div>
      </div>
    </section>
  );
}
