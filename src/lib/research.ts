/* ============================================================
   Research & Insights data for ALRION Pillar Capital.
   Original, illustrative content faithful to the firm's
   positioning: impact-driven investing, AI-driven quant models,
   and a frontier-technology focus (AI/compute, energy, biotech,
   climate, fintech, space, defense). All figures are illustrative.
   This file is NEW — shared libs (insights.ts, site.ts) untouched.
   ============================================================ */

/* — Market dashboard indicator tiles (illustrative) —————————— */
export type Indicator = {
  label: string;
  value: string;
  delta: string;
  direction: "up" | "down" | "flat";
  note: string;
};

export const INDICATORS: Indicator[] = [
  { label: "Alrion Frontier Index", value: "1,284", delta: "+1.8%", direction: "up", note: "Basket of 60 frontier-tech equities" },
  { label: "AI Compute Capex (TTM)", value: "$412B", delta: "+34%", direction: "up", note: "Hyperscaler + sovereign buildout" },
  { label: "Grid Interconnect Queue", value: "2.6 TW", delta: "+11%", direction: "up", note: "Renewables + storage awaiting connection" },
  { label: "Private Credit Spreads", value: "548 bps", delta: "-22 bps", direction: "down", note: "Over benchmark, frontier mandates" },
  { label: "Venture Dry Powder", value: "$311B", delta: "+4%", direction: "up", note: "Committed but undeployed capital" },
  { label: "Climate Tech Funding", value: "$58B", delta: "-6%", direction: "down", note: "Trailing-twelve-month, global" },
  { label: "Frontier IPO Window", value: "Selective", delta: "Open", direction: "flat", note: "Quality issuance only" },
  { label: "Realized Vol (60d)", value: "14.2", direction: "down", delta: "-1.3", note: "Annualized, Frontier Index" },
];

/* — Investment themes ——————————————————————————————————————— */
export type Theme = {
  slug: string;
  name: string;
  kicker: string;
  thesis: string;
  thrust: string[];
  conviction: "High" | "Building" | "Selective";
  horizon: string;
};

export const THEMES: Theme[] = [
  {
    slug: "ai-infrastructure",
    name: "AI Infrastructure & Compute",
    kicker: "Intelligence & Compute",
    thesis:
      "The buildout of training and inference capacity is the defining capital supercycle of the decade. Durable value accrues to the picks-and-shovels layer — silicon, networking, data-center real assets and the power that feeds them — before it accrues to applications.",
    thrust: [
      "Accelerator silicon and advanced packaging",
      "Liquid-cooled, power-dense data-center capacity",
      "High-bandwidth memory and optical interconnect",
      "Inference-optimized edge and sovereign compute",
    ],
    conviction: "High",
    horizon: "5–10 yr",
  },
  {
    slug: "energy-transition",
    name: "Energy Transition",
    kicker: "Life & Climate",
    thesis:
      "Electrification of compute, transport and industry makes power the binding constraint of the next economy. We finance generation, storage and grid modernization where demand is structurally inelastic and contracted off-take de-risks returns.",
    thrust: [
      "Firmed renewables and long-duration storage",
      "Grid interconnection and transmission build",
      "Behind-the-meter and data-center power",
      "Nuclear, geothermal and advanced baseload",
    ],
    conviction: "High",
    horizon: "7–12 yr",
  },
  {
    slug: "longevity-biotech",
    name: "Longevity & Biotech",
    kicker: "Life & Climate",
    thesis:
      "AI-native drug discovery collapses the cost and timeline of bringing therapies to patients. We back platforms where computational biology, automation and proprietary data compound into a defensible discovery engine.",
    thrust: [
      "AI-driven target discovery and protein design",
      "Programmable medicine and gene editing",
      "Diagnostics and the longevity care stack",
      "Biomanufacturing and synthetic biology",
    ],
    conviction: "Building",
    horizon: "8–12 yr",
  },
  {
    slug: "defense-resilience",
    name: "Defense & Resilience",
    kicker: "Real Economy",
    thesis:
      "A more contested world is re-pricing sovereignty, supply chains and security. Dual-use innovation — autonomy, sensing, secure compute and resilient manufacturing — is moving from defense budgets into the commercial mainstream.",
    thrust: [
      "Autonomous and uncrewed systems",
      "Secure communications and cyber resilience",
      "Reshored advanced manufacturing",
      "Critical-mineral and supply-chain security",
    ],
    conviction: "Building",
    horizon: "5–10 yr",
  },
  {
    slug: "financial-access",
    name: "Financial Access & Fintech",
    kicker: "Real Economy",
    thesis:
      "Programmable money and embedded finance extend modern financial infrastructure to underserved markets. We pursue the rails — payments, lending and identity — where inclusion and unit economics reinforce one another.",
    thrust: [
      "Real-time payments and cross-border rails",
      "Embedded lending and underwriting AI",
      "Inclusive banking and digital identity",
      "Tokenized real-world assets",
    ],
    conviction: "Selective",
    horizon: "4–8 yr",
  },
  {
    slug: "space-economy",
    name: "Space Economy",
    kicker: "Real Economy",
    thesis:
      "Falling launch costs are turning orbit into a commercial platform. The investable frontier is shifting from launch to the services layer — connectivity, earth observation and in-space infrastructure built on top of cheap access.",
    thrust: [
      "Reusable launch and responsive access",
      "LEO connectivity and direct-to-device",
      "Earth observation and geospatial AI",
      "In-orbit servicing and manufacturing",
    ],
    conviction: "Selective",
    horizon: "8–15 yr",
  },
];

