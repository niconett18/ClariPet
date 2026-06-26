"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import { Icon } from "@/components/icons";
import { Placeholder } from "@/components/Placeholder";
import { PrimaryButton } from "@/components/ui/PrimaryButton";

const PROMISE = [
  { ic: "shield", t: "Aman dan Nyaman Digunakan", d: "Kami mengutamakan formulasi yang lembut dan nyaman digunakan sebagai bagian dari rutinitas perawatan sehari-hari." },
  { ic: "check", t: "Praktis dan Mudah Dipahami", d: "Kami percaya bahwa perawatan hewan peliharaan tidak perlu dibuat rumit. Produk yang baik harus mudah digunakan dan mudah dimengerti." },
  { ic: "heartHand", t: "Dibuat untuk Kebutuhan Nyata", d: "Setiap produk ClariPet lahir dari kebutuhan yang benar-benar dihadapi oleh pet parent dalam kehidupan sehari-hari." },
  { ic: "sparkle", t: "Terus Berkembang Menjadi Lebih Baik", d: "Kami selalu belajar, mendengarkan masukan pelanggan, dan terus melakukan perbaikan agar dapat memberikan produk dan pengalaman yang lebih baik." },
  { ic: "smile", t: "Membantu Anda Merawat Mereka", d: "Di atas segalanya, tujuan kami tetap sama: membantu pet parent memberikan perawatan terbaik bagi hewan peliharaan yang mereka cintai." },
];

export function AboutView() {
  const router = useRouter();
  return (
    <main>
      <div className="wrap about-hero">
        <div className="story">
          <div className="eyebrow" style={{ marginBottom: 14 }}>
            Tentang ClariPet
          </div>
          <h1 className="h1" style={{ marginBottom: 20 }}>
            Memiliki hewan peliharaan itu menyenangkan. Merawat mereka tidak selalu demikian.
          </h1>
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
          <p style={{ fontWeight: 600, fontSize: '1.25rem', marginTop: 16 }}>
            Helping You Help Them.
          </p>
        </div>
        <div className="about-media">
          <div style={{ width: "100%", height: "100%", background: "var(--cream-50)", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <Image src="/images/brand/logo.png" alt="ClariPet About Us" width={200} height={64} className="object-contain" />
          </div>
        </div>
      </div>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="promise">
            <div className="center">
              <div className="eyebrow" style={{ marginBottom: 10 }}>
                Janji Kami
              </div>
              <p className="lead" style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
                Di ClariPet, kami percaya bahwa produk yang baik bukan hanya tentang apa yang ada di dalam botol, tetapi juga tentang bagaimana produk tersebut membantu kehidupan sehari-hari pet parent menjadi lebih mudah. Karena itu, dalam setiap produk yang kami kembangkan, kami selalu berusaha menghadirkan:
              </p>
            </div>
            <div className="promise-grid" style={{ marginTop: 40 }}>
              {PROMISE.map((p, i) => (
                <div className="why-item" key={i}>
                  <div className="why-ic">
                    <Icon name={p.ic as any} size={28} />
                  </div>
                  <div className="t">{p.t}</div>
                  <div className="d">{p.d}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
