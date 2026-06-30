/* ============================================================
   Governance sub-page content. Copy is original and faithful
   to ALRION Pillar Capital's positioning: AI-driven quant
   models, systematic hedging, institutional governance,
   transparency and the four investment divisions.
   Figures marked "Illustrative" are representative only.
   ============================================================ */

/* — Risk Management ————————————————————————————————————————— */

export type RiskType = {
  name: string;
  scope: string;
  body: string;
  controls: string[];
};

export const RISK_TYPES: RiskType[] = [
  {
    name: "Market Risk",
    scope: "Public Markets · Liquid Alpha",
    body: "Exposure to moves in prices, rates, spreads and volatility across our global equity, credit and derivatives books.",
    controls: [
      "Factor and beta decomposition",
      "Value-at-Risk and expected-shortfall limits",
      "Systematic volatility targeting",
    ],
  },
  {
    name: "Credit Risk",
    scope: "Counterparty & Issuer",
    body: "The risk that a borrower, issuer or trading counterparty fails to meet its obligations across our financing relationships.",
    controls: [
      "Internal credit scoring",
      "Concentration and tenor limits",
      "Collateral and margin governance",
    ],
  },
  {
    name: "Liquidity Risk",
    scope: "Funding & Redemption",
    body: "The risk of being unable to meet obligations or unwind positions without material cost during stressed conditions.",
    controls: [
      "Liquidity coverage modelling",
      "Redemption and gating frameworks",
      "Cash and collateral laddering",
    ],
  },
  {
    name: "Operational Risk",
    scope: "Process · People · Systems",
    body: "Loss arising from failed internal processes, human error, system outages or external events across the platform.",
    controls: [
      "Segregation of duties",
      "Business continuity and DR testing",
      "Vendor and cyber resilience review",
    ],
  },
  {
    name: "Model Risk",
    scope: "AI & Quantitative Models",
    body: "The risk that our AI-driven quantitative models are mis-specified, mis-used or degrade as market regimes shift.",
    controls: [
      "Independent model validation",
      "Out-of-sample and drift monitoring",
      "Human-in-the-loop override authority",
    ],
  },
  {
    name: "ESG & Climate Risk",
    scope: "Transition & Physical",
    body: "Financial risk from environmental, social and governance factors, including transition and physical climate exposure.",
    controls: [
      "Climate scenario analysis",
      "ESG screening at diligence",
      "Portfolio carbon attribution",
    ],
  },
];

export type DefenseLine = {
  no: string;
  line: string;
  owner: string;
  body: string;
};

export const DEFENSE_LINES: DefenseLine[] = [
  {
    no: "01",
    line: "First Line",
    owner: "Investment & Trading Desks",
    body: "Portfolio managers own the risks they originate. They operate within pre-committed mandates, position limits and drawdown thresholds, and are accountable for the day-to-day management of exposure.",
  },
  {
    no: "02",
    line: "Second Line",
    owner: "Independent Risk & Compliance",
    body: "A risk function structurally separate from the desks sets the framework, validates models, monitors limits in real time and reports directly to governance — never to the teams it oversees.",
  },
  {
    no: "03",
    line: "Third Line",
    owner: "Internal & External Audit",
    body: "Independent audit provides objective assurance over the design and effectiveness of controls, escalating findings to the Audit Committee and the Board.",
  },
];

export type RiskMetric = {
  value: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  label: string;
  sub: string;
};

/* Illustrative monitoring metrics */
export const RISK_METRICS: RiskMetric[] = [
  { value: 24, suffix: "/7", label: "Real-time monitoring", sub: "Exposure and correlation surveillance" },
  { value: 1.0, prefix: "<", suffix: "%", decimals: 0, label: "Daily VaR ceiling", sub: "Of capital, 99% confidence · illustrative" },
  { value: 18, label: "Stress scenarios", sub: "Run across portfolios each cycle · illustrative" },
  { value: 100, suffix: "%", label: "Models independently validated", sub: "Before deployment to capital" },
];

/* — Compliance & Ethics ————————————————————————————————————— */

export type Policy = {
  code: string;
  title: string;
  body: string;
  cadence: string;
};