/* — Thought-leadership essays ———————————————————————————————— */
export type Essay = {
  slug?: string;
  title: string;
  dek: string;
  author: string;
  role: string;
  date: string;
  readingTime: string;
  featured?: boolean;
};

export const ESSAYS: Essay[] = [
  {
    slug: "frontier-outlook-2026",
    title: "The capital supercycle no one is pricing correctly",
    dek: "Markets are treating the AI buildout as a single trade. It is, in fact, four distinct capital cycles moving at different speeds — and most portfolios are exposed to the wrong one.",
    author: "Dr. Imani Okafor",
    role: "Chief Investment Officer",
    date: "June 2026",
    readingTime: "12 min",
    featured: true,
  },
  {
    title: "Why we measure impact like we measure returns",
    dek: "Impact that cannot be audited is marketing. We make the case for treating social and environmental outcomes with the same rigor as financial performance.",
    author: "Marcus Halvorsen",
    role: "Head of Impact & ESG",
    date: "May 2026",
    readingTime: "8 min",
  },
  {
    title: "The quant's case for patience in private markets",
    dek: "Systematic discipline and long-duration capital are not opposites. Our models exist to tell us when to wait as often as when to act.",
    author: "Dr. Imani Okafor",
    role: "Chief Investment Officer",
    date: "April 2026",
    readingTime: "9 min",
  },
  {
    title: "Power is the new compute",
    dek: "The bottleneck on artificial intelligence has quietly moved from chips to electrons. The investment implications run far beyond the energy sector.",
    author: "Sofia Reyes",
    role: "Partner, Energy & Infrastructure",
    date: "March 2026",
    readingTime: "10 min",
  },
  {
    title: "Founders at the frontier deserve patient conviction",
    dek: "Deep-tech timelines do not bend to fund cycles. A reflection on backing science when the science is genuinely hard.",
    author: "Daniel Whitfield",
    role: "Managing Partner, Venture",
    date: "February 2026",
    readingTime: "7 min",
  },
];

/* — White papers ————————————————————————————————————————————— */
export type WhitePaper = {
  title: string;
  abstract: string;
  pages: number;
  date: string;
  category: string;
};

export const WHITE_PAPERS: WhitePaper[] = [
  {
    title: "Financing the AI Compute Supercycle",
    abstract:
      "A framework for allocating across the AI infrastructure stack — from silicon to power — and the asymmetries we believe are mispriced by public markets.",
    pages: 34,
    date: "June 2026",
    category: "AI Infrastructure",
  },
  {
    title: "The Grid as an Asset Class",
    abstract:
      "We argue that grid modernization and long-duration storage represent a distinct, contracted-cashflow opportunity for private capital at industrial scale.",
    pages: 28,
    date: "May 2026",
    category: "Energy Transition",
  },
  {
    title: "Quantitative Discipline in Illiquid Markets",
    abstract:
      "How AI-driven models and systematic risk attribution can be applied to private and frontier markets without overfitting to sparse data.",
    pages: 22,
    date: "April 2026",
    category: "Quantitative Research",
  },
  {
    title: "The Alrion Impact Methodology, 2026",
    abstract:
      "Our full, auditable methodology for quantifying social and environmental outcomes alongside financial performance across all four platforms.",
    pages: 41,
    date: "March 2026",
    category: "Impact & ESG",
  },
  {
    title: "AI-Native Drug Discovery: An Allocator's Primer",
    abstract:
      "A technical and commercial map of computational biology, and the platform characteristics that produce durable advantage in therapeutics.",
    pages: 30,
    date: "February 2026",
    category: "Biotech",
  },
  {
    title: "Dual-Use and the Re-pricing of Resilience",
    abstract:
      "Why supply-chain security, autonomy and secure compute are migrating from defense budgets into mainstream institutional portfolios.",
    pages: 26,
    date: "January 2026",
    category: "Defense & Resilience",
  },
];

