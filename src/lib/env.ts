function readEnv(name: string, fallback = ""): string {
  return process.env[name] ?? fallback;
}

/**
 * Variáveis de servidor usadas pelo formulário de contato. Sem
 * RESEND_API_KEY configurada, o lead apenas é registrado no log do
 * servidor — o formulário continua confirmando o envio normalmente, já
 * que o canal principal de conversão do site é o WhatsApp.
 */
export const serverEnv = {
  resendApiKey: readEnv("RESEND_API_KEY"),
  emailFrom: readEnv("EMAIL_FROM", "Marks Soluções <contato@marks-solucoes.com.br>"),
};
