import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/layout/PageHero";
import {
  Section,
  SplitContent,
  FeatureGrid,
  FaqList,
  CtaBand,
} from "@/components/sections/blocks";
import { SectionHeading } from "@/components/ui/primitives";
import { Reveal } from "@/components/ui/Reveal";
import { STRATEGIES } from "@/lib/site";
import { strategyImage } from "@/lib/imagery";

/* — Original per-strategy criteria & FAQ ——————————————————————— */
const DETAIL: Record<
  string,
  {
    criteria: { title: string; body: string }[];
    faq: { q: string; a: string }[];
  }
> = {
  "hedge-fund": {
    criteria: [
      {
        title: "Global macro dislocation",
        body: "We pursue alpha across global macroeconomic dislocations, concentrating where relative value is mispriced across asset classes.",
      },
      {
        title: "Cross-asset relative value",
        body: "Positions express multi-timeframe, cross-asset relative value rather than directional bets on a single market.",
      },
      {
        title: "Quant and fundamental integration",
        body: "Quantitative modelling is integrated with fundamental analysis, so signals are validated by judgment before they size a position.",
      },
      {
        title: "Value-at-Risk discipline",
        body: "Exposure is monitored through daily 95% Value-at-Risk, with limits set in advance and enforced independently of the desk.",
      },
      {
        title: "Gross exposure ceiling",
        body: "Gross exposure is held to a maximum of 300%, a hard limit that governs how conviction translates into position size.",
      },
      {
        title: "Liquidity discipline",
        body: "Exposures are sized so positions can be unwound in an orderly manner, preserving optionality through changing conditions.",
      },
    ],
    faq: [
      {
        q: "How does the strategy manage risk?",
        a: "Through daily 95% Value-at-Risk monitoring and a maximum of 300% gross exposure, with pre-committed limits enforced independently of the investing team.",
      },
      {
        q: "How are quantitative and fundamental methods combined?",
        a: "Quantitative modelling generates and validates cross-asset relative-value signals, while fundamental analysis provides judgment and oversight on every allocation.",
      },
      {
        q: "What are the fee terms and minimum?",
        a: "The Hedge Fund LP carries a 2.0% management fee and a 20% performance fee, with a $1M minimum investment.",
      },
      {
        q: "How is independence maintained?",
        a: "The strategy is a separate Delaware Limited Partnership with its own investment committee, and an oversight function separate from the desk enforces limits and reports to governance.",
      },
    ],
  },
  "private-equity": {
    criteria: [
      {
        title: "Mission-critical infrastructure",
        body: "We back the infrastructure underpinning the modern economy, focused on nuclear lifecycle services, grid modernization and OT cybersecurity.",
      },
      {
        title: "Revenue scale",
        body: "We target established businesses with $10M–$100M in revenue, past the earliest risk but with clear room to grow.",
      },
      {
        title: "Investment-grade counterparties",
        body: "Contracted demand from investment-grade counterparties anchors the durability of each thesis.",
      },
      {
        title: "Operational value creation",
        body: "Clear levers for value creation, from professionalization to modernization, must underpin every commitment.",
      },
      {
        title: "Aligned management",
        body: "We partner with capable teams whose incentives reward long-term value rather than short-term extraction.",
      },
      {
        title: "Credible realization",
        body: "We commit where multiple realistic routes to realization exist at the outset of the investment.",
      },
    ],
    faq: [
      {
        q: "Which sectors does the strategy target?",
        a: "Nuclear lifecycle services, grid modernization and operational-technology cybersecurity, the mission-critical infrastructure of a resilient, electrified economy.",
      },
      {
        q: "What size businesses do you invest in?",
        a: "Established companies with $10M–$100M in revenue and investment-grade counterparties, where growth capital can compound into durable value.",
      },
      {
        q: "What are the economics for partners?",
        a: "The Private Equity LP is structured with an 8% preferred return and 20% carried interest.",
      },
      {
        q: "How is the strategy governed?",
        a: "It operates as a separate Delaware Limited Partnership with its own investment committee, with independent valuation committees on illiquid positions.",
      },
    ],
  },
  "venture-capital": {
    criteria: [
      {
        title: "Scientific inflection",
        body: "We back founders at the inflection point between scientific validation and market deployment, where technical risk is retiring.",
      },
      {
        title: "Frontier focus",
        body: "Allocation concentrates in artificial intelligence and machine learning (40%), biotechnology (35%) and defense and space (25%).",
      },
      {
        title: "Seed to Series A",
        body: "We invest from Seed to Series A, primarily across the Northeast Corridor, where the strategy's network runs deepest.",
      },
      {
        title: "Technical defensibility",
        body: "Diligence confirms a genuine, hard-to-replicate technical edge before capital is committed.",
      },
      {
        title: "Advisory depth",
        body: "A Technical Advisory Board of former government and military leaders informs diligence in dual-use and defense technology.",
      },
      {
        title: "Founder quality",
        body: "We invest in exceptional teams with the conviction, integrity and adaptability to navigate deep uncertainty.",
      },
    ],
    faq: [
      {
        q: "At what stage do you invest?",
        a: "From Seed to Series A, primarily across the Northeast Corridor, providing conviction capital as technical risk gives way to market deployment.",
      },
      {
        q: "How is the portfolio allocated?",
        a: "Across three frontier pillars: artificial intelligence and machine learning (40%), biotechnology (35%), and defense and space (25%).",
      },
      {
        q: "What advisory support does the strategy bring?",
        a: "A Technical Advisory Board of former government and military leaders supports diligence and guidance, particularly in defense and dual-use technology.",
      },
      {
        q: "How is the strategy governed?",
        a: "It operates as a separate Delaware Limited Partnership with its own investment committee and risk framework.",
      },
    ],
  },
  "community-equity": {
    criteria: [
      {
        title: "Community mandate",
        body: "The fund focuses on underserved communities in New York, directing capital where it is most catalytic.",
      },
      {
        title: "Risk-adjusted conviction",
        body: "We invest on the conviction that underserved markets represent some of the most compelling risk-adjusted opportunities in New York.",
      },
      {
        title: "Local hiring",
        body: "We favor enterprises that create meaningful, sustainable livelihoods, measuring job creation, wage growth and career advancement.",
      },
      {
        title: "Wealth building",
        body: "We prioritize growth in net worth among founders, stakeholders and local investors in historically underserved communities.",
      },
      {
        title: "Neighborhood stability",
        body: "We back enterprises that strengthen local economies and community resilience over time.",
      },
      {
        title: "Catalytic capital",
        body: "We measure the third-party capital attracted into a community after our initial investment, tracking catalysis, not just contribution.",
      },
    ],
    faq: [
      {
        q: "How is the fund capitalized?",
        a: "The Community Equity Fund LP is seeded by carried interest from Alrion's institutional strategies, aligning platform success with community outcomes.",
      },
      {
        q: "What is the investment mandate?",
        a: "A community-focused mandate, built on the conviction that underserved markets offer compelling risk-adjusted opportunities in New York.",
      },
      {
        q: "How is success measured?",
        a: "Through local hiring, wealth building and neighborhood stability, alongside the volume of third-party capital catalyzed after our initial investment.",
      },
      {
        q: "How is the strategy governed?",
        a: "It operates as a separate Delaware Limited Partnership with its own investment committee and risk framework.",
      },
    ],
  },
};

