export const hero = {
  name: "Abdulrahman Zaid",
  title: "MENA Industrial Entrepreneur & Operating Leader",
  location: "Egypt · Saudi Arabia · United Arab Emirates",
  valueStatement:
    "20+ years building, operating, and developing manufacturing, food industries, trading, import, distribution, and commercial ventures across Egypt, Saudi Arabia, and the UAE.",
  credibilityLine:
    "Egypt · KSA · UAE · Manufacturing · Food Industries · Import · Distribution · Operations",
  statusChip: "Regional business portfolio",
  profileSummary: "Manufacturing · Trade · Food Industries · Operations",
  ctas: {
    primary: { label: "View portfolio", href: "#work" },
    secondary: { label: "Start a conversation", href: "#contact" },
  },
};

export interface TextSegment {
  text: string;
  accent?: boolean;
}

export interface ResultCard {
  value: string;
  label: string;
}

export const whoIAm = {
  label: "Who he is",
  headingLines: ["Build", "Operate", "Scale"] as const,
  accentLineIndex: 1,
  introParagraphs: [
    [
      { text: "Abdulrahman Zaid is an Egyptian business operator and entrepreneur with more than " },
      { text: "20 years of regional experience", accent: true },
      { text: " across Egypt, Saudi Arabia, and the United Arab Emirates." },
    ],
    [
      { text: "His work sits at the intersection of " },
      { text: "manufacturing, food production, import, trading, distribution, and commercial operations", accent: true },
      { text: " — turning business opportunities into working companies, teams, and market presence." },
    ],
    [
      { text: "This profile presents him as a " },
      { text: "MENA industrial entrepreneur and operating leader", accent: true },
      { text: " with a practical portfolio of ventures, partnerships, and leadership roles across multiple markets." },
    ],
  ] as TextSegment[][],
  resultsLabel: "Regional footprint",
  resultCards: [
    { value: "20+", label: "Years of business experience" },
    { value: "3", label: "Core regional markets" },
    { value: "7+", label: "Ventures and operating roles" },
    { value: "100+", label: "Regional team footprint" },
    { value: "10+", label: "Projects and business expansions" },
  ] as ResultCard[],
};

export interface WhatIDoCapability { title: string; body: string; }
export interface WhatIDoMode {
  id: string;
  label: string;
  cardTitle: string;
  cardDescription: string;
  capabilities: WhatIDoCapability[];
  tools: string[];
}

export const whatIDo = {
  label: "What he builds",
  intro: [
    { text: "A practical operating model across " },
    { text: "manufacturing, food production, import, distribution, and regional business development", accent: true },
    { text: " — built around execution, supplier networks, team leadership, and commercial growth." },
  ] as TextSegment[],
  badge: "Industrial ventures & operating systems",
  modes: [
    {
      id: "manufacturing",
      label: "Manufacturing & Operations",
      cardTitle: "Build production systems that can run and scale.",
      cardDescription: "Work across production planning, quality follow-up, operational efficiency, supply coordination, and team capability building inside manufacturing and food-industry environments.",
      capabilities: [
        { title: "Production Planning", body: "Coordinate production plans, resources, and daily operational priorities." },
        { title: "Operational Efficiency", body: "Improve workflows, reduce friction, and support better cost and performance control." },
        { title: "Quality & Standards", body: "Support consistent product quality and production discipline across teams." },
        { title: "Private Label Readiness", body: "Position food manufacturing capabilities for third-party and contract manufacturing opportunities." },
        { title: "Team Development", body: "Build operational teams with clearer roles, responsibilities, and follow-up routines." },
      ],
      tools: ["Production Plans", "Quality Control", "ERP", "Reporting", "Supplier Coordination", "Team Leadership"],
    },
    {
      id: "business-development",
      label: "Trade & Business Development",
      cardTitle: "Turn market opportunities into operating ventures.",
      cardDescription: "Business development across supplier relationships, commercial contracts, import operations, distribution networks, customer relationships, and regional market expansion.",
      capabilities: [
        { title: "Supplier Networks", body: "Build and maintain relationships with local and international suppliers." },
        { title: "Import & Trading", body: "Support importing specialized products, machinery, materials, and business inputs." },
        { title: "Commercial Contracts", body: "Negotiate and manage business relationships with clients, partners, and distributors." },
        { title: "Market Expansion", body: "Open channels, develop distribution reach, and grow customer bases." },
        { title: "Financial Oversight", body: "Follow business performance, profitability, and management reporting." },
      ],
      tools: ["Negotiation", "CRM", "Distribution", "Commercial Reporting", "Market Research", "Partnerships"],
    },
  ] as WhatIDoMode[],
};

