import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { Section, FaqList, CtaBand } from "@/components/sections/blocks";
import { SectionHeading } from "@/components/ui/primitives";
import { Reveal } from "@/components/ui/Reveal";
import { NeedsSolutions } from "@/components/investors/NeedsSolutions";
import { StatBand } from "@/components/investors/StatBand";
import { FIRM } from "@/lib/site";
import { INSTITUTIONAL_NEEDS, ASSURANCE_STATS } from "@/lib/investors";

export const metadata: Metadata = {
  title: "Institutional Investors",
  description:
    "ALRION Pillar Capital partners with asset managers and institutions seeking differentiated frontier-technology exposure, institutional-grade reporting, independent governance and segregated mandates.",
};

export default function InstitutionsPage() {
  return (
    <>
      <PageHero
        eyebrow="For Institutional Investors"
        title={
          <>
            A research partner built to the
            <span className="text-gilt"> institutional standard.</span>
          </>
        }
        intro="Asset managers, consultants and investment committees come to ALRION Pillar Capital for one thing: differentiated exposure to the technology frontier, underwritten by the governance, reporting and oversight that institutional capital is entitled to expect."
        crumbs={[{ label: "Investor Center", href: "/investors" }, { label: "Institutional Investors" }]}
      />

      {/* Needs → solution */}
      <Section tone="paper">
        <Reveal>
          <SectionHeading
            eyebrow="Needs & solutions"
            title={<>What institutions require — and how we respond.</>}
            intro="Every institutional relationship begins with a mandate. We map our platforms to the specific requirements of allocators who answer to trustees, regulators and beneficiaries."
          />
        </Reveal>
        <div className="mt-14">
          <NeedsSolutions items={INSTITUTIONAL_NEEDS} />
        </div>
      </Section>

      {/* Assurance / credentials band */}
      <Section tone="navy">
        <Reveal>
          <SectionHeading
            light
            align="center"
            eyebrow="Credentials & assurance"
            title={<>Governance you can place in front of a committee.</>}
            intro="The controls that turn a strategy into an allocation a fiduciary can defend."
          />
        </Reveal>
        <div className="mt-14">
          <StatBand stats={ASSURANCE_STATS} />
        </div>
        <Reveal delay={0.1}>
          <p className="mx-auto mt-8 max-w-2xl text-center text-xs text-paper/45">
            Illustrative figures shown for orientation. Final terms, controls and
            reporting are confirmed in formal documentation during onboarding.
          </p>
        </Reveal>
      </Section>

      {/* Segregated mandates */}
      <Section tone="cloud">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-20">
          <Reveal className="lg:col-span-5">
            <SectionHeading
              eyebrow="Segregated mandates"
              title={<>Commingled scale, or a mandate of your own.</>}
            />
          </Reveal>
          <Reveal delay={0.1} className="lg:col-span-7">
            <div className="space-y-6 text-lg leading-relaxed text-slate-strong/85">
              <p>
                Some institutions want the diversification and efficiency of our
                flagship commingled vehicles. Others require a mandate shaped to
                their own guidelines — bespoke exclusions, concentration limits,
                liquidity terms and reporting cadence. We support both.
              </p>
              <p>
                A segregated managed account places your capital in a ring-fenced
                structure with custody and administration you control, governed by
                investment guidelines we agree together and monitored by an
                oversight function that operates independently of the desks
                deploying capital.
              </p>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* Reporting & oversight detail */}
      <Section tone="paper">
        <Reveal>
          <SectionHeading
            eyebrow="Reporting & oversight"
            title={<>Reporting written for the people who answer for it.</>}
            intro="Consistent, granular and reconciled — built to satisfy internal committees, consultants and external auditors alike."
          />
        </Reveal>
        <div className="mt-12 grid gap-px overflow-hidden rounded-sm border border-line bg-line md:grid-cols-2 lg:grid-cols-3">
          {[
            { t: "Exposure & attribution", b: "Position-level transparency with performance attribution across factor, sector and platform." },
            { t: "Risk reporting", b: "Daily risk attribution, stress tests and limit monitoring produced independently of the investing teams." },
            { t: "Capital accounts", b: "Quarterly capital-account and performance statements reconciled to a third-party administrator." },
            { t: "Impact metrics", b: "Audited annual impact reporting aligned to the UN Sustainable Development Goals." },
            { t: "Audit & assurance", b: "Independent audit, third-party administration and a controls environment built for scrutiny." },
            { t: "Direct access", b: "A named relationship manager and direct lines to the investment and risk teams." },
          ].map((x, i) => (
            <Reveal key={x.t} delay={(i % 3) * 0.06} className="bg-paper p-8">
              <h3 className="text-lg font-semibold text-navy-950">{x.t}</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-strong/80">{x.b}</p>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* FAQ */}
      <Section tone="cloud">
        <Reveal>
          <SectionHeading eyebrow="Institutional FAQ" title={<>Questions allocators ask first.</>} />
        </Reveal>
        <div className="mt-12">
          <FaqList
            items={[
              {
                q: "Do you offer segregated accounts as well as commingled funds?",
                a: "Yes. Alongside our flagship commingled vehicles we structure segregated managed accounts with bespoke guidelines, exclusion lists, concentration limits and liquidity terms tailored to your mandate.",
              },
              {
                q: "How is risk governed independently of the investing teams?",
                a: "A dedicated oversight function enforces position limits, validates our quantitative models and produces daily risk attribution. It reports directly to governance and never to the desks it monitors.",
              },
              {
                q: "Can your reporting satisfy our consultants and auditors?",
                a: "Our reporting is reconciled to a third-party administrator and built around exposure, attribution, risk and impact. It is designed to be placed directly in front of investment committees, consultants and external auditors.",
              },
              {
                q: "How do we begin due diligence?",
                a: `Contact our investor relations desk at ${FIRM.email}. Qualified institutions receive secure data-room access to strategy documentation, audited performance, governance policies and risk frameworks for independent review.`,
              },
            ]}
          />
        </div>
      </Section>

      <CtaBand
        title={<>Open a diligence conversation with our institutional desk.</>}
        body="We will walk your team through governance, reporting and the mandate structures available to institutions of your scale."
        primary={{ href: "/contact", label: "Contact investor relations" }}
        secondary={{ href: "/investors", label: "Back to Investor Center" }}
      />
    </>
  );
}
