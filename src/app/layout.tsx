import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Catavento Espaço Pedagógico | Reforço Escolar e Alfabetização em Fazenda Rio Grande",
  description: "Aulas particulares, reforço escolar e alfabetização com atendimento individualizado em Fazenda Rio Grande. Planejamento personalizado e devolutivas semanais.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
