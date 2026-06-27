import Link from "next/link";
import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { Section, CtaBand } from "@/components/sections/blocks";
import { SectionHeading } from "@/components/ui/primitives";
import { Reveal } from "@/components/ui/Reveal";
import { INSIGHTS } from "@/lib/insights";
import { FIRM } from "@/lib/site";

export const metadata: Metadata = {
  title: "Insights",
  description:
    "Research, market intelligence and thought leadership from ALRION Pillar Capital — our house view on the technologies and capital flows shaping the next economy.",
};

const CATEGORIES = [
  "Market Intelligence",
  "Economic Outlook",
  "Investment Themes",
  "White Papers",
  "ESG",
  "Thought Leadership",
];

export default function InsightsPage() {
  const featured = INSIGHTS.find((i) => i.feature) ?? INSIGHTS[0];
  const rest = INSIGHTS.filter((i) => i.slug !== featured.slug);

  return (
    <>
      <PageHero
        eyebrow="Research & Insights"
        title={
          <>
            The thinking behind
            <span className="text-gilt"> conviction.</span>
          </>
        }
        intro="Our research desk publishes the analysis that informs how we allocate capital — house views on frontier technology, market intelligence and the long-term themes reshaping the global economy."
        crumbs={[{ label: "Insights" }]}
      />

      {/* Category chips */}
      <Section tone="paper" className="!pb-0">
        <Reveal className="flex flex-wrap gap-3">
          {CATEGORIES.map((c) => (
            <span
              key={c}
              className="rounded-full border border-line px-4 py-2 text-xs font-semibold tracking-wide text-slate-strong/75 transition-colors hover:border-gold-500 hover:text-gold-600"
            >
              {c}
            </span>
          ))}
        </Reveal>
      </Section>

      {/* Featured insight */}
      <Section tone="paper">
        <Reveal>
          <Link
            href={`/insights/${featured.slug}`}
            className="group relative grid overflow-hidden rounded-sm bg-navy-950 text-paper lg:grid-cols-2"
          >
            <div className="absolute inset-0 bg-grid opacity-30" />
            <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-gold-500/15 blur-3xl" />
            <div className="relative flex flex-col justify-center p-10 md:p-14">
              <span className="eyebrow text-gold-400">Featured · {featured.category}</span>
              <h2 className="mt-6 font-serif text-3xl font-light leading-tight md:text-4xl">
                {featured.title}
              </h2>
              <p className="mt-6 max-w-xl text-pretty leading-relaxed text-paper/70">
                {featured.excerpt}
              </p>
              <div className="mt-8 flex items-center gap-4 text-xs text-paper/45">
                <span>{featured.date}</span>
                <span className="h-1 w-1 rounded-full bg-gold-500" />
                <span>{featured.readingTime} read</span>
              </div>
              <span className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-paper transition-colors group-hover:text-gold-300">
                Read the analysis
                <span className="transition-transform duration-500 group-hover:translate-x-1">
                  →
                </span>
              </span>
            </div>
            <div className="relative hidden items-end justify-end p-14 lg:flex">
              <span className="font-serif text-[9rem] font-light leading-none text-white/5 transition-colors duration-500 group-hover:text-gold-500/20">
                {featured.readingTime.split(" ")[0]}
                <span className="text-3xl">min</span>
              </span>
            </div>
          </Link>
        </Reveal>
      </Section>

      {/* All insights grid */}
      <Section tone="cloud">
        <Reveal>
          <SectionHeading
            eyebrow="Latest research"
            title={<>From the desk of ALRION Pillar Capital.</>}
          />
        </Reveal>
        <div className="mt-12 grid gap-px overflow-hidden rounded-sm border border-line bg-line md:grid-cols-2 lg:grid-cols-3">
          {rest.map((insight, i) => (
            <Reveal key={insight.slug} delay={(i % 3) * 0.07} className="group">
              <Link
                href={`/insights/${insight.slug}`}
                className="flex h-full flex-col bg-paper p-8 transition-colors duration-500 hover:bg-navy-950"
              >
                <span className="eyebrow text-gold-600 transition-colors duration-500 group-hover:text-gold-300">
                  {insight.category}
                </span>
                <h3 className="mt-4 font-serif text-xl font-light leading-snug text-navy-950 transition-colors duration-500 group-hover:text-paper">
                  {insight.title}
                </h3>
                <p className="mt-4 flex-1 text-sm leading-relaxed text-slate-strong/75 transition-colors duration-500 group-hover:text-paper/65">
                  {insight.excerpt}
                </p>
                <div className="mt-8 flex items-center gap-3 border-t border-line pt-5 text-xs text-slate-strong/55 transition-colors duration-500 group-hover:border-white/10 group-hover:text-paper/45">
                  <span>{insight.date}</span>
                  <span className="h-1 w-1 rounded-full bg-gold-500" />
                  <span>{insight.readingTime} read</span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Newsletter band */}
      <Section tone="navy">
        <Reveal className="relative overflow-hidden rounded-sm border border-white/10 bg-ink px-8 py-14 md:px-14">
          <div className="absolute inset-0 bg-grid opacity-20" />
          <div className="relative grid gap-8 md:grid-cols-2 md:items-center">
            <div>
              <span className="eyebrow text-gold-400">Stay informed</span>
              <h2 className="mt-5 font-serif text-3xl font-light leading-tight text-paper md:text-4xl">
                Our research, in your inbox.
              </h2>
              <p className="mt-4 max-w-md leading-relaxed text-paper/65">
                Subscribe to receive our house views, white papers and market
                intelligence as they are published. Reserved for institutional
                and professional investors.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row md:justify-end">
              <input
                type="email"
                placeholder="name@institution.com"
                className="w-full rounded-sm border border-white/15 bg-navy-950 px-4 py-3.5 text-sm text-paper outline-none transition-colors placeholder:text-paper/35 focus:border-gold-400 sm:max-w-xs"
              />
              <button
                type="button"
                className="group inline-flex shrink-0 items-center justify-center gap-2 bg-gold-500 px-7 py-3.5 text-sm font-semibold tracking-wide text-navy-950 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:bg-gold-400"
              >
                Subscribe
                <span className="transition-transform duration-500 group-hover:translate-x-1">
                  →
                </span>
              </button>
            </div>
          </div>
        </Reveal>
      </Section>

      <CtaBand
        title={<>Discuss our research with the team.</>}
        body={`For media enquiries or to speak with our research desk, reach us at ${FIRM.press}.`}
        primary={{ href: "/contact", label: "Get in touch" }}
        secondary={{ href: "/media", label: "Visit the media center" }}
      />
    </>
  );
}
