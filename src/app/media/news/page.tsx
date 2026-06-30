import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { Section, CtaBand } from "@/components/sections/blocks";
import { SectionHeading } from "@/components/ui/primitives";
import { Reveal } from "@/components/ui/Reveal";
import { FEATURED_NEWS, NEWS_ITEMS } from "@/lib/media";

export const metadata: Metadata = {
  title: "Latest News",
  description:
    "The latest news from ALRION Pillar Capital — firm milestones, fund activity, research and impact across our four investment platforms.",
};

export default function NewsPage() {
  return (
    <>
      <PageHero
        eyebrow="Media · Latest News"
        title={
          <>
            The latest from
            <span className="text-gilt"> ALRION Pillar Capital.</span>
          </>
        }
        intro="Milestones, fund activity, research and impact — reported as it happens, from across our four investment platforms and our global network."
        crumbs={[{ label: "Media", href: "/media" }, { label: "Latest News" }]}
      />

      {/* — Featured story ————————————————————————————————————— */}
      <Section tone="paper">
        <Reveal>
          <article className="relative overflow-hidden rounded-sm bg-navy-950 p-8 text-paper md:p-14">
            <div className="absolute inset-0 bg-grid opacity-30" />
            <div className="absolute -right-20 -top-16 h-64 w-64 rounded-full bg-gold-500/15 blur-3xl" />
            <div className="relative max-w-3xl">
              <div className="flex flex-wrap items-center gap-4 text-xs">
                <span className="rounded-full bg-gold-500 px-3 py-1 font-semibold uppercase tracking-wide text-navy-950">
                  Featured
                </span>
                <span className="uppercase tracking-[0.18em] text-gold-400">{FEATURED_NEWS.category}</span>
                <span className="text-paper/45">{FEATURED_NEWS.date}</span>
              </div>
              <h2 className="mt-6 text-balance font-serif text-3xl font-light leading-tight md:text-4xl">
                {FEATURED_NEWS.title}
              </h2>
              <p className="mt-6 text-pretty leading-relaxed text-paper/70">{FEATURED_NEWS.excerpt}</p>
              <div className="mt-8 flex items-center gap-4 text-xs text-paper/50">
                <span>{FEATURED_NEWS.readTime}</span>
                <span className="h-px w-8 bg-gold-500/60" />
                <span className="font-semibold text-gold-300">Read story</span>
              </div>
            </div>
          </article>
        </Reveal>
      </Section>

      {/* — News index ————————————————————————————————————————— */}
      <Section tone="cloud">
        <Reveal>
          <SectionHeading
            eyebrow="Newsroom"
            title={<>Everything else, in order.</>}
            intro="A chronological index of recent announcements and updates from the firm."
          />
        </Reveal>
        <div className="mt-14 overflow-hidden rounded-sm border border-line bg-paper">
          {NEWS_ITEMS.map((item, i) => (
            <Reveal key={item.title} delay={(i % 4) * 0.05}>
              <article className="group grid cursor-pointer gap-4 border-t border-line p-6 transition-colors first:border-t-0 hover:bg-cloud/60 md:grid-cols-12 md:items-center md:gap-6 md:p-8">
                <div className="md:col-span-2">
                  <p className="text-sm font-medium text-navy-900">{item.date}</p>
                  <span className="mt-1 inline-block text-[0.7rem] uppercase tracking-wide text-gold-600">
                    {item.category}
                  </span>
                </div>
                <div className="md:col-span-8">
                  <h3 className="text-lg font-semibold text-navy-950 transition-colors group-hover:text-gold-600">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-strong/75">{item.excerpt}</p>
                </div>
                <div className="flex items-center justify-between md:col-span-2 md:justify-end md:gap-3">
                  <span className="text-xs text-slate-strong/55">{item.readTime}</span>
                  <span className="text-gold-500 transition-transform duration-500 group-hover:translate-x-1">
                    →
                  </span>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Section>

      <CtaBand
        title={<>Reporting on Alrion?</>}
        body="Our media team is available for press enquiries, interviews and background. Reach us directly."
        primary={{ href: "/media/resources", label: "Media resources" }}
        secondary={{ href: "/media/interviews", label: "Watch interviews" }}
      />
    </>
  );
}
