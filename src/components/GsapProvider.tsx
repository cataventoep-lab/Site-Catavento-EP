"use client";

import { useEffect } from "react";

export default function GsapProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    (async () => {
      const { default: gsap } = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);

      /* Floating chips animation */
      gsap.to(".hero-chip:nth-child(1)", {
        y: -10, duration: 4.2, ease: "sine.inOut", repeat: -1, yoyo: true,
      });
      gsap.to(".hero-chip:nth-child(2)", {
        y: -8, duration: 5.1, ease: "sine.inOut", repeat: -1, yoyo: true, delay: 1.2,
      });
      gsap.to(".hero-chip:nth-child(3)", {
        y: -12, duration: 3.8, ease: "sine.inOut", repeat: -1, yoyo: true, delay: 0.6,
      });

      /* Subtle blob morph */
      gsap.to(".hero-stage .hero-blob-el", {
        borderRadius: "52% 48% 44% 56% / 44% 56% 48% 52%",
        duration: 6,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
      });
    })();
  }, []);

  return <>{children}</>;
}
