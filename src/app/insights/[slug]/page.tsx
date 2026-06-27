import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { Section, CtaBand } from "@/components/sections/blocks";
import { Reveal } from "@/components/ui/Reveal";
import { INSIGHTS } from "@/lib/insights";

export function generateStaticParams() {
  return INSIGHTS.map((i) => ({ slug: i.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const insight = INSIGHTS.find((i) => i.slug === slug);
  return {
    title: insight ? insight.title : "Insight",
    description: insight?.excerpt,
  };
}

export default async function InsightPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const insight = INSIGHTS.find((i) => i.slug === slug);
  if (!insight) notFound();

  const related = INSIGHTS.filter((i) => i.slug !== insight.slug).slice(0, 3);
  const topic = insight.category.toLowerCase();

  return (
    <>
      <PageHero
        eyebrow={insight.category}
        title={insight.title}
        crumbs={[
          { label: "Insights", href: "/insights" },
          { label: insight.category },
        ]}
      />

      {/* Meta row */}
      <Section tone="paper" className="!pb-0">
        <Reveal className="flex flex-wrap items-center gap-4 border-b border-line pb-8 text-sm text-slate-strong/60">
          <span className="font-semibold text-navy-900">ALRION Research Desk</span>
          <span className="h-1 w-1 rounded-full bg-gold-500" />
          <span>{insight.date}</span>
          <span className="h-1 w-1 rounded-full bg-gold-500" />
          <span>{insight.readingTime} read</span>
          <span className="h-1 w-1 rounded-full bg-gold-500" />
          <span>{insight.category}</span>
        </Reveal>
      </Section>

      {/* Article body */}
      <Section tone="paper">
        <article className="mx-auto max-w-3xl">
          <Reveal>
            <p className="text-pretty font-serif text-2xl font-light leading-relaxed text-navy-950">
              {insight.excerpt}
            </p>
          </Reveal>

          <div className="mt-12 space-y-6 text-lg leading-relaxed text-slate-strong/85">
            <Reveal>
              <p>
                At ALRION Pillar Capital, every allocation begins as a research
                problem long before it becomes a capital decision. This view from
                our desk examines {topic} not as a headline but as a structural
                force — one we underwrite with the same discipline we apply across
                our hedge fund, private equity, venture and community equity
                platforms. The conclusions here are shaped by primary technical
                diligence, proprietary quantitative models and the conviction that
                durable returns accrue to those who do the deep work early.
              </p>
            </Reveal>

            <Reveal>
              <h2 className="!mt-14 font-serif text-3xl font-light leading-tight text-navy-950">
                The structural thesis
              </h2>
            </Reveal>
            <Reveal>
              <p>
                The dynamics we describe are secular, not cyclical. Demand is
                driven by the deep currents reshaping how the world computes,
                builds and allocates capital — currents that compound across
                multiple market regimes. Where consensus sees a single trend, our
                research desk maps an entire value chain: the enabling layers, the
                infrastructure dependencies and the second-order beneficiaries
                that the market has yet to price.
              </p>
            </Reveal>
            <Reveal>
              <p>
                That breadth of view is deliberate. By charting how frontier
                technologies converge rather than studying them in isolation, we
                identify the points along the value chain where defensibility is
                strongest and where our combination of patient capital and
                quantitative intelligence is built to compound. The thesis is only
                as good as the rigor behind it — and rigor, for us, means
                adversarial review before conviction.
              </p>
            </Reveal>

            {/* Pull quote */}
            <Reveal>
              <blockquote className="!my-12 border-l-2 border-gold-500 pl-8">
                <p className="text-pretty font-serif text-2xl font-light leading-snug text-navy-950">
                  &ldquo;We reject the false trade-off between performance and
                  progress. The most durable returns accrue where rigorous science
                  meets structural demand.&rdquo;
                </p>
                <footer className="mt-4 text-sm font-semibold tracking-wide text-gold-600">
                  ALRION Pillar Capital — Investment Philosophy
                </footer>
              </blockquote>
            </Reveal>

            <Reveal>
              <h2 className="!mt-14 font-serif text-3xl font-light leading-tight text-navy-950">
                Where value accrues
              </h2>
            </Reveal>
            <Reveal>
              <p>
                Not every participant in a structural shift captures its value.
                Winners are separated from the rest by proprietary technology,
                disciplined capital and operational execution. Our quantitative
                models map relative value and correlation across the opportunity
                set in real time, while our investment committee governs how that
                signal translates into commitment. We concentrate where the moat
                is durable and diversify to protect capital where the path is less
                certain.
              </p>
            </Reveal>
            <Reveal>
              <p>
                Capital is allocated through a unified framework that balances
                liquid public exposure against patient private innovation. The
                same theme may be expressed through risk-managed positions in
                public markets, conviction checks into high-growth private
                companies, or control investments in the physical infrastructure
                that underpins it. The instrument follows the opportunity — never
                the other way around.
              </p>
            </Reveal>

            <Reveal>
              <h2 className="!mt-14 font-serif text-3xl font-light leading-tight text-navy-950">
                Risk, governance and impact
              </h2>
            </Reveal>
            <Reveal>
              <p>
                Conviction without discipline is speculation. Every position
                described here would be sized to the quality of the evidence,
                subject to pre-committed exposure limits and monitored
                continuously by an oversight function that operates independently
                of our investing teams. Daily risk attribution and systematic
                hedging are not constraints on the strategy — they are the
                foundation that lets us pursue asymmetric returns without
                sacrificing capital preservation.
              </p>
            </Reveal>
            <Reveal>
              <p>
                Impact, too, is intrinsic rather than incidental. The advances we
                back create tangible value in the real world, and we measure those
                outcomes alongside financial return with the same rigor — reporting
                both transparently to the institutional partners whose capital is
                at work. That alignment of prosperity and progress is, we believe,
                itself a source of durable advantage.
              </p>
            </Reveal>

            <Reveal>
              <h2 className="!mt-14 font-serif text-3xl font-light leading-tight text-navy-950">
                What we are watching
              </h2>
            </Reveal>
            <Reveal>
              <p>
                The picture will continue to evolve, and so will our positioning.
                Our research desk treats every thesis as a living hypothesis —
                stress-tested against new evidence, recalibrated as risk migrates
                and exited deliberately once the asymmetry has played out. For the
                investors who partner with us, this is the through-line: capital
                that follows insight rather than sentiment, governed with
                institutional discipline and reported with complete transparency.
              </p>
            </Reveal>
          </div>

          <Reveal className="mt-14 rounded-sm border border-line bg-cloud p-6 text-sm leading-relaxed text-slate-strong/65">
            This material is provided for informational purposes only and does not
            constitute investment advice, an offer or a solicitation. It reflects
            the views of the ALRION Pillar Capital research desk as of the
            publication date and is subject to change without notice.
          </Reveal>
        </article>
      </Section>

      {/* Related insights */}
      {related.length > 0 && (
        <Section tone="cloud">
          <Reveal>
            <h2 className="font-serif text-3xl font-light text-navy-950 md:text-4xl">
              Related insights
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-px overflow-hidden rounded-sm border border-line bg-line md:grid-cols-3">
            {related.map((r, i) => (
              <Reveal key={r.slug} delay={i * 0.06} className="group">
                <Link
                  href={`/insights/${r.slug}`}
                  className="flex h-full flex-col bg-paper p-7 transition-colors duration-500 hover:bg-navy-950"
                >
                  <span className="eyebrow text-gold-600 transition-colors duration-500 group-hover:text-gold-300">
                    {r.category}
                  </span>
                  <h3 className="mt-3 font-serif text-lg font-light leading-snug text-navy-950 transition-colors duration-500 group-hover:text-paper">
                    {r.title}
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-strong/70 transition-colors duration-500 group-hover:text-paper/60">
                    {r.excerpt}
                  </p>
                  <span className="mt-5 text-xs font-semibold tracking-wide text-gold-600 transition-colors duration-500 group-hover:text-gold-300">
                    Read insight →
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </Section>
      )}

      <CtaBand
        title={<>Put our research to work for your mandate.</>}
        body="Speak with our investor relations team to explore how ALRION Pillar Capital's platforms translate research into returns."
        primary={{ href: "/contact", label: "Contact the team" }}
        secondary={{ href: "/insights", label: "All insights" }}
      />
    </>
  );
}
