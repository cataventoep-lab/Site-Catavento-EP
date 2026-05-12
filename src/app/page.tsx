import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Servicos from "@/components/Servicos";
import Diferenciais from "@/components/Diferenciais";
import ParaQuem from "@/components/ParaQuem";
import ComoFunciona from "@/components/ComoFunciona";
import Sobre from "@/components/Sobre";
import Depoimentos from "@/components/Depoimentos";
import Stats from "@/components/Stats";
import Espaco from "@/components/Espaco";
import Faq from "@/components/Faq";
import Local from "@/components/Local";
import FinalCta from "@/components/FinalCta";
import Footer from "@/components/Footer";
import Fab from "@/components/Fab";
import GsapProvider from "@/components/GsapProvider";

export default function Home() {
  return (
    <GsapProvider>
      <Header />
      <main>
        <Hero />
        <Servicos />
        <Diferenciais />
        <ParaQuem />
        <ComoFunciona />
        <Sobre />
        <Depoimentos />
        <Stats />
        <Espaco />
        <Faq />
        <Local />
        <FinalCta />
      </main>
      <Footer />
      <Fab />
    </GsapProvider>
  );
}
