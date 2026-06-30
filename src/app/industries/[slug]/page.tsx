import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import {
  Section,
  SplitContent,
  FeatureGrid,
  CtaBand,
} from "@/components/sections/blocks";
import { SectionHeading } from "@/components/ui/primitives";
import { Reveal } from "@/components/ui/Reveal";
import { Counter } from "@/components/ui/Counter";
import { SECTORS, type Sector } from "@/lib/site";
import { sectorImage } from "@/lib/imagery";
import { FeatureImage } from "@/components/ui/media";

export function generateStaticParams() {
  return SECTORS.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const sector = SECTORS.find((s) => s.slug === slug);
  return { title: sector ? sector.name : "Industry" };
}

/* — Generate rich, original copy from the sector's name & group — */

const GROUP_CONTEXT: Record<string, string> = {
  "Intelligence & Compute":
    "the computational engine of the modern economy, where advances compound faster than any prior technology wave",
  "Life & Climate":
    "the intersection of human health and planetary resilience, two of the largest and most enduring sources of global demand",
  "Real Economy":
    "the physical foundations of daily life, now being rebuilt for resilience, security and the energy transition",
};

function focusAreas(sector: Sector): string[] {
  return [
    `Category leaders in ${sector.name.toLowerCase()} with proprietary technology and defensible economics`,
    `Critical infrastructure and enabling layers that underpin the broader ${sector.name.toLowerCase()} value chain`,
    `Founder-led companies translating frontier research into commercial scale`,
    `Capital-efficient business models with clear paths to durable margins`,
    `Assets where Alrion's operating network and quantitative diligence add measurable advantage`,
  ];
}

function angles(sector: Sector) {
  return [
    {
      title: "Public markets",
      body: `Liquid, risk-managed exposure to ${sector.name.toLowerCase()} through our hedge fund platform, where AI-driven quantitative models identify dislocations at the leading edge.`,
    },
    {
      title: "Private growth",
      body: `Conviction capital for high-growth ${sector.name.toLowerCase()} companies — from first institutional check through scale — backed by technical diligence and a global network.`,
    },
    {
      title: "Real assets & infrastructure",
      body: `Control and structured investments in the physical and industrial backbone of ${sector.name.toLowerCase()}, compounded patiently over multi-year horizons.`,
    },
  ];
}

const STATS = [
  { value: 21, suffix: "", label: "Frontier sectors", sub: "Mapped across three thematic pillars" },
  { value: 64, suffix: "", label: "Research professionals", sub: "Engineers, scientists and analysts" },
  { value: 9.4, prefix: "$", suffix: "B", decimals: 1, label: "Private capital deployed", sub: "Into frontier-technology companies" },
  { value: 22, suffix: "", label: "Countries of activity", sub: "An integrated global footprint" },
];

