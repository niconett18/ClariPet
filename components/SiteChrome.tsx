"use client";

import { usePathname } from "next/navigation";
import dynamic from "next/dynamic";
import { Navbar } from "@/components/Navbar";
import { PageTransition } from "@/components/PageTransition";

const Footer = dynamic(() => import("@/components/Footer").then((mod) => mod.Footer));

// Routes that render full-screen without the global navbar/footer.
const BARE_ROUTES = ["/login", "/signup", "/forgot-password", "/reset-password"];

export function SiteChrome({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isBare = BARE_ROUTES.some((r) => pathname === r || pathname.startsWith(`${r}/`));

  if (isBare) {
    return <>{children}</>;
  }

  return (
    <>
      <Navbar />
      <PageTransition>{children}</PageTransition>
      <Footer />
    </>
  );
}
