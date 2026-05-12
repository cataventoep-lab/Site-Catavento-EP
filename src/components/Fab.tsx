"use client";

import { WaIcon } from "./icons";

export default function Fab() {
  return (
    <a href="#final" className="fab" aria-label="Fale conosco no WhatsApp">
      <span className="fab__pulse" />
      <WaIcon size={30} />
    </a>
  );
}
