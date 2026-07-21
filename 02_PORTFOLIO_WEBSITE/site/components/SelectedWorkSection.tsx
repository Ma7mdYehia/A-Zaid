"use client";

import Image from "next/image";
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
import { VENTURE_IMAGES } from "@/lib/imageAssets";
import { useReveal } from "@/lib/motion";
import { useContent } from "@/lib/i18n";

interface ProjectLinkSet {
  website?: string;
  instagram?: string;
  linkedin?: string;
  youtube?: string;
  email?: string;
  phone?: string;
  whatsapp?: string;
}

const PROJECT_LINKS: Record<string, ProjectLinkSet> = {};

type LinkSlot = {
  key: keyof ProjectLinkSet;
  label: string;
  icon: LucideIcon;
  href: (value: string) => string;
};

const LINK_SLOTS: LinkSlot[] = [
  { key: "website", label: "Website", icon: Globe, href: (value) => value },
  { key: "instagram", label: "Instagram", icon: Instagram, href: (value) => value },
  { key: "linkedin", label: "LinkedIn", icon: Linkedin, href: (value) => value },
  { key: "youtube", label: "YouTube", icon: Youtube, href: (value) => value },
  { key: "email", label: "Email", icon: Mail, href: (value) => `mailto:${value}` },
  { key: "whatsapp", label: "WhatsApp / Phone", icon: MessageCircle, href: (value) => value },
];

function SocialRow({
  links,
  title,
  notAvailable,
}: {
  links: ProjectLinkSet;
  title: string;
  notAvailable: string;
}) {
  return (
    <div className="flex items-center gap-1.5">
      {LINK_SLOTS.map((slot) => {
        const Icon = slot.icon;
        const raw = slot.key === "whatsapp" ? links.whatsapp ?? links.phone : links[slot.key];

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
              className="flex h-7 w-7 items-center justify-center rounded-lg border border-[#D8CEBE] bg-[#FAF7F1] text-[#7C8794] transition-colors hover:border-[#2F7D5C]/40 hover:text-[#2F7D5C]"
            >
              <Icon className="h-3.5 w-3.5" aria-hidden />
            </a>
          );
        }

        return (
          <span
            key={slot.key}
            aria-disabled="true"
            aria-label={`${slot.label} — ${notAvailable}`}
            className="flex h-7 w-7 cursor-not-allowed items-center justify-center rounded-lg border border-[#DED5C7]/70 bg-[#FAF7F1] text-[#172033]/15"
          >
            <Icon className="h-3.5 w-3.5" aria-hidden />
          </span>
        );
      })}
    </div>
  );
}

function ProjectMedia({
  title,
  imageSrc,
  hero = false,
}: {
  title: string;
  imageSrc: string;
  hero?: boolean;
}) {
  return (
    <div
      className={[
        "relative overflow-hidden bg-[#EEE8DD]",
        hero
          ? "min-h-[250px] rounded-2xl sm:min-h-[330px] lg:h-full"
          : "h-[165px] rounded-t-2xl border-b border-[#DED5C7]",
      ].join(" ")}
    >
      <Image
        src={imageSrc}
        alt={title}
        fill
        sizes={hero ? "(min-width: 1024px) 50vw, 100vw" : "(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw"}
        className="object-cover transition-transform duration-500 group-hover:scale-[1.025]"
      />
    </div>
  );
}

function MetaRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex min-w-0 flex-col gap-1">
      <span className="text-[9px] font-semibold uppercase tracking-[0.14em] text-[#8A938D]">
        {label}
      </span>
      <span className="text-[12px] leading-5 text-[#172033]">{value}</span>
    </div>
  );
}

