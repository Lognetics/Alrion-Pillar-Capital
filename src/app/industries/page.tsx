import Link from "next/link";
import { PageHero } from "@/components/layout/PageHero";
import { Section, FeatureGrid, CtaBand } from "@/components/sections/blocks";
import { SectionHeading } from "@/components/ui/primitives";
import { Reveal } from "@/components/ui/Reveal";
import { SECTORS } from "@/lib/site";

export const metadata = { title: "Industries" };

const GROUPS = ["Intelligence & Compute", "Life & Climate", "Real Economy"] as const;

const GROUP_INTROS: Record<(typeof GROUPS)[number], string> = {
  "Intelligence & Compute":
    "The computational substrate of the next economy — the models, machines and silicon that turn data into decisions.",
  "Life & Climate":
    "Capital aligned to human health and a habitable planet, where scientific breakthroughs meet planetary-scale demand.",
  "Real Economy":
    "The physical backbone of modern life — energy, infrastructure and industry rebuilt for a more resilient century.",
};

const THESES = [
  {
    title: "Secular demand",
    body: "We anchor to multi-decade tailwinds — compute, decarbonization, reshoring and longevity — rather than transient market cycles.",
  },
  {
    title: "Durable moats",
    body: "Proprietary technology, hard-science defensibility and network effects compound advantage long after first-mover capital arrives.",
  },
  {
    title: "Real-world impact",
    body: "We measure outcomes in both returns and consequence — cleaner energy, better care, stronger systems — never trading one for the other.",
  },
  {
    title: "Disciplined entry",
    body: "AI-driven quantitative models and a research desk price conviction precisely, structuring entries that protect downside and capture asymmetry.",
  },
];

export default function IndustriesPage() {
  return (
    <>
      <PageHero
        eyebrow="Industries"
        title={<>We invest where the future is being built.</>}
        intro="Twenty-one frontier sectors, mapped to secular demand, durable competitive moats and measurable real-world impact — the foundations of the next economy."
        crumbs={[{ label: "Industries" }]}
      />

      <Section tone="paper">
        <SectionHeading
          eyebrow="A thematic map"
          title={<>Frontier sectors, organized by conviction.</>}
          intro="Alrion allocates across the public and private frontier through three thematic pillars. Each maps a distinct vector of change in the global economy, and each is underwritten by the same discipline: research-led conviction, quantitative rigor and impact aligned with returns."
        />
        <div className="mt-8 max-w-2xl space-y-5 text-lg leading-relaxed text-slate-strong/85">
          <p>
            We are sector-specialists by design. Our research professionals — engineers, scientists and analysts — translate frontier science into investable theses before they reach the mainstream, then express them across the right instrument, stage and structure.
          </p>
          <p>
            The result is a portfolio built not on momentum but on understanding: where demand is structural, where moats are durable, and where capital can compound while doing tangible good in the world.
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
                    Explore sector →
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
          eyebrow="Thematic conviction"
          title={<>Four theses cut across every sector.</>}
          intro="However the sector is defined, the underwriting question is the same. These cross-cutting principles govern where Alrion commits capital."
        />
        <div className="mt-14">
          <FeatureGrid items={THESES} columns={4} />
        </div>
      </Section>

      <CtaBand
        title={<>Explore a thesis built for the frontier.</>}
        body="Speak with our investment team about how Alrion is positioned across the sectors defining the next economy."
        primary={{ href: "/contact", label: "Contact the team" }}
        secondary={{ href: "/strategies", label: "View strategies" }}
      />
    </>
  );
}
