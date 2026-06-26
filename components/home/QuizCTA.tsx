import Link from "next/link";
import { Icon } from "@/components/icons";
import { Placeholder } from "@/components/Placeholder";
import { PrimaryButton } from "@/components/ui/PrimaryButton";

export function QuizCTA() {
  return (
    <section className="section" style={{ paddingTop: 0 }}>
      <div className="wrap">
        <div className="quiz-cta reveal-scale">
          <div>
            <div className="eyebrow" style={{ marginBottom: 14 }}>
              <Icon name="sparkle" size={16} /> Personalised picks
            </div>
            <h2 className="h2">Tidak Yakin Produk Mana yang Dibutuhkan Anabul Anda?</h2>
            <p className="lead" style={{ marginBottom: 24 }}>
              Jawab 5 pertanyaan singkat dan dapatkan rekomendasi produk ClariPet yang dipersonalisasi sesuai kebutuhan hewan peliharaan Anda.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12, alignItems: 'flex-start' }}>
              <Link href="/quiz">
                <PrimaryButton size="lg" icon="arrowRight">
                  Mulai Quiz
                </PrimaryButton>
              </Link>
              <div style={{ fontSize: '0.875rem', color: 'var(--gray-600)', display: 'flex', alignItems: 'center', gap: 8 }}>
                <span>100% Gratis</span>
                <span>•</span>
                <span>Hanya 1 Menit</span>
                <span>•</span>
                <span>Tanpa Registrasi</span>
              </div>
            </div>
          </div>
          <div className="quiz-cta-media">
            <Placeholder tone="lavender" label="Happy dog & cat" />
          </div>
        </div>
      </div>
    </section>
  );
}
