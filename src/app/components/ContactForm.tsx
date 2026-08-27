"use client";

import { useActionState, useEffect } from "react";
import { CheckCircle2 } from "lucide-react";
import { submitContactForm, type ContactFormState } from "../actions";
import { whatsappLink, whatsappMessages } from "../config";
import { Container, SectionHeading, WhatsAppButton } from "./ui";
import { Reveal } from "./Reveal";
import { trackEvent } from "../analytics";

const PROPERTY_TYPES = ["Apartamento", "Casa", "Sala comercial", "Loja", "Condomínio", "Outro"];

const initialState: ContactFormState = { status: "idle" };

const inputClass =
  "w-full rounded-lg border border-[#D0D5DD] bg-white px-3.5 py-2.5 text-sm text-[#0B1F33] placeholder:text-[#98A2B3] focus:border-[#2563EB] focus:outline-none focus:ring-2 focus:ring-[#2563EB]/20";

export function ContactForm() {
  const [state, formAction, isPending] = useActionState(submitContactForm, initialState);

  useEffect(() => {
    if (state.status === "success") trackEvent("form_submit");
  }, [state.status]);

  return (
    <section id="contato" className="bg-white py-16 sm:py-20">
      <Container className="max-w-xl">
        <Reveal>
          <SectionHeading eyebrow="Fale conosco" title="Solicite uma análise" align="center" />
        </Reveal>

        <Reveal delay={100}>
          <div className="mt-10 rounded-2xl border border-[#E4E7EC] bg-[#F8FAFC] p-6 sm:p-8">
            {state.status === "success" ? (
              <div className="flex flex-col items-center gap-4 py-6 text-center">
                <span className="flex h-14 w-14 items-center justify-center rounded-full bg-emerald-100">
                  <CheckCircle2 className="h-7 w-7 text-emerald-600" />
                </span>
                <div>
                  <p className="text-base font-semibold text-[#0B1F33]">Solicitação enviada!</p>
                  <p className="mt-1 text-sm text-[#475569]">
                    {state.message ?? "Recebemos sua solicitação. Em breve entraremos em contato."}
                  </p>
                </div>
                <WhatsAppButton href={whatsappLink(whatsappMessages.form)} eventName="whatsapp_click_form_success">
                  Continuar pelo WhatsApp
                </WhatsAppButton>
              </div>
            ) : (
              <form action={formAction} className="space-y-4">
                {/* honeypot anti-spam: invisível para pessoas, preenchido apenas por bots */}
                <input
                  type="text"
                  name="website"
                  tabIndex={-1}
                  autoComplete="off"
                  aria-hidden="true"
                  className="absolute -left-[9999px] h-0 w-0 opacity-0"
                />

                <div>
                  <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-[#0B1F33]">
                    Nome
                  </label>
                  <input id="name" name="name" required className={inputClass} placeholder="Seu nome completo" />
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor="whatsapp" className="mb-1.5 block text-sm font-medium text-[#0B1F33]">
                      WhatsApp
                    </label>
                    <input
                      id="whatsapp"
                      name="whatsapp"
                      required
                      inputMode="tel"
                      className={inputClass}
                      placeholder="(11) 91234-5678"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-[#0B1F33]">
                      E-mail
                    </label>
                    <input id="email" name="email" type="email" required className={inputClass} placeholder="voce@email.com" />
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor="city" className="mb-1.5 block text-sm font-medium text-[#0B1F33]">
                      Cidade
                    </label>
                    <input id="city" name="city" required className={inputClass} placeholder="Sua cidade" />
                  </div>
                  <div>
                    <label htmlFor="propertyType" className="mb-1.5 block text-sm font-medium text-[#0B1F33]">
                      Tipo de imóvel
                    </label>
                    <select id="propertyType" name="propertyType" required defaultValue="" className={inputClass}>
                      <option value="" disabled>
                        Selecione
                      </option>
                      {PROPERTY_TYPES.map((type) => (
                        <option key={type} value={type}>
                          {type}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="description" className="mb-1.5 block text-sm font-medium text-[#0B1F33]">
                    Conte brevemente o que pretende reformar
                  </label>
                  <textarea
                    id="description"
                    name="description"
                    required
                    rows={4}
                    className={`${inputClass} min-h-28 resize-y`}
                    placeholder="Ex.: reforma de cozinha e banheiro, com alteração hidráulica..."
                  />
                </div>

                <label className="flex items-start gap-2.5 text-sm text-[#475569]">
                  <input
                    type="checkbox"
                    name="condoRequested"
                    className="mt-0.5 h-4 w-4 rounded border-[#D0D5DD] text-[#2563EB] focus:ring-[#2563EB]/30"
                  />
                  Meu condomínio já solicitou ART ou documentação técnica.
                </label>

                {state.status === "error" && state.message && (
                  <p className="text-sm font-medium text-red-600" role="alert">
                    {state.message}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={isPending}
                  className="w-full rounded-full bg-[#2563EB] px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-[#0F4BC7] disabled:opacity-60"
                >
                  {isPending ? "Enviando..." : "ENVIAR SOLICITAÇÃO"}
                </button>
              </form>
            )}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
