import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { Section, FaqList, CtaBand } from "@/components/sections/blocks";
import { SectionHeading } from "@/components/ui/primitives";
import { Reveal } from "@/components/ui/Reveal";
import { Timeline } from "@/components/investors/Timeline";
import { COINVEST_MODEL } from "@/lib/investors";

export const metadata: Metadata = {
  title: "Sovereign Wealth Funds",
  description:
    "ALRION Pillar Capital is built to serve sovereign investors through four autonomous Delaware LP strategies, anchor commitments, aligned interests at the same terms and exposure to durable national priorities.",
};

export default function SovereignWealthPage() {
  return (
    <>
      <PageHero
        eyebrow="For Sovereign Wealth Funds"
        title={
          <>
            Patient capital, aligned to
            <span className="text-gilt"> durable priorities.</span>
          </>
        }
        intro="Sovereign investors deploy patient capital with a dual mandate: durable long-term return and the strategic advancement of national priorities. Alrion Pillar Capital is built to serve both through four autonomous Delaware LP strategies spanning energy and grid infrastructure and frontier technology."
        crumbs={[{ label: "Investor Center", href: "/investors" }, { label: "Sovereign Wealth Funds" }]}
      />

      {/* Scale & strategic alignment */}
      <Section tone="paper">
        <Reveal>
          <SectionHeading
            eyebrow="Strategic alignment"
            title={<>Return and national priorities, pursued together.</>}
            intro="The Infrastructure Growth and Frontier Technology strategies invest into the mission-critical infrastructure and technologies that also build national capability, energy, grid modernization, operational resilience, AI, biotech, defense and space. For sovereign investors, alignment is the opportunity."
          />
        </Reveal>
        <div className="mt-14 grid gap-px overflow-hidden rounded-sm border border-line bg-line md:grid-cols-3">
          {[
            { t: "Anchor commitments", b: "Cornerstone, multi-year commitments across one or more of the four independent Delaware LP strategies." },
            { t: "Strategic exposure", b: "Infrastructure Growth into energy, grid and operational resilience, and Frontier Technology across AI, biotech, defense and space." },
            { t: "Long-horizon alignment", b: "Patient private-market holds structured on an 8% preferred return with 20% carried interest, matched to sovereign horizons." },
          ].map((x, i) => (
            <Reveal key={x.t} delay={i * 0.07} className="bg-paper p-9">
              <span className="font-serif text-2xl text-gold-500">0{i + 1}</span>
              <h3 className="mt-5 text-lg font-semibold text-navy-950">{x.t}</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-strong/80">{x.b}</p>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Co-investment partnership model */}
      <Section tone="navy">
        <Reveal>
          <SectionHeading
            light
            eyebrow="The partnership model"
            title={<>A partnership grounded in alignment.</>}
            intro="Sovereign relationships move beyond a fund commitment into partnership: anchor commitments, alignment at the same terms and independent governance on every strategy."
          />
        </Reveal>
        <div className="mt-16">
          <Timeline steps={COINVEST_MODEL} light />
        </div>
      </Section>

      {/* Governance reassurance */}
      <Section tone="paper">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-20">
          <Reveal className="lg:col-span-5">
            <SectionHeading
              eyebrow="Governance & discretion"
              title={<>Scale demands the strongest controls.</>}
            />
          </Reveal>
          <Reveal delay={0.1} className="lg:col-span-7">
            <div className="space-y-6 text-lg leading-relaxed text-slate-strong/85">
              <p>
                Sovereign capital carries national significance, and our governance
                is built accordingly. Each strategy is a separate Delaware Limited
                Partnership with its own investment committee and risk framework,
                audited annually by an independent auditor, with independent valuation
                committees on illiquid positions.
              </p>
              <p>
                Where confidentiality is paramount, we structure engagements to
                respect it: discreet sourcing, controlled information flow and
                communications that keep strategic intent contained to the people
                who need to know it.
              </p>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* FAQ */}
      <Section tone="cloud">
        <Reveal>
          <SectionHeading eyebrow="Sovereign FAQ" title={<>Questions sovereign investors raise.</>} />
        </Reveal>
        <div className="mt-12">
          <FaqList
            items={[
              {
                q: "How does an anchor commitment work?",
                a: "A cornerstone allocation across one or more of the four Delaware LP strategies establishes the partnership and aligns long-term incentives at fund level, on the fund's stated terms.",
              },
              {
                q: "How are your interests aligned with ours?",
                a: "We commit significant GP capital across every fund and invest where we ask our partners to invest, at the same terms. Conviction is shared rather than sold.",
              },
              {
                q: "Which national priorities can we gain exposure to?",
                a: "The Private Equity LP pursues Infrastructure Growth into energy, grid modernization and operational resilience. The Venture Capital LP pursues Frontier Technology across AI, biotech, defense and space at Seed to Series A.",
              },
              {
                q: "How is confidentiality maintained?",
                a: "Through discreet sourcing, controlled information flow and communications designed to keep strategic intent contained. Each strategy's governance operates independently of the teams deploying capital.",
              },
            ]}
          />
        </div>
      </Section>

      <CtaBand
        title={<>Discuss a strategic partnership with our investor relations desk.</>}
        body="We will explore anchor commitments and the strategies aligned to your national priorities, on the same terms we hold ourselves to."
        primary={{ href: "/contact", label: "Contact investor relations" }}
        secondary={{ href: "/strategies", label: "Explore our strategies" }}
      />
    </>
  );
}
