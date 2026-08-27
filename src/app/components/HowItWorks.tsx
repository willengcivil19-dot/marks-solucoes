import { MessageCircle, FileSearch, FileCheck2, Building2, ChevronRight, ChevronDown } from "lucide-react";
import { whatsappLink, whatsappMessages } from "../config";
import { Container, SectionHeading, WhatsAppButton } from "./ui";
import { ServiceIcon } from "./ServiceIcon";
import { Reveal } from "./Reveal";

const STEPS = [
  {
    number: "01",
    icon: MessageCircle,
    title: "Você conta o que vai reformar",
    description: "Envie pelo WhatsApp as informações e, se tiver, fotos ou documentos.",
  },
  {
    number: "02",
    icon: FileSearch,
    title: "Fazemos a análise técnica",
    description: "O engenheiro avalia as intervenções e identifica a documentação necessária.",
  },
  {
    number: "03",
    icon: FileCheck2,
    title: "Preparamos a documentação",
    description: "A ART e demais documentos aplicáveis são preparados conforme o escopo.",
  },
  {
    number: "04",
    icon: Building2,
    title: "Você apresenta ao condomínio",
    description: "Receba a documentação necessária para seguir com o processo de liberação da reforma.",
  },
];

export function HowItWorks() {
  return (
    <section id="como-funciona" className="bg-white py-16 sm:py-20">
      <Container>
        <Reveal>
          <SectionHeading eyebrow="Processo" title="Solicitar sua ART pode ser simples" align="center" />
        </Reveal>

        <div className="mx-auto mt-12 flex max-w-5xl flex-col sm:flex-row sm:items-start">
          {STEPS.map((step, i) => (
            <div key={step.number} className="flex sm:flex-1 sm:flex-col">
              <Reveal delay={i * 90} className="flex flex-1 flex-col items-center text-center">
                <ServiceIcon icon={step.icon} className="h-12 w-12" />
                <span className="mt-3 text-xs font-bold tracking-wider text-[#2563EB]">PASSO {step.number}</span>
                <h3 className="mt-1 text-sm font-semibold text-[#0B1F33]">{step.title}</h3>
                <p className="mt-1.5 max-w-[15rem] text-sm leading-relaxed text-[#475569]">{step.description}</p>
              </Reveal>

              {i < STEPS.length - 1 && (
                <div className="flex items-center justify-center py-3 sm:mt-6 sm:px-2 sm:py-0">
                  <ChevronDown className="h-4 w-4 text-[#D0D5DD] sm:hidden" />
                  <ChevronRight className="hidden h-4 w-4 text-[#D0D5DD] sm:block" />
                </div>
              )}
            </div>
          ))}
        </div>

        <Reveal delay={280}>
          <div className="mt-12 flex justify-center">
            <WhatsAppButton href={whatsappLink(whatsappMessages.howItWorks)} size="lg" eventName="whatsapp_click_how_it_works">
              Começar pelo WhatsApp
            </WhatsAppButton>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
