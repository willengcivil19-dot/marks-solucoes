import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { site } from "./config";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { WhatsAppFloating } from "./components/WhatsAppFloating";
import { MobileStickyBar } from "./components/MobileStickyBar";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.siteUrl),
  title: {
    absolute: `ART para Reforma | Emissão e Responsabilidade Técnica | ${site.companyName}`,
  },
  description:
    "Precisa de ART para reforma? Solicite análise técnica e orientação para documentação da sua obra. Atendimento rápido pelo WhatsApp.",
  keywords: [
    "ART para reforma",
    "emissão de ART",
    "ART reforma apartamento",
    "ART para condomínio",
    "engenheiro para ART",
    "ART reforma residencial",
    "ART para reforma de apartamento",
    "laudo para reforma",
    "documentação para reforma em condomínio",
    "NBR 16280",
    "engenheiro para reforma",
  ],
  openGraph: {
    title: `ART para Reforma | ${site.companyName}`,
    description:
      "Análise técnica e documentação para reformas residenciais e comerciais. Atendimento direto pelo WhatsApp.",
    url: site.siteUrl,
    siteName: site.companyName,
    locale: "pt_BR",
    type: "website",
  },
  alternates: {
    canonical: site.siteUrl,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: site.companyName,
  description: "Emissão de ART e documentação técnica para reformas residenciais e comerciais.",
  email: site.email,
  telephone: site.whatsappNumber,
  url: site.siteUrl,
  priceRange: "$$",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" className={`${inter.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col bg-white text-[#0B1F33]">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <Header />
        <main className="flex-1 pb-16 lg:pb-0">{children}</main>
        <Footer />
        <WhatsAppFloating />
        <MobileStickyBar />
      </body>
    </html>
  );
}
