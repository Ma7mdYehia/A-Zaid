"use client";

import {
  Globe,
  Instagram,
  Linkedin,
  Youtube,
  Mail,
  MessageCircle,
  type LucideIcon,
} from "lucide-react";
import { motion } from "framer-motion";
import { useReveal } from "@/lib/motion";

interface ProjectLinkSet {
  website?: string;
  instagram?: string;
  linkedin?: string;
  youtube?: string;
  email?: string;
  phone?: string;
  whatsapp?: string;
}

interface WorkItem {
  id: string;
  title: string;
  subtitle: string;
  role: string;
  sector: string;
  location: string;
  year: string;
  priority: "hero" | "standard";
  logoText: string;
  line: string;
  description: string;
  tags: string[];
  links: ProjectLinkSet;
}

const workIntro =
  "A curated view of Abdulrahman Zaid's business footprint across manufacturing, food industries, trading, import, distribution, and regional operations.";

const workItems: WorkItem[] = [
  // 1 — Hero
  {
    id: "al-shehail-food-industries",
    title: "Al Shehail Food Industries",
    subtitle: "Food Manufacturing / Contract Manufacturing",
    role: "General Manager / Operating Leadership",
    sector: "Bakery & Food Production",
    location: "United Arab Emirates",
    year: "2023 – Present",
    priority: "hero",
    logoText: "ASF",
    line: "Food manufacturing operation positioned for B2B bakery production, private label discussions, and third-party manufacturing opportunities.",
    description:
      "The key current portfolio project — the manufacturing backbone behind food production, bakery operations, and partner-brand production discussions. Built around distribution readiness and commercial contract opportunities in contract manufacturing, private label, and B2B bakery production.",
    tags: ["Current Focus", "Food Manufacturing", "Private Label", "B2B Bakery", "UAE"],
    links: {},
  },
  // 2
  {
    id: "nano-line",
    title: "Nano Line Trading Company",
    subtitle: "Trading, Import & Technical Support",
    role: "Maintenance & Technical Support Manager",
    sector: "Trading & Equipment",
    location: "United Arab Emirates",
    year: "2022 – Present",
    priority: "standard",
    logoText: "NL",
    line: "Commercial, logistics, import, technical support, and product-development operations.",
    description:
      "A trading and equipment-focused operation covering commercial activity, logistics, import, technical support, marketing division support, industrial equipment, and product portfolio development.",
    tags: ["Trading", "Import", "Equipment", "UAE"],
    links: {},
  },
  // 3
  {
    id: "nano-line-industrial",
    title: "Nano Line Industrial",
    subtitle: "Bakery Production Lines & Industrial Solutions",
    role: "Industrial Solutions & Production Lines Development",
    sector: "Bakery Production Lines",
    location: "United Arab Emirates / Egypt",
    year: "Current Focus",
    priority: "standard",
    logoText: "NLI",
    line: "Designing and developing production-line concepts for bread, bakery, and food-manufacturing operations.",
    description:
      "An industrial solutions project focused on bakery and bread production lines, production-flow design, machinery coordination, factory layout thinking, and practical manufacturing solutions for bakeries and food producers.",
    tags: ["Production Lines", "Bakery Equipment", "Industrial Solutions", "Bread Manufacturing"],
    links: {},
  },
  // 4
  {
    id: "halsa-bake",
    title: "Halsa Bake",
    subtitle: "Healthy Bakery Brand",
    role: "General Manager / Business Expansion",
    sector: "Healthy Bread & Clean-Label Bakery",
    location: "United Arab Emirates",
    year: "2023 – Present",
    priority: "standard",
    logoText: "HB",
    line: "A healthy bakery brand focused on clean-label breads and market-facing food products.",
    description:
      "The consumer-facing healthy bakery direction within the food-industry portfolio — product communication, market presence, promotional activity, and distribution growth.",
    tags: ["Healthy Bakery", "Clean Label", "Bread Brand", "UAE"],
    links: {},
  },
  // 5
  {
    id: "silicon-star",
    title: "Silicon Star",
    subtitle: "Silicone & Resin Industrial Products",
    role: "General Manager",
    sector: "Industrial Manufacturing",
    location: "Riyadh, Saudi Arabia",
    year: "2024 – Present",
    priority: "standard",
    logoText: "SS",
    line: "Industrial manufacturing and specialized silicone/resin product operations.",
    description:
      "General management across production planning, manufacturing efficiency, specialized imports, financial and administrative operations, customer relationships, and team capability development.",
    tags: ["Manufacturing", "Silicone", "Resin", "KSA"],
    links: {},
  },
  // 6
  {
    id: "nano-food-machines",
    title: "Nano Food Machines",
    subtitle: "Food Machinery Sales & Administration",
    role: "Administrative Manager & Sales Director",
    sector: "Machinery & Sales",
    location: "Egypt",
    year: "2019 – Present",
    priority: "standard",
    logoText: "NFM",
    line: "Sales leadership, supplier relationships, customer-network expansion, and market research.",
    description:
      "A food-machinery business role focused on sales team leadership, annual growth targets, customer satisfaction, supplier relationships, market research, and sales operations.",
    tags: ["Machinery", "Sales", "Suppliers", "Egypt"],
    links: {},
  },
  // 7
  {
    id: "zaid-sanitary",
    title: "Zaid Sanitary Ware & Ceramics",
    subtitle: "Retail, Supply & Operations",
    role: "General Manager",
    sector: "Sanitary Ware & Ceramics",
    location: "Delta Region, Egypt",
    year: "2015 – Present",
    priority: "standard",
    logoText: "ZC",
    line: "Daily operations, supplier/client relationships, product development, and profitability follow-up.",
    description:
      "A regional retail and supply operation focused on daily operating structure, market share growth, supplier and client relationships, product development, and financial performance.",
    tags: ["Retail", "Supply", "Operations", "Egypt"],
    links: {},
  },
  // 8
  {
    id: "al-shohail-foundation",
    title: "Al Shohail Foundation",
    subtitle: "Commercial Contracts & Supplier Relations",
    role: "Executive Director",
    sector: "Trading & Contracts",
    location: "Saudi Arabia",
    year: "2021",
    priority: "standard",
    logoText: "ASH",
    line: "Supplier relationships, commercial contracts, supply-chain operations, and process redesign.",
    description:
      "A business leadership role across marketing strategies, international supplier relationships, exclusive European commercial contracts, supply-chain operations, process redesign, and consulting.",
    tags: ["Contracts", "Suppliers", "KSA", "Europe"],
    links: {},
  },
  // 9
  {
    id: "abraj-wasat-delta",
    title: "Abraj Wasat Al-Delta",
    subtitle: "Business Development & Projects",
    role: "Partner & Business Developer",
    sector: "Business Development",
    location: "Egypt",
    year: "2012 – 2015",
    priority: "standard",
    logoText: "AWD",
    line: "Business development plans, operations, negotiations, and project execution.",
    description:
      "A partner and business development role covering business plans, daily operations, team supervision, negotiation support, and contribution to more than 10 successful projects.",
    tags: ["Projects", "Development", "Operations", "Egypt"],
    links: {},
  },
  // 10
  {
    id: "al-jazeera-pomegranate",
    title: "Al Jazeera Pomegranate Company",
    subtitle: "Import, Branches & Field Teams",
    role: "Executive Director",
    sector: "Import & Branch Development",
    location: "Riyadh, Saudi Arabia",
    year: "2004 – 2012",
    priority: "standard",
    logoText: "AJP",
    line: "Market development, spare-parts import, branch expansion, and field-team leadership.",
    description:
      "Early regional leadership experience in Saudi Arabia, covering market opening, spare-parts import, branch expansion for fitness-equipment imports, and field-team/project leadership.",
    tags: ["Import", "Branches", "Teams", "KSA"],
    links: {},
  },
];

