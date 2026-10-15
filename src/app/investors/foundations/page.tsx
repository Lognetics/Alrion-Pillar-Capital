import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { Section, FeatureGrid, FaqList, CtaBand } from "@/components/sections/blocks";
import { SectionHeading } from "@/components/ui/primitives";
import { Reveal } from "@/components/ui/Reveal";
import { Timeline } from "@/components/investors/Timeline";
import { IMPACT_RETURNS, ENDOWMENT_MODEL } from "@/lib/investors";
import { IMPACT_INDICATORS } from "@/lib/site";

export const metadata: Metadata = {
  title: "Foundations & Endowments",
  description:
    "ALRION Pillar Capital is built to serve mission-driven foundations and endowments through the Community Equity Fund LP, impact through investment, long-horizon construction and aligned interests across four independent Delaware LP strategies.",
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
        intro="Foundations and endowments steward capital that is meant to last and to do good along the way. Alrion Pillar Capital is built to serve that dual purpose through the Community Equity Fund LP, a strategy proving that underserved markets represent some of the most compelling risk-adjusted opportunities in New York."
        crumbs={[{ label: "Investor Center", href: "/investors" }, { label: "Foundations & Endowments" }]}
      />

      {/* Impact indicators, qualitative */}
      <Section tone="navy">
        <Reveal>
          <SectionHeading
            light
            align="center"
            eyebrow="Impact through investment"
            title={<>How we measure catalysis, not just contribution.</>}
            intro="The Community Equity Fund LP reports against three qualitative indicators, held to the same standard of transparency as our return-focused strategies."
          />
        </Reveal>
        <div className="mt-14 grid gap-px overflow-hidden rounded-sm border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-3">
          {IMPACT_INDICATORS.map((s, i) => (
            <Reveal key={s.title} delay={(i % 3) * 0.06} className="bg-navy-950 p-8">
              <div className="text-sm font-semibold text-gilt">{s.title}</div>
              <div className="mt-3 text-sm leading-relaxed text-paper/70">{s.body}</div>
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
            intro="Mission alignment is not a concession that costs return. For a long-horizon institution, it can be a source of durability."
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
            title={<>Built for a long horizon.</>}
            intro="A construction discipline for institutions that intend to endure, balancing real growth against today's spending obligations."
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
                every environment. The liquid Hedge Fund LP, run to a daily 95%
                Value-at-Risk and a maximum 300% gross exposure, sits alongside
                private-market strategies so an annual draw need not force the sale
                of long-term holdings at the wrong moment.
              </p>
              <p>
                Alignment is designed in. We commit significant GP capital across
                every fund and invest where we ask our partners to invest, at the
                same terms. Impact is reported alongside performance through three
                qualitative indicators, Wealth Equity, Employment Quality and the
                Capital Multiplier.
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
                a: "We are built on the conviction that they need not. The Community Equity Fund LP is a model proving that underserved markets represent some of the most compelling risk-adjusted opportunities in New York, and it is seeded by carried interest from the institutional strategies.",
              },
              {
                q: "How is the Community Equity Fund structured?",
                a: "It is a separate Delaware Limited Partnership with its own investment committee and risk framework, focused on underserved New York markets and audited annually by an independent auditor.",
              },
              {
                q: "How does the platform support a long horizon?",
                a: "Four autonomous strategies span liquid macro, private infrastructure, frontier venture and community impact. Private-market strategies are structured on an 8% preferred return with 20% carried interest, matched to long-dated obligations.",
              },
              {
                q: "How is impact measured and reported?",
                a: "Through three qualitative indicators, Wealth Equity, Employment Quality and the Capital Multiplier. We measure catalysis, the third-party capital drawn into a community after our initial investment, not just contribution.",
              },
            ]}
          />
        </div>
      </Section>

      <CtaBand
        title={<>Align your endowment with its mission, and its mandate.</>}
        body="We will frame a perpetual-horizon allocation that supports your spending policy while advancing the outcomes your charter exists to serve."
        primary={{ href: "/contact", label: "Speak with investor relations" }}
        secondary={{ href: "/esg", label: "Explore our impact approach" }}
      />
    </>
  );
}
