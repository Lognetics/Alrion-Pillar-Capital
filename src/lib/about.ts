/* ============================================================
   About-section content: story milestones, leadership team,
   investment committee, global advisors and awards. All copy
   is original and faithful to ALRION Pillar Capital's stated
   positioning. Names, titles and figures are representative
   and illustrative unless otherwise noted.
   ============================================================ */

export type Milestone = {
  year: string;
  title: string;
  body: string;
  tag?: string;
};

export const MILESTONES: Milestone[] = [
  {
    year: "2019",
    title: "A research desk becomes a firm",
    tag: "Founding",
    body: "ALRION Pillar Capital is established in New York by a small group of investors, engineers and scientists united by one conviction — that the most consequential technologies of the era demand capital grounded in genuine technical understanding, not narrative.",
  },
  {
    year: "2020",
    title: "First quantitative models go live",
    tag: "Public Markets",
    body: "The firm launches its inaugural hedge-fund mandate, deploying proprietary AI-driven quantitative models across frontier-technology equities. Disciplined hedging and daily risk attribution define the methodology from day one.",
  },
  {
    year: "2021",
    title: "Venture platform opens to founders",
    tag: "Venture Capital",
    body: "Alrion writes its first institutional checks into category-defining founders in AI, robotics and climate technology, pairing conviction capital with deep technical diligence and a global commercialization network.",
  },
  {
    year: "2022",
    title: "Private equity and real assets",
    tag: "Private Equity",
    body: "The firm extends into control and growth capital for industrial-scale businesses — infrastructure, energy, transportation and utilities — blending operational rigor with patient, multi-year ownership.",
  },
  {
    year: "2023",
    title: "Community Equity Fund launches",
    tag: "Impact",
    body: "Acting on its founding belief that prosperity and progress should compound together, Alrion launches the Community Equity Fund to channel inclusive capital into underserved communities and measurable social outcomes.",
  },
  {
    year: "2024",
    title: "An integrated global footprint",
    tag: "Expansion",
    body: "Hubs in London, Singapore, Abu Dhabi, San Francisco and Zurich knit the platforms into a single research-led institution, giving Alrion proprietary sightlines into innovation across every major market.",
  },
  {
    year: "2025",
    title: "Governance and impact at scale",
    tag: "Institution",
    body: "Independent oversight, robust compliance and transparent impact reporting mature into an institutional standard, as long-term partners entrust the firm with capital across all four platforms.",
  },
  {
    year: "2026",
    title: "Capital for the frontier, today",
    tag: "Today",
    body: "Alrion operates as a four-division manager spanning public markets and private innovation — proving, portfolio by portfolio, that durable returns and measurable impact are not a trade-off but a design.",
  },
];

export type Objective = {
  no: string;
  title: string;
  body: string;
};

export const OBJECTIVES: Objective[] = [
  {
    no: "01",
    title: "Fund the frontier",
    body: "Direct capital toward the science, infrastructure and enterprises advancing human progress — across the full technology cycle, from liquid markets to first institutional checks.",
  },
  {
    no: "02",
    title: "Compound responsibly",
    body: "Engineer social and environmental outcomes into the investment process so that financial prosperity reinforces, never compromises, the world we are building.",
  },
  {
    no: "03",
    title: "Lead on governance",
    body: "Set the institutional standard for how frontier technology is financed, with independent oversight, transparent reporting and uncompromising discipline.",
  },
  {
    no: "04",
    title: "Endure across cycles",
    body: "Remain the partner of choice for those building, and backing, the next decade — aligning patient capital with patient founders over horizons measured in cycles.",
  },
];

export type Principle = {
  no: string;
  title: string;
  body: string;
};

