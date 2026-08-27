"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { navLinks, site, whatsappLink, whatsappMessages } from "../config";
import { trackEvent } from "../analytics";
import { WhatsAppIcon } from "./WhatsAppIcon";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[#E4E7EC] bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-3.5 sm:px-6 lg:px-8">
        <Link href="#inicio" className="flex shrink-0 items-center" onClick={() => setOpen(false)}>
          <Image
            src="/images/logo.png"
            alt={`${site.companyName} — ${site.tagline}`}
            width={1200}
            height={224}
            priority
            className="h-8 w-auto sm:h-9"
          />
        </Link>

        <nav aria-label="Navegação principal" className="hidden lg:flex lg:items-center lg:gap-7">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="text-sm font-medium text-[#475569] transition-colors hover:text-[#0B1F33]">
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Link
            href={whatsappLink(whatsappMessages.default)}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackEvent("whatsapp_click", { location: "header" })}
            className="inline-flex items-center gap-2 rounded-full bg-[#2563EB] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#0F4BC7]"
          >
            Solicitar minha ART
          </Link>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <Link
            href={whatsappLink(whatsappMessages.default)}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Falar no WhatsApp"
            onClick={() => trackEvent("whatsapp_click", { location: "header_mobile" })}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#22C55E] text-white"
          >
            <WhatsAppIcon className="h-5 w-5" />
          </Link>
          <button
            type="button"
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#E4E7EC] text-[#0B1F33]"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-[#E4E7EC] bg-white px-5 py-4 lg:hidden">
          <nav aria-label="Navegação mobile" className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2.5 text-sm font-medium text-[#0B1F33] hover:bg-[#F8FAFC]"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
