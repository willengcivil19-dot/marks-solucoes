import { cn } from "@/lib/utils";

/**
 * Wrapper de layout usado nas seções do site. Chegou a ter um efeito de
 * fade-in ao entrar na viewport, removido por causar conteúdo permanentemente
 * invisível em alguns navegadores mobile (Safari/iOS) — confirmado em
 * múltiplos aparelhos reais mesmo com salvaguardas (checagem síncrona +
 * timeout de segurança). Mantido como componente simples para não exigir
 * alterar todos os usos existentes.
 */
export function Reveal({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  return <div className={cn(className)}>{children}</div>;
}
