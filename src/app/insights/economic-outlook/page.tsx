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
    "The Frontier Outlook, ALRION Pillar Capital's annual statement of the market context that shapes how each of our four strategies is positioned.",
};

const KEY_CALLS = [
  {
    no: "01",
    call: "A platform, not a product.",
    body: "Four autonomous strategies operate under one rigorous framework. Each is a separate Delaware LP with its own investment committee and risk framework, so governance and risk boundaries stay clean.",
  },
  {
    no: "02",
    call: "Power is the binding constraint.",
    body: "Electrification of compute and industry tightens grids faster than supply can respond. Our Infrastructure Growth work favours contracted, investment-grade demand across grid modernization and nuclear lifecycle.",
  },
  {
    no: "03",
    call: "Frontier technology rewards proximity.",
    body: "Our Venture strategy backs founders at the inflection point between scientific validation and market deployment, from seed to Series A, primarily in the Northeast Corridor.",
  },
  {
    no: "04",
    call: "Risk is a framework, not an afterthought.",
    body: "Our Global Macro strategy runs to a daily 95% Value-at-Risk discipline and pre-committed gross-exposure limits, combining quantitative modelling with fundamental analysis.",
  },
  {
    no: "05",
    call: "We measure catalysis, not contribution.",
    body: "Our Community Equity Fund treats underserved New York markets as a source of compelling risk-adjusted opportunity, and measures the third-party capital its work attracts.",
  },
];

const CHAPTERS = [
  { no: "I", title: "The Platform Framework", body: "How four autonomous strategies operate under one rigorous framework." },
  { no: "II", title: "Global Macro", body: "A systematic approach to alpha across global macroeconomic dislocations." },
  { no: "III", title: "Infrastructure Growth", body: "Nuclear lifecycle, grid modernization and OT cybersecurity." },
  { no: "IV", title: "Frontier Technology", body: "AI and ML, biotech, and defense and space, from seed to Series A." },
  { no: "V", title: "Impact Through Investment", body: "The Community Equity Fund and its three impact indicators." },
  { no: "VI", title: "Governance & Risk", body: "The standards each strategy is held to, and how we manage risk." },
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
        intro="Our annual statement of the market context that shapes each of our four strategies, and the framework, governance and impact model behind them."
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
                &ldquo;Independence by design. Conviction by discipline. Four
                autonomous strategies, one rigorous framework, and a singular
                standard of fiduciary care for the allocators who ask the harder
                questions.&rdquo;
              </p>
              <p className="mt-6 text-sm font-semibold uppercase tracking-wider text-gold-600">
                From the introduction
              </p>
            </Reveal>
            <Reveal delay={0.1} className="mt-10 space-y-5 text-lg leading-relaxed text-slate-strong/85">
              <p>
                Each year our research desk publishes a single, long-form
                statement of the market context we read across our four
                strategies. The Frontier Outlook sets out the framework we work
                to, the themes each strategy watches, and the governance and
                impact standards that hold the platform together.
              </p>
              <p>
                Established in 2024 and based in New York, ALRION Pillar Capital
                is a platform of four independent Delaware LP strategies. This
                edition is organized around a simple idea: that autonomy and a
                shared standard of discipline are what let each strategy do its
                work well.
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
                The outlook sets out the firm's framework and the external market
                context we watch. It is not a statement of performance.
              </p>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* Key calls */}
      <Section tone="cloud">
        <SectionHeading
          eyebrow="Our key calls"
          title="Five principles for 2026"
          intro="The propositions that shape how all four of our strategies are positioned this year."
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