export type ToolStackLane = "manufacturing" | "trade" | "shared";
export interface ToolStackCategory { id: string; title: string; lane: ToolStackLane; laneLabel: string; purpose: string; tools: string[]; }
export const operatingStackStrip = {
  eyebrow: "Operating stack",
  title: "Tools that keep the business moving",
  line: "A compact stack across production, import, CRM, ERP, reporting, team coordination, and commercial execution.",
};
export const stackCategoryShortLabels: Record<string, string> = {
  "production-operations": "Production",
  "supplier-import": "Import",
  "commercial-sales": "Sales",
  "reporting-systems": "Systems",
  "team-coordination": "Teams",
};
export const operatingStackCategories: ToolStackCategory[] = [
  { id: "production-operations", title: "Production & Operations", lane: "manufacturing", laneLabel: "Manufacturing & Operations", purpose: "Production planning, quality follow-up, manufacturing efficiency, and operational discipline.", tools: ["Production Planning", "Quality Control", "Operational KPIs", "Cost Control"] },
  { id: "supplier-import", title: "Supplier & Import Network", lane: "trade", laneLabel: "Trade & Distribution", purpose: "Supplier relations, import operations, product sourcing, and market-ready materials.", tools: ["International Suppliers", "Import Operations", "Supplier Agreements", "Product Sourcing"] },
  { id: "commercial-sales", title: "Commercial & Sales Operations", lane: "trade", laneLabel: "Trade & Distribution", purpose: "Client relationships, contracts, distribution channels, and market penetration.", tools: ["CRM", "Commercial Contracts", "Distribution Networks", "Customer Base"] },
  { id: "reporting-systems", title: "Reporting & Business Systems", lane: "shared", laneLabel: "Management Layer", purpose: "Financial follow-up, management reporting, ERP tools, and business visibility.", tools: ["ERP", "Financial Statements", "Dashboards", "Microsoft Office"] },
  { id: "team-coordination", title: "Team Coordination", lane: "shared", laneLabel: "Management Layer", purpose: "Team leadership, task follow-up, department coordination, and execution rhythm.", tools: ["ClickUp", "Trello", "Asana", "Team Meetings"] },
];

export interface JourneyItem { id: string; years: string; role: string; company: string; market?: string; achievement: string; category?: string; bullets?: string[]; focus?: string[]; current?: boolean; isGroup?: boolean; underGroup?: string; }
export interface LearningCard { title: string; detail: string; description: string; icon: "university" | "apple" | "hours"; }
export const journeyEyebrow = "Journey";
export const journeyHeading = "A regional business-building journey.";
export const journeyIntro = "From Saudi business development in 2004 to active operating roles across Egypt, Saudi Arabia, and the UAE today.";
export const journeyNote = "Current roles may run in parallel across several companies and markets. Wording should remain tied to approved CV/profile facts.";
export const learningCards: LearningCard[] = [
  { title: "MBA", detail: "Business Administration · 2015", description: "Management foundation supporting strategy, leadership, operations, and company development.", icon: "university" },
  { title: "Computer Science", detail: "Bachelor's Degree · 2004", description: "Technical foundation supporting systems thinking, tools, and modern operating workflows.", icon: "university" },
  { title: "Executive & Entrepreneurship Training", detail: "Business, leadership, English, and entrepreneurship courses", description: "Continuous development across business management, executive leadership, team development, and entrepreneurship.", icon: "hours" },
];
export const journeyItems: JourneyItem[] = [
  { id: "silicon-star", years: "2024 – Present", role: "General Manager", company: "Ibrahim Shohail Al-Qaood — Silicon Star Brand", market: "Riyadh, Saudi Arabia", category: "Industrial manufacturing", achievement: "Leads production planning, manufacturing efficiency, administrative and financial operations, specialized silicone and resin imports, client relationships, and team capability development.", bullets: ["Develops production plans and improves manufacturing efficiency.", "Supervises administrative and financial operations.", "Coordinates import of specialized silicone and resin products from leading factories.", "Builds client relationships and team capabilities."], focus: ["Silicone", "Resin", "Manufacturing", "KSA"], current: true },
  { id: "halsa-food", years: "2023 – Present", role: "General Manager", company: "Halsa Food Industries / Al Shehail Food Industries", market: "United Arab Emirates", category: "Food manufacturing", achievement: "Leads production operations, business expansion strategies, product marketing, market penetration, quality standards, distribution network development, and commercial contracts.", bullets: ["Leads production operations and business expansion strategies.", "Supports product marketing and market penetration.", "Maintains quality alignment with required production standards.", "Develops distribution network and commercial contract opportunities."], focus: ["Food Industries", "FMCG", "Distribution", "UAE"], current: true },
  { id: "nano-line", years: "2022 – Present", role: "Maintenance & Technical Support Manager", company: "Nano Line Trading Company", market: "United Arab Emirates", category: "Trading & equipment", achievement: "Supports commercial, logistics, import, marketing, technical support, industrial equipment, cost reduction, and product-development operations.", bullets: ["Supports commercial and logistics operations.", "Works across import, marketing, and industrial equipment activity.", "Develops operational systems to improve cost and profitability control."], focus: ["Trading", "Import", "Equipment", "UAE"], current: true },
  { id: "nano-food-machines", years: "2019 – Present", role: "Administrative Manager & Sales Director", company: "Nano Food Machines", market: "Egypt", category: "Machinery & sales", achievement: "Leads sales teams, annual growth targets, customer-network expansion, supplier relationships, market research, and customer satisfaction operations.", bullets: ["Leads sales team activity and annual growth targets.", "Expands customer network and sales operations.", "Maintains supplier relationships and customer satisfaction."], focus: ["Sales", "Machinery", "Suppliers", "Egypt"], current: true },
  { id: "zaid-sanitary", years: "2015 – Present", role: "General Manager", company: "Zaid for Sanitary Ware and Ceramics", market: "Delta Region, Egypt", category: "Retail & supply", achievement: "Established and manages daily operations, market share expansion, supplier and client relationships, product development, and financial performance.", bullets: ["Established daily operating structure.", "Expanded market share and business relationships.", "Managed supplier, client, and investor relationships."], focus: ["Retail", "Supply", "Delta", "Egypt"], current: true },
  { id: "al-shohail-foundation", years: "2021", role: "Executive Director", company: "Al Shohail Foundation", market: "Saudi Arabia", category: "Trading & contracts", achievement: "Led marketing strategies, international supplier relationships, exclusive European commercial contracts, supply-chain operations, process redesign, and consulting.", bullets: ["Built marketing strategies and supplier relationships.", "Managed international commercial contracts.", "Supported supply-chain operations and process redesign."], focus: ["Contracts", "Suppliers", "KSA", "Europe"] },
  { id: "abraj-wasat-delta", years: "2012 – 2015", role: "Partner & Business Developer", company: "Abraj Wasat Al-Delta", market: "Egypt", category: "Business development", achievement: "Developed business plans, supervised daily operations and teams, supported negotiations, and contributed to more than 10 successful projects.", bullets: ["Developed business growth plans.", "Supervised teams and daily operations.", "Supported negotiations with partners and stakeholders."], focus: ["Projects", "Development", "Operations", "Egypt"] },
  { id: "al-jazeera-pomegranate", years: "2004 – 2012", role: "Executive Director", company: "Al Jazeera Pomegranate Company", market: "Riyadh, Saudi Arabia", category: "Early regional leadership", achievement: "Opened markets, imported spare parts, expanded branches for fitness-equipment imports, and led field teams and projects.", bullets: ["Developed markets and business opportunities.", "Imported spare parts and expanded related branches.", "Led field teams and project execution."], focus: ["Saudi Arabia", "Import", "Branches", "Teams"] },
];

