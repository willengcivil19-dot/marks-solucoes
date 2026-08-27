import { whatsappMessages } from "../config";
import { PhotoTextSection } from "./PhotoTextSection";

export function ReformScope() {
  return (
    <PhotoTextSection
      className="bg-[#F8FAFC]"
      image={{
        src: "/images/02-engenheiro-analise-reforma.webp",
        alt: "Engenheiro analisando planta técnica de reforma em apartamento",
      }}
      imagePosition="left"
      eyebrow="Antes da obra"
      title="Sua reforma começa antes da obra."
      description="Antes de emitir a ART, entendemos o que será executado e avaliamos tecnicamente as intervenções previstas."
      points={[
        "Análise do escopo",
        "Orientação técnica",
        "Emissão da responsabilidade técnica",
        "Documentação para o condomínio",
      ]}
      cta={{ label: "Falar com um engenheiro", message: whatsappMessages.scopeAnalysis, eventName: "whatsapp_click_scope" }}
    />
  );
}
