/* ============================================================
   Research & Insights data for ALRION Pillar Capital.
   ALRION Pillar Capital is a 2024 New York platform of four
   independent Delaware LP strategies. This content reflects the
   firm's framework, its four strategies, its governance and its
   impact model. It does not assert a track record, assets under
   management, or performance the firm has not earned. Any market
   figures referenced are external, public reference data, clearly
   labelled as market context, not as Alrion results.
   Shared libs (insights.ts, site.ts) are edited separately.
   ============================================================ */

/* What we watch: external market context, not Alrion results  */
export type WatchItem = {
  label: string;
  focus: string;
  note: string;
};

export const WATCHLIST: WatchItem[] = [
  {
    label: "AI & compute demand",
    focus: "Capital intensity of training and inference buildout",
    note: "We track public capex and power signals as context for our Venture strategy's AI and ML allocation.",
  },
  {
    label: "Grid & power constraints",
    focus: "Interconnection queues, transmission and long-duration storage",
    note: "Power availability is the binding constraint we watch across grid modernization.",
  },
  {
    label: "Nuclear lifecycle",
    focus: "Reactor operations, refurbishment and fuel-cycle services",
    note: "Mission-critical infrastructure with investment-grade counterparties.",
  },
  {
    label: "OT cybersecurity",
    focus: "Security of the operational technology behind critical infrastructure",
    note: "A durable demand signal for our Infrastructure Growth strategy.",
  },
  {
    label: "Biotechnology",
    focus: "Translation of scientific validation into clinical and commercial progress",
    note: "Context for the Venture strategy's biotech allocation.",
  },
  {
    label: "Defense & space",
    focus: "Dual-use innovation across autonomy, sensing and secure systems",
    note: "Guided by our Technical Advisory Board of former government and military leaders.",
  },
  {
    label: "Private credit & spreads",
    focus: "Reference spreads over benchmark in private markets",
    note: "Public reference data we monitor for pricing discipline, not an Alrion figure.",
  },
  {
    label: "Community capital access",
    focus: "Third-party capital catalysed into underserved New York markets",
    note: "The catalysis effect our Community Equity Fund is designed to measure.",
  },
];

/* Research themes: the frameworks we watch across the platform  */
export type Theme = {
  slug: string;
  name: string;
  kicker: string;
  thesis: string;
  thrust: string[];
  strategy: string;
  horizon: string;
};

export const THEMES: Theme[] = [
  {
    slug: "ai-and-compute",
    name: "AI & Machine Learning",
    kicker: "Frontier Technology",
    thesis:
      "Founders at the inflection point between scientific validation and market deployment are building the intelligence layer of the next economy. We watch where technical advantage is genuinely defensible, from model efficiency to the systems that serve it.",
    thrust: [
      "Model efficiency and inference systems",
      "Applied AI with defensible data advantage",
      "Compute and networking dependencies",
      "Seed to Series A companies in the Northeast Corridor",
    ],
    strategy: "Venture Capital LP",
    horizon: "Seed–Series A",
  },
  {
    slug: "biotechnology",
    name: "Biotechnology",
    kicker: "Frontier Technology",
    thesis:
      "Science-led companies are advancing human health from validation toward deployment. We back platforms where computational biology, proprietary data and technical rigor compound into a durable discovery advantage.",
    thrust: [
      "Computational biology and target discovery",
      "Programmable and precision medicine",
      "Diagnostics and translational platforms",
      "Biomanufacturing and synthetic biology",
    ],
    strategy: "Venture Capital LP",
    horizon: "Seed–Series A",
  },
  {
    slug: "defense-and-space",
    name: "Defense & Space",
    kicker: "Frontier Technology",
    thesis:
      "A more contested world is re-pricing sovereignty, security and resilience. Dual-use innovation, guided by our Technical Advisory Board of former government and military leaders, is moving into the commercial mainstream.",
    thrust: [
      "Autonomous and uncrewed systems",
      "Secure communications and sensing",
      "Space services and in-orbit infrastructure",
      "Resilient, reshored manufacturing",
    ],
    strategy: "Venture Capital LP",
    horizon: "Seed–Series A",
  },
  {
    slug: "nuclear-lifecycle",
    name: "Nuclear Lifecycle",
    kicker: "Infrastructure Growth",
    thesis:
      "The mission-critical infrastructure underpinning the modern economy needs patient growth capital. We watch services across the nuclear energy lifecycle, where demand is structurally durable and counterparties are investment grade.",
    thrust: [
      "Reactor operations and refurbishment",
      "Fuel-cycle and lifecycle services",
      "Regulatory-grade safety and compliance",
      "Contracted, investment-grade revenue",
    ],
    strategy: "Private Equity LP",
    horizon: "Growth",
  },
  {
    slug: "grid-modernization",
    name: "Grid Modernization",
    kicker: "Infrastructure Growth",
    thesis:
      "Electrification of compute, transport and industry makes the grid the binding constraint of the next economy. We finance the modernization, interconnection and resilience the electrified economy requires.",
    thrust: [
      "Transmission and interconnection build",
      "Long-duration storage and firmed capacity",
      "Behind-the-meter and data-center power",
      "Operational resilience upgrades",
    ],
    strategy: "Private Equity LP",
    horizon: "Growth",
  },
  {
    slug: "ot-cybersecurity",
    name: "OT Cybersecurity",
    kicker: "Infrastructure Growth",
    thesis:
      "The operational technology behind critical infrastructure is increasingly contested. Securing it is a mission-critical, recurring need, and a durable growth opportunity underpinning energy and industrial systems.",
    thrust: [
      "Operational technology security",
      "Critical-infrastructure monitoring",
      "Supply-chain and industrial resilience",
      "Recurring, contracted service models",
    ],
    strategy: "Private Equity LP",
    horizon: "Growth",
  },
];

