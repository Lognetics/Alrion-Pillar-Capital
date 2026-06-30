import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { Section, CtaBand } from "@/components/sections/blocks";
import { SectionHeading } from "@/components/ui/primitives";
import { Reveal } from "@/components/ui/Reveal";
import { FEATURED_INTERVIEW, INTERVIEWS } from "@/lib/media";
import { InterviewCard, PlayGlyph } from "@/components/media/PlayCard";

export const metadata: Metadata = {
  title: "Interviews",
  description:
    "Conversations with the people behind ALRION Pillar Capital — on frontier investing, AI-driven quantitative models, impact, venture and institutional governance.",
};

export default function InterviewsPage() {
  return (
    <>
      <PageHero
        eyebrow="Media · Interviews"
        title={
          <>
            Conversations from
            <span className="text-gilt"> the frontier.</span>
          </>
        }
        intro="Our partners and specialists, in their own words — on the ideas, models and convictions that define how we invest."
        crumbs={[{ label: "Media", href: "/media" }, { label: "Interviews" }]}
      />

      {/* — Featured interview ————————————————————————————————— */}
      <Section tone="paper">
        <Reveal>
          <article className="group grid cursor-pointer overflow-hidden rounded-sm border border-line lg:grid-cols-2">
            <div className="relative flex min-h-[20rem] items-center justify-center bg-navy-950 p-10">
              <div className="absolute inset-0 bg-grid opacity-30" />
              <div className="absolute -right-16 -top-12 h-56 w-56 rounded-full bg-gold-500/15 blur-3xl" />
              <span className="relative flex h-20 w-20 items-center justify-center rounded-full border border-white/20 text-paper transition-all duration-500 group-hover:scale-105 group-hover:border-gold-400 group-hover:bg-gold-500 group-hover:text-navy-950">
                <PlayGlyph size={24} />
              </span>
              <span className="absolute bottom-6 left-10 text-xs uppercase tracking-[0.2em] text-paper/45">
                {FEATURED_INTERVIEW.duration}
              </span>
            </div>
            <div className="flex flex-col justify-center bg-paper p-8 md:p-12">
              <div className="flex items-center gap-3">
                <span className="rounded-full bg-gold-500/15 px-3 py-1 text-[0.7rem] font-semibold uppercase tracking-wide text-gold-600">
                  Featured
                </span>
                <span className="eyebrow text-gold-600">{FEATURED_INTERVIEW.topic}</span>
              </div>
              <h2 className="mt-6 text-balance font-serif text-3xl font-light leading-tight text-navy-950">
                {FEATURED_INTERVIEW.title}
              </h2>
              <div className="mt-8 border-t border-line pt-6">
                <p className="font-semibold text-navy-900">{FEATURED_INTERVIEW.speaker}</p>
                <p className="text-sm text-slate-strong/70">{FEATURED_INTERVIEW.role}</p>
                <p className="mt-3 text-xs text-slate-strong/55">
                  {FEATURED_INTERVIEW.outlet} · {FEATURED_INTERVIEW.date}
                </p>
              </div>
            </div>
          </article>
        </Reveal>
      </Section>

      {/* — Interview library ——————————————————————————————————— */}
      <Section tone="cloud">
        <Reveal>
          <SectionHeading
            eyebrow="Interview Library"
            title={<>More conversations, on demand.</>}
            intro="A selection of recent interviews across our platforms, research and governance."
          />
        </Reveal>
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {INTERVIEWS.map((item, i) => (
            <Reveal key={item.title} delay={(i % 3) * 0.07} className="h-full">
              <InterviewCard item={item} />
            </Reveal>
          ))}
        </div>
        <Reveal delay={0.1}>
          <p className="mt-10 text-sm leading-relaxed text-slate-strong/60">
            Play affordances are illustrative for this preview; video playback is not
            enabled here.
          </p>
        </Reveal>
      </Section>

      <CtaBand
        title={<>Request an interview or briefing.</>}
        body="Our media team can arrange conversations with the firm's partners and specialists."
        primary={{ href: "/media/resources", label: "Media resources" }}
        secondary={{ href: "/media/news", label: "Latest news" }}
      />
    </>
  );
}
