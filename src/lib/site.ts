/* ============================================================
   Firm-level content shared across pages.

   SOURCE OF TRUTH: Alrion Pillar Capital is an institutional
   alternative investment platform headquartered in New York,
   "a platform, not a product", comprising four independent Delaware
   Limited Partnerships. Copy is precise and fiduciary in tone. Only
   verifiable figures appear here; no AUM, track record, or global
   footprint is claimed.
   ============================================================ */

export const FIRM = {
  name: "ALRION Pillar Capital",
  short: "Alrion",
  tagline: "Independence by Design. Conviction by Discipline.",
  subhead:
    "Four autonomous strategies. One rigorous framework. A singular standard of fiduciary care for the allocators who ask the harder questions.",
  email: "info@alrionpillarcapital.com",
  press: "info@alrionpillarcapital.com",
  phone: "+1 (347) 988-3366",
  address: "11 West 118th Street, Suite 6C, New York, NY 10026",
  city: "New York",
  description:
    "Alrion Pillar Capital is an institutional alternative investment platform, a platform, not a product, comprising four independent Limited Partnerships unified by a single standard of institutional discipline and fiduciary care.",
};

export type Stat = {
  /** Numeric value for an animated counter. Omit when using `text`. */
  value?: number;
  /** Pre-formatted display value (used verbatim, no animation). */
  text?: string;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  /** Render the counter without thousands separators (e.g. a year). */
  raw?: boolean;
  label: string;
  sub: string;
};

/* Only structural, verifiable facts, no scale or track-record claims. */
export const HERO_STATS: Stat[] = [
  { text: "4", label: "Autonomous strategies", sub: "Four independent Delaware Limited Partnerships" },
  { text: "NYC", label: "Headquarters", sub: "One New York headquarters" },
  { text: "Delaware", label: "Limited Partnerships", sub: "Each with its own investment committee" },
  { text: "3(c)(7)", label: "Private funds", sub: "For qualified purchasers only" },
];

export type Strategy = {
  slug: string;
  name: string;
  kicker: string;
  summary: string;
  description: string;
  bullets: string[];
  metrics: { value: string; label: string }[];
};

export const STRATEGIES: Strategy[] = [
  {
    slug: "hedge-fund",
    name: "Hedge Fund LP",
    kicker: "Global Macro Excellence",
    summary:
      "A systematic approach to alpha generation across global macroeconomic dislocations, combining quantitative modelling with fundamental analysis.",
    description:
      "The Hedge Fund LP pursues alpha across global macroeconomic dislocations, applying multi-timeframe, cross-asset relative value. Quantitative modelling is integrated with fundamental analysis, and risk is governed by daily 95% Value-at-Risk monitoring and a disciplined ceiling on gross exposure.",
    bullets: [
      "Multi-timeframe, cross-asset relative value",
      "Quantitative modelling integrated with fundamental analysis",
      "Daily 95% Value-at-Risk monitoring",
      "Maximum 300% gross exposure discipline",
    ],
    metrics: [
      { value: "Daily 95%", label: "Value-at-Risk" },
      { value: "300%", label: "Max gross exposure" },
      { value: "$1M", label: "Minimum investment" },
    ],
  },
  {
    slug: "private-equity",
    name: "Private Equity LP",
    kicker: "Infrastructure Growth",
    summary:
      "Growth capital deployed into the mission-critical infrastructure underpinning the modern economy, energy, grid, and operational resilience.",
    description:
      "The Private Equity LP provides growth capital to the mission-critical infrastructure underpinning the modern economy. We focus on nuclear lifecycle services, grid modernization and operational-technology cybersecurity, targeting businesses with $10M–$100M in revenue and investment-grade counterparties.",
    bullets: [
      "Nuclear lifecycle services",
      "Grid modernization",
      "Operational-technology (OT) cybersecurity",
      "$10M–$100M revenue with investment-grade counterparties",
    ],
    metrics: [
      { value: "8%", label: "Preferred return" },
      { value: "20%", label: "Carried interest" },
      { value: "$10–100M", label: "Revenue target" },
    ],
  },
  {
    slug: "venture-capital",
    name: "Venture Capital LP",
    kicker: "Frontier Technology",
    summary:
      "Partnering with founders at the inflection point between scientific validation and market deployment.",
    description:
      "The Venture Capital LP partners with founders at the inflection point between scientific validation and market deployment. Investing from Seed to Series A, primarily across the Northeast Corridor, the strategy concentrates on artificial intelligence, biotechnology, and defense and space, supported by a Technical Advisory Board of former government and military leaders.",
    bullets: [
      "Artificial Intelligence & Machine Learning (40%)",
      "Biotechnology (35%)",
      "Defense & Space (25%)",
      "Seed to Series A, primarily the Northeast Corridor",
    ],
    metrics: [
      { value: "Seed–Series A", label: "Stage" },
      { value: "40 / 35 / 25", label: "AI · Biotech · Defense" },
      { value: "Advisory", label: "Technical Advisory Board" },
    ],
  },
  {
    slug: "community-equity",
    name: "Community Equity Fund LP",
    kicker: "Impact Through Investment",
    summary:
      "A model proving that underserved markets represent some of the most compelling risk-adjusted opportunities in New York.",
    description:
      "The Community Equity Fund LP is built on a conviction that underserved markets represent some of the most compelling risk-adjusted opportunities in New York. Seeded by carried interest from our institutional strategies, it measures success in local hiring, wealth building and neighborhood stability.",
    bullets: [
      "Focused on underserved New York communities",
      "Measurable local hiring and wealth building",
      "Neighborhood stability and catalytic capital",
      "Seeded by carried interest from our institutional strategies",
    ],
    metrics: [
      { value: "New York", label: "Community focus" },
      { value: "Catalytic", label: "Capital multiplier" },
      { value: "Local", label: "Wealth building" },
    ],
  },
];