/* Thought-leadership essays  */
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
    title: "A platform, not a product",
    dek: "Four autonomous strategies, one rigorous framework. Why we built ALRION Pillar Capital as a platform of independent Delaware LPs rather than a single fund.",
    author: "ALRION Pillar Capital",
    role: "Investment Committee",
    date: "June 2026",
    readingTime: "10 min",
    featured: true,
  },
  {
    title: "Why we measure impact the way we measure returns",
    dek: "Impact that cannot be audited is marketing. We make the case for treating community outcomes with the same rigor as financial performance.",
    author: "ALRION Pillar Capital",
    role: "Community Equity Fund",
    date: "May 2026",
    readingTime: "8 min",
  },
  {
    title: "Independent governance by design",
    dek: "Each strategy is a separate Delaware LP with its own investment committee and risk framework. A note on why independence is a structural choice, not a slogan.",
    author: "ALRION Pillar Capital",
    role: "Investment Committee",
    date: "April 2026",
    readingTime: "7 min",
  },
  {
    title: "Power is the binding constraint",
    dek: "Electrification is tightening the grid faster than supply can respond. What that means for how we approach infrastructure growth.",
    author: "ALRION Pillar Capital",
    role: "Private Equity LP",
    date: "March 2026",
    readingTime: "9 min",
  },
  {
    title: "Backing founders at the inflection point",
    dek: "Science-led companies do not bend to fund cycles. A reflection on partnering with founders between scientific validation and market deployment.",
    author: "ALRION Pillar Capital",
    role: "Venture Capital LP",
    date: "February 2026",
    readingTime: "7 min",
  },
];

/* White papers  */
export type WhitePaper = {
  title: string;
  abstract: string;
  pages: number;
  date: string;
  category: string;
};

