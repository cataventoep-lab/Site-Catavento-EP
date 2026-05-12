"use client";

import { useEffect, useRef } from "react";
import styles from "./Depoimentos.module.css";
import { WaIcon } from "./icons";

const cards = [
  { initials: "AS", color: "var(--cv-coral-strong)", textColor: "#fff", name: "Aline Souza", role: "Mãe de aluno", quote: "\"A evolução foi impressionante e recomendo de olhos fechados.\"" },
  { initials: "JR", color: "var(--cv-verde-pin)", textColor: "#fff", name: "Josiane Ramos", role: "Mãe de aluna", quote: "\"Minha filha está muito mais confiante e entusiasmada com os estudos.\"" },
  { initials: "DP", color: "var(--cv-azul-pin)", textColor: "#fff", name: "Diana Perella", role: "Mãe de aluno", quote: "\"Meu filho sempre volta das aulas animado e motivado.\"" },
  { initials: "TC", color: "var(--cv-girassol-strong)", textColor: "var(--cv-marinho)", name: "Talita Cumi", role: "Mãe de aluna", quote: "\"Muito cuidado, atenção e dedicação em cada atendimento.\"" },
];

export default function Depoimentos() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    let cleanup: (() => void) | undefined;
    (async () => {
      const { default: gsap } = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);

      const ctx = gsap.context(() => {
        gsap.from(".testi-head", {
          scrollTrigger: { trigger: ".testi-head", start: "top 88%", toggleActions: "play none none none" },
          opacity: 0, y: 28, duration: 0.7, ease: "power3.out",
        });
        gsap.from(".testi-card", {
          scrollTrigger: { trigger: ".testi-grid", start: "top 85%", toggleActions: "play none none none" },
          opacity: 0, y: 36, duration: 0.55, ease: "power3.out", stagger: 0.1,
        });
        gsap.from(".testi-cta", {
          scrollTrigger: { trigger: ".testi-cta", start: "top 90%", toggleActions: "play none none none" },
          opacity: 0, y: 20, duration: 0.5, ease: "power3.out",
        });
      }, sectionRef);
      cleanup = () => ctx.revert();
    })();
    return () => cleanup?.();
  }, []);

  return (
    <section ref={sectionRef} className={styles.section} id="depoimentos">
      <div className="wrap">
        <div className={`testi-head ${styles.head}`}>
          <div className="section-head" style={{ margin: "0 auto", textAlign: "center" }}>
            <span className="eyebrow">Depoimentos</span>
            <h2>O que as famílias dizem sobre nós</h2>
            <p style={{ marginLeft: "auto", marginRight: "auto" }}>
              Histórias reais de famílias que viram seus filhos transformarem a relação com os estudos.
            </p>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "#fff", borderRadius: 999, padding: "8px 18px", boxShadow: "0 2px 10px rgba(0,0,0,0.08)", marginTop: 20, fontSize: 14, fontWeight: 700, color: "#1F2D5C" }}>
              <span style={{ color: "#F4C622", letterSpacing: 2 }}>★★★★★</span>
              5 estrelas no Google
            </div>
          </div>
        </div>

        <div className={`testi-grid ${styles.grid}`}>
          {cards.map((c) => (
            <article key={c.name} className={`testi-card ${styles.card}`}>
              <div className={styles.stars}>★ ★ ★ ★ ★</div>
              <p className={styles.quote}>{c.quote}</p>
              <div className={styles.who}>
                <div className={styles.avatar} style={{ background: c.color, color: c.textColor }}>{c.initials}</div>
                <div>
                  <div className={styles.name}>{c.name}</div>
                  <div className={styles.role}>{c.role}</div>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className={`testi-cta ${styles.cta}`}>
          Será um prazer atender sua família também.
          <div style={{ marginTop: 18 }}>
            <a href="https://wa.me/5541988727103?text=Ol%C3%A1!%20Visitei%20o%20site%20e%20quero%20saber%20mais%20sobre%20aulas%20particulares" target="_blank" rel="noopener noreferrer" className="btn btn--primary">
              <WaIcon />
              Conversar pelo WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