/* Alrion's actual focus areas, mapped to the two strategies that invest
   directly in sectors. No speculative or unsupported breadth. */
export type Sector = {
  slug: string;
  name: string;
  group: string;
  blurb: string;
};

export const SECTORS: Sector[] = [
  { slug: "artificial-intelligence", name: "Artificial Intelligence & ML", group: "Frontier Technology", blurb: "Core venture pillar (40%). Founders at the inflection point between scientific validation and market deployment." },
  { slug: "biotechnology", name: "Biotechnology", group: "Frontier Technology", blurb: "Core venture pillar (35%). Science-led companies advancing human health from validation to deployment." },
  { slug: "defense-space", name: "Defense & Space", group: "Frontier Technology", blurb: "Core venture pillar (25%). Dual-use frontier technology, guided by a Technical Advisory Board of former government and military leaders." },
  { slug: "nuclear-lifecycle", name: "Nuclear Lifecycle", group: "Infrastructure Growth", blurb: "Mission-critical services across the nuclear energy lifecycle." },
  { slug: "grid-modernization", name: "Grid Modernization", group: "Infrastructure Growth", blurb: "Upgrading the electrical grid for a resilient, electrified economy." },
  { slug: "ot-cybersecurity", name: "OT Cybersecurity", group: "Infrastructure Growth", blurb: "Securing the operational technology that underpins critical infrastructure." },
];

export type ProcessStep = {
  no: string;
  title: string;
  body: string;
};

export const PROCESS: ProcessStep[] = [
  { no: "01", title: "Sourcing", body: "Proprietary networks and thematic research surface opportunities aligned to each strategy's mandate." },
  { no: "02", title: "Screening", body: "Quantitative and fundamental filters test every opportunity against thesis, mandate and risk appetite." },
  { no: "03", title: "Due Diligence", body: "Technical, commercial and financial diligence conducted by specialists across disciplines." },
  { no: "04", title: "Investment Committee", body: "Each strategy's independent committee debates conviction, structure and risk before capital is committed." },
  { no: "05", title: "Execution", body: "Disciplined structuring and pricing engineered to protect capital and align interests." },
  { no: "06", title: "Monitoring", body: "Continuous risk monitoring, including daily Value-at-Risk on liquid strategies, and active oversight." },
  { no: "07", title: "Valuation & Oversight", body: "Independent valuation committees on illiquid positions and comprehensive third-party administration." },
  { no: "08", title: "Reporting", body: "Monthly reporting for liquid strategies and quarterly deep-dive reviews for private markets." },
];

/* The four commitments that define the platform. */
export const DIFFERENTIATORS = [
  {
    title: "A platform, not a product",
    body: "Four independent strategies, each a separate Delaware Limited Partnership with its own investment committee and risk framework.",
  },
  {
    title: "Aligned interests",
    body: "Significant GP commitments across every fund. We invest where we ask our partners to invest, and at the same terms.",
  },
  {
    title: "Institutional discipline",
    body: "Quantitative and fundamental rigor, daily risk monitoring, and independent valuation on illiquid positions.",
  },
  {
    title: "Absolute transparency",
    body: "Monthly and quarterly reporting, annual independent audits, and real-time access for institutional partners.",
  },
];

/* Governance standards, verbatim to the firm's stated commitments. */
export const GOVERNANCE_STANDARDS = [
  {
    title: "Absolute Transparency",
    body: "Monthly reporting protocols for liquid strategies. Quarterly deep-dive reviews for private markets. Real-time access for institutional partners.",
  },
  {
    title: "Rigorous Oversight",
    body: "Annual audits conducted by an independent auditor. Comprehensive third-party administration. Independent valuation committees on illiquid positions.",
  },
  {
    title: "Aligned Interests",
    body: "Significant GP commitments across every fund. We invest where we ask our partners to invest, and at the same terms.",
  },
  {
    title: "Independent Governance",
    body: "Each strategy operates as a separate Delaware Limited Partnership with its own investment committee and risk framework.",
  },
];

/* Community Equity Fund impact indicators, qualitative, no figures. */
export const IMPACT_INDICATORS = [
  {
    title: "Wealth Equity",
    body: "Growth in net worth among founders, stakeholders and local investors, expanding access to wealth creation in historically underserved communities.",
  },
  {
    title: "Employment Quality",
    body: "Job creation, wage growth and career advancement, driving meaningful, sustainable livelihoods, not merely employment numbers.",
  },
  {
    title: "Capital Multiplier",
    body: "The volume of third-party capital attracted into a community following our initial investment. We measure catalysis, not just contribution.",
  },
];

/* Single headquarters, Alrion operates from one New York office. */
export const GLOBAL_OFFICES = [
  { city: "New York", region: "United States", role: "Headquarters · 11 West 118th Street, Suite 6C" },
];
