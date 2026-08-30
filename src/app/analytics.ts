"use client";

/**
 * Camada fina de tracking, pronta para GA4/GTM (dataLayer), Meta Pixel
 * (fbq) e a tag de conversão do Google Ads (gtag), sem depender de nenhum
 * script carregado ainda além da tag base do Google Ads em layout.tsx.
 */
type TrackParams = Record<string, string | number | boolean | undefined>;

declare global {
  interface Window {
    dataLayer?: unknown[];
    fbq?: (...args: unknown[]) => void;
    gtag?: (...args: unknown[]) => void;
  }
}

/** Rótulo da ação de conversão "Contato" no Google Ads (clique no WhatsApp/e-mail). */
const GOOGLE_ADS_CONTACT_CONVERSION = "AW-608825160/7LmaCMft0OocEMjep6IC";

export function trackEvent(eventName: string, params: TrackParams = {}) {
  if (typeof window === "undefined") return;

  window.dataLayer = window.dataLayer ?? [];
  window.dataLayer.push({ event: eventName, ...params });

  if (typeof window.fbq === "function") {
    window.fbq("trackCustom", eventName, params);
  }

  if ((eventName.startsWith("whatsapp_click") || eventName === "email_click") && typeof window.gtag === "function") {
    window.gtag("event", "conversion", { send_to: GOOGLE_ADS_CONTACT_CONVERSION });
  }
}
