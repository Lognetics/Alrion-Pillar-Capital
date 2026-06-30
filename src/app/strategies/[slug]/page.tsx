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
        title: "Liquidity & depth",
        body: "We trade markets deep enough to enter and exit at scale without distorting price, preserving optionality through every regime.",
      },
      {
        title: "Signal robustness",
        body: "Every model must demonstrate out-of-sample resilience across multiple market cycles before it is allowed to size a position.",
      },
      {
        title: "Asymmetric payoff",
        body: "We prioritize positions where the structure of the trade offers materially more upside than downside.",
      },
      {
        title: "Frontier relevance",
        body: "Exposure concentrates in companies and themes at the leading edge of technology, where dislocation creates opportunity.",
      },
      {
        title: "Hedging integrity",
        body: "No core exposure is taken without a clear, cost-efficient path to hedge the risks we choose not to hold.",
      },
      {
        title: "Capacity discipline",
        body: "Strategies are capped at the capacity where alpha remains intact, rather than scaled to the limit of demand.",
      },
    ],
    faq: [
      {
        q: "How does the fund manage drawdown risk?",
        a: "Systematic hedging, pre-committed exposure limits and daily risk attribution work together to control volatility and cap drawdown before losses compound.",
      },
      {
        q: "What role do quantitative models play?",
        a: "AI-driven models generate and validate signals across equities, credit and derivatives, while a dedicated research desk applies judgment and oversight to every allocation.",
      },
      {
        q: "What liquidity does the strategy offer?",
        a: "The platform is built around a daily liquidity profile, with exposures sized to ensure positions can be unwound in an orderly manner.",
      },
      {
        q: "How is independence maintained?",
        a: "An oversight function separate from the investing team enforces limits, validates models and reports directly to governance.",
      },
    ],
  },
  "private-equity": {
    criteria: [
      {
        title: "Essential assets",
        body: "We target businesses providing critical infrastructure and services with durable, often inflation-linked demand.",
      },
      {
        title: "Operational upside",
        body: "Clear levers for value creation — efficiency, professionalization or modernization — must underpin every thesis.",
      },
      {
        title: "Aligned management",
        body: "We partner with capable teams whose incentives are structured to reward long-term value, not short-term extraction.",
      },
      {
        title: "Downside protection",
        body: "Tangible assets, contracted cash flows and conservative structures protect capital through economic cycles.",
      },
      {
        title: "ESG integration",
        body: "Environmental, social and governance factors are diligence criteria, not afterthoughts, across the ownership lifecycle.",
      },
      {
        title: "Credible exit paths",
        body: "We commit only where multiple realistic routes to realization exist at the outset of the investment.",
      },
    ],
    faq: [
      {
        q: "What is the typical hold period?",
        a: "We invest with a five-to-eight-year horizon, allowing operational improvements and capital programs to compound into durable value.",
      },
      {
        q: "Which sectors do you prioritize?",
        a: "Infrastructure, energy, transportation and utilities — the essential systems of the real economy that reward patient, operationally engaged ownership.",
      },
      {
        q: "How do you create value?",
        a: "Through governance uplift, operational rigor and modernization, partnering closely with management rather than relying on financial engineering.",
      },
      {
        q: "How is ESG handled?",
        a: "ESG factors are integrated from diligence through exit, measured and reported as part of our institutional accountability.",
      },
    ],
  },
  "venture-capital": {
    criteria: [
      {
        title: "Category-defining ambition",
        body: "We back founders building durable platforms, not features — companies with the potential to define an entire market.",
      },
      {
        title: "Technical defensibility",
        body: "Deep diligence by engineers and scientists confirms a genuine, hard-to-replicate technical edge.",
      },
      {
        title: "Frontier alignment",
        body: "Theses concentrate in AI, robotics, biotech, space, climate, cybersecurity and deep tech.",
      },
      {
        title: "Founder quality",
        body: "We invest in exceptional teams with the conviction, integrity and adaptability to navigate the unknown.",
      },
      {
        title: "Responsible scaling",
        body: "We favor companies that can scale responsibly, with a credible path to commercialization and impact.",
      },
      {
        title: "Network leverage",
        body: "We add the most value where our global commercialization network can meaningfully accelerate growth.",
      },
    ],
    faq: [
      {
        q: "At what stage do you invest?",
        a: "From the first institutional check at seed through later growth rounds, providing conviction capital across the company's lifecycle.",
      },
      {
        q: "What do you look for in founders?",
        a: "Technical depth, integrity and the resilience to build category-defining companies through inevitable uncertainty.",
      },
      {
        q: "How do you support portfolio companies?",
        a: "Through technical diligence, operating expertise, talent and access to a global commercialization network.",
      },
      {
        q: "Which technologies are in scope?",
        a: "Artificial intelligence, robotics, biotechnology, space, climate, cybersecurity and the broader deep-tech frontier.",
      },
    ],
  },
  "community-equity": {
    criteria: [
      {
        title: "Measurable impact",
        body: "Every investment must define clear, quantifiable social or economic outcomes from the outset.",
      },
      {
        title: "Inclusive access",
        body: "We channel capital to underserved founders and communities historically overlooked by traditional finance.",
      },
      {
        title: "Sustainable returns",
        body: "Impact and financial return reinforce one another — we reject the premise that one must be sacrificed for the other.",
      },
      {
        title: "Community alignment",
        body: "We prioritize projects led by, and accountable to, the communities they are designed to serve.",
      },
      {
        title: "Local economic depth",
        body: "We favor enterprises that strengthen local economies, employment and resilience over time.",
      },
      {
        title: "Transparent measurement",
        body: "Outcomes are tracked against defined metrics and disclosed through annual, audited impact reporting.",
      },
    ],
    faq: [
      {
        q: "How is impact measured?",
        a: "Against defined social and economic metrics established at investment, reported transparently through annual, audited impact disclosures.",
      },
      {
        q: "Does impact come at the cost of returns?",
        a: "No. The fund is built on the conviction that financial prosperity and social progress can align, seeking sustainable returns alongside outcomes.",
      },
      {
        q: "Who does the fund serve?",
        a: "Underserved communities and inclusive enterprises — including founders historically excluded from access to growth capital.",
      },
      {
        q: "What kinds of projects do you back?",
        a: "Inclusive enterprises, local economic development and community-led projects with measurable social value.",
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
            Our approach to {strategy.name.toLowerCase()} is governed by the same
            disciplined architecture that defines the firm — thesis-led
            conviction, AI-driven risk management and transparent institutional
            reporting.
          </p>
          <p>
            We commit capital only where rigorous research, prudent structuring
            and active oversight align, ensuring each position advances both
            durable returns and our broader frontier mandate.
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
