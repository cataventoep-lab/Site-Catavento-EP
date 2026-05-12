"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import styles from "./Header.module.css";
import { WaIcon } from "./icons";

const navLinks = [
  { href: "#servicos", label: "Início" },
  { href: "#como", label: "Como funciona" },
  { href: "#sobre", label: "Sobre nós" },
  { href: "#depoimentos", label: "Depoimentos" },
  { href: "#faq", label: "Perguntas" },
  { href: "#local", label: "Localização" },
];

export default function Header() {
  const headerRef = useRef<HTMLElement>(null);
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      ref={headerRef}
      className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}
    >
      <div className={`wrap ${styles.inner}`}>
        <a href="#" className={styles.logo} aria-label="Catavento">
          <Image src="/logo-catavento.svg" alt="Catavento Espaço Pedagógico" width={160} height={44} priority />
        </a>

        <nav className={`${styles.nav} ${menuOpen ? styles.navOpen : ""}`} aria-label="Navegação principal">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} className={styles.link} onClick={() => setMenuOpen(false)}>
              {l.label}
            </a>
          ))}
        </nav>

        <div className={styles.actions}>
          <a href="https://wa.me/5541988727103?text=Ol%C3%A1!%20Visitei%20o%20site%20e%20quero%20saber%20mais%20sobre%20aulas%20particulares" target="_blank" rel="noopener noreferrer" className="btn btn--primary">
            <WaIcon />
            Fale no WhatsApp
          </a>
          <button
            className={styles.burger}
            aria-label="Menu"
            onClick={() => setMenuOpen((v) => !v)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>
    </header>
  );
}
