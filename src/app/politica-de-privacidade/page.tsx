import type { Metadata } from "next";
import Link from "next/link";
import { site } from "../config";

export const metadata: Metadata = {
  title: { absolute: `Política de Privacidade | ${site.companyName}` },
  description: `Política de privacidade e tratamento de dados pessoais da ${site.companyName}.`,
};

export default function PrivacyPolicyPage() {
  return (
    <div className="mx-auto max-w-3xl px-5 py-16 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold text-[#0B1F33]">Política de Privacidade</h1>
      <p className="mt-2 text-sm text-[#475569]">Última atualização: {new Date().toLocaleDateString("pt-BR")}</p>

      <div className="mt-8 space-y-6 text-sm leading-relaxed text-[#475569]">
        <p>
          A {site.companyName} coleta apenas os dados necessários para viabilizar o atendimento e a análise técnica
          solicitados por meio deste site, como nome, contato (WhatsApp e e-mail), cidade, tipo de imóvel e
          informações sobre a reforma pretendida.
        </p>
        <p>
          Esses dados são utilizados exclusivamente para contato, orientação e elaboração da documentação técnica
          relacionada à solicitação, não sendo compartilhados com terceiros para fins comerciais.
        </p>
        <p>
          Você pode solicitar a qualquer momento a atualização ou exclusão dos seus dados entrando em contato pelo
          e-mail {site.email} ou pelo WhatsApp informado no rodapé deste site.
        </p>
        <p>Este site não utiliza cookies de rastreamento além dos necessários para métricas de audiência e campanhas de marketing.</p>
      </div>

      <Link href="/" className="mt-10 inline-block text-sm font-semibold text-[#2563EB] hover:underline">
        ← Voltar para a página inicial
      </Link>
    </div>
  );
}