export function generateStaticParams() {
  return STRATEGIES.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const strategy = STRATEGIES.find((s) => s.slug === slug);
  if (!strategy) return { title: "Strategy" };
  return {
    title: strategy.name,
    description: strategy.summary,
  };
}

export default async function StrategyDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const strategy = STRATEGIES.find((s) => s.slug === slug);
  if (!strategy) notFound();

  const detail = DETAIL[strategy.slug];
  const related = STRATEGIES.filter((s) => s.slug !== strategy.slug);

  return (
    <>
      <PageHero
        eyebrow={strategy.kicker}
        title={strategy.name}
        intro={strategy.summary}
        image={strategyImage(strategy.slug)}
        crumbs={[
          { label: "Strategies", href: "/strategies" },
          { label: strategy.name },
        ]}
      />

      {/* — Overview ————————————————————————————————————————— */}
      <Section tone="paper">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-20">
          <Reveal className="lg:col-span-5">
            <SectionHeading
              eyebrow="Platform Overview"
              title={<>The mandate at a glance.</>}
            />
          </Reveal>
          <Reveal delay={0.1} className="lg:col-span-7">
            <p className="text-xl leading-relaxed text-slate-strong/85">
              {strategy.description}
            </p>
            <div className="mt-10 grid gap-px overflow-hidden rounded-sm border border-line bg-line sm:grid-cols-3">
              {strategy.metrics.map((m) => (
                <div key={m.label} className="bg-paper p-6">
                  <p className="font-serif text-2xl font-light text-navy-950">
                    {m.value}
                  </p>
                  <p className="mt-2 text-xs uppercase tracking-[0.18em] text-slate-strong/55">
                    {m.label}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </Section>

      {/* — How we invest (bullets) ——————————————————————————— */}
      <Section tone="cloud">
        <SplitContent
          eyebrow="Strategy"
          title={<>How we invest.</>}
          bullets={strategy.bullets}
        >
          <p>
            The {strategy.name} is governed by the same framework that defines
            the platform: research-led conviction, independent risk oversight and
            transparent institutional reporting. It operates as a separate
            Delaware Limited Partnership with its own investment committee.
          </p>
          <p>
            We commit capital only where rigorous research, prudent structuring
            and active oversight align, on the same terms we ask of our partners,
            backed by significant general-partner commitment.
          </p>
        </SplitContent>
      </Section>

      {/* — Investment criteria ——————————————————————————————— */}
      <Section tone="paper">
        <Reveal>
          <SectionHeading
            eyebrow="Investment Criteria"
            title={<>What we look for.</>}
            intro="Disciplined, repeatable standards govern every commitment we make within this platform."
          />
        </Reveal>
        <div className="mt-14">
          <FeatureGrid columns={3} items={detail.criteria} />
        </div>
      </Section>

      {/* — Metrics band ——————————————————————————————————————— */}
      <section className="relative overflow-hidden bg-navy-950 py-20 text-paper md:py-24">
        <div className="absolute inset-0 bg-grid opacity-40" />
        <div className="shell relative">
          <Reveal>
            <p className="eyebrow text-gold-400">By the numbers</p>
            <h2 className="mt-5 max-w-2xl font-serif text-3xl font-light leading-tight md:text-4xl">
              Defining characteristics of the {strategy.name} platform.
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-px overflow-hidden rounded-sm border border-white/10 bg-white/10 sm:grid-cols-3">
            {strategy.metrics.map((m, i) => (
              <Reveal key={m.label} delay={i * 0.08} className="bg-navy-950 p-10">
                <p className="font-serif text-4xl font-light text-gilt md:text-5xl">
                  {m.value}
                </p>
                <p className="mt-4 text-sm uppercase tracking-[0.18em] text-paper/55">
                  {m.label}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* — FAQ ————————————————————————————————————————————————— */}
      <Section tone="paper">
        <Reveal>
          <SectionHeading
            eyebrow="Questions & Answers"
            title={<>Understanding the platform.</>}
          />
        </Reveal>
        <div className="mt-12">
          <FaqList items={detail.faq} />
        </div>
      </Section>

      {/* — Related strategies ————————————————————————————————— */}
      <Section tone="cloud">
        <Reveal>
          <SectionHeading
            eyebrow="Explore Further"
            title={<>Related strategies.</>}
          />
        </Reveal>
        <div className="mt-12 grid gap-px overflow-hidden rounded-sm border border-line bg-line md:grid-cols-3">
          {related.map((s, i) => (
            <Reveal key={s.slug} delay={i * 0.07} className="group relative bg-paper p-8">
              <Link
                href={`/strategies/${s.slug}`}
                className="absolute inset-0 z-10"
                aria-label={s.name}
              />
              <p className="eyebrow text-gold-600">{s.kicker}</p>
              <h3 className="mt-4 font-serif text-2xl font-light text-navy-950">
                {s.name}
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-slate-strong/80">
                {s.summary}
              </p>
              <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-navy-950 transition-colors group-hover:text-gold-600">
                Explore platform
                <span className="transition-transform duration-500 group-hover:translate-x-1">
                  →
                </span>
              </span>
            </Reveal>
          ))}
        </div>
      </Section>

      <CtaBand
        title={<>Explore the {strategy.name} platform with our team.</>}
        body="Connect with investor relations to discuss mandate fit, terms and the opportunity ahead."
        primary={{ href: "/contact", label: "Connect with us" }}
        secondary={{ href: "/strategies", label: "All strategies" }}
      />
    </>
  );
}
