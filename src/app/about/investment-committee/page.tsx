import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { Section, CtaBand } from "@/components/sections/blocks";
import { SectionHeading } from "@/components/ui/primitives";
import { Reveal } from "@/components/ui/Reveal";
import { BioGrid } from "@/components/about/BioGrid";
import { COMMITTEE, DECISION_STEPS } from "@/lib/about";

export const metadata: Metadata = {
  title: "Investment Committee",
  description:
    "Each ALRION Pillar Capital strategy has its own investment committee, a formal, adversarial process that holds every thesis to a standard of evidence before capital is committed.",
};

export default function CommitteePage() {
  return (
    <>
      <PageHero
        eyebrow="Investment Committee"
        title={
          <>
            Where conviction is
            <span className="text-gilt"> contested, then committed.</span>
          </>
        }
        intro="No capital leaves a strategy without passing through its investment committee, a formal body that debates conviction, structure and risk, and where the strongest argument, not the most senior voice, prevails."
        crumbs={[{ label: "About", href: "/about" }, { label: "Investment Committee" }]}
      />

      {/* — How the committee works ——————————————————————————————— */}
      <Section tone="paper">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-20">
          <Reveal className="lg:col-span-5">
            <SectionHeading
              eyebrow="How It Works"
              title={<>A single gate for every commitment.</>}
            />
          </Reveal>
          <Reveal delay={0.1} className="lg:col-span-7">
            <div className="space-y-6 text-lg leading-relaxed text-slate-strong/85">
              <p>
                Each strategy's committee applies one rigorous framework to
                opportunities as different as a liquid quantitative trade and a
                multi-year infrastructure investment. Its purpose is not to
                rubber-stamp conviction but to test it.
              </p>
              <p>
                Every thesis arrives backed by the diligence of specialists, and
                every thesis meets an assigned challenger whose job is to argue the
                bear case. The Chief Risk Officer holds an independent voice, and,
                where warranted, an independent veto, on every decision.
              </p>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* — How decisions are made (stepped) —————————————————————— */}
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

      {/* — Committee members ——————————————————————————————————— */}
      <Section tone="paper">
        <Reveal>
          <SectionHeading
            eyebrow="The Committee"
            title={<>The voices in the room.</>}
            intro="A committee drawing on each strategy's conviction alongside independent risk and compliance perspectives."
          />
        </Reveal>
        <div className="mt-14">
          <BioGrid items={COMMITTEE} columns={3} />
        </div>
        <p className="mt-12 text-xs text-slate-strong/50">
          Team members shown are representative and illustrative, pending final
          disclosure.
        </p>
      </Section>

      <CtaBand
        title={<>Discipline you can rely on.</>}
        body="Learn how our committee process connects to firm-wide governance, oversight and transparent reporting."
        primary={{ href: "/governance", label: "Our governance" }}
        secondary={{ href: "/process", label: "Our process" }}
      />
    </>
  );
}
