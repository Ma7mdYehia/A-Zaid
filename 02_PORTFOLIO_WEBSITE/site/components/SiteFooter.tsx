import { siteFooter, contactLinks } from "@/content/homepage";
import { contactIcons, contactAnchorProps } from "@/lib/contactIcons";

const footerOrder = [
  "Instagram",
  "GitHub",
  "Behance",
  "Email me",
  "Download CV",
];

export default function SiteFooter() {
  const orderedLinks = footerOrder
    .map((label) => contactLinks.find((link) => link.label === label))
    .filter((link): link is (typeof contactLinks)[number] => Boolean(link));

  return (
    <footer
      role="contentinfo"
      className="px-6 lg:px-24 py-10 border-t border-white/[0.06]"
    >
      <div className="max-w-6xl mx-auto flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs text-[#94A3B8]/50 leading-relaxed order-2 sm:order-1 text-center sm:text-left">
          {siteFooter.copyright}
        </p>

        {/* Compact link row */}
        <nav
          aria-label="Footer links"
          className="order-1 sm:order-2 flex flex-wrap items-center justify-center gap-1.5"
        >
          {orderedLinks.map((link) => {
            const Icon = contactIcons[link.icon];
            return (
              <a
                key={link.label}
                {...contactAnchorProps(link)}
                className="w-9 h-9 rounded-lg glass glass-hover flex items-center justify-center text-[#94A3B8] hover:text-[#E8EDF2] transition-colors"
              >
                <Icon size={15} strokeWidth={1.9} aria-hidden />
              </a>
            );
          })}
          <a
            href="#home"
            aria-label="Back to top"
            className="ml-3 sm:ml-4 w-11 h-11 rounded-xl border border-[#3DBA8C]/40 bg-[#3DBA8C]/12 flex items-center justify-center text-[#3DBA8C] hover:bg-[#3DBA8C]/20 hover:text-[#D9F7EA] transition-colors shadow-[0_12px_34px_rgba(61,186,140,0.10)]"
          >
            <span aria-hidden className="text-lg leading-none">↑</span>
          </a>
        </nav>
      </div>
    </footer>
  );
}
