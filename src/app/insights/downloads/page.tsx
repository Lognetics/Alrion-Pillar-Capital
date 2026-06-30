import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { Section, CtaBand } from "@/components/sections/blocks";
import { SectionHeading } from "@/components/ui/primitives";
import { Reveal } from "@/components/ui/Reveal";
import { Counter } from "@/components/ui/Counter";
import { DownloadFilter } from "@/components/research/DownloadFilter";
import { DOWNLOADS } from "@/lib/research";

export const metadata: Metadata = {
  title: "Download Center",
  description:
    "One hub for every ALRION Pillar Capital resource — reports, white papers, investor letters and platform factsheets, searchable by type.",
};

export default function DownloadsPage() {
  const counts = {
    total: DOWNLOADS.length,
    papers: DOWNLOADS.filter((d) => d.type === "White Paper").length,
    factsheets: DOWNLOADS.filter((d) => d.type === "Factsheet").length,
    reports: DOWNLOADS.filter((d) => d.type === "Report" || d.type === "Impact" || d.type === "Letter").length,
  };

  const stats = [
    { value: counts.total, label: "Total resources" },
    { value: counts.papers, label: "White papers" },
    { value: counts.reports, label: "Reports & letters" },
    { value: counts.factsheets, label: "Factsheets" },
  ];

  return (
    <>
      <PageHero
        eyebrow="Resource Hub"
        title={
          <>
            The download
            <span className="text-gilt"> center.</span>
          </>
        }
        intro="Every public resource in one place — reports, white papers, investor letters and platform factsheets. Filter by type or search by title."
        crumbs={[{ label: "Insights", href: "/insights" }, { label: "Download Center" }]}
      />

      {/* Quick stats */}
      <Section tone="ink" className="!py-14">
        <div className="grid gap-px overflow-hidden rounded-sm border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={(i % 4) * 0.06} className="bg-navy-950 p-8 text-center">
              <p className="font-serif text-4xl font-light text-paper">
                <Counter value={s.value} />
              </p>
              <p className="mt-2 text-xs font-semibold uppercase tracking-wider text-paper/50">
                {s.label}
              </p>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Filterable library */}
      <Section tone="paper">
        <SectionHeading
          eyebrow="Library"
          title="Browse every resource"
          intro="Use the filters and search to find exactly what you need."
        />
        <div className="mt-12">
          <DownloadFilter items={DOWNLOADS} />
        </div>
      </Section>

      <CtaBand
        title="Looking for limited-partner materials?"
        body="Capital-account statements and LP reporting are available through our investor relations team."
        primary={{ href: "/contact", label: "Investor relations" }}
        secondary={{ href: "/insights/reports", label: "Report archive" }}
      />
    </>
  );
}