export const WHITE_PAPERS: WhitePaper[] = [
  {
    title: "A Platform, Not a Product",
    abstract:
      "How four autonomous strategies operating under one framework are structured, and why independent Delaware LPs give allocators clearer governance and cleaner risk boundaries.",
    pages: 24,
    date: "June 2026",
    category: "Framework",
  },
  {
    title: "Infrastructure Growth: The Mission-Critical Layer",
    abstract:
      "Our approach to growth capital in nuclear lifecycle, grid modernization and OT cybersecurity, and the case for contracted, investment-grade counterparties.",
    pages: 22,
    date: "May 2026",
    category: "Infrastructure Growth",
  },
  {
    title: "A Systematic Approach to Global Macro",
    abstract:
      "How our Hedge Fund strategy combines quantitative modelling with fundamental analysis across global macroeconomic dislocations, within a disciplined risk framework.",
    pages: 20,
    date: "April 2026",
    category: "Global Macro",
  },
  {
    title: "The ALRION Impact Model",
    abstract:
      "Our methodology for the three impact indicators, wealth equity, employment quality and the capital multiplier, and why we measure catalysis rather than contribution.",
    pages: 26,
    date: "March 2026",
    category: "Impact",
  },
  {
    title: "Frontier Technology: Seed to Series A",
    abstract:
      "How our Venture strategy allocates across AI and ML, biotech, and defense and space, and why the Northeast Corridor is where we concentrate our early-stage work.",
    pages: 21,
    date: "February 2026",
    category: "Frontier Technology",
  },
  {
    title: "Governance Standards for a Multi-Strategy Platform",
    abstract:
      "Absolute transparency, rigorous oversight, aligned interests and independent governance, set out as the standards we hold ourselves to across every fund.",
    pages: 18,
    date: "January 2026",
    category: "Governance",
  },
];

/* Quarterly & annual reports  */
export type Report = {
  year: number;
  period: string;
  type: "Quarterly" | "Annual" | "Impact";
  title: string;
  summary: string;
};

export const REPORTS: Report[] = [
  { year: 2026, period: "Q1 2026", type: "Quarterly", title: "First Quarter Investor Letter", summary: "Platform positioning and framework notes across the four strategies entering 2026." },
  { year: 2025, period: "FY 2025", type: "Annual", title: "2025 Annual Report", summary: "A full-year review of the platform's framework, governance and activity across all four strategies." },
  { year: 2025, period: "FY 2025", type: "Impact", title: "2025 Impact Report", summary: "The Community Equity Fund's three impact indicators: wealth equity, employment quality and the capital multiplier." },
  { year: 2025, period: "Q4 2025", type: "Quarterly", title: "Fourth Quarter Investor Letter", summary: "Year-end platform notes and the framework guiding infrastructure and venture activity." },
  { year: 2025, period: "Q3 2025", type: "Quarterly", title: "Third Quarter Investor Letter", summary: "Infrastructure growth and venture portfolio construction under the platform framework." },
  { year: 2025, period: "Q2 2025", type: "Quarterly", title: "Second Quarter Investor Letter", summary: "Hedge fund risk framework and cross-asset relative value observations." },
  { year: 2024, period: "FY 2024", type: "Annual", title: "2024 Annual Report", summary: "The platform's founding year: the framework, the four Delaware LPs and the governance we set out." },
  { year: 2024, period: "FY 2024", type: "Impact", title: "2024 Impact Report", summary: "The Community Equity Fund's impact methodology and the baseline for our three indicators." },
  { year: 2024, period: "Q4 2024", type: "Quarterly", title: "Fourth Quarter Investor Letter", summary: "Establishing the platform, and the macro framework guiding our first strategies." },
];

/* Commentary (extends INSIGHTS on the articles page)  */
export type Commentary = {
  category: string;
  title: string;
  excerpt: string;
  date: string;
  readingTime: string;
};

export const COMMENTARY: Commentary[] = [
  { category: "Market Intelligence", title: "Reading the interconnect queue as market context", excerpt: "Why the backlog of power projects awaiting grid connection is a signal we watch for our Infrastructure Growth strategy.", date: "June 2026", readingTime: "5 min" },
  { category: "Investment Themes", title: "Seed to Series A in the Northeast Corridor", excerpt: "Where our Venture strategy concentrates, and why proximity to founders matters at the earliest stages.", date: "June 2026", readingTime: "6 min" },
  { category: "Thought Leadership", title: "On conviction and discipline", excerpt: "Notes from the investment committee on holding a considered position within a pre-committed risk framework.", date: "May 2026", readingTime: "4 min" },
  { category: "ESG", title: "Catalysis, not contribution", excerpt: "A short argument for measuring the third-party capital a community attracts after our initial investment.", date: "May 2026", readingTime: "5 min" },
  { category: "Market Intelligence", title: "Risk is a framework, not an afterthought", excerpt: "How a daily 95% Value-at-Risk discipline and gross-exposure limits shape our Global Macro strategy.", date: "April 2026", readingTime: "6 min" },
  { category: "Investment Themes", title: "The mission-critical infrastructure layer", excerpt: "Why nuclear lifecycle, grid modernization and OT cybersecurity anchor our approach to infrastructure growth.", date: "April 2026", readingTime: "7 min" },
];

