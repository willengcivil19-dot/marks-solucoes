import { MessageCircle, ShieldCheck, ClipboardList } from "lucide-react";
import { Container } from "./ui";
import { Reveal } from "./Reveal";

const ITEMS = [
  {
    icon: MessageCircle,
    title: "Atendimento facilitado",
    description: "Envie as informações da reforma pelo WhatsApp.",
  },
  {
    icon: ShieldCheck,
    title: "Responsabilidade técnica",
    description: "Documentação analisada por profissional habilitado.",
  },
  {
    icon: ClipboardList,
    title: "Processo simplificado",
    description: "Orientamos você sobre os documentos necessários.",
  },
];

export function TrustBar() {
  return (
    <section className="border-y border-[#E4E7EC] bg-[#F8FAFC]">
      <Container className="grid grid-cols-1 gap-8 sm:grid-cols-3 py-10">
        {ITEMS.map((item, i) => (
          <Reveal key={item.title} delay={i * 60}>
            <div className="flex items-start gap-3">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white text-[#2563EB] shadow-sm">
                <item.icon className="h-5 w-5" />
              </span>
              <div>
                <p className="text-sm font-semibold text-[#0B1F33]">{item.title}</p>
                <p className="mt-0.5 text-sm text-[#475569]">{item.description}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </Container>
    </section>
  );
}
