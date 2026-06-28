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
      className="group flex flex-col items-center justify-end gap-0 text-left transition-colors"
      style={{
        width: "100%",
        height: 148,
        border: "1px solid var(--border-default)",
        borderRadius: 12,
        background: "var(--surface)",
        overflow: "hidden",
        cursor: "pointer",
        transition: "border-color 150ms, box-shadow 150ms, background 150ms",
        flexShrink: 0,
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget as HTMLButtonElement;
        el.style.borderColor = "var(--border-strong)";
        el.style.boxShadow = "0 4px 12px rgba(0,0,0,0.08), 0 2px 4px rgba(0,0,0,0.04)";
        el.style.background = "var(--surface-hover)";
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget as HTMLButtonElement;
        el.style.borderColor = "var(--border-default)";
        el.style.boxShadow = "none";
        el.style.background = "var(--surface)";
      }}
    >
      {/* Icon area */}
      <div
        className="w-full flex items-center justify-center"
        style={{ height: 112, overflow: "hidden" }}
      >
        <span
          style={{ width: size, height: size, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, color: "var(--text-primary)", transition: "transform 150ms" }}
          className="group-hover:scale-110"
          dangerouslySetInnerHTML={{ __html: svgContent.replace(/<svg /, `<svg width="${size}" height="${size}" `) }}
        />
      </div>

      {/* Label */}
      <div
        className="w-full px-3 pt-1.5 pb-5 text-sm text-center"
        style={{
          color: "var(--text-muted)",
        }}
      >
        <span className="truncate block">{icon.name}</span>
      </div>
    </button>
  );
}
