import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { Section, SplitContent, FaqList, CtaBand } from "@/components/sections/blocks";
import { SectionHeading } from "@/components/ui/primitives";
import { Reveal } from "@/components/ui/Reveal";
import { Timeline } from "@/components/investors/Timeline";
import { PositioningTable } from "@/components/investors/PositioningTable";
import { LIABILITY_FRAMEWORK, PENSION_POSITIONING } from "@/lib/investors";

export const metadata: Metadata = {
  title: "Pension Funds",
  description:
    "ALRION Pillar Capital builds liability-aware portfolios for public and corporate pension funds — capital preservation, inflation-aware real assets and steady compounding to meet long-dated obligations.",
};

export default function PensionFundsPage() {
  return (
    <>
      <PageHero
        eyebrow="For Pension Funds"
        title={
          <>
            Built around your
            <span className="text-gilt"> liabilities,</span> not a benchmark.
          </>
        }
        intro="Public and corporate retirement systems are not chasing the highest number on a chart — they are funding obligations that stretch across decades. We construct portfolios that begin with those liabilities and compound toward them with discipline."
        crumbs={[{ label: "Investor Center", href: "/investors" }, { label: "Pension Funds" }]}
      />

      {/* Opening — the duration problem */}
      <Section tone="paper">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-20">
          <Reveal className="lg:col-span-5">
            <SectionHeading
              eyebrow="The long-duration challenge"
              title={<>Funding promises measured in decades.</>}
            />
          </Reveal>
          <Reveal delay={0.1} className="lg:col-span-7">
            <div className="space-y-6 text-lg leading-relaxed text-slate-strong/85">
              <p>
                A pension fund's first duty is to be there when its members
                retire — through every market cycle in between. That makes funded
                status, not peak return, the measure that matters. Volatility that
                impairs the path is as much a risk as returns that fall short.
              </p>
              <p>
                We approach the mandate the way an actuary does: from the shape of
                the obligations outward. Capital preservation, inflation defense
                and steady compounding are not constraints we tolerate — they are
                the design brief.
              </p>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* Liability-aware framework */}
      <Section tone="navy">
        <Reveal>
          <SectionHeading
            light
            eyebrow="A liability-aware framework"
            title={<>Four principles that defend funded status.</>}
            intro="Allocation begins with the obligations you must fund — then builds outward toward real, durable return."
          />
        </Reveal>
        <div className="mt-16">
          <Timeline steps={LIABILITY_FRAMEWORK} light />
        </div>
      </Section>

      {/* Risk/return positioning */}
      <Section tone="cloud">
        <Reveal>
          <SectionHeading
            eyebrow="Risk / return positioning"
            title={<>How each platform earns its place in the portfolio.</>}
            intro="A right-sized blend of preservation, inflation defense and a measured frontier sleeve — each role deliberate."
          />
        </Reveal>
        <div className="mt-14">
          <PositioningTable rows={PENSION_POSITIONING} />
        </div>
        <Reveal delay={0.1}>
          <p className="mt-6 text-xs text-mist-500">
            Illustrative framework. Actual allocation, sizing and risk profile are
            set in consultation with your investment staff and actuaries.
          </p>
        </Reveal>
      </Section>

      {/* Inflation-aware real assets */}
      <Section tone="paper">
        <SplitContent
          reverse
          eyebrow="Inflation-aware real assets"
          title={<>Real assets for real liabilities.</>}
          bullets={[
            "Infrastructure, energy and utilities cash flows",
            "Frequently inflation-linked, contracted revenue",
            "Long holds matched to long-dated obligations",
            "ESG integration across the ownership lifecycle",
          ]}
        >
          <p>
            Many pension liabilities are, in substance, indexed to inflation.
            Defending them requires assets whose cash flows move in the same
            direction. Our private-equity platform invests in the real economy —
            infrastructure, energy, transportation and utilities — where revenue
            is often contracted and inflation-sensitive.
          </p>
          <p>
            These are multi-year holds by design. Patient capital and operational
            value creation compound returns deliberately, smoothing the
            contribution path and reducing reliance on episodic, timing-dependent
            performance.
          </p>
        </SplitContent>
      </Section>

      {/* FAQ */}
      <Section tone="cloud">
        <Reveal>
          <SectionHeading eyebrow="Pension FAQ" title={<>What trustees ask us.</>} />
        </Reveal>
        <div className="mt-12">
          <FaqList
            items={[
              {
                q: "How do you protect funded status in a drawdown?",
                a: "Our liquid hedge-fund platform is oriented to capital preservation through systematic hedging, volatility control and daily drawdown management — sized so a market dislocation does not impair your path to fully funded.",
              },
              {
                q: "How does the portfolio defend against inflation?",
                a: "Through real assets. Our private-equity platform holds infrastructure, energy and utilities exposure with frequently inflation-linked, contracted cash flows that track long-dated, inflation-sensitive liabilities.",
              },
              {
                q: "Can you work alongside our actuaries and investment staff?",
                a: "Yes. We construct portfolios against the shape of your liabilities — duration, indexation and pacing — in direct consultation with your internal staff and actuarial advisers rather than against a generic benchmark.",
              },
              {
                q: "Is a frontier-technology allocation appropriate for a pension?",
                a: "Sized appropriately, yes. A small, deliberate sleeve of frontier innovation contributes long-horizon real return without dominating risk, while preservation and real-asset allocations carry the funded-status burden.",
              },
            ]}
          />
        </div>
      </Section>

      <CtaBand
        title={<>Model a liability-aware allocation with our team.</>}
        body="We will work with your investment staff and actuaries to frame an allocation around your obligations and funded-status objectives."
        primary={{ href: "/contact", label: "Speak with investor relations" }}
        secondary={{ href: "/strategies", label: "Explore our strategies" }}
      />
    </>
  );
}
