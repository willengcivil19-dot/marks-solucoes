"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

/** Fade-in + leve deslocamento vertical ao entrar na viewport. Discreto e único, respeita prefers-reduced-motion. */
export function Reveal({
  children,
  className,
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(
    () => typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );

  useEffect(() => {
    const node = ref.current;
    if (!node || visible) return;

    // Checagem síncrona: se o bloco já está na tela ao montar (ex.: o hero,
    // sempre visível no primeiro carregamento), mostra direto — não depende
    // do primeiro callback do IntersectionObserver, que em alguns navegadores
    // mobile (Safari/iOS) pode atrasar ou nunca disparar para um elemento que
    // já estava interseccionando no momento em que observe() foi chamado.
    const rect = node.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(node);

    // Rede de segurança: alguns navegadores mobile atrasam ou nunca disparam
    // o primeiro callback do observer (ex.: durante o layout inicial da
    // página, com imagem de fundo ainda carregando). Sem isso o conteúdo
    // pode ficar permanentemente invisível — pior que nunca animar.
    const fallback = setTimeout(() => setVisible(true), 1200);

    return () => {
      observer.disconnect();
      clearTimeout(fallback);
    };
    // Roda só na montagem: alternar `visible` não deve recriar o observer.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div
      ref={ref}
      style={{ transitionDelay: visible ? `${delay}ms` : "0ms" }}
      className={cn(
        "transition-all duration-700 ease-out",
        visible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0",
        className
      )}
    >
      {children}
    </div>
  );
}
