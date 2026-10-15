import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { Section, FeatureGrid, CtaBand } from "@/components/sections/blocks";
import { SectionHeading } from "@/components/ui/primitives";
import { Reveal } from "@/components/ui/Reveal";
import { RECOGNITION_STANDARDS } from "@/lib/about";
import { GOVERNANCE_STANDARDS } from "@/lib/site";

export const metadata: Metadata = {
  title: "Recognition & Standards",
  description:
    "ALRION Pillar Capital holds every strategy to an institutional standard: Independent annual audits, independent third-party administration, independent valuation and independent governance across four Delaware Limited Partnerships.",
};

export default function AwardsPage() {
  return (
    <>
      <PageHero
        eyebrow="Recognition & Standards"
        title={
          <>
            Judged by our standards,
            <span className="text-gilt"> not our accolades.</span>
          </>
        }
        intro="We do not measure the platform in awards. We measure it in the standards we hold ourselves to: independent audits, independent administration and independent governance across every strategy."
        crumbs={[{ label: "About", href: "/about" }, { label: "Recognition & Standards" }]}
      />

      {/* — The standards we hold ————————————————————————————————— */}
      <Section tone="paper">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-20">
          <Reveal className="lg:col-span-5">
            <SectionHeading
              eyebrow="Our Standards"
              title={<>Recognition, on our terms.</>}
            />
          </Reveal>
          <Reveal delay={0.1} className="lg:col-span-7">
            <div className="space-y-6 text-lg leading-relaxed text-slate-strong/85">
              <p>
                For an institutional platform, credibility is not awarded, it is
                demonstrated. It is demonstrated through independent audits,
                independent administration and independent governance, applied
                consistently across four Delaware Limited Partnerships.
              </p>
              <p>
                The standards below are the ones we ask our partners to hold us
                to. They are structural, verifiable and applied without
                exception, because Conviction by Discipline is a claim only if it
                is checked.
              </p>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* — Standards grid ——————————————————————————————————————— */}
      <Section tone="cloud">
        <Reveal>
          <SectionHeading
            eyebrow="What We Hold Ourselves To"
            title={<>Independent checks, applied to every strategy.</>}
            intro="Each is a standard, not a slogan, and each applies across all four Limited Partnerships."
          />
        </Reveal>
        <div className="mt-14">
          <FeatureGrid columns={2} items={RECOGNITION_STANDARDS} />
        </div>
      </Section>

      {/* — Governance standards ————————————————————————————————— */}
      <Section tone="navy">
        <Reveal>
          <SectionHeading
            light
            eyebrow="Governance"
            title={<>The framework behind the standards.</>}
            intro="Our recognition rests on four governance commitments that define how the platform operates."
          />
        </Reveal>
        <div className="mt-14 grid gap-px overflow-hidden rounded-sm border border-white/10 bg-white/10 md:grid-cols-2 lg:grid-cols-4">
          {GOVERNANCE_STANDARDS.map((s, i) => (
            <Reveal key={s.title} delay={(i % 4) * 0.07} className="bg-navy-950 p-8">
              <span className="font-serif text-2xl text-gold-400">0{i + 1}</span>
              <h3 className="mt-5 text-lg font-semibold text-paper">{s.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-paper/65">{s.body}</p>
            </Reveal>
          ))}
        </div>
      </Section>

      <CtaBand
        title={<>The recognition that matters most is yours.</>}
        body="Speak with our team about how ALRION Pillar Capital aligns with your mandate and your standards."
        primary={{ href: "/contact", label: "Connect with us" }}
        secondary={{ href: "/governance", label: "Our governance" }}
      />
    </>
  );
}