export default function SelectedWorkSection() {
  const { work, ui } = useContent();
  const reveal = useReveal();
  const [hero, ...rest] = work.items;
  const linksFor = (id: string): ProjectLinkSet => PROJECT_LINKS[id] ?? {};

  return (
    <section
      id="work"
      aria-label={work.eyebrow}
      className="border-t border-[#DED5C7] bg-[#F7F3EA] px-6 py-20 sm:py-24 lg:px-10 lg:py-28"
    >
      <div className="mx-auto flex max-w-[1180px] flex-col gap-10 lg:gap-12">
        <div className="flex max-w-[760px] flex-col gap-3.5">
          <motion.p
            {...reveal(0)}
            className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#2F7D5C]"
          >
            {work.eyebrow}
          </motion.p>
          <motion.h2
            {...reveal(0.06)}
            className="text-3xl font-semibold leading-tight tracking-[-0.025em] text-[#172033] sm:text-4xl"
          >
            {work.heading}
          </motion.h2>
          <motion.p
            {...reveal(0.12)}
            className="max-w-[700px] text-[15px] leading-7 text-[#5F6B7A] sm:text-base"
          >
            {work.intro}
          </motion.p>
        </div>

        <motion.article
          {...reveal(0.16)}
          className="group overflow-hidden rounded-3xl border border-[#CFC3B2] bg-white shadow-[0_20px_48px_-36px_rgba(23,32,51,0.55)]"
        >
          <div className="grid grid-cols-1 gap-0 lg:grid-cols-[1.03fr_0.97fr]">
            <div className="p-4 sm:p-5 lg:p-6 lg:pe-0">
              <ProjectMedia
                title={hero.title}
                imageSrc={VENTURE_IMAGES[hero.id]}
                hero
              />
            </div>

            <div className="relative flex flex-col gap-5 px-6 pb-7 pt-5 sm:px-8 sm:pb-8 lg:px-9 lg:py-8">
              <div
                aria-hidden
                className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[#2F7D5C]/[0.045] to-transparent"
              />

              <div className="relative flex items-start justify-between gap-4">
                <div className="flex min-w-0 flex-col gap-1.5">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#2F7D5C]">
                    {hero.year}
                  </p>
                  <h3 className="text-2xl font-semibold leading-tight tracking-[-0.02em] text-[#172033] sm:text-[1.75rem]">
                    {hero.title}
                  </h3>
                  <p className="text-[13px] leading-5 text-[#5F6B7A]">{hero.subtitle}</p>
                </div>
                <span className="flex-none rounded-full border border-[#B88746]/40 bg-[#B88746]/[0.09] px-3 py-1 text-[9px] font-semibold uppercase tracking-[0.1em] text-[#A87535]">
                  {work.currentFocus}
                </span>
              </div>

              <div className="relative grid grid-cols-2 gap-x-6 gap-y-4 border-y border-[#E4DDD2] py-4">
                <MetaRow label={work.meta.role} value={hero.role} />
                <MetaRow label={work.meta.sector} value={hero.sector} />
                <MetaRow label={work.meta.location} value={hero.location} />
                <MetaRow label={work.meta.year} value={hero.year} />
              </div>

              <div className="relative flex flex-col gap-2.5">
                <p className="text-[13px] font-semibold leading-6 text-[#172033]">{hero.line}</p>
                <p className="text-[12.5px] leading-6 text-[#5F6B7A]">{hero.description}</p>
              </div>

              <div className="relative flex flex-wrap gap-1.5">
                {hero.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-[#DED5C7] bg-[#FAF7F1] px-2.5 py-1 text-[10px] text-[#6E786F]"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="relative mt-auto border-t border-[#E7E0D5] pt-4">
                <SocialRow links={linksFor(hero.id)} title={hero.title} notAvailable={ui.notAvailable} />
              </div>
            </div>
          </div>
        </motion.article>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
          {rest.map((item, index) => (
            <motion.article
              key={item.id}
              {...reveal(0.06 + index * 0.045)}
              className="group flex h-full flex-col overflow-hidden rounded-2xl border border-[#D8CEBE] bg-white shadow-[0_14px_34px_-30px_rgba(23,32,51,0.5)] transition-[transform,border-color,box-shadow] duration-300 hover:-translate-y-1 hover:border-[#2F7D5C]/35 hover:shadow-[0_20px_42px_-30px_rgba(47,125,92,0.3)]"
            >
              <ProjectMedia
                title={item.title}
                imageSrc={VENTURE_IMAGES[item.id]}
              />

              <div className="flex flex-1 flex-col gap-3.5 p-5">
                <div className="flex flex-col gap-1">
                  <p className="text-[9.5px] font-semibold uppercase tracking-[0.16em] text-[#2F7D5C]">
                    {item.year}
                  </p>
                  <h3 className="text-[17px] font-semibold leading-snug tracking-[-0.01em] text-[#172033]">
                    {item.title}
                  </h3>
                  <p className="text-[11px] leading-5 text-[#69736E]">{item.subtitle}</p>
                </div>

                <div className="h-px bg-[#E7E0D5]" />

                <div className="flex flex-col gap-1">
                  <p className="text-[12px] font-medium leading-5 text-[#172033]">{item.role}</p>
                  <p className="text-[10.5px] leading-5 text-[#8A938D]">
                    {item.sector} · {item.location}
                  </p>
                </div>

                <p
                  className="overflow-hidden text-[12px] leading-5 text-[#5F6B7A]"
                  style={{ display: "-webkit-box", WebkitLineClamp: 3, WebkitBoxOrient: "vertical" }}
                >
                  {item.description}
                </p>

                <div className="mt-auto flex flex-wrap gap-1.5 pt-1">
                  {item.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-[#DED5C7] bg-[#FAF7F1] px-2.5 py-1 text-[9.5px] text-[#6E786F]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="border-t border-[#E7E0D5] pt-3.5">
                  <SocialRow links={linksFor(item.id)} title={item.title} notAvailable={ui.notAvailable} />
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
