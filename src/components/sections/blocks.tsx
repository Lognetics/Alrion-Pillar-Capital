import Link from "next/link";
import type { ReactNode } from "react";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading, Button } from "@/components/ui/primitives";
import { cn } from "@/lib/cn";

/* — A bordered grid of numbered/featured cards ————————————— */
export function FeatureGrid({
  items,
  columns = 3,
  numbered = true,
}: {
  items: { title: string; body: string }[];
  columns?: 2 | 3 | 4;
  numbered?: boolean;
}) {
  const cols = { 2: "md:grid-cols-2", 3: "md:grid-cols-2 lg:grid-cols-3", 4: "md:grid-cols-2 xl:grid-cols-4" };
  return (
    <div className={cn("grid gap-px overflow-hidden rounded-sm border border-line bg-line", cols[columns])}>
      {items.map((it, i) => (
        <Reveal key={it.title} delay={(i % columns) * 0.07} className="flex flex-col bg-paper p-8">
          {numbered && <span className="font-serif text-2xl text-gold-500">0{i + 1}</span>}
          <h3 className={cn("text-lg font-semibold text-navy-950", numbered && "mt-5")}>{it.title}</h3>
          <p className="mt-3 text-sm leading-relaxed text-slate-strong/80">{it.body}</p>
        </Reveal>
      ))}
    </div>
  );
}

/* — Two-column text + checklist ————————————————————————————— */
export function SplitContent({
  eyebrow,
  title,
  children,
  bullets,
  reverse,
}: {
  eyebrow: string;
  title: ReactNode;
  children: ReactNode;
  bullets?: string[];
  reverse?: boolean;
}) {
  return (
    <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
      <Reveal className={cn(reverse && "lg:order-2")}>
        <SectionHeading eyebrow={eyebrow} title={title} />
        <div className="mt-8 space-y-5 text-lg leading-relaxed text-slate-strong/85">{children}</div>
      </Reveal>
      {bullets && (
        <Reveal delay={0.1} className={cn("self-center", reverse && "lg:order-1")}>
          <ul className="grid gap-px overflow-hidden rounded-sm border border-line bg-line">
            {bullets.map((b) => (
              <li key={b} className="flex items-start gap-4 bg-paper p-6">
                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-gold-500" />
                <span className="text-[0.95rem] leading-relaxed text-slate-strong">{b}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      )}
    </div>
  );
}

/* — Closing CTA band ————————————————————————————————————————— */
export function CtaBand({
  title,
  body,
  primary,
  secondary,
}: {
  title: ReactNode;
  body?: string;
  primary: { href: string; label: string };
  secondary?: { href: string; label: string };
}) {
  return (
    <section className="bg-paper py-20">
      <div className="shell">
        <Reveal className="relative overflow-hidden rounded-sm bg-navy-950 px-8 py-16 text-paper md:px-16">
          <div className="absolute inset-0 bg-grid opacity-30" />
          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-gold-500/15 blur-3xl" />
          <div className="relative grid gap-8 md:grid-cols-2 md:items-center">
            <div>
              <h2 className="font-serif text-3xl font-light leading-tight md:text-4xl">{title}</h2>
              {body && <p className="mt-4 max-w-md leading-relaxed text-paper/65">{body}</p>}
            </div>
            <div className="flex flex-wrap gap-4 md:justify-end">
              <Button href={primary.href} variant="gold">{primary.label}</Button>
              {secondary && <Button href={secondary.href} variant="ghost">{secondary.label}</Button>}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* — FAQ accordion-less list ————————————————————————————————— */
export function FaqList({ items }: { items: { q: string; a: string }[] }) {
  return (
    <div className="divide-y divide-line border-y border-line">
      {items.map((it, i) => (
        <Reveal key={it.q} delay={i * 0.05} className="grid gap-4 py-8 md:grid-cols-12">
          <h3 className="text-lg font-semibold text-navy-950 md:col-span-5">{it.q}</h3>
          <p className="leading-relaxed text-slate-strong/80 md:col-span-7">{it.a}</p>
        </Reveal>
      ))}
    </div>
  );
}

/* — Plain section wrapper ——————————————————————————————————— */
export function Section({
  children,
  tone = "paper",
  className,
}: {
  children: ReactNode;
  tone?: "paper" | "cloud" | "navy" | "ink";
  className?: string;
}) {
  const tones = {
    paper: "bg-paper text-navy-950",
    cloud: "bg-cloud text-navy-950",
    navy: "bg-navy-950 text-paper",
    ink: "bg-ink text-paper",
  };
  return (
    <section className={cn("py-20 md:py-28", tones[tone], className)}>
      <div className="shell">{children}</div>
    </section>
  );
}

export { Link };
