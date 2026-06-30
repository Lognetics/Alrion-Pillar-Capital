import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { Section } from "@/components/sections/blocks";
import { SectionHeading, Button } from "@/components/ui/primitives";
import { Reveal } from "@/components/ui/Reveal";
import { ValueGrid } from "@/components/about/ValueGrid";
import { FIRM } from "@/lib/site";
import { VALUES } from "@/lib/about";

export const metadata: Metadata = {
  title: "Core Values",
  description:
    "Rigor, integrity, courage, stewardship, collaboration and progress — the six core values that shape the culture and conduct of ALRION Pillar Capital.",
};

export default function ValuesPage() {
  return (
    <>
      <PageHero
        eyebrow="Core Values"
        title={
          <>
            The values that
            <span className="text-gilt"> shape our conduct.</span>
          </>
        }
        intro="Principles tell us what to do; values tell us how to be. These six commitments define the character of the firm — how our people work, decide and treat the world around them."
        crumbs={[{ label: "About", href: "/about" }, { label: "Core Values" }]}
      />

      <Section tone="paper">
        <Reveal>
          <SectionHeading
            eyebrow="What We Stand For"
            title={<>Six values, one culture.</>}
            intro="Each is a standard we hold ourselves to daily — visible in our research, our governance and our partnerships."
          />
        </Reveal>
        <div className="mt-14">
          <ValueGrid items={VALUES} />
        </div>
      </Section>

      {/* — Culture statement band ——————————————————————————————— */}
      <section className="relative overflow-hidden bg-navy-950 py-24 text-paper md:py-32">
        <div className="absolute inset-0 bg-grid opacity-40" />
        <div className="absolute -right-24 -top-20 h-80 w-80 rounded-full bg-gold-500/12 blur-[120px]" />
        <div className="shell relative grid gap-12 lg:grid-cols-12 lg:gap-20">
          <div className="lg:col-span-5">
            <Reveal>
              <SectionHeading light eyebrow="Our Culture" title={<>A culture built to challenge itself.</>} />
            </Reveal>
          </div>
          <Reveal delay={0.1} className="lg:col-span-7">
            <div className="space-y-6 text-lg leading-relaxed text-paper/75">
              <p>
                What distinguishes {FIRM.short} is not a single discipline but the
                deliberate collision of many. Portfolio managers sit beside the
                engineers who can read a technology&apos;s architecture; data
                scientists work alongside the analysts who model its economics.
              </p>
              <p>
                We organize ourselves to disagree productively. Investing, research,
                risk and governance functions operate with genuine independence, and
                the better argument — not seniority — carries the day. We treat being
                wrong as information, and we measure ourselves by the durable value
                and tangible good we help create.
              </p>
              <div className="flex flex-wrap gap-4 pt-2">
                <Button href="/careers" variant="ghost">Join the team</Button>
                <Button href="/about/principles" variant="ghost">Founding principles</Button>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
