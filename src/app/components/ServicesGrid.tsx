import { Building, Hammer, CookingPot, AirVent, Zap, Droplet, LayoutGrid, MessageCircleQuestion } from "lucide-react";
import { serviceWhatsappMessage, whatsappLink, whatsappMessages } from "../config";
import { Card, Container, SectionHeading, TextLink, WhatsAppButton } from "./ui";
import { ServiceIcon } from "./ServiceIcon";
import { Reveal } from "./Reveal";

const SERVICES = [
  {
    icon: Building,
    title: "ART para reforma de apartamento",
    description: "Documentação técnica para apresentação ao condomínio.",
    message: "reforma de apartamento",
  },
  {
    icon: Hammer,
    title: "Remoção ou alteração de paredes",
    description: "Análise técnica das alterações previstas no imóvel.",
    message: "remoção de parede",
  },
  {
    icon: CookingPot,
    title: "Reforma de cozinha e banheiro",
    description: "Avaliação das intervenções hidráulicas, elétricas e de revestimentos.",
    message: "reforma de cozinha e banheiro",
  },
  {
    icon: AirVent,
    title: "Instalação de ar-condicionado",
    description: "Análise da instalação, infraestrutura e interferências necessárias.",
    message: "instalação de ar-condicionado",
  },
  {
    icon: Zap,
    title: "Alterações elétricas",
    description: "Avaliação técnica das modificações previstas.",
    message: "alterações elétricas",
  },
  {
    icon: Droplet,
    title: "Alterações hidráulicas",
    description: "Avaliação de tubulações, pontos e intervenções.",
    message: "alterações hidráulicas",
  },
  {
    icon: LayoutGrid,
    title: "Troca de pisos e revestimentos",
    description: "Análise das intervenções previstas na reforma.",
    message: "troca de piso",
  },
  {
    icon: MessageCircleQuestion,
    title: "Outros serviços",
    description: "Explique pelo WhatsApp e o engenheiro analisa a necessidade.",
    message: "outro serviço de reforma",
  },
];

export function ServicesGrid() {
  return (
    <section id="servicos" className="bg-[#F8FAFC] py-16 sm:py-20">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Escopo de atuação"
            title="Para quais serviços pode ser necessária ART?"
            description="A necessidade de ART e o tipo de responsabilidade técnica são definidos após análise do serviço e conforme as atribuições profissionais aplicáveis."
          />
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((service, i) => (
            <Reveal key={service.title} delay={(i % 4) * 60}>
              <Card className="flex h-full flex-col">
                <ServiceIcon icon={service.icon} />
                <h3 className="mt-4 text-sm font-semibold text-[#0B1F33]">{service.title}</h3>
                <p className="mt-1.5 flex-1 text-sm leading-relaxed text-[#475569]">{service.description}</p>
                <TextLink
                  href={whatsappLink(serviceWhatsappMessage(service.message))}
                  eventName="whatsapp_click_service_card"
                  className="mt-4"
                >
                  Saiba mais →
                </TextLink>
              </Card>
            </Reveal>
          ))}
        </div>

        <Reveal delay={200}>
          <div className="mt-10 flex flex-col items-center gap-4 rounded-2xl border border-[#E4E7EC] bg-white p-8 text-center">
            <p className="text-base font-medium text-[#0B1F33]">
              Não encontrou seu serviço? Envie uma mensagem e analisamos seu caso.
            </p>
            <WhatsAppButton href={whatsappLink(whatsappMessages.services)} eventName="whatsapp_click_services">
              Consultar pelo WhatsApp
            </WhatsAppButton>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
