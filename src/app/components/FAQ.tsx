import { ChevronDown } from "lucide-react";
import { whatsappLink, whatsappMessages } from "../config";
import { Container, SectionHeading, WhatsAppButton } from "./ui";
import { Reveal } from "./Reveal";

const FAQ_ITEMS = [
  {
    q: "Toda reforma precisa de ART?",
    a: "Nem toda intervenção possui necessariamente a mesma exigência. É preciso avaliar o escopo da reforma, as atividades técnicas envolvidas e as regras do condomínio ou contratante.",
  },
  {
    q: "O condomínio pode exigir ART?",
    a: "Sim. Antes de autorizar determinados serviços, o condomínio ou a administradora pode solicitar documentação técnica da reforma, com base em regras internas e em normas como a NBR 16280.",
  },
  {
    q: "Quem pode emitir ART?",
    a: "A ART é registrada por profissional habilitado no sistema CREA, respeitando suas atribuições profissionais e o serviço técnico contratado.",
  },
  {
    q: "Quanto tempo demora?",
    a: "O prazo varia conforme a complexidade da reforma e a documentação disponível. Após a análise inicial, informamos uma estimativa para o seu caso.",
  },
  {
    q: "Precisa de visita técnica?",
    a: "Depende das características e complexidade da reforma. O profissional responsável definirá essa necessidade após analisar o caso.",
  },
  {
    q: "Quais informações preciso enviar?",
    a: "Em geral: endereço do imóvel, descrição da reforma, fotos dos ambientes e, se houver, planta do imóvel e a exigência recebida do condomínio. A lista completa pode variar conforme o serviço.",
  },
  {
    q: "A ART garante a aprovação do condomínio?",
    a: "Não. A ART formaliza a responsabilidade técnica pelo serviço executado. A aprovação do condomínio depende também do regulamento interno e da avaliação da síndica ou do síndico.",
  },
  {
    q: "Posso solicitar tudo pelo WhatsApp?",
    a: "Sim. O contato inicial, envio de informações e orientações podem ser realizados pelo WhatsApp. Caso seja necessária visita técnica ou documentação adicional, isso será informado durante a análise.",
  },
];

export function FAQ() {
  return (
    <section id="faq" className="bg-[#F8FAFC] py-16 sm:py-20">
      <Container className="max-w-3xl">
        <Reveal>
          <SectionHeading eyebrow="Tire suas dúvidas" title="Dúvidas frequentes sobre ART para reforma" align="center" />
        </Reveal>

        <div className="mt-10 space-y-3">
          {FAQ_ITEMS.map((item, i) => (
            <Reveal key={item.q} delay={(i % 4) * 60}>
              <details className="group rounded-2xl border border-[#E4E7EC] bg-white px-5 py-4 open:shadow-sm [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-sm font-semibold text-[#0B1F33]">
                  {item.q}
                  <ChevronDown className="h-4 w-4 shrink-0 text-[#2563EB] transition-transform group-open:rotate-180" />
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-[#475569]">{item.a}</p>
              </details>
            </Reveal>
          ))}
        </div>

        <Reveal delay={200}>
          <div className="mt-10 flex justify-center">
            <WhatsAppButton href={whatsappLink(whatsappMessages.default)} eventName="whatsapp_click_faq">
              Ainda com dúvidas? Fale conosco
            </WhatsAppButton>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
