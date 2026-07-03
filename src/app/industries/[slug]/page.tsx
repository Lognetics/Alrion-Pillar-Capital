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
  return { title: sector ? sector.name : "Focus Area" };
}

/*, Generate copy from the sector's name, group and investing strategy, */

const GROUP_CONTEXT: Record<string, string> = {
  "Frontier Technology":
    "a focus area of the Venture Capital LP, where scientific validation meets market deployment",
  "Infrastructure Growth":
    "a focus area of the Private Equity LP, the mission-critical infrastructure underpinning the modern economy",
};

const GROUP_STRATEGY: Record<string, string> = {
  "Frontier Technology": "the Venture Capital LP",
  "Infrastructure Growth": "the Private Equity LP",
};

function focusAreas(sector: Sector): string[] {
  return [
    `Founders and businesses in ${sector.name.toLowerCase()} with a genuine, hard-to-replicate edge`,
    `The enabling layers that underpin the broader ${sector.name.toLowerCase()} value chain`,
    `Companies translating validated science or engineering into commercial scale`,
    `Business models with a credible path to durable economics`,
    `Opportunities where our diligence and network add measurable advantage`,
  ];
}

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
  const strategy = GROUP_STRATEGY[sector.group] ?? "the relevant strategy";

  return (
    <>
      <PageHero
        eyebrow={sector.group}
        title={sector.name}
        intro={sector.blurb}
        image={sectorImage(sector.slug)}
        crumbs={[
          { label: "Focus Areas", href: "/industries" },
          { label: sector.name },
        ]}
      />

      {/* Overview, why this matters */}
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
              title={<>A structural focus, not a passing cycle.</>}
            />
            <div className="mt-8 space-y-5 text-lg leading-relaxed text-slate-strong/85">
              <p>
                {sector.name} sits within {sector.group},{" "}
                {GROUP_CONTEXT[sector.group] ??
                  "a focus area of the platform"}
                . It is a sector that {strategy} invests in directly, where
                demand is driven by structural change rather than sentiment.
              </p>
              <p>
                Alrion approaches {lower} as a research problem before it is a
                capital allocation. We map the technology, the competitive
                landscape and the counterparties, integrating fundamental
                analysis with quantitative rigor before any commitment is made.
              </p>
              <p>
                The opportunity is matched by complexity. Winners in {lower} are
                separated by a defensible edge, disciplined capital and
                operational execution. That is the terrain where our combination
                of research, structuring and independent governance is built to
                compound.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Where we focus, split with bullets */}
      <Section tone="cloud">
        <SplitContent
          eyebrow="Where we focus"
          title={<>The places within {sector.name} where capital compounds.</>}
          bullets={focusAreas(sector)}
        >
          <p>
            We do not chase the entire sector. We concentrate where the edge is
            durable, the demand is structural and our diligence is real, pairing
            conviction with the discipline to wait for the right entry.
          </p>
          <p>
            Each focus area is underwritten against the same standard: a clear
            path to defensible economics, alignment with the strategy's mandate,
            and a structure engineered to protect capital.
          </p>
        </SplitContent>
      </Section>

      {/* Our thesis */}
      <Section tone="paper">
        <SectionHeading
          eyebrow="Our thesis"
          title={<>Conviction underwritten by research and rigor.</>}
          intro={`Two convictions shape how Alrion underwrites ${lower}: that the demand is structural, and that a defensible edge is the difference between a durable investment and a fleeting one.`}
        />
        <div className="mt-8 max-w-3xl space-y-5 text-lg leading-relaxed text-slate-strong/85">
          <p>
            We believe the most durable returns in {lower} accrue to companies
            that solve a hard problem in a defensible way, and that the firms
            able to identify them early are those willing to do the deep
            technical and quantitative work. Our process is built for exactly
            that.
          </p>
          <p>
            Every commitment in {lower} is made through {strategy}, a separate
            Delaware Limited Partnership with its own investment committee and
            risk framework, so conviction is challenged before capital is
            committed.
          </p>
        </div>
      </Section>

      {/* How we invest */}
      <Section tone="ink">
        <SectionHeading
          light
          eyebrow="How we invest"
          title={<>One strategy, one disciplined mandate.</>}
          intro={`Alrion invests in ${lower} through ${strategy}, choosing the stage and structure that best fit the opportunity.`}
        />
        <div className="mt-14">
          <FeatureGrid
            items={
              sector.group === "Frontier Technology"
                ? [
                    {
                      title: "Stage",
                      body: `Seed to Series A, primarily across the Northeast Corridor, backing founders as technical risk gives way to market deployment.`,
                    },
                    {
                      title: "Diligence",
                      body: `Technical diligence confirms a genuine, hard-to-replicate edge in ${lower} before any capital is committed.`,
                    },
                    {
                      title: "Advisory depth",
                      body: `A Technical Advisory Board of former government and military leaders informs diligence in dual-use and frontier technology.`,
                    },
                  ]
                : [
                    {
                      title: "Scale",
                      body: `Growth capital for established businesses with $10M–$100M in revenue and investment-grade counterparties.`,
                    },
                    {
                      title: "Value creation",
                      body: `Clear operational levers, from professionalization to modernization, underpin every ${lower} thesis.`,
                    },
                    {
                      title: "Economics",
                      body: `Structured with an 8% preferred return and 20% carried interest, aligning our interests with our partners.`,
                    },
                  ]
            }
            columns={3}
          />
        </div>
      </Section>

      {/* Related sectors */}
      {related.length > 0 && (
        <Section tone="paper">
          <SectionHeading
            eyebrow="Related focus areas"
            title={<>Explore the rest of {sector.group}.</>}
          />
          <div className="mt-12 grid gap-px overflow-hidden rounded-sm border border-line bg-line sm:grid-cols-3">
            {related.map((s, i) => (
              <div key={s.slug} className="group">
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
                    View focus area →
                  </span>
                </Link>
              </div>
            ))}
          </div>
          <div className="mt-10">
            <Link
              href="/industries"
              className="text-sm font-semibold tracking-wide text-navy-900 underline-offset-4 transition-colors hover:text-gold-600 hover:underline"
            >
              View all focus areas →
            </Link>
          </div>
        </Section>
      )}

      <CtaBand
        title={<>Position with conviction in {sector.name}.</>}
        body={`Speak with our investment team about how ${strategy} approaches ${lower}.`}
        primary={{ href: "/contact", label: "Contact the team" }}
        secondary={{ href: "/industries", label: "All focus areas" }}
      />
    </>
  );
}
