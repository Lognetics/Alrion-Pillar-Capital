import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { Section, CtaBand } from "@/components/sections/blocks";
import { SectionHeading } from "@/components/ui/primitives";
import { Reveal } from "@/components/ui/Reveal";
import { UPCOMING_EVENTS, REPLAYS } from "@/lib/research";

export const metadata: Metadata = {
  title: "Webinars & Events",
  description:
    "Live briefings, roundtables and on-demand replays from ALRION Pillar Capital's research desk.",
};

export default function WebinarsPage() {
  return (
    <>
      <PageHero
        eyebrow="Live & On-Demand"
        title={
          <>
            Webinars &
            <span className="text-gilt"> events.</span>
          </>
        }
        intro="Where our research desk meets allocators in real time — live briefings on the house view, closed-door roundtables and a library of replays."
        crumbs={[{ label: "Insights", href: "/insights" }, { label: "Webinars & Events" }]}
      />

      {/* Upcoming */}
      <Section tone="paper">
        <SectionHeading
          eyebrow="Upcoming"
          title="On the calendar"
          intro="Registration affordances are illustrative. Dates and speakers are illustrative."
        />
        <div className="mt-12 space-y-4">
          {UPCOMING_EVENTS.map((e, i) => (
            <Reveal key={e.title} delay={i * 0.06}>
              <div className="group grid items-center gap-6 rounded-sm border border-line bg-paper p-6 transition-all hover:border-gold-500 hover:shadow-[0_24px_60px_-36px] hover:shadow-navy-950/40 md:grid-cols-12">
                {/* date tile */}
                <div className="md:col-span-2">
                  <div className="flex w-20 flex-col overflow-hidden rounded-sm border border-line text-center">
                    <span className="bg-navy-950 py-1 text-[0.7rem] font-semibold tracking-widest text-gold-400">
                      {e.month}
                    </span>
                    <span className="bg-paper py-2 font-serif text-3xl font-light text-navy-950">
                      {e.day}
                    </span>
                    <span className="bg-cloud py-1 text-[0.7rem] text-slate-strong/55">
                      {e.year}
                    </span>
                  </div>
                </div>
                <div className="md:col-span-7">
                  <p className="eyebrow text-gold-600">{e.format}</p>
                  <h3 className="mt-2 font-serif text-2xl font-light leading-snug text-navy-950">
                    {e.title}
                  </h3>
                  <p className="mt-2 text-sm text-slate-strong/70">{e.blurb}</p>
                  <p className="mt-2 text-xs font-semibold text-slate-strong/55">
                    Speakers: {e.speakers}
                  </p>
                </div>
                <div className="md:col-span-3 md:text-right">
                  <button
                    type="button"
                    disabled
                    className="inline-flex cursor-not-allowed items-center gap-2 rounded-sm bg-navy-900 px-6 py-3 text-sm font-semibold text-paper/70"
                    title="Registration opening soon"
                  >
                    Register →
                  </button>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Replays */}
      <Section tone="cloud">
        <SectionHeading eyebrow="On demand" title="Replays" />
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {REPLAYS.map((r, i) => (
            <Reveal key={r.title} delay={(i % 2) * 0.07}>
              <div className="group flex items-center gap-5 rounded-sm border border-line bg-paper p-6 transition-colors hover:border-gold-500">
                <button
                  type="button"
                  className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-line text-navy-900 transition-colors group-hover:border-gold-500 group-hover:text-gold-600"
                  aria-label={`Play replay: ${r.title}`}
                >
                  <span className="ml-0.5">▶</span>
                </button>
                <div className="flex-1">
                  <h3 className="font-serif text-lg font-light leading-snug text-navy-950">
                    {r.title}
                  </h3>
                  <p className="mt-1 text-xs text-slate-strong/60">
                    {r.speakers} · {r.date} · {r.duration}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <CtaBand
        title="Get an invitation to the next briefing."
        body="Subscribers and registered partners receive event invitations first."
        primary={{ href: "/insights/newsletter", label: "Subscribe" }}
        secondary={{ href: "/contact", label: "Contact the desk" }}
      />
    </>
  );
}
