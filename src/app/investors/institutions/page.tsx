import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { Section, FaqList, CtaBand } from "@/components/sections/blocks";
import { SectionHeading } from "@/components/ui/primitives";
import { Reveal } from "@/components/ui/Reveal";
import { NeedsSolutions } from "@/components/investors/NeedsSolutions";
import { FIRM, GOVERNANCE_STANDARDS } from "@/lib/site";
import { INSTITUTIONAL_NEEDS } from "@/lib/investors";

export const metadata: Metadata = {
  title: "Institutional Investors",
  description:
    "ALRION Pillar Capital is built to serve asset managers and institutions through four autonomous Delaware LP strategies, institutional-grade reporting, independent governance and significant GP commitments at the same terms.",
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
        intro="ALRION Pillar Capital is built for asset managers, consultants and investment committees who ask the harder questions. A platform, not a product: four autonomous strategies under one rigorous framework, with the governance, reporting and oversight that institutional capital is entitled to expect."
        crumbs={[{ label: "Investor Center", href: "/investors" }, { label: "Institutional Investors" }]}
      />

      {/* Needs → solution */}
      <Section tone="paper">
        <Reveal>
          <SectionHeading
            eyebrow="Needs & solutions"
            title={<>What institutions require, and how we respond.</>}
            intro="Every institutional relationship begins with a mandate. We map our platforms to the specific requirements of allocators who answer to trustees, regulators and beneficiaries."
          />
        </Reveal>
        <div className="mt-14">
          <NeedsSolutions items={INSTITUTIONAL_NEEDS} />
        </div>
      </Section>

      {/* Governance standards band */}
      <Section tone="navy">
        <Reveal>
          <SectionHeading
            light
            align="center"
            eyebrow="Governance standards"
            title={<>Governance you can place in front of a committee.</>}
            intro="Four standards that turn a strategy into an allocation a fiduciary can defend."
          />
        </Reveal>
        <div className="mt-14 grid gap-px overflow-hidden rounded-sm border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
          {GOVERNANCE_STANDARDS.map((s, i) => (
            <Reveal key={s.title} delay={(i % 4) * 0.06} className="bg-navy-950 p-8">
              <div className="text-sm font-semibold text-gilt">{s.title}</div>
              <div className="mt-3 text-xs leading-relaxed text-paper/65">{s.body}</div>
            </Reveal>
          ))}
        </div>
        <Reveal delay={0.1}>
          <p className="mx-auto mt-8 max-w-2xl text-center text-xs text-paper/45">
            Final terms, controls and reporting are confirmed in formal
            documentation during onboarding.
          </p>
        </Reveal>
      </Section>

      {/* Independent structure */}
      <Section tone="cloud">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-20">
          <Reveal className="lg:col-span-5">
            <SectionHeading
              eyebrow="Independent structure"
              title={<>Four independent Delaware Limited Partnerships.</>}
            />
          </Reveal>
          <Reveal delay={0.1} className="lg:col-span-7">
            <div className="space-y-6 text-lg leading-relaxed text-slate-strong/85">
              <p>
                An institution can allocate to a single strategy or blend across
                several. Each strategy is a separate Delaware Limited Partnership
                with its own investment committee and risk framework, so a decision
                in one carries no contagion into another.
              </p>
              <p>
                The Hedge Fund LP runs to a daily 95% Value-at-Risk and a maximum
                300% gross exposure, at a 2.0% management fee and 20% performance
                fee, with a $1M minimum investment. The Private Equity LP is
                structured on an 8% preferred return with 20% carried interest. Full
                terms are set out in the private placement memorandum and limited
                partnership agreement.
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
            intro="Consistent, granular and reconciled, built to satisfy internal committees, consultants and external auditors alike."
          />
        </Reveal>
        <div className="mt-12 grid gap-px overflow-hidden rounded-sm border border-line bg-line md:grid-cols-2 lg:grid-cols-3">
          {[
            { t: "Exposure & attribution", b: "Position-level transparency with performance attribution across each strategy." },
            { t: "Liquid strategies", b: "Monthly reporting protocols for liquid strategies, delivered through the secure portal." },
            { t: "Private markets", b: "Quarterly deep-dive reviews with independent valuation committees on illiquid positions." },
            { t: "Impact indicators", b: "Qualitative reporting on Wealth Equity, Employment Quality and the Capital Multiplier." },
            { t: "Audit & assurance", b: "Annual independent audits and comprehensive third-party administration." },
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
                q: "What strategies can we allocate to?",
                a: "Four autonomous strategies, each an independent Delaware Limited Partnership: Hedge Fund LP (Global Macro Excellence), Private Equity LP (Infrastructure Growth), Venture Capital LP (Frontier Technology) and Community Equity Fund LP (Impact Through Investment). Allocate to one or blend across several.",
              },
              {
                q: "How is risk governed?",
                a: "Each strategy carries its own investment committee and risk framework. The Hedge Fund LP runs to a daily 95% Value-at-Risk and a maximum 300% gross exposure, with independent valuation committees on illiquid private-market positions.",
              },
              {
                q: "How are your interests aligned with ours?",
                a: "Through significant GP commitments across every fund. We invest where we ask our partners to invest, and at the same terms. Alignment is designed in, not asserted.",
              },
              {
                q: "How do we begin due diligence?",
                a: `Contact our investor relations desk at ${FIRM.email}. Qualified institutions receive secure data-room access to strategy documentation, governance policies and risk frameworks for independent review.`,
              },
            ]}
          />
        </div>
      </Section>

      <CtaBand
        title={<>Open a diligence conversation with our investor relations desk.</>}
        body="We will walk your team through the four strategies, their governance, their fund terms and the alignment behind every commitment."
        primary={{ href: "/contact", label: "Contact investor relations" }}
        secondary={{ href: "/investors", label: "Back to Investor Center" }}
      />
    </>
  );
}
