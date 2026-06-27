import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import {
  Section,
  SplitContent,
  CtaBand,
} from "@/components/sections/blocks";
import { SectionHeading } from "@/components/ui/primitives";
import { Reveal } from "@/components/ui/Reveal";
import { Counter } from "@/components/ui/Counter";
import { GLOBAL_OFFICES } from "@/lib/site";

export const metadata: Metadata = {
  title: "Global Presence",
  description:
    "ALRION Pillar Capital operates as one integrated firm across 22 countries — with hubs in the Americas, EMEA, APAC and the Middle East serving a global network of institutional partners.",
};

const REGIONS = [
  {
    name: "Americas",
    tone: "paper" as const,
    title: "The center of gravity for frontier innovation.",
    body: [
      "Our New York global headquarters anchors the firm, bringing together leadership, investor relations and our hedge fund and private equity platforms. From here we set the firm-wide standard for research, risk and governance.",
      "On the West Coast, our San Francisco office sits at the heart of the venture and deep-tech ecosystem — sourcing and supporting the category-defining founders building in AI, robotics and beyond.",
    ],
  },
  {
    name: "EMEA",
    tone: "cloud" as const,
    title: "A bridge across Europe, the Middle East and Africa.",
    body: [
      "London serves as our European hub, connecting Alrion to the region's institutional capital, public markets and a deep pool of scientific and engineering talent.",
      "In Zurich, our private wealth team partners with family offices and foundations seeking direct access to private innovation, delivered with the discretion and stewardship those relationships demand.",
    ],
  },
  {
    name: "APAC",
    tone: "navy" as const,
    title: "Positioned at the heart of Asia-Pacific growth.",
    body: [
      "Singapore is our Asia-Pacific hub, providing proximity to the region's sovereign capital, fast-scaling technology companies and the supply chains that underpin the global hardware economy.",
      "From here our teams source opportunities across the region's frontier sectors while serving the institutional partners who allocate to Alrion from across Asia-Pacific.",
    ],
  },
  {
    name: "Middle East",
    tone: "ink" as const,
    title: "A partner to the region's strategic capital.",
    body: [
      "Our Abu Dhabi presence connects Alrion to the sovereign wealth and strategic capital reshaping the Middle East's economic future.",
      "We partner with the region's institutions on patient, long-horizon allocations into the technologies driving diversification, the energy transition and inclusive growth.",
    ],
  },
];

const STATS = [
  { value: 22, label: "Countries of activity", sub: "An integrated global footprint" },
  { value: 6, label: "Global offices", sub: "Across four world regions" },
  { value: 120, suffix: "+", label: "Portfolio companies", sub: "From seed-stage to industrial scale" },
  { value: 92, suffix: "%", label: "Institutional capital", sub: "Sourced from long-term partners" },
];

export default function GlobalPage() {
  return (
    <>
      <PageHero
        eyebrow="Global Presence"
        title={
          <>
            One firm, operating
            <span className="text-gilt"> without borders.</span>
          </>
        }
        intro="ALRION Pillar Capital is active across 22 countries, with hubs spanning the Americas, EMEA, APAC and the Middle East. We operate not as a federation of offices but as a single integrated firm — sharing research, governance and a common standard of excellence."
        crumbs={[{ label: "Global Presence" }]}
      />

      {/* Intro */}
      <Section tone="paper">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-20">
          <Reveal className="lg:col-span-5">
            <SectionHeading
              eyebrow="An integrated firm"
              title={<>Local proximity, global perspective.</>}
            />
          </Reveal>
          <Reveal delay={0.1} className="lg:col-span-7">
            <div className="space-y-6 text-lg leading-relaxed text-slate-strong/85">
              <p>
                Frontier opportunity does not respect borders, and neither does our
                approach to finding it. Our presence across the world's principal
                financial and innovation centers gives us proximity to founders,
                partners and markets — while a single, shared research and risk
                infrastructure ensures every decision meets the same institutional
                standard, wherever it is made.
              </p>
              <p>
                That integration is our edge. A thesis surfaced in Singapore can be
                pressure-tested in New York, financed through our London capital
                relationships and supported by founders we know in San Francisco.
                One firm, many vantage points, a single conviction.
              </p>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* Offices grid */}
      <Section tone="cloud">
        <Reveal>
          <SectionHeading
            eyebrow="Our offices"
            title={<>Hubs at the centers of capital and innovation.</>}
            intro="Each office plays a distinct role in a coordinated global strategy."
          />
        </Reveal>
        <div className="mt-14 grid gap-px overflow-hidden rounded-sm border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
          {GLOBAL_OFFICES.map((office, i) => (
            <Reveal key={office.city} delay={(i % 3) * 0.07} className="bg-paper p-8">
              <span className="eyebrow text-gold-600">{office.region}</span>
              <h3 className="mt-4 font-serif text-2xl font-light text-navy-950">
                {office.city}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-strong/70">
                {office.role}
              </p>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* By the numbers */}
      <Section tone="navy">
        <Reveal>
          <SectionHeading
            light
            eyebrow="Global scale"
            title={<>The reach behind the firm.</>}
          />
        </Reveal>
        <div className="mt-14 grid gap-px overflow-hidden rounded-sm border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
          {STATS.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.07} className="bg-navy-950 p-8">
              <div className="font-serif text-4xl font-light text-gold-400">
                <Counter value={s.value} suffix={s.suffix} />
              </div>
              <div className="mt-4 text-sm font-semibold text-paper">{s.label}</div>
              <div className="mt-1 text-sm leading-relaxed text-paper/55">{s.sub}</div>
            </Reveal>
          ))}
        </div>
        <p className="mt-6 text-xs text-paper/40">
          Figures are firm-level and illustrative, shown to convey scale and reach.
        </p>
      </Section>

      {/* Regional sections */}
      {REGIONS.map((region, i) => {
        const light = region.tone === "navy" || region.tone === "ink";
        return (
          <Section key={region.name} tone={region.tone}>
            <SplitContent
              reverse={i % 2 === 1}
              eyebrow={region.name}
              title={<>{region.title}</>}
            >
              {region.body.map((p, idx) => (
                <p
                  key={idx}
                  className={light ? "text-paper/75" : undefined}
                >
                  {p}
                </p>
              ))}
            </SplitContent>
          </Section>
        );
      })}

      {/* Partnerships & network */}
      <Section tone="paper">
        <SplitContent
          eyebrow="Partnerships & network"
          title={<>An institutional network without equal.</>}
          bullets={[
            "Sovereign wealth funds and national investment vehicles",
            "Public and corporate pension systems worldwide",
            "Leading research universities and laboratories",
            "Co-investors, operating partners and a global founder community",
          ]}
        >
          <p>
            Our global footprint is more than offices on a map — it is a living
            network of the institutions, partners and people who make frontier
            investing possible. We cultivate these relationships with the same
            long-term discipline we bring to capital itself.
          </p>
          <p>
            That network gives our partners access they could not assemble alone:
            proprietary deal flow, technical expertise and a commercialization
            engine that helps the companies we back scale responsibly, on every
            continent where opportunity emerges.
          </p>
        </SplitContent>
      </Section>

      <CtaBand
        title={<>Partner with a truly global firm.</>}
        body="Wherever you are based, our teams are ready to discuss how ALRION Pillar Capital's global platform aligns with your mandate."
        primary={{ href: "/contact", label: "Connect with a regional team" }}
        secondary={{ href: "/about", label: "About the firm" }}
      />
    </>
  );
}