export default async function SectorPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const sector = SECTORS.find((s) => s.slug === slug);
  if (!sector) notFound();

  const related = SECTORS.filter(
    (s) => s.group === sector.group && s.slug !== sector.slug,
  ).slice(0, 3);

  const lower = sector.name.toLowerCase();

  return (
    <>
      <PageHero
        eyebrow={sector.group}
        title={sector.name}
        intro={sector.blurb}
        image={sectorImage(sector.slug)}
        crumbs={[
          { label: "Industries", href: "/industries" },
          { label: sector.name },
        ]}
      />

      {/* Overview — why this matters */}
      <Section tone="paper">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr] lg:items-center lg:gap-16">
          <FeatureImage
            src={sectorImage(sector.slug)}
            alt={sector.name}
            ratio="aspect-[4/3]"
            className="lg:order-2"
          />
          <div className="lg:order-1">
        <SectionHeading
          eyebrow="Why this matters"
          title={<>A structural shift, not a passing cycle.</>}
        />
        <div className="mt-8 space-y-5 text-lg leading-relaxed text-slate-strong/85">
          <p>
            {sector.name} sits within {sector.group} —{" "}
            {GROUP_CONTEXT[sector.group] ?? "a defining vector of the next economy"}.
            Demand here is structural: it is driven not by sentiment but by the
            deep currents reshaping how the world computes, lives and builds.
          </p>
          <p>
            Alrion approaches {lower} as a research problem before it is a capital
            allocation. Our desk of engineers, scientists and analysts maps the
            technology curve, the competitive landscape and the regulatory
            environment — translating frontier science into investable theses
            before they reach the mainstream consensus.
          </p>
          <p>
            The opportunity is matched by complexity. Winners in {lower} are
            separated from the rest by proprietary technology, disciplined
            capital and operational execution. That is precisely the terrain
            where our combination of quantitative intelligence and patient,
            impact-aligned capital is built to compound.
          </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Where we focus — split with bullets */}
      <Section tone="cloud">
        <SplitContent
          eyebrow="Where we focus"
          title={<>The places within {sector.name} where capital compounds.</>}
          bullets={focusAreas(sector)}
        >
          <p>
            We do not chase the entire sector. We concentrate where the moat is
            durable, the demand is structural and our edge is real — pairing
            thematic conviction with the discipline to wait for the right entry.
          </p>
          <p>
            Each focus area is underwritten against the same standard: a clear
            path to defensible economics, alignment with measurable impact, and a
            structure engineered to protect downside while capturing asymmetric
            upside.
          </p>
        </SplitContent>
      </Section>

      {/* Our thesis */}
      <Section tone="paper">
        <SectionHeading
          eyebrow="Our thesis"
          title={<>Conviction underwritten by research and rigor.</>}
          intro={`Three convictions shape how Alrion underwrites ${lower}: that the demand is secular, that defensibility is the difference, and that returns and real-world impact reinforce one another.`}
        />
        <div className="mt-8 max-w-3xl space-y-5 text-lg leading-relaxed text-slate-strong/85">
          <p>
            We believe the most durable returns in {lower} accrue to companies
            that solve a hard problem in a defensible way — and that the firms
            able to identify them early are those willing to do the deep
            technical and quantitative work. Our investment process is built for
            exactly that.
          </p>
          <p>
            Impact is not a separate mandate; it is intrinsic to the thesis. The
            advances we back in {lower} create tangible value in the real
            world — and that alignment, we believe, is itself a source of durable
            advantage.
          </p>
        </div>
      </Section>

      {/* How we invest — feature grid of angles */}
      <Section tone="ink">
        <SectionHeading
          light
          eyebrow="How we invest"
          title={<>Three angles into a single conviction.</>}
          intro={`Alrion expresses ${lower} across the full capital stack — choosing the instrument, stage and structure that best fit the opportunity.`}
        />
        <div className="mt-14">
          <FeatureGrid items={angles(sector)} columns={3} />
        </div>
      </Section>

      {/* Stat row */}
      <Section tone="navy">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading
            light
            eyebrow="By the numbers"
            title={<>The platform behind the thesis.</>}
          />
          <Reveal delay={0.1}>
            <span className="text-xs uppercase tracking-[0.2em] text-paper/40">
              Illustrative
            </span>
          </Reveal>
        </div>
        <div className="mt-12 grid gap-px overflow-hidden rounded-sm border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
          {STATS.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.07} className="bg-navy-950 p-8">
              <div className="font-serif text-4xl font-light text-gold-400">
                <Counter
                  value={s.value}
                  prefix={s.prefix}
                  suffix={s.suffix}
                  decimals={s.decimals}
                />
              </div>
              <div className="mt-4 text-sm font-semibold text-paper">{s.label}</div>
              <div className="mt-1 text-sm leading-relaxed text-paper/55">{s.sub}</div>
            </Reveal>
          ))}
        </div>
        <p className="mt-6 text-xs text-paper/40">
          Figures are firm-level and illustrative, shown to convey scale and
          approach. They do not represent sector-specific commitments or a
          forecast of returns.
        </p>
      </Section>

      {/* Related sectors */}
      {related.length > 0 && (
        <Section tone="paper">
          <SectionHeading
            eyebrow="Related sectors"
            title={<>Explore the rest of {sector.group}.</>}
          />
          <div className="mt-12 grid gap-px overflow-hidden rounded-sm border border-line bg-line sm:grid-cols-3">
            {related.map((s, i) => (
              <Reveal key={s.slug} delay={i * 0.05} className="group">
                <Link
                  href={`/industries/${s.slug}`}
                  className="flex h-full flex-col bg-paper p-7 transition-colors duration-500 hover:bg-navy-950"
                >
                  <span className="eyebrow text-gold-600 transition-colors duration-500 group-hover:text-gold-300">
                    {s.group}
                  </span>
                  <h3 className="mt-3 text-lg font-semibold text-navy-950 transition-colors duration-500 group-hover:text-gold-300">
                    {s.name}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-strong/70 transition-colors duration-500 group-hover:text-paper/60">
                    {s.blurb}
                  </p>
                  <span className="mt-5 text-xs font-semibold tracking-wide text-gold-600 transition-colors duration-500 group-hover:text-gold-300">
                    View sector →
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.1} className="mt-10">
            <Link
              href="/industries"
              className="text-sm font-semibold tracking-wide text-navy-900 underline-offset-4 transition-colors hover:text-gold-600 hover:underline"
            >
              View all twenty-one sectors →
            </Link>
          </Reveal>
        </Section>
      )}

      <CtaBand
        title={<>Position with conviction in {sector.name}.</>}
        body={`Speak with our investment team about Alrion's approach to ${lower} and the wider ${sector.group} thesis.`}
        primary={{ href: "/contact", label: "Contact the team" }}
        secondary={{ href: "/industries", label: "All industries" }}
      />
    </>
  );
}
