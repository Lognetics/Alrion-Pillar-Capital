import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { Section, SplitContent, FaqList, CtaBand } from "@/components/sections/blocks";
import { SectionHeading } from "@/components/ui/primitives";
import { Reveal } from "@/components/ui/Reveal";
import { AccessCards } from "@/components/investors/AccessCards";
import { TAILORED_ACCESS } from "@/lib/investors";

export const metadata: Metadata = {
  title: "Family Offices",
  description:
    "ALRION Pillar Capital offers single- and multi-family offices bespoke access to frontier-technology innovation — direct and private deals, multi-generational structuring and a relationship built on discretion.",
};

export default function FamilyOfficesPage() {
  return (
    <>
      <PageHero
        eyebrow="For Family Offices"
        title={
          <>
            Bespoke access, held in
            <span className="text-gilt"> the strictest confidence.</span>
          </>
        }
        intro="Single- and multi-family offices do not want a product. They want a relationship — direct access to private innovation, structures shaped to a family's values and horizon, and the discretion that significant wealth requires. That is the relationship we offer."
        crumbs={[{ label: "Investor Center", href: "/investors" }, { label: "Family Offices" }]}
      />

      {/* Tailored access cards */}
      <Section tone="paper">
        <Reveal>
          <SectionHeading
            eyebrow="Tailored access"
            title={<>Four ways the relationship is built around you.</>}
            intro="Beyond commingled funds, family offices gain direct access to opportunities and structures most allocators never see."
          />
        </Reveal>
        <div className="mt-14">
          <AccessCards cards={TAILORED_ACCESS} />
        </div>
      </Section>

      {/* Multi-generational wealth */}
      <Section tone="cloud">
        <SplitContent
          eyebrow="Multi-generational wealth"
          title={<>Capital that thinks in generations.</>}
          bullets={[
            "Horizons measured in decades, not quarters",
            "Succession and governance designed in, not bolted on",
            "Next-generation education and engagement",
            "Values and exclusions encoded into the mandate",
          ]}
        >
          <p>
            A family office answers to people who are not yet in the room. That
            changes everything about how capital should be deployed: patience
            becomes an advantage, and the technologies reshaping the next decade
            become a way to carry wealth — and purpose — to the next generation.
          </p>
          <p>
            We design allocations for that horizon, with succession, governance and
            the education of the next generation built into the relationship from
            the start rather than addressed once a transition is already underway.
          </p>
        </SplitContent>
      </Section>

      {/* Direct & private deal access */}
      <Section tone="navy">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-20">
          <Reveal className="lg:col-span-5">
            <SectionHeading
              light
              eyebrow="Direct & private deals"
              title={<>A seat at the frontier, not just a fund line.</>}
            />
          </Reveal>
          <Reveal delay={0.1} className="lg:col-span-7">
            <div className="space-y-6 text-lg leading-relaxed text-paper/75">
              <p>
                Our venture and private-equity desks source frontier-technology
                companies across AI, robotics, biotech, space, climate and deep
                tech. For family offices, that pipeline becomes a curated stream of
                direct co-investment opportunities — vetted, diligenced and matched
                to the themes a family cares about.
              </p>
              <p>
                This is measured access, not a firehose. Each opportunity arrives
                with a full diligence pack and a direct line to the deal team, so a
                family can engage with the conviction — and the people — behind
                every investment.
              </p>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* Confidentiality & relationship */}
      <Section tone="paper">
        <Reveal>
          <SectionHeading
            eyebrow="Confidentiality & relationship"
            title={<>Discretion is part of the mandate.</>}
            intro="A single principal, controlled information flow and a standard of confidentiality that significant wealth is entitled to expect."
          />
        </Reveal>
        <div className="mt-12 grid gap-px overflow-hidden rounded-sm border border-line bg-line md:grid-cols-3">
          {[
            { t: "A named principal", b: "One senior point of contact who knows your family's objectives, constraints and preferences — not a rotating service desk." },
            { t: "Controlled information", b: "Strict information-flow controls and need-to-know access keep your holdings, intentions and identity contained." },
            { t: "Privacy by design", b: "Structures, communications and reporting are designed to protect the family's privacy at every stage of the relationship." },
          ].map((x, i) => (
            <Reveal key={x.t} delay={i * 0.07} className="bg-paper p-9">
              <span className="font-serif text-2xl text-gold-500">0{i + 1}</span>
              <h3 className="mt-5 text-lg font-semibold text-navy-950">{x.t}</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-strong/80">{x.b}</p>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* FAQ */}
      <Section tone="cloud">
        <Reveal>
          <SectionHeading eyebrow="Family office FAQ" title={<>What families ask us.</>} />
        </Reveal>
        <div className="mt-12">
          <FaqList
            items={[
              {
                q: "Can we co-invest directly into individual companies?",
                a: "Yes. Beyond our commingled funds, our venture and private-equity desks offer family offices direct co-investment into individual frontier-technology companies, each with a full diligence pack and access to the deal team.",
              },
              {
                q: "Can a mandate reflect our family's values and exclusions?",
                a: "Absolutely. Segregated mandates are shaped to your values, exclusion lists, liquidity needs and concentration preferences, and reviewed with a named principal who knows your objectives.",
              },
              {
                q: "How do you handle confidentiality?",
                a: "Discretion is built into the relationship: a single senior point of contact, strict information-flow controls, need-to-know access and structures designed to protect the family's privacy at every stage.",
              },
              {
                q: "How is the relationship managed day to day?",
                a: "Through one named principal supported by our investment, risk and reporting teams — a continuous relationship rather than a transactional service, with direct access whenever you need it.",
              },
            ]}
          />
        </div>
      </Section>

      <CtaBand
        title={<>Begin a confidential conversation.</>}
        body="We will introduce a principal who can shape a mandate and a co-investment stream around your family's objectives and values."
        primary={{ href: "/contact", label: "Arrange an introduction" }}
        secondary={{ href: "/investors", label: "Back to Investor Center" }}
      />
    </>
  );
}
