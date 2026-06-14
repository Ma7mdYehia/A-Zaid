export const hero = {
  name: "Abdulrahman Zaid",
  title: "MENA Industrial Entrepreneur & Operating Leader",
  location: "Egypt · Saudi Arabia · United Arab Emirates",
  valueStatement: "20+ years building, operating, and developing manufacturing, food industries, trading, import, distribution, and commercial ventures across Egypt, Saudi Arabia, and the UAE.",
  credibilityLine: "Egypt · KSA · UAE · Manufacturing · Food Industries · Import · Distribution · Operations",
  statusChip: "Regional business portfolio",
  profileSummary: "Manufacturing · Trade · Food Industries · Operations",
  ctas: {
    primary: { label: "View portfolio", href: "#work" },
    secondary: { label: "Start a conversation", href: "#contact" },
  },
};

export interface TextSegment { text: string; accent?: boolean; }
export interface ResultCard { value: string; label: string; }

export const whoIAm = {
  label: "Who he is",
  headingLines: ["Build", "Operate", "Scale"] as string[],
  accentLineIndex: 1,
  introParagraphs: [
    [{ text: "Abdulrahman Zaid is an Egyptian business operator and entrepreneur with more than " }, { text: "20 years of regional experience", accent: true }, { text: " across Egypt, Saudi Arabia, and the United Arab Emirates." }],
    [{ text: "His work sits at the intersection of " }, { text: "manufacturing, food production, import, trading, distribution, and commercial operations", accent: true }, { text: " — turning business opportunities into working companies, teams, and market presence." }],
    [{ text: "This profile presents him as a " }, { text: "MENA industrial entrepreneur and operating leader", accent: true }, { text: " with a practical portfolio of ventures, partnerships, and leadership roles across multiple markets." }],
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

export const about = {
  heading: "An operator who builds businesses across markets.",
  body: "Abdulrahman Zaid connects strategy with daily execution: production planning, supplier networks, commercial contracts, sales teams, logistics, and market expansion.",
  cta: { label: "View the journey", href: "#experience" },
  credential: {
    role: "Industrial Entrepreneur & Operating Leader",
    markets: "Egypt · Saudi Arabia · UAE",
    focus: ["Manufacturing", "Food Industries", "Trading", "Operations"],
    languages: [{ lang: "Arabic", level: "Native" }, { lang: "English", level: "Professional" }],
  },
};

export const capabilities = [
  { id: "manufacturing", icon: "growth", title: "Manufacturing & Operations", body: "Build production plans, improve efficiency, monitor quality, and coordinate daily operations across industrial teams.", tags: ["Production", "Quality", "Efficiency"] },
  { id: "trade", icon: "ecommerce", title: "Trade, Import & Distribution", body: "Develop supplier relationships, import specialized products, expand distribution networks, and build commercial contracts.", tags: ["Import", "Suppliers", "Contracts"] },
  { id: "leadership", icon: "ai", title: "Regional Team Leadership", body: "Lead and coordinate multi-country teams across Egypt, Saudi Arabia, and the UAE with a hands-on operating mindset.", tags: ["Teams", "Execution", "Growth"] },
];

export interface WhatIDoCapability { title: string; body: string; }
export interface WhatIDoMode { id: string; label: string; cardTitle: string; cardDescription: string; capabilities: WhatIDoCapability[]; tools: string[]; }

export const whatIDo = {
  label: "What he builds",
  intro: [{ text: "A practical operating model across " }, { text: "manufacturing, food production, import, distribution, and regional business development", accent: true }, { text: " — built around execution, supplier networks, team leadership, and commercial growth." }] as TextSegment[],
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
export const operatingStackMeta = { eyebrow: "Operating stack", heading: "The stack behind the business model.", intro: "A practical mix of production operations, commercial tools, supplier networks, reporting, ERP/CRM, and team coordination.", note: "An operating stack across people, suppliers, production, customers, and reporting.", lanes: [{ id: "manufacturing" as ToolStackLane, label: "Manufacturing & Operations" }, { id: "trade" as ToolStackLane, label: "Trade & Distribution" }, { id: "shared" as ToolStackLane, label: "Management Layer" }] };
export const operatingStackStrip = { eyebrow: "Operating stack", title: "Tools that keep the business moving", line: "A compact stack across production, import, CRM, ERP, reporting, team coordination, and commercial execution." };
export const stackCategoryShortLabels: Record<string, string> = { "production-operations": "Production", "supplier-import": "Import", "commercial-sales": "Sales", "reporting-systems": "Systems", "team-coordination": "Teams" };
export const operatingStackCategories: ToolStackCategory[] = [
  { id: "production-operations", title: "Production & Operations", lane: "manufacturing", laneLabel: "Manufacturing & Operations", purpose: "Production planning, quality follow-up, manufacturing efficiency, and operational discipline.", tools: ["Production Planning", "Quality Control", "Operational KPIs", "Cost Control"] },
  { id: "supplier-import", title: "Supplier & Import Network", lane: "trade", laneLabel: "Trade & Distribution", purpose: "Supplier relations, import operations, product sourcing, and market-ready materials.", tools: ["International Suppliers", "Import Operations", "Supplier Agreements", "Product Sourcing"] },
  { id: "commercial-sales", title: "Commercial & Sales Operations", lane: "trade", laneLabel: "Trade & Distribution", purpose: "Client relationships, contracts, distribution channels, and market penetration.", tools: ["CRM", "Commercial Contracts", "Distribution Networks", "Customer Base"] },
  { id: "reporting-systems", title: "Reporting & Business Systems", lane: "shared", laneLabel: "Management Layer", purpose: "Financial follow-up, management reporting, ERP tools, and business visibility.", tools: ["ERP", "Financial Statements", "Dashboards", "Microsoft Office"] },
  { id: "team-coordination", title: "Team Coordination", lane: "shared", laneLabel: "Management Layer", purpose: "Team leadership, task follow-up, department coordination, and execution rhythm.", tools: ["ClickUp", "Trello", "Asana", "Team Meetings"] },
];
export const tools = [
  { name: "ERP", use: "Business operations and reporting" },
  { name: "CRM", use: "Customer and sales follow-up" },
  { name: "ClickUp", use: "Task flow and team coordination" },
  { name: "Trello", use: "Project and workflow tracking" },
  { name: "Asana", use: "Team planning and execution" },
  { name: "Microsoft Office", use: "Reporting and business documents" },
  { name: "Google Analytics", use: "Digital visibility and traffic signals" },
];

export interface ProofVoice { sector: string; status: string; text: string; project: string; initials: string; }
export const proofVoices = { label: "Proof", heading: "Business proof and portfolio signals.", subtitle: "A compact view of sectors, markets, and business activities behind Abdulrahman's regional operating profile.", voices: [
  { sector: "Food Manufacturing", status: "Profile evidence", text: "Production operations, market expansion, quality, distribution, and commercial contracts.", project: "Halsa Food Industries / Al Shehail Food Industries", initials: "HF" },
  { sector: "Industrial Manufacturing", status: "Profile evidence", text: "Manufacturing efficiency, specialized silicone and resin import, and operational leadership.", project: "Silicon Star", initials: "SS" },
  { sector: "Trading & Equipment", status: "Profile evidence", text: "Commercial, logistics, import, marketing, and technical support operations.", project: "Nano Line / Nano Food Machines", initials: "NL" },
] as ProofVoice[], projectOverviewLabel: "Portfolio overview", projectOverview: ["Food Industries", "Industrial Manufacturing", "Import", "Distribution", "Trading", "Retail", "Commercial Contracts", "Regional Operations"] };

export interface JourneyItem { id: string; years: string; role: string; company: string; market?: string; achievement: string; category?: string; bullets?: string[]; focus?: string[]; current?: boolean; isGroup?: boolean; underGroup?: string; }
export interface LearningCard { title: string; detail: string; description: string; icon: "university" | "apple" | "hours"; size?: "main" | "compact"; }
export const journeyEyebrow = "Journey";
export const journeyHeading = "A regional business-building journey.";
export const journeyIntro = "From Saudi business development in 2004 to active operating roles across Egypt, Saudi Arabia, and the UAE today.";
export const journeyNote = "Current roles may run in parallel across several companies and markets. Wording should remain tied to approved CV/profile facts.";
export const learningCards: LearningCard[] = [
  { title: "MBA", detail: "Business Administration · 2015", description: "Executive business foundation covering management, leadership, planning, operations, and company development.", icon: "university", size: "main" },
  { title: "Bachelor of Computer Science & Information Systems", detail: "Computer Science & Information Systems · 2004", description: "Technical academic foundation supporting systems thinking, digital tools, data handling, and structured business operations.", icon: "university", size: "main" },
  { title: "Strategic Planning Course — Oxford", detail: "Oxford · 2022", description: "Strategic planning training supporting business direction, market analysis, decision-making, and long-term operational planning.", icon: "university", size: "main" },
  { title: "Team Self-Development Course", detail: "Team development and workplace improvement.", description: "Team development and workplace improvement.", icon: "hours", size: "compact" },
  { title: "Entrepreneurship Course", detail: "Business creation and entrepreneurial thinking.", description: "Business creation, opportunity development, and entrepreneurial thinking.", icon: "hours", size: "compact" },
  { title: "Executive Director Course", detail: "Executive leadership and operational decision-making.", description: "Executive leadership, management responsibility, and operational decision-making.", icon: "hours", size: "compact" },
];
export const journeyItems: JourneyItem[] = [
  { id: "silicon-star", years: "2024 – Present", role: "General Manager", company: "Ibrahim Shohail Al-Qaood — Silicon Star Brand", market: "Riyadh, Saudi Arabia", category: "Industrial manufacturing", achievement: "Leads production planning, manufacturing efficiency, administrative and financial operations, specialized silicone and resin imports, client relationships, and team capability development.", bullets: ["Develops production plans and improves manufacturing efficiency.", "Supervises administrative and financial operations.", "Coordinates import of specialized silicone and resin products from leading factories.", "Builds client relationships and team capabilities."], focus: ["Silicone", "Resin", "Manufacturing", "KSA"], current: true },
  { id: "al-shehail-food-industries", years: "2023 – Present", role: "General Manager / Operating Leadership", company: "Al Shehail Food Industries", market: "United Arab Emirates", category: "Food manufacturing · Current focus", achievement: "Leads food manufacturing operations, contract manufacturing readiness, bakery production coordination, quality follow-up, distribution readiness, and commercial production opportunities for third-party clients and partner brands.", bullets: ["Leads food manufacturing and bakery production operations.", "Positions the company for B2B production and private label discussions.", "Supports production planning, quality follow-up, and operational discipline.", "Develops commercial opportunities with clients, partners, and distribution channels."], focus: ["Food Manufacturing", "Contract Manufacturing", "Private Label", "UAE"], current: true },
  { id: "halsa-bake", years: "2023 – Present", role: "Healthy Bakery Brand Development", company: "Halsa Bake", market: "United Arab Emirates", category: "Healthy bakery brand", achievement: "Supports the development of Halsa Bake as a healthy bakery / clean-label bread brand with product communication, market positioning, promotional activity, and distribution growth.", bullets: ["Develops brand positioning for healthy bread and clean-label bakery products.", "Supports product communication and market-facing promotional activity.", "Coordinates brand presence with production, distribution, and commercial goals.", "Helps grow awareness and customer understanding of the healthy bakery direction."], focus: ["Healthy Bakery", "Clean Label", "Bread Brand", "UAE"], current: true },
  { id: "nano-line", years: "2022 – Present", role: "Maintenance & Technical Support Manager", company: "Nano Line Trading Company", market: "United Arab Emirates", category: "Trading & equipment", achievement: "Supports commercial, logistics, import, marketing, technical support, industrial equipment, cost reduction, and product-development operations.", bullets: ["Supports commercial and logistics operations.", "Works across import, marketing, and industrial equipment activity.", "Develops operational systems to improve cost and profitability control."], focus: ["Trading", "Import", "Equipment", "UAE"], current: true },
  { id: "nano-line-industrial", years: "Current Focus", role: "Industrial Solutions & Production Lines Development", company: "Nano Line Industrial", market: "UAE / Egypt", category: "Bakery production lines", achievement: "Develops industrial solution concepts for bread and bakery production lines, including production-flow thinking, machinery coordination, factory layout planning, and practical food-manufacturing systems.", bullets: ["Develops production-line concepts for bread and bakery operations.", "Supports machinery selection, line-flow thinking, and industrial layout planning.", "Connects bakery equipment knowledge with practical production needs.", "Builds early positioning for food factories, bakeries, and production-line clients."], focus: ["Production Lines", "Bakery Equipment", "Industrial Solutions", "Manufacturing"], current: true },
  { id: "nano-food-machines", years: "2019 – Present", role: "Administrative Manager & Sales Director", company: "Nano Food Machines", market: "Egypt", category: "Machinery & sales", achievement: "Leads sales teams, annual growth targets, customer-network expansion, supplier relationships, market research, and customer satisfaction operations.", bullets: ["Leads sales team activity and annual growth targets.", "Expands customer network and sales operations.", "Maintains supplier relationships and customer satisfaction."], focus: ["Sales", "Machinery", "Suppliers", "Egypt"], current: true },
  { id: "zaid-sanitary", years: "2015 – Present", role: "General Manager", company: "Zaid for Sanitary Ware and Ceramics", market: "Delta Region, Egypt", category: "Retail & supply", achievement: "Established and manages daily operations, market share expansion, supplier and client relationships, product development, and financial performance.", bullets: ["Established daily operating structure.", "Expanded market share and business relationships.", "Managed supplier, client, and investor relationships."], focus: ["Retail", "Supply", "Delta", "Egypt"], current: true },
  { id: "al-shohail-foundation", years: "2021", role: "Executive Director", company: "Al Shohail Foundation", market: "Saudi Arabia", category: "Trading & contracts", achievement: "Led marketing strategies, international supplier relationships, exclusive European commercial contracts, supply-chain operations, process redesign, and consulting.", bullets: ["Built marketing strategies and supplier relationships.", "Managed international commercial contracts.", "Supported supply-chain operations and process redesign."], focus: ["Contracts", "Suppliers", "KSA", "Europe"] },
  { id: "abraj-wasat-delta", years: "2012 – 2015", role: "Partner & Business Developer", company: "Abraj Wasat Al-Delta", market: "Egypt", category: "Business development", achievement: "Developed business plans, supervised daily operations and teams, supported negotiations, and contributed to more than 10 successful projects.", bullets: ["Developed business growth plans.", "Supervised teams and daily operations.", "Supported negotiations with partners and stakeholders."], focus: ["Projects", "Development", "Operations", "Egypt"] },
  { id: "al-jazeera-pomegranate", years: "2004 – 2012", role: "Executive Director", company: "Al Jazeera Pomegranate Company", market: "Riyadh, Saudi Arabia", category: "Early regional leadership", achievement: "Opened markets, imported spare parts, expanded branches for fitness-equipment imports, and led field teams and projects.", bullets: ["Developed markets and business opportunities.", "Imported spare parts and expanded related branches.", "Led field teams and project execution."], focus: ["Saudi Arabia", "Import", "Branches", "Teams"] },
];

export const howIWork = { eyebrow: "How he operates", heading: "Strategy first. Operations always.", body: ["A practical framework for turning business opportunities into working companies, teams, contracts, and operating systems.", "Abdulrahman's operating style connects business opportunity with the daily discipline required to make it work: suppliers, production, people, customers, contracts, reporting, and cash-flow awareness.", "He is strongest where strategy needs to become operations — building teams, opening channels, coordinating suppliers, improving systems, and creating a clearer business rhythm across markets."], model: [{ id: "strategy", title: "Strategy", phrase: "Define the opportunity, market direction, and business priorities." }, { id: "operations", title: "Operations", phrase: "Build the systems, processes, production flow, and follow-up rhythm." }, { id: "teams", title: "Teams", phrase: "Coordinate people, responsibilities, suppliers, and execution across markets." }, { id: "growth", title: "Growth", phrase: "Expand contracts, distribution, customer networks, and long-term business value." }], badges: ["Manufacturing-led", "Partnership-driven", "Team-based", "Regionally focused"] };
export const contactCTA = { eyebrow: "Partnerships", headline: "Build with Abdulrahman.", body: "For manufacturing partnerships, food production opportunities, private label discussions, distribution, import, trading, and regional business development across MENA.", location: "Egypt · Saudi Arabia · United Arab Emirates" };
export interface ContactLink { label: string; type: "email" | "cv" | "social" | "whatsapp"; href: string; icon: "mail" | "linkedin" | "download" | "github" | "instagram" | "behance" | "whatsapp"; isPrimary: boolean; isPlaceholder: boolean; external?: boolean; }
export const contactLinks: ContactLink[] = [{ label: "Email", type: "email", href: "mailto:gm@nanoline.ae", icon: "mail", isPrimary: true, isPlaceholder: false }, { label: "WhatsApp", type: "whatsapp", href: "https://wa.me/971545130344", icon: "whatsapp", isPrimary: true, isPlaceholder: false, external: true }, { label: "LinkedIn", type: "social", href: "#contact", icon: "linkedin", isPrimary: true, isPlaceholder: true }, { label: "CV / Profile", type: "cv", href: "#contact", icon: "download", isPrimary: false, isPlaceholder: true }];
export const siteFooter = { copyright: "© Abdulrahman Zaid · MENA Industrial Entrepreneur & Operating Leader · Egypt · Saudi Arabia · UAE" };
export const placeholderSections: { id: string; label: string }[] = [];

/* -------------------------------------------------------------------------- */
/*  Component-embedded content (moved here so it can be localized)             */
/* -------------------------------------------------------------------------- */

export interface CapabilityCard { id: string; monogram: string; title: string; description: string; tags: string[]; }
export const whatIDoHeading = "A practical operating model across markets.";
export const whatIDoCards: CapabilityCard[] = [
  { id: "manufacturing", monogram: "MO", title: "Manufacturing & Operations", description: "Production planning, operational efficiency, quality follow-up, cost control, and daily factory coordination.", tags: ["Production", "Quality", "Efficiency"] },
  { id: "food", monogram: "FP", title: "Food Production & Private Label", description: "Food manufacturing operations positioned for B2B production, private label discussions, and third-party manufacturing opportunities.", tags: ["Food Industry", "Private Label", "B2B"] },
  { id: "trade", monogram: "TD", title: "Trade, Import & Distribution", description: "Supplier relationships, import operations, commercial contracts, distribution network development, and customer-base expansion.", tags: ["Suppliers", "Import", "Distribution"] },
  { id: "regional", monogram: "RB", title: "Regional Business Development", description: "Turning business opportunities into working companies across Egypt, Saudi Arabia, and the UAE through teams, partnerships, and execution.", tags: ["Egypt", "KSA", "UAE"] },
];

export interface WorkItem { id: string; title: string; subtitle: string; role: string; sector: string; location: string; year: string; priority: "hero" | "standard"; logoText: string; line: string; description: string; tags: string[]; }
export const work = {
  eyebrow: "Business portfolio",
  heading: "Ventures, markets, and operating roles.",
  intro: "A curated view of Abdulrahman Zaid's business footprint across manufacturing, food industries, trading, import, distribution, and regional operations.",
  currentFocus: "Current Focus",
  logoBanner: "Logo / Banner",
  meta: { role: "Role", sector: "Sector", location: "Location", year: "Year" },
  items: [
    { id: "al-shehail-food-industries", title: "Al Shehail Food Industries", subtitle: "Food Manufacturing / Contract Manufacturing", role: "General Manager / Operating Leadership", sector: "Bakery & Food Production", location: "United Arab Emirates", year: "2023 – Present", priority: "hero", logoText: "ASF", line: "Food manufacturing operation positioned for B2B bakery production, private label discussions, and third-party manufacturing opportunities.", description: "The key current portfolio project — the manufacturing backbone behind food production, bakery operations, and partner-brand production discussions. Built around distribution readiness and commercial contract opportunities in contract manufacturing, private label, and B2B bakery production.", tags: ["Current Focus", "Food Manufacturing", "Private Label", "B2B Bakery", "UAE"] },
    { id: "nano-line", title: "Nano Line Trading Company", subtitle: "Trading, Import & Technical Support", role: "Maintenance & Technical Support Manager", sector: "Trading & Equipment", location: "United Arab Emirates", year: "2022 – Present", priority: "standard", logoText: "NL", line: "Commercial, logistics, import, technical support, and product-development operations.", description: "A trading and equipment-focused operation covering commercial activity, logistics, import, technical support, marketing division support, industrial equipment, and product portfolio development.", tags: ["Trading", "Import", "Equipment", "UAE"] },
    { id: "nano-line-industrial", title: "Nano Line Industrial", subtitle: "Bakery Production Lines & Industrial Solutions", role: "Industrial Solutions & Production Lines Development", sector: "Bakery Production Lines", location: "United Arab Emirates / Egypt", year: "Current Focus", priority: "standard", logoText: "NLI", line: "Designing and developing production-line concepts for bread, bakery, and food-manufacturing operations.", description: "An industrial solutions project focused on bakery and bread production lines, production-flow design, machinery coordination, factory layout thinking, and practical manufacturing solutions for bakeries and food producers.", tags: ["Production Lines", "Bakery Equipment", "Industrial Solutions", "Bread Manufacturing"] },
    { id: "halsa-bake", title: "Halsa Bake", subtitle: "Healthy Bakery Brand", role: "General Manager / Business Expansion", sector: "Healthy Bread & Clean-Label Bakery", location: "United Arab Emirates", year: "2023 – Present", priority: "standard", logoText: "HB", line: "A healthy bakery brand focused on clean-label breads and market-facing food products.", description: "The consumer-facing healthy bakery direction within the food-industry portfolio — product communication, market presence, promotional activity, and distribution growth.", tags: ["Healthy Bakery", "Clean Label", "Bread Brand", "UAE"] },
    { id: "silicon-star", title: "Silicon Star", subtitle: "Silicone & Resin Industrial Products", role: "General Manager", sector: "Industrial Manufacturing", location: "Riyadh, Saudi Arabia", year: "2024 – Present", priority: "standard", logoText: "SS", line: "Industrial manufacturing and specialized silicone/resin product operations.", description: "General management across production planning, manufacturing efficiency, specialized imports, financial and administrative operations, customer relationships, and team capability development.", tags: ["Manufacturing", "Silicone", "Resin", "KSA"] },
    { id: "nano-food-machines", title: "Nano Food Machines", subtitle: "Food Machinery Sales & Administration", role: "Administrative Manager & Sales Director", sector: "Machinery & Sales", location: "Egypt", year: "2019 – Present", priority: "standard", logoText: "NFM", line: "Sales leadership, supplier relationships, customer-network expansion, and market research.", description: "A food-machinery business role focused on sales team leadership, annual growth targets, customer satisfaction, supplier relationships, market research, and sales operations.", tags: ["Machinery", "Sales", "Suppliers", "Egypt"] },
    { id: "zaid-sanitary", title: "Zaid Sanitary Ware & Ceramics", subtitle: "Retail, Supply & Operations", role: "General Manager", sector: "Sanitary Ware & Ceramics", location: "Delta Region, Egypt", year: "2015 – Present", priority: "standard", logoText: "ZC", line: "Daily operations, supplier/client relationships, product development, and profitability follow-up.", description: "A regional retail and supply operation focused on daily operating structure, market share growth, supplier and client relationships, product development, and financial performance.", tags: ["Retail", "Supply", "Operations", "Egypt"] },
    { id: "al-shohail-foundation", title: "Al Shohail Foundation", subtitle: "Commercial Contracts & Supplier Relations", role: "Executive Director", sector: "Trading & Contracts", location: "Saudi Arabia", year: "2021", priority: "standard", logoText: "ASH", line: "Supplier relationships, commercial contracts, supply-chain operations, and process redesign.", description: "A business leadership role across marketing strategies, international supplier relationships, exclusive European commercial contracts, supply-chain operations, process redesign, and consulting.", tags: ["Contracts", "Suppliers", "KSA", "Europe"] },
    { id: "abraj-wasat-delta", title: "Abraj Wasat Al-Delta", subtitle: "Business Development & Projects", role: "Partner & Business Developer", sector: "Business Development", location: "Egypt", year: "2012 – 2015", priority: "standard", logoText: "AWD", line: "Business development plans, operations, negotiations, and project execution.", description: "A partner and business development role covering business plans, daily operations, team supervision, negotiation support, and contribution to more than 10 successful projects.", tags: ["Projects", "Development", "Operations", "Egypt"] },
    { id: "al-jazeera-pomegranate", title: "Al Jazeera Pomegranate Company", subtitle: "Import, Branches & Field Teams", role: "Executive Director", sector: "Import & Branch Development", location: "Riyadh, Saudi Arabia", year: "2004 – 2012", priority: "standard", logoText: "AJP", line: "Market development, spare-parts import, branch expansion, and field-team leadership.", description: "Early regional leadership experience in Saudi Arabia, covering market opening, spare-parts import, branch expansion for fitness-equipment imports, and field-team/project leadership.", tags: ["Import", "Branches", "Teams", "KSA"] },
  ] as WorkItem[],
};

export const heroPills = ["Manufacturing", "Food Production", "Private Label", "Import & Distribution", "Regional Growth"];
export const heroStats = [
  { value: "20+", label: "Years experience" },
  { value: "3", label: "Core markets" },
  { value: "10+", label: "Ventures & roles" },
];
export const heroHeadingLines = ["Build operating", "companies", "across markets."];

export interface NavItem { id: string; label: string; href: string; }
export const ui = {
  name: "Abdulrahman Zaid",
  nav: [
    { id: "home", label: "Home", href: "#home" },
    { id: "about", label: "Profile", href: "#about" },
    { id: "capabilities", label: "What he builds", href: "#capabilities" },
    { id: "tools", label: "Operating stack", href: "#tools" },
    { id: "work", label: "Business portfolio", href: "#work" },
    { id: "experience", label: "Journey", href: "#experience" },
    { id: "how", label: "How he operates", href: "#how" },
    { id: "contact", label: "Contact", href: "#contact" },
  ] as NavItem[],
  currentChip: "Current",
  operatingFocus: "Operating focus",
  principles: "Principles",
  comingSoon: "coming soon",
  notAvailable: "not available",
  scroll: "Scroll",
  scrollToProfile: "Scroll to profile",
  languageLabel: "Language",
};

/* English aggregate bundle */
export const en = {
  hero, whoIAm, about, whatIDo,
  whatIDoHeading: whatIDoHeading as string, whatIDoCards,
  operatingStackMeta, operatingStackStrip, stackCategoryShortLabels, operatingStackCategories, tools,
  proofVoices,
  journeyEyebrow: journeyEyebrow as string,
  journeyHeading: journeyHeading as string,
  journeyIntro: journeyIntro as string,
  journeyNote: journeyNote as string,
  learningCards, journeyItems,
  howIWork, contactCTA, contactLinks, siteFooter,
  work, heroPills, heroStats, heroHeadingLines, ui,
};

export type SiteContent = typeof en;
