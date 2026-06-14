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
      className="px-6 lg:px-24 py-10 border-t border-[#DDD4C5]"
    >
      <div className="max-w-6xl mx-auto flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs text-[#7C8794] leading-relaxed order-2 sm:order-1 text-center sm:text-left">
          {siteFooter.copyright}
        </p>

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
                className="w-9 h-9 rounded-lg border border-[#DDD4C5] bg-white hover:border-[#C8BFB0] hover:bg-[#F7F3EA] flex items-center justify-center text-[#7C8794] hover:text-[#172033] transition-colors"
              >
                <Icon size={15} strokeWidth={1.9} aria-hidden />
              </a>
            );
          })}
          <a
            href="#home"
            aria-label="Back to top"
            className="ml-3 sm:ml-4 w-11 h-11 rounded-xl border border-[#2F7D5C]/40 bg-[#2F7D5C]/[0.07] flex items-center justify-center text-[#2F7D5C] hover:bg-[#2F7D5C]/[0.15] hover:text-[#1F5F46] transition-colors shadow-[0_4px_16px_rgba(47,125,92,0.10)]"
          >
            <span aria-hidden className="text-lg leading-none">↑</span>
          </a>
        </nav>
      </div>
    </footer>
  );
}
