import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

/** Ícone técnico dentro de um pequeno bloco azul-claro — reutilizado nos cards de serviço e nos chips de intenção. */
export function ServiceIcon({ icon: Icon, className }: { icon: LucideIcon; className?: string }) {
  return (
    <span
      className={cn(
        "flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#EFF6FF] text-[#2563EB]",
        className
      )}
    >
      <Icon className="h-5 w-5" strokeWidth={1.75} />
    </span>
  );
}
