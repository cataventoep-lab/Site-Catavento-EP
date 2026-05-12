"use client";

import { useEffect, useRef } from "react";
import styles from "./FinalCta.module.css";
import { WaIcon } from "./icons";

export default function FinalCta() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    let cleanup: (() => void) | undefined;
    (async () => {
      const { default: gsap } = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);

      const ctx = gsap.context(() => {
        gsap.from(".final-inner", {
          scrollTrigger: { trigger: ".final-inner", start: "top 85%", toggleActions: "play none none none" },
          opacity: 0, y: 40, scale: 0.97, duration: 0.8, ease: "power3.out",
        });
        gsap.from(".final-inner > *", {
          scrollTrigger: { trigger: ".final-inner", start: "top 85%", toggleActions: "play none none none" },
          opacity: 0, y: 24, duration: 0.55, ease: "power3.out", stagger: 0.1, delay: 0.2,
        });
      }, sectionRef);
      cleanup = () => ctx.revert();
    })();
    return () => cleanup?.();
  }, []);

  return (
    <section ref={sectionRef} className={styles.section} id="final">
      <div className="wrap">
        <div className={`final-inner ${styles.inner}`}>
          <span className={`eyebrow ${styles.eyebrow}`}>Vamos conversar?</span>
          <h2 className={styles.h2}>Vamos conversar sobre as necessidades do seu filho?</h2>
          <p className={styles.lead}>
            Se você busca um atendimento pedagógico individualizado, acolhedor e planejado de acordo com as necessidades da sua criança, será um prazer conhecê-la e entender como podemos ajudar.
          </p>
          <div className={styles.cta}>
            <a href="https://wa.me/" target="_blank" rel="noopener noreferrer" className={`btn ${styles.btn}`}>
              <WaIcon size={22} />
              Entre em contato pelo WhatsApp
            </a>
            <span className={styles.note}>⚡ Vagas limitadas — consulte a disponibilidade de horários</span>
          </div>
          <div className={styles.decorTl} aria-hidden="true" />
          <div className={styles.decorBr} aria-hidden="true" />
        </div>
      </div>
    </section>
  );
}
