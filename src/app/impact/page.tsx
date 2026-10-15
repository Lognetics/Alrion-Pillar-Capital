import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { Section, SplitContent, CtaBand } from "@/components/sections/blocks";
import { SectionHeading } from "@/components/ui/primitives";
import { Reveal } from "@/components/ui/Reveal";
import { FIRM, IMPACT_INDICATORS } from "@/lib/site";

export const metadata: Metadata = {
  title: "Impact",
  description:
    "Impact Through Investment. The Community Equity Fund LP proves that underserved markets in New York represent some of the most compelling risk-adjusted opportunities, seeded by carried interest from the institutional strategies.",
};

/* Anchor ids for the three indicators, so navigation links resolve. */
const INDICATOR_ANCHORS = ["wealth-equity", "employment-quality", "capital-multiplier"];

export default function ImpactPage() {
  return (
    <>
      <PageHero
        eyebrow="Impact Through Investment"
        title={
          <>
            Underserved markets are a
            <span className="text-gilt"> compelling opportunity.</span>
          </>
        }
        intro="The Community Equity Fund LP is built on a single conviction: that underserved markets in New York represent some of the most compelling risk-adjusted opportunities available, and that investment, not charity, is the durable way to realize them."
        crumbs={[{ label: "Impact" }]}
      />

      {/* Thesis */}
      <Section tone="paper">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-20">
          <Reveal className="lg:col-span-5">
            <SectionHeading
              eyebrow="The Thesis"
              title={<>A model, not a gesture.</>}
            />
          </Reveal>
          <Reveal delay={0.1} className="lg:col-span-7">
            <div className="space-y-6 text-lg leading-relaxed text-slate-strong/85">
              <p>
                Impact at {FIRM.name} is expressed the same way our conviction is,
                through investment. The Community Equity Fund LP focuses on
                underserved markets in New York, concentrating capital where it can compound both return
                and opportunity.
              </p>
              <p>
                The fund is seeded by carried interest generated across our
                institutional strategies. As those strategies perform, they fund the
                platform's capacity to invest in underserved markets, aligning
                impact with the discipline of the wider firm rather than treating it
                as a cost.
              </p>
              <p>
                We measure success in outcomes that endure: wealth built, quality
                jobs created and third-party capital drawn into a community after
                our first investment.
              </p>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* How the model works */}
      <Section tone="navy">
        <SplitContent
          eyebrow="The Model"
          title={<>Seeded by performance, focused on community.</>}
          bullets={[
            "Focused on underserved markets in New York",
            "Seeded by carried interest from the institutional strategies",
            "Structured as a separate Delaware Limited Partnership",
          ]}
        >
          <p className="text-paper/80">
            The Community Equity Fund LP is one of four autonomous strategies on the
            platform. It carries its own investment committee and risk framework, and
            it is held to the same governance standard as every other Limited
            Partnership.
          </p>
          <p className="text-paper/80">
            What distinguishes it is its source of capital and its intent. Funded by
            the carried interest our institutional strategies generate, it directs
            disciplined, return-seeking capital toward communities that conventional
            allocators overlook.
          </p>
        </SplitContent>
      </Section>

      {/* Indicators */}
      <Section tone="paper">
        <Reveal>
          <SectionHeading
            eyebrow="What We Measure"
            title={<>Three indicators of real impact.</>}
            intro="We measure impact qualitatively, through the outcomes that signal durable change in a community, not headline figures we cannot substantiate."
          />
        </Reveal>
        <div className="mt-16 space-y-px overflow-hidden rounded-sm border border-line bg-line">
          {IMPACT_INDICATORS.map((it, i) => (
            <Reveal key={it.title} delay={i * 0.06}>
              <div
                id={INDICATOR_ANCHORS[i]}
                className="scroll-mt-28 grid gap-6 bg-paper p-8 md:grid-cols-12 md:items-baseline md:p-10"
              >
                <div className="md:col-span-4">
                  <span className="font-serif text-4xl font-light text-navy-950">0{i + 1}</span>
                  <h3 className="mt-4 text-xl font-semibold text-navy-950">{it.title}</h3>
                </div>
                <p className="text-[0.95rem] leading-relaxed text-slate-strong/80 md:col-span-8">
                  {it.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <CtaBand
        title={<>Invest where opportunity is overlooked.</>}
        body="Explore the Community Equity Fund LP, or speak with our team about impact through investment."
        primary={{ href: "/strategies/community-equity", label: "Community Equity Fund LP" }}
        secondary={{ href: "/contact", label: "Connect with us" }}
      />
    </>
  );
}
