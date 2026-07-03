/* ============================================================
   Media-section content: news, interviews and brand kit.
   Copy faithful to ALRION Pillar Capital, a New York platform
   established in 2024. No AUM, returns or track-record claims.
   ============================================================ */

/* News */

export type NewsItem = {
  date: string;
  category: string;
  title: string;
  excerpt: string;
  readTime: string;
};

export const FEATURED_NEWS: NewsItem = {
  date: "September 12, 2024",
  category: "Firm",
  title: "ALRION Pillar Capital launches as a four-strategy New York platform",
  excerpt:
    "The firm is established in New York as an institutional alternative investment platform of four autonomous Delaware Limited Partnerships, hedge fund, private equity, venture and community equity, united by one rigorous framework of governance and fiduciary care.",
  readTime: "5 min read",
};

export const NEWS_ITEMS: NewsItem[] = [
  {
    date: "September 5, 2024",
    category: "Firm",
    title: "Four autonomous strategies, one framework: the platform takes shape",
    excerpt:
      "Each strategy is structured as a separate Delaware LP with its own investment committee and risk framework, sharing a single standard of transparency and oversight.",
    readTime: "5 min read",
  },
  {
    date: "October 3, 2024",
    category: "Governance",
    title: "Firm appoints independent third-party administration and audit",
    excerpt:
      "The platform engages comprehensive third-party fund administration and commits to annual Big Four audits, with independent valuation committees on illiquid positions.",
    readTime: "4 min read",
  },
  {
    date: "November 14, 2024",
    category: "Community Equity",
    title: "Community Equity Fund formalizes its MWBE mandate",
    excerpt:
      "The impact strategy commits to allocating a majority of capital to Minority- and Women-Owned Business Enterprises, seeded by carried interest from the institutional strategies.",
    readTime: "4 min read",
  },
  {
    date: "December 10, 2024",
    category: "Venture",
    title: "Venture strategy convenes its Technical Advisory Board",
    excerpt:
      "The Frontier Technology strategy assembles an advisory board of former government and military leaders to inform diligence across AI, biotechnology and defense and space.",
    readTime: "3 min read",
  },
  {
    date: "January 22, 2025",
    category: "Private Equity",
    title: "Infrastructure Growth strategy defines its investment focus",
    excerpt:
      "The private equity LP sets its mandate on mission-critical infrastructure, nuclear lifecycle, grid modernization and operational-technology cybersecurity, targeting investment-grade counterparties.",
    readTime: "5 min read",
  },
  {
    date: "March 6, 2025",
    category: "Governance",
    title: "Firm publishes its transparency and reporting standards",
    excerpt:
      "The platform sets monthly reporting for liquid strategies, quarterly deep-dive reviews for private markets and real-time access for institutional partners.",
    readTime: "4 min read",
  },
  {
    date: "May 15, 2025",
    category: "Hedge Fund",
    title: "Global Macro Excellence strategy outlines its risk framework",
    excerpt:
      "The hedge fund LP describes a systematic, cross-asset approach governed by a daily 95% Value-at-Risk measure and a defined maximum gross exposure limit.",
    readTime: "4 min read",
  },
];

/* Interviews */

export type Interview = {
  topic: string;
  title: string;
  speaker: string;
  role: string;
  outlet: string;
  duration: string;
  date: string;
};

export const FEATURED_INTERVIEW: Interview = {
  topic: "Platform Design",
  title: "A platform, not a product: why we built four autonomous strategies",
  speaker: "Managing Partner",
  role: "ALRION Pillar Capital",
  outlet: "Global Capital Forum",
  duration: "28:14",
  date: "October 2024",
};

export const INTERVIEWS: Interview[] = [
  {
    topic: "Global Macro",
    title: "Combining quantitative modelling with fundamental analysis",
    speaker: "Portfolio Manager",
    role: "Hedge Fund LP",
    outlet: "Markets & Machines",
    duration: "19:42",
    date: "November 2024",
  },
  {
    topic: "Impact",
    title: "Underserved markets as a source of compelling risk-adjusted opportunity",
    speaker: "Head of Impact",
    role: "Community Equity Fund LP",
    outlet: "The Capital Dialogue",
    duration: "23:05",
    date: "December 2024",
  },
  {
    topic: "Venture",
    title: "Partnering with founders at the inflection point of validation and deployment",
    speaker: "Partner, Venture",
    role: "Venture Capital LP",
    outlet: "Frontier Builders",
    duration: "31:18",
    date: "January 2025",
  },
  {
    topic: "Governance",
    title: "What independent governance really requires",
    speaker: "Chief Risk Officer",
    role: "Risk & Oversight",
    outlet: "Boardroom Briefing",
    duration: "17:50",
    date: "February 2025",
  },
  {
    topic: "Infrastructure",
    title: "Growth capital for the infrastructure underpinning the modern economy",
    speaker: "Partner, Private Equity",
    role: "Private Equity LP",
    outlet: "Real Assets Review",
    duration: "26:33",
    date: "March 2025",
  },
];

/* Brand & Media Kit */

export type Swatch = {
  name: string;
  hex: string;
  token: string;
  dark?: boolean;
};

export const BRAND_PALETTE: Swatch[] = [
  { name: "Navy 950", hex: "#0A1124", token: "navy-950", dark: true },
  { name: "Navy 800", hex: "#16213F", token: "navy-800", dark: true },
  { name: "Gold 500", hex: "#C8A24A", token: "gold-500" },
  { name: "Gold 400", hex: "#D9BE76", token: "gold-400" },
  { name: "Paper", hex: "#F7F5F0", token: "paper" },
  { name: "Cloud", hex: "#ECEAE3", token: "cloud" },
  { name: "Ink", hex: "#05080F", token: "ink", dark: true },
  { name: "Slate", hex: "#3D4456", token: "slate-strong", dark: true },
];

export const LOGO_DOS = [
  "Maintain clear space equal to the height of the 'A' on all sides",
  "Use the wordmark in navy on light backgrounds, paper on dark",
  "Preserve the original aspect ratio at every size",
  "Use approved gold only as an accent within the mark",
];

export const LOGO_DONTS = [
  "Do not stretch, condense or distort the wordmark",
  "Do not recolor the logo outside the approved palette",
  "Do not place the mark on low-contrast or busy backgrounds",
  "Do not add shadows, outlines or other effects",
];

export type AssetRow = {
  name: string;
  formats: string;
  note: string;
};

export const ASSET_ROWS: AssetRow[] = [
  { name: "Primary Wordmark", formats: "SVG · PNG · EPS", note: "Navy and paper variants" },
  { name: "Monogram Mark", formats: "SVG · PNG", note: "Square and circular lockups" },
  { name: "Color Palette", formats: "ASE · PDF", note: "Print and digital values" },
  { name: "Brand Guidelines", formats: "PDF", note: "Full usage and voice manual" },
  { name: "Leadership Headshots", formats: "ZIP · JPG", note: "High-resolution, approved" },
  { name: "Fact Sheet", formats: "PDF", note: "Firm overview and key figures" },
];

export const BRAND_TYPEFACES = [
  {
    name: "Inter Tight",
    role: "Display",
    usage: "Headlines and editorial moments, set in a light weight for a considered, institutional voice.",
    sample: "Capital for the frontier.",
    serif: false,
  },
  {
    name: "Inter",
    role: "Body & Interface",
    usage: "Body copy, labels and interface text, clear, modern and highly legible at every size.",
    sample: "Research-led conviction, governed and transparent.",
    serif: false,
  },
];
