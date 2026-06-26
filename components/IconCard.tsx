"use client";

import type { Icon, IconStyle } from "@/lib/types";

interface IconCardProps {
  icon: Icon;
  style: IconStyle;
}

export function IconCard({ icon, style }: IconCardProps) {
  const svgContent = icon.svg[style] ?? icon.svg[icon.styles[0]];

  function copyToClipboard() {
    navigator.clipboard.writeText(svgContent).catch(() => {});
  }

  return (
    <button
      onClick={copyToClipboard}
      title={`${icon.name} — click to copy SVG`}
      className="group flex flex-col items-center gap-2.5 p-4 rounded-lg bg-[var(--surface)] border border-[var(--border)] hover:border-[var(--accent)] transition-colors cursor-pointer"
    >
      <span
        className="w-8 h-8 text-[var(--foreground)]"
        dangerouslySetInnerHTML={{ __html: svgContent }}
      />
      <span className="text-xs text-[var(--muted-foreground)] group-hover:text-[var(--foreground)] transition-colors truncate max-w-full">
        {icon.name}
      </span>
    </button>
  );
}
