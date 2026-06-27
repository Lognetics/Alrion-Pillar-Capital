import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import {
  Section,
  SplitContent,
  FeatureGrid,
  FaqList,
  CtaBand,
} from "@/components/sections/blocks";
import { SectionHeading } from "@/components/ui/primitives";
import { Reveal } from "@/components/ui/Reveal";
import { FIRM } from "@/lib/site";

export const metadata: Metadata = {
  title: "Investor Center",
  description:
    "A dedicated home for the institutional partners of ALRION Pillar Capital — secure reporting, transparent processes and a relationship built on long-term alignment.",
};

const SUBSCRIPTION_STEPS = [
  {
    no: "01",
    title: "Introduction & alignment",
    body: "We begin with a confidential conversation to understand your mandate, horizon and objectives, and to confirm that our platforms align with your allocation strategy.",
  },
  {
    no: "02",
    title: "Due diligence & access",
    body: "Qualified investors receive secure access to our data room — strategy documentation, audited performance, governance policies and risk frameworks for independent review.",
  },
  {
    no: "03",
    title: "Documentation & onboarding",
    body: "Subscription agreements, KYC and AML verification and investor classification are completed through our digital document center with white-glove support.",
  },
  {
    no: "04",
    title: "Capital commitment",
    body: "Commitments are confirmed and funded against agreed terms, with capital calls and settlement instructions delivered transparently through the portal.",
  },
  {
    no: "05",
    title: "Ongoing partnership",
    body: "Once invested, partners receive continuous reporting, capital-account statements and direct access to our investor relations and investment teams.",
  },
];