/* — Quarterly & annual reports ——————————————————————————————— */
export type Report = {
  year: number;
  period: string;
  type: "Quarterly" | "Annual" | "Impact";
  title: string;
  summary: string;
};

export const REPORTS: Report[] = [
  { year: 2026, period: "Q1 2026", type: "Quarterly", title: "First Quarter Investor Letter", summary: "Performance attribution, positioning shifts and the frontier outlook entering 2026." },
  { year: 2025, period: "FY 2025", type: "Annual", title: "2025 Annual Report", summary: "A full-year review across all four platforms, with audited performance and portfolio highlights." },
  { year: 2025, period: "FY 2025", type: "Impact", title: "2025 Impact Report", summary: "Measured social and environmental outcomes mapped to the UN SDGs." },
  { year: 2025, period: "Q4 2025", type: "Quarterly", title: "Fourth Quarter Investor Letter", summary: "Year-end positioning and the case for the AI capital supercycle." },
  { year: 2025, period: "Q3 2025", type: "Quarterly", title: "Third Quarter Investor Letter", summary: "Energy-transition deployment and venture portfolio construction." },
  { year: 2025, period: "Q2 2025", type: "Quarterly", title: "Second Quarter Investor Letter", summary: "Hedge-fund risk attribution and frontier-market dislocations." },
  { year: 2024, period: "FY 2024", type: "Annual", title: "2024 Annual Report", summary: "Inception-to-date growth, realized exits and platform expansion." },
  { year: 2024, period: "FY 2024", type: "Impact", title: "2024 Impact Report", summary: "Community Equity Fund outcomes and methodology baseline." },
  { year: 2024, period: "Q4 2024", type: "Quarterly", title: "Fourth Quarter Investor Letter", summary: "Macro regime, rates and the path for private innovation." },
];

/* — Commentary (extends INSIGHTS on the articles page) ———————— */
export type Commentary = {
  category: string;
  title: string;
  excerpt: string;
  date: string;
  readingTime: string;
};

export const COMMENTARY: Commentary[] = [
  { category: "Market Intelligence", title: "Reading the interconnect queue as a leading indicator", excerpt: "Why the backlog of power projects awaiting grid connection may tell us more about AI's trajectory than chip shipments.", date: "June 2026", readingTime: "5 min" },
  { category: "Investment Themes", title: "Inference is eating the data center", excerpt: "The shift from training to inference is quietly reshaping where compute capex flows — and which assets compound.", date: "June 2026", readingTime: "6 min" },
  { category: "Thought Leadership", title: "On conviction versus consensus", excerpt: "Notes from the investment committee on holding a position the market disagrees with.", date: "May 2026", readingTime: "4 min" },
  { category: "ESG", title: "Additionality is the only number that matters", excerpt: "A short argument against impact accounting that double-counts outcomes that would have happened anyway.", date: "May 2026", readingTime: "5 min" },
  { category: "Market Intelligence", title: "Frontier volatility is a feature, not a bug", excerpt: "How systematic hedging lets us underwrite asymmetric upside in genuinely volatile markets.", date: "April 2026", readingTime: "6 min" },
  { category: "Investment Themes", title: "The space services layer comes of age", excerpt: "Cheap launch was the prologue. The investable story is now connectivity, observation and orbital infrastructure.", date: "April 2026", readingTime: "7 min" },
];

/* — Podcast episodes ————————————————————————————————————————— */
export type Episode = {
  no: number;
  title: string;
  guest: string;
  guestRole: string;
  duration: string;
  date: string;
};

