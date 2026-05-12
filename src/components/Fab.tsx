"use client";

import { WaIcon } from "./icons";

export default function Fab() {
  return (
    <a href="https://wa.me/5541988727103?text=Ol%C3%A1!%20Visitei%20o%20site%20e%20quero%20saber%20mais%20sobre%20aulas%20particulares" target="_blank" rel="noopener noreferrer" className="fab" aria-label="Fale conosco no WhatsApp">
      <span className="fab__pulse" />
      <WaIcon size={30} />
    </a>
  );
}
