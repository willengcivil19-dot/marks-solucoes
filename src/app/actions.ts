"use server";

import { z } from "zod";
import { serverEnv } from "@/lib/env";
import { site } from "./config";

export type ContactFormState = {
  status: "idle" | "success" | "error";
  message?: string;
};

const propertyTypes = ["Apartamento", "Casa", "Sala comercial", "Loja", "Condomínio", "Outro"] as const;

const contactSchema = z.object({
  name: z.string().trim().min(2, "Informe seu nome."),
  whatsapp: z.string().trim().min(8, "Informe um WhatsApp válido."),
  email: z.string().trim().email("Informe um e-mail válido."),
  city: z.string().trim().min(2, "Informe sua cidade."),
  propertyType: z
    .string()
    .refine((value) => (propertyTypes as readonly string[]).includes(value), "Selecione o tipo de imóvel."),
  description: z.string().trim().min(10, "Conte um pouco mais sobre a reforma."),
  condoRequested: z.literal("on").optional(),
  // honeypot: campo invisível para humanos, preenchido apenas por bots.
  website: z.string().max(0).optional().or(z.literal("")),
});

function buildLeadEmailHtml(data: z.infer<typeof contactSchema>): string {
  const rows: [string, string][] = [
    ["Nome", data.name],
    ["WhatsApp", data.whatsapp],
    ["E-mail", data.email],
    ["Cidade", data.city],
    ["Tipo de imóvel", data.propertyType],
    ["Condomínio já solicitou ART?", data.condoRequested === "on" ? "Sim" : "Não informado"],
    ["Descrição da reforma", data.description],
  ];
  const body = rows
    .map(([label, value]) => `<p><strong>${label}:</strong> ${value.replace(/</g, "&lt;")}</p>`)
    .join("\n");
  return `<h2>Nova solicitação de análise — ${site.companyName}</h2>${body}`;
}

/**
 * Envia o lead para o e-mail comercial via Resend, quando configurado
 * (RESEND_API_KEY / EMAIL_FROM). Sem chave configurada, a solicitação
 * apenas é registrada no log do servidor — o formulário continua
 * confirmando o envio normalmente, já que o canal principal de conversão
 * desta página é o WhatsApp, oferecido na sequência.
 */
async function sendLeadEmail(data: z.infer<typeof contactSchema>): Promise<void> {
  const apiKey = serverEnv.resendApiKey;
  if (!apiKey || site.email.startsWith("[")) {
    console.info("[marks-solucoes] Lead recebido (e-mail não configurado):", data.email, data.name);
    return;
  }

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        from: serverEnv.emailFrom,
        to: [site.email],
        reply_to: data.email,
        subject: `Nova solicitação de ART — ${data.name}`,
        html: buildLeadEmailHtml(data),
      }),
    });
    if (!response.ok) {
      console.error("[marks-solucoes] Falha ao enviar e-mail do lead:", response.status, await response.text());
    }
  } catch (error) {
    console.error("[marks-solucoes] Erro ao enviar e-mail do lead:", error);
  }
}

export async function submitContactForm(_prev: ContactFormState, formData: FormData): Promise<ContactFormState> {
  const parsed = contactSchema.safeParse(Object.fromEntries(formData));
  if (!parsed.success) {
    return { status: "error", message: parsed.error.issues[0]?.message ?? "Revise os campos e tente novamente." };
  }

  // Honeypot preenchido: descarta silenciosamente sem revelar ao bot.
  if (parsed.data.website) {
    return { status: "success" };
  }

  await sendLeadEmail(parsed.data);

  return { status: "success", message: "Recebemos sua solicitação! Em breve entraremos em contato." };
}
