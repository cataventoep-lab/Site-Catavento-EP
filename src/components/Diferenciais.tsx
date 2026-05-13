"use client";

import { useEffect, useRef } from "react";
import styles from "./Diferenciais.module.css";
import { WaIcon, CheckIcon } from "./icons";

const items = [
  "Acompanhamento individualizado",
  "Planejamento exclusivo para cada aluno",
  "Jogos e recursos pedagógicos próprios",
  "Devolutivas semanais às famílias",
  "Orientações para continuidade em casa",
  "Auxílio na rotina de estudos",
];

export default function Diferenciais() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    let cleanup: (() => void) | undefined;
    (async () => {
      const { default: gsap } = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);

      const ctx = gsap.context(() => {
        gsap.from(".dif-copy", {
          scrollTrigger: { trigger: ".dif-copy", start: "top 85%", toggleActions: "play none none none" },
          opacity: 0, x: -40, duration: 0.8, ease: "power3.out",
        });
        gsap.from(".dif-item", {
          scrollTrigger: { trigger: ".dif-list", start: "top 85%", toggleActions: "play none none none" },
          opacity: 0, x: 40, duration: 0.5, ease: "power3.out", stagger: 0.08,
        });
      }, sectionRef);
      cleanup = () => ctx.revert();
    })();
    return () => cleanup?.();
  }, []);

  return (
    <section ref={sectionRef} className={styles.section}>
      <div className={styles.blobTr} aria-hidden="true" />
      <div className={styles.blobBl} aria-hidden="true" />
      <div className="wrap" style={{ position: "relative", zIndex: 1 }}>
        <div className={styles.grid}>
          <div className="dif-copy">
            <span className="eyebrow">Diferenciais</span>
            <h2 className={styles.h2}>
              Mais do que aulas: um acompanhamento pensado para o desenvolvimento do seu filho
            </h2>
            <p className={styles.lead}>
              Cada atendimento é planejado para promover avanços acadêmicos, confiança, autonomia e segurança para aprender.
            </p>
            <div style={{ marginTop: 36 }}>
              <a href="https://wa.me/" target="_blank" rel="noopener noreferrer" className="btn btn--primary">
                <WaIcon />
                Consulte a disponibilidade
              </a>
            </div>
          </div>

          <div className={`dif-list ${styles.list}`}>
            {items.map((item) => (
              <div key={item} className={`dif-item ${styles.item}`}>
                <span className="check-pill"><CheckIcon /></span>
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