/* Podcast episodes  */
export type Episode = {
  no: number;
  title: string;
  guest: string;
  guestRole: string;
  duration: string;
  date: string;
};

export const EPISODES: Episode[] = [
  { no: 6, title: "A platform, not a product", guest: "ALRION Pillar Capital", guestRole: "Investment Committee", duration: "42 min", date: "June 2026" },
  { no: 5, title: "Power is the binding constraint", guest: "ALRION Pillar Capital", guestRole: "Private Equity LP", duration: "39 min", date: "May 2026" },
  { no: 4, title: "Backing founders at the inflection point", guest: "ALRION Pillar Capital", guestRole: "Venture Capital LP", duration: "44 min", date: "April 2026" },
  { no: 3, title: "Measuring impact you can audit", guest: "ALRION Pillar Capital", guestRole: "Community Equity Fund", duration: "37 min", date: "March 2026" },
  { no: 2, title: "A systematic approach to global macro", guest: "ALRION Pillar Capital", guestRole: "Hedge Fund LP", duration: "41 min", date: "February 2026" },
  { no: 1, title: "Independence by design", guest: "ALRION Pillar Capital", guestRole: "Investment Committee", duration: "38 min", date: "January 2026" },
];

/* Webinars & events  */
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
  { day: "16", month: "JUL", year: "2026", title: "The Platform Framework: Live Briefing", format: "Webinar · 45 min", speakers: "ALRION Investment Committee", blurb: "A walkthrough of how four autonomous strategies operate under one framework, with live Q&A." },
  { day: "06", month: "AUG", year: "2026", title: "Infrastructure Growth: A Closer Look", format: "Roundtable · Invite only", speakers: "ALRION Private Equity LP", blurb: "A closed-door discussion on nuclear lifecycle, grid modernization and OT cybersecurity." },
  { day: "23", month: "SEP", year: "2026", title: "Frontier Technology: An Allocator's Session", format: "Webinar · 60 min", speakers: "ALRION Venture Capital LP", blurb: "How our Venture strategy approaches AI and ML, biotech, and defense and space, from seed to Series A." },
];

export type Replay = {
  title: string;
  speakers: string;
  duration: string;
  date: string;
};

export const REPLAYS: Replay[] = [
  { title: "A Platform, Not a Product", speakers: "ALRION Investment Committee", duration: "46 min", date: "June 2026" },
  { title: "Power Is the Binding Constraint", speakers: "ALRION Private Equity LP", duration: "43 min", date: "May 2026" },
  { title: "The ALRION Impact Model", speakers: "ALRION Community Equity Fund", duration: "38 min", date: "March 2026" },
  { title: "A Systematic Approach to Global Macro", speakers: "ALRION Hedge Fund LP", duration: "41 min", date: "February 2026" },
];

/* Download center rows  */
export type Download = {
  title: string;
  type: "White Paper";
  format: string;
  size: string;
  date: string;
};

/* Per the firm's brief, the public Download Center lists white papers only.
   Reports, impact reports, investor letters and fact sheets are made
   available to verified investors through the Investor Portal. */
export const DOWNLOADS: Download[] = [
  { title: "A Platform, Not a Product", type: "White Paper", format: "PDF", size: "3.1 MB", date: "Jun 2026" },
  { title: "Infrastructure Growth: The Mission-Critical Layer", type: "White Paper", format: "PDF", size: "2.6 MB", date: "May 2026" },
  { title: "The ALRION Impact Model", type: "White Paper", format: "PDF", size: "3.7 MB", date: "Mar 2026" },
  { title: "Governance Standards for a Multi-Strategy Platform", type: "White Paper", format: "PDF", size: "2.4 MB", date: "Jan 2026" },
];
