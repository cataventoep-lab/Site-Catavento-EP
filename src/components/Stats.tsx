"use client";

import { useEffect, useRef } from "react";
import styles from "./Stats.module.css";

const cards = [
  {
    color: "var(--cv-coral-strong)",
    textColor: "#fff",
    num: "1:1",
    label: "1 aluno por atendimento",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="8" r="4"/><path d="M4 21c0-4 4-7 8-7s8 3 8 7"/>
      </svg>
    ),
  },
  {
    color: "var(--cv-menta-strong)",
    textColor: "var(--cv-marinho)",
    num: "10+",
    label: "Anos de experiência",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="5" width="18" height="16" rx="2"/><path d="M16 3v4M8 3v4M3 11h18"/>
      </svg>
    ),
  },
  {
    color: "var(--cv-serenity-strong)",
    textColor: "var(--cv-marinho)",
    num: "60 min",
    label: "De atendimento exclusivo",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>
      </svg>
    ),
  },
  {
    color: "var(--cv-girassol-strong)",
    textColor: "var(--cv-marinho)",
    num: "Semanal",
    label: "Devolutivas às famílias",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 11.5a8.4 8.4 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.4 8.4 0 0 1-3.8-.9L3 21l1.9-5.7a8.5 8.5 0 1 1 16.1-3.8z"/>
      </svg>
    ),
  },
];

export default function Stats() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    let cleanup: (() => void) | undefined;
    (async () => {
      const { default: gsap } = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);

      const ctx = gsap.context(() => {
        gsap.from(".stats-inner", {
          scrollTrigger: { trigger: ".stats-inner", start: "top 85%", toggleActions: "play none none none" },
          opacity: 0, y: 40, scale: 0.97, duration: 0.8, ease: "power3.out",
        });
        gsap.from(".stats-copy > *", {
          scrollTrigger: { trigger: ".stats-copy", start: "top 85%", toggleActions: "play none none none" },
          opacity: 0, x: -24, duration: 0.6, ease: "power3.out", stagger: 0.1,
        });
        gsap.from(".stat-card", {
          scrollTrigger: { trigger: ".stats-grid", start: "top 85%", toggleActions: "play none none none" },
          opacity: 0, y: 32, scale: 0.9, duration: 0.5, ease: "back.out(1.4)", stagger: 0.1,
        });
      }, sectionRef);
      cleanup = () => ctx.revert();
    })();
    return () => cleanup?.();
  }, []);

  return (
    <section ref={sectionRef} className={styles.section}>
      <div className="wrap">
        <div className={`stats-inner ${styles.inner}`}>
          <div className={`stats-copy ${styles.copy}`}>
            <span className={`eyebrow ${styles.eyebrow}`}>Nossos números</span>
            <h2 className={styles.h2}>Números que refletem nosso compromisso</h2>
          </div>
          <div className={`stats-grid ${styles.grid}`}>
            {cards.map((c) => (
              <div key={c.label} className={`stat-card ${styles.card}`}>
                <div className={styles.ic} style={{ background: c.color, color: c.textColor }}>{c.icon}</div>
                <div className={styles.num}>{c.num}</div>
                <div className={styles.lab}>{c.label}</div>
              </div>
            ))}
          </div>
          <div className={styles.decorTr} aria-hidden="true" />
          <div className={styles.decorBl} aria-hidden="true" />
        </div>
      </div>
    </section>
  );
}
