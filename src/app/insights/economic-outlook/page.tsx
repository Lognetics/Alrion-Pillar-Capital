import Link from "next/link";
import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { Section, CtaBand } from "@/components/sections/blocks";
import { SectionHeading, Button } from "@/components/ui/primitives";
import { Reveal } from "@/components/ui/Reveal";
import { INSIGHTS } from "@/lib/insights";

export const metadata: Metadata = {
  title: "Economic Outlook",
  description:
    "The Frontier Outlook — ALRION Pillar Capital's flagship report on the technologies and capital flows shaping the next economy.",
};

const KEY_CALLS = [
  {
    no: "01",
    call: "Compute is a multi-cycle, not a single trade.",
    body: "We see four distinct capital cycles inside the AI buildout — silicon, networking, data-center real assets and power — moving at different speeds. Allocators concentrated in one are mispricing the others.",
  },
  {
    no: "02",
    call: "Power becomes the binding constraint.",
    body: "Electrification of compute and industry tightens grids faster than supply can respond. We favour contracted generation, long-duration storage and transmission build with inelastic demand.",
  },
  {
    no: "03",
    call: "Private markets price the frontier better than public.",
    body: "The most asymmetric exposure to frontier technology remains illiquid. Systematic discipline lets us underwrite it without overpaying for volatility.",
  },
  {
    no: "04",
    call: "Resilience re-prices across the real economy.",
    body: "Dual-use innovation, reshoring and supply-chain security migrate from defense budgets into mainstream institutional portfolios.",
  },
  {
    no: "05",
    call: "Impact and returns increasingly converge.",
    body: "The themes with the strongest secular tailwinds — energy, health, inclusion — are also where measurable impact compounds. We refuse the trade-off.",
  },
];

const CHAPTERS = [
  { no: "I", title: "The Macro Regime", body: "Rates, liquidity and the path for risk capital into the back half of the decade." },
  { no: "II", title: "The Compute Supercycle", body: "Where durable value accrues across the AI infrastructure stack." },
  { no: "III", title: "Power & the Grid", body: "The energy transition as a private-markets, contracted-cashflow story." },
  { no: "IV", title: "Life Sciences at the Frontier", body: "AI-native discovery and the longevity care stack." },
  { no: "V", title: "Resilience & the Real Economy", body: "Defense, reshoring and supply-chain security." },
  { no: "VI", title: "Positioning & Risk", body: "How our four platforms are positioned, and what would change our mind." },
];

