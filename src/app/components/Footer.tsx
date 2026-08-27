import Image from "next/image";
import Link from "next/link";
import { Mail } from "lucide-react";
import { navLinks, site } from "../config";
import { Container, EmailLink } from "./ui";
import { WhatsAppIcon } from "./WhatsAppIcon";

export function Footer() {
  return (
    <footer className="bg-[#0B1F33] pb-24 pt-16 text-white/70 lg:pb-16">
      <Container>
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-3">
          <div>
            <div className="inline-block rounded-lg bg-white px-3 py-2.5">
              <Image
                src="/images/logo.png"
                alt={`${site.companyName} — ${site.tagline}`}
                width={1200}
                height={224}
                loading="lazy"
                className="h-7 w-auto"
              />
            </div>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-white/40">Contato</p>
            <ul className="mt-3 space-y-2.5 text-sm">
              <li className="flex items-center gap-2">
                <WhatsAppIcon className="h-4 w-4 shrink-0" />
                {site.whatsappNumber}
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 shrink-0" />
                <EmailLink email={site.email} className="text-white/70 hover:text-white" />
              </li>
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-white/40">Links</p>
            <ul className="mt-3 space-y-2.5 text-sm">
              {navLinks
                .filter((link) => link.href !== "#inicio")
                .map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="hover:text-white">
                      {link.label}
                    </Link>
                  </li>
                ))}
              <li>
                <Link href="/politica-de-privacidade" className="hover:text-white">
                  Política de Privacidade
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6 text-xs text-white/40">
          <p>Os serviços estão sujeitos à análise técnica, disponibilidade e atribuições profissionais aplicáveis.</p>
          <p className="mt-2">
            © {new Date().getFullYear()} {site.companyName}. Todos os direitos reservados.
          </p>
        </div>
      </Container>
    </footer>
  );
}
