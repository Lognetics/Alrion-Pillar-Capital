import Link from "next/link";
import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

export type Crumb = { label: string; href?: string };

export function PageHero({
  eyebrow,
  title,
  intro,
  crumbs,
  align = "left",
  children,
}: {
  eyebrow: string;
  title: ReactNode;
  intro?: ReactNode;
  crumbs?: Crumb[];
  align?: "left" | "center";
  children?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden bg-navy-950 pb-20 pt-36 text-paper md:pb-28 md:pt-44">
      <div className="absolute inset-0 bg-grid opacity-40" />
      <div className="absolute -right-32 -top-24 h-[30rem] w-[30rem] rounded-full bg-gold-500/12 blur-[120px]" />
      <div className="absolute -left-32 bottom-0 h-[26rem] w-[26rem] rounded-full bg-navy-600/30 blur-[120px]" />

      <div className={cn("shell relative", align === "center" && "text-center")}>
        {crumbs && (
          <nav className={cn("mb-8 flex items-center gap-2 text-xs text-paper/45", align === "center" && "justify-center")}>
            <Link href="/" className="transition-colors hover:text-gold-300">Home</Link>
            {crumbs.map((c) => (
              <span key={c.label} className="flex items-center gap-2">
                <span className="text-paper/25">/</span>
                {c.href ? (
                  <Link href={c.href} className="transition-colors hover:text-gold-300">{c.label}</Link>
                ) : (
                  <span className="text-paper/70">{c.label}</span>
                )}
              </span>
            ))}
          </nav>
        )}

        <div className={cn("flex items-center gap-3", align === "center" && "justify-center")}>
          <span className="h-px w-10 bg-gold-500" />
          <span className="eyebrow text-gold-400">{eyebrow}</span>
        </div>

        <h1 className={cn(
          "mt-6 max-w-4xl font-serif text-5xl font-light leading-[1.04] md:text-6xl",
          align === "center" && "mx-auto",
        )}>
          {title}
        </h1>

        {intro && (
          <p className={cn(
            "mt-8 max-w-2xl text-pretty text-lg leading-relaxed text-paper/70 md:text-xl",
            align === "center" && "mx-auto",
          )}>
            {intro}
          </p>
        )}

        {children && <div className="mt-10">{children}</div>}
      </div>
    </section>
  );
}