export default function EconomicOutlookPage() {
  const flagship = INSIGHTS.find((i) => i.slug === "frontier-outlook-2026") ?? INSIGHTS[0];

  return (
    <>
      <PageHero
        eyebrow="Flagship Report"
        title={
          <>
            The Frontier Outlook
            <span className="text-gilt"> 2026.</span>
          </>
        }
        intro="Our house view on the technologies and capital flows shaping the next economy — compute, energy, capital and the convergence of impact with returns."
        crumbs={[{ label: "Insights", href: "/insights" }, { label: "Economic Outlook" }]}
      >
        <div className="flex flex-wrap gap-4">
          <Button href={`/insights/${flagship.slug}`} variant="gold">
            Read the outlook
          </Button>
          <span className="inline-flex cursor-not-allowed items-center gap-2 border border-white/15 px-7 py-3.5 text-sm font-semibold tracking-wide text-paper/50">
            Download PDF · forthcoming
          </span>
        </div>
      </PageHero>

      {/* Editorial intro + meta rail */}
      <Section tone="paper">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-20">
          <div className="lg:col-span-8">
            <Reveal>
              <p className="font-serif text-2xl font-light leading-relaxed text-navy-950 md:text-3xl">
                &ldquo;Compute, energy and capital are converging into a
                once-in-a-generation buildout. The question for allocators is no
                longer <em>whether</em> to participate, but <em>where</em> in the
                stack durable value accrues.&rdquo;
              </p>
              <p className="mt-6 text-sm font-semibold uppercase tracking-wider text-gold-600">
                From the introduction
              </p>
            </Reveal>
            <Reveal delay={0.1} className="mt-10 space-y-5 text-lg leading-relaxed text-slate-strong/85">
              <p>
                Each year our research desk publishes a single, long-form
                statement of conviction. The Frontier Outlook is where our
                engineers, scientists and analysts set out the regime they
                expect, the themes they believe are structurally underpriced,
                and — crucially — what would change their minds.
              </p>
              <p>
                This year&rsquo;s edition is organized around a simple thesis:
                that the defining capital cycle of the decade is not one trade
                but several, and that discipline at the level of the stack is
                what separates participation from compounding.
              </p>
            </Reveal>
          </div>

          <Reveal delay={0.15} className="lg:col-span-4">
            <div className="rounded-sm border border-line bg-cloud p-8">
              <p className="eyebrow text-gold-600">Report at a glance</p>
              <dl className="mt-6 divide-y divide-line text-sm">
                {[
                  ["Edition", "2026 · Annual"],
                  ["Published", flagship.date],
                  ["Reading time", flagship.readingTime],
                  ["Chapters", "6"],
                  ["Format", "Long-form + data"],
                ].map(([k, v]) => (
                  <div key={k} className="flex items-center justify-between py-3">
                    <dt className="text-slate-strong/60">{k}</dt>
                    <dd className="font-semibold text-navy-950">{v}</dd>
                  </div>
                ))}
              </dl>
              <p className="mt-6 text-xs leading-relaxed text-slate-strong/55">
                Figures throughout the outlook are illustrative and for research
                purposes only.
              </p>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* Key calls */}
      <Section tone="cloud">
        <SectionHeading
          eyebrow="Our key calls"
          title="Five convictions for 2026"
          intro="The propositions that shape how all four of our platforms are positioned this year."
        />
        <div className="mt-12 divide-y divide-line border-y border-line">
          {KEY_CALLS.map((k, i) => (
            <Reveal key={k.no} delay={i * 0.05} className="grid gap-6 py-8 md:grid-cols-12 md:items-baseline">
              <div className="flex items-baseline gap-4 md:col-span-5">
                <span className="font-serif text-3xl font-light text-gold-500">{k.no}</span>
                <h3 className="font-serif text-xl font-light leading-snug text-navy-950">
                  {k.call}
                </h3>
              </div>
              <p className="leading-relaxed text-slate-strong/80 md:col-span-7">{k.body}</p>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Chapter navigation */}
      <Section tone="paper">
        <SectionHeading eyebrow="Inside the report" title="Six chapters" />
        <div className="mt-12 grid gap-px overflow-hidden rounded-sm border border-line bg-line md:grid-cols-2 lg:grid-cols-3">
          {CHAPTERS.map((c, i) => (
            <Reveal key={c.no} delay={(i % 3) * 0.06} className="group flex flex-col bg-paper p-8">
              <span className="font-serif text-2xl text-gold-500">{c.no}</span>
              <h3 className="mt-5 text-lg font-semibold text-navy-950">{c.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-strong/80">{c.body}</p>
            </Reveal>
          ))}
        </div>
        <Reveal delay={0.1} className="mt-10">
          <Link
            href={`/insights/${flagship.slug}`}
            className="inline-flex items-center gap-2 text-sm font-semibold text-navy-900 transition-colors hover:text-gold-600"
          >
            Read the full outlook online →
          </Link>
        </Reveal>
      </Section>

      <CtaBand
        title="Receive the outlook the moment it publishes."
        body="Subscribers get our flagship report and quarterly addenda first."
        primary={{ href: "/insights/newsletter", label: "Subscribe" }}
        secondary={{ href: "/insights/reports", label: "Report archive" }}
      />
    </>
  );
}
