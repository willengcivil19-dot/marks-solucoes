import { Quote } from "lucide-react";
import { Card, Container, SectionHeading } from "./ui";
import { Reveal } from "./Reveal";

export function Testimonials() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <Container>
        <Reveal>
          <SectionHeading eyebrow="Avaliações" title="Quem contrata recomenda" align="center" />
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-3">
          {[0, 1, 2].map((i) => (
            <Reveal key={i} delay={i * 80}>
              <Card className="flex h-full flex-col items-center justify-center gap-3 border-dashed py-10 text-center">
                <Quote className="h-6 w-6 text-[#D0D5DD]" />
                <p className="text-sm text-[#475569]">Área reservada para avaliações verificadas de clientes.</p>
              </Card>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