export const howIWork = {
  eyebrow: "How he operates",
  heading: "Strategy first. Operations always.",
  body: [
    "Abdulrahman's operating style connects business opportunity with the daily discipline required to make it work: suppliers, production, people, customers, contracts, reporting, and cash-flow awareness.",
    "He is strongest where strategy needs to become operations — building teams, opening channels, coordinating suppliers, improving systems, and creating a clearer business rhythm across markets.",
    "The website should show ventures, countries, sectors, and operating proof — not only a list of job titles.",
  ],
  model: [
    { id: "strategy", title: "Strategy", phrase: "Define the business opportunity." },
    { id: "operations", title: "Operations", phrase: "Build the operating system." },
    { id: "teams", title: "Teams", phrase: "Lead people across markets." },
    { id: "growth", title: "Growth", phrase: "Expand contracts and distribution." },
  ],
  badges: ["Manufacturing-led", "Partnership-driven", "Team-based", "Regionally focused"],
};

export const contactCTA = { eyebrow: "Partnerships", headline: "Build with Abdulrahman.", body: "For manufacturing partnerships, food production opportunities, private label discussions, distribution, import, trading, and regional business development across MENA.", location: "Egypt · Saudi Arabia · United Arab Emirates" };
export interface ContactLink { label: string; type: "email" | "cv" | "social" | "whatsapp"; href: string; icon: "mail" | "linkedin" | "download" | "github" | "instagram" | "behance" | "whatsapp"; isPrimary: boolean; isPlaceholder: boolean; external?: boolean; }
export const contactLinks: ContactLink[] = [
  { label: "Email", type: "email", href: "mailto:gm@nanoline.ae", icon: "mail", isPrimary: true, isPlaceholder: false },
  { label: "WhatsApp", type: "whatsapp", href: "https://wa.me/971545130344", icon: "whatsapp", isPrimary: true, isPlaceholder: false, external: true },
  { label: "LinkedIn", type: "social", href: "#contact", icon: "linkedin", isPrimary: false, isPlaceholder: true },
  { label: "CV / Profile", type: "cv", href: "#contact", icon: "download", isPrimary: false, isPlaceholder: true },
];
export const siteFooter = { copyright: "© Abdulrahman Zaid · MENA Industrial Entrepreneur & Operating Leader · Egypt · Saudi Arabia · UAE" };
export const placeholderSections: { id: string; label: string }[] = [];
