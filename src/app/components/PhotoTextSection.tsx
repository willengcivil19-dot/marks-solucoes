import type { ReactNode } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { whatsappLink } from "../config";
import { Container, WhatsAppButton, Eyebrow } from "./ui";
import { Reveal } from "./Reveal";

type PhotoTextSectionProps = {
  id?: string;
  className?: string;
  image: { src: string; alt: string };
  imagePosition?: "left" | "right";
  eyebrow: string;
  title: string;
  description: ReactNode;
  points?: string[];
  callout?: ReactNode;
  cta: { label: string; message: string; eventName: string };
};

export function PhotoTextSection({
  id,
  className,
  image,
  imagePosition = "left",
  eyebrow,
  title,
  description,
  points,
  callout,
  cta,
}: PhotoTextSectionProps) {
  return (
    <section id={id} className={cn("bg-white py-16 sm:py-20", className)}>
      <Container className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
        <Reveal className={imagePosition === "right" ? "lg:order-2" : undefined}>
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-sm">
            <Image src={image.src} alt={image.alt} fill loading="lazy" sizes="(min-width: 1024px) 46vw, 100vw" className="object-cover" />
          </div>
        </Reveal>

        <Reveal delay={100} className={imagePosition === "right" ? "lg:order-1" : undefined}>
          <Eyebrow>{eyebrow}</Eyebrow>
          <h2 className="mt-4 text-[1.75rem] font-bold leading-[1.15] tracking-tight text-[#0B1F33] sm:text-3xl">
            {title}
          </h2>
          <div className="mt-5 max-w-lg space-y-4 text-base leading-relaxed text-[#475569]">{description}</div>

          {callout && (
            <div className="mt-6 max-w-lg rounded-xl border-l-4 border-[#2563EB] bg-[#EFF6FF] p-4 text-sm font-medium text-[#0B1F33]">
              {callout}
            </div>
          )}

          {points && (
            <ul className="mt-6 space-y-2.5">
              {points.map((point) => (
                <li key={point} className="flex items-start gap-2.5 text-sm font-medium text-[#0B1F33]">
                  <svg viewBox="0 0 20 20" className="mt-0.5 h-4 w-4 shrink-0 text-[#2563EB]" fill="currentColor">
                    <path d="M16.7 5.3a1 1 0 0 1 0 1.4l-7.4 7.4a1 1 0 0 1-1.4 0L3.3 9.5a1 1 0 1 1 1.4-1.4l3.6 3.6 6.7-6.7a1 1 0 0 1 1.4 0Z" />
                  </svg>
                  {point}
                </li>
              ))}
            </ul>
          )}

          <WhatsAppButton href={whatsappLink(cta.message)} eventName={cta.eventName} className="mt-7">
            {cta.label}
          </WhatsAppButton>
        </Reveal>
      </Container>
    </section>
  );
}
