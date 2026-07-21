"use client";

import { useEffect } from "react";
import Lenis from "lenis";

export function SmoothScrollProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Don't run smooth scrolling on touch devices or mobile viewports
    const isTouchDevice = window.matchMedia("(pointer: coarse)").matches || window.innerWidth < 768;
    if (isTouchDevice) {
      // Safari repaint & scroll-trigger wake-up fix for mobile viewports
      const timer = setTimeout(() => {
        window.scrollBy(0, 1);
        window.scrollBy(0, -1);
        void document.body.offsetHeight; // Force layout recalculation and paint pass
      }, 80);
      return () => clearTimeout(timer);
    }

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      touchMultiplier: 2,
    });

    (window as any).lenis = lenis;

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      delete (window as any).lenis;
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}
