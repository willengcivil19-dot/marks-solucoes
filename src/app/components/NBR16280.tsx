import { ScrollText } from "lucide-react";
import { whatsappLink, whatsappMessages } from "../config";
import { Container, WhatsAppButton } from "./ui";
import { Reveal } from "./Reveal";

export function NBR16280() {
  return (
    <section className="bg-[#0B1F33] py-16 text-white sm:py-20">
      <Container className="grid gap-10 lg:grid-cols-[auto_1fr] lg:items-center lg:gap-14">
        <Reveal>
          <span className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/10">
            <ScrollText className="h-8 w-8 text-white" />
          </span>
        </Reveal>

        <Reveal delay={100}>
          <h2 className="text-[1.75rem] font-bold leading-[1.15] tracking-tight sm:text-3xl">
            Reforma em condomínio e a NBR 16280
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/70">
            A ABNT NBR 16280 trata do sistema de gestão de reformas em edificações e estabelece diretrizes
            relacionadas ao planejamento, às responsabilidades e à execução de reformas.
          </p>
          <p className="mt-3 max-w-2xl text-base leading-relaxed text-white/70">
            Dependendo das intervenções previstas e das regras do condomínio, poderão ser solicitados plano de
            reforma, documentos técnicos e responsabilidade profissional.
          </p>
          <WhatsAppButton href={whatsappLink(whatsappMessages.condo)} eventName="whatsapp_click_nbr" className="mt-6">
            Meu condomínio pediu documentação
          </WhatsAppButton>
        </Reveal>
      </Container>
    </section>
  );
}
