import Link from "next/link";
import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { Section, CtaBand } from "@/components/sections/blocks";
import { SectionHeading } from "@/components/ui/primitives";
import { Reveal } from "@/components/ui/Reveal";
import { INSIGHTS } from "@/lib/insights";
import { COMMENTARY } from "@/lib/research";

export const metadata: Metadata = {
  title: "Articles & Commentary",
  description:
    "Short-form articles and timely commentary from the ALRION Pillar Capital research desk on frontier-technology markets.",
};

type Item = {
  category: string;
  title: string;
  excerpt: string;
  date: string;
  readingTime: string;
  href?: string;
};

export default function ArticlesPage() {
  const items: Item[] = [
    ...INSIGHTS.map((i) => ({
      category: i.category,
      title: i.title,
      excerpt: i.excerpt,
      date: i.date,
      readingTime: i.readingTime,
      href: `/insights/${i.slug}`,
    })),
    ...COMMENTARY.map((c) => ({ ...c })),
  ];

  const chips = Array.from(new Set(items.map((i) => i.category)));

  return (
    <>
      <PageHero
        eyebrow="Research & Insights"
        title={
          <>
            Articles &
            <span className="text-gilt"> commentary.</span>
          </>
        }
        intro="Shorter, more frequent writing from the desk — timely reactions, field notes and the small ideas that often precede a full thesis."
        crumbs={[{ label: "Insights", href: "/insights" }, { label: "Articles" }]}
      />

      {/* Category chips */}
      <Section tone="paper" className="!pb-0">
        <Reveal className="flex flex-wrap gap-3">
          <span className="rounded-full bg-navy-950 px-4 py-2 text-xs font-semibold tracking-wide text-paper">
            All
          </span>
          {chips.map((c) => (
            <span
              key={c}
              className="rounded-full border border-line px-4 py-2 text-xs font-semibold tracking-wide text-slate-strong/75 transition-colors hover:border-gold-500 hover:text-gold-600"
            >
              {c}
            </span>
          ))}
        </Reveal>
      </Section>

      {/* Blog-style index */}
      <Section tone="paper">
        <div className="divide-y divide-line border-y border-line">
          {items.map((it, i) => {
            const Inner = (
              <article className="grid gap-4 py-8 md:grid-cols-12 md:items-baseline">
                <div className="md:col-span-3">
                  <p className="eyebrow text-gold-600">{it.category}</p>
                  <p className="mt-2 text-xs text-slate-strong/50">
                    {it.date} · {it.readingTime}
                  </p>
                </div>
                <div className="md:col-span-9">
                  <h3 className="font-serif text-2xl font-light leading-snug text-navy-950 transition-colors group-hover:text-gold-600">
                    {it.title}
                  </h3>
                  <p className="mt-3 max-w-3xl text-sm leading-relaxed text-slate-strong/80">
                    {it.excerpt}
                  </p>
                  {it.href && (
                    <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-navy-900 transition-transform group-hover:translate-x-1 group-hover:text-gold-600">
                      Read article →
                    </span>
                  )}
                </div>
              </article>
            );
            return (
              <Reveal key={it.title} delay={(i % 4) * 0.04}>
                {it.href ? (
                  <Link href={it.href} className="group block">
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
        title="Never miss a piece."
        body="Our commentary publishes weekly. Subscribers get it first."
        primary={{ href: "/insights/newsletter", label: "Subscribe" }}
        secondary={{ href: "/insights", label: "All insights" }}
      />
    </>
  );
}
