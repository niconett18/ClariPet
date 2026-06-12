"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import type { Product } from "@/lib/types";
import { PRODUCTS, getProduct } from "@/data/products";
import { Icon } from "@/components/icons";
import { PageHead } from "@/components/PageHead";
import { Mascot } from "@/components/Mascot";
import { ProductCard } from "@/components/ProductCard";
import { PrimaryButton } from "@/components/ui/PrimaryButton";
import { SecondaryButton } from "@/components/ui/SecondaryButton";
import { useCart } from "@/context/CartContext";

interface QuizOption {
  value: string;
  label: string;
  icon: string;
  tone: string;
}
interface QuizStep {
  key: string;
  q: string;
  options: QuizOption[];
}

const QUIZ_STEPS: QuizStep[] = [
  {
    key: "pet",
    q: "Who are we shopping for today?",
    options: [
      { value: "dog", label: "A Dog", icon: "dog", tone: "sky" },
      { value: "cat", label: "A Cat", icon: "cat", tone: "pink" },
    ],
  },
  {
    key: "concern",
    q: "What’s your main concern right now?",
    options: [
      { value: "oral-care", label: "Bad breath", icon: "droplet", tone: "sky" },
      { value: "tear-stain-care", label: "Tear stains", icon: "sparkle", tone: "lavender" },
      { value: "grooming", label: "Odour & freshness", icon: "spray", tone: "sage" },
      { value: "general", label: "General care", icon: "heart", tone: "pink" },
    ],
  },
  {
    key: "skin",
    q: "How would you describe their skin & coat?",
    options: [
      { value: "sensitive", label: "Sensitive / itchy", icon: "leaf", tone: "sage" },
      { value: "normal", label: "Normal & healthy", icon: "smile", tone: "cream" },
      { value: "dull", label: "Dull or dry", icon: "droplet", tone: "sky" },
      { value: "unsure", label: "Not sure", icon: "check", tone: "lavender" },
    ],
  },
  {
    key: "scent",
    q: "Any scent preference?",
    options: [
      { value: "baby-powder", label: "Soft baby powder", icon: "sparkle", tone: "pink" },
      { value: "lavender", label: "Calming lavender", icon: "leaf", tone: "lavender" },
      { value: "fresh", label: "Clean & fresh", icon: "droplet", tone: "sky" },
      { value: "none", label: "Fragrance free", icon: "check", tone: "sage" },
    ],
  },
];

function recommend(answers: Record<string, string>): Product[] {
  const recs = new Set<string>();
  const byCat = (c: string) => PRODUCTS.filter((p) => p.category === c).forEach((p) => recs.add(p.slug));

  if (answers.concern === "oral-care") byCat("oral-care");
  else if (answers.concern === "tear-stain-care") byCat("tear-stain-care");
  else if (answers.concern === "grooming") byCat("grooming");
  else {
    recs.add("daily-wellness-supplement");
    recs.add("shu-shu-deodorizing-spray");
  }

  if (answers.skin === "sensitive" || answers.skin === "dull") recs.add("soothing-skin-serum");

  if (answers.scent === "baby-powder") recs.add("pet-perfume-baby-powder");
  else if (answers.scent === "lavender") recs.add("lavender-calm-perfume");
  else if (answers.scent === "fresh") recs.add("shu-shu-deodorizing-spray");

  let list = Array.from(recs)
    .map((s) => getProduct(s))
    .filter((p): p is Product => Boolean(p));
  if (list.length === 0) list = PRODUCTS.filter((p) => p.bestSeller);
  return list.slice(0, 3);
}

export function Quiz() {
  const cart = useCart();
  const router = useRouter();
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});

  const done = step >= QUIZ_STEPS.length;
  const progress = done ? 100 : (step / QUIZ_STEPS.length) * 100;

  const choose = (key: string, value: string) => {
    setAnswers((prev) => ({ ...prev, [key]: value }));
    setTimeout(() => setStep((s) => s + 1), 220);
  };
  const reset = () => {
    setAnswers({});
    setStep(0);
  };

  if (done) {
    const recs = recommend(answers);
    const petLabel = answers.pet === "cat" ? "cat" : "dog";
    return (
      <main>
        <PageHead
          title="Your personalised picks"
          subtitle={`Based on your answers, here’s what we’d reach for first for your ${petLabel}.`}
        />
        <div className="wrap quiz-shell" style={{ maxWidth: 980 }}>
          <Mascot tone="sky" speech="Great choices ahead!" sub="ClariPet recommends" />
          <div
            className="prod-grid"
            style={{ gridTemplateColumns: `repeat(auto-fit, minmax(180px, 1fr))`, marginTop: 28 }}
          >
            {recs.map((p) => (
              <ProductCard key={p.slug} product={p} />
            ))}
          </div>
          <div style={{ display: "flex", gap: 12, justifyContent: "center", marginTop: 36, flexWrap: "wrap" }}>
            <PrimaryButton
              onClick={() => {
                recs.forEach((p) => cart.add(p.slug));
                router.push("/cart");
              }}
            >
              Add all to cart
            </PrimaryButton>
            <SecondaryButton onClick={reset}>Retake quiz</SecondaryButton>
          </div>
        </div>
      </main>
    );
  }

  const current = QUIZ_STEPS[step];
  return (
    <main>
      <div className="wrap quiz-shell">
        <div className="eyebrow center" style={{ display: "flex", justifyContent: "center", marginBottom: 22 }}>
          <Icon name="sparkle" size={16} /> Find their match
        </div>
        <div className="quiz-progress">
          <div className="bar" style={{ width: `${progress}%` }} />
        </div>
        <div className="quiz-step-label">
          Step {step + 1} of {QUIZ_STEPS.length}
        </div>
        <div className="quiz-card">
          <h2 className="h3">{current.q}</h2>
          <div className="quiz-options">
            {current.options.map((o) => (
              <button
                key={o.value}
                className={"quiz-opt" + (answers[current.key] === o.value ? " selected" : "")}
                onClick={() => choose(current.key, o.value)}
              >
                <span className="qic" style={{ background: `var(--${o.tone})`, color: "var(--navy)" }}>
                  <Icon name={o.icon} size={22} />
                </span>
                {o.label}
              </button>
            ))}
          </div>
          <div className="quiz-nav">
            <button
              className="btn btn-ghost"
              onClick={() => setStep((s) => Math.max(0, s - 1))}
              disabled={step === 0}
              style={{ opacity: step === 0 ? 0.4 : 1 }}
            >
              Back
            </button>
            {answers[current.key] && (
              <PrimaryButton onClick={() => setStep((s) => s + 1)} icon="arrowRight">
                Next
              </PrimaryButton>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
