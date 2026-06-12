"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState, type ReactNode } from "react";

export function PageTransition({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);

  // Handle route change completion
  useEffect(() => {
    // Complete loading bar
    setProgress(100);
    const loadTimer = setTimeout(() => {
      setLoading(false);
      setProgress(0);
    }, 300);

    // Scroll-reveal observer
    const els = document.querySelectorAll<HTMLElement>(
      ".reveal, .reveal-left, .reveal-right, .reveal-scale",
    );
    if (els.length > 0) {
      const observer = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (entry.isIntersecting) {
              entry.target.classList.add("revealed");
              observer.unobserve(entry.target);
            }
          }
        },
        { threshold: 0.08, rootMargin: "0px 0px -20px 0px" },
      );
      els.forEach((el) => observer.observe(el));
      return () => {
        observer.disconnect();
        clearTimeout(loadTimer);
      };
    }

    return () => {
      clearTimeout(loadTimer);
    };
  }, [pathname]);

  // Intercept all internal Link clicks for instant loader feedback
  useEffect(() => {
    const handleLinkClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest("a");
      if (!target) return;

      const href = target.getAttribute("href");
      if (!href) return;

      // Only check internal links
      if (
        href.startsWith("/") &&
        !href.startsWith("//") &&
        target.getAttribute("target") !== "_blank" &&
        !e.defaultPrevented &&
        e.button === 0 &&
        !e.metaKey &&
        !e.ctrlKey &&
        !e.shiftKey &&
        !e.altKey
      ) {
        if (href === window.location.pathname) return;

        setLoading(true);
        setProgress(15);

        const interval = setInterval(() => {
          setProgress((prev) => {
            if (prev >= 90) {
              clearInterval(interval);
              return prev;
            }
            return prev + (90 - prev) * 0.25;
          });
        }, 100);

        target.addEventListener("mouseup", () => clearInterval(interval), { once: true });
        target.addEventListener("mouseleave", () => clearInterval(interval), { once: true });
      }
    };

    document.addEventListener("click", handleLinkClick);
    return () => document.removeEventListener("click", handleLinkClick);
  }, []);

  return (
    <>
      {loading && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            height: "3px",
            backgroundColor: "var(--pink)",
            boxShadow: "0 0 8px rgba(245, 205, 211, 0.8)",
            zIndex: 99999,
            width: `${progress}%`,
            transition: progress === 100 ? "width 0.2s ease, opacity 0.2s ease 0.1s" : "width 0.3s cubic-bezier(0.1, 0.8, 0.2, 1)",
            opacity: progress === 100 ? 0 : 1,
          }}
        />
      )}
      <div className="page-transition">
        {children}
      </div>
    </>
  );
}
