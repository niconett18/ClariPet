export type Faq = { q: string; a: string; icon: string };

/**
 * Single source of truth for the FAQ content. Consumed by the FAQ UI
 * (components/faq/FaqView.tsx) and the FAQPage JSON-LD (app/faq/page.tsx),
 * so the structured data can never drift from what's rendered on screen.
 */
export const FAQS: Faq[] = [
  {
    icon: "sparkle",
    q: "Apakah ClariPet hanya menjual parfum hewan?",
    a: "Tidak. Meskipun parfum merupakan salah satu produk ClariPet yang paling dikenal, kami juga memiliki berbagai produk untuk perawatan bulu, kulit, mulut, tear stain, serta kebutuhan kebersihan dan perawatan hewan peliharaan sehari-hari.",
  },
  {
    icon: "heart",
    q: "Apa yang membuat ClariPet berbeda dari brand lain?",
    a: "ClariPet dibangun dengan tujuan sederhana: membantu membuat kehidupan pet parent menjadi lebih mudah. Kami fokus menghadirkan produk yang praktis, aman digunakan, dan mudah menjadi bagian dari rutinitas perawatan sehari-hari.",
  },
  {
    icon: "smile",
    q: "Apa arti dari \"Helping You Help Them\"?",
    a: "Kami percaya bahwa merawat hewan peliharaan tidak selalu mudah. Ada banyak hal yang perlu diperhatikan setiap hari, mulai dari kebersihan, kesehatan, hingga kenyamanan mereka. ClariPet hadir untuk membantu pet parent menjalani perjalanan tersebut dengan lebih mudah dan lebih percaya diri.",
  },
  {
    icon: "cat",
    q: "Apakah produk ClariPet aman untuk kucing?",
    a: "Banyak produk ClariPet dapat digunakan untuk kucing maupun anjing sesuai petunjuk penggunaan masing-masing produk. Untuk informasi lebih detail, silakan melihat petunjuk pada halaman produk terkait.",
  },
  {
    icon: "dog",
    q: "Apakah produk ClariPet aman untuk anjing?",
    a: "Ya. Produk ClariPet dikembangkan untuk kebutuhan hewan peliharaan dan dapat digunakan sesuai petunjuk penggunaan yang tersedia pada masing-masing produk.",
  },
  {
    icon: "shield",
    q: "Apakah produk ClariPet aman untuk hewan yang sedang hamil atau menyusui?",
    a: "Sebagian besar produk perawatan luar umumnya aman digunakan sesuai petunjuk. Namun karena kondisi setiap hewan berbeda, kami tetap menyarankan untuk berkonsultasi dengan dokter hewan apabila hewan peliharaan sedang hamil atau menyusui.",
  },
  {
    icon: "clock",
    q: "Pada usia berapa hewan peliharaan dapat mulai menggunakan produk ClariPet?",
    a: "Sebagian besar produk ClariPet dapat digunakan mulai usia sekitar 2 bulan ke atas. Untuk informasi yang lebih spesifik, silakan melihat petunjuk pada masing-masing produk.",
  },
  {
    icon: "paw",
    q: "Apakah produk ClariPet menggunakan uji coba pada hewan?",
    a: "Tidak. Kami tidak melakukan animal testing dalam pengembangan produk kami.",
  },
  {
    icon: "leaf",
    q: "Apakah produk ClariPet menggunakan bahan alami?",
    a: "Kami menggunakan kombinasi bahan yang dipilih berdasarkan keamanan, fungsi, dan kecocokannya untuk hewan peliharaan. Tergantung produknya, formulasi dapat mengandung bahan alami maupun bahan yang dikembangkan secara ilmiah.",
  },
  {
    icon: "batch",
    q: "Apakah beberapa produk ClariPet dapat digunakan bersamaan?",
    a: "Ya. Banyak produk ClariPet dirancang untuk saling melengkapi sebagai bagian dari rutinitas perawatan yang menyeluruh.",
  },
];

