/**
 * Todos os dados variáveis da landing page de ART para Reforma ficam
 * centralizados aqui. Antes de publicar em produção, substitua os
 * placeholders entre colchetes pelos dados reais da empresa.
 */
export const site = {
  companyName: "Marks Soluções",
  tagline: "Engenharia e Responsabilidade Técnica",
  whatsappNumber: "[NÚMERO DE WHATSAPP, ex: 5511999999999]",
  email: "contato@marksart.com.br",
  siteUrl: "https://www.marksart.com.br",
} as const;

/** Monta o link do WhatsApp com mensagem pré-preenchida (URL-encoded). */
export function whatsappLink(message: string): string {
  const digits = site.whatsappNumber.replace(/\D/g, "");
  const phone = digits || site.whatsappNumber;
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}

export const whatsappMessages = {
  default: "Olá! Preciso de informações para emissão de ART para uma reforma. Poderia me orientar?",
  floating: "Olá! Encontrei vocês pelo site e gostaria de informações sobre ART para minha reforma.",
  checkReform: "Olá! Quero verificar se minha reforma precisa de ART. Posso te contar os detalhes?",
  services: "Olá! Vi os serviços no site e gostaria de consultar o meu caso.",
  howItWorks: "Olá! Vim pelo site e quero começar o processo de emissão da ART pelo WhatsApp.",
  checklist: "Olá! Gostaria de orientação sobre quais documentos preciso enviar para a minha reforma.",
  condo: "Olá! Meu condomínio pediu documentação técnica para a reforma. Podem me orientar?",
  scopeAnalysis: "Olá! Gostaria de falar com um engenheiro sobre a análise técnica da minha reforma.",
  finalCta: "Olá! Preciso liberar minha reforma e gostaria de enviar os detalhes para análise.",
  form: "Olá! Enviei uma solicitação pelo formulário do site e gostaria de continuar por aqui.",
} as const;

/** Mensagem contextual por serviço/intenção, usada nos chips de "o que você pretende fazer". */
export function serviceWhatsappMessage(service: string): string {
  return `Olá, gostaria de saber sobre ART para ${service}.`;
}

export const navLinks = [
  { href: "#inicio", label: "Início" },
  { href: "#art-reforma", label: "ART para Reforma" },
  { href: "#como-funciona", label: "Como Funciona" },
  { href: "#servicos", label: "Serviços" },
  { href: "#faq", label: "Dúvidas Frequentes" },
  { href: "#contato", label: "Contato" },
] as const;
