import type { ReactNode } from "react";

type PlaceholderTone = "dark" | "light" | "warm";
type LabelPosition = "top-left" | "top-right" | "bottom-left" | "bottom-right";
type FocalSide = "left" | "right";

interface MediaPlaceholderProps {
  label: string;
  className?: string;
  tone?: PlaceholderTone;
  labelPosition?: LabelPosition;
  focalSide?: FocalSide;
  children?: ReactNode;
}

const toneStyles: Record<PlaceholderTone, { background: string; border: string; text: string; grid: string }> = {
  dark: {
    background:
      "radial-gradient(80% 85% at 74% 42%, rgba(92,139,154,0.48), transparent 66%), linear-gradient(118deg, #102D3A 0%, #173B49 46%, #6A7E80 100%)",
    border: "border-white/[0.15]",
    text: "border-white/[0.15] bg-[#0E2834]/[0.68] text-white/[0.72]",
    grid: "rgba(255,255,255,0.07)",
  },
  light: {
    background:
      "radial-gradient(70% 80% at 75% 30%, rgba(47,125,92,0.12), transparent 65%), linear-gradient(135deg, #F8F3E9 0%, #E8E0D3 100%)",
    border: "border-[#D8CEBE]",
    text: "border-[#D8CEBE] bg-white/80 text-[#5F6B7A]",
    grid: "rgba(23,32,51,0.055)",
  },
  warm: {
    background:
      "radial-gradient(72% 82% at 25% 20%, rgba(184,135,70,0.13), transparent 68%), linear-gradient(135deg, #F3EBDD 0%, #DDD1C0 100%)",
    border: "border-[#D3C5B2]",
    text: "border-[#D3C5B2] bg-[#F8F3EA]/[0.85] text-[#5F6B7A]",
    grid: "rgba(23,32,51,0.05)",
  },
};

const labelPositions: Record<LabelPosition, string> = {
  "top-left": "left-4 top-4",
  "top-right": "right-4 top-4",
  "bottom-left": "bottom-4 left-4",
  "bottom-right": "bottom-4 right-4",
};

const focalPositions: Record<FocalSide, string> = {
  left: "left-[10%]",
  right: "right-[10%]",
};

export default function MediaPlaceholder({
  label,
  className = "",
  tone = "light",
  labelPosition = "bottom-right",
  focalSide = "right",
  children,
}: MediaPlaceholderProps) {
  const palette = toneStyles[tone];
  const fadeMask = "linear-gradient(to bottom, rgba(0,0,0,.78), transparent 90%)";

  return (
    <div
      role="img"
      aria-label={label}
      data-media-placeholder
      className={`relative overflow-hidden border ${palette.border} ${className}`}
      style={{ background: palette.background }}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-55"
        style={{
          backgroundImage: `linear-gradient(${palette.grid} 1px, transparent 1px), linear-gradient(90deg, ${palette.grid} 1px, transparent 1px)`,
          backgroundSize: "44px 44px",
          maskImage: fadeMask,
          WebkitMaskImage: fadeMask,
        }}
      />

      <div
        aria-hidden
        className={`pointer-events-none absolute top-[12%] h-[82%] w-[31%] rounded-[46%_46%_18%_18%] border border-white/[0.11] bg-white/[0.045] shadow-[0_30px_90px_-48px_rgba(0,0,0,0.7)] ${focalPositions[focalSide]}`}
      />
      <div
        aria-hidden
        className={`pointer-events-none absolute bottom-[7%] h-[18%] w-[42%] rounded-[50%] bg-black/[0.12] blur-2xl ${focalPositions[focalSide]}`}
      />

      {children}

      <span
        className={`absolute ${labelPositions[labelPosition]} z-20 inline-flex max-w-[calc(100%-2rem)] items-center gap-2 rounded-full border px-3 py-1.5 text-[9px] font-semibold uppercase tracking-[0.12em] backdrop-blur-md sm:text-[10px] ${palette.text}`}
      >
        <span className="h-1.5 w-1.5 flex-none rounded-full bg-current opacity-70" aria-hidden />
        <span className="truncate">{label}</span>
      </span>
    </div>
  );
}