export default function InvestorsPage() {
  return (
    <>
      <PageHero
        eyebrow="Investor Center"
        title={
          <>
            A partnership built on
            <span className="text-gilt"> transparency and alignment.</span>
          </>
        }
        intro="The investors who entrust capital to ALRION Pillar Capital are long-term partners, not passive accounts. The Investor Center brings together everything that relationship requires — secure reporting, clear processes and direct access to the people managing your capital."
        crumbs={[{ label: "Investor Center" }]}
      />

      {/* Intro — partnership & transparency */}
      <Section tone="paper">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-20">
          <Reveal className="lg:col-span-5">
            <SectionHeading
              eyebrow="Our commitment"
              title={<>Capital deserves clarity.</>}
            />
          </Reveal>
          <Reveal delay={0.1} className="lg:col-span-7">
            <div className="space-y-6 text-lg leading-relaxed text-slate-strong/85">
              <p>
                Ninety-two percent of the capital we manage is sourced from
                long-term institutional partners. That trust is earned through
                discipline and sustained through transparency — granular
                reporting, independent governance and a standard of communication
                that treats every partner as a co-owner of the outcome.
              </p>
              <p>
                We built the Investor Center to remove friction from that
                relationship. From a first conversation through years of
                stewardship, our partners can access the documents, performance
                data and dedicated support they need, when they need it — held to
                the institutional standard their capital expects.
              </p>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* Who we serve */}
      <Section tone="cloud">
        <Reveal>
          <SectionHeading
            eyebrow="Who we serve"
            title={<>Built for the world's most discerning allocators.</>}
            intro="Our platforms are designed for sophisticated, long-horizon investors who value research-led conviction and institutional-grade governance."
          />
        </Reveal>
        <div className="mt-14">
          <FeatureGrid
            columns={3}
            items={[
              {
                title: "Institutional Investors",
                body: "Asset managers and institutions seeking differentiated exposure to frontier technology through a single, disciplined research partner.",
              },
              {
                title: "Pension Funds",
                body: "Public and corporate retirement systems pursuing durable, risk-managed returns to meet long-dated liabilities for their beneficiaries.",
              },
              {
                title: "Sovereign Wealth Funds",
                body: "National investment vehicles allocating patient, strategic capital into the technologies shaping the next economic era.",
              },
              {
                title: "Family Offices",
                body: "Single- and multi-family offices seeking direct access to private innovation alongside transparent, principled stewardship.",
              },
              {
                title: "Foundations & Endowments",
                body: "Mission-driven capital pools that value the alignment of competitive returns with measurable social and environmental impact.",
              },
              {
                title: "Insurance Companies",
                body: "Insurers and reinsurers seeking liability-aware, risk-attributed strategies with the liquidity and reporting their mandates demand.",
              },
            ]}
          />
        </div>
      </Section>

      {/* Investor Center features */}
      <Section tone="navy">
        <Reveal>
          <SectionHeading
            light
            eyebrow="Investor Center features"
            title={<>Everything your relationship requires, in one place.</>}
            intro="A secure, integrated suite of tools that keeps our partners informed, equipped and connected at every stage of the investment lifecycle."
          />
        </Reveal>
        <div className="mt-14 grid gap-px overflow-hidden rounded-sm border border-white/10 bg-white/10 md:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: "Investor Portal",
              body: "A secure, single sign-on gateway to your capital accounts, statements, performance and every document we share with you.",
            },
            {
              title: "Subscription Process",
              body: "A guided, end-to-end onboarding workflow with digital documentation, verification and dedicated support at each step.",
            },
            {
              title: "Document Center",
              body: "A controlled repository for subscription agreements, audited reports, tax documents and governance policies — versioned and time-stamped.",
            },
            {
              title: "Capital Requests",
              body: "Transparent capital-call and distribution notices with full settlement detail, delivered ahead of every funding event.",
            },
            {
              title: "Institutional Reporting",
              body: "Consistent, granular reporting on exposure, attribution, risk and impact — built to the cadence and standard our partners expect.",
            },
            {
              title: "Direct Access",
              body: "A named relationship manager and direct lines to our investment and risk teams, so the people managing your capital are never far away.",
            },
          ].map((it, i) => (
            <Reveal key={it.title} delay={(i % 3) * 0.07} className="bg-navy-950 p-8">
              <span className="font-serif text-2xl text-gold-400">0{i + 1}</span>
              <h3 className="mt-5 text-lg font-semibold text-paper">{it.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-paper/65">
                {it.body}
              </p>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Subscription process timeline */}
      <Section tone="paper">
        <Reveal>
          <SectionHeading
            eyebrow="The subscription process"
            title={<>A clear path from first conversation to commitment.</>}
            intro="Every partnership begins the same way — with diligence, alignment and complete transparency. Here is how capital is committed at ALRION Pillar Capital."
          />
        </Reveal>
        <div className="mt-16 border-l border-line pl-8 md:pl-12">
          {SUBSCRIPTION_STEPS.map((step, i) => (
            <Reveal
              key={step.no}
              delay={i * 0.06}
              className="relative grid gap-2 pb-12 last:pb-0 md:grid-cols-12 md:gap-8"
            >
              <span className="absolute -left-[2.6rem] top-1 flex h-7 w-7 items-center justify-center rounded-full border border-gold-500/40 bg-paper text-xs font-semibold text-gold-600 md:-left-[3.65rem]">
                {step.no}
              </span>
              <h3 className="font-serif text-2xl font-light text-navy-950 md:col-span-5">
                {step.title}
              </h3>
              <p className="leading-relaxed text-slate-strong/80 md:col-span-7">
                {step.body}
              </p>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Reporting / split */}
      <Section tone="cloud">
        <SplitContent
          reverse
          eyebrow="Reporting & oversight"
          title={<>Reporting our partners can rely on.</>}
          bullets={[
            "Quarterly capital-account and performance statements",
            "Detailed exposure, attribution and risk reporting",
            "Audited annual impact metrics aligned to the UN SDGs",
            "Independent governance separate from investing teams",
          ]}
        >
          <p>
            Long-term institutional capital deserves an institutional standard of
            communication. Our reporting is timely, granular and consistent —
            delivered through the portal and reviewed by an oversight function
            that operates independently of our investing teams.
          </p>
          <p>
            We report on impact with the same rigor as performance, quantifying
            social and environmental outcomes alongside financial return — so our
            partners can see, in detail, exactly how their capital is at work.
          </p>
        </SplitContent>
      </Section>

      {/* FAQ */}
      <Section tone="paper">
        <Reveal>
          <SectionHeading
            eyebrow="Investor FAQ"
            title={<>Answers for prospective partners.</>}
          />
        </Reveal>
        <div className="mt-12">
          <FaqList
            items={[
              {
                q: "Who is eligible to invest with ALRION Pillar Capital?",
                a: "Our funds are available exclusively to qualified institutional and professional investors as defined by applicable regulation in their jurisdiction. Eligibility is confirmed during onboarding through investor classification and verification.",
              },
              {
                q: "What is the minimum commitment?",
                a: "Minimums vary by platform and vehicle. Our hedge fund, private equity, venture and community equity strategies each carry distinct terms, which our investor relations team will review with you in the context of your mandate.",
              },
              {
                q: "How do you report performance and impact?",
                a: "Partners receive quarterly capital-account and performance statements alongside detailed exposure, attribution and risk reporting through the secure portal. Impact metrics are reported annually, audited and aligned to the UN Sustainable Development Goals.",
              },
              {
                q: "How is my capital protected and governed?",
                a: "An independent oversight function — separate from our investing teams — enforces position limits, validates models and reports directly to governance. Robust compliance, third-party administration and audited reporting underpin every figure we share.",
              },
              {
                q: "How do I begin the subscription process?",
                a: "Reach out to our investor relations team to arrange an introductory conversation. From there, qualified investors are granted secure data-room access and guided through documentation, verification and commitment with dedicated support at each step.",
              },
            ]}
          />
        </div>
      </Section>

      <CtaBand
        title={<>Begin a conversation with our investor relations team.</>}
        body={`Connect with us to explore how ALRION Pillar Capital's platforms align with your mandate. Reach our investor relations desk at ${FIRM.email}.`}
        primary={{ href: "/contact", label: "Contact investor relations" }}
        secondary={{ href: "/strategies", label: "Explore our strategies" }}
      />
    </>
  );
}
