
import type { Metadata } from "next";
import { Placeholder } from "@/components/Placeholder";

export const metadata: Metadata = {
  title: "About Us | ClariPet",
  description: "ClariPet hadir karena kami percaya bahwa merawat hewan peliharaan tidak seharusnya terasa rumit.",
};

export default function AboutPage() {
  return (
    <main className="section" style={{ minHeight: "80vh" }}>
      <div className="wrap">
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <div className="center reveal" style={{ marginBottom: 40 }}>
            <h1 className="h-display">Tentang ClariPet</h1>
            <p className="lead" style={{ marginTop: 24 }}>
              Memiliki hewan peliharaan itu menyenangkan. Merawat mereka tidak selalu demikian.
            </p>
          </div>

          <div className="reveal reveal-d1" style={{ marginBottom: 48, borderRadius: 24, overflow: "hidden" }}>
             <Placeholder tone="sage" label="Team ClariPet with Pets" style={{ aspectRatio: "16/9" }} />
          </div>

          <div className="reveal reveal-d2" style={{ display: "flex", flexDirection: "column", gap: 24, fontSize: "1.125rem", lineHeight: 1.8, color: "var(--gray-700)" }}>
            <p>
              Di balik momen-momen lucu dan menyenangkan, ada banyak hal yang harus diperhatikan. Mulai dari kebersihan, kesehatan kulit dan bulu, kebersihan mulut, hingga berbagai kebutuhan lain yang menjadi bagian dari rutinitas sehari-hari seorang pet parent.
            </p>
            <p>
              ClariPet hadir karena kami percaya bahwa merawat hewan peliharaan tidak seharusnya terasa rumit. Kami ingin membantu pet parent menjalani rutinitas perawatan sehari-hari dengan lebih mudah melalui produk-produk yang aman, praktis, dan nyaman digunakan.
            </p>
            <p>
              Setiap produk ClariPet dikembangkan dengan tujuan yang sederhana: membantu mengurangi sedikit beban yang datang bersama tanggung jawab sebagai pet parent. Bukan karena kami percaya merawat hewan peliharaan itu sulit, tetapi karena kami tahu bahwa waktu, energi, dan perhatian adalah hal yang berharga.
            </p>
            <p>
              Kami percaya bahwa kesehatan dan kebahagiaan hewan peliharaan dibangun dari hal-hal kecil yang dilakukan secara konsisten setiap hari. Rutinitas sederhana yang membuat mereka lebih bersih, lebih sehat, lebih nyaman, dan pada akhirnya memiliki kualitas hidup yang lebih baik.
            </p>
            <p>
              Pada akhirnya, ClariPet bukan hanya tentang produk hewan peliharaan. ClariPet adalah tentang membantu orang-orang yang mencintai hewan peliharaan mereka dan ingin memberikan yang terbaik untuk mereka.
            </p>
            <p style={{ fontWeight: 600, fontSize: "1.5rem", color: "var(--text)", marginTop: 16 }}>
              Helping You Help Them.
            </p>
          </div>

          <div className="reveal reveal-d3" style={{ marginTop: 80, padding: 48, background: "var(--sky)", borderRadius: 32 }}>
            <h2 className="h2 center" style={{ marginBottom: 40 }}>Janji Kami</h2>
            <p className="center" style={{ fontSize: "1.125rem", marginBottom: 48, maxWidth: 600, margin: "0 auto 48px auto" }}>
              Di ClariPet, kami percaya bahwa produk yang baik bukan hanya tentang apa yang ada di dalam botol, tetapi juga tentang bagaimana produk tersebut membantu kehidupan sehari-hari pet parent menjadi lebih mudah.
            </p>
            
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 32 }}>
              <div style={{ background: "white", padding: 32, borderRadius: 24 }}>
                <h3 style={{ fontSize: "1.25rem", fontWeight: 600, marginBottom: 12 }}>Aman dan Nyaman Digunakan</h3>
                <p style={{ color: "var(--gray-600)" }}>Kami mengutamakan formulasi yang lembut dan nyaman digunakan sebagai bagian dari rutinitas perawatan sehari-hari.</p>
              </div>
              <div style={{ background: "white", padding: 32, borderRadius: 24 }}>
                <h3 style={{ fontSize: "1.25rem", fontWeight: 600, marginBottom: 12 }}>Praktis dan Mudah Dipahami</h3>
                <p style={{ color: "var(--gray-600)" }}>Kami percaya bahwa perawatan hewan peliharaan tidak perlu dibuat rumit. Produk yang baik harus mudah digunakan dan mudah dimengerti.</p>
              </div>
              <div style={{ background: "white", padding: 32, borderRadius: 24 }}>
                <h3 style={{ fontSize: "1.25rem", fontWeight: 600, marginBottom: 12 }}>Dibuat untuk Kebutuhan Nyata</h3>
                <p style={{ color: "var(--gray-600)" }}>Setiap produk ClariPet lahir dari kebutuhan yang benar-benar dihadapi oleh pet parent dalam kehidupan sehari-hari.</p>
              </div>
              <div style={{ background: "white", padding: 32, borderRadius: 24 }}>
                <h3 style={{ fontSize: "1.25rem", fontWeight: 600, marginBottom: 12 }}>Terus Berkembang Menjadi Lebih Baik</h3>
                <p style={{ color: "var(--gray-600)" }}>Kami selalu belajar, mendengarkan masukan pelanggan, dan terus melakukan perbaikan agar dapat memberikan produk dan pengalaman yang lebih baik.</p>
              </div>
            </div>

            <div className="center" style={{ marginTop: 48 }}>
              <p style={{ fontWeight: 600, fontSize: "1.25rem", color: "var(--text)" }}>Membantu Anda Merawat Mereka</p>
              <p style={{ color: "var(--gray-700)", marginTop: 8 }}>Di atas segalanya, tujuan kami tetap sama: membantu pet parent memberikan perawatan terbaik bagi hewan peliharaan yang mereka cintai.</p>
            </div>
          </div>

        </div>
      </div>
    </main>
  );
}

