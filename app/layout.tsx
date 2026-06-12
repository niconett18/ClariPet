import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { Providers } from "./Providers";
import { Toast } from "@/components/Toast";
import { SiteChrome } from "@/components/SiteChrome";
import { FlyToCartProvider } from "@/context/FlyToCartContext";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "ClariPet® — Premium Pet Care",
    template: "%s | ClariPet®",
  },
  description: "Safe. Gentle. Effective. Premium, pet-safe care made with love in Indonesia.",
  openGraph: {
    siteName: "ClariPet",
    type: "website",
    locale: "id_ID",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={poppins.variable}>
      <body>
        <Providers>
          <FlyToCartProvider>
            <SiteChrome>{children}</SiteChrome>
          </FlyToCartProvider>
          <Toast />
        </Providers>
      </body>
    </html>
  );
}
