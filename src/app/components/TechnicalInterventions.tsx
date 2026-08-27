import { serviceWhatsappMessage } from "../config";
import { PhotoTextSection } from "./PhotoTextSection";

export function TechnicalInterventions() {
  return (
    <PhotoTextSection
      image={{
        src: "/images/04-art-ar-condicionado.webp",
        alt: "Profissional avaliando instalação de ar-condicionado em apartamento",
      }}
      imagePosition="left"
      eyebrow="Intervenções técnicas"
      title="Nem toda reforma envolve quebrar paredes."
      description="Instalações e adequações pontuais também podem exigir análise técnica e responsabilidade profissional, conforme o escopo do serviço."
      points={["Instalação de ar-condicionado", "Alterações elétricas", "Alterações hidráulicas", "Novos pontos e interferências na edificação"]}
      cta={{
        label: "Consultar meu serviço",
        message: serviceWhatsappMessage("uma intervenção técnica pontual"),
        eventName: "whatsapp_click_technical_interventions",
      }}
    />
  );
}
