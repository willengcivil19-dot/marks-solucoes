import { Container, SectionHeading } from "./ui";
import { Reveal } from "./Reveal";

export function AboutART() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <Container className="max-w-4xl">
        <Reveal>
          <SectionHeading align="center" eyebrow="Entenda o processo" title="O que é ART?" />
        </Reveal>
        <Reveal delay={100}>
          <div className="mx-auto mt-6 max-w-2xl space-y-4 text-center text-base leading-relaxed text-[#475569]">
            <p>
              A ART — Anotação de Responsabilidade Técnica — é o documento utilizado para registrar a
              responsabilidade técnica de profissionais habilitados em atividades de engenharia, conforme as
              competências profissionais e o serviço contratado.
            </p>
            <p>
              A documentação necessária para uma reforma depende das intervenções que serão realizadas. Por isso,
              cada solicitação passa por análise técnica antes da emissão.
            </p>
            <p className="text-sm text-[#475569]">
              A ART é registrada no sistema CONFEA/CREA, dentro das atribuições profissionais do responsável técnico.
            </p>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
