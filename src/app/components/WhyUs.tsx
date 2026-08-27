import { MessageCircle, Sparkles, BadgeCheck, Zap, Building2, ShieldCheck } from "lucide-react";
import { Card, Container, SectionHeading } from "./ui";
import { Reveal } from "./Reveal";

const DIFFERENTIALS = [
  {
    icon: MessageCircle,
    title: "Atendimento direto",
    description: "Fale diretamente com nossa equipe pelo WhatsApp.",
  },
  {
    icon: Sparkles,
    title: "Orientação clara",
    description: "Explicamos o processo de maneira simples, sem excesso de termos técnicos.",
  },
  {
    icon: BadgeCheck,
    title: "Responsabilidade profissional",
    description: "Serviços avaliados e executados por profissionais legalmente habilitados e dentro de suas atribuições.",
  },
  {
    icon: Zap,
    title: "Agilidade",
    description: "Processo organizado para reduzir burocracia e facilitar a entrega da documentação.",
  },
  {
    icon: Building2,
    title: "Atendimento residencial e comercial",
    description: "Apartamentos, condomínios, casas, escritórios e estabelecimentos comerciais, conforme análise do serviço.",
  },
  {
    icon: ShieldCheck,
    title: "Segurança documental",
    description: "Você recebe orientação sobre a documentação necessária para apresentar ao condomínio ou contratante.",
  },
];

export function WhyUs() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <Container>
        <Reveal>
          <SectionHeading eyebrow="Diferenciais" title="Engenharia sem complicação" align="center" />
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {DIFFERENTIALS.map((item, i) => (
            <Reveal key={item.title} delay={(i % 3) * 80}>
              <Card className="h-full">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#0B1F33] text-white">
                  <item.icon className="h-5 w-5" />
                </span>
                <h3 className="mt-4 text-sm font-semibold text-[#0B1F33]">{item.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-[#475569]">{item.description}</p>
              </Card>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