/* ── Social / contact icon row ─────────────────────────────────────────────── */
type LinkSlot = {
  key: keyof ProjectLinkSet;
  label: string;
  icon: LucideIcon;
  href: (value: string) => string;
};

const LINK_SLOTS: LinkSlot[] = [
  { key: "website",   label: "Website",          icon: Globe,          href: (v) => v },
  { key: "instagram", label: "Instagram",         icon: Instagram,      href: (v) => v },
  { key: "linkedin",  label: "LinkedIn",          icon: Linkedin,       href: (v) => v },
  { key: "youtube",   label: "YouTube",           icon: Youtube,        href: (v) => v },
  { key: "email",     label: "Email",             icon: Mail,           href: (v) => `mailto:${v}` },
  { key: "whatsapp",  label: "WhatsApp / Phone",  icon: MessageCircle,  href: (v) => v },
];

function SocialRow({ links, title }: { links: ProjectLinkSet; title: string }) {
  return (
    <div className="flex items-center gap-2 pt-1">
      {LINK_SLOTS.map((slot) => {
        const Icon = slot.icon;
        const raw =
          slot.key === "whatsapp"
            ? links.whatsapp ?? links.phone
            : links[slot.key];

        if (raw) {
          const href =
            slot.key === "whatsapp" && links.whatsapp
              ? links.whatsapp
              : slot.key === "whatsapp"
                ? `tel:${raw}`
                : slot.href(raw);
          const external = /^https?:\/\//.test(href);
          return (
            <a
              key={slot.key}
              href={href}
              aria-label={`${title} — ${slot.label}`}
              {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              className="flex h-8 w-8 items-center justify-center rounded-lg border border-[#DDD4C5] bg-[#F7F3EA] text-[#7C8794] transition-colors hover:border-[#2F7D5C]/40 hover:text-[#2F7D5C]"
            >
              <Icon className="h-4 w-4" aria-hidden />
            </a>
          );
        }

        return (
          <span
            key={slot.key}
            aria-disabled="true"
            aria-label={`${slot.label} — not available`}
            className="flex h-8 w-8 cursor-not-allowed items-center justify-center rounded-lg border border-[#DDD4C5]/60 bg-[#F7F3EA] text-[#172033]/18"
          >
            <Icon className="h-4 w-4" aria-hidden />
          </span>
        );
      })}
    </div>
  );
}

/* Banner / logo placeholder */
function BannerPlaceholder({
  logoText,
  hero = false,
}: {
  logoText: string;
  hero?: boolean;
}) {
  return (
    <div
      aria-hidden
      className={[
        "relative flex items-center justify-center overflow-hidden rounded-xl border border-[#DDD4C5]",
        "bg-gradient-to-br from-[#EFE7DA] via-[#F7F3EA] to-[#E8DFCF]",
        hero ? "h-40 sm:h-full sm:min-h-[220px]" : "h-28",
      ].join(" ")}
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(47,125,92,0.08),transparent_60%)]" />
      <div className="flex flex-col items-center gap-2">
        <span
          className={[
            "flex items-center justify-center rounded-xl border border-[#2F7D5C]/25 bg-[#2F7D5C]/[0.07] font-bold tracking-widest text-[#2F7D5C]",
            hero ? "h-16 w-16 text-lg" : "h-12 w-12 text-sm",
          ].join(" ")}
        >
          {logoText}
        </span>
        <span className="text-[10px] uppercase tracking-[0.2em] text-[#172033]/25">
          Logo / Banner
        </span>
      </div>
    </div>
  );
}

function MetaRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex flex-col gap-0.5">
      <span className="text-[10px] uppercase tracking-[0.16em] text-[#7C8794]">
        {label}
      </span>
      <span className="text-[13px] text-[#172033]">{value}</span>
    </div>
  );
}

export default function SelectedWorkSection() {
  const reveal = useReveal();
  const [hero, ...rest] = workItems;

  return (
    <section
      id="work"
      aria-label="Business portfolio"
      className="px-6 lg:px-24 py-24 border-t border-[#DDD4C5]"
    >
      <div className="max-w-6xl mx-auto flex flex-col gap-12">

        {/* Header */}
        <div className="flex flex-col gap-4 max-w-3xl">
          <motion.p
            {...reveal(0)}
            className="text-xs text-[#2F7D5C] tracking-[0.22em] uppercase font-medium"
          >
            Business portfolio
          </motion.p>
          <motion.h2
            {...reveal(0.06)}
            className="text-3xl sm:text-4xl font-semibold text-[#172033] leading-tight tracking-tight"
          >
            Ventures, markets, and operating roles.
          </motion.h2>
          <motion.p
            {...reveal(0.12)}
            className="text-base sm:text-lg text-[#5F6B7A] leading-relaxed"
          >
            {workIntro}
          </motion.p>
        </div>

        {/* Hero project */}
        <motion.article
          {...reveal(0.16)}
          className="group relative overflow-hidden rounded-3xl border border-[#2F7D5C]/20 bg-white"
        >
          <div className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[#2F7D5C]/[0.05] to-transparent" />
          <div className="relative grid grid-cols-1 sm:grid-cols-[0.85fr_1.15fr] gap-6 p-6 sm:p-8">
            <BannerPlaceholder logoText={hero.logoText} hero />

            <div className="flex flex-col gap-5">
              <div className="flex items-start justify-between gap-4">
                <div className="flex flex-col gap-1">
                  <p className="text-[11px] uppercase tracking-[0.18em] text-[#2F7D5C]/90 font-medium">
                    {hero.year}
                  </p>
                  <h3 className="text-2xl font-semibold leading-tight text-[#172033]">
                    {hero.title}
                  </h3>
                  <p className="text-sm text-[#5F6B7A]">{hero.subtitle}</p>
                </div>
                <span className="flex-none rounded-full border border-[#B88746]/40 bg-[#B88746]/[0.09] px-3 py-1 text-[10px] font-semibold uppercase tracking-wide text-[#B88746]">
                  Current Focus
                </span>
              </div>

              <div className="grid grid-cols-2 gap-x-6 gap-y-4 border-y border-[#DDD4C5] py-4">
                <MetaRow label="Role"     value={hero.role} />
                <MetaRow label="Sector"   value={hero.sector} />
                <MetaRow label="Location" value={hero.location} />
                <MetaRow label="Year"     value={hero.year} />
              </div>

              <p className="text-sm font-medium text-[#172033] leading-relaxed">
                {hero.line}
              </p>
              <p className="text-sm text-[#5F6B7A] leading-relaxed">
                {hero.description}
              </p>

              <div className="flex flex-wrap gap-1.5">
                {hero.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-[#DDD4C5] bg-[#F7F3EA] px-2.5 py-1 text-[11px] text-[#7C8794]"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <SocialRow links={hero.links} title={hero.title} />
            </div>
          </div>
        </motion.article>

        {/* Standard project cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
          {rest.map((item, i) => (
            <motion.article
              key={item.id}
              {...reveal(0.06 + i * 0.05)}
              className="group flex flex-col gap-4 rounded-2xl border border-[#DDD4C5] bg-white p-5 transition-colors hover:border-[#2F7D5C]/30 hover:shadow-[0_2px_16px_rgba(47,125,92,0.08)]"
            >
              <BannerPlaceholder logoText={item.logoText} />

              <div className="flex flex-col gap-1">
                <p className="text-[11px] uppercase tracking-[0.18em] text-[#2F7D5C]/90 font-medium">
                  {item.year}
                </p>
                <h3 className="text-lg font-semibold leading-tight text-[#172033]">
                  {item.title}
                </h3>
                <p className="text-xs text-[#5F6B7A]">{item.subtitle}</p>
              </div>

              <div className="h-px bg-[#DDD4C5]" />

              <div className="flex flex-col gap-1.5">
                <p className="text-[13px] text-[#172033]">{item.role}</p>
                <p className="text-xs text-[#7C8794]">
                  {item.sector} · {item.location}
                </p>
              </div>

              <p className="text-[13px] text-[#5F6B7A] leading-relaxed">
                {item.description}
              </p>

              <div className="mt-auto flex flex-wrap gap-1.5 pt-1">
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-[#DDD4C5] bg-[#F7F3EA] px-2.5 py-1 text-[11px] text-[#7C8794]"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <SocialRow links={item.links} title={item.title} />
            </motion.article>
          ))}
        </div>

      </div>
    </section>
  );
}