export const POLICIES: Policy[] = [
  {
    code: "C-01",
    title: "Code of Conduct",
    body: "The ethical foundation for every employee, partner and counterparty relationship — defining the standard of integrity we hold ourselves to without exception.",
    cadence: "Annual attestation",
  },
  {
    code: "C-02",
    title: "Regulatory Adherence",
    body: "An active program maintained against evolving rules in every jurisdiction of activity, from securities regulation to fund-marketing and reporting obligations.",
    cadence: "Continuous",
  },
  {
    code: "C-03",
    title: "Anti-Money-Laundering (AML)",
    body: "Risk-based controls to detect and prevent money laundering and terrorist financing, including transaction monitoring and sanctions screening.",
    cadence: "Ongoing surveillance",
  },
  {
    code: "C-04",
    title: "Know-Your-Customer (KYC)",
    body: "Rigorous onboarding diligence and beneficial-ownership verification for every investor, refreshed on a risk-weighted schedule.",
    cadence: "Onboarding & periodic refresh",
  },
  {
    code: "C-05",
    title: "Conflicts of Interest",
    body: "Identification, disclosure and independent resolution of actual and potential conflicts, supported by a personal-trading and gifts framework.",
    cadence: "Disclosure on arising",
  },
  {
    code: "C-06",
    title: "Whistleblower Protection",
    body: "Confidential, retaliation-free channels that empower our people and partners to raise concerns directly to the Compliance Committee.",
    cadence: "Always open",
  },
  {
    code: "C-07",
    title: "Personal Account Dealing",
    body: "Pre-clearance, restricted lists and holding periods govern employee investing to ensure firm and client interests always come first.",
    cadence: "Pre-trade clearance",
  },
  {
    code: "C-08",
    title: "Training & Certification",
    body: "Mandatory compliance, ethics and conduct training, with role-specific certification tracked and renewed across the firm.",
    cadence: "Annual & on-hire",
  },
];

/* — Transparency ———————————————————————————————————————————— */

export type Disclosure = {
  title: string;
  body: string;
};

export const DISCLOSURES: Disclosure[] = [
  { title: "Exposure & Positioning", body: "Granular breakdowns of net and gross exposure by strategy, geography, sector and factor." },
  { title: "Performance & Attribution", body: "Returns decomposed by source, with clear separation of alpha, beta and fee impact." },
  { title: "Risk Metrics", body: "Value-at-Risk, stress results, liquidity coverage and concentration against pre-set limits." },
  { title: "Fees & Expenses", body: "Full, plain-language disclosure of management fees, performance fees and fund-level expenses." },
  { title: "ESG & Impact", body: "Climate, carbon and impact metrics aligned to recognized frameworks and the UN SDGs." },
  { title: "Valuations", body: "Independent valuation methodology and governance for private and illiquid positions." },
];

export type CadenceItem = {
  cadence: string;
  window: string;
  reports: string[];
};

export const REPORTING_CADENCE: CadenceItem[] = [
  {
    cadence: "Monthly",
    window: "Within 10 business days",
    reports: ["Estimated performance", "Exposure snapshot", "Liquidity summary"],
  },
  {
    cadence: "Quarterly",
    window: "Within 45 days",
    reports: ["Full performance & attribution", "Risk and stress dashboard", "Investor letter & commentary"],
  },
  {
    cadence: "Semi-Annual",
    window: "Within 60 days",
    reports: ["ESG & impact update", "Portfolio review", "Capital activity statement"],
  },
  {
    cadence: "Annual",
    window: "Within 120 days",
    reports: ["Audited financial statements", "Annual report", "Full ESG & impact report"],
  },
];

/* — Annual Reports archive ——————————————————————————————————— */

export type ReportYear = {
  year: number;
  theme: string;
  summary: string;
  documents: { label: string; type: string; size: string }[];
};

export const REPORT_ARCHIVE: ReportYear[] = [
  {
    year: 2025,
    theme: "Discipline at the frontier",
    summary: "A year of measured growth across all four platforms, with continued institutional inflows and expanded climate and impact mandates.",
    documents: [
      { label: "Annual Report 2025", type: "PDF", size: "8.4 MB" },
      { label: "Audited Financial Statements", type: "PDF", size: "3.1 MB" },
      { label: "ESG & Impact Report", type: "PDF", size: "5.7 MB" },
    ],
  },
  {
    year: 2024,
    theme: "Building the platform",
    summary: "Capital under management crossed new thresholds as the venture and private equity platforms deepened their frontier-technology exposure.",
    documents: [
      { label: "Annual Report 2024", type: "PDF", size: "7.9 MB" },
      { label: "Audited Financial Statements", type: "PDF", size: "2.9 MB" },
      { label: "ESG & Impact Report", type: "PDF", size: "5.2 MB" },
    ],
  },
  {
    year: 2023,
    theme: "Scaling research-led conviction",
    summary: "The research desk expanded across intelligence, life sciences and the real economy, sharpening the firm's thematic edge.",
    documents: [
      { label: "Annual Report 2023", type: "PDF", size: "7.2 MB" },
      { label: "Audited Financial Statements", type: "PDF", size: "2.6 MB" },
      { label: "ESG & Impact Report", type: "PDF", size: "4.8 MB" },
    ],
  },
  {
    year: 2022,
    theme: "Foundations of governance",
    summary: "The firm formalized its three-lines-of-defense model and committed to an institutional reporting cadence across every fund.",
    documents: [
      { label: "Annual Report 2022", type: "PDF", size: "6.5 MB" },
      { label: "Audited Financial Statements", type: "PDF", size: "2.4 MB" },
      { label: "ESG & Impact Report", type: "PDF", size: "4.1 MB" },
    ],
  },
];
