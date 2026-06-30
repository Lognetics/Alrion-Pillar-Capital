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
    "From a single research desk in 2019 to a four-division global manager, the story of ALRION Pillar Capital is one of science before capital and conviction earned through evidence.",
};

export default function StoryPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Story"
        title={
          <>
            From one research desk to
            <span className="text-gilt"> capital for the frontier.</span>
          </>
        }
        intro="The history of ALRION Pillar Capital is a chronicle of conviction — a firm built, year by year, on the belief that the world's most consequential technologies demand capital grounded in genuine understanding."
        crumbs={[{ label: "About", href: "/about" }, { label: "Our Story" }]}
      />

      {/* — Origins narrative ————————————————————————————————— */}
      <Section tone="paper">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-20">
          <Reveal className="lg:col-span-5">
            <SectionHeading
              eyebrow="The Origin"
              title={<>It began with a frustration, and a conviction.</>}
            />
          </Reveal>
          <Reveal delay={0.1} className="lg:col-span-7">
            <div className="space-y-6 text-lg leading-relaxed text-slate-strong/85">
              <p>
                In {FIRM.established}, a small group of investors, engineers and
                scientists shared a frustration with how capital was being
                allocated to the most important technologies of the era. Too much
                money was chasing narrative; too little was grounded in genuine
                technical understanding.
              </p>
              <p>
                They set out to build a different kind of institution — one where
                the people evaluating a breakthrough could read the research paper,
                interrogate the architecture and model the economics with equal
                fluency. From a single research desk, {FIRM.short} grew into a
                multi-platform manager spanning public markets, private equity,
                venture and inclusive impact capital.
              </p>
              <p>
                What follows is the record of that journey — and of a founding
                ethos that endures in every mandate the firm manages today.
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
            title={<>A history written in conviction.</>}
            intro="Each chapter advanced a single methodology — science before capital — into a new corner of the global economy."
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
              We did not set out to build the largest firm. We set out to build the
              most disciplined one — a place where conviction is always earned, never
              assumed.
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
        title={<>The next chapter is being written now.</>}
        body="Explore the principles and people that carry our founding ethos forward — or speak with our team about partnering on what comes next."
        primary={{ href: "/about/leadership", label: "Meet the team" }}
        secondary={{ href: "/contact", label: "Connect with us" }}
      />
    </>
  );
}
