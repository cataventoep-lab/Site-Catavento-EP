"use client";

import { useEffect, useRef } from "react";
import styles from "./ParaQuem.module.css";

const items = [
  { letter: "A", bg: "var(--cv-coral-soft)", color: "var(--cv-coral-strong)", text: "Estão em fase de alfabetização" },
  { letter: "B", bg: "var(--cv-menta-soft)", color: "var(--cv-verde-pin)", text: "Têm dificuldades em leitura, escrita ou matemática" },
  { letter: "C", bg: "var(--cv-serenity-soft)", color: "var(--cv-azul-pin)", text: "Precisam de reforço escolar" },
  { letter: "D", bg: "var(--cv-girassol-soft)", color: "var(--cv-girassol-deep)", text: "Apresentam dificuldades de atenção e organização" },
  { letter: "E", bg: "var(--cv-coral-soft)", color: "var(--cv-coral-strong)", text: "Necessitam desenvolver autonomia nos estudos" },
  { letter: "F", bg: "var(--cv-menta-soft)", color: "var(--cv-verde-pin)", text: "Possuem demandas como TDAH, dislexia e autismo" },
];

export default function ParaQuem() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    let cleanup: (() => void) | undefined;
    (async () => {
      const { default: gsap } = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);

      const ctx = gsap.context(() => {
        gsap.from(".pq-copy", {
          scrollTrigger: { trigger: sectionRef.current, start: "top 85%", toggleActions: "play none none none" },
          opacity: 0, y: 28, duration: 0.7, ease: "power3.out",
        });
      cleanup = () => ctx.revert();
        gsap.from(".pq-item", {
          scrollTrigger: { trigger: ".pq-list", start: "top 85%", toggleActions: "play none none none" },
          opacity: 0, y: 24, duration: 0.45, ease: "power3.out", stagger: 0.07,
        });
      }, sectionRef);
    })();
    return () => cleanup?.();
  }, []);

  return (
    <section ref={sectionRef} className={styles.section}>
      <div className="wrap">
        <div className={styles.inner}>
          <div className={styles.blob} aria-hidden="true" />
          <div className="pq-copy">
            <span className="eyebrow">Para quem é indicado</span>
            <h2 className={styles.h2}>Para quem é indicado o nosso acompanhamento</h2>
            <p className={styles.lead}>
              Nosso atendimento é pensado para crianças que precisam de um olhar atento, paciente e planejado — em qualquer fase da jornada escolar.
            </p>
          </div>
          <ul className={`pq-list ${styles.list}`}>
            {items.map((it) => (
              <li key={it.letter} className={`pq-item ${styles.item}`}>
                <span className={styles.dot} style={{ background: it.bg, color: it.color }}>{it.letter}</span>
                {it.text}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
