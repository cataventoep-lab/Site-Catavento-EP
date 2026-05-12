"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import styles from "./Espaco.module.css";
import { CheckIcon } from "./icons";

const bullets = [
  "Ambiente acolhedor e organizado",
  "Recursos lúdicos e interativos",
  "Materiais exclusivos",
  "Espaço confortável e inspirador",
];

const tiles = [
  { label: "sala de aula", src: "/espaco-sala.webp", alt: "Sala de aula do Catavento", tall: true, bg: "var(--cv-girassol-soft)" },
  { label: "materiais", src: "/espaco-materiais.webp", alt: "Materiais pedagógicos", tall: false, bg: "var(--cv-menta-soft)" },
  { label: "jogos", src: null, alt: "", tall: false, bg: "var(--cv-serenity-soft)" },
  { label: "recepção", src: "/espaco-recepcao.webp", alt: "Recepção do Catavento", tall: false, bg: "var(--cv-coral-soft)" },
];

export default function Espaco() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    let cleanup: (() => void) | undefined;
    (async () => {
      const { default: gsap } = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);

      const ctx = gsap.context(() => {
        gsap.from(".espaco-copy > *", {
          scrollTrigger: { trigger: ".espaco-copy", start: "top 85%", toggleActions: "play none none none" },
          opacity: 0, x: -32, duration: 0.6, ease: "power3.out", stagger: 0.1,
        });
        gsap.from(".espaco-tile", {
          scrollTrigger: { trigger: ".espaco-gallery", start: "top 85%", toggleActions: "play none none none" },
          opacity: 0, scale: 0.88, duration: 0.55, ease: "back.out(1.4)", stagger: 0.1,
        });
      }, sectionRef);
      cleanup = () => ctx.revert();
    })();
    return () => cleanup?.();
  }, []);

  return (
    <section ref={sectionRef} className={styles.section}>
      <div className="wrap">
        <div className={styles.inner}>
          <div className={`espaco-copy ${styles.copy}`}>
            <span className="eyebrow">Nosso espaço</span>
            <h2 className={styles.h2}>Um espaço cuidadosamente preparado para aprender</h2>
            <p className={styles.lead}>
              Um ambiente acolhedor, tranquilo e seguro, com recursos pedagógicos de qualidade e atendimento individualizado.
            </p>
            <ul className={styles.bullets}>
              {bullets.map((b) => (
                <li key={b}>
                  <span className="check-pill"><CheckIcon /></span>
                  {b}
                </li>
              ))}
            </ul>
          </div>

          <div className={`espaco-gallery ${styles.gallery}`}>
            {tiles.map((t, i) => (
              <div
                key={i}
                className={`espaco-tile ${styles.tile} ${t.tall ? styles.tileTall : ""}`}
                style={t.src ? undefined : { background: t.bg }}
              >
                {t.src ? (
                  <Image
                    src={t.src}
                    alt={t.alt}
                    fill
                    style={{ objectFit: "cover" }}
                    sizes="(max-width: 640px) 50vw, 300px"
                  />
                ) : (
                  <span className={styles.ph}>foto · {t.label}</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
