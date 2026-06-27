import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import {
  Section,
  SplitContent,
  FeatureGrid,
  FaqList,
  CtaBand,
} from "@/components/sections/blocks";
import { SectionHeading } from "@/components/ui/primitives";
import { Reveal } from "@/components/ui/Reveal";
import { FIRM } from "@/lib/site";

export const metadata: Metadata = {
  title: "Corporate Governance",
  description:
    "ALRION Pillar Capital is built on institutional governance — independent oversight, robust risk management, rigorous compliance and transparent reporting that give our partners the assurance their capital deserves.",
};

const GOVERNANCE_FAQ = [
  {
    q: "How is independent oversight maintained?",
    a: "Our risk, compliance and audit functions operate independently of the investing teams and report through separate lines to the firm's board and governance committees, ensuring decisions are challenged and never self-certified.",
  },
  {
    q: "Who approves investment decisions?",
    a: "No capital is committed without the approval of a formal Investment Committee, several of whose members are deliberately independent of the team sponsoring the opportunity. Decisions and their rationale are documented for auditability.",
  },
  {
    q: "How are conflicts of interest managed?",
    a: "We maintain a comprehensive conflicts policy, a personal-trading code and clear escalation procedures. Potential conflicts are disclosed, reviewed independently and resolved in the interest of our partners.",
  },
  {
    q: "What reporting do investors receive?",
    a: "Partners receive consistent, institutional-grade reporting covering exposure, attribution, performance, risk and ESG outcomes, complemented by audited annual reports and direct access to our investor relations team.",
  },
  {
    q: "Are the firm's controls externally audited?",
    a: "Yes. Our financial statements and key controls are subject to independent external audit, and our compliance program is reviewed regularly against evolving regulatory standards.",
  },
];

