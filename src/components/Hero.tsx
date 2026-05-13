"use client";

import { useEffect, useRef } from "react";
import styles from "./Hero.module.css";
import { WaIcon, CheckIcon, CalendarIcon, PersonIcon, ChatIcon } from "./icons";

const bullets = [
  "Atendimento individualizado",
  "Reforço em português e matemática",
  "Alfabetização e letramento",
  "Devolutivas semanais às famílias",
  "Vagas limitadas",
];

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    let cleanup: (() => void) | undefined;
    (async () => {
      const { default: gsap } = await import("gsap");
      const ctx = gsap.context(() => {
        const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

        tl.from(".hero-eyebrow", { opacity: 0, y: 20, duration: 0.6 })
          .from(".hero-h1", { opacity: 0, y: 32, duration: 0.7 }, "-=0.3")
          .from(".hero-lead", { opacity: 0, y: 24, duration: 0.6 }, "-=0.4")
          .from(".hero-cta", { opacity: 0, y: 20, duration: 0.5 }, "-=0.35")
          .from(".hero-bullet", { opacity: 0, x: -16, duration: 0.4, stagger: 0.08 }, "-=0.3")
          .from(".hero-stage", { opacity: 0, scale: 0.92, duration: 0.9, ease: "back.out(1.4)" }, "-=0.7")
          .from(".hero-chip", { opacity: 0, scale: 0.8, duration: 0.5, stagger: 0.12, ease: "back.out(1.7)" }, "-=0.5");
      }, sectionRef);
      cleanup = () => ctx.revert();
    })();
    return () => cleanup?.();
  }, []);

  return (
    <section ref={sectionRef} className={styles.hero} id="inicio">
      <div className={`wrap ${styles.inner}`}>
        <div className={styles.copy}>
          <span className={`eyebrow hero-eyebrow`}>Em Fazenda Rio Grande · PR</span>
          <h1 className={`hero-h1 ${styles.h1}`}>
            Acompanhamento pedagógico{" "}
            <span className={styles.accent}>individualizado</span>{" "}
            para crianças que precisam de apoio para aprender com confiança.
          </h1>
          <p className={`hero-lead ${styles.lead}`}>
            Aulas particulares, reforço escolar e alfabetização com planejamento
            personalizado, acompanhamento contínuo e um ambiente acolhedor.
          </p>
          <div className={`hero-cta ${styles.cta}`}>
            <a href="https://wa.me/" target="_blank" rel="noopener noreferrer" className="btn btn--primary">
              <WaIcon />
              Agende uma conversa
            </a>
            <a href="#como" className="btn btn--ghost">Como funciona →</a>
          </div>
          <ul className={styles.bullets}>
            {bullets.map((b) => (
              <li key={b} className="hero-bullet">
                <span className="check-pill"><CheckIcon /></span>
                {b}
              </li>
            ))}
          </ul>
        </div>

        <div className={`hero-stage ${styles.stage}`} aria-hidden="true">
          <div className={styles.blob} />

          <svg className={styles.dots} width="100" height="80" viewBox="0 0 100 80">
            <g fill="#FFD89B">
              {[6,22,38,54,70].flatMap((x) =>
                [6,22,38,54].map((y) => (
                  <circle key={`${x}-${y}`} cx={x} cy={y} r="3.5" />
                ))
              )}
            </g>
          </svg>

          <div className={styles.art}>
            <svg viewBox="0 0 320 360" width="100%" height="100%">
              <rect x="58" y="220" width="204" height="130" rx="20" fill="#F4C622"/>
              <rect x="78" y="246" width="22" height="92" rx="4" fill="#4FA3E3"/>
              <rect x="118" y="246" width="22" height="92" rx="4" fill="#E64C3C"/>
              <rect x="158" y="246" width="22" height="92" rx="4" fill="#4FB477"/>
              <rect x="198" y="246" width="22" height="92" rx="4" fill="#A9C7D8"/>
              <path d="M104 230 q-12 -42 8 -70 q24 -32 48 -32 q24 0 48 32 q20 28 8 70 z" fill="#D98B68"/>
              <rect x="146" y="156" width="28" height="22" fill="#A86A48"/>
              <circle cx="160" cy="124" r="58" fill="#A86A48"/>
              <path d="M104 120 q0 -56 56 -56 q56 0 56 56 q-22 -10 -56 -10 q-34 0 -56 10z" fill="#1F2D5C"/>
              <rect x="100" y="100" width="120" height="14" rx="6" fill="#E64C3C"/>
              <circle cx="218" cy="107" r="9" fill="#E64C3C"/>
              <circle cx="140" cy="128" r="4" fill="#1F1F1F"/>
              <circle cx="180" cy="128" r="4" fill="#1F1F1F"/>
              <path d="M146 148 q14 10 28 0" stroke="#1F1F1F" strokeWidth="3.5" fill="none" strokeLinecap="round"/>
              <circle cx="128" cy="142" r="6" fill="#F4DDD0" opacity="0.6"/>
              <circle cx="192" cy="142" r="6" fill="#F4DDD0" opacity="0.6"/>
            </svg>
          </div>

          <div className={`hero-chip ${styles.chip} ${styles.chipTop}`}>
            <div className={`${styles.chipIc} ${styles.chipMenta}`}><CalendarIcon /></div>
            <div>
              <div className={styles.chipTitle}>60 minutos</div>
              <div className={styles.chipSub}>de atendimento exclusivo</div>
            </div>
          </div>

          <div className={`hero-chip ${styles.chip} ${styles.chipMid}`}>
            <div className={`${styles.chipIc} ${styles.chipGirassol}`}><PersonIcon /></div>
            <div>
              <div className={styles.chipTitle}>1 aluno : 1 professora</div>
              <div className={styles.chipSub}>atendimento individual</div>
            </div>
          </div>

          <div className={`hero-chip ${styles.chip} ${styles.chipBot}`}>
            <div className={`${styles.chipIc} ${styles.chipCoral}`}><ChatIcon /></div>
            <div>
              <div className={styles.chipTitle}>Devolutiva semanal</div>
              <div className={styles.chipSub}>para toda a família</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
