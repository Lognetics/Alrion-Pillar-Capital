import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading, Button } from "@/components/ui/primitives";
import { INSIGHTS } from "@/lib/insights";

export function InsightsPreview() {
  const feature = INSIGHTS.find((i) => i.feature) ?? INSIGHTS[0];
  const rest = INSIGHTS.filter((i) => i.slug !== feature.slug).slice(0, 3);

  return (
    <section className="bg-cloud py-24 md:py-32">
      <div className="shell">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <Reveal>
            <SectionHeading
              eyebrow="Research &amp; Insights"
              title={<>Intelligence from the frontier.</>}
              intro="Original research, market intelligence and perspectives from our investment teams."
            />
          </Reveal>
          <Reveal delay={0.1}>
            <Button href="/insights" variant="outline">
              All insights
            </Button>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          {/* Feature */}
          <Reveal className="group">
            <Link
              href={`/insights/${feature.slug}`}
              className="relative flex h-full min-h-[22rem] flex-col justify-end overflow-hidden rounded-sm bg-navy-950 p-10 text-paper"
            >
              <div className="absolute inset-0 bg-grid opacity-40" />
              <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-gold-500/20 blur-3xl transition-transform duration-700 group-hover:scale-125" />
              <div className="relative">
                <p className="eyebrow text-gold-400">{feature.category}</p>
                <h3 className="mt-5 max-w-lg font-serif text-3xl font-light leading-tight">
                  {feature.title}
                </h3>
                <p className="mt-4 max-w-md leading-relaxed text-paper/65">{feature.excerpt}</p>
                <p className="mt-6 text-xs tracking-wide text-paper/45">
                  {feature.date} · {feature.readingTime} read
                </p>
              </div>
            </Link>
          </Reveal>

          {/* List */}
          <div className="grid gap-px self-start overflow-hidden rounded-sm border border-line bg-line">
            {rest.map((post, i) => (
              <Reveal key={post.slug} delay={i * 0.08} className="group">
                <Link href={`/insights/${post.slug}`} className="block bg-paper p-7 transition-colors duration-500 hover:bg-paper/60">
                  <div className="flex items-center gap-3">
                    <span className="eyebrow text-gold-600">{post.category}</span>
                    <span className="text-xs text-mist-400">{post.date}</span>
                  </div>
                  <h3 className="mt-3 text-lg font-semibold leading-snug text-navy-950 transition-colors group-hover:text-gold-600">
                    {post.title}
                  </h3>
                  <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-slate-strong/75">
                    {post.excerpt}
                  </p>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
