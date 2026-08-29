import Image from "next/image";
import { whatsappLink, whatsappMessages } from "../config";
import { WhatsAppButton, OutlineButton, Container } from "./ui";
import { WhatsAppIcon } from "./WhatsAppIcon";
import { Reveal } from "./Reveal";

const TRUST_POINTS = [
  "Atendimento rápido",
  "Engenheiro habilitado",
  "Atendimento pelo WhatsApp",
  "Residencial e comercial",
];

export function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden bg-[#0B1F33]">
      <Image
        src="/images/01-hero-art-reforma.webp"
        alt="Apartamento moderno com planta técnica para planejamento de reforma"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#0B1F33]/92 via-[#0B1F33]/80 to-[#0B1F33]/95" />

      <span className="absolute left-5 top-24 hidden items-center gap-1.5 rounded-full bg-white/95 px-3 py-1.5 text-xs font-semibold text-[#0B1F33] shadow-md backdrop-blur sm:inline-flex lg:top-28">
        <svg viewBox="0 0 20 20" className="h-3.5 w-3.5 text-[#2563EB]" fill="currentColor">
          <path d="M10 2a1 1 0 0 1 1 1v6h6a1 1 0 1 1 0 2h-6v6a1 1 0 1 1-2 0v-6H3a1 1 0 1 1 0-2h6V3a1 1 0 0 1 1-1Z" />
        </svg>
        Análise técnica
      </span>
      <span className="absolute right-5 top-24 hidden items-center gap-1.5 rounded-full bg-white/10 px-3 py-1.5 text-xs font-semibold text-white shadow-md backdrop-blur sm:inline-flex lg:top-28">
        <svg viewBox="0 0 20 20" className="h-3.5 w-3.5 text-[#4ADE80]" fill="currentColor">
          <path d="M16.7 5.3a1 1 0 0 1 0 1.4l-7.4 7.4a1 1 0 0 1-1.4 0L3.3 9.5a1 1 0 1 1 1.4-1.4l3.6 3.6 6.7-6.7a1 1 0 0 1 1.4 0Z" />
        </svg>
        ART · CREA
      </span>

      <Container className="relative py-20 text-center sm:py-28">
        <Reveal className="mx-auto flex max-w-3xl flex-col items-center">
          <span className="inline-flex items-center rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white/80">
            ART para qualquer tipo de reforma
          </span>

          <h1 className="mt-6 text-[2rem] font-bold leading-[1.15] tracking-tight text-white sm:text-[2.75rem] lg:text-[3.25rem]">
            Precisa de ART para sua reforma?
          </h1>

          <p className="mt-5 max-w-xl text-base leading-relaxed text-white/75 sm:text-lg">
            Cuidamos da análise técnica e da documentação necessária para sua reforma, com atendimento direto e
            orientação de profissional habilitado.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <WhatsAppButton href={whatsappLink(whatsappMessages.default)} size="lg" eventName="whatsapp_click_hero">
              <WhatsAppIcon className="h-5 w-5" />
              Solicitar ART pelo WhatsApp
            </WhatsAppButton>
            <OutlineButton
              href="#faq"
              size="lg"
              className="border-white/25 bg-transparent text-white hover:border-white hover:text-white"
            >
              Tirar uma dúvida
            </OutlineButton>
          </div>

          <ul className="mt-8 flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
            {TRUST_POINTS.map((point) => (
              <li key={point} className="flex items-center gap-1.5 text-xs font-medium text-white/60 sm:text-sm">
                <svg viewBox="0 0 20 20" className="h-3.5 w-3.5 shrink-0 text-[#4C86FF]" fill="currentColor">
                  <path d="M16.7 5.3a1 1 0 0 1 0 1.4l-7.4 7.4a1 1 0 0 1-1.4 0L3.3 9.5a1 1 0 1 1 1.4-1.4l3.6 3.6 6.7-6.7a1 1 0 0 1 1.4 0Z" />
                </svg>
                {point}
              </li>
            ))}
          </ul>
        </Reveal>
      </Container>
    </section>
  );
}
