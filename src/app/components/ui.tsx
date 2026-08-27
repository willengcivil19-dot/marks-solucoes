"use client";

import Link from "next/link";
import type { AnchorHTMLAttributes, HTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";
import { trackEvent } from "../analytics";

type CTAProps = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "onClick"> & {
  href: string;
  children: ReactNode;
  size?: "md" | "lg";
  /** Nome do evento de tracking (GA4/GTM/Meta Pixel) disparado no clique. */
  eventName?: string;
};

const ctaSize = {
  md: "px-5 py-3 text-sm",
  lg: "px-7 py-4 text-base",
};

export function PrimaryButton({ href, children, size = "md", className, eventName, ...props }: CTAProps) {
  return (
    <Link
      href={href}
      onClick={eventName ? () => trackEvent(eventName) : undefined}
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-full bg-[#2563EB] font-semibold text-white shadow-[0_8px_24px_-8px_rgba(21,94,239,0.55)] transition-all hover:bg-[#0F4BC7] hover:shadow-[0_10px_28px_-8px_rgba(21,94,239,0.65)] active:scale-[0.98]",
        ctaSize[size],
        className
      )}
      {...props}
    >
      {children}
    </Link>
  );
}

export function WhatsAppButton({ href, children, size = "md", className, eventName = "whatsapp_click", ...props }: CTAProps) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => trackEvent(eventName)}
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-full bg-[#22C55E] font-semibold text-white shadow-[0_8px_24px_-8px_rgba(34,197,94,0.55)] transition-all hover:bg-[#16A34A] hover:shadow-[0_10px_28px_-8px_rgba(34,197,94,0.65)] active:scale-[0.98]",
        ctaSize[size],
        className
      )}
      {...props}
    >
      {children}
    </Link>
  );
}

export function OutlineButton({ href, children, size = "md", className, eventName, ...props }: CTAProps) {
  return (
    <Link
      href={href}
      onClick={eventName ? () => trackEvent(eventName) : undefined}
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-full border border-[#D0D5DD] bg-white font-semibold text-[#0B1F33] transition-colors hover:border-[#2563EB] hover:text-[#2563EB]",
        ctaSize[size],
        className
      )}
      {...props}
    >
      {children}
    </Link>
  );
}

export function TextLink({ href, children, className, eventName }: CTAProps) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onClick={eventName ? () => trackEvent(eventName) : undefined}
      className={cn("inline-flex items-center gap-1 text-sm font-semibold text-[#2563EB] hover:underline", className)}
    >
      {children}
    </Link>
  );
}

export function EmailLink({ email, className }: { email: string; className?: string }) {
  return (
    <Link
      href={`mailto:${email}`}
      onClick={() => trackEvent("email_click")}
      className={cn("font-semibold text-[#2563EB] hover:underline", className)}
    >
      {email}
    </Link>
  );
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full bg-[#2563EB]/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-[#2563EB]">
      {children}
    </span>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  as: As = "h2",
}: {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  as?: "h1" | "h2";
}) {
  return (
    <div className={cn("max-w-2xl", align === "center" && "mx-auto text-center")}>
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      <As className={cn("mt-4 text-[1.75rem] leading-[1.15] font-bold tracking-tight text-[#0B1F33] sm:text-3xl lg:text-[2.25rem]")}>
        {title}
      </As>
      {description && <p className="mt-4 text-base leading-relaxed text-[#475569]">{description}</p>}
    </div>
  );
}

export function Card({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-[#E4E7EC] bg-white p-6 shadow-[0_1px_2px_rgba(16,24,40,0.04)] transition-shadow hover:shadow-[0_4px_16px_-4px_rgba(16,24,40,0.08)]",
        className
      )}
      {...props}
    />
  );
}

export function Container({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("mx-auto max-w-7xl px-5 sm:px-6 lg:px-8", className)} {...props} />;
}
