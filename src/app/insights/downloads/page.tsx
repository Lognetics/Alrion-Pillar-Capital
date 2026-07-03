import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { Section, CtaBand } from "@/components/sections/blocks";
import { SectionHeading } from "@/components/ui/primitives";
import { DownloadFilter } from "@/components/research/DownloadFilter";
import { DOWNLOADS } from "@/lib/research";

export const metadata: Metadata = {
  title: "Download Center",
  description:
    "One hub for every ALRION Pillar Capital resource: reports, white papers, investor letters and platform factsheets, searchable by type.",
};

export default function DownloadsPage() {
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
        intro="Every public resource in one place: reports, white papers, investor letters and platform factsheets. Filter by type or search by title."
        crumbs={[{ label: "Insights", href: "/insights" }, { label: "Download Center" }]}
      />

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
