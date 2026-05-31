import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { Providers } from "./Providers";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Toast } from "@/components/Toast";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: "ClariPet® — Premium Pet Care",
  description: "Safe. Gentle. Effective. Premium, pet-safe care made with love in Indonesia.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={poppins.variable}>
      <body>
        <Providers>
          <Navbar />
          {children}
          <Footer />
          <Toast />
        </Providers>
      </body>
    </html>
  );
}
