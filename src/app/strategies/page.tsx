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
    "Four autonomous strategies, each a separate Delaware Limited Partnership, unified by one rigorous framework of research, risk discipline and fiduciary governance.",
};

export default function StrategiesPage() {
  return (
    <>
      <PageHero
        eyebrow="Investment Strategies"
        title={
          <>
            Four autonomous strategies,
            <span className="text-gilt"> one rigorous framework.</span>
          </>
        }
        intro="Alrion Pillar Capital is a platform, not a product. Each strategy is a separate Delaware Limited Partnership with its own investment committee and risk framework, unified by a single standard of institutional discipline and fiduciary care."
        crumbs={[{ label: "Strategies" }]}
      />

      {/* — Overview ————————————————————————————————————————— */}
      <Section tone="paper">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-20">
          <Reveal className="lg:col-span-5">
            <SectionHeading
              eyebrow="Overview"
              title={<>Independent by design, aligned by discipline.</>}
            />
          </Reveal>
          <Reveal delay={0.1} className="lg:col-span-7">
            <div className="space-y-6 text-lg leading-relaxed text-slate-strong/85">
              <p>
                The platform comprises four independent Limited Partnerships:
                the Hedge Fund LP, the Private Equity LP, the Venture Capital LP
                and the Community Equity Fund LP. Each pursues a distinct mandate,
                and each stands on its own governance, so the strengths of one
                strategy are never a hidden liability of another.
              </p>
              <p>
                What the strategies share is a framework. Conviction is earned
                through research and sized to the evidence. Risk is governed
                independently. Interests are aligned through significant GP
                commitments across every fund, on the same terms we ask of our
                partners.
              </p>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* — Strategy grid (dark navy cards) ——————————————————— */}
      <section className="relative overflow-hidden bg-navy-950 py-20 text-paper md:py-28">
        <div className="absolute inset-0 bg-grid opacity-40" />
        <div className="absolute left-1/2 top-0 h-px w-3/4 -translate-x-1/2 bg-gradient-to-r from-transparent via-gold-500/40 to-transparent" />
        <div className="shell relative">
          <Reveal>
            <SectionHeading
              light
              align="center"
              eyebrow="The Platform"
              title={<>Four strategies. Four Delaware Limited Partnerships.</>}
              intro="Explore each strategy to understand its mandate, its approach and the criteria that govern how capital is committed."
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
                  Explore strategy
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
            title={<>Conviction earned, never assumed.</>}
            bullets={[
              "Research-led theses tested by specialists",
              "Conviction sized to the strength of the evidence",
              "Independent governance over every commitment",
              "Significant GP commitments on the same terms as our partners",
            ]}
          >
            <p>
              We invest where research supports durable conviction. Every thesis
              is stress-tested, sized to the quality of the underlying evidence
              and monitored continuously, so capital follows insight rather than
              sentiment.
            </p>
            <p>
              Alignment is structural. We hold significant general-partner
              commitments across every fund, investing where we ask our partners
              to invest, and at the same terms.
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
            title={<>Four mandates, each governed on its own terms.</>}
            bullets={[
              "Liquid macro exposure through the Hedge Fund LP",
              "Infrastructure growth capital through the Private Equity LP",
              "Frontier venture capital from Seed to Series A",
              "Catalytic community investment in underserved New York markets",
            ]}
          >
            <p>
              Each strategy allocates within its own mandate, structured and
              priced by its own investment committee. Liquidity is matched
              deliberately to the opportunity, from the daily profile of the
              Hedge Fund LP to the patient horizons of private markets.
            </p>
            <p>
              Positions are sized to the resilience of the thesis, concentrating
              where the evidence is strongest and structured to protect capital
              through changing conditions.
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
              title={<>Constructed as systems, not collections.</>}
              intro="Within each strategy, portfolios are built as systems, balancing conviction, correlation and liquidity so that strength in one position never becomes hidden fragility across the whole."
            />
          </Reveal>
          <div className="mt-14">
            <FeatureGrid
              columns={3}
              items={[
                {
                  title: "Conviction-weighted sizing",
                  body: "Positions are scaled to the quality of the evidence and the asymmetry of return, with limits that cap single-name and thematic concentration.",
                },
                {
                  title: "Correlation discipline",
                  body: "In liquid strategies, quantitative models map cross-asset correlation, so diversification holds when conditions are most stressed.",
                },
                {
                  title: "Liquidity matching",
                  body: "Liquidity profiles are matched to mandate and horizon, so capital is available when it is needed and patient where it must be.",
                },
                {
                  title: "Scenario testing",
                  body: "Portfolios are tested against historical and hypothetical shocks to understand drawdown potential before capital is committed.",
                },
                {
                  title: "Exposure discipline",
                  body: "In the Hedge Fund LP, gross exposure is held to a maximum of 300%, a hard ceiling enforced independently of the desk.",
                },
                {
                  title: "Deliberate rebalancing",
                  body: "As theses mature and risk migrates, positions are recalibrated through a disciplined, evidence-driven cadence.",
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
              title={<>Research before capital.</>}
              intro="Across the platform, quantitative modelling is integrated with fundamental analysis, translating a mandate into an investable thesis before any commitment is made."
            />
          </Reveal>
          <div className="mt-14 grid gap-px overflow-hidden rounded-sm border border-white/10 bg-white/10 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "Fundamental analysis",
                body: "Specialists assess the thesis, the counterparties and the realistic path to durable value within each mandate.",
              },
              {
                title: "Quantitative modelling",
                body: "In the Hedge Fund LP, models generate and validate cross-asset relative-value signals across multiple timeframes.",
              },
              {
                title: "Thematic mapping",
                body: "We chart the focus areas each strategy invests in, from frontier technology to mission-critical infrastructure.",
              },
              {
                title: "Independent validation",
                body: "Each strategy's investment committee challenges every thesis before it informs an allocation decision.",
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
            title={<>Risk governed independently of the investing teams.</>}
            bullets={[
              "Daily 95% Value-at-Risk monitoring on the Hedge Fund LP",
              "A maximum of 300% gross exposure, enforced independently",
              "Pre-committed position and concentration limits",
              "Oversight separate from the teams that take the risk",
            ]}
          >
            <p>
              Risk discipline is the foundation of every strategy. In the Hedge
              Fund LP, exposure is monitored through daily 95% Value-at-Risk and
              held to a maximum of 300% gross exposure, with limits set in
              advance and enforced independently.
            </p>
            <p>
              Each strategy operates its own risk framework. An oversight
              function separate from the investing team validates models,
              enforces limits and reports directly to governance, preserving
              capital with institutional discipline.
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
              intro="Every commitment moves through the same rigorous lifecycle, from sourcing and diligence to active oversight and deliberate realization."
            />
          </Reveal>
          <div className="mt-14">
            <FeatureGrid
              columns={4}
              items={[
                {
                  title: "Thesis & sourcing",
                  body: "Proprietary networks and thematic research surface opportunities aligned to each strategy's mandate.",
                },
                {
                  title: "Diligence & structuring",
                  body: "Technical, commercial and financial diligence inform the structure and pricing of each commitment.",
                },
                {
                  title: "Active oversight",
                  body: "Continuous monitoring, including daily risk on liquid strategies, and independent valuation on illiquid positions.",
                },
                {
                  title: "Realization",
                  body: "Deliberate exit planning returns capital to partners with full transparency and documented rationale.",
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
            title={<>Measured net of fees, adjusted for risk.</>}
            bullets={[
              "Returns evaluated net of fees and risk",
              "Attribution that isolates the true source of return",
              "Independent valuation on illiquid positions",
              "Benchmarks aligned to each strategy's mandate and horizon",
            ]}
          >
            <p>
              We hold each strategy to an institutional standard of performance,
              measured net of fees, adjusted for risk and attributed to its true
              source. Outperformance matters only if it is repeatable.
            </p>
            <p>
              For illiquid positions, independent valuation committees and
              comprehensive third-party administration underpin every figure we
              report, so performance rests on verified numbers rather than
              self-assessment.
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
              intro="Long-term institutional capital deserves clarity. Reporting is timely, granular and consistent, built to the standard our governance demands."
            />
          </Reveal>
          <div className="mt-14 grid gap-px overflow-hidden rounded-sm border border-white/10 bg-white/10 md:grid-cols-3">
            {[
              {
                title: "Reporting cadence",
                body: "Monthly reporting for liquid strategies and quarterly deep-dive reviews for private markets, with real-time access for institutional partners.",
              },
              {
                title: "Independent oversight",
                body: "Annual audits conducted by an independent auditor, comprehensive third-party administration and independent valuation committees on illiquid positions.",
              },
              {
                title: "Governance assurance",
                body: "Each strategy operates as a separate Delaware Limited Partnership with its own investment committee, giving partners confidence in every figure.",
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
        title={<>Explore the platform with our team.</>}
        body="Speak with our investor relations team to explore how Alrion Pillar Capital's strategies align with your mandate."
        primary={{ href: "/contact", label: "Connect with us" }}
        secondary={{ href: "/about", label: "About the firm" }}
      />
    </>
  );
}
