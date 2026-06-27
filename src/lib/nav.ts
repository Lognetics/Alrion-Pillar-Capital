/* ============================================================
   Global information architecture for ALRION Pillar Capital.
   Drives the desktop mega-menu, the mobile drawer, and the
   footer sitemap from a single source of truth.
   ============================================================ */

export type NavLink = {
  label: string;
  href: string;
  desc?: string;
};

export type NavColumn = {
  heading: string;
  links: NavLink[];
};

export type NavFeature = {
  eyebrow: string;
  title: string;
  blurb: string;
  href: string;
  cta: string;
};

export type NavSection = {
  label: string;
  href: string;
  columns: NavColumn[];
  feature?: NavFeature;
};

export const NAV: NavSection[] = [
  {
    label: "About",
    href: "/about",
    columns: [
      {
        heading: "The Firm",
        links: [
          { href: "/about", label: "Who We Are", desc: "Our purpose and mandate" },
          { href: "/about/story", label: "Our Story", desc: "Origins and milestones" },
          { href: "/about/mission", label: "Mission & Vision" },
          { href: "/about/principles", label: "Founding Principles" },
          { href: "/about/values", label: "Core Values" },
        ],
      },
      {
        heading: "Leadership",
        links: [
          { href: "/about/leadership", label: "Management Team" },
          { href: "/about/investment-committee", label: "Investment Committee" },
          { href: "/about/advisors", label: "Global Advisors" },
          { href: "/careers", label: "Careers" },
          { href: "/about/awards", label: "Recognition & Awards" },
        ],
      },
      {
        heading: "Stewardship",
        links: [
          { href: "/governance", label: "Corporate Governance" },
          { href: "/governance/risk", label: "Risk Management" },
          { href: "/governance/compliance", label: "Compliance & Ethics" },
          { href: "/esg", label: "ESG & Responsibility" },
          { href: "/contact", label: "Global Offices" },
        ],
      },
    ],
    feature: {
      eyebrow: "Inside Alrion",
      title: "A disciplined approach to frontier capital",
      blurb:
        "How a research-led culture and institutional governance shape every decision we make.",
      href: "/about",
      cta: "Read the firm overview",
    },
  },
  {
    label: "Strategies",
    href: "/strategies",
    columns: [
      {
        heading: "Investment Platforms",
        links: [
          { href: "/strategies/hedge-fund", label: "Hedge Fund", desc: "Adaptive, frontier-market strategies" },
          { href: "/strategies/private-equity", label: "Private Equity", desc: "Control and growth capital" },
          { href: "/strategies/venture-capital", label: "Venture Capital", desc: "Backing category-defining founders" },
          { href: "/strategies/community-equity", label: "Community Equity Fund", desc: "Inclusive, impact-led capital" },
        ],
      },
      {
        heading: "How We Invest",
        links: [
          { href: "/strategies#philosophy", label: "Investment Philosophy" },
          { href: "/strategies#allocation", label: "Capital Allocation" },
          { href: "/strategies#construction", label: "Portfolio Construction" },
          { href: "/process", label: "Investment Process" },
          { href: "/strategies#research", label: "Research Methodology" },
        ],
      },
      {
        heading: "Frameworks",
        links: [
          { href: "/strategies#risk", label: "Risk Framework" },
          { href: "/strategies#lifecycle", label: "Investment Lifecycle" },
          { href: "/strategies#performance", label: "Performance Framework" },
          { href: "/strategies#reporting", label: "Institutional Reporting" },
          { href: "/insights", label: "Market Analysis" },
        ],
      },
    ],
    feature: {
      eyebrow: "Capital at the frontier",
      title: "Four platforms. One conviction.",
      blurb:
        "Public markets to private innovation — engineered to compound capital across the technology cycle.",
      href: "/strategies",
      cta: "Explore our strategies",
    },
  },
  {
    label: "Industries",
    href: "/industries",
    columns: [
      {
        heading: "Intelligence & Compute",
        links: [
          { href: "/industries/artificial-intelligence", label: "Artificial Intelligence" },
          { href: "/industries/robotics", label: "Robotics & Autonomy" },
          { href: "/industries/semiconductors", label: "Semiconductors" },
          { href: "/industries/quantum-computing", label: "Quantum Computing" },
          { href: "/industries/cybersecurity", label: "Cybersecurity" },
        ],
      },
      {
        heading: "Life & Climate",
        links: [
          { href: "/industries/biotechnology", label: "Biotechnology" },
          { href: "/industries/healthcare", label: "Healthcare" },
          { href: "/industries/climate-technology", label: "Climate Technology" },
          { href: "/industries/renewable-energy", label: "Renewable Energy" },
          { href: "/industries/agriculture", label: "Agriculture" },
        ],
      },
      {
        heading: "Real Economy",
        links: [
          { href: "/industries/fintech", label: "Financial Technology" },
          { href: "/industries/space-technology", label: "Space Technology" },
          { href: "/industries/defense-technology", label: "Defense Technology" },
          { href: "/industries/infrastructure", label: "Digital Infrastructure" },
          { href: "/industries", label: "View all sectors →" },
        ],
      },
    ],
    feature: {
      eyebrow: "Thematic conviction",
      title: "Investing where the future is built",
      blurb:
        "Twenty-one frontier sectors mapped to secular demand, durable moats, and real-world impact.",
      href: "/industries",
      cta: "See every sector",
    },
  },
  {
    label: "Insights",
    href: "/insights",
    columns: [
      {
        heading: "Research",
        links: [
          { href: "/insights/market-intelligence", label: "Market Intelligence" },
          { href: "/insights/economic-outlook", label: "Economic Outlook" },
          { href: "/insights/themes", label: "Investment Themes" },
          { href: "/insights/white-papers", label: "White Papers" },
          { href: "/insights/reports", label: "Quarterly & Annual Reports" },
        ],
      },
      {
        heading: "Perspectives",
        links: [
          { href: "/insights/thought-leadership", label: "Thought Leadership" },
          { href: "/insights/articles", label: "Articles & Commentary" },
          { href: "/insights/podcasts", label: "Podcasts" },
          { href: "/insights/webinars", label: "Webinars & Events" },
          { href: "/insights/newsletter", label: "Newsletter" },
        ],
      },
      {
        heading: "Newsroom",
        links: [
          { href: "/media", label: "Press Center" },
          { href: "/media/news", label: "Latest News" },
          { href: "/media/interviews", label: "Interviews" },
          { href: "/media/resources", label: "Brand & Media Kit" },
          { href: "/insights/downloads", label: "Download Center" },
        ],
      },
    ],
    feature: {
      eyebrow: "Mid-Year 2026",
      title: "The Frontier Outlook",
      blurb:
        "Our house view on AI infrastructure, the energy transition, and the next decade of private innovation.",
      href: "/insights/economic-outlook",
      cta: "Read the outlook",
    },
  },
  {
    label: "Investors",
    href: "/investors",
    columns: [
      {
        heading: "Who We Serve",
        links: [
          { href: "/investors/institutions", label: "Institutional Investors" },
          { href: "/investors/pension-funds", label: "Pension Funds" },
          { href: "/investors/sovereign-wealth", label: "Sovereign Wealth Funds" },
          { href: "/investors/family-offices", label: "Family Offices" },
          { href: "/investors/foundations", label: "Foundations & Endowments" },
        ],
      },
      {
        heading: "Investor Center",
        links: [
          { href: "/investors/portal", label: "Investor Portal" },
          { href: "/investors/subscription", label: "Subscription Process" },
          { href: "/investors/documents", label: "Document Center" },
          { href: "/investors/capital-requests", label: "Capital Requests" },
          { href: "/investors/faqs", label: "Investor FAQs" },
        ],
      },
      {
        heading: "Global Reach",
        links: [
          { href: "/global", label: "Global Presence" },
          { href: "/global/network", label: "Institutional Network" },
          { href: "/governance/reports", label: "Annual Reports" },
          { href: "/governance/transparency", label: "Transparency" },
          { href: "/contact", label: "Investor Relations" },
        ],
      },
    ],
    feature: {
      eyebrow: "Investor Relations",
      title: "Partnership built on transparency",
      blurb:
        "Institutional-grade reporting, secure document access, and a dedicated relations team.",
      href: "/investors",
      cta: "Enter the Investor Center",
    },
  },
];

export const UTILITY_LINKS: NavLink[] = [
  { href: "/insights", label: "Insights" },
  { href: "/careers", label: "Careers" },
  { href: "/contact", label: "Contact" },
];
