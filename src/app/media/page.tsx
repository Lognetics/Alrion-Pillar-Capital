import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { Section, CtaBand } from "@/components/sections/blocks";
import { SectionHeading } from "@/components/ui/primitives";
import { Reveal } from "@/components/ui/Reveal";
import { FIRM } from "@/lib/site";

export const metadata: Metadata = {
  title: "Media Center",
  description:
    "Press releases, media resources and news from ALRION Pillar Capital, the official source for journalists, partners and the public.",
};

const PRESS_RELEASES = [
  {
    date: "September 2024",
    category: "Firm",
    title:
      "ALRION Pillar Capital launches as a four-strategy New York platform",
    body: "The firm is established in New York as an institutional alternative investment platform of four autonomous Delaware Limited Partnerships, united by one rigorous framework of governance and fiduciary care.",
  },
  {
    date: "October 2024",
    category: "Governance",
    title:
      "Firm appoints independent third-party administration and commits to annual audits",
    body: "The platform engages comprehensive third-party fund administration and independent audits, with independent valuation committees on illiquid positions.",
  },
  {
    date: "December 2024",
    category: "Appointment",
    title:
      "Venture strategy convenes its Technical Advisory Board",
    body: "The Frontier Technology strategy assembles an advisory board of former government and military leaders to inform diligence across AI, biotechnology and defense and space.",
  },
  {
    date: "March 2025",
    category: "Governance",
    title: "Firm publishes its transparency and reporting standards",
    body: "The platform sets monthly reporting for liquid strategies, quarterly deep-dive reviews for private markets and real-time access for institutional partners.",
  },
];

const IN_THE_NEWS = [
  {
    outlet: "Global Capital Forum",
    type: "Feature",
    title: "A platform, not a product: inside the case for four autonomous strategies",
  },
  {
    outlet: "The Allocator",
    type: "Interview",
    title: "On independent governance and fiduciary care for the allocators who ask harder questions",
  },
  {
    outlet: "The Capital Dialogue",
    type: "Profile",
    title: "Why underserved markets can offer some of the most compelling risk-adjusted opportunity",
  },
  {
    outlet: "Frontier Builders",
    type: "Podcast",
    title: "Partnering with founders at the inflection point of validation and deployment",
  },
];

