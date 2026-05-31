"use client";

import { useRouter } from "next/navigation";
import { Icon } from "@/components/icons";
import { Placeholder } from "@/components/Placeholder";
import { PrimaryButton } from "@/components/ui/PrimaryButton";

const PROMISE = [
  { ic: "shield", t: "Safe & Gentle", d: "Kind to skin, coats and noses." },
  { ic: "check", t: "Effective", d: "Real results you can see and smell." },
  { ic: "award", t: "High Quality", d: "Premium ingredients, no shortcuts." },
  { ic: "smile", t: "Honest", d: "Transparent about what goes in." },
  { ic: "heartHand", t: "Made with Love", d: "Crafted by people who adore pets." },
];

export function AboutView() {
  const router = useRouter();
  return (
    <main>
      <div className="wrap about-hero">
        <div className="story">
          <div className="eyebrow" style={{ marginBottom: 14 }}>
            Our story
          </div>
          <h1 className="h1" style={{ marginBottom: 20 }}>
            For the love of pets, we create better care.
          </h1>
          <p>
            ClariPet began with a simple wish: to give our own fur babies the gentle, effective care
            they deserved — without the harsh ingredients hiding in so many pet products.
          </p>
          <p>
            So we started making our own. Small batches, pet-safe formulas, and a lot of love. What
            began in one kitchen in Indonesia is now trusted by thousands of pet parents.
          </p>
          <p>
            Every product we make is held to one standard: would we use it on our own pets? If the
            answer isn’t a confident yes, it doesn’t leave our door.
          </p>
          <div style={{ marginTop: 8 }}>
            <PrimaryButton icon="arrowRight" onClick={() => router.push("/shop")}>
              Our Story
            </PrimaryButton>
          </div>
        </div>
        <div className="about-media">
          <Placeholder tone="cream" label="Golden retriever & cat" />
        </div>
      </div>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="promise">
            <div className="center">
              <div className="eyebrow" style={{ marginBottom: 10 }}>
                What we stand for
              </div>
              <h2 className="h2">Our Promise</h2>
            </div>
            <div className="promise-grid">
              {PROMISE.map((p, i) => (
                <div className="why-item" key={i}>
                  <div className="why-ic">
                    <Icon name={p.ic} size={28} />
                  </div>
                  <div className="t">{p.t}</div>
                  <div className="d">{p.d}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="made-in">
            <div>
              <div className="eyebrow" style={{ marginBottom: 14 }}>
                <Icon name="pin" size={16} /> Proudly local
              </div>
              <h2 className="h2" style={{ marginBottom: 16 }}>
                Made in Indonesia, Loved Everywhere
              </h2>
              <p className="muted" style={{ lineHeight: 1.8 }}>
                From our home in Indonesia to pet parents around the region, every ClariPet product
                is crafted locally in small batches. We’re proud of where we come from — and grateful
                for the community of fur families who’ve made us part of their routine.
              </p>
            </div>
            <div className="map-media">
              <Placeholder tone="sky" label="Indonesia map" />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
