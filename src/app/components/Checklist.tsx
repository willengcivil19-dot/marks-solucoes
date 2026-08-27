import { whatsappLink, whatsappMessages } from "../config";
import { Card, Container, SectionHeading, WhatsAppButton } from "./ui";
import { Reveal } from "./Reveal";

const CHECKLIST_ITEMS = [
  "Nome do proprietário ou responsável",
  "Endereço completo do imóvel",
  "Apartamento/unidade, quando aplicável",
  "Descrição da reforma",
  "Fotos dos ambientes",
  "Planta do imóvel, caso disponível",
  "Croqui ou projeto da reforma, quando houver",
  "Exigência ou formulário enviado pelo condomínio",
  "Cronograma dos serviços, quando necessário",
];

export function Checklist() {
  return (
    <section className="bg-[#F8FAFC] py-16 sm:py-20">
      <Container className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-center lg:gap-16">
        <Reveal>
          <SectionHeading
            eyebrow="Documentação"
            title="O que preciso enviar?"
            description="Os documentos podem variar conforme o tipo de reforma."
          />
        </Reveal>

        <Reveal delay={100}>
          <Card>
            <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {CHECKLIST_ITEMS.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm text-[#0B1F33]">
                  <svg viewBox="0 0 20 20" className="mt-0.5 h-4 w-4 shrink-0 text-[#2563EB]" fill="currentColor">
                    <path d="M16.7 5.3a1 1 0 0 1 0 1.4l-7.4 7.4a1 1 0 0 1-1.4 0L3.3 9.5a1 1 0 1 1 1.4-1.4l3.6 3.6 6.7-6.7a1 1 0 0 1 1.4 0Z" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>

            <p className="mt-6 border-t border-[#E4E7EC] pt-5 text-sm text-[#475569]">
              Não tem todos esses documentos? Sem problema. Entre em contato e orientamos o que será necessário para
              o seu caso.
            </p>

            <WhatsAppButton href={whatsappLink(whatsappMessages.checklist)} eventName="whatsapp_click_checklist" className="mt-5">
              Quero orientação
            </WhatsAppButton>
          </Card>
        </Reveal>
      </Container>
    </section>
  );
}
