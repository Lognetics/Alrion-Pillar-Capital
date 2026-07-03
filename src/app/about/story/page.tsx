import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { Section, CtaBand } from "@/components/sections/blocks";
import { SectionHeading } from "@/components/ui/primitives";
import { Reveal } from "@/components/ui/Reveal";
import { Timeline } from "@/components/about/Timeline";
import { FIRM } from "@/lib/site";
import { MILESTONES } from "@/lib/about";

export const metadata: Metadata = {
  title: "Our Story",
  description:
    "ALRION Pillar Capital was conceived and launched in 2024 in New York as four independent Delaware Limited Partnerships, a platform, not a product, built on Independence by Design and Conviction by Discipline.",
};

export default function StoryPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Story"
        title={
          <>
            Conceived and launched
            <span className="text-gilt"> in 2024.</span>
          </>
        }
        intro="ALRION Pillar Capital was designed from the outset as a platform, not a product: four autonomous strategies, one rigorous framework, and a singular standard of fiduciary care."
        crumbs={[{ label: "About", href: "/about" }, { label: "Our Story" }]}
      />

      {/* — Origins narrative ————————————————————————————————— */}
      <Section tone="paper">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-20">
          <Reveal className="lg:col-span-5">
            <SectionHeading
              eyebrow="The Origin"
              title={<>It began with a conviction about structure.</>}
            />
          </Reveal>
          <Reveal delay={0.1} className="lg:col-span-7">
            <div className="space-y-6 text-lg leading-relaxed text-slate-strong/85">
              <p>
                In {FIRM.established}, {FIRM.short} was conceived in New York
                around a single conviction: that serious allocators deserve a
                platform where independence is engineered into the structure and
                conviction is earned through discipline.
              </p>
              <p>
                Rather than a single fund, the platform was designed as four
                autonomous strategies, each a separate Delaware Limited
                Partnership with its own investment committee and risk framework,
                bound together by one rigorous framework of governance and
                oversight.
              </p>
              <p>
                What follows is the record of that founding, and of a logic that
                endures in every strategy the platform runs today.
              </p>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* — Timeline ——————————————————————————————————————————— */}
      <Section tone="cloud">
        <Reveal>
          <SectionHeading
            eyebrow="Milestones"
            title={<>A platform, established in 2024.</>}
            intro="Each step reflected one idea: four autonomous strategies, one rigorous framework of fiduciary care."
          />
        </Reveal>
        <div className="mt-16">
          <Timeline items={MILESTONES} />
        </div>
      </Section>

      {/* — Founder's note pull quote ——————————————————————————— */}
      <section className="relative overflow-hidden bg-navy-950 py-24 text-paper md:py-32">
        <div className="absolute inset-0 bg-grid opacity-40" />
        <div className="absolute -left-24 top-1/3 h-80 w-80 rounded-full bg-gold-500/12 blur-[120px]" />
        <div className="shell relative">
          <Reveal className="mx-auto max-w-3xl text-center">
            <span className="font-serif text-7xl leading-none text-gold-500/40">&ldquo;</span>
            <blockquote className="-mt-6 font-serif text-3xl font-light leading-snug text-paper md:text-4xl">
              We did not set out to build a product. We set out to build a
              platform, where independence is by design and conviction is by
              discipline.
            </blockquote>
            <div className="mt-10 flex items-center justify-center gap-4">
              <span className="h-px w-10 bg-gold-500" />
              <div className="text-left">
                <p className="text-sm font-semibold text-paper">Adrian Voss</p>
                <p className="text-xs text-paper/50">Founder &amp; Chief Executive Officer</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <CtaBand
        title={<>The platform is being built now.</>}
        body="Explore the principles and people behind the four strategies, or speak with our team about partnering with us."
        primary={{ href: "/about/leadership", label: "Meet the team" }}
        secondary={{ href: "/contact", label: "Connect with us" }}
      />
    </>
  );
}
