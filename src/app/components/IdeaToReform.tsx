import { serviceWhatsappMessage } from "../config";
import { PhotoTextSection } from "./PhotoTextSection";

export function IdeaToReform() {
  return (
    <PhotoTextSection
      className="bg-[#F8FAFC]"
      image={{
        src: "/images/03-apartamento-reformado.webp",
        alt: "Apartamento moderno após reforma residencial",
      }}
      imagePosition="right"
      eyebrow="Reforma com segurança"
      title="Da ideia à reforma com segurança técnica."
      description="Cada reforma possui características próprias. Alterações de layout, instalações, revestimentos e equipamentos podem exigir análise técnica antes do início da obra."
      cta={{
        label: "Quero analisar minha reforma",
        message: serviceWhatsappMessage("a minha reforma"),
        eventName: "whatsapp_click_idea_to_reform",
      }}
    />
  );
}
