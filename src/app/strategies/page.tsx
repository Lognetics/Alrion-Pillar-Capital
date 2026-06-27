import Link from "next/link";
import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import {
  Section,
  SplitContent,
  FeatureGrid,
  CtaBand,
} from "@/components/sections/blocks";
import { SectionHeading } from "@/components/ui/primitives";
import { Reveal } from "@/components/ui/Reveal";
import { STRATEGIES } from "@/lib/site";

export const metadata: Metadata = {
  title: "Investment Strategies",
  description:
    "Four disciplined investment platforms — public markets, private equity, venture and inclusive impact — unified by research-led conviction and AI-driven risk management.",
};

export default function StrategiesPage() {
  return (
    <>
      <PageHero
        eyebrow="Investment Strategies"
        title={
          <>
            One philosophy expressed across
            <span className="text-gilt"> four capital platforms.</span>
          </>
        }
        intro="ALRION Pillar Capital allocates across the full technology cycle — from liquid public markets to private innovation and inclusive impact — guided by quantitative research, disciplined risk management and transparent institutional reporting."
        crumbs={[{ label: "Strategies" }]}
      />

      {/* — Overview ————————————————————————————————————————— */}
      <Section tone="paper">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-20">
          <Reveal className="lg:col-span-5">
            <SectionHeading
              eyebrow="Overview"
              title={<>Capital engineered for the frontier.</>}
            />
          </Reveal>
          <Reveal delay={0.1} className="lg:col-span-7">
            <div className="space-y-6 text-lg leading-relaxed text-slate-strong/85">
              <p>
                Our investment program is built on a single conviction: the
                technologies redefining the global economy demand capital that is
                equally rigorous, adaptive and patient. We pair a dedicated
                research desk of engineers, scientists and analysts with
                AI-driven quantitative models to translate frontier science into
                investable theses long before they reach the mainstream.
              </p>
              <p>
                Each platform pursues a distinct mandate, yet all share the same
                disciplined architecture — thesis-led sourcing, independent risk
                oversight and impact measured alongside returns. The result is a
                portfolio designed to compound value across market regimes while
                advancing measurable social and environmental outcomes.
              </p>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* — Platform grid (dark navy cards) ——————————————————— */}
      <section className="relative overflow-hidden bg-navy-950 py-20 text-paper md:py-28">
        <div className="absolute inset-0 bg-grid opacity-40" />
        <div className="absolute left-1/2 top-0 h-px w-3/4 -translate-x-1/2 bg-gradient-to-r from-transparent via-gold-500/40 to-transparent" />
        <div className="shell relative">
          <Reveal>
            <SectionHeading
              light
              align="center"
              eyebrow="The Investment Ecosystem"
              title={<>Four platforms. One disciplined philosophy.</>}
              intro="Explore each platform to understand its mandate, approach and the criteria that govern how we deploy capital."
            />
          </Reveal>

          <div className="mt-16 grid gap-px overflow-hidden rounded-sm border border-white/10 bg-white/10 lg:grid-cols-2">
            {STRATEGIES.map((s, i) => (
              <Reveal
                key={s.slug}
                delay={i * 0.08}
                className="group relative bg-navy-950 p-8 transition-colors duration-500 hover:bg-navy-900 md:p-10"
              >
                <Link
                  href={`/strategies/${s.slug}`}
                  className="absolute inset-0 z-10"
                  aria-label={s.name}
                />
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="eyebrow text-gold-400">{s.kicker}</p>
                    <h3 className="mt-4 font-serif text-3xl font-light text-paper">
                      {s.name}
                    </h3>
                  </div>
                  <span className="font-serif text-5xl font-light text-white/10 transition-colors duration-500 group-hover:text-gold-500/40">
                    0{i + 1}
                  </span>
                </div>
                <p className="mt-5 max-w-md text-pretty leading-relaxed text-paper/65">
                  {s.summary}
                </p>
                <div className="mt-8 flex flex-wrap gap-x-8 gap-y-3 border-t border-white/10 pt-6">
                  {s.metrics.map((m) => (
                    <div key={m.label}>
                      <p className="text-sm font-semibold text-gold-300">
                        {m.value}
                      </p>
                      <p className="text-xs text-paper/45">{m.label}</p>
                    </div>
                  ))}
                </div>
                <span className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-paper transition-colors group-hover:text-gold-300">
                  Explore platform
                  <span className="transition-transform duration-500 group-hover:translate-x-1">
                    →
                  </span>
                </span>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* — #philosophy ——————————————————————————————————————— */}
      <Section tone="paper" className="scroll-mt-24">
        <div id="philosophy" className="-mt-20 pt-20">
          <SplitContent
            eyebrow="Investment Philosophy"
            title={<>Research-led conviction, expressed with discipline.</>}
            bullets={[
              "Thematic research that anticipates frontier markets",
              "Conviction sized to the strength of the evidence",
              "Impact and returns treated as reinforcing, never opposed",
              "Independent governance over every commitment",
            ]}
          >
            <p>
              We invest where rigorous science meets durable demand. Our
              philosophy rejects the false trade-off between performance and
              progress: we build portfolios in which financial prosperity and
              measurable social outcomes compound together.
            </p>
            <p>
              Conviction is earned, not assumed. Every thesis is stress-tested by
              specialists, sized to the quality of the underlying evidence and
              monitored continuously — so capital follows insight rather than
              sentiment.
            </p>
          </SplitContent>
        </div>
      </Section>

      {/* — #allocation ——————————————————————————————————————— */}
      <Section tone="cloud" className="scroll-mt-24">
        <div id="allocation" className="-mt-20 pt-20">
          <SplitContent
            reverse
            eyebrow="Capital Allocation"
            title={<>Allocating across the full technology cycle.</>}
            bullets={[
              "Top-down regime analysis informs platform weighting",
              "Bottom-up conviction drives position sizing",
              "Liquidity matched deliberately to opportunity",
              "Dynamic rebalancing as theses mature",
            ]}
          >
            <p>
              Capital is allocated through a unified framework that balances
              liquid public exposure against patient private innovation. AI-driven
              models surface relative value across platforms, while our investment
              committee governs how conviction translates into commitment.
            </p>
            <p>
              We size positions to the asymmetry of the opportunity and the
              resilience of the thesis — concentrating where the evidence is
              strongest and diversifying to protect capital through changing
              market regimes.
            </p>
          </SplitContent>
        </div>
      </Section>

      {/* — #construction ————————————————————————————————————— */}
      <Section tone="paper" className="scroll-mt-24">
        <div id="construction" className="-mt-20 pt-20">
          <Reveal>
            <SectionHeading
              eyebrow="Portfolio Construction"
              title={<>Engineering resilience into every portfolio.</>}
              intro="We construct portfolios as systems — balancing conviction, correlation and liquidity so that strength in one position never becomes hidden fragility across the whole."
            />
          </Reveal>
          <div className="mt-14">
            <FeatureGrid
              columns={3}
              items={[
                {
                  title: "Conviction-weighted sizing",
                  body: "Positions are scaled to the quality of the evidence and the asymmetry of return, with hard limits that cap single-name and thematic concentration.",
                },
                {
                  title: "Correlation discipline",
                  body: "Quantitative models map cross-asset correlation in real time, ensuring diversification holds when markets are most stressed.",
                },
                {
                  title: "Liquidity laddering",
                  body: "Liquidity profiles are matched to mandate and horizon, so capital is available when it is needed and patient where it must be.",
                },
                {
                  title: "Scenario stress-testing",
                  body: "Every portfolio is tested against historical and synthetic shocks to quantify drawdown potential before capital is committed.",
                },
                {
                  title: "Thematic balance",
                  body: "Exposure is spread deliberately across frontier themes to avoid over-reliance on any single technology cycle.",
                },
                {
                  title: "Continuous rebalancing",
                  body: "As theses mature and risk migrates, positions are recalibrated through a disciplined, evidence-driven rebalancing cadence.",
                },
              ]}
            />
          </div>
        </div>
      </Section>

      {/* — #research ————————————————————————————————————————— */}
      <Section tone="navy" className="scroll-mt-24">
        <div id="research" className="-mt-20 pt-20">
          <Reveal>
            <SectionHeading
              light
              eyebrow="Research Methodology"
              title={<>Science before capital.</>}
              intro="Our research desk pairs deep technical expertise with proprietary data science, translating frontier breakthroughs into investable theses with measurable conviction."
            />
          </Reveal>
          <div className="mt-14 grid gap-px overflow-hidden rounded-sm border border-white/10 bg-white/10 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "Primary technical diligence",
                body: "Engineers and scientists evaluate underlying technology, defensibility and the realistic path to industrial scale.",
              },
              {
                title: "Quantitative signal generation",
                body: "Machine-learning models distill vast market and alternative datasets into structured, repeatable signals.",
              },
              {
                title: "Thematic mapping",
                body: "We chart how frontier technologies converge, identifying value chains before they become consensus.",
              },
              {
                title: "Independent validation",
                body: "External experts and adversarial review challenge every thesis before it informs an allocation decision.",
              },
            ].map((it, i) => (
              <Reveal
                key={it.title}
                delay={(i % 4) * 0.07}
                className="bg-navy-950 p-8"
              >
                <span className="font-serif text-2xl text-gold-400">
                  0{i + 1}
                </span>
                <h3 className="mt-5 text-lg font-semibold text-paper">
                  {it.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-paper/65">
                  {it.body}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      {/* — #risk —————————————————————————————————————————————— */}
      <Section tone="paper" className="scroll-mt-24">
        <div id="risk" className="-mt-20 pt-20">
          <SplitContent
            eyebrow="Risk Framework"
            title={<>Risk managed at the speed of modern markets.</>}
            bullets={[
              "Daily risk attribution across every platform",
              "Systematic hedging and volatility control",
              "Pre-committed drawdown and exposure limits",
              "Independent oversight separate from investing teams",
            ]}
          >
            <p>
              Risk management is not a constraint on our strategy — it is the
              foundation of it. Proprietary quantitative models monitor exposure,
              correlation and volatility continuously, surfacing emerging risk
              before it becomes loss.
            </p>
            <p>
              An independent oversight function, separate from the investing
              teams, enforces position limits, validates models and reports
              directly to governance — preserving capital through the cycle with
              institutional discipline.
            </p>
          </SplitContent>
        </div>
      </Section>

      {/* — #lifecycle ———————————————————————————————————————— */}
      <Section tone="cloud" className="scroll-mt-24">
        <div id="lifecycle" className="-mt-20 pt-20">
          <Reveal>
            <SectionHeading
              eyebrow="Investment Lifecycle"
              title={<>A disciplined path from thesis to realization.</>}
              intro="Every commitment moves through the same rigorous lifecycle — from sourcing and diligence to active ownership and deliberate exit."
            />
          </Reveal>
          <div className="mt-14">
            <FeatureGrid
              columns={4}
              items={[
                {
                  title: "Thesis & sourcing",
                  body: "Thematic research and proprietary networks surface opportunities aligned to our highest-conviction frontier themes.",
                },
                {
                  title: "Diligence & structuring",
                  body: "Technical, commercial, financial and ESG diligence inform the structure and pricing of each commitment.",
                },
                {
                  title: "Active ownership",
                  body: "Operating expertise, governance and continuous monitoring drive value creation throughout the holding period.",
                },
                {
                  title: "Exit & realization",
                  body: "Deliberate exit planning maximizes realized value and returns capital to partners with full transparency.",
                },
              ]}
            />
          </div>
        </div>
      </Section>

      {/* — #performance —————————————————————————————————————— */}
      <Section tone="paper" className="scroll-mt-24">
        <div id="performance" className="-mt-20 pt-20">
          <SplitContent
            reverse
            eyebrow="Performance Framework"
            title={<>Measuring what compounds, not what flatters.</>}
            bullets={[
              "Returns evaluated net of fees and risk",
              "Attribution that isolates genuine alpha",
              "Impact outcomes measured alongside performance",
              "Benchmarks aligned to mandate and horizon",
            ]}
          >
            <p>
              We hold ourselves to an institutional standard of performance —
              measured net of fees, adjusted for risk and attributed to its true
              source. Outperformance only matters if it is repeatable, and our
              framework is built to distinguish skill from chance.
            </p>
            <p>
              Performance is never assessed in isolation from impact. We track
              measurable social and environmental outcomes alongside financial
              return, reporting both with the same rigor to our partners.
            </p>
          </SplitContent>
        </div>
      </Section>

      {/* — #reporting ———————————————————————————————————————— */}
      <Section tone="ink" className="scroll-mt-24">
        <div id="reporting" className="-mt-20 pt-20">
          <Reveal>
            <SectionHeading
              light
              eyebrow="Institutional Reporting"
              title={<>Transparency our partners can rely on.</>}
              intro="Long-term institutional capital deserves clarity. Our reporting is timely, granular and consistent — built to the standard our partners expect and our governance demands."
            />
          </Reveal>
          <div className="mt-14 grid gap-px overflow-hidden rounded-sm border border-white/10 bg-white/10 md:grid-cols-3">
            {[
              {
                title: "Portfolio transparency",
                body: "Detailed exposure, attribution and risk reporting delivered on a consistent institutional cadence.",
              },
              {
                title: "Impact accountability",
                body: "Annual, audited impact metrics aligned to the UN Sustainable Development Goals.",
              },
              {
                title: "Governance assurance",
                body: "Independent oversight, robust compliance and clear escalation give partners confidence in every figure.",
              },
            ].map((it, i) => (
              <Reveal key={it.title} delay={i * 0.07} className="bg-ink p-8">
                <span className="font-serif text-2xl text-gold-400">
                  0{i + 1}
                </span>
                <h3 className="mt-5 text-lg font-semibold text-paper">
                  {it.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-paper/65">
                  {it.body}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      <CtaBand
        title={<>Partner with capital built for the frontier.</>}
        body="Speak with our investor relations team to explore how ALRION Pillar Capital's platforms align with your mandate."
        primary={{ href: "/contact", label: "Connect with us" }}
        secondary={{ href: "/about", label: "About the firm" }}
      />
    </>
  );
}
