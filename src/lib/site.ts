/* ============================================================
   Firm-level content shared across pages. Copy is original and
   faithful to ALRION Pillar Capital's stated positioning:
   impact-driven investing, AI-driven quantitative models,
   four divisions, and a frontier-technology focus.
   ============================================================ */

export const FIRM = {
  name: "ALRION Pillar Capital",
  short: "Alrion",
  tagline: "Capital for the frontier.",
  email: "invest@alrionpillarcapital.com",
  press: "media@alrionpillarcapital.com",
  phone: "+1 (212) 555-0114",
  established: 2019,
  description:
    "ALRION Pillar Capital is a global, research-led investment firm allocating capital across public markets and private innovation. We pursue durable returns and measurable impact at the frontier of technology.",
};

export type Stat = {
  value: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  label: string;
  sub: string;
};

export const HERO_STATS: Stat[] = [
  { value: 14.2, prefix: "$", suffix: "B", decimals: 1, label: "Capital under management", sub: "Across four investment platforms" },
  { value: 120, suffix: "+", label: "Portfolio companies", sub: "From seed-stage to industrial scale" },
  { value: 22, label: "Countries of activity", sub: "An integrated global footprint" },
  { value: 38, label: "Realized exits", sub: "Returned to our investors since inception" },
];

export const IMPACT_STATS: Stat[] = [
  { value: 9.4, prefix: "$", suffix: "B", decimals: 1, label: "Private capital deployed", sub: "Into frontier-technology companies" },
  { value: 64, label: "Research professionals", sub: "Engineers, scientists and analysts" },
  { value: 4.1, prefix: "$", suffix: "B", decimals: 1, label: "Climate & impact AUM", sub: "Aligned to the UN SDGs" },
  { value: 92, suffix: "%", label: "Institutional capital", sub: "Sourced from long-term partners" },
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
    name: "Hedge Fund",
    kicker: "Public Markets · Liquid Alpha",
    summary:
      "Adaptive, multi-strategy positioning focused on the frontier-technology markets, powered by proprietary quantitative models.",
    description:
      "Our hedge fund platform pursues asymmetric, risk-managed returns across global equities, credit and derivatives. AI-driven quantitative models and a dedicated research desk identify dislocations at the leading edge of innovation, while disciplined hedging and diversification preserve capital through the cycle.",
    bullets: [
      "AI-driven quantitative and machine-learning signal generation",
      "Long/short exposure to frontier-technology equities",
      "Systematic hedging, volatility control and drawdown management",
      "Daily risk attribution and independent oversight",
    ],
    metrics: [
      { value: "Multi-strat", label: "Mandate" },
      { value: "Global", label: "Universe" },
      { value: "Daily", label: "Liquidity profile" },
    ],
  },
  {
    slug: "private-equity",
    name: "Private Equity",
    kicker: "Control & Growth · Real Assets",
    summary:
      "Control and growth capital for industrial-scale businesses across infrastructure, energy, transportation and utilities.",
    description:
      "We acquire and build enduring companies in the real economy, partnering with management teams to professionalize operations, accelerate growth and modernize critical infrastructure. Our approach blends operational rigor with patient capital to compound value over multi-year horizons.",
    bullets: [
      "Buyouts, growth equity and structured investments",
      "Infrastructure, energy, transportation and utilities focus",
      "Operational value creation and governance uplift",
      "ESG integration across the ownership lifecycle",
    ],
    metrics: [
      { value: "Control", label: "Orientation" },
      { value: "5–8 yr", label: "Hold period" },
      { value: "Real assets", label: "Core focus" },
    ],
  },
  {
    slug: "venture-capital",
    name: "Venture Capital",
    kicker: "Frontier Innovation · Early Growth",
    summary:
      "Backing category-defining founders in AI, robotics, biotech, space, climate, cybersecurity and deep tech.",
    description:
      "Our venture platform empowers founders building the technologies that will define the next decade. From first institutional check to growth rounds, we provide conviction capital, technical diligence and an operating network that helps frontier companies scale responsibly.",
    bullets: [
      "Seed through growth-stage investments",
      "AI, robotics, biotech, space, climate and cybersecurity",
      "Founder-first partnership and technical diligence",
      "Access to a global commercialization network",
    ],
    metrics: [
      { value: "Seed–Growth", label: "Stage" },
      { value: "Deep tech", label: "Thesis" },
      { value: "Founder-first", label: "Approach" },
    ],
  },
  {
    slug: "community-equity",
    name: "Community Equity Fund",
    kicker: "Impact · Inclusive Capital",
    summary:
      "Impact-led capital that channels economic opportunity into underserved communities and inclusive enterprises.",
    description:
      "The Community Equity Fund advances our conviction that financial prosperity should align with social progress. We invest in inclusive enterprises, local economic development and community projects, measuring success in both returns and tangible social outcomes.",
    bullets: [
      "Impact investing with measurable social metrics",
      "Economic development and community-led projects",
      "Inclusive capital for underserved founders",
      "Transparent annual impact reporting",
    ],
    metrics: [
      { value: "Impact-first", label: "Mandate" },
      { value: "Measured", label: "Outcomes" },
      { value: "Inclusive", label: "Access" },
    ],
  },
];

export type Sector = {
  slug: string;
  name: string;
  group: string;
  blurb: string;
};

