import { site, whatsappLink, whatsappMessages } from "../config";
import { Container, EmailLink, WhatsAppButton } from "./ui";
import { WhatsAppIcon } from "./WhatsAppIcon";
import { Reveal } from "./Reveal";

export function FinalCTA() {
  return (
    <section className="bg-[#0B1F33] py-16 text-center text-white sm:py-20">
      <Container className="max-w-2xl">
        <Reveal>
          <h2 className="text-[1.75rem] font-bold leading-[1.15] tracking-tight sm:text-3xl">
            Precisa liberar sua reforma?
          </h2>
          <p className="mt-4 text-base leading-relaxed text-white/70">
            Envie agora uma mensagem e conte o que pretende fazer no imóvel. Nós orientamos os próximos passos.
          </p>

          <div className="mt-8 flex justify-center">
            <WhatsAppButton href={whatsappLink(whatsappMessages.finalCta)} size="lg" eventName="whatsapp_click_final_cta">
              <WhatsAppIcon className="h-5 w-5" />
              FALAR NO WHATSAPP
            </WhatsAppButton>
          </div>

          <p className="mt-6 text-sm text-white/60">
            Prefere e-mail? Enviar e-mail para <EmailLink email={site.email} className="text-white underline decoration-white/40 hover:decoration-white" />
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
