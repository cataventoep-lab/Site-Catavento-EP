"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./Faq.module.css";

const items = [
  { q: "Como é feita a avaliação inicial?", a: "Por meio de uma sondagem pedagógica para identificar o nível atual do aluno e suas necessidades." },
  { q: "Qual é a frequência das aulas?", a: "1, 2 ou 3 vezes por semana, conforme a necessidade da criança." },
  { q: "Quanto tempo dura cada atendimento?", a: "60 minutos." },
  { q: "O atendimento é individual?", a: "Sim, com um aluno e uma professora." },
  { q: "Vocês atendem crianças com TDAH, dislexia e autismo?", a: "Sim. Adaptamos o planejamento e as estratégias para o perfil de cada criança." },
  { q: "Como acompanho a evolução do meu filho?", a: "Com devolutivas semanais pelo WhatsApp." },
  { q: "Há vagas disponíveis?", a: "Consulte a disponibilidade de horários pelo WhatsApp." },
];

function FaqItem({ q, a, defaultOpen = false }: { q: string; a: string; defaultOpen?: boolean }) {
  const [open, setOpen] = useState(defaultOpen);
  const bodyRef = useRef<HTMLDivElement>(null);

  return (
    <div className={`${styles.item} ${open ? styles.open : ""}`}>
      <button className={styles.summary} onClick={() => setOpen((v) => !v)} aria-expanded={open}>
        {q}
        <span className={styles.icon} aria-hidden="true">{open ? "−" : "+"}</span>
      </button>
      <div
        className={styles.body}
        ref={bodyRef}
        style={{ maxHeight: open ? (bodyRef.current?.scrollHeight ?? 400) : 0 }}
      >
        <p className={styles.answer}>{a}</p>
      </div>
    </div>
  );
}

export default function Faq() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    let cleanup: (() => void) | undefined;
    (async () => {
      const { default: gsap } = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);

      const ctx = gsap.context(() => {
        gsap.from(".faq-copy", {
          scrollTrigger: { trigger: ".faq-copy", start: "top 85%", toggleActions: "play none none none" },
          opacity: 0, x: -32, duration: 0.7, ease: "power3.out",
        });
        gsap.from(".faq-item", {
          scrollTrigger: { trigger: ".faq-list", start: "top 85%", toggleActions: "play none none none" },
          opacity: 0, x: 32, duration: 0.45, ease: "power3.out", stagger: 0.07,
        });
      }, sectionRef);
      cleanup = () => ctx.revert();
    })();
    return () => cleanup?.();
  }, []);

  return (
    <section ref={sectionRef} className={styles.section} id="faq">
      <div className={styles.blob} aria-hidden="true" />
      <div className="wrap" style={{ position: "relative", zIndex: 1 }}>
        <div className={styles.grid}>
          <div className={`faq-copy ${styles.copy}`}>
            <span className="eyebrow">Dúvidas frequentes</span>
            <h2 className={styles.h2}>Perguntas frequentes</h2>
            <p className={styles.lead}>
              Resumimos aqui as dúvidas mais comuns das famílias. Se ainda restar alguma, chame a gente no WhatsApp.
            </p>
          </div>

          <div className={`faq-list ${styles.list}`}>
            {items.map((it, i) => (
              <div key={it.q} className="faq-item">
                <FaqItem q={it.q} a={it.a} defaultOpen={i === 0} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
