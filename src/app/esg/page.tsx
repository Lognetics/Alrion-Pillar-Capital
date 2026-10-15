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
import { FIRM, IMPACT_INDICATORS, GOVERNANCE_STANDARDS } from "@/lib/site";

export const metadata: Metadata = {
  title: "ESG & Responsible Capital",
  description:
    "At ALRION Pillar Capital, responsible investing begins with governance. We integrate environmental, social and governance considerations into how each Limited Partnership is run, and we express impact directly through the Community Equity Fund.",
};

export default function EsgPage() {
  return (
    <>
      <PageHero
        eyebrow="ESG & Responsible Capital"
        title={
          <>
            Responsible capital begins with
            <span className="text-gilt"> governance.</span>
          </>
        }
        intro="ALRION Pillar Capital is a New York platform of four independent Delaware Limited Partnerships. Our approach to ESG is modest and concrete: sound governance in how each strategy is run, and real impact through the Community Equity Fund."
        crumbs={[{ label: "ESG" }]}
      />

      {/* Thesis */}
      <Section tone="paper">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-20">
          <Reveal className="lg:col-span-5">
            <SectionHeading
              eyebrow="Our View"
              title={<>Governance first. Impact where we can prove it.</>}
            />
          </Reveal>
          <Reveal delay={0.1} className="lg:col-span-7">
            <div className="space-y-6 text-lg leading-relaxed text-slate-strong/85">
              <p>
                We do not present ourselves as a large sustainability program. {FIRM.name}{" "}
                is a young platform, and we would rather be honest about that than
                claim a track record we do not have.
              </p>
              <p>
                What we can stand behind is governance. Each strategy is a separate
                Limited Partnership with its own investment committee, its own risk
                framework and independent oversight. Environmental, social and
                governance factors are treated as material drivers of risk and
                value, considered in diligence and in how we hold positions, rather
                than appended as a marketing layer.
              </p>
              <p>
                Where our capital reaches communities directly is through the
                Community Equity Fund, which proves that underserved markets in New
                York can represent compelling risk-adjusted opportunities.
              </p>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* Three pillars */}
      <Section tone="cloud">
        <Reveal>
          <SectionHeading
            eyebrow="Three Pillars"
            title={<>Environmental, Social and Governance.</>}
            intro="Each pillar is treated as a material factor in how a strategy is diligenced, owned and reported, not as a separate initiative."
          />
        </Reveal>
        <div className="mt-14">
          <FeatureGrid
            columns={3}
            numbered={false}
            items={[
              {
                title: "Environmental",
                body: "We assess environmental footprint and resilience where it is material to an investment, and our Infrastructure Growth strategy deploys capital into the energy, grid and operational systems that underpin the modern economy.",
              },
              {
                title: "Social",
                body: "Through the Community Equity Fund, we direct capital toward economic opportunity in historically underserved communities in New York.",
              },
              {
                title: "Governance",
                body: "We hold ourselves to a high standard of independence, transparency and accountability. Strong governance is, in our experience, the most reliable leading indicator of durable performance.",
              },
            ]}
          />
        </div>
      </Section>

      {/* Governance standards */}
      <Section tone="navy">
        <Reveal>
          <SectionHeading
            light
            eyebrow="Governance Standards"
            title={<>The standards that hold us accountable.</>}
            intro="Responsible capital is a matter of structure, not sentiment. Four standards govern how every Limited Partnership on the platform operates."
          />
        </Reveal>
        <div className="mt-14 grid gap-px overflow-hidden rounded-sm border border-white/10 bg-white/10 md:grid-cols-2">
          {GOVERNANCE_STANDARDS.map((s, i) => (
            <Reveal key={s.title} delay={(i % 2) * 0.08} className="bg-navy-950 p-8 md:p-10">
              <span className="font-serif text-2xl text-gold-400">0{i + 1}</span>
              <h3 className="mt-5 text-lg font-semibold text-paper">{s.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-paper/65">{s.body}</p>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Community Equity Fund model */}
      <Section tone="paper">
        <SplitContent
          eyebrow="Community Equity Fund"
          title={<>Impact expressed through investment, not charity.</>}
          bullets={[
            "Focused on underserved markets in New York",
            "Seeded by carried interest from the institutional strategies",
            "Measured against wealth, employment and capital catalysis",
          ]}
        >
          <p>
            The clearest expression of our social commitment is the Community Equity
            Fund. Its thesis is straightforward: underserved markets represent some
            of the most compelling risk-adjusted opportunities in New York, and
            investment, not philanthropy, is the durable way to unlock them.
          </p>
          <p>
            The fund is seeded by carried interest generated across the
            institutional strategies, which aligns its growth with the performance
            of the wider platform. We measure its outcomes through the same
            indicators we hold ourselves to on our Impact page.
          </p>
        </SplitContent>
      </Section>

      {/* Impact indicators */}
      <Section tone="cloud">
        <Reveal>
          <SectionHeading
            eyebrow="How We Measure Impact"
            title={<>Indicators we can stand behind.</>}
            intro="We track qualitative indicators rather than headline figures we cannot yet substantiate. These are the outcomes the Community Equity Fund is built to advance."
          />
        </Reveal>
        <div className="mt-14 grid gap-px overflow-hidden rounded-sm border border-line bg-line md:grid-cols-3">
          {IMPACT_INDICATORS.map((it, i) => (
            <Reveal key={it.title} delay={(i % 3) * 0.07} className="bg-paper p-8">
              <span className="font-serif text-2xl text-gold-500">0{i + 1}</span>
              <h3 className="mt-5 text-lg font-semibold text-navy-950">{it.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-strong/80">{it.body}</p>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Accountability */}
      <Section tone="paper">
        <SplitContent
          reverse
          eyebrow="Accountability"
          title={<>Honest reporting, held to the same standard as our financials.</>}
          bullets={[
            "Annual audits conducted by an independent auditor",
            "Comprehensive third-party administration",
            "Independent valuation committees on illiquid positions",
            "Governance considerations documented in our reporting",
          ]}
        >
          <p>
            Responsibility without accountability is merely intention. We would
            rather report honest progress, including where we fall short, than offer
            assurances we cannot substantiate.
          </p>
          <p>
            The same governance that protects financial reporting, independent
            audit, third-party administration and separate oversight for each
            Limited Partnership, extends to how we account for impact.
          </p>
        </SplitContent>
      </Section>

      <CtaBand
        title={<>Capital that seeks return, and opportunity.</>}
        body="Speak with our team to explore how ALRION Pillar Capital integrates governance and impact across the platform."
        primary={{ href: "/impact", label: "Explore our impact" }}
        secondary={{ href: "/governance", label: "Our governance" }}
      />
    </>
  );
}