export const PRINCIPLES: Principle[] = [
  {
    no: "01",
    title: "Science before capital",
    body: "We invest only where we genuinely understand the technology. A thesis must survive the scrutiny of people who can read the research paper and model the economics with equal fluency before a dollar follows it.",
  },
  {
    no: "02",
    title: "Conviction earned through evidence",
    body: "We size positions to the strength of the evidence, not the volume of the narrative. Every commitment is stress-tested by specialists across disciplines and debated openly before the firm acts.",
  },
  {
    no: "03",
    title: "Independence of mind",
    body: "Our research, risk and governance functions operate with genuine autonomy and challenge one another by design, ensuring no allocation ever rests on an unexamined assumption or unchallenged consensus.",
  },
  {
    no: "04",
    title: "Responsibility by design",
    body: "Impact is engineered into our process, not bolted on as an afterthought. We reject the false choice between performance and progress and measure our success in both returns and outcomes.",
  },
  {
    no: "05",
    title: "Long-term partnership",
    body: "We align with patient capital and patient founders, compounding value over horizons measured in cycles rather than quarters, and we honour the trust our partners place in us with transparency.",
  },
  {
    no: "06",
    title: "Intellectual humility",
    body: "We treat being wrong as information. Adversarial review, continuous learning and a culture that prizes the better argument over seniority keep our convictions honest and our methodology evolving.",
  },
];

export type Value = {
  glyph: string;
  title: string;
  body: string;
};

export const VALUES: Value[] = [
  {
    glyph: "R",
    title: "Rigor",
    body: "We hold every idea to a standard of evidence. Technical, financial and ESG diligence is conducted by specialists, and conviction is always proportional to proof.",
  },
  {
    glyph: "I",
    title: "Integrity",
    body: "We do what we say, and we report what we do. Independence, honesty and transparency are non-negotiable foundations of how we steward our partners' capital.",
  },
  {
    glyph: "C",
    title: "Courage",
    body: "Backing the frontier means acting before the consensus. We have the conviction to invest in the unproven when the evidence — and the mission — warrants it.",
  },
  {
    glyph: "S",
    title: "Stewardship",
    body: "Capital is a responsibility. We protect downside as fiercely as we pursue upside, and we treat the communities and ecosystems we touch as stakeholders.",
  },
  {
    glyph: "C",
    title: "Collaboration",
    body: "Our edge is the deliberate collision of disciplines. Investors, engineers, scientists and risk specialists work as one team, sharpened by genuine debate.",
  },
  {
    glyph: "P",
    title: "Progress",
    body: "We exist to advance things — for our partners, for founders and for the world. We measure ourselves by the durable value and tangible good we help create.",
  },
];

export type Person = {
  name: string;
  title: string;
  focus: string;
  bio: string;
  initials: string;
};

/* Representative leadership team — names and titles illustrative. */
export const LEADERSHIP: Person[] = [
  {
    name: "Adrian Voss",
    title: "Founder & Chief Executive Officer",
    focus: "Firm strategy",
    initials: "AV",
    bio: "Founded Alrion in 2019 around a single conviction: that frontier capital must be grounded in technical understanding. Sets the firm's strategy across all four platforms.",
  },
  {
    name: "Lena Maris",
    title: "President & Chief Investment Officer",
    focus: "Cross-platform investing",
    initials: "LM",
    bio: "Oversees investment strategy across public and private markets, ensuring a single research methodology and risk discipline unify the firm's mandates.",
  },
  {
    name: "Dr. Idris Calloway",
    title: "Chief Research Officer",
    focus: "Frontier science",
    initials: "IC",
    bio: "Leads the research desk of engineers and scientists translating frontier breakthroughs into investable theses long before they reach the mainstream.",
  },
  {
    name: "Priya Anand",
    title: "Head of Quantitative Strategies",
    focus: "AI-driven models",
    initials: "PA",
    bio: "Architects the proprietary machine-learning models that inform allocation, sizing and timing across the firm's liquid and systematic mandates.",
  },
  {
    name: "Marcus Thorne",
    title: "Managing Partner, Private Equity",
    focus: "Real assets",
    initials: "MT",
    bio: "Builds enduring companies in infrastructure, energy and transportation, partnering with management to professionalize operations and compound value.",
  },
  {
    name: "Sofia Reyes",
    title: "Managing Partner, Venture Capital",
    focus: "Deep tech",
    initials: "SR",
    bio: "Backs category-defining founders in AI, robotics, biotech and climate, pairing conviction capital with technical diligence and an operating network.",
  },
  {
    name: "Daniela Okafor",
    title: "Head of Community Equity",
    focus: "Impact",
    initials: "DO",
    bio: "Directs inclusive capital toward underserved communities and enterprises, measuring success in both returns realized and tangible social outcomes.",
  },
  {
    name: "Jonathan Pierce",
    title: "Chief Risk & Compliance Officer",
    focus: "Governance",
    initials: "JP",
    bio: "Maintains the independent oversight, risk attribution and regulatory discipline that give the firm's partners the assurance their capital deserves.",
  },
];

