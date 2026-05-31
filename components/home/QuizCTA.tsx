"use client";

import { useRouter } from "next/navigation";
import { Icon } from "@/components/icons";
import { Placeholder } from "@/components/Placeholder";
import { PrimaryButton } from "@/components/ui/PrimaryButton";

export function QuizCTA() {
  const router = useRouter();
  return (
    <section className="section" style={{ paddingTop: 0 }}>
      <div className="wrap">
        <div className="quiz-cta">
          <div>
            <div className="eyebrow" style={{ marginBottom: 14 }}>
              <Icon name="sparkle" size={16} /> Personalised picks
            </div>
            <h2 className="h2">Not sure which product your pet needs?</h2>
            <p className="lead">
              Answer a few quick questions and we’ll recommend the best ClariPet products for them.
            </p>
            <PrimaryButton size="lg" icon="arrowRight" onClick={() => router.push("/quiz")}>
              Start Quiz
            </PrimaryButton>
          </div>
          <div className="quiz-cta-media">
            <Placeholder tone="lavender" label="Happy dog & cat" />
          </div>
        </div>
      </div>
    </section>
  );
}
