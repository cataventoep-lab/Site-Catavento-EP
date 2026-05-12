"use client";

import { useEffect, useRef } from "react";
import styles from "./Espaco.module.css";
import { CheckIcon } from "./icons";

const bullets = [
  "Ambiente premium e organizado",
  "Recursos lúdicos e interativos",
  "Materiais exclusivos",
  "Espaço confortável e inspirador",
];

const tiles = [
  { label: "sala de aula", bg: "var(--cv-girassol-soft)", span: "tall" },
  { label: "materiais", bg: "var(--cv-menta-soft)", span: "normal" },
  { label: "jogos", bg: "var(--cv-serenity-soft)", span: "normal" },
  { label: "recepção", bg: "var(--cv-coral-soft)", span: "wide" },
];

export default function Espaco() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    let cleanup: (() => void) | undefined;
    (async () => {
      const { default: gsap } = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);

      const ctx = gsap.context(() => {
        gsap.from(".espaco-copy > *", {
          scrollTrigger: { trigger: ".espaco-copy", start: "top 85%", toggleActions: "play none none none" },
          opacity: 0, x: -32, duration: 0.6, ease: "power3.out", stagger: 0.1,
        });
        gsap.from(".espaco-tile", {
          scrollTrigger: { trigger: ".espaco-gallery", start: "top 85%", toggleActions: "play none none none" },
          opacity: 0, scale: 0.88, duration: 0.55, ease: "back.out(1.4)", stagger: 0.1,
        });
      }, sectionRef);
      cleanup = () => ctx.revert();
    })();
    return () => cleanup?.();
  }, []);

  return (
    <section ref={sectionRef} className={styles.section}>
      <div className="wrap">
        <div className={styles.inner}>
          <div className={`espaco-copy ${styles.copy}`}>
            <span className="eyebrow">Nosso espaço</span>
            <h2 className={styles.h2}>Um espaço cuidadosamente preparado para aprender</h2>
            <p className={styles.lead}>
              Um ambiente acolhedor, tranquilo e seguro, com recursos pedagógicos de qualidade e atendimento individualizado.
            </p>
            <ul className={styles.bullets}>
              {bullets.map((b) => (
                <li key={b}>
                  <span className="check-pill"><CheckIcon /></span>
                  {b}
                </li>
              ))}
            </ul>
          </div>

          <div className={`espaco-gallery ${styles.gallery}`}>
            {tiles.map((t, i) => (
              <div
                key={i}
                className={`espaco-tile ${styles.tile} ${t.span === "tall" ? styles.tileTall : t.span === "wide" ? styles.tileWide : ""}`}
                style={{ background: t.bg }}
              >
                <span className={styles.ph}>foto · {t.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
