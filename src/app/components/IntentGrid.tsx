"use client";

import { Hammer, CookingPot, Bath, LayoutGrid, Droplet, Zap, AirVent, Home, MessageCircleQuestion } from "lucide-react";
import { serviceWhatsappMessage, whatsappLink } from "../config";
import { trackEvent } from "../analytics";
import { Container, SectionHeading } from "./ui";
import { ServiceIcon } from "./ServiceIcon";
import { Reveal } from "./Reveal";

const INTENTS = [
  { icon: Hammer, label: "Derrubar ou construir parede", message: "derrubar ou construir parede" },
  { icon: CookingPot, label: "Reformar cozinha", message: "reforma de cozinha" },
  { icon: Bath, label: "Reformar banheiro", message: "reforma de banheiro" },
  { icon: LayoutGrid, label: "Trocar piso", message: "troca de piso" },
  { icon: Droplet, label: "Alterar hidráulica", message: "alteração hidráulica" },
  { icon: Zap, label: "Alterar elétrica", message: "alteração elétrica" },
  { icon: AirVent, label: "Instalar ar-condicionado", message: "instalação de ar-condicionado" },
  { icon: Home, label: "Fazer reforma completa", message: "reforma completa do imóvel" },
  { icon: MessageCircleQuestion, label: "Outro serviço", message: "outro serviço de reforma" },
];

export function IntentGrid() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <Container>
        <Reveal>
          <SectionHeading eyebrow="Vamos direto ao ponto" title="O que você pretende fazer na reforma?" align="center" />
        </Reveal>

        <div className="mx-auto mt-10 grid max-w-4xl grid-cols-2 gap-3 sm:grid-cols-3">
          {INTENTS.map((intent, i) => (
            <Reveal key={intent.label} delay={(i % 3) * 60}>
              <a
                href={whatsappLink(serviceWhatsappMessage(intent.message))}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackEvent("whatsapp_click_intent", { intent: intent.message })}
                className="flex h-full flex-col items-center gap-2.5 rounded-2xl border border-[#E4E7EC] bg-white p-5 text-center transition-all hover:-translate-y-0.5 hover:border-[#2563EB] hover:shadow-[0_8px_20px_-8px_rgba(16,24,40,0.12)]"
              >
                <ServiceIcon icon={intent.icon} />
                <span className="text-sm font-medium text-[#0B1F33]">{intent.label}</span>
              </a>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
