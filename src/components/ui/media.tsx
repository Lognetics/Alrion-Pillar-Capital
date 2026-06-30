import Image from "next/image";
import type { ReactNode } from "react";
import { cn } from "@/lib/cn";
import { Reveal } from "@/components/ui/Reveal";

/* — Framed editorial image with a subtle navy wash ——————————— */
export function FeatureImage({
  src,
  alt,
  className,
  rounded = true,
  ratio = "aspect-[4/3]",
}: {
  src: string;
  alt: string;
  className?: string;
  rounded?: boolean;
  ratio?: string;
}) {
  return (
    <div
      className={cn(
        "relative overflow-hidden bg-navy-900",
        rounded && "rounded-sm",
        ratio,
        className,
      )}
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(max-width: 1024px) 100vw, 50vw"
        className="object-cover transition-transform duration-[1.2s] ease-[cubic-bezier(0.16,1,0.3,1)] hover:scale-105"
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-navy-950/30 to-transparent" />
    </div>
  );
}

/* — Full-bleed parallax-feel image band with overlaid content —— */
export function ImageBand({
  src,
  alt,
  children,
  className,
  minH = "min-h-[26rem]",
}: {
  src: string;
  alt: string;
  children?: ReactNode;
  className?: string;
  minH?: string;
}) {
  return (
    <section className={cn("relative flex items-center overflow-hidden bg-navy-950", minH, className)}>
      <Image
        src={src}
        alt={alt}
        fill
        sizes="100vw"
        className="object-cover opacity-45"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-navy-950 via-navy-950/70 to-navy-950/30" />
      <div className="absolute inset-0 bg-grid opacity-30" />
      <div className="shell relative z-10 py-20 text-paper">{children}</div>
    </section>
  );
}

/* — Split: image on one side, content on the other ——————————— */
export function ImageSplit({
  src,
  alt,
  reverse,
  children,
  tone = "paper",
}: {
  src: string;
  alt: string;
  reverse?: boolean;
  children: ReactNode;
  tone?: "paper" | "cloud";
}) {
  return (
    <section className={cn("py-20 md:py-28", tone === "cloud" ? "bg-cloud" : "bg-paper")}>
      <div className="shell grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <Reveal className={cn(reverse && "lg:order-2")}>
          <FeatureImage src={src} alt={alt} ratio="aspect-[5/4]" />
        </Reveal>
        <Reveal delay={0.1} className={cn(reverse && "lg:order-1")}>
          {children}
        </Reveal>
      </div>
    </section>
  );
}
