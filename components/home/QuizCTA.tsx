import Link from "next/link";
import { Icon } from "@/components/icons";

const STEPS = [
  { icon: "paw", title: "1. Pet Type", desc: "Dog or Cat", bg: "bg-[#AECBEB]/20" },
  { icon: "sparkle", title: "2. Main Concern", desc: "What&apos;s your main concern?", bg: "bg-[#F5CDD3]/20" },
  { icon: "leaf", title: "3. Skin & Coat", desc: "How is their skin & coat?", bg: "bg-[#C5D6C8]/20" },
  { icon: "spray", title: "4. Scent Preference", desc: "Any scent preference?", bg: "bg-[#E0CBE8]/20" },
];

const BADGES = [
  { icon: "spray", bg: "bg-[#AECBEB]/25", style: { top: "8%", left: "-6%" } as const },
  { icon: "heart", bg: "bg-[#F5CDD3]/25", style: { top: "6%", right: "-4%" } as const },
  { icon: "leaf", bg: "bg-[#C5D6C8]/25", style: { bottom: "18%", left: "-3%" } as const },
  { icon: "paw", bg: "bg-[#E0CBE8]/25", style: { bottom: "12%", right: "2%" } as const },
];

export function QuizCTA() {
  return (
    <section className="wrap" style={{ paddingTop: 0 }}>
      <div
        className="rounded-3xl overflow-hidden"
        style={{
          background: "linear-gradient(135deg, #dce8f5 0%, #eaf2fb 50%, #f0f6ff 100%)",
        }}
      >
        <div className="p-8 md:p-12 lg:p-16">
          {/* Top section — two columns on md+ */}
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Left column */}
            <div className="space-y-6">
              <h2
                className="text-navy font-bold leading-tight"
                style={{ fontSize: "clamp(1.5rem, 3.5vw, 2.25rem)" }}
              >
                Not Sure Which Product
                <br />
                Your Pet Needs?
                <Icon name="heart" size={20} className="inline-block ml-1.5 text-pink -mt-1 align-middle" strokeWidth={2} />
              </h2>
              <p
                className="text-[#5A6072] leading-relaxed max-w-md"
                style={{ fontSize: "clamp(0.9rem, 1.3vw, 1.05rem)" }}
              >
                Answer 4 quick questions and receive personalized ClariPet recommendations based on your pet&apos;s needs.
              </p>
              <div className="flex flex-col items-start gap-4">
                <Link
                  href="/quiz"
                  className="inline-flex items-center gap-2 bg-sky hover:bg-sky/80 text-white font-semibold rounded-full px-8 py-3.5 transition-colors"
                  style={{ fontSize: "0.95rem" }}
                >
                  Start Quiz
                  <Icon name="arrowRight" size={18} />
                </Link>
                <div className="flex items-center gap-1.5 text-xs text-[#8A90A0]">
                  <Icon name="shield" size={14} className="text-sage" />
                  <span>100% Free</span>
                  <span className="text-[#C5CDD8]">•</span>
                  <span>Takes 1 Minute</span>
                  <span className="text-[#C5CDD8]">•</span>
                  <span>No Sign Up</span>
                </div>
              </div>
            </div>

            {/* Right column — image area with decorative badges */}
            <div className="relative">
              <div
                className="rounded-2xl flex items-center justify-center overflow-hidden"
                style={{ aspectRatio: "4 / 3", background: "linear-gradient(135deg, #dce8f5, #f0f6ff)" }}
              >
                <Icon name="paw" size={80} className="text-sky/20" strokeWidth={1} />
              </div>
              {BADGES.map((badge, i) => (
                <div key={i} className="hidden md:block absolute" style={badge.style}>
                  <div className={`w-10 h-10 rounded-full ${badge.bg} flex items-center justify-center`}>
                    <Icon name={badge.icon} size={18} className="text-navy/60" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom section — step indicator strip */}
          <div className="mt-10 md:mt-14 bg-offwhite rounded-2xl shadow-sm p-7 md:p-10">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
              {STEPS.map((step) => (
                <div key={step.title} className="flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 ${step.bg}`}>
                    <Icon name={step.icon} size={22} className="text-navy" strokeWidth={2} />
                  </div>
                  <div className="min-w-0">
                    <p className="font-semibold text-navy text-[15px] leading-tight mb-1">{step.title}</p>
                    <p className="text-[#8A90A0] text-[13px] leading-snug">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
