import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { Section, FeatureGrid, FaqList, CtaBand } from "@/components/sections/blocks";
import { SectionHeading } from "@/components/ui/primitives";
import { Reveal } from "@/components/ui/Reveal";
import { Counter } from "@/components/ui/Counter";
import { Timeline } from "@/components/investors/Timeline";
import { IMPACT_RETURNS, ENDOWMENT_MODEL } from "@/lib/investors";
import { IMPACT_STATS } from "@/lib/site";

export const metadata: Metadata = {
  title: "Foundations & Endowments",
  description:
    "ALRION Pillar Capital serves mission-driven foundations and endowments — mission-aligned impact investing, perpetual-horizon construction, spending-policy support and ESG integration with competitive returns.",
};

export default function FoundationsPage() {
  return (
    <>
      <PageHero
        eyebrow="For Foundations & Endowments"
        title={
          <>
            Mission and return,
            <span className="text-gilt"> without the trade-off.</span>
          </>
        }
        intro="Foundations and endowments steward capital that is meant to last forever and do good along the way. We reject the idea that those goals compete — and build portfolios where competitive returns and measurable impact reinforce one another."
        crumbs={[{ label: "Investor Center", href: "/investors" }, { label: "Foundations & Endowments" }]}
      />

      {/* Impact-with-returns framing — counters */}
      <Section tone="navy">
        <Reveal>
          <SectionHeading
            light
            align="center"
            eyebrow="Impact with returns"
            title={<>Capital that performs while it progresses.</>}
            intro="Our impact platforms are measured with the same rigor as our return platforms — and reported with the same transparency."
          />
        </Reveal>
        <div className="mt-14 grid gap-px overflow-hidden rounded-sm border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
          {IMPACT_STATS.map((s, i) => (
            <Reveal key={s.label} delay={(i % 4) * 0.06} className="bg-navy-950 p-8">
              <div className="font-serif text-4xl font-light text-gilt">
                <Counter value={s.value} prefix={s.prefix} suffix={s.suffix} decimals={s.decimals} />
              </div>
              <div className="mt-4 text-sm font-semibold text-paper">{s.label}</div>
              <div className="mt-1 text-xs leading-relaxed text-paper/55">{s.sub}</div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* The no-trade-off thesis */}
      <Section tone="paper">
        <Reveal>
          <SectionHeading
            eyebrow="The thesis"
            title={<>Why we refuse the false choice.</>}
            intro="Mission alignment is not a concession that costs return — for a perpetual institution, it is a source of durability."
          />
        </Reveal>
        <div className="mt-14">
          <FeatureGrid columns={4} numbered items={IMPACT_RETURNS} />
        </div>
      </Section>

      {/* Endowment model */}
      <Section tone="cloud">
        <Reveal>
          <SectionHeading
            eyebrow="The endowment model"
            title={<>Built to outlive every market cycle.</>}
            intro="A construction discipline for institutions that intend to exist forever — balancing real growth against today's spending obligations."
          />
        </Reveal>
        <div className="mt-16">
          <Timeline steps={ENDOWMENT_MODEL} />
        </div>
      </Section>

      {/* Spending-policy support */}
      <Section tone="paper">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-20">
          <Reveal className="lg:col-span-5">
            <SectionHeading
              eyebrow="Spending-policy support"
              title={<>A steady draw, without forced sales.</>}
            />
          </Reveal>
          <Reveal delay={0.1} className="lg:col-span-7">
            <div className="space-y-6 text-lg leading-relaxed text-slate-strong/85">
              <p>
                A spending policy only works if the portfolio can fund it through
                every environment. We design a liquid, drawdown-managed sleeve and
                predictable distribution planning so your annual draw is supported
                without forcing the sale of long-term holdings at the wrong moment.
              </p>
              <p>
                Target returns are framed to exceed your spending rate plus
                inflation across a full cycle — preserving real purchasing power for
                the beneficiaries who depend on the institution decades from now.
                Impact is reported alongside performance, audited annually and
                aligned to the UN Sustainable Development Goals.
              </p>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* FAQ */}
      <Section tone="cloud">
        <Reveal>
          <SectionHeading eyebrow="Foundation FAQ" title={<>What boards ask us.</>} />
        </Reveal>
        <div className="mt-12">
          <FaqList
            items={[
              {
                q: "Do mission-aligned mandates sacrifice return?",
                a: "We are built on the conviction that they need not. Our Community Equity Fund and climate platform pursue competitive returns and measurable outcomes together, and impact is reported with the same rigor as performance.",
              },
              {
                q: "How do you support our spending policy?",
                a: "Through a liquid, drawdown-managed sleeve and predictable distribution planning, so your annual draw is supported without forcing untimely sales. Target returns are framed to exceed your spending rate plus inflation across a cycle.",
              },
              {
                q: "Can our charter's values and exclusions be encoded?",
                a: "Yes. Exclusion lists, thematic tilts and values-based constraints are built into segregated mandates so your portfolio reflects your charter, with ESG integration across the ownership lifecycle.",
              },
              {
                q: "How is impact measured and reported?",
                a: "Social and environmental outcomes are quantified, audited annually and aligned to the UN Sustainable Development Goals — delivered through the investor portal alongside your performance and capital-account reporting.",
              },
            ]}
          />
        </div>
      </Section>

      <CtaBand
        title={<>Align your endowment with its mission — and its mandate.</>}
        body="We will frame a perpetual-horizon allocation that supports your spending policy while advancing the outcomes your charter exists to serve."
        primary={{ href: "/contact", label: "Speak with investor relations" }}
        secondary={{ href: "/esg", label: "Explore our impact approach" }}
      />
    </>
  );
}
