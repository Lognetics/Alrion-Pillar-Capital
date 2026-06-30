import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { Section, CtaBand } from "@/components/sections/blocks";
import { SectionHeading } from "@/components/ui/primitives";
import { Reveal } from "@/components/ui/Reveal";
import { Counter } from "@/components/ui/Counter";
import { AwardsList } from "@/components/about/AwardsList";
import { AWARDS, AWARD_STATS } from "@/lib/about";

export const metadata: Metadata = {
  title: "Recognition & Awards",
  description:
    "Recognition from industry bodies for ALRION Pillar Capital's work across hedge fund, private equity, venture and community equity — and for its standard of governance. Illustrative.",
};

export default function AwardsPage() {
  return (
    <>
      <PageHero
        eyebrow="Recognition & Awards"
        title={
          <>
            Recognition earned
            <span className="text-gilt"> at the frontier.</span>
          </>
        }
        intro="We do not invest for accolades — but external recognition affirms that discipline and impact can compound together. The honours below span our four platforms and our standard of governance."
        crumbs={[{ label: "About", href: "/about" }, { label: "Recognition & Awards" }]}
      />

      {/* — Recognition stats row ———————————————————————————————— */}
      <section className="relative overflow-hidden bg-navy-950 py-20 text-paper md:py-24">
        <div className="absolute inset-0 bg-grid opacity-40" />
        <div className="absolute left-1/2 top-0 h-px w-3/4 -translate-x-1/2 bg-gradient-to-r from-transparent via-gold-500/40 to-transparent" />
        <div className="shell relative">
          <div className="grid gap-px overflow-hidden rounded-sm border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
            {AWARD_STATS.map((s, i) => (
              <Reveal key={s.label} delay={i * 0.08} className="bg-navy-950 p-8 md:p-10">
                <p className="font-serif text-4xl font-light text-gilt md:text-5xl">
                  <Counter value={s.value} suffix={s.suffix} />
                </p>
                <p className="mt-5 text-sm font-semibold text-paper">{s.label}</p>
                <p className="mt-1 text-xs leading-relaxed text-paper/50">{s.sub}</p>
              </Reveal>
            ))}
          </div>
          <p className="mt-8 text-center text-xs text-paper/40">
            Illustrative figures presented for context.
          </p>
        </div>
      </section>

      {/* — Awards by year ——————————————————————————————————————— */}
      <Section tone="paper">
        <Reveal>
          <SectionHeading
            eyebrow="The Ledger"
            title={<>A record of recognition.</>}
            intro="Honours by year, from our earliest launch awards to the present day."
          />
        </Reveal>
        <div className="mt-16">
          <AwardsList items={AWARDS} />
        </div>
        <p className="mt-14 text-xs text-slate-strong/50">
          Award names, categories and bodies shown are illustrative and presented for
          context only.
        </p>
      </Section>

      <CtaBand
        title={<>The recognition that matters most is yours.</>}
        body="Speak with our investor relations team about how ALRION Pillar Capital aligns with your mandate and your values."
        primary={{ href: "/contact", label: "Connect with us" }}
        secondary={{ href: "/about", label: "About the firm" }}
      />
    </>
  );
}
