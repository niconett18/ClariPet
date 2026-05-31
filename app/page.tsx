import { Hero } from "@/components/home/Hero";
import { TrustBadges } from "@/components/home/TrustBadges";
import { ShopByCategory } from "@/components/home/ShopByCategory";
import { BestSellers } from "@/components/home/BestSellers";
import { WhyChoose } from "@/components/home/WhyChoose";
import { QuizCTA } from "@/components/home/QuizCTA";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <TrustBadges />
      <ShopByCategory />
      <BestSellers />
      <WhyChoose />
      <QuizCTA />
    </main>
  );
}
