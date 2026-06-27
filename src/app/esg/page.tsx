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
import { FIRM, IMPACT_STATS } from "@/lib/site";

export const metadata: Metadata = {
  title: "ESG & Responsible Capital",
  description:
    "At ALRION Pillar Capital, returns and responsibility are not a trade-off. Our ESG framework integrates environmental, social and governance factors into every investment decision and measures impact alongside performance.",
};

const SDGS = [
  { code: "SDG 7", title: "Affordable & Clean Energy", body: "Backing renewable generation, storage and grid modernization." },
  { code: "SDG 8", title: "Decent Work & Growth", body: "Inclusive enterprises and quality jobs in underserved communities." },
  { code: "SDG 9", title: "Industry & Innovation", body: "Resilient infrastructure and frontier-technology advancement." },
  { code: "SDG 11", title: "Sustainable Cities", body: "Connected, efficient and resilient urban systems." },
  { code: "SDG 12", title: "Responsible Consumption", body: "Circular models and resource-efficient industrial technology." },
  { code: "SDG 13", title: "Climate Action", body: "Decarbonization, climate technology and transition capital." },
];

export default function EsgPage() {
  return (
    <>
      <PageHero
        eyebrow="ESG & Responsible Capital"
        title={
          <>
            Returns and responsibility are
            <span className="text-gilt"> not a trade-off.</span>
          </>
        }
        intro="ALRION Pillar Capital rejects the false choice between performance and progress. We integrate environmental, social and governance factors into every decision and measure impact with the same rigor we apply to returns."
        crumbs={[{ label: "ESG" }]}
      />

      {/* — Thesis ——————————————————————————————————————————————— */}
      <Section tone="paper">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-20">
          <Reveal className="lg:col-span-5">
            <SectionHeading
              eyebrow="Our Thesis"
              title={<>Responsibility is a source of return, not a cost to it.</>}
            />
          </Reveal>
          <Reveal delay={0.1} className="lg:col-span-7">
            <div className="space-y-6 text-lg leading-relaxed text-slate-strong/85">
              <p>
                For too long, responsible investing was framed as a concession —
                a margin of return sacrificed in the name of doing good. At{" "}
                {FIRM.name}, our experience proves the opposite. The companies and
                technologies that will define the next decade are, overwhelmingly,
                the ones solving the world&apos;s hardest environmental and social
                problems.
              </p>
              <p>
                We treat environmental, social and governance factors as material
                drivers of risk and value. A business that wastes resources,
                erodes trust or governs itself poorly is a fragile one; a business
                that does the opposite compounds advantage. ESG analysis is
                therefore embedded in our diligence, our ownership and our
                reporting — not appended to it.
              </p>
              <p>
                The result is a portfolio in which financial prosperity and
                measurable progress reinforce one another. We do not ask our
                partners to choose between the two, because we have built a process
                that does not require the choice.
              </p>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* — Three pillars ——————————————————————————————————————— */}
      <Section tone="cloud">
        <Reveal>
          <SectionHeading
            eyebrow="Three Pillars"
            title={<>Environmental, Social and Governance.</>}
            intro="Each pillar is assessed as a material factor in every commitment we make — and revisited continuously through ownership."
          />
        </Reveal>
        <div className="mt-14">
          <FeatureGrid
            columns={3}
            numbered={false}
            items={[
              {
                title: "Environmental",
                body: "We finance decarbonization, clean energy, climate technology and resource efficiency, while assessing the environmental footprint and resilience of every investment. A carbon strategy and transition lens inform how we underwrite long-term risk.",
              },
              {
                title: "Social",
                body: "We invest in inclusive enterprises, quality employment and economic opportunity in underserved communities. We evaluate workforce practices, diversity, health and safety, and the broader social license of every business we back.",
              },
              {
                title: "Governance",
                body: "We hold our portfolio — and ourselves — to a high standard of board independence, transparency, ethics and accountability. Strong governance is, in our experience, the most reliable leading indicator of durable performance.",
              },
            ]}
          />
        </div>
      </Section>

      {/* — Impact measurement ————————————————————————————————— */}
      <section className="relative overflow-hidden bg-navy-950 py-20 text-paper md:py-28">
        <div className="absolute inset-0 bg-grid opacity-40" />
        <div className="absolute left-1/2 top-0 h-px w-3/4 -translate-x-1/2 bg-gradient-to-r from-transparent via-gold-500/40 to-transparent" />
        <div className="shell relative">
          <Reveal>
            <SectionHeading
              light
              align="center"
              eyebrow="Impact Measurement"
              title={<>What we measure, we can improve.</>}
              intro="We hold ourselves accountable to quantifiable outcomes, reported alongside financial performance and aligned to recognized global standards."
              className="mx-auto"
            />
          </Reveal>
          <div className="mt-16 grid gap-px overflow-hidden rounded-sm border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
            {IMPACT_STATS.map((s, i) => (
              <Reveal key={s.label} delay={i * 0.08} className="bg-navy-950 p-8 md:p-10">
                <p className="font-serif text-4xl font-light text-gilt md:text-5xl">
                  <Counter
                    value={s.value}
                    prefix={s.prefix}
                    suffix={s.suffix}
                    decimals={s.decimals}
                  />
                </p>
                <p className="mt-5 text-sm font-semibold text-paper">{s.label}</p>
                <p className="mt-1 text-xs leading-relaxed text-paper/50">{s.sub}</p>
              </Reveal>
            ))}
          </div>
          <p className="mt-8 text-center text-xs text-paper/40">
            Illustrative figures presented for context. Impact metrics are
            estimates and do not constitute a guarantee of outcomes.
          </p>
        </div>
      </section>

      {/* — UN SDG alignment ———————————————————————————————————— */}
      <Section tone="paper">
        <Reveal>
          <SectionHeading
            eyebrow="Global Standards"
            title={<>Aligned to the UN Sustainable Development Goals.</>}
            intro="We map our impact thesis to the UN SDGs, providing a common, internationally recognized language for the outcomes our capital pursues."
          />
        </Reveal>
        <div className="mt-14 grid gap-px overflow-hidden rounded-sm border border-line bg-line md:grid-cols-2 lg:grid-cols-3">
          {SDGS.map((s, i) => (
            <Reveal key={s.code} delay={(i % 3) * 0.07} className="bg-paper p-8">
              <p className="eyebrow text-gold-600">{s.code}</p>
              <h3 className="mt-4 text-lg font-semibold text-navy-950">{s.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-strong/80">{s.body}</p>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* — Sustainability & carbon ————————————————————————————— */}
      <Section tone="cloud">
        <SplitContent
          eyebrow="Sustainability & Climate"
          title={<>A deliberate strategy for a low-carbon economy.</>}
          bullets={[
            "Carbon footprint assessment across the portfolio",
            "Capital directed to decarbonization and clean energy",
            "Transition risk underwritten in every commitment",
            "Progress reported in our annual ESG report",
          ]}
        >
          <p>
            Climate change is among the most significant long-term risks — and
            opportunities — facing global capital. Our sustainability strategy
            assesses the carbon intensity and physical-risk exposure of our
            investments, and channels capital toward the technologies and
            infrastructure accelerating the energy transition.
          </p>
          <p>
            We publish our climate approach and progress in an annual ESG report,
            holding ourselves accountable to clear, evolving targets rather than to
            sentiment. A low-carbon economy is, to us, both a responsibility and a
            generational investment thesis.
          </p>
        </SplitContent>
      </Section>

      {/* — Diversity, ethics, community ——————————————————————— */}
      <Section tone="navy">
        <Reveal>
          <SectionHeading
            light
            eyebrow="People & Communities"
            title={<>Inclusion, ethics and opportunity by design.</>}
            intro="Our social commitments extend from how we build our own firm to how our capital reaches the communities that need it most."
          />
        </Reveal>
        <div className="mt-14 grid gap-px overflow-hidden rounded-sm border border-white/10 bg-white/10 md:grid-cols-3">
          {[
            {
              title: "Diversity & inclusion",
              body: "We cultivate a multidisciplinary team across backgrounds and disciplines, and assess inclusive practices across our portfolio.",
            },
            {
              title: "Ethics & integrity",
              body: "A clear code of conduct, anti-corruption standards and a culture of integrity govern how we and our partners operate.",
            },
            {
              title: "Community impact",
              body: "Through our Community Equity Fund, we direct inclusive capital toward economic opportunity in underserved communities.",
            },
          ].map((it, i) => (
            <Reveal key={it.title} delay={i * 0.07} className="bg-navy-950 p-8">
              <span className="font-serif text-2xl text-gold-400">0{i + 1}</span>
              <h3 className="mt-5 text-lg font-semibold text-paper">{it.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-paper/65">{it.body}</p>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* — Reporting & accountability —————————————————————————— */}
      <Section tone="paper">
        <SplitContent
          reverse
          eyebrow="Accountability"
          title={<>Reported with the rigor of our financial results.</>}
          bullets={[
            "Annual, audited ESG and impact reporting",
            "Outcomes aligned to the UN SDGs",
            "Carbon strategy and transition disclosure",
            "Independent governance over every metric",
          ]}
        >
          <p>
            Responsibility without accountability is merely intention. Each year
            we publish an ESG and impact report that documents our progress
            against measurable outcomes — the same standard of transparency we
            apply to financial performance, subject to independent review.
          </p>
          <p>
            Our partners receive a clear, consistent account of how their capital
            advances both return and responsibility. We would rather report honest
            progress, including where we fall short, than offer assurances we
            cannot substantiate.
          </p>
        </SplitContent>
      </Section>

      <CtaBand
        title={<>Capital that compounds value — and progress.</>}
        body="Speak with our investor relations team to explore how ALRION Pillar Capital integrates impact with institutional returns."
        primary={{ href: "/contact", label: "Connect with us" }}
        secondary={{ href: "/governance", label: "Our governance" }}
      />
    </>
  );
}
