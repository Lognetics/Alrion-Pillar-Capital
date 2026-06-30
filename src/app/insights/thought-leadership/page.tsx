import Link from "next/link";
import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { Section, CtaBand } from "@/components/sections/blocks";
import { SectionHeading } from "@/components/ui/primitives";
import { Reveal } from "@/components/ui/Reveal";
import { ESSAYS } from "@/lib/research";

export const metadata: Metadata = {
  title: "Thought Leadership",
  description:
    "Essays and perspectives from the partners of ALRION Pillar Capital on investing at the frontier of technology.",
};

function initials(name: string) {
  return name
    .replace(/^Dr\.\s/, "")
    .split(" ")
    .map((p) => p[0])
    .slice(0, 2)
    .join("");
}

export default function ThoughtLeadershipPage() {
  const featured = ESSAYS.find((e) => e.featured) ?? ESSAYS[0];
  const rest = ESSAYS.filter((e) => e !== featured);

  return (
    <>
      <PageHero
        eyebrow="Research & Insights"
        title={
          <>
            Perspectives from
            <span className="text-gilt"> the partnership.</span>
          </>
        }
        intro="Long-form essays and opinion from the people who allocate our capital — original arguments about investing where the science is genuinely hard."
        crumbs={[{ label: "Insights", href: "/insights" }, { label: "Thought Leadership" }]}
      />

      {/* Featured essay */}
      <Section tone="paper">
        <Reveal>
          {featured.slug ? (
            <Link
              href={`/insights/${featured.slug}`}
              className="group block overflow-hidden rounded-sm border border-line bg-navy-950 text-paper transition-all hover:border-gold-500"
            >
              <FeaturedBody essay={featured} linked />
            </Link>
          ) : (
            <div className="overflow-hidden rounded-sm border border-line bg-navy-950 text-paper">
              <FeaturedBody essay={featured} />
            </div>
          )}
        </Reveal>
      </Section>

      {/* Essay list */}
      <Section tone="cloud" className="!pt-0">
        <SectionHeading eyebrow="More essays" title="The op-ed shelf" />
        <div className="mt-12 divide-y divide-line border-y border-line">
          {rest.map((e, i) => {
            const Inner = (
              <div className="grid gap-6 py-8 md:grid-cols-12 md:items-center">
                <div className="md:col-span-8">
                  <p className="eyebrow text-gold-600">Essay</p>
                  <h3 className="mt-3 font-serif text-2xl font-light leading-snug text-navy-950 transition-colors group-hover:text-gold-600">
                    {e.title}
                  </h3>
                  <p className="mt-3 max-w-2xl text-sm leading-relaxed text-slate-strong/80">
                    {e.dek}
                  </p>
                </div>
                <div className="flex items-center gap-4 md:col-span-4 md:justify-end">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-navy-950 font-serif text-sm text-gold-400">
                    {initials(e.author)}
                  </span>
                  <div className="text-sm">
                    <p className="font-semibold text-navy-950">{e.author}</p>
                    <p className="text-xs text-slate-strong/60">{e.role}</p>
                    <p className="mt-1 text-xs text-slate-strong/45">
                      {e.date} · {e.readingTime}
                    </p>
                  </div>
                </div>
              </div>
            );
            return (
              <Reveal key={e.title} delay={i * 0.05}>
                {e.slug ? (
                  <Link href={`/insights/${e.slug}`} className="group block">
                    {Inner}
                  </Link>
                ) : (
                  <div className="group">{Inner}</div>
                )}
              </Reveal>
            );
          })}
        </div>
      </Section>

      <CtaBand
        title="Have a perspective worth debating?"
        body="Our research desk welcomes correspondence from allocators and operators at the frontier."
        primary={{ href: "/contact", label: "Get in touch" }}
        secondary={{ href: "/insights/podcasts", label: "Listen to the podcast" }}
      />
    </>
  );
}

function FeaturedBody({
  essay,
  linked,
}: {
  essay: (typeof ESSAYS)[number];
  linked?: boolean;
}) {
  return (
    <div className="relative grid gap-8 p-8 md:grid-cols-12 md:items-center md:p-12">
      <div className="absolute inset-0 bg-grid opacity-30" />
      <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-gold-500/15 blur-3xl" />
      <div className="relative md:col-span-8">
        <p className="eyebrow text-gold-400">Featured essay</p>
        <h2 className="mt-5 font-serif text-3xl font-light leading-tight md:text-4xl">
          {essay.title}
        </h2>
        <p className="mt-5 max-w-2xl text-pretty leading-relaxed text-paper/70">{essay.dek}</p>
        {linked && (
          <span className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-gold-300 transition-transform group-hover:translate-x-1">
            Read the essay →
          </span>
        )}
      </div>
      <div className="relative md:col-span-4 md:text-right">
        <span className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-white/10 font-serif text-xl text-gold-300 md:ml-auto">
          {initials(essay.author)}
        </span>
        <p className="mt-4 font-semibold text-paper">{essay.author}</p>
        <p className="text-sm text-paper/60">{essay.role}</p>
        <p className="mt-2 text-xs text-paper/40">
          {essay.date} · {essay.readingTime}
        </p>
      </div>
    </div>
  );
}