export const SECTORS: Sector[] = [
  { slug: "artificial-intelligence", name: "Artificial Intelligence", group: "Intelligence & Compute", blurb: "Foundation models, applied AI and the infrastructure that powers them." },
  { slug: "machine-learning", name: "Machine Learning", group: "Intelligence & Compute", blurb: "Data platforms and learning systems across the enterprise." },
  { slug: "robotics", name: "Robotics & Autonomy", group: "Intelligence & Compute", blurb: "Physical AI, automation and autonomous systems." },
  { slug: "semiconductors", name: "Semiconductors", group: "Intelligence & Compute", blurb: "Advanced chips and the silicon supply chain." },
  { slug: "quantum-computing", name: "Quantum Computing", group: "Intelligence & Compute", blurb: "Next-generation compute for intractable problems." },
  { slug: "cybersecurity", name: "Cybersecurity", group: "Intelligence & Compute", blurb: "Securing the digital and physical economy." },
  { slug: "biotechnology", name: "Biotechnology", group: "Life & Climate", blurb: "Breakthroughs that improve health outcomes." },
  { slug: "healthcare", name: "Healthcare", group: "Life & Climate", blurb: "Care delivery, diagnostics and digital health." },
  { slug: "climate-technology", name: "Climate Technology", group: "Life & Climate", blurb: "Decarbonization and resilience at scale." },
  { slug: "renewable-energy", name: "Renewable Energy", group: "Life & Climate", blurb: "Clean generation, storage and grid modernization." },
  { slug: "agriculture", name: "Agriculture", group: "Life & Climate", blurb: "Food security and sustainable agritech." },
  { slug: "fintech", name: "Financial Technology", group: "Real Economy", blurb: "Transformative solutions for financial access." },
  { slug: "space-technology", name: "Space Technology", group: "Real Economy", blurb: "Launch, satellites and the orbital economy." },
  { slug: "defense-technology", name: "Defense Technology", group: "Real Economy", blurb: "Dual-use innovation and national resilience." },
  { slug: "infrastructure", name: "Digital Infrastructure", group: "Real Economy", blurb: "Data centers, networks and connectivity." },
  { slug: "manufacturing", name: "Advanced Manufacturing", group: "Real Economy", blurb: "Reshoring and the industrial technology stack." },
  { slug: "energy", name: "Energy", group: "Real Economy", blurb: "The full spectrum of the energy transition." },
  { slug: "transportation", name: "Transportation", group: "Real Economy", blurb: "Mobility, logistics and electrification." },
  { slug: "smart-cities", name: "Smart Cities", group: "Real Economy", blurb: "Connected, efficient urban systems." },
  { slug: "autonomous-systems", name: "Autonomous Systems", group: "Real Economy", blurb: "Self-directed machines across land, air and sea." },
  { slug: "fintech-infra", name: "Quantum & Deep Tech", group: "Real Economy", blurb: "The hard-science frontier of tomorrow's economy." },
];

export type ProcessStep = {
  no: string;
  title: string;
  body: string;
};

export const PROCESS: ProcessStep[] = [
  { no: "01", title: "Sourcing", body: "Proprietary networks, thematic research and a global presence surface opportunities others miss." },
  { no: "02", title: "Screening", body: "Quantitative and qualitative filters align every opportunity to our thesis, mandate and risk appetite." },
  { no: "03", title: "Due Diligence", body: "Technical, commercial, financial and ESG diligence conducted by specialists across disciplines." },
  { no: "04", title: "Investment Committee", body: "A formal committee debates conviction, structure and risk before any capital is committed." },
  { no: "05", title: "Execution", body: "Disciplined structuring and pricing engineered to protect downside and capture asymmetric upside." },
  { no: "06", title: "Monitoring", body: "Continuous risk attribution, performance review and active board-level engagement." },
  { no: "07", title: "Portfolio Support", body: "Operating expertise, talent and a commercialization network that accelerates value creation." },
  { no: "08", title: "Exit & Reporting", body: "Deliberate exit planning and transparent, institutional-grade reporting to our partners." },
];

export const DIFFERENTIATORS = [
  {
    title: "Research-led conviction",
    body: "A dedicated desk of engineers, scientists and analysts translates frontier science into investable theses before they reach the mainstream.",
  },
  {
    title: "Quantitative intelligence",
    body: "Proprietary algorithms and machine-learning models inform allocation, risk and timing — discipline at the speed of modern markets.",
  },
  {
    title: "Impact with returns",
    body: "We reject the trade-off between performance and progress, building portfolios where financial prosperity reinforces social and environmental outcomes.",
  },
  {
    title: "Institutional governance",
    body: "Independent oversight, robust compliance and transparent reporting give our partners the assurance their capital deserves.",
  },
];

export const GLOBAL_OFFICES = [
  { city: "New York", region: "Americas", role: "Global Headquarters" },
  { city: "London", region: "EMEA", role: "European Hub" },
  { city: "Singapore", region: "APAC", role: "Asia-Pacific Hub" },
  { city: "Abu Dhabi", region: "Middle East", role: "Sovereign Capital" },
  { city: "San Francisco", region: "Americas", role: "Venture & Deep Tech" },
  { city: "Zurich", region: "EMEA", role: "Private Wealth" },
];
