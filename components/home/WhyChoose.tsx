import { Icon } from "@/components/icons";

const WHY = [
  { ic: "shield", t: "Pet Safe Formulations", d: "Gentle and safe for pets" },
  { ic: "leaf", t: "Premium Ingredients", d: "Carefully Selected, high-quality ingredients for best results" },
  { ic: "pin", t: "Made in Indonesia", d: "Proudly made locally with global standards" },
  { ic: "users", t: "Trusted by Thousands", d: "Real pet parents, real stories, real love, real trust" },
  { ic: "batch", t: "Diracik dengan Penuh Perhatian", d: "Bukan diproduksi massal, setiap produk ClariPet dikembangkan dengan cermat berdasarkan kebutuhan nyata hewan peliharaan." },
  { ic: "sparkle", t: "Beyond Just Fragrance", d: "Dari perawatan mulut hingga dukungan kesehatan kulit, ClariPet dirancang sebagai ekosistem perawatan hewan yang lengkap." },
  { ic: "smile", t: "Everyday Friendly", d: "Cukup lembut untuk menjadi bagian dari rutinitas harian Anda, bukan hanya digunakan saat masalah muncul." },
];

export function WhyChoose() {
  return (
    <section className="section" style={{ paddingTop: 0 }}>
      <div className="wrap">
        <div className="why">
          <div className="center reveal">
            <div className="eyebrow" style={{ marginBottom: 10 }}>
              Terinspirasi dari Pengalaman Nyata Pet Parents
            </div>
            <h2 className="h2" style={{ marginBottom: 16 }}>Why Pet Parents Choose Claripet</h2>
            <p className="lead" style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center', marginBottom: 40 }}>
              Setiap produk dikembangkan berdasarkan tantangan yang sering dihadapi para pemilik hewan, sehingga solusi yang kami hadirkan lebih relevan dan mudah diterapkan dalam kehidupan sehari-hari.
            </p>
          </div>
          <div className="why-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '32px' }}>
            {WHY.map((w, i) => (
              <div key={i} className={`why-item reveal reveal-d${Math.min(i + 1, 5)}`} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
                <div className="why-ic" style={{ marginBottom: 16 }}>
                  <Icon name={w.ic as any} size={28} />
                </div>
                <div className="t" style={{ fontWeight: 600, fontSize: '1.125rem', marginBottom: 8 }}>{w.t}</div>
                <div className="d" style={{ color: 'var(--gray-600)', lineHeight: 1.5 }}>{w.d}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
