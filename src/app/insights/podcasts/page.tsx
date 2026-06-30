import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { Section, CtaBand } from "@/components/sections/blocks";
import { SectionHeading } from "@/components/ui/primitives";
import { Reveal } from "@/components/ui/Reveal";
import { EPISODES } from "@/lib/research";

export const metadata: Metadata = {
  title: "Podcasts",
  description:
    "Capital for the Frontier — the ALRION Pillar Capital podcast. Conversations with our partners on investing at the edge of technology.",
};

const PLATFORMS = ["Apple Podcasts", "Spotify", "YouTube", "RSS"];

export default function PodcastsPage() {
  const latest = EPISODES[0];

  return (
    <>
      <PageHero
        eyebrow="Audio"
        title={
          <>
            Capital for
            <span className="text-gilt"> the Frontier.</span>
          </>
        }
        intro="Our podcast brings the research desk into conversation — unscripted discussions about compute, energy, biotech and the discipline behind frontier investing."
        crumbs={[{ label: "Insights", href: "/insights" }, { label: "Podcasts" }]}
      >
        <div className="flex flex-wrap items-center gap-3">
          <span className="text-xs font-semibold uppercase tracking-wider text-paper/55">
            Subscribe on
          </span>
          {PLATFORMS.map((p) => (
            <span
              key={p}
              className="cursor-default rounded-full border border-white/15 px-4 py-2 text-xs font-semibold text-paper/70 transition-colors hover:border-gold-400 hover:text-gold-300"
            >
              {p}
            </span>
          ))}
        </div>
      </PageHero>

      {/* Latest episode hero */}
      <Section tone="paper">
        <Reveal className="overflow-hidden rounded-sm border border-line bg-cloud">
          <div className="grid gap-8 p-8 md:grid-cols-12 md:items-center md:p-12">
            <div className="md:col-span-3">
              <button
                type="button"
                className="group flex h-32 w-32 items-center justify-center rounded-full bg-navy-950 text-paper transition-transform hover:scale-105"
                aria-label="Play latest episode"
              >
                <span className="ml-1 text-3xl text-gold-400 transition-transform group-hover:scale-110">
                  ▶
                </span>
              </button>
            </div>
            <div className="md:col-span-9">
              <p className="eyebrow text-gold-600">
                Latest · Episode {latest.no}
              </p>
              <h2 className="mt-4 font-serif text-3xl font-light leading-tight text-navy-950 md:text-4xl">
                {latest.title}
              </h2>
              <p className="mt-4 text-slate-strong/80">
                With <span className="font-semibold text-navy-950">{latest.guest}</span>,{" "}
                {latest.guestRole}.
              </p>
              <p className="mt-2 text-sm text-slate-strong/55">
                {latest.date} · {latest.duration}
              </p>
            </div>
          </div>
        </Reveal>
      </Section>

      {/* Episode list */}
      <Section tone="paper" className="!pt-0">
        <SectionHeading eyebrow="All episodes" title="The full feed" />
        <div className="mt-12 overflow-hidden rounded-sm border border-line">
          {EPISODES.map((ep, i) => (
            <Reveal
              key={ep.no}
              delay={(i % 4) * 0.04}
              className="group flex items-center gap-6 border-b border-line bg-paper px-6 py-6 transition-colors last:border-b-0 hover:bg-cloud"
            >
              <button
                type="button"
                className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-line text-navy-900 transition-colors group-hover:border-gold-500 group-hover:text-gold-600"
                aria-label={`Play episode ${ep.no}`}
              >
                <span className="ml-0.5">▶</span>
              </button>
              <span className="hidden w-10 shrink-0 font-serif text-2xl font-light text-gold-500 sm:block">
                {ep.no}
              </span>
              <div className="flex-1">
                <h3 className="font-serif text-xl font-light leading-snug text-navy-950">
                  {ep.title}
                </h3>
                <p className="mt-1 text-sm text-slate-strong/70">
                  {ep.guest} · {ep.guestRole}
                </p>
              </div>
              <div className="hidden shrink-0 text-right text-xs text-slate-strong/55 md:block">
                <p>{ep.date}</p>
                <p className="mt-1 font-semibold text-navy-900">{ep.duration}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <p className="mt-6 text-xs text-slate-strong/50">
          Players are illustrative. Audio is not yet available.
        </p>
      </Section>

      <CtaBand
        title="Listen wherever you get your podcasts."
        body="New episodes monthly. Subscribe to be notified the moment they drop."
        primary={{ href: "/insights/newsletter", label: "Subscribe" }}
        secondary={{ href: "/insights/webinars", label: "Live events" }}
      />
    </>
  );
}
