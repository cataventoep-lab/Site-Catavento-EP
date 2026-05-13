import Image from "next/image";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="wrap">
        <div className={styles.top}>
          <div className={styles.brand}>
            <Image src="/logo-catavento.svg" alt="Catavento Espaço Pedagógico" width={160} height={44} className={styles.logo} />
            <p>Acompanhamento pedagógico individualizado em Fazenda Rio Grande – PR.</p>
            <div className={styles.social} aria-label="Redes sociais">
              <a href="https://wa.me/" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className={styles.socialLink}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M.057 24l1.687-6.163a11.867 11.867 0 01-1.588-5.945C.16 5.335 5.495 0 12.05 0a11.82 11.82 0 018.413 3.488 11.82 11.82 0 013.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 01-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z"/>
                </svg>
              </a>
              <a href="#" aria-label="Instagram" className={styles.socialLink}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
                  <rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor"/>
                </svg>
              </a>
              <a href="#" aria-label="Facebook" className={styles.socialLink}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M13 22v-8h3l1-4h-4V7.5c0-1 .3-1.5 1.7-1.5H17V2.2c-.3 0-1.4-.2-2.6-.2-2.6 0-4.4 1.6-4.4 4.5V10H7v4h3v8h3z"/>
                </svg>
              </a>
            </div>
          </div>

          <div className={styles.col}>
            <h4>Navegação</h4>
            <a href="#servicos">Como ajudamos</a>
            <a href="#como">Como funciona</a>
            <a href="#sobre">Sobre nós</a>
            <a href="#depoimentos">Depoimentos</a>
            <a href="#faq">Perguntas frequentes</a>
          </div>

          <div className={styles.col}>
            <h4>Serviços</h4>
            <a href="#servicos">Aulas particulares</a>
            <a href="#servicos">Reforço escolar</a>
            <a href="#servicos">Alfabetização</a>
            <a href="#servicos">Acompanhamento escolar</a>
          </div>

          <div className={styles.col}>
            <h4>Contato</h4>
            <p>Av. Tomaz Edson de Andrade Vieira, 600 – Eucaliptos<br />Fazenda Rio Grande – PR, 83820-701</p>
            <a href="https://wa.me/" target="_blank" rel="noopener noreferrer" className={styles.waLink}>→ Falar no WhatsApp</a>
          </div>
        </div>

        <div className={styles.bottom}>
          <div>© 2026 Catavento — Espaço Pedagógico. Todos os direitos reservados.</div>
          <div>Atendemos Fazenda Rio Grande, Mandirituba, Curitiba e região.</div>
        </div>
      </div>
    </footer>
  );
}
