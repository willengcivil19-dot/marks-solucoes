# Marks Soluções — ART para Reforma

Landing page institucional da Marks Soluções, focada em emissão de ART
(Anotação de Responsabilidade Técnica) para reformas residenciais e
comerciais. Next.js 16 (App Router) + Tailwind CSS v4.

## Desenvolvimento

```bash
npm install
npm run dev
```

## Antes de publicar em produção

Edite `src/app/config.ts` e preencha os dados reais da empresa:

- `whatsappNumber` — número de WhatsApp (formato `55DDDNUMERO`, só dígitos)
- `email` — e-mail comercial
- `siteUrl` — domínio definitivo do site (usado em metadata, OG image, sitemap e robots)

Opcional — envio do formulário de contato por e-mail via [Resend](https://resend.com):
copie `.env.example` para `.env.local` e preencha `RESEND_API_KEY` e `EMAIL_FROM`.
Sem essas variáveis, o formulário continua funcionando (o lead fica registrado no
log do servidor) e o WhatsApp permanece como canal principal de conversão.

## Build

```bash
npm run build
```
