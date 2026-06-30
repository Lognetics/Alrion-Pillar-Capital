/* ============================================================
   Media-section content: news, interviews and brand kit.
   Original copy faithful to ALRION Pillar Capital. Dates are
   2026; figures are illustrative where noted.
   ============================================================ */

/* — News ————————————————————————————————————————————————————— */

export type NewsItem = {
  date: string;
  category: string;
  title: string;
  excerpt: string;
  readTime: string;
};

export const FEATURED_NEWS: NewsItem = {
  date: "June 24, 2026",
  category: "Firm",
  title: "ALRION Pillar Capital crosses $14 billion in capital under management",
  excerpt:
    "The firm marks a defining milestone across its four platforms, driven by sustained institutional demand for disciplined, research-led exposure to frontier technology. Leadership outlines the next phase of measured, governance-first growth.",
  readTime: "5 min read",
};

export const NEWS_ITEMS: NewsItem[] = [
  {
    date: "June 12, 2026",
    category: "Quant Research",
    title: "Inside the model: how Alrion's quant desk adapts to shifting regimes",
    excerpt:
      "Our research team details the validation and drift-monitoring discipline that keeps AI-driven signals honest as market conditions change.",
    readTime: "6 min read",
  },
  {
    date: "May 28, 2026",
    category: "Community Equity",
    title: "Community Equity Fund expands into three new regions",
    excerpt:
      "The impact-led platform broadens its mandate to channel inclusive capital into underserved communities across the Americas, EMEA and APAC.",
    readTime: "4 min read",
  },
  {
    date: "May 9, 2026",
    category: "Venture",
    title: "Alrion leads growth round in autonomous robotics platform",
    excerpt:
      "A new investment from the venture platform backs a category-defining founder building physical AI for industrial automation.",
    readTime: "3 min read",
  },
  {
    date: "April 21, 2026",
    category: "Governance",
    title: "Annual report 2025 published with expanded ESG disclosure",
    excerpt:
      "The firm deepens its transparency commitments, broadening climate and impact reporting in line with recognized frameworks.",
    readTime: "4 min read",
  },
  {
    date: "April 3, 2026",
    category: "Private Equity",
    title: "Private equity platform completes infrastructure modernization deal",
    excerpt:
      "Control capital and operational expertise combine to modernize critical energy and transportation assets in the real economy.",
    readTime: "5 min read",
  },
  {
    date: "March 18, 2026",
    category: "Global",
    title: "Alrion opens expanded research presence across APAC",
    excerpt:
      "The firm strengthens its Singapore hub, extending integrated research and risk coverage across the Asia-Pacific region.",
    readTime: "3 min read",
  },
  {
    date: "February 27, 2026",
    category: "Impact",
    title: "Climate and impact AUM reaches new milestone",
    excerpt:
      "Capital aligned to the UN SDGs grows as institutional partners deepen their commitment to returns with measurable progress.",
    readTime: "4 min read",
  },
];

/* — Interviews ———————————————————————————————————————————————— */

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
  topic: "Frontier Investing",
  title: "Why discipline, not prediction, defines investing at the frontier",
  speaker: "Managing Partner",
  role: "ALRION Pillar Capital",
  outlet: "Global Capital Forum",
  duration: "28:14",
  date: "June 2026",
};

export const INTERVIEWS: Interview[] = [
  {
    topic: "Quantitative Models",
    title: "Human judgment and machine intelligence in modern markets",
    speaker: "Head of Quantitative Research",
    role: "Hedge Fund Platform",
    outlet: "Markets & Machines",
    duration: "19:42",
    date: "May 2026",
  },
  {
    topic: "Impact",
    title: "Rejecting the trade-off between returns and progress",
    speaker: "Head of Impact",
    role: "Community Equity Fund",
    outlet: "The Capital Dialogue",
    duration: "23:05",
    date: "May 2026",
  },
  {
    topic: "Venture",
    title: "Backing category-defining founders in deep tech",
    speaker: "Partner, Venture",
    role: "Venture Capital Platform",
    outlet: "Frontier Builders",
    duration: "31:18",
    date: "April 2026",
  },
  {
    topic: "Governance",
    title: "What institutional governance really requires",
    speaker: "Chief Risk Officer",
    role: "Risk & Compliance",
    outlet: "Boardroom Briefing",
    duration: "17:50",
    date: "March 2026",
  },
  {
    topic: "Private Equity",
    title: "Patient capital and the modernization of the real economy",
    speaker: "Partner, Private Equity",
    role: "Private Equity Platform",
    outlet: "Real Assets Review",
    duration: "26:33",
    date: "February 2026",
  },
];

/* — Brand & Media Kit ———————————————————————————————————————— */

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
    usage: "Body copy, labels and interface text — clear, modern and highly legible at every size.",
    sample: "Research-led conviction, governed and transparent.",
    serif: false,
  },
];
