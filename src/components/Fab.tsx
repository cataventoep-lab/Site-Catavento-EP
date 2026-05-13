"use client";

import { WaIcon } from "./icons";

export default function Fab() {
  return (
    <a href="https://wa.me/" target="_blank" rel="noopener noreferrer" className="fab" aria-label="Fale conosco no WhatsApp">
      <span className="fab__pulse" />
      <WaIcon size={30} />
    </a>
  );
}
