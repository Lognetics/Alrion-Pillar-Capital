import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { Section, CtaBand } from "@/components/sections/blocks";
import { SectionHeading } from "@/components/ui/primitives";
import { Reveal } from "@/components/ui/Reveal";
import { INVESTMENT_COMMITTEES, DECISION_STEPS } from "@/lib/about";

export const metadata: Metadata = {
  title: "Investment Committees",
  description:
    "Each ALRION Pillar Capital strategy is a separate Delaware Limited Partnership governed by its own investment committee. No investment decision is made by a single individual.",
};

export default function CommitteePage() {
  return (
    <>
      <PageHero
        eyebrow="Investment Committees"
        title={
          <>
            Where conviction is
            <span className="text-gilt"> contested, then committed.</span>
          </>
        }
        intro="Each strategy is a separate Delaware Limited Partnership and is governed by its own investment committee. No investment decision is made by a single individual; committees debate conviction, structure and risk before capital is committed."
        crumbs={[{ label: "About", href: "/about" }, { label: "Investment Committees" }]}
      />

      {/* Committees by strategy (3.3) */}
      <Section tone="paper">
        <Reveal>
          <SectionHeading
            eyebrow="One Committee Per Strategy"
            title={<>Governed independently, held to one standard.</>}
            intro="Committees are structured to include at least one independent voice. No principal votes on their own portfolio company."
          />
        </Reveal>

        <div className="mt-14 overflow-hidden rounded-sm border border-line">
          {/* Header row (desktop) */}
          <div className="hidden bg-navy-950 px-6 py-4 text-xs font-semibold uppercase tracking-wide text-paper/70 md:grid md:grid-cols-12 md:gap-6">
            <span className="md:col-span-4">Strategy</span>
            <span className="md:col-span-3">Investment Committee</span>
            <span className="md:col-span-5">Composition Principle</span>
          </div>
          {INVESTMENT_COMMITTEES.map((c, i) => (
            <Reveal
              key={c.strategy}
              delay={i * 0.05}
              className="grid gap-2 border-t border-line bg-paper px-6 py-6 first:border-t-0 md:grid-cols-12 md:gap-6 md:border-t"
            >
              <div className="md:col-span-4">
                <p className="font-semibold text-navy-950">{c.strategy}</p>
              </div>
              <div className="md:col-span-3">
                <p className="text-sm text-gold-600">{c.committee}</p>
              </div>
              <div className="md:col-span-5">
                <p className="text-sm leading-relaxed text-slate-strong/80">{c.composition}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <p className="mt-8 max-w-3xl text-sm leading-relaxed text-slate-strong/60">
          Every commitment moves through a single, uncompromising discipline,
          regardless of the market it invests in. Committee charters, member
          biographies, and voting records for each strategy are available to Limited
          Partners via the Investor Portal.
        </p>
      </Section>

      {/* How decisions are made (stepped) */}
      <Section tone="navy">
        <Reveal>
          <SectionHeading
            light
            eyebrow="How Decisions Are Made"
            title={<>Four gates between an idea and our capital.</>}
            intro="A disciplined sequence ensures only theses that survive adversarial scrutiny earn a commitment."
          />
        </Reveal>
        <div className="mt-14 grid gap-px overflow-hidden rounded-sm border border-white/10 bg-white/10 md:grid-cols-2 lg:grid-cols-4">
          {DECISION_STEPS.map((s, i) => (
            <Reveal key={s.no} delay={(i % 4) * 0.07} className="bg-navy-950 p-8">
              <span className="font-serif text-3xl font-light text-gold-400">{s.no}</span>
              <h3 className="mt-5 text-lg font-semibold text-paper">{s.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-paper/65">{s.body}</p>
            </Reveal>
          ))}
        </div>
      </Section>

      <CtaBand
        title={<>Discipline you can rely on.</>}
        body="Learn how our committee process connects to firm-wide governance, oversight and transparent reporting."
        primary={{ href: "/governance", label: "Our governance" }}
        secondary={{ href: "/about/advisors", label: "Advisory board" }}
      />
    </>
  );
}
