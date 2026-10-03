import { Building2, Hammer, Wind } from "lucide-react";
import { Card, Container, SectionHeading } from "./ui";
import { Reveal } from "./Reveal";

/**
 * Situações típicas atendidas. São exemplos ilustrativos (não depoimentos
 * de clientes) e estão identificados como tal na página. Quando houver
 * avaliações reais (ex.: Google Meu Negócio), elas podem entrar aqui.
 */
const situations = [
  {
    icon: Building2,
    title: "O condomínio pediu ART antes de liberar a obra",
    text: "Analisamos o que será feito no apartamento, orientamos os documentos exigidos pela administradora e preparamos a responsabilidade técnica conforme o escopo.",
  },
  {
    icon: Hammer,
    title: "Quero remover uma parede, mas não sei se posso",
    text: "Avaliamos tecnicamente a alteração prevista antes de qualquer demolição e explicamos, sem jargão, o que é possível e o que precisa de cuidado.",
  },
  {
    icon: Wind,
    title: "Vou instalar ar-condicionado e o síndico exigiu documentação",
    text: "Verificamos a instalação, a infraestrutura e as interferências na edificação para que o serviço siga com a documentação adequada.",
  },
];

export function Testimonials() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <Container>
        <Reveal>
          <SectionHeading eyebrow="Casos comuns" title="Situações que atendemos" align="center" />
          <p className="mx-auto mt-4 max-w-2xl text-center text-sm text-[#475569]">
            Exemplos ilustrativos de pedidos frequentes. Cada caso passa por análise técnica individual.
          </p>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-3">
          {situations.map(({ icon: Icon, title, text }, i) => (
            <Reveal key={title} delay={i * 80}>
              <Card className="flex h-full flex-col gap-3">
                <Icon className="h-6 w-6 text-[#2563EB]" />
                <h3 className="text-base font-semibold text-[#0B1F33]">{title}</h3>
                <p className="text-sm text-[#475569]">{text}</p>
              </Card>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
