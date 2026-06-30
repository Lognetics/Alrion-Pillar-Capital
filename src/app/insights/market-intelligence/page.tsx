import Link from "next/link";
import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { Section, CtaBand } from "@/components/sections/blocks";
import { SectionHeading } from "@/components/ui/primitives";
import { Reveal } from "@/components/ui/Reveal";
import { cn } from "@/lib/cn";
import { INDICATORS } from "@/lib/research";
import { INSIGHTS } from "@/lib/insights";

export const metadata: Metadata = {
  title: "Market Intelligence",
  description:
    "Live-style market intelligence from ALRION Pillar Capital — illustrative frontier-technology indicators and the research that interprets them.",
};

const PIECES = INSIGHTS.filter(
  (i) => i.category === "Market Intelligence" || i.category === "Economic Outlook",
);

const arrow = { up: "▲", down: "▼", flat: "■" } as const;

export default function MarketIntelligencePage() {
  return (
    <>
      <PageHero
        eyebrow="Research & Insights"
        title={
          <>
            Market intelligence,
            <span className="text-gilt"> read in real terms.</span>
          </>
        }
        intro="A continuously evolving view of the frontier-technology markets — the indicators we watch, the dislocations we price, and the analysis our desk publishes from them."
        crumbs={[{ label: "Insights", href: "/insights" }, { label: "Market Intelligence" }]}
      />

      {/* Indicator dashboard */}
      <Section tone="ink">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            light
            eyebrow="Frontier Monitor"
            title="The dashboard our desk watches"
            intro="Illustrative readings across compute, power and capital — refreshed by our research team. Figures are illustrative."
          />
          <div className="flex items-center gap-2 text-xs font-semibold tracking-wide text-paper/60">
            <span className="h-2 w-2 animate-pulse rounded-full bg-gold-400" />
            ILLUSTRATIVE · UPDATED MONTHLY
          </div>
        </div>

        <div className="mt-12 grid gap-px overflow-hidden rounded-sm border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
          {INDICATORS.map((ind, i) => (
            <Reveal
              key={ind.label}
              delay={(i % 4) * 0.06}
              className="group relative flex flex-col bg-navy-950 p-6"
            >
              <span className="text-xs font-semibold uppercase tracking-wider text-paper/50">
                {ind.label}
              </span>
              <span className="mt-4 font-serif text-3xl font-light text-paper">
                {ind.value}
              </span>
              <span
                className={cn(
                  "mt-2 inline-flex items-center gap-1.5 text-sm font-semibold",
                  ind.direction === "up" && "text-emerald-400",
                  ind.direction === "down" && "text-rose-400",
                  ind.direction === "flat" && "text-gold-400",
                )}
              >
                <span className="text-[0.65rem]">{arrow[ind.direction]}</span>
                {ind.delta}
              </span>
              <span className="mt-4 text-xs leading-relaxed text-paper/45">{ind.note}</span>
              <span className="absolute inset-x-0 bottom-0 h-px scale-x-0 bg-gold-500 transition-transform duration-500 group-hover:scale-x-100" />
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Filtered article cards */}
      <Section tone="paper">
        <SectionHeading
          eyebrow="From the desk"
          title="Intelligence, interpreted"
          intro="Our analysts translate the data above into actionable house views."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {PIECES.map((p, i) => (
            <Reveal key={p.slug} delay={(i % 2) * 0.08}>
              <Link
                href={`/insights/${p.slug}`}
                className="group flex h-full flex-col rounded-sm border border-line bg-paper p-8 transition-all hover:border-gold-500 hover:shadow-[0_24px_60px_-30px] hover:shadow-navy-950/30"
              >
                <div className="flex items-center gap-3 text-xs font-semibold tracking-wide text-gold-600">
                  <span className="eyebrow">{p.category}</span>
                  <span className="text-line">·</span>
                  <span className="text-slate-strong/55">{p.readingTime}</span>
                </div>
                <h3 className="mt-5 font-serif text-2xl font-light leading-snug text-navy-950">
                  {p.title}
                </h3>
                <p className="mt-4 flex-1 text-sm leading-relaxed text-slate-strong/80">
                  {p.excerpt}
                </p>
                <div className="mt-6 flex items-center justify-between border-t border-line pt-5 text-xs text-slate-strong/55">
                  <span>{p.date}</span>
                  <span className="font-semibold text-navy-900 transition-colors group-hover:text-gold-600">
                    Read analysis →
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </Section>

      <CtaBand
        title="Want the desk's view in your inbox?"
        body="Subscribe to receive our market intelligence as it publishes."
        primary={{ href: "/insights/newsletter", label: "Subscribe" }}
        secondary={{ href: "/insights", label: "All insights" }}
      />
    </>
  );
}
