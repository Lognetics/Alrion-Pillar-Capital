import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { Section, CtaBand } from "@/components/sections/blocks";
import { SectionHeading, Button } from "@/components/ui/primitives";
import { Reveal } from "@/components/ui/Reveal";
import { SENIOR_LEADERSHIP } from "@/lib/about";

export const metadata: Metadata = {
  title: "Leadership",
  description:
    "The people, and the guardrails, behind every decision at ALRION Pillar Capital. Governance architecture, senior leadership roles, and access to full team profiles for verified Qualified Purchasers.",
};

export default function LeadershipPage() {
  return (
    <>
      <PageHero
        eyebrow="Governance & People"
        title={
          <>
            The people, and the guardrails,
            <span className="text-gilt"> behind every decision.</span>
          </>
        }
        intro="ALRION Pillar Capital is led by a Managing Partner with a fiduciary-first philosophy, supported by independent investment committees, an external advisory board, and independently audited operational infrastructure. Full team profiles, biographies, and credentials are available to verified Qualified Purchasers via the Investor Portal."
        crumbs={[{ label: "About", href: "/about" }, { label: "Leadership" }]}
      >
        <Button href="/investors/capital-requests" variant="gold">
          Request access
        </Button>
      </PageHero>

      {/* Senior leadership, role slots, no names */}
      <Section tone="paper">
        <Reveal>
          <SectionHeading
            eyebrow="Senior Leadership"
            title={<>Senior leadership, by mandate.</>}
            intro="Reserved role slots are filled as each seat is confirmed. Until an individual has consented to public listing, the seat is shown in an Announcing state. We do not publish placeholder names."
          />
        </Reveal>

        <div className="mt-14 grid gap-px overflow-hidden rounded-sm border border-line bg-line sm:grid-cols-2 lg:grid-cols-2">
          {SENIOR_LEADERSHIP.map((r, i) => (
            <Reveal key={r.role} delay={(i % 2) * 0.06} className="bg-paper p-8">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-lg font-semibold text-navy-950">{r.role}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-strong/70">
                    {r.reporting}
                  </p>
                </div>
                <span className="shrink-0 rounded-full border border-gold-500/40 px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-wide text-gold-600">
                  Announcing
                </span>
              </div>
            </Reveal>
          ))}
        </div>

        <p className="mt-8 max-w-2xl text-sm leading-relaxed text-slate-strong/55">
          No investment decision is made by a single individual. Each strategy is a
          separate Delaware Limited Partnership governed by its own investment
          committee. Detailed biographies and credentials are made available to
          verified investors through the Investor Portal.
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          <Button href="/about/investment-committee" variant="outline">
            Investment committees
          </Button>
          <Button href="/about/advisors" variant="outline">
            Advisory board
          </Button>
        </div>
      </Section>

      {/* Independence, in practice (3.5) */}
      <Section tone="navy">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-20">
          <Reveal className="lg:col-span-5">
            <SectionHeading
              light
              eyebrow="Independence, In Practice"
              title={<>Independence is only credible when it is governed.</>}
            />
          </Reveal>
          <Reveal delay={0.1} className="lg:col-span-7">
            <div className="space-y-6 text-lg leading-relaxed text-paper/75">
              <p>
                Each of our four strategies is a separate Delaware Limited
                Partnership with its own investment committee and risk framework.
                Fund administration is provided by Juniper Square. Annual audits are
                conducted by an independent, nationally recognized certified public
                accounting firm.
              </p>
              <p>
                The General Partner commits, at minimum, 1% of aggregate Fund
                commitments, and no less than $1,000,000 in the case of APEI Fund I,
                alongside Limited Partners, on the same economic terms, ensuring
                aligned interests from first dollar to last.
              </p>
            </div>
          </Reveal>
        </div>
      </Section>

      <CtaBand
        title={<>Full team profiles are available to verified Qualified Purchasers.</>}
        body="Detailed biographies, professional histories, credentials, and Investment Committee charters are made available through the Investor Portal, hosted by Juniper Square, following investor qualification."
        primary={{ href: "/investors/capital-requests", label: "Request access" }}
        secondary={{ href: "/contact", label: "Contact Investor Relations" }}
      />
    </>
  );
}