export default function MediaPage() {
  return (
    <>
      <PageHero
        eyebrow="Media Center"
        title={
          <>
            The official source for
            <span className="text-gilt"> Alrion news.</span>
          </>
        }
        intro="Press releases, media resources and coverage from ALRION Pillar Capital. For interviews, commentary or brand assets, our media relations team is ready to help journalists on deadline."
        crumbs={[{ label: "Media Center" }]}
      />

      {/* Press releases */}
      <Section tone="paper">
        <Reveal>
          <SectionHeading
            eyebrow="Press releases"
            title={<>The latest from the firm.</>}
            intro="Official announcements on our capital, platforms, research and people."
          />
        </Reveal>
        <div className="mt-12 grid gap-px overflow-hidden rounded-sm border border-line bg-line">
          {PRESS_RELEASES.map((release, i) => (
            <Reveal key={release.title} delay={i * 0.05} className="group">
              <div className="flex flex-col gap-5 bg-paper p-8 transition-colors duration-500 hover:bg-navy-950 md:flex-row md:items-start md:gap-10">
                <div className="flex shrink-0 items-center gap-3 md:w-44 md:flex-col md:items-start md:gap-2">
                  <span className="text-sm font-semibold text-navy-900 transition-colors duration-500 group-hover:text-gold-300">
                    {release.date}
                  </span>
                  <span className="rounded-full border border-line px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.15em] text-slate-strong/60 transition-colors duration-500 group-hover:border-white/15 group-hover:text-paper/55">
                    {release.category}
                  </span>
                </div>
                <div>
                  <h3 className="font-serif text-xl font-light leading-snug text-navy-950 transition-colors duration-500 group-hover:text-paper">
                    {release.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-strong/75 transition-colors duration-500 group-hover:text-paper/65">
                    {release.body}
                  </p>
                  <span className="mt-4 inline-block text-xs font-semibold tracking-wide text-gold-600 transition-colors duration-500 group-hover:text-gold-300">
                    Read release →
                  </span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Media resources */}
      <Section tone="cloud">
        <Reveal>
          <SectionHeading
            eyebrow="Media resources"
            title={<>Brand assets & resources.</>}
            intro="Everything journalists and partners need to represent ALRION Pillar Capital accurately and consistently."
          />
        </Reveal>
        <div className="mt-14 grid gap-px overflow-hidden rounded-sm border border-line bg-line md:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: "Logo & wordmark",
              body: "The Alrion logo and wordmark in approved formats, with clear-space and usage guidelines for print and digital.",
            },
            {
              title: "Brand guidelines",
              body: "Our color palette, typography and visual standards, ensuring the firm is represented to a consistent standard.",
            },
            {
              title: "Leadership biographies",
              body: "Approved biographies and headshots of our senior leadership team, available on request to credentialed media.",
            },
            {
              title: "Firm fact sheet",
              body: "Key facts about the firm, its four strategies and its structure as independent Delaware Limited Partnerships.",
            },
            {
              title: "Photography library",
              body: "Approved firm photography and imagery of our New York headquarters for editorial use.",
            },
            {
              title: "Research & publications",
              body: "Our latest house views, white papers and the annual impact report, ready for citation and review.",
            },
          ].map((item, i) => (
            <Reveal key={item.title} delay={(i % 3) * 0.07} className="bg-paper p-8">
              <h3 className="text-lg font-semibold text-navy-950">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-strong/75">
                {item.body}
              </p>
              <span className="mt-5 inline-block text-xs font-semibold tracking-wide text-gold-600">
                Request access →
              </span>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* In the news */}
      <Section tone="navy">
        <Reveal>
          <SectionHeading
            light
            eyebrow="In the news"
            title={<>Coverage & interviews.</>}
            intro="A selection of recent features, interviews and commentary on ALRION Pillar Capital and our approach to frontier investing."
          />
        </Reveal>
        <div className="mt-14 grid gap-px overflow-hidden rounded-sm border border-white/10 bg-white/10 md:grid-cols-2">
          {IN_THE_NEWS.map((item, i) => (
            <Reveal key={item.title} delay={(i % 2) * 0.07} className="bg-navy-950 p-8">
              <div className="flex items-center gap-3 text-xs text-paper/45">
                <span className="font-semibold text-gold-300">{item.outlet}</span>
                <span className="h-1 w-1 rounded-full bg-gold-500" />
                <span className="uppercase tracking-[0.15em]">{item.type}</span>
              </div>
              <h3 className="mt-4 font-serif text-xl font-light leading-snug text-paper">
                {item.title}
              </h3>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Press contact */}
      <Section tone="paper">
        <Reveal className="rounded-sm border border-line bg-cloud p-10 md:p-14">
          <div className="grid gap-8 md:grid-cols-2 md:items-center">
            <div>
              <span className="eyebrow text-gold-600">Press contact</span>
              <h2 className="mt-5 font-serif text-3xl font-light leading-tight text-navy-950 md:text-4xl">
                Working on a story?
              </h2>
              <p className="mt-4 max-w-md leading-relaxed text-slate-strong/80">
                Our media relations team responds promptly to credentialed
                journalists. For interviews, expert commentary or brand assets,
                please reach out directly.
              </p>
            </div>
            <div className="md:text-right">
              <p className="text-sm font-semibold uppercase tracking-[0.15em] text-slate-strong/55">
                Media enquiries
              </p>
              <a
                href={`mailto:${FIRM.press}`}
                className="mt-2 inline-block font-serif text-2xl font-light text-navy-950 underline-offset-4 transition-colors hover:text-gold-600 hover:underline"
              >
                {FIRM.press}
              </a>
              <p className="mt-6 text-sm font-semibold uppercase tracking-[0.15em] text-slate-strong/55">
                By telephone
              </p>
              <a
                href={`tel:${FIRM.phone.replace(/[^+\d]/g, "")}`}
                className="mt-2 inline-block text-lg text-navy-900 underline-offset-4 transition-colors hover:text-gold-600 hover:underline"
              >
                {FIRM.phone}
              </a>
            </div>
          </div>
        </Reveal>
      </Section>

      <CtaBand
        title={<>Read the thinking behind the headlines.</>}
        body="Explore our research desk's house views, white papers and market intelligence."
        primary={{ href: "/insights", label: "Visit Insights" }}
        secondary={{ href: "/contact", label: "Contact the team" }}
      />
    </>
  );
}