export default function GovernancePage() {
  return (
    <>
      <PageHero
        eyebrow="Corporate Governance"
        title={
          <>
            Institutional governance our partners
            <span className="text-gilt"> can rely on.</span>
          </>
        }
        intro="Long-term capital deserves more than performance — it deserves assurance. ALRION Pillar Capital is built on independent oversight, robust controls and transparency at every level of the firm."
        crumbs={[{ label: "Governance" }]}
      />

      {/* — Intro ——————————————————————————————————————————————— */}
      <Section tone="paper">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-20">
          <Reveal className="lg:col-span-5">
            <SectionHeading
              eyebrow="Our Approach"
              title={<>Governance is the foundation, not the formality.</>}
            />
          </Reveal>
          <Reveal delay={0.1} className="lg:col-span-7">
            <div className="space-y-6 text-lg leading-relaxed text-slate-strong/85">
              <p>
                The trust our partners place in {FIRM.name} is earned through
                structure, not statements. We have built the firm around a system
                of independent oversight, clear accountability and transparent
                reporting — the institutional foundations that allow conviction to
                be exercised responsibly and at scale.
              </p>
              <p>
                Authority is deliberately distributed and checked. The teams that
                take risk are not the teams that measure it; the people who source
                an investment are not the only voices that approve it; and the
                metrics we report are governed by functions independent of those
                they assess. This separation is the architecture of our integrity.
              </p>
              <p>
                What follows is an overview of the bodies, controls and policies
                that govern ALRION Pillar Capital — the mechanisms that turn our
                principles into practice every day.
              </p>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* — Board & Committees —————————————————————————————————— */}
      <Section tone="cloud">
        <Reveal>
          <SectionHeading
            eyebrow="Board & Committees"
            title={<>Decision-making, governed and documented.</>}
            intro="A framework of boards and committees ensures every consequential decision is debated, challenged and recorded."
          />
        </Reveal>
        <div className="mt-14">
          <FeatureGrid
            columns={3}
            items={[
              {
                title: "Board of Directors",
                body: "Sets the firm's strategy, risk appetite and standards of conduct, and holds management accountable for upholding them.",
              },
              {
                title: "Investment Committee",
                body: "Reviews and approves every commitment, challenging thesis, structure and risk with members independent of the sponsoring team.",
              },
              {
                title: "Risk Committee",
                body: "Oversees the firm's risk framework, limits and exposures, with authority that operates separately from the investing desks.",
              },
              {
                title: "Audit Committee",
                body: "Supervises financial reporting, internal controls and the relationship with our independent external auditors.",
              },
              {
                title: "Compliance Committee",
                body: "Maintains the firm's regulatory program, code of conduct and conflicts framework across all jurisdictions of activity.",
              },
              {
                title: "ESG & Impact Committee",
                body: "Governs the integration of environmental, social and governance factors and validates impact measurement and reporting.",
              },
            ]}
          />
        </div>
      </Section>

      {/* — Risk Management ————————————————————————————————————— */}
      <Section tone="navy">
        <SplitContent
          eyebrow="Risk Management"
          title={<>Risk measured by those who do not take it.</>}
          bullets={[
            "Independent risk function and reporting line",
            "Real-time monitoring of exposure and correlation",
            "Pre-committed position and drawdown limits",
            "Scenario and stress testing across portfolios",
          ]}
        >
          <p className="text-paper/80">
            Our risk framework is engineered for the speed of modern markets.
            Proprietary quantitative models monitor exposure, correlation and
            volatility continuously, while an independent risk function — separate
            from the investing teams — enforces limits and validates models.
          </p>
          <p className="text-paper/80">
            Because risk reports directly to governance rather than to the desks it
            oversees, concerns are surfaced honestly and acted upon early. This
            independence is what allows us to pursue conviction without
            compromising the capital entrusted to us.
          </p>
        </SplitContent>
      </Section>

      {/* — Compliance & Ethics ————————————————————————————————— */}
      <Section tone="paper">
        <Reveal>
          <SectionHeading
            eyebrow="Compliance & Ethics"
            title={<>A culture of integrity, codified and enforced.</>}
            intro="Strong compliance is not a constraint on our business — it is a precondition for earning the trust of long-term institutional partners."
          />
        </Reveal>
        <div className="mt-14">
          <FeatureGrid
            columns={4}
            items={[
              {
                title: "Code of conduct",
                body: "A clear standard of ethical behavior that governs every employee, partner and counterparty relationship.",
              },
              {
                title: "Conflicts management",
                body: "Comprehensive policies, disclosure obligations and independent review ensure conflicts are identified and resolved fairly.",
              },
              {
                title: "Regulatory program",
                body: "An active compliance program maintained against evolving regulatory standards across every jurisdiction in which we operate.",
              },
              {
                title: "Whistleblower protection",
                body: "Confidential reporting channels and robust protections empower our people to raise concerns without fear.",
              },
            ]}
          />
        </div>
      </Section>

      {/* — Legal, Audit & Policies ————————————————————————————— */}
      <Section tone="cloud">
        <Reveal>
          <SectionHeading
            eyebrow="Controls & Assurance"
            title={<>Legal, audit and policy, working in concert.</>}
            intro="Independent assurance and a comprehensive policy framework underpin every dimension of the firm's operations."
          />
        </Reveal>
        <div className="mt-14 grid gap-px overflow-hidden rounded-sm border border-line bg-line md:grid-cols-3">
          {[
            {
              title: "Legal oversight",
              body: "Experienced counsel governs fund structuring, documentation and counterparty arrangements, safeguarding our partners' interests at every step.",
            },
            {
              title: "Independent audit",
              body: "Financial statements and key controls are subject to independent external audit, complemented by an internal audit function.",
            },
            {
              title: "Policy framework",
              body: "A documented suite of policies — from valuation and cybersecurity to data protection and ESG — codifies how the firm operates.",
            },
          ].map((it, i) => (
            <Reveal key={it.title} delay={i * 0.07} className="bg-paper p-8">
              <span className="font-serif text-2xl text-gold-500">0{i + 1}</span>
              <h3 className="mt-5 text-lg font-semibold text-navy-950">{it.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-strong/80">{it.body}</p>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* — Transparency & Reporting ———————————————————————————— */}
      <Section tone="ink">
        <SplitContent
          reverse
          eyebrow="Transparency & Reporting"
          title={<>Accountability our partners can audit.</>}
          bullets={[
            "Consistent, institutional-grade reporting cadence",
            "Audited annual financial and ESG reports",
            "Granular exposure, attribution and risk disclosure",
            "Direct access to investor relations",
          ]}
        >
          <p className="text-paper/80">
            Transparency is the natural expression of good governance. Our partners
            receive timely, granular reporting across exposure, attribution,
            performance, risk and impact — delivered on a consistent institutional
            cadence and complemented by audited annual reports.
          </p>
          <p className="text-paper/80">
            We believe accountability should be verifiable, not assumed. Every
            figure we report is governed by independent oversight, and our investor
            relations team remains directly accessible to answer the questions
            behind the numbers.
          </p>
        </SplitContent>
      </Section>

      {/* — Governance FAQ —————————————————————————————————————— */}
      <Section tone="paper">
        <Reveal>
          <SectionHeading
            eyebrow="Common Questions"
            title={<>Governance, answered.</>}
            intro="A selection of the questions our partners most frequently ask about how the firm is governed."
          />
        </Reveal>
        <div className="mt-12">
          <FaqList items={GOVERNANCE_FAQ} />
        </div>
      </Section>

      <CtaBand
        title={<>Assurance is the foundation of partnership.</>}
        body="Speak with our investor relations team to learn more about how ALRION Pillar Capital governs the capital entrusted to it."
        primary={{ href: "/contact", label: "Connect with us" }}
        secondary={{ href: "/about", label: "About the firm" }}
      />
    </>
  );
}