/* Representative investment committee — names and titles illustrative. */
export const COMMITTEE: Person[] = [
  {
    name: "Lena Maris",
    title: "Chair · Chief Investment Officer",
    focus: "Cross-platform conviction",
    initials: "LM",
    bio: "Chairs the committee and arbitrates conviction, structure and risk across every mandate before capital is committed.",
  },
  {
    name: "Dr. Idris Calloway",
    title: "Chief Research Officer",
    focus: "Technical diligence",
    initials: "IC",
    bio: "Represents the research desk, ensuring every thesis withstands rigorous scientific and architectural scrutiny.",
  },
  {
    name: "Priya Anand",
    title: "Head of Quantitative Strategies",
    focus: "Model & risk signals",
    initials: "PA",
    bio: "Brings quantitative evidence — sizing, timing and risk attribution — to the committee's deliberations.",
  },
  {
    name: "Marcus Thorne",
    title: "Managing Partner, Private Equity",
    focus: "Real-asset structuring",
    initials: "MT",
    bio: "Evaluates control and growth opportunities through an operational value-creation and governance lens.",
  },
  {
    name: "Sofia Reyes",
    title: "Managing Partner, Venture Capital",
    focus: "Early-stage conviction",
    initials: "SR",
    bio: "Champions frontier founders while holding venture theses to the firm's standard of technical evidence.",
  },
  {
    name: "Jonathan Pierce",
    title: "Chief Risk & Compliance Officer",
    focus: "Independent oversight",
    initials: "JP",
    bio: "Provides an independent veto on risk, compliance and governance, safeguarding the integrity of every decision.",
  },
];

export type DecisionStep = {
  no: string;
  title: string;
  body: string;
};

export const DECISION_STEPS: DecisionStep[] = [
  {
    no: "01",
    title: "Thesis presentation",
    body: "The sponsoring team presents the opportunity, the technical evidence and the investment thesis, alongside the diligence conducted by specialists across disciplines.",
  },
  {
    no: "02",
    title: "Adversarial review",
    body: "An assigned challenger argues the bear case. Research, quantitative and risk functions interrogate every assumption until the thesis either strengthens or fails.",
  },
  {
    no: "03",
    title: "Structure & risk",
    body: "The committee debates sizing, structure and downside protection, with the risk and compliance officer holding an independent voice on every dimension.",
  },
  {
    no: "04",
    title: "Decision & mandate",
    body: "A documented decision records the conviction, conditions and monitoring plan. Only commitments that survive this scrutiny earn the firm's capital.",
  },
];

