"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import styles from "./Sobre.module.css";

const badges = [
  { color: "var(--cv-girassol-strong)", label: "Pedagogia · UFSM" },
  { color: "var(--cv-coral-strong)", label: "Magistério" },
  { color: "var(--cv-verde-pin)", label: "+10 anos de experiência" },
  { color: "var(--cv-azul-pin)", label: "Pós-graduação" },
];

export default function Sobre() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    let cleanup: (() => void) | undefined;
    (async () => {
      const { default: gsap } = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);

      const ctx = gsap.context(() => {
        gsap.from(".sobre-stage", {
          scrollTrigger: { trigger: sectionRef.current, start: "top 85%", toggleActions: "play none none none" },
          opacity: 0, scale: 0.9, x: -32, duration: 0.9, ease: "power3.out",
        });
        gsap.from(".sobre-copy > *", {
          scrollTrigger: { trigger: ".sobre-copy", start: "top 85%", toggleActions: "play none none none" },
          opacity: 0, x: 32, duration: 0.6, ease: "power3.out", stagger: 0.1,
        });
        gsap.from(".sobre-badge", {
          scrollTrigger: { trigger: ".sobre-badges", start: "top 90%", toggleActions: "play none none none" },
          opacity: 0, y: 16, scale: 0.9, duration: 0.4, ease: "back.out(1.7)", stagger: 0.07,
        });
      }, sectionRef);
      cleanup = () => ctx.revert();
    })();
    return () => cleanup?.();
  }, []);

  return (
    <section ref={sectionRef} className={styles.section} id="sobre">
      <div className={styles.blobLeft} aria-hidden="true" />
      <div className="wrap" style={{ position: "relative", zIndex: 1 }}>
        <div className={styles.inner}>
          <div className={`sobre-stage ${styles.stage}`} aria-hidden="true">
            <div className={styles.disc} />
            <div className={styles.photo}>
              <Image
                src="/foto-sobre.jpg"
                alt="Professoras Fernanda e Luiza"
                fill
                style={{ objectFit: "cover", objectPosition: "top center" }}
                sizes="(max-width: 980px) 340px, 440px"
              />
            </div>
          </div>

          <div className={`sobre-copy ${styles.copy}`}>
            <span className="eyebrow">Sobre as professoras</span>
            <h2 className={styles.h2}>
              Somos as professoras <strong>Fernanda e Luiza</strong>
            </h2>
            <p className={styles.p1}>
              Formadas em Pedagogia pela Universidade Federal de Santa Maria (UFSM) e no Magistério (Curso Normal).
            </p>
            <p>
              Atuamos na área da educação desde 2014, com experiência em Educação Infantil, Anos Iniciais, turmas multisseriadas, contraturno escolar e orientação educacional.
            </p>
            <p>
              Também realizamos pós-graduações e formação contínua para oferecer um atendimento cada vez mais qualificado.
            </p>
            <p>
              Nosso propósito é ajudar cada criança a aprender com mais confiança, autonomia e segurança.
            </p>
            <div className={`sobre-badges ${styles.badges}`}>
              {badges.map((b) => (
                <span key={b.label} className={`badge sobre-badge`}>
                  <span style={{ width: 8, height: 8, borderRadius: "50%", background: b.color, display: "inline-block", flexShrink: 0 }} />
                  {b.label}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
