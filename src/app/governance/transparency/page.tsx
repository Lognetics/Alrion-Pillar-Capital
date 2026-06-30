import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { Section, FeatureGrid, CtaBand } from "@/components/sections/blocks";
import { SectionHeading } from "@/components/ui/primitives";
import { Reveal } from "@/components/ui/Reveal";
import { FIRM } from "@/lib/site";
import { DISCLOSURES, REPORTING_CADENCE } from "@/lib/governance";

export const metadata: Metadata = {
  title: "Transparency",
  description:
    "ALRION Pillar Capital's transparency commitments — what we disclose, our monthly, quarterly and annual reporting cadence, data integrity standards and direct investor access.",
};

export default function TransparencyPage() {
  return (
    <>
      <PageHero
        eyebrow="Governance · Transparency"
        title={
          <>
            Accountability our partners can
            <span className="text-gilt"> audit, not assume.</span>
          </>
        }
        intro="Transparency is the natural expression of good governance. We commit to consistent, granular disclosure on a predictable cadence — and to standing behind every figure we report."
        crumbs={[{ label: "Governance", href: "/governance" }, { label: "Transparency" }]}
      />

      {/* — What we disclose ——————————————————————————————————— */}
      <Section tone="paper">
        <Reveal>
          <SectionHeading
            eyebrow="Our Commitments"
            title={<>What we disclose to our partners.</>}
            intro="We believe institutional capital deserves institutional clarity. Across six dimensions, our reporting answers not only what happened, but why."
          />
        </Reveal>
        <div className="mt-14">
          <FeatureGrid columns={3} numbered={false} items={DISCLOSURES} />
        </div>
      </Section>

      {/* — Reporting cadence timeline ————————————————————————— */}
      <Section tone="navy">
        <Reveal>
          <SectionHeading
            light
            eyebrow="Reporting Cadence"
            title={<>A predictable rhythm of disclosure.</>}
            intro="Our partners always know what to expect and when — from monthly snapshots to fully audited annual reports."
          />
        </Reveal>
        <div className="mt-14 space-y-px overflow-hidden rounded-sm border border-white/10 bg-white/5">
          {REPORTING_CADENCE.map((c, i) => (
            <Reveal key={c.cadence} delay={i * 0.08}>
              <div className="grid gap-6 bg-navy-950 p-8 md:grid-cols-12 md:items-center md:p-10">
                <div className="md:col-span-3">
                  <span className="font-serif text-3xl font-light text-gold-400">{c.cadence}</span>
                  <p className="mt-2 text-xs uppercase tracking-[0.18em] text-paper/45">{c.window}</p>
                </div>
                <div className="md:col-span-9">
                  <ul className="flex flex-wrap gap-3">
                    {c.reports.map((r) => (
                      <li
                        key={r}
                        className="rounded-full border border-white/12 bg-white/[0.03] px-4 py-2 text-sm text-paper/80"
                      >
                        {r}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* — Data integrity & access ————————————————————————————— */}
      <Section tone="cloud">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <SectionHeading
              eyebrow="Data Integrity"
              title={<>Every figure, independently governed.</>}
            />
            <div className="mt-8 space-y-5 text-lg leading-relaxed text-slate-strong/85">
              <p>
                The numbers we report are produced and validated by functions
                independent of the teams they assess. Valuations of private and
                illiquid positions follow documented methodology and independent
                governance, and our financial statements are subject to external
                audit.
              </p>
              <p>
                We would rather disclose a difficult truth clearly than an
                encouraging figure loosely. Accountability, at {FIRM.name}, is
                designed to be verifiable.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.1} className="self-center">
            <div className="rounded-sm border border-line bg-paper p-10">
              <span className="eyebrow text-gold-600">Investor Access</span>
              <h3 className="mt-5 font-serif text-2xl font-light text-navy-950">
                A direct line, not a portal alone.
              </h3>
              <p className="mt-4 leading-relaxed text-slate-strong/80">
                Beyond our secure reporting portal, every partner has direct access
                to our investor relations team — because the most important
                disclosures are sometimes the answers to the questions behind the
                numbers.
              </p>
              <ul className="mt-8 space-y-3 border-t border-line pt-6">
                {[
                  "Secure, always-on reporting portal",
                  "Named investor relations contact",
                  "Ad-hoc disclosure on material events",
                  "Annual investor briefings",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-slate-strong">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold-500" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </Section>

      <CtaBand
        title={<>Transparency you can verify.</>}
        body="Request access to our reporting standards and sample disclosures through our investor relations team."
        primary={{ href: "/contact", label: "Request access" }}
        secondary={{ href: "/governance/reports", label: "View annual reports" }}
      />
    </>
  );
}
