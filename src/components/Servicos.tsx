"use client";

import { useEffect, useRef } from "react";
import styles from "./Servicos.module.css";
import { WaIcon } from "./icons";

const cards = [
  {
    color: "coral",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 18h6M10 21h4"/>
        <path d="M12 3a6 6 0 0 1 4 10.5c-1 1-1.5 1.5-1.5 3H9.5c0-1.5-.5-2-1.5-3A6 6 0 0 1 12 3z"/>
      </svg>
    ),
    title: "Aulas Particulares",
    desc: "Apoio em conteúdos específicos com explicações claras e atividades direcionadas.",
  },
  {
    color: "menta",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 19V5l8 4 8-4v14"/><path d="M4 19h16"/>
      </svg>
    ),
    title: "Reforço Escolar",
    desc: "Fortalecimento da aprendizagem em português e matemática.",
  },
  {
    color: "serenity",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 7h18M3 12h18M3 17h12"/>
      </svg>
    ),
    title: "Alfabetização e Letramento",
    desc: "Desenvolvimento da leitura e da escrita com estratégias lúdicas e intencionais.",
  },
  {
    color: "girassol",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="5" width="18" height="16" rx="2"/>
        <path d="M16 3v4M8 3v4M3 11h18"/>
        <path d="M9 15l2 2 4-4"/>
      </svg>
    ),
    title: "Acompanhamento Escolar",
    desc: "Organização dos estudos, tarefas e preparação para avaliações.",
  },
];

export default function Servicos() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    let cleanup: (() => void) | undefined;
    (async () => {
      const { default: gsap } = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);

      const ctx = gsap.context(() => {
        gsap.from(".serv-head", {
          scrollTrigger: { trigger: ".serv-head", start: "top 88%", toggleActions: "play none none none" },
          opacity: 0, y: 32, duration: 0.7, ease: "power3.out",
        });
        gsap.from(".serv-card", {
          scrollTrigger: { trigger: ".serv-grid", start: "top 85%", toggleActions: "play none none none" },
          opacity: 0, duration: 0.6, ease: "power2.out", stagger: 0.1,
        });
        gsap.from(".serv-cta", {
          scrollTrigger: { trigger: ".serv-cta", start: "top 90%", toggleActions: "play none none none" },
          opacity: 0, y: 20, duration: 0.5, ease: "power3.out",
        });
      }, sectionRef);
      cleanup = () => ctx.revert();
    })();
    return () => cleanup?.();
  }, []);

  return (
    <section ref={sectionRef} className={styles.section} id="servicos">
      <div className="wrap">
        <div className={`serv-head ${styles.head}`}>
          <div className="section-head" style={{ margin: "0 auto", textAlign: "center" }}>
            <span className="eyebrow">Como podemos ajudar</span>
            <h2>Como podemos ajudar seu filho</h2>
            <p style={{ marginLeft: "auto", marginRight: "auto" }}>
              Cada criança aprende de forma única. Por isso, planejamos atendimentos
              personalizados, respeitando seu ritmo e suas necessidades.
            </p>
          </div>
        </div>

        <div className={`serv-grid ${styles.grid}`}>
          {cards.map((c) => (
            <article key={c.title} className={`serv-card ${styles.card}`}>
              <div className={`${styles.tile} ${styles[`tile--${c.color}`]}`}>{c.icon}</div>
              <h3 className={styles.cardTitle}>{c.title}</h3>
              <p className={styles.cardDesc}>{c.desc}</p>
            </article>
          ))}
        </div>

        <div className={`serv-cta ${styles.cta}`}>
          <p>Fale conosco e descubra como podemos ajudar seu filho.</p>
          <a href="https://wa.me/5541988727103?text=Ol%C3%A1!%20Visitei%20o%20site%20e%20quero%20saber%20mais%20sobre%20aulas%20particulares" target="_blank" rel="noopener noreferrer" className="btn btn--primary">
            <WaIcon />
            Falar pelo WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