export const EPISODES: Episode[] = [
  { no: 12, title: "The capital supercycle, decoded", guest: "Dr. Imani Okafor", guestRole: "CIO, Alrion Pillar Capital", duration: "48 min", date: "June 2026" },
  { no: 11, title: "Power, electrons and the limits of compute", guest: "Sofia Reyes", guestRole: "Partner, Energy & Infrastructure", duration: "41 min", date: "May 2026" },
  { no: 10, title: "Backing hard science with patient capital", guest: "Daniel Whitfield", guestRole: "Managing Partner, Venture", duration: "53 min", date: "April 2026" },
  { no: 9, title: "Impact you can audit", guest: "Marcus Halvorsen", guestRole: "Head of Impact & ESG", duration: "37 min", date: "March 2026" },
  { no: 8, title: "Quant discipline in illiquid markets", guest: "Dr. Imani Okafor", guestRole: "CIO, Alrion Pillar Capital", duration: "44 min", date: "February 2026" },
  { no: 7, title: "The orbital economy's second act", guest: "Priya Nair", guestRole: "Principal, Space & Deep Tech", duration: "39 min", date: "January 2026" },
];

/* — Webinars & events ———————————————————————————————————————— */
export type EventItem = {
  day: string;
  month: string;
  year: string;
  title: string;
  format: string;
  speakers: string;
  blurb: string;
};

export const UPCOMING_EVENTS: EventItem[] = [
  { day: "16", month: "JUL", year: "2026", title: "Mid-Year Frontier Outlook: Live Briefing", format: "Webinar · 45 min", speakers: "Dr. Imani Okafor, Sofia Reyes", blurb: "Our research desk presents the updated house view across compute, energy and private markets, with live Q&A." },
  { day: "06", month: "AUG", year: "2026", title: "The Grid as an Asset Class", format: "Roundtable · Invite only", speakers: "Sofia Reyes + guest operators", blurb: "A closed-door discussion on financing grid modernization and long-duration storage at scale." },
  { day: "23", month: "SEP", year: "2026", title: "AI-Native Biotech: An Allocator's Session", format: "Webinar · 60 min", speakers: "Daniel Whitfield, Dr. Imani Okafor", blurb: "A technical walkthrough of computational biology platforms and where durable advantage forms." },
];

export type Replay = {
  title: string;
  speakers: string;
  duration: string;
  date: string;
};

export const REPLAYS: Replay[] = [
  { title: "Financing the AI Compute Supercycle", speakers: "Dr. Imani Okafor", duration: "52 min", date: "June 2026" },
  { title: "Power is the New Compute", speakers: "Sofia Reyes", duration: "47 min", date: "May 2026" },
  { title: "Measuring What Matters: Impact 2026", speakers: "Marcus Halvorsen", duration: "38 min", date: "March 2026" },
  { title: "Quant Discipline at the Frontier", speakers: "Dr. Imani Okafor", duration: "44 min", date: "February 2026" },
];

/* — Download center rows ————————————————————————————————————— */
export type Download = {
  title: string;
  type: "Report" | "White Paper" | "Factsheet" | "Letter" | "Impact";
  format: string;
  size: string;
  date: string;
};

export const DOWNLOADS: Download[] = [
  { title: "2025 Annual Report", type: "Report", format: "PDF", size: "6.2 MB", date: "Feb 2026" },
  { title: "2025 Impact Report", type: "Impact", format: "PDF", size: "4.8 MB", date: "Feb 2026" },
  { title: "Q1 2026 Investor Letter", type: "Letter", format: "PDF", size: "1.4 MB", date: "Apr 2026" },
  { title: "Financing the AI Compute Supercycle", type: "White Paper", format: "PDF", size: "3.1 MB", date: "Jun 2026" },
  { title: "The Grid as an Asset Class", type: "White Paper", format: "PDF", size: "2.6 MB", date: "May 2026" },
  { title: "Hedge Fund Platform Factsheet", type: "Factsheet", format: "PDF", size: "0.8 MB", date: "Jun 2026" },
  { title: "Private Equity Platform Factsheet", type: "Factsheet", format: "PDF", size: "0.9 MB", date: "Jun 2026" },
  { title: "Venture Platform Factsheet", type: "Factsheet", format: "PDF", size: "0.8 MB", date: "Jun 2026" },
  { title: "Community Equity Fund Factsheet", type: "Factsheet", format: "PDF", size: "0.7 MB", date: "Jun 2026" },
  { title: "The Alrion Impact Methodology, 2026", type: "White Paper", format: "PDF", size: "3.7 MB", date: "Mar 2026" },
  { title: "Q4 2025 Investor Letter", type: "Letter", format: "PDF", size: "1.3 MB", date: "Jan 2026" },
  { title: "Dual-Use and the Re-pricing of Resilience", type: "White Paper", format: "PDF", size: "2.4 MB", date: "Jan 2026" },
];
