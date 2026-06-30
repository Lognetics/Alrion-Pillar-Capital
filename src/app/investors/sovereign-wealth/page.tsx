import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { Section, FaqList, CtaBand } from "@/components/sections/blocks";
import { SectionHeading } from "@/components/ui/primitives";
import { Reveal } from "@/components/ui/Reveal";
import { Timeline } from "@/components/investors/Timeline";
import { RegionList } from "@/components/investors/RegionList";
import { COINVEST_MODEL, SOVEREIGN_REGIONS } from "@/lib/investors";

export const metadata: Metadata = {
  title: "Sovereign Wealth Funds",
  description:
    "ALRION Pillar Capital partners with sovereign wealth funds at scale — anchor commitments, fee-advantaged co-investment, strategic frontier-technology mandates and alignment with national development priorities.",
};

export default function SovereignWealthPage() {
  return (
    <>
      <PageHero
        eyebrow="For Sovereign Wealth Funds"
        title={
          <>
            Strategic capital at the
            <span className="text-gilt"> scale of nations.</span>
          </>
        }
        intro="Sovereign investors deploy patient capital with a dual mandate: superior long-term return and the strategic advancement of national priorities. We are built to serve both — at scale, through co-investment, across the frontier technologies that will define the next economic era."
        crumbs={[{ label: "Investor Center", href: "/investors" }, { label: "Sovereign Wealth Funds" }]}
      />

      {/* Scale & strategic alignment */}
      <Section tone="paper">
        <Reveal>
          <SectionHeading
            eyebrow="Scale & strategic alignment"
            title={<>Return and national development, pursued together.</>}
            intro="The frontier technologies that drive the strongest long-term returns — AI infrastructure, semiconductors, energy, advanced manufacturing — are the same ones that build national capability. For sovereign investors, alignment is the opportunity."
          />
        </Reveal>
        <div className="mt-14 grid gap-px overflow-hidden rounded-sm border border-line bg-line md:grid-cols-3">
          {[
            { t: "Deployment at scale", b: "Capacity to absorb cornerstone, multi-year commitments across four investment platforms without diluting conviction." },
            { t: "Strategic exposure", b: "Targeted access to semiconductors, AI compute, energy transition, space and dual-use deep tech aligned to national priorities." },
            { t: "Long-horizon alignment", b: "Patient capital and multi-year holds that match the generational horizon of sovereign mandates." },
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
            eyebrow="The co-investment model"
            title={<>A partnership that scales with your conviction.</>}
            intro="Sovereign relationships move beyond fund commitments into direct partnership — co-investment rights, strategic mandates and the transfer of capability home."
          />
        </Reveal>
        <div className="mt-16">
          <Timeline steps={COINVEST_MODEL} light />
        </div>
      </Section>

      {/* Global reach */}
      <Section tone="ink">
        <Reveal>
          <SectionHeading
            light
            eyebrow="Global reach"
            title={<>An integrated footprint across every major capital region.</>}
            intro="Twenty-two countries of activity, anchored by hubs positioned where sovereign capital and frontier innovation meet."
          />
        </Reveal>
        <div className="mt-14">
          <RegionList regions={SOVEREIGN_REGIONS} />
        </div>
        <Reveal delay={0.1}>
          <p className="mt-6 text-xs text-paper/45">
            Illustrative regional focus. Office roles and coverage reflect our
            stated global footprint and are confirmed in mandate documentation.
          </p>
        </Reveal>
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
                is built accordingly. Independent oversight, formal investment-committee
                discipline and audited, institutional-grade reporting underpin every
                figure we share — at any scale of commitment.
              </p>
              <p>
                Where confidentiality is paramount, we structure engagements to
                respect it: discreet sourcing, controlled information flow and
                bespoke mandates that keep strategic intent contained to the people
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
                q: "How do co-investment rights work?",
                a: "An anchor commitment establishes the partnership and unlocks preferential, fee-advantaged co-investment rights on direct deals — letting you scale conviction into specific frontier-technology opportunities alongside us.",
              },
              {
                q: "Can a mandate target our national development priorities?",
                a: "Yes. We structure custom mandates around national priorities — semiconductors, energy, AI infrastructure, dual-use technology — within agreed risk and governance bounds, with secondments and joint diligence to build internal capability.",
              },
              {
                q: "Do you have a presence in our region?",
                a: "Our integrated footprint spans 22 countries, anchored by hubs in Abu Dhabi, Singapore, London, Zurich, New York and San Francisco. We position teams where sovereign capital and frontier innovation intersect.",
              },
              {
                q: "How is confidentiality maintained at this scale?",
                a: "Through discreet sourcing, controlled information flow and bespoke mandate structures. Strategic intent is contained to the people who need to know it, and governance operates independently of the investing desks.",
              },
            ]}
          />
        </div>
      </Section>

      <CtaBand
        title={<>Discuss a strategic partnership with our sovereign desk.</>}
        body="We will explore anchor commitments, co-investment rights and mandates aligned to your national priorities."
        primary={{ href: "/contact", label: "Contact the sovereign desk" }}
        secondary={{ href: "/global", label: "Explore our global footprint" }}
      />
    </>
  );
}
