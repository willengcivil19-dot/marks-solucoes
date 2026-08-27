"use client";

/**
 * Camada fina de tracking, pronta para GA4/GTM (dataLayer) e Meta Pixel
 * (fbq), sem depender de nenhum script carregado ainda. Basta inserir as
 * tags do GTM/GA4/Meta Pixel no <head> (ex.: em layout.tsx) que os eventos
 * abaixo passam a ser recebidos, sem alterar os componentes.
 */
type TrackParams = Record<string, string | number | boolean | undefined>;

declare global {
  interface Window {
    dataLayer?: unknown[];
    fbq?: (...args: unknown[]) => void;
  }
}

export function trackEvent(eventName: string, params: TrackParams = {}) {
  if (typeof window === "undefined") return;

  window.dataLayer = window.dataLayer ?? [];
  window.dataLayer.push({ event: eventName, ...params });

  if (typeof window.fbq === "function") {
    window.fbq("trackCustom", eventName, params);
  }
}
