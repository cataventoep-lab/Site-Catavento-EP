"use client";

import { useEffect, useRef } from "react";
import styles from "./ComoFunciona.module.css";
import { WaIcon } from "./icons";

const steps = [
  { num: 1, title: "Conversa inicial com a família", color: "var(--cv-girassol-strong)", textColor: "var(--cv-marinho)", shadow: "rgba(244,198,34,0.35)" },
  { num: 2, title: "Assinatura do contrato", color: "var(--cv-coral-strong)", textColor: "#fff", shadow: "rgba(217,139,104,0.3)" },
  { num: 3, title: "Avaliação inicial", color: "var(--cv-menta-strong)", textColor: "var(--cv-marinho)", shadow: "rgba(167,214,207,0.5)" },
  { num: 4, title: "Planejamento individualizado", color: "var(--cv-serenity-strong)", textColor: "var(--cv-marinho)", shadow: "rgba(169,199,216,0.5)" },
  { num: 5, title: "Início das aulas", color: "var(--cv-laranja)", textColor: "#fff", shadow: "rgba(245,166,35,0.3)" },
  { num: 6, title: "Devolutivas semanais", color: "var(--cv-verde-pin)", textColor: "#fff", shadow: "rgba(79,180,119,0.3)" },
];

export default function ComoFunciona() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    let cleanup: (() => void) | undefined;
    (async () => {
      const { default: gsap } = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);

      const ctx = gsap.context(() => {
        gsap.from(".como-head", {
          scrollTrigger: { trigger: ".como-head", start: "top 88%", toggleActions: "play none none none" },
          opacity: 0, y: 28, duration: 0.7, ease: "power3.out",
        });
      cleanup = () => ctx.revert();
        gsap.from(".como-step", {
          scrollTrigger: { trigger: ".como-steps", start: "top 85%", toggleActions: "play none none none" },
          opacity: 0, y: 44, duration: 0.55, ease: "back.out(1.4)", stagger: 0.1,
        });
        gsap.from(".como-cta", {
          scrollTrigger: { trigger: ".como-cta", start: "top 92%", toggleActions: "play none none none" },
          opacity: 0, y: 20, duration: 0.5, ease: "power3.out",
        });
      }, sectionRef);
    })();
    return () => cleanup?.();
  }, []);

  return (
    <section ref={sectionRef} className={styles.section} id="como">
      <div className="wrap">
        <div className={`como-head ${styles.head}`}>
          <div className="section-head" style={{ margin: "0 auto", textAlign: "center" }}>
            <span className="eyebrow">Passo a passo</span>
            <h2>Como funciona o atendimento</h2>
            <p style={{ marginLeft: "auto", marginRight: "auto" }}>
              Um caminho simples e transparente — da primeira conversa até o acompanhamento contínuo do seu filho.
            </p>
          </div>
        </div>

        <div className={`como-steps ${styles.steps}`}>
          {steps.map((s) => (
            <div key={s.num} className={`como-step ${styles.step}`}>
              <div
                className={styles.num}
                style={{
                  background: s.color,
                  color: s.textColor,
                  boxShadow: `0 10px 20px ${s.shadow}`,
                }}
              >
                {s.num}
              </div>
              <div className={styles.stepTitle}>{s.title}</div>
              <div className={styles.connector} aria-hidden="true" />
            </div>
          ))}
        </div>

        <div className={`como-cta ${styles.cta}`}>
          <a href="#final" className="btn btn--primary">
            <WaIcon />
            Agende uma conversa e saiba como funciona na prática
          </a>
        </div>
      </div>
    </section>
  );
}
