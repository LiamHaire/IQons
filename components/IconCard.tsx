"use client";

import type { Icon, IconStyle } from "@/lib/types";

interface IconCardProps {
  icon: Icon;
  style: IconStyle;
  size?: number;
}

export function IconCard({ icon, style, size = 32 }: IconCardProps) {
  const svgContent = icon.svg[style] ?? icon.svg[icon.styles[0]];

  function copyToClipboard() {
    navigator.clipboard.writeText(svgContent).catch(() => {});
  }

  return (
    <button
      onClick={copyToClipboard}
      title={`${icon.name} — click to copy SVG`}
      className="group flex flex-col items-center justify-end gap-0 text-left w-full transition-colors"
      style={{
        border: "1px solid var(--border-default)",
        borderRadius: 12,
        background: "var(--surface)",
        overflow: "hidden",
        cursor: "pointer",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLButtonElement).style.borderColor = "var(--border-strong)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLButtonElement).style.borderColor = "var(--border-default)";
      }}
    >
      {/* Icon area */}
      <div
        className="w-full flex items-center justify-center"
        style={{ height: 120, padding: 24 }}
      >
        <span
          style={{ width: size, height: size, color: "var(--text-primary)", display: "block", flexShrink: 0, transition: "transform 150ms" }}
          className="group-hover:scale-110"
          dangerouslySetInnerHTML={{ __html: svgContent }}
        />
      </div>

      {/* Label */}
      <div
        className="w-full px-3 py-2.5 text-xs text-center"
        style={{
          color: "var(--text-secondary)",
          borderTop: "1px solid var(--border-subtle)",
          background: "var(--surface-active)",
        }}
      >
        <span className="truncate block">{icon.name}</span>
      </div>
    </button>
  );
}
