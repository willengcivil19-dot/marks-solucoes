"use client";

import { useEffect, useState } from "react";
import { X } from "lucide-react";
import { whatsappLink, whatsappMessages } from "../config";
import { trackEvent } from "../analytics";
import { WhatsAppIcon } from "./WhatsAppIcon";

export function WhatsAppFloating() {
  const [showBubble, setShowBubble] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  // O balão aparece só por tempo (25 s), nunca logo na chegada, venha o visitante do topo
  // ou do meio da página. No celular ele fica oculto (classe "hidden sm:block" abaixo),
  // porque a barra fixa e o botão redondo já oferecem o WhatsApp e o balão cobria o conteúdo.
  useEffect(() => {
    const timer = setTimeout(() => setShowBubble(true), 25000);
    return () => clearTimeout(timer);
  }, []);

  const href = whatsappLink(whatsappMessages.floating);

  return (
    <div className="fixed bottom-20 right-5 z-40 flex flex-col items-end gap-3 lg:bottom-6">
      {showBubble && !dismissed && (
        <div className="relative hidden max-w-[15rem] rounded-2xl rounded-br-sm bg-white p-3.5 pr-8 text-sm text-[#0B1F33] shadow-xl sm:block">
          <button
            type="button"
            aria-label="Fechar mensagem"
            onClick={() => setDismissed(true)}
            className="absolute right-2 top-2 text-[#98A2B3] hover:text-[#0B1F33]"
          >
            <X className="h-3.5 w-3.5" />
          </button>
          Olá 👋 Precisa de ART para sua reforma?
        </div>
      )}

      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => trackEvent("whatsapp_click_floating")}
        className="group flex h-14 items-center gap-2.5 rounded-full bg-[#22C55E] pl-4 pr-4 text-white shadow-[0_10px_30px_-6px_rgba(34,197,94,0.6)] transition-transform hover:scale-105 sm:pr-5"
        aria-label="Falar com um engenheiro no WhatsApp"
      >
        <span className="relative flex h-7 w-7 shrink-0 items-center justify-center">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white/40" />
          <WhatsAppIcon className="relative h-7 w-7" />
        </span>
        <span className="hidden text-sm font-semibold sm:inline">Falar com um engenheiro</span>
      </a>
    </div>
  );
}
