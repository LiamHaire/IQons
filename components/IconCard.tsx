"use client";

import type { Icon, IconStyle } from "@/lib/types";

interface IconCardProps {
  icon: Icon;
  style: IconStyle;
  size?: number;
  selected?: boolean;
  onClick?: () => void;
}

export function IconCard({ icon, style, size = 32, selected = false, onClick }: IconCardProps) {
  const svgContent = icon.svg[style] ?? icon.svg[icon.styles[0]];

  return (
    <button
      onClick={onClick}
      title={`${icon.name} — click for details`}
      className="group flex flex-col items-center justify-end gap-0 text-left transition-colors"
      style={{
        width: "100%",
        height: 148,
        border: selected
          ? "1.5px solid var(--brand-primary)"
          : "1px solid var(--border-default)",
        borderRadius: 12,
        background: selected ? "var(--brand-primary-soft, var(--surface-hover))" : "var(--surface-raised)",
        overflow: "hidden",
        cursor: "pointer",
        transition: "border-color 150ms, box-shadow 150ms, background 150ms",
        flexShrink: 0,
      }}
      onMouseEnter={(e) => {
        if (selected) return;
        const el = e.currentTarget as HTMLButtonElement;
        el.style.borderColor = "var(--border-strong)";
        el.style.boxShadow = "0 2px 8px rgba(0,0,0,0.05), 0 1px 3px rgba(0,0,0,0.03)";
        el.style.background = "var(--surface-hover)";
      }}
      onMouseLeave={(e) => {
        if (selected) return;
        const el = e.currentTarget as HTMLButtonElement;
        el.style.borderColor = "var(--border-default)";
        el.style.boxShadow = "none";
        el.style.background = "var(--surface-raised)";
      }}
    >
      {/* Icon area */}
      <div
        className="w-full flex items-center justify-center"
        style={{ height: 112, overflow: "hidden" }}
      >
        <span
          data-icon
          style={{
            width: size,
            height: size,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
            color: selected ? "var(--brand-primary)" : "var(--icon-fill)",
            transition: "transform 150ms, color 150ms",
          }}
          className="group-hover:scale-110"
          dangerouslySetInnerHTML={{ __html: svgContent.replace(/<svg /, `<svg width="${size}" height="${size}" `) }}
        />
      </div>

      {/* Label */}
      <div
        className="w-full px-3 pt-1.5 pb-5 text-sm text-center"
        style={{ color: selected ? "var(--brand-primary)" : "var(--text-muted)" }}
      >
        <span className="truncate block">{icon.name}</span>
      </div>
    </button>
  );
}
