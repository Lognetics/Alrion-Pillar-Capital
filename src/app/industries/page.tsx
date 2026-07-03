import Link from "next/link";
import { PageHero } from "@/components/layout/PageHero";
import { Section, FeatureGrid, CtaBand } from "@/components/sections/blocks";
import { SectionHeading } from "@/components/ui/primitives";
import { Reveal } from "@/components/ui/Reveal";
import { SECTORS } from "@/lib/site";

export const metadata = { title: "Focus Areas" };

const GROUPS = ["Frontier Technology", "Infrastructure Growth"] as const;

const GROUP_INTROS: Record<(typeof GROUPS)[number], string> = {
  "Frontier Technology":
    "The focus areas of the Venture Capital LP, where the strategy backs founders at the inflection point between scientific validation and market deployment.",
  "Infrastructure Growth":
    "The focus areas of the Private Equity LP, the mission-critical infrastructure underpinning a resilient, electrified economy.",
};

const THESES = [
  {
    title: "Structural demand",
    body: "We anchor to durable demand, from frontier science reaching deployment to the infrastructure a modern economy cannot run without.",
  },
  {
    title: "Defensibility",
    body: "We favor a genuine, hard-to-replicate edge, whether proprietary technology in venture or contracted demand from investment-grade counterparties.",
  },
  {
    title: "Disciplined entry",
    body: "Each commitment is underwritten by the strategy's own investment committee, sized to the evidence and structured to protect capital.",
  },
  {
    title: "Aligned interests",
    body: "We invest through significant general-partner commitments, on the same terms we ask of our partners.",
  },
];

export default function IndustriesPage() {
  return (
    <>
      <PageHero
        eyebrow="Focus Areas"
        title={<>The sectors where our strategies invest.</>}
        intro="Six focus areas in two groups, mapped to the two strategies that invest directly in sectors: the Venture Capital LP in frontier technology, and the Private Equity LP in mission-critical infrastructure."
        crumbs={[{ label: "Focus Areas" }]}
      />

      <Section tone="paper">
        <SectionHeading
          eyebrow="A focused map"
          title={<>Two groups. Six focus areas.</>}
          intro="Two of Alrion's four strategies invest directly in sectors. The Venture Capital LP concentrates on frontier technology, and the Private Equity LP on infrastructure growth. Each commitment is underwritten by the same framework: research-led conviction, disciplined structuring and independent governance."
        />
        <div className="mt-8 max-w-2xl space-y-5 text-lg leading-relaxed text-slate-strong/85">
          <p>
            We are focused by design. The Venture Capital LP backs founders at the
            inflection point between scientific validation and market deployment,
            allocating across artificial intelligence, biotechnology, and defense
            and space.
          </p>
          <p>
            The Private Equity LP deploys growth capital into the mission-critical
            infrastructure underpinning the modern economy: nuclear lifecycle
            services, grid modernization and operational-technology cybersecurity.
          </p>
        </div>
      </Section>

      {GROUPS.map((group, gi) => (
        <Section key={group} tone={gi % 2 === 0 ? "cloud" : "paper"}>
          <Reveal>
            <div className="mb-5 flex items-center gap-4">
              <span className="eyebrow text-navy-700">{group}</span>
              <span className="h-px flex-1 bg-line" />
            </div>
          </Reveal>
          <Reveal delay={0.05}>
            <p className="mb-10 max-w-2xl text-pretty text-lg leading-relaxed text-slate-strong/80">
              {GROUP_INTROS[group]}
            </p>
          </Reveal>
          <div className="grid gap-px overflow-hidden rounded-sm border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
            {SECTORS.filter((s) => s.group === group).map((s, i) => (
              <Reveal key={s.slug} delay={i * 0.04} className="group">
                <Link
                  href={`/industries/${s.slug}`}
                  className="flex h-full flex-col bg-paper p-6 transition-colors duration-500 hover:bg-navy-950"
                >
                  <h3 className="text-base font-semibold text-navy-950 transition-colors duration-500 group-hover:text-gold-300">
                    {s.name}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-strong/70 transition-colors duration-500 group-hover:text-paper/60">
                    {s.blurb}
                  </p>
                  <span className="mt-4 text-xs font-semibold tracking-wide text-gold-600 opacity-0 transition-opacity duration-500 group-hover:opacity-100 group-hover:text-gold-300">
                    Explore focus area →
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </Section>
      ))}

      <Section tone="ink">
        <SectionHeading
          light
          align="center"
          eyebrow="Underwriting conviction"
          title={<>Four principles cut across every focus area.</>}
          intro="However the focus area is defined, the underwriting question is the same. These principles govern where Alrion commits capital."
        />
        <div className="mt-14">
          <FeatureGrid items={THESES} columns={4} />
        </div>
      </Section>

      <CtaBand
        title={<>Explore the strategies behind the focus areas.</>}
        body="Speak with our investment team about how the Venture Capital LP and Private Equity LP invest across these sectors."
        primary={{ href: "/contact", label: "Contact the team" }}
        secondary={{ href: "/strategies", label: "View strategies" }}
      />
    </>
  );
}
