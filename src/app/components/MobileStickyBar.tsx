"use client";

import { whatsappLink, whatsappMessages } from "../config";
import { trackEvent } from "../analytics";
import { WhatsAppIcon } from "./WhatsAppIcon";

export function MobileStickyBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-30 border-t border-[#E4E7EC] bg-white/95 p-3 backdrop-blur lg:hidden">
      <a
        href={whatsappLink(whatsappMessages.default)}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => trackEvent("whatsapp_click_sticky_bar")}
        className="flex w-full items-center justify-center gap-2 rounded-full bg-[#22C55E] py-3 text-sm font-semibold text-white shadow-md"
      >
        <WhatsAppIcon className="h-4 w-4" />
        Solicitar ART pelo WhatsApp
      </a>
    </div>
  );
}
