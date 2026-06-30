import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { Section, FeatureGrid, CtaBand } from "@/components/sections/blocks";
import { SectionHeading } from "@/components/ui/primitives";
import { Reveal } from "@/components/ui/Reveal";
import { Counter } from "@/components/ui/Counter";
import { GLOBAL_OFFICES, FIRM } from "@/lib/site";

export const metadata: Metadata = {
  title: "Institutional Network",
  description:
    "ALRION Pillar Capital operates as one node in a global institutional network — co-investors, limited partners, banking relationships, research alliances and operating partners spanning the Americas, EMEA, APAC and the Middle East.",
};

const PARTNER_CATEGORIES = [
  {
    title: "Co-Investors",
    body: "Sovereign funds, family offices and peer institutions who invest alongside us in our highest-conviction opportunities.",
  },
  {
    title: "Limited Partners",
    body: "The long-term institutional capital base — pensions, endowments and foundations — that underwrites our platforms.",
  },
  {
    title: "Banking & Prime",
    body: "Tier-one prime brokerage, custody and financing relationships that underpin our liquidity and execution.",
  },
  {
    title: "Research Alliances",
    body: "Universities, labs and technical partners that sharpen our frontier-technology theses ahead of the mainstream.",
  },
  {
    title: "Operating Partners",
    body: "Seasoned operators and advisors who help our portfolio companies professionalize and scale responsibly.",
  },
  {
    title: "Commercial Network",
    body: "A global web of customers, channel partners and ecosystems that accelerates portfolio commercialization.",
  },
];

const NETWORK_STATS = [
  { value: 180, suffix: "+", label: "Institutional relationships", sub: "Across the partner network · illustrative" },
  { value: 22, label: "Countries of activity", sub: "An integrated global footprint" },
  { value: 40, suffix: "+", label: "Co-investment partners", sub: "Sovereign, family-office and peer capital · illustrative" },
  { value: 92, suffix: "%", label: "Institutional capital", sub: "Sourced from long-term partners" },
];

const REGIONS = Array.from(
  GLOBAL_OFFICES.reduce((map, office) => {
    const list = map.get(office.region) ?? [];
    list.push(office);
    map.set(office.region, list);
    return map;
  }, new Map<string, typeof GLOBAL_OFFICES>()),
);

export default function NetworkPage() {
  return (
    <>
      <PageHero
        eyebrow="Global · Institutional Network"
        title={
          <>
            One firm, woven into a
            <span className="text-gilt"> global institutional network.</span>
          </>
        }
        intro="Our reach is multiplied by the partners who invest, finance, research and build alongside us — a network that spans capital, technology and the real economy."
        crumbs={[{ label: "Global", href: "/global" }, { label: "Institutional Network" }]}
      />

      {/* — Intro ——————————————————————————————————————————————— */}
      <Section tone="paper">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-20">
          <Reveal className="lg:col-span-5">
            <SectionHeading
              eyebrow="The Network Effect"
              title={<>Capital is a relationship, not a transaction.</>}
            />
          </Reveal>
          <Reveal delay={0.1} className="lg:col-span-7">
            <div className="space-y-6 text-lg leading-relaxed text-slate-strong/85">
              <p>
                {FIRM.name} was built on the conviction that the best opportunities
                are sourced, diligenced and scaled through relationships. Our
                network connects long-term institutional capital with the founders,
                operators and researchers defining the frontier.
              </p>
              <p>
                Each relationship is curated for the long term and governed by the
                same standards of integrity that define the firm — because a network
                is only as valuable as the trust that holds it together.
              </p>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* — Partner categories ————————————————————————————————— */}
      <Section tone="cloud">
        <Reveal>
          <SectionHeading
            eyebrow="Partner Categories"
            title={<>Six kinds of partnership, one shared standard.</>}
            intro="Our network spans the full lifecycle of capital — from those who invest with us to those who help our companies grow."
          />
        </Reveal>
        <div className="mt-14">
          <FeatureGrid columns={3} items={PARTNER_CATEGORIES} />
        </div>
      </Section>

      {/* — Stats band ————————————————————————————————————————— */}
      <Section tone="navy">
        <Reveal>
          <SectionHeading
            light
            align="center"
            eyebrow="The Network in Numbers"
            title={<>Scale, measured in relationships.</>}
          />
        </Reveal>
        <div className="mt-14 grid gap-px overflow-hidden rounded-sm border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
          {NETWORK_STATS.map((s, i) => (
            <Reveal key={s.label} delay={(i % 4) * 0.07} className="bg-navy-950 p-8 text-center">
              <div className="font-serif text-4xl font-light text-gold-400 md:text-5xl">
                <Counter value={s.value} suffix={s.suffix} />
              </div>
              <p className="mt-4 text-sm font-semibold text-paper">{s.label}</p>
              <p className="mt-1 text-xs leading-relaxed text-paper/50">{s.sub}</p>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* — Regional breakdown ————————————————————————————————— */}
      <Section tone="paper">
        <Reveal>
          <SectionHeading
            eyebrow="Regional Network"
            title={<>An integrated presence across four regions.</>}
            intro="Our hubs anchor the network locally while operating as a single, coordinated firm."
          />
        </Reveal>
        <div className="mt-14 grid gap-px overflow-hidden rounded-sm border border-line bg-line md:grid-cols-2">
          {REGIONS.map(([region, offices], i) => (
            <Reveal key={region} delay={(i % 2) * 0.07} className="bg-paper p-8 md:p-10">
              <div className="flex items-center justify-between">
                <h3 className="font-serif text-2xl font-light text-navy-950">{region}</h3>
                <span className="text-sm text-slate-strong/55">
                  {offices.length} {offices.length === 1 ? "hub" : "hubs"}
                </span>
              </div>
              <ul className="mt-6 space-y-4 border-t border-line pt-6">
                {offices.map((o) => (
                  <li key={o.city} className="flex items-start justify-between gap-4">
                    <div>
                      <p className="font-semibold text-navy-900">{o.city}</p>
                      <p className="text-sm text-slate-strong/70">{o.role}</p>
                    </div>
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold-500" />
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
        <Reveal delay={0.1}>
          <p className="mt-10 max-w-3xl text-sm leading-relaxed text-slate-strong/65">
            Network figures marked illustrative are representative of the scale of our
            relationships and provided for explanatory purposes only.
          </p>
        </Reveal>
      </Section>

      <CtaBand
        title={<>Partner with a network built for the frontier.</>}
        body="Whether you invest alongside us or build with our companies, we would welcome the conversation."
        primary={{ href: "/contact", label: "Start a conversation" }}
        secondary={{ href: "/global", label: "Our global presence" }}
      />
    </>
  );
}
