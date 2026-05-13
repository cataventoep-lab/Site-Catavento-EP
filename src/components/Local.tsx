"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import styles from "./Local.module.css";
import { WaIcon, MapPinIcon } from "./icons";

export default function Local() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    let cleanup: (() => void) | undefined;
    (async () => {
      const { default: gsap } = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);

      const ctx = gsap.context(() => {
        gsap.from(".local-copy > *", {
          scrollTrigger: { trigger: ".local-copy", start: "top 85%", toggleActions: "play none none none" },
          opacity: 0, x: -32, duration: 0.6, ease: "power3.out", stagger: 0.1,
        });
        gsap.from(".local-map", {
          scrollTrigger: { trigger: ".local-map", start: "top 85%", toggleActions: "play none none none" },
          opacity: 0, x: 40, scale: 0.96, duration: 0.8, ease: "power3.out",
        });
      }, sectionRef);
      cleanup = () => ctx.revert();
    })();
    return () => cleanup?.();
  }, []);

  return (
    <section ref={sectionRef} className={styles.section} id="local">
      <div className="wrap">
        <div className={styles.inner}>
          <div className={`local-copy ${styles.copy}`}>
            <span className="eyebrow">Localização</span>
            <h2 className={styles.h2}>Localização e atendimento</h2>
            <p className={styles.lead}>
              Atendemos presencialmente famílias de Fazenda Rio Grande, Mandirituba, Curitiba e região.
            </p>

            <div className={styles.addr}>
              <div className={styles.addrIc}><MapPinIcon /></div>
              <div>
                <div className={styles.addrTitle}>Endereço</div>
                <div className={styles.addrBody}>
                  Av. Tomaz Edson de Andrade Vieira, 600 – Eucaliptos<br />
                  Fazenda Rio Grande – PR, 83820-701
                </div>
              </div>
            </div>

            <div className={styles.cta}>
              <a href="https://wa.me/5541988727103?text=Ol%C3%A1!%20Visitei%20o%20site%20e%20quero%20saber%20mais%20sobre%20aulas%20particulares" target="_blank" rel="noopener noreferrer" className="btn btn--primary">
                <WaIcon />
                Agende uma visita e conheça nosso espaço
              </a>
            </div>
          </div>

          <div className={`local-map ${styles.map}`}>
            <Image
              src="/foto-local.webp"
              alt="Fachada do Catavento Espaço Pedagógico em Fazenda Rio Grande"
              fill
              style={{ objectFit: "cover", objectPosition: "center" }}
              sizes="(max-width: 980px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
