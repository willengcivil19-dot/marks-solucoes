import { cn } from "@/lib/utils";

/**
 * Fade + leve deslocamento ao rolar até o elemento, feito só em CSS
 * ("animation-timeline: view()", ver globals.css). Sem JavaScript: nenhum
 * risco do bug que a versão anterior (via IntersectionObserver) tinha em
 * Safari/iOS, onde o conteúdo podia ficar preso invisível.
 */
export function Reveal({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  return <div className={cn("reveal-scroll", className)}>{children}</div>;
}