/* Representative global advisory board — names and titles illustrative. */
export const ADVISORS: Person[] = [
  {
    name: "Prof. Helena Brandt",
    title: "Former Director, National AI Laboratory",
    focus: "Artificial intelligence",
    initials: "HB",
    bio: "Advises on the trajectory of foundation models and applied AI, grounding the firm's compute and intelligence theses in frontier science.",
  },
  {
    name: "Rajesh Menon",
    title: "Ex-Central Bank Deputy Governor",
    focus: "Macro & policy",
    initials: "RM",
    bio: "Offers perspective on macroeconomic regimes, monetary policy and the geopolitical currents that shape global capital allocation.",
  },
  {
    name: "Dr. Yuki Tanaka",
    title: "Pioneer in Robotics & Autonomy",
    focus: "Robotics",
    initials: "YT",
    bio: "Guides the firm's diligence into physical AI, automation and autonomous systems across land, air and sea.",
  },
  {
    name: "Amara Diallo",
    title: "Climate Finance Architect",
    focus: "Climate technology",
    initials: "AD",
    bio: "Shapes the firm's approach to decarbonization, resilience and impact measurement aligned to the UN SDGs.",
  },
  {
    name: "Stefan Albright",
    title: "Former Global Head of Securities",
    focus: "Markets & risk",
    initials: "SA",
    bio: "Advises on liquidity, market structure and the systematic risk frameworks behind the firm's public-market mandates.",
  },
  {
    name: "Dr. Naledi Khoza",
    title: "Biotechnology Research Leader",
    focus: "Life sciences",
    initials: "NK",
    bio: "Brings scientific rigor to the firm's biotechnology and healthcare theses, from diagnostics to therapeutic platforms.",
  },
  {
    name: "Victor Lindqvist",
    title: "Infrastructure & Energy Statesman",
    focus: "Real assets",
    initials: "VL",
    bio: "Counsels on critical infrastructure, the energy transition and the patient capital that modernizes the real economy.",
  },
  {
    name: "Imani Carter",
    title: "Inclusive Economy Strategist",
    focus: "Community impact",
    initials: "IC",
    bio: "Advises the Community Equity Fund on inclusive enterprise, local development and credible social-outcome measurement.",
  },
];

export type Award = {
  year: string;
  title: string;
  body: string;
  category: string;
};

/* Illustrative recognition — awards and bodies are representative. */
export const AWARDS: Award[] = [
  {
    year: "2026",
    title: "Frontier Technology Investor of the Year",
    body: "Global Alternatives Council",
    category: "Firm-wide",
  },
  {
    year: "2026",
    title: "Best Quantitative Hedge Fund Strategy",
    body: "Institutional Markets Review",
    category: "Hedge Fund",
  },
  {
    year: "2025",
    title: "Impact Fund of the Year",
    body: "Responsible Capital Awards",
    category: "Community Equity",
  },
  {
    year: "2025",
    title: "Excellence in Investment Governance",
    body: "Institutional Governance Institute",
    category: "Firm-wide",
  },
  {
    year: "2024",
    title: "Venture Firm to Watch · Deep Tech",
    body: "Frontier Innovation Index",
    category: "Venture Capital",
  },
  {
    year: "2024",
    title: "Infrastructure Deal of the Year",
    body: "Real Assets Forum",
    category: "Private Equity",
  },
  {
    year: "2023",
    title: "Rising Manager of the Year",
    body: "Global Alternatives Council",
    category: "Firm-wide",
  },
  {
    year: "2023",
    title: "Innovation in AI-Driven Allocation",
    body: "Quantitative Finance Society",
    category: "Hedge Fund",
  },
  {
    year: "2022",
    title: "Best ESG Integration · New Manager",
    body: "Responsible Capital Awards",
    category: "Firm-wide",
  },
  {
    year: "2021",
    title: "Emerging Venture Platform of the Year",
    body: "Frontier Innovation Index",
    category: "Venture Capital",
  },
  {
    year: "2020",
    title: "Most Promising Launch · Systematic Strategies",
    body: "Institutional Markets Review",
    category: "Hedge Fund",
  },
];

export const AWARD_STATS = [
  { value: 28, suffix: "+", label: "Industry honours", sub: "Across firm and platforms since inception" },
  { value: 11, label: "Award bodies", sub: "Recognizing our work globally" },
  { value: 6, label: "Consecutive years", sub: "Of external recognition" },
  { value: 4, label: "Platforms recognized", sub: "Each of our investment divisions" },
];
