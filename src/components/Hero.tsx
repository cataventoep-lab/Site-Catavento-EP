"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import styles from "./Hero.module.css";
import { WaIcon, CalendarIcon, PersonIcon, ChatIcon } from "./icons";

const WA_URL = "https://wa.me/5541988727103?text=Ol%C3%A1!%20Visitei%20o%20site%20e%20quero%20saber%20mais%20sobre%20aulas%20particulares";

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
          <span className="eyebrow hero-eyebrow">Em Fazenda Rio Grande · PR</span>
          <h1 className={`hero-h1 ${styles.h1}`}>
            Apoio pedagógico{" "}
            <span className={styles.accent}>individualizado</span>{" "}
            para cada criança aprender com confiança.
          </h1>
          <p className={`hero-lead ${styles.lead}`}>
            Aulas particulares, reforço escolar e alfabetização com planejamento
            personalizado e acompanhamento contínuo.
          </p>
          <div className={`hero-cta ${styles.cta}`}>
            <a href={WA_URL} target="_blank" rel="noopener noreferrer" className="btn btn--primary">
              <WaIcon />
              Agende uma conversa
            </a>
            <a href="#como" className="btn btn--ghost">Como funciona →</a>
          </div>
        </div>

        <div className={`hero-stage ${styles.stage}`} aria-hidden="true">
          <div className={`hero-blob-el ${styles.blob}`} />

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
            <Image
              src="/foto-hero.jpg"
              alt="Professoras Fernanda e Luiza do Catavento Espaço Pedagógico"
              fill
              style={{ objectFit: "cover", objectPosition: "top center" }}
              priority
              sizes="(max-width: 980px) 420px, 540px"
            />
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
