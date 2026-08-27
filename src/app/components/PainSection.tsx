import { whatsappLink, whatsappMessages } from "../config";
import { WhatsAppButton, Container, SectionHeading } from "./ui";
import { Reveal } from "./Reveal";

export function PainSection() {
  return (
    <section id="art-reforma" className="bg-white py-16 sm:py-20">
      <Container className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-center lg:gap-16">
        <Reveal>
          <SectionHeading eyebrow="Uma situação comum" title="Quer começar a reforma, mas pediram uma ART?" />
        </Reveal>
        <Reveal delay={100}>
          <div className="space-y-4 text-base leading-relaxed text-[#475569]">
            <p>
              Essa situação é muito comum em apartamentos, condomínios e imóveis comerciais. Antes de autorizar
              determinados serviços, o condomínio ou a administradora pode solicitar documentação técnica da reforma.
            </p>
            <p>
              Nossa equipe analisa o serviço que será realizado, orienta sobre os documentos necessários e verifica
              tecnicamente a possibilidade de emissão da ART correspondente.
            </p>
            <WhatsAppButton href={whatsappLink(whatsappMessages.checkReform)} eventName="whatsapp_click_pain" className="mt-2">
              Quero verificar minha reforma
            </WhatsAppButton>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
