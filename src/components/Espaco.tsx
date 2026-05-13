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
  { label: "sala de aula", src: "/espaco-sala.webp", alt: "Sala de aula do Catavento", bg: "var(--cv-girassol-soft)" },
  { label: "materiais", src: "/espaco-materiais.webp", alt: "Materiais pedagógicos", bg: "var(--cv-menta-soft)" },
  { label: "jogos", src: "/espaco-jogos.webp", alt: "Sala de jogos do Catavento", bg: "var(--cv-serenity-soft)" },
  { label: "recepção", src: "/espaco-recepcao.webp", alt: "Recepção do Catavento", bg: "var(--cv-coral-soft)" },
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
        // immediateRender: false → tiles ficam visíveis até o tween iniciar
        gsap.from(".espaco-tile", {
          scrollTrigger: { trigger: ".espaco-gallery", start: "top 85%", toggleActions: "play none none none" },
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

          {/* Desktop/tablet: grade 2×2 */}
          <div className={`espaco-gallery ${styles.gallery}`}>
            {tiles.map((t, i) => (
              <div
                key={i}
                className={`espaco-tile ${styles.tile}`}
                style={t.src ? undefined : { background: t.bg }}
              >
                {t.src && (
                  <Image
                    src={t.src}
                    alt={t.alt}
                    fill
                    style={{ objectFit: "cover", objectPosition: t.label === "jogos" ? "left center" : "center" }}
                    sizes="(max-width: 980px) 45vw, 300px"
                  />
                )}
              </div>
            ))}
          </div>

          {/* Mobile: foto única com dimensões explícitas */}
          <div className={styles.galleryMobile}>
            <Image
              src="/espaco-sala.webp"
              alt="Sala de aula do Catavento Espaço Pedagógico"
              width={800}
              height={600}
              style={{ width: "100%", height: "auto", borderRadius: "var(--cv-radius-lg)", display: "block" }}
              sizes="(max-width: 640px) 100vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
