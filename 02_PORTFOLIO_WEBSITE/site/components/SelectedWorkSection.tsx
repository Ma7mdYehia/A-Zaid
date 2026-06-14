"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useReveal, filterGridTransition } from "@/lib/motion";
import { useMouseGlow } from "@/lib/useMouseGlow";
import { useIsClient } from "@/lib/useIsClient";

type WorkCategory = "all" | "featured" | "manufacturing" | "food" | "trade" | "egypt" | "ksa" | "uae";

interface WorkItem {
  id: string;
  title: string;
  category: Exclude<WorkCategory, "all" | "featured">;
  featured: boolean;
  business: string;
  location: string;
  year: string;
  line: string;
  tags: string[];
}

const workFilters: { id: WorkCategory; label: string }[] = [
  { id: "all", label: "All" },
  { id: "featured", label: "Featured" },
  { id: "manufacturing", label: "Manufacturing" },
  { id: "food", label: "Food Industries" },
  { id: "trade", label: "Trade & Import" },
  { id: "egypt", label: "Egypt" },
  { id: "ksa", label: "Saudi Arabia" },
  { id: "uae", label: "UAE" },
];

const workIntro =
  "A curated view of Abdulrahman Zaid's business footprint across manufacturing, food industries, trading, import, distribution, and regional operations.";

const workItems: WorkItem[] = [
  {
    id: "silicon-star",
    title: "Silicon Star",
    category: "manufacturing",
    featured: true,
    business: "Silicone & Resin Industrial Products",
    location: "Riyadh, Saudi Arabia",
    year: "2024 – Present",
    line: "General management across production planning, manufacturing efficiency, specialized imports, operations, and client relationships.",
    tags: ["Manufacturing", "Silicone", "Resin", "KSA"],
  },
  {
    id: "halsa-food",
    title: "Halsa Food Industries",
    category: "food",
    featured: true,
    business: "Food Manufacturing",
    location: "United Arab Emirates",
    year: "2023 – Present",
    line: "Production operations, market expansion, quality standards, distribution network development, and commercial contracts.",
    tags: ["Food Industries", "Production", "Distribution", "UAE"],
  },
  {
    id: "al-shehail-contract-manufacturing",
    title: "Al Shehail Food Industries",
    category: "food",
    featured: true,
    business: "Contract Manufacturing / Private Label Readiness",
    location: "United Arab Emirates",
    year: "Current Focus",
    line: "Positioning the food manufacturing operation for third-party production, private label, and B2B manufacturing partnerships.",
    tags: ["Private Label", "B2B", "Food Production", "UAE"],
  },
  {
    id: "nano-line",
    title: "Nano Line Trading Company",
    category: "trade",
    featured: true,
    business: "Trading, Import & Technical Support",
    location: "United Arab Emirates",
    year: "2022 – Present",
    line: "Commercial, logistics, import, marketing, technical support, equipment manufacturing, and product development operations.",
    tags: ["Trading", "Import", "Equipment", "UAE"],
  },
  {
    id: "nano-food-machines",
    title: "Nano Food Machines",
    category: "egypt",
    featured: false,
    business: "Food Machinery Sales & Administration",
    location: "Egypt",
    year: "2019 – Present",
    line: "Sales leadership, annual growth targets, customer-network expansion, supplier relationships, and market research.",
    tags: ["Sales", "Machinery", "Suppliers", "Egypt"],
  },
  {
    id: "zaid-sanitary",
    title: "Zaid Sanitary Ware & Ceramics",
    category: "egypt",
    featured: true,
    business: "Retail, Supply & Operations",
    location: "Delta Region, Egypt",
    year: "2015 – Present",
    line: "Daily operations, market share expansion, supplier and client relationships, product development, and profitability follow-up.",
    tags: ["Retail", "Supply", "Operations", "Egypt"],
  },
  {
    id: "al-shohail-foundation",
    title: "Al Shohail Foundation",
    category: "ksa",
    featured: false,
    business: "Commercial Contracts & Suppliers",
    location: "Saudi Arabia",
    year: "2021",
    line: "International supplier relationships, exclusive European commercial contracts, supply-chain operations, and process redesign.",
    tags: ["Contracts", "Suppliers", "KSA", "Europe"],
  },
  {
    id: "abraj-wasat-delta",
    title: "Abraj Wasat Al-Delta",
    category: "egypt",
    featured: false,
    business: "Business Development & Projects",
    location: "Egypt",
    year: "2012 – 2015",
    line: "Business development plans, team supervision, negotiations, and contribution to more than 10 successful projects.",
    tags: ["Business Development", "Projects", "Operations", "Egypt"],
  },
  {
    id: "al-jazeera-pomegranate",
    title: "Al Jazeera Pomegranate Company",
    category: "ksa",
    featured: false,
    business: "Import, Branches & Field Teams",
    location: "Riyadh, Saudi Arabia",
    year: "2004 – 2012",
    line: "Market development, spare-parts import, branch expansion for fitness equipment, and field-team leadership.",
    tags: ["Import", "Branches", "Teams", "KSA"],
  },
];

