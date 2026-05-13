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
  { label: "sala de aula", src: "/espaco-sala.webp", alt: "Sala de aula do Catavento" },
  { label: "materiais", src: "/espaco-materiais.webp", alt: "Materiais pedagógicos" },
  { label: "jogos", src: "/espaco-jogos.webp", alt: "Sala de jogos do Catavento" },
  { label: "recepção", src: "/espaco-recepcao.webp", alt: "Recepção do Catavento" },
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
          scrollTrigger: { trigger: ".espaco-gallery", start: "top 88%", toggleActions: "play none none none" },
          opacity: 0, duration: 0.5, ease: "power2.out", stagger: 0.1,
          immediateRender: false,
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

          {/* Grade 2×2 — funciona em desktop, tablet e mobile */}
          <div className={`espaco-gallery ${styles.gallery}`}>
            {tiles.map((t, i) => (
              <div key={i} className={`espaco-tile ${styles.tile}`}>
                <Image
                  src={t.src}
                  alt={t.alt}
                  width={500}
                  height={500}
                  className={styles.tileImg}
                  style={{ objectPosition: t.label === "jogos" ? "left center" : "center" }}
                  sizes="(max-width: 640px) 47vw, (max-width: 980px) 220px, 280px"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
