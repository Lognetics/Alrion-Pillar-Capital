import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { Section } from "@/components/sections/blocks";
import { Reveal } from "@/components/ui/Reveal";
import { Eyebrow } from "@/components/ui/primitives";
import { NewsletterForm } from "@/components/research/NewsletterForm";
import { FIRM } from "@/lib/site";

export const metadata: Metadata = {
  title: "Newsletter",
  description:
    "Subscribe to The Frontier Brief — research, market intelligence and the house view from ALRION Pillar Capital, delivered to your inbox.",
};

const BENEFITS = [
  {
    title: "The house view, first",
    body: "Our flagship outlook and quarterly addenda reach subscribers before they appear anywhere else.",
  },
  {
    title: "Weekly market intelligence",
    body: "A concise read on the frontier-technology indicators our desk watches — and what they mean.",
  },
  {
    title: "Essays & commentary",
    body: "Long-form thinking from the partnership and timely reactions to the moments that matter.",
  },
  {
    title: "Event invitations",
    body: "Priority access to live briefings, roundtables and on-demand replays.",
  },
];

const PAST_ISSUES = [
  { no: "No. 24", title: "The capital supercycle no one is pricing correctly", date: "June 2026" },
  { no: "No. 23", title: "Power is the new compute", date: "May 2026" },
  { no: "No. 22", title: "Additionality is the only number that matters", date: "May 2026" },
  { no: "No. 21", title: "Reading the interconnect queue", date: "April 2026" },
];

export default function NewsletterPage() {
  return (
    <>
      <PageHero
        eyebrow="Newsletter"
        title={
          <>
            The Frontier
            <span className="text-gilt"> Brief.</span>
          </>
        }
        intro={`Research, market intelligence and the house view from ${FIRM.name} — written for allocators and delivered to your inbox.`}
        crumbs={[{ label: "Insights", href: "/insights" }, { label: "Newsletter" }]}
        align="center"
      />

      {/* Centered subscribe */}
      <Section tone="paper">
        <Reveal className="mx-auto max-w-xl text-center">
          <Eyebrow className="justify-center">Subscribe</Eyebrow>
          <h2 className="mt-6 text-balance font-serif text-3xl font-light leading-tight text-navy-950 md:text-4xl">
            Join allocators reading the frontier each week.
          </h2>
          <p className="mt-5 text-slate-strong/80">
            One thoughtful edition. No noise. Unsubscribe anytime.
          </p>
        </Reveal>

        <Reveal delay={0.1} className="mx-auto mt-10 max-w-xl">
          <NewsletterForm />
        </Reveal>
      </Section>

      {/* What subscribers receive */}
      <Section tone="cloud">
        <div className="mx-auto max-w-2xl text-center">
          <Eyebrow className="justify-center">What you&rsquo;ll get</Eyebrow>
          <h2 className="mt-6 font-serif text-3xl font-light text-navy-950 md:text-4xl">
            Built for the institutional reader.
          </h2>
        </div>
        <div className="mt-12 grid gap-px overflow-hidden rounded-sm border border-line bg-line md:grid-cols-2">
          {BENEFITS.map((b, i) => (
            <Reveal key={b.title} delay={(i % 2) * 0.07} className="bg-paper p-8">
              <h3 className="text-lg font-semibold text-navy-950">{b.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-strong/80">{b.body}</p>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Past issues teaser */}
      <Section tone="paper">
        <div className="mx-auto max-w-2xl text-center">
          <Eyebrow className="justify-center">Recent editions</Eyebrow>
          <h2 className="mt-6 font-serif text-3xl font-light text-navy-950 md:text-4xl">
            A taste of the archive.
          </h2>
        </div>
        <div className="mx-auto mt-12 max-w-2xl divide-y divide-line border-y border-line">
          {PAST_ISSUES.map((p, i) => (
            <Reveal
              key={p.no}
              delay={i * 0.05}
              className="flex items-center justify-between gap-4 py-5"
            >
              <div className="flex items-baseline gap-4">
                <span className="font-serif text-sm text-gold-500">{p.no}</span>
                <span className="font-serif text-lg font-light text-navy-950">{p.title}</span>
              </div>
              <span className="shrink-0 text-xs text-slate-strong/55">{p.date}</span>
            </Reveal>
          ))}
        </div>
        <p className="mt-6 text-center text-xs text-slate-strong/50">
          Past-issue links are illustrative.
        </p>
      </Section>
    </>
  );
}
