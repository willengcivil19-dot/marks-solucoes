import { cn } from "@/lib/utils";

/**
 * Fade + leve deslocamento ao carregar a página, escalonado por `delay`
 * (ver "reveal-onload" em globals.css). CSS puro, ligado ao tempo — nunca
 * ao scroll ou a um observer — para não repetir o bug de conteúdo preso
 * invisível que a versão anterior (via JavaScript) teve em Safari/iOS.
 */
export function Reveal({
  children,
  className,
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <div className={cn("reveal-onload", className)} style={{ animationDelay: `${delay}ms` }}>
      {children}
    </div>
  );
}
