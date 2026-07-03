import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { Section, SplitContent, CtaBand } from "@/components/sections/blocks";
import { SectionHeading } from "@/components/ui/primitives";
import { Reveal } from "@/components/ui/Reveal";
import { FIRM } from "@/lib/site";
import {
  RiskTypeGrid,
  DefenseLines,
  RiskMetrics,
} from "@/components/governance/RiskArchitecture";

export const metadata: Metadata = {
  title: "Risk Management",
  description:
    "The ALRION Pillar Capital risk framework, an architecture spanning market, credit, liquidity, operational, model and valuation risk, governed by a three-lines-of-defense model and independent oversight.",
};

export default function RiskPage() {
  return (
    <>
      <PageHero
        eyebrow="Governance · Risk Management"
        title={
          <>
            A risk architecture engineered for the
            <span className="text-gilt"> speed of modern markets.</span>
          </>
        }
        intro="Conviction is only responsible when it is measured. Our risk framework spans every dimension of exposure, enforced by an independent function and continuous surveillance."
        crumbs={[{ label: "Governance", href: "/governance" }, { label: "Risk Management" }]}
      />

      {/* — Philosophy ————————————————————————————————————————— */}
      <Section tone="paper">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-20">
          <Reveal className="lg:col-span-5">
            <SectionHeading
              eyebrow="Our Approach"
              title={<>Risk is measured by those who do not take it.</>}
            />
          </Reveal>
          <Reveal delay={0.1} className="lg:col-span-7">
            <div className="space-y-6 text-lg leading-relaxed text-slate-strong/85">
              <p>
                At {FIRM.name}, risk management is not a brake on conviction. It is
                the discipline that makes conviction defensible. The teams that take
                risk are deliberately separated from the teams that measure it,
                creating an architecture of independent challenge across the firm.
              </p>
              <p>
                Quantitative models monitor exposure, correlation and volatility
                continuously, while pre-committed limits, including a daily 95%
                Value-at-Risk discipline and a maximum 300% gross exposure ceiling
                on the liquid strategy, preserve capital through the cycle. Every
                model is independently validated before it governs capital.
              </p>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* — Risk-type architecture ————————————————————————————— */}
      <Section tone="cloud">
        <Reveal>
          <SectionHeading
            eyebrow="Risk Taxonomy"
            title={<>Six dimensions of risk, governed as one framework.</>}
            intro="We classify, measure and control risk across six interlocking domains, each with dedicated limits, models and oversight."
          />
        </Reveal>
        <div className="mt-14">
          <RiskTypeGrid />
        </div>
      </Section>

      {/* — Three lines of defense ————————————————————————————— */}
      <Section tone="navy">
        <Reveal>
          <SectionHeading
            light
            eyebrow="Three Lines of Defense"
            title={<>Accountability, independence and assurance.</>}
            intro="Our governance model distributes responsibility across three independent lines, so that risk is owned, challenged and assured by distinct functions."
          />
        </Reveal>
        <div className="mt-14">
          <DefenseLines />
        </div>
      </Section>

      {/* — Risk appetite —————————————————————————————————————— */}
      <Section tone="paper">
        <SplitContent
          eyebrow="Risk Appetite"
          title={<>Limits set before, not after, the trade.</>}
          bullets={[
            "Board-approved firm-wide risk appetite statement",
            "Pre-committed position, sector and factor limits",
            "Volatility targeting and drawdown thresholds",
            "Automatic escalation on limit breach",
          ]}
        >
          <p>
            Our risk appetite is defined and approved at board level before capital
            is deployed, translated into concrete limits that the investing desks
            operate within. These boundaries are systematic and pre-committed,
            removing discretion in the moments where discipline matters most.
          </p>
          <p>
            When a limit is approached or breached, escalation is automatic and
            routed to the independent risk function and governance committees,
            ensuring concerns are surfaced honestly and acted upon early.
          </p>
        </SplitContent>
      </Section>

      {/* — Monitoring & attribution —————————————————————————— */}
      <Section tone="cloud">
        <Reveal>
          <SectionHeading
            eyebrow="Monitoring & Attribution"
            title={<>Limits that are set, and enforced.</>}
            intro="Continuous monitoring and rigorous attribution let us understand not just how much risk we carry, but exactly where our returns come from."
          />
        </Reveal>
        <div className="mt-14">
          <RiskMetrics />
        </div>
      </Section>

      <CtaBand
        title={<>Risk discipline, made transparent.</>}
        body="Speak with our investor relations team to understand how Alrion governs the capital entrusted to it."
        primary={{ href: "/contact", label: "Connect with us" }}
        secondary={{ href: "/governance/transparency", label: "Our transparency" }}
      />
    </>
  );
}
