"use client";

import { useEffect, useRef } from "react";
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
              <a href="#final" className="btn btn--primary">
                <WaIcon />
                Agende uma visita e conheça nosso espaço
              </a>
            </div>
          </div>

          <div className={`local-map ${styles.map}`} aria-hidden="true">
            <svg viewBox="0 0 600 420" preserveAspectRatio="xMidYMid slice">
              <rect width="600" height="420" fill="#E2ECF2"/>
              <path d="M0 110 Q 200 90 600 160" stroke="#fff" strokeWidth="18" fill="none"/>
              <path d="M0 280 Q 280 240 600 320" stroke="#fff" strokeWidth="14" fill="none"/>
              <path d="M180 0 L 220 420" stroke="#fff" strokeWidth="20" fill="none"/>
              <path d="M420 0 Q 380 200 460 420" stroke="#fff" strokeWidth="14" fill="none"/>
              <rect x="40" y="30" width="120" height="60" rx="8" fill="#DDEEEB"/>
              <rect x="40" y="160" width="120" height="100" rx="8" fill="#FBEEB0" opacity="0.5"/>
              <rect x="240" y="40" width="160" height="50" rx="8" fill="#DDEEEB"/>
              <rect x="250" y="180" width="140" height="50" rx="8" fill="#F4DDD0" opacity="0.6"/>
              <rect x="260" y="250" width="120" height="50" rx="8" fill="#FBEEB0" opacity="0.5"/>
              <rect x="440" y="30" width="130" height="100" rx="8" fill="#DDEEEB"/>
              <rect x="480" y="170" width="100" height="80" rx="8" fill="#F4DDD0" opacity="0.6"/>
              <rect x="470" y="340" width="120" height="70" rx="8" fill="#DDEEEB"/>
              <circle cx="90" cy="370" r="22" fill="#A7D6CF" opacity="0.7"/>
              <circle cx="130" cy="380" r="14" fill="#A7D6CF" opacity="0.7"/>
            </svg>
            <div className={styles.pin}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 22s8-7 8-13a8 8 0 1 0-16 0c0 6 8 13 8 13z"/>
              </svg>
              Catavento
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