function itemMatches(item: WorkItem, active: WorkCategory) {
  if (active === "all") return true;
  if (active === "featured") return item.featured;
  if (active === "uae") return item.location.includes("United Arab Emirates");
  if (active === "ksa") return item.location.includes("Saudi Arabia") || item.location.includes("Riyadh");
  if (active === "egypt") return item.location.includes("Egypt");
  return item.category === active;
}

export default function SelectedWorkSection() {
  const [active, setActive] = useState<WorkCategory>("featured");
  const reveal = useReveal();
  const glowRef = useMouseGlow<HTMLElement>();
  const isClient = useIsClient();
  const prefersReduced = useReducedMotion();
  const animate = isClient && !prefersReduced;

  const visible = useMemo(() => workItems.filter((item) => itemMatches(item, active)), [active]);

  return (
    <section ref={glowRef} id="work" aria-label="Business portfolio" className="px-6 lg:px-24 py-24 border-t border-white/[0.06]">
      <div className="max-w-6xl mx-auto flex flex-col gap-10">
        <div className="flex flex-col gap-4 max-w-3xl">
          <motion.p {...reveal(0)} className="text-xs text-[#3DBA8C] tracking-[0.22em] uppercase font-medium">
            Business portfolio
          </motion.p>
          <motion.h2 {...reveal(0.06)} className="text-3xl sm:text-4xl font-semibold text-[#E8EDF2] leading-tight tracking-tight">
            Ventures, markets, and operating roles.
          </motion.h2>
          <motion.p {...reveal(0.12)} className="text-base sm:text-lg text-[#94A3B8] leading-relaxed">
            {workIntro}
          </motion.p>
        </div>

        <motion.div {...reveal(0.16)} className="flex flex-wrap gap-2" role="tablist" aria-label="Portfolio filters">
          {workFilters.map((filter) => {
            const selected = active === filter.id;
            return (
              <button
                key={filter.id}
                type="button"
                role="tab"
                aria-selected={selected}
                onClick={() => setActive(filter.id)}
                className={[
                  "rounded-full border px-4 py-2 text-sm font-medium transition-colors",
                  selected
                    ? "border-[#3DBA8C]/60 bg-[#3DBA8C]/[0.12] text-[#3DBA8C]"
                    : "border-white/[0.09] bg-white/[0.03] text-[#94A3B8] hover:text-[#E8EDF2] hover:border-white/[0.18]",
                ].join(" ")}
              >
                {filter.label}
              </button>
            );
          })}
        </motion.div>

        <motion.div data-glow {...reveal(0.2)} className="mouse-glow-panel rounded-3xl border border-[#3DBA8C]/20 bg-white/[0.03] p-4 sm:p-5">
          <AnimatePresence mode="popLayout">
            <motion.div layout className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
              {visible.map((item, i) => (
                <motion.article
                  key={item.id}
                  layout
                  {...filterGridTransition(animate, i)}
                  className="group relative rounded-2xl border border-white/[0.08] bg-[#0F1724] hover:border-[#3DBA8C]/35 transition-colors overflow-hidden"
                >
                  <div className="p-6 flex flex-col gap-5 min-h-[310px]">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex flex-col gap-1">
                        <p className="text-[11px] text-[#3DBA8C]/90 tracking-[0.18em] uppercase font-medium">{item.year}</p>
                        <h3 className="text-xl font-semibold text-[#E8EDF2] leading-tight">{item.title}</h3>
                      </div>
                      {item.featured && (
                        <span className="rounded-full border border-[#E0A458]/30 bg-[#E0A458]/[0.08] px-2.5 py-1 text-[10px] font-medium uppercase tracking-wide text-[#E0A458]">
                          Key
                        </span>
                      )}
                    </div>

                    <div className="h-px bg-white/[0.07]" />

                    <div className="flex flex-col gap-2">
                      <p className="text-sm font-medium text-[#E8EDF2]">{item.business}</p>
                      <p className="text-xs text-[#94A3B8]/70">{item.location}</p>
                    </div>

                    <p className="text-sm text-[#94A3B8] leading-relaxed">{item.line}</p>

                    <div className="mt-auto flex flex-wrap gap-1.5 pt-2">
                      {item.tags.map((tag) => (
                        <span key={tag} className="text-[11px] text-[#94A3B8]/80 bg-white/[0.03] border border-white/[0.07] rounded-full px-2.5 py-1">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.article>
              ))}
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
