export type Insight = {
  slug: string;
  category: string;
  title: string;
  excerpt: string;
  date: string;
  readingTime: string;
  feature?: boolean;
};

export const INSIGHTS: Insight[] = [
  {
    slug: "frontier-outlook-2026",
    category: "Economic Outlook",
    title: "The Frontier Outlook: AI infrastructure and the next capital supercycle",
    excerpt:
      "Compute, energy and capital are converging into a once-in-a-generation buildout. Our house view on where durable value accrues across the AI stack.",
    date: "June 2026",
    readingTime: "12 min",
    feature: true,
  },
  {
    slug: "energy-transition-private-markets",
    category: "Investment Themes",
    title: "Powering intelligence: why the energy transition is a private-markets story",
    excerpt:
      "The grid is the bottleneck of the decade. We examine the asset classes positioned to finance electrification at scale.",
    date: "May 2026",
    readingTime: "9 min",
  },
  {
    slug: "quant-risk-frontier-markets",
    category: "Market Intelligence",
    title: "Quantitative discipline in frontier-technology markets",
    excerpt:
      "How AI-driven models and systematic hedging let us pursue asymmetric returns without sacrificing capital preservation.",
    date: "April 2026",
    readingTime: "8 min",
  },
  {
    slug: "impact-measurement-2026",
    category: "ESG",
    title: "Measuring what matters: our 2026 impact methodology",
    excerpt:
      "A transparent look at how we quantify social and environmental outcomes alongside financial performance.",
    date: "March 2026",
    readingTime: "7 min",
  },
];
