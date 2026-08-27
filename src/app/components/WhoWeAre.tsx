import { whatsappMessages } from "../config";
import { PhotoTextSection } from "./PhotoTextSection";

export function WhoWeAre() {
  return (
    <PhotoTextSection
      image={{
        src: "/images/01-hero-art-reforma.webp",
        alt: "Planta técnica e materiais de acabamento sobre a bancada, durante análise de uma reforma",
      }}
      imagePosition="left"
      eyebrow="Quem cuida da sua reforma"
      title="Clareza técnica do primeiro contato até a entrega da ART."
      description={
        <>
          <p>
            Acompanhamos reformas residenciais e comerciais do primeiro contato até a entrega da documentação,
            sempre com comunicação direta pelo WhatsApp e sem jargão técnico desnecessário.
          </p>
          <p>
            A <strong className="text-[#0B1F33]">NBR 16280</strong> pode exigir responsabilidade técnica conforme a
            intervenção prevista na reforma. A{" "}
            <strong className="text-[#0B1F33]">ART (Anotação de Responsabilidade Técnica)</strong> formaliza essa
            responsabilidade no sistema CREA, sempre após análise do escopo do serviço.
          </p>
        </>
      }
      callout="Cuidamos da parte técnica para que sua reforma não pare por falta de documentação."
      cta={{
        label: "Falar com um engenheiro",
        message: whatsappMessages.scopeAnalysis,
        eventName: "whatsapp_click_who_we_are",
      }}
    />
  );
}
