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
    title: "A platform, not a product: how we approach the year ahead",
    excerpt:
      "Four autonomous strategies, one rigorous framework. Our view on the market context that shapes how each independent strategy is positioned.",
    date: "June 2026",
    readingTime: "10 min",
    feature: true,
  },
  {
    slug: "energy-transition-private-markets",
    category: "Investment Themes",
    title: "Infrastructure growth: the mission-critical layer",
    excerpt:
      "Nuclear lifecycle, grid modernization and OT cybersecurity anchor our Private Equity strategy. Why we look for contracted, investment-grade demand.",
    date: "May 2026",
    readingTime: "9 min",
  },
  {
    slug: "quant-risk-frontier-markets",
    category: "Market Intelligence",
    title: "A systematic approach to global macro",
    excerpt:
      "How our Hedge Fund strategy combines quantitative modelling with fundamental analysis, within a disciplined daily risk framework.",
    date: "April 2026",
    readingTime: "8 min",
  },
  {
    slug: "impact-measurement-2026",
    category: "ESG",
    title: "The ALRION impact model: measuring catalysis, not contribution",
    excerpt:
      "A transparent look at our three impact indicators, wealth equity, employment quality and the capital multiplier, in underserved New York markets.",
    date: "March 2026",
    readingTime: "7 min",
  },
];
