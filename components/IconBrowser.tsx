"use client";

import { useState, useMemo } from "react";
import { CATEGORY_LABELS, CATEGORY_ORDER, SECTOR_CATEGORIES, ICON_STYLES } from "@/lib/icons";
import { IconCard } from "./IconCard";
import type { Icon, IconCategory, IconStyle } from "@/lib/types";

const ALL = "all";

// Style label overrides to match the screenshot
const STYLE_DISPLAY: Record<IconStyle, string> = {
  outline:  "Outline",
  duotone:  "Duo-tone",
  filled:   "Solid",
  thin:     "Thin",
};

export function IconBrowser({ icons }: { icons: Icon[] }) {
  const [query, setQuery]               = useState("");
  const [activeStyle, setActiveStyle]   = useState<IconStyle>("outline");
  const [activeCategory, setActiveCategory] = useState<string>(ALL);
  const SIZE_STEPS = [24, 28, 32, 40, 48, 56];
  const [sizeIndex, setSizeIndex]       = useState(2); // default 32px
  const iconSize = SIZE_STEPS[sizeIndex];


  const filtered = useMemo(() => {
    const q = query.toLowerCase().trim();
    return icons.filter((icon) => {
      if (activeCategory !== ALL && icon.category !== activeCategory) return false;
      if (!icon.styles.includes(activeStyle)) return false;
      if (!q) return true;
      return (
        icon.name.toLowerCase().includes(q) ||
        icon.tags.some((t) => t.includes(q)) ||
        icon.category.includes(q)
      );
    });
  }, [query, activeStyle, activeCategory]);

  const categories = useMemo(() => {
    const seen = new Set(icons.map((i) => i.category));
    return CATEGORY_ORDER.filter((c) => seen.has(c));
  }, []);

  return (
    <>
      {/* ── Sidebar ── */}
      <aside
        className="flex flex-col shrink-0 overflow-y-auto"
        style={{
          width: 240,
          borderRight: "1px solid var(--border-default)",
          paddingTop: 0,
          paddingBottom: 32,
          paddingLeft: 0,
          paddingRight: 24,
        }}
      >
        <div
          className="flex items-center shrink-0"
          style={{ height: 72, marginBottom: 12 }}
        >
          <p
            className="text-xs font-semibold uppercase tracking-widest"
            style={{ color: "var(--text-muted)" }}
          >
            Category:
          </p>
        </div>

        <div className="flex flex-col gap-2">
          <CategoryRow
            label="All"
            active={activeCategory === ALL}
            onClick={() => setActiveCategory(ALL)}
          />
          {categories.map((cat, i) => {
            const isFirstSector = SECTOR_CATEGORIES.has(cat) &&
              (i === 0 || !SECTOR_CATEGORIES.has(categories[i - 1]));
            return (
              <div key={cat}>
                {isFirstSector && (
                  <p
                    className="text-xs font-semibold uppercase tracking-widest mt-4 mb-2 px-3"
                    style={{ color: "var(--text-muted)" }}
                  >
                    Sector
                  </p>
                )}
                <CategoryRow
                  label={CATEGORY_LABELS[cat]}
                  active={activeCategory === cat}
                  onClick={() => setActiveCategory(cat)}
                  iconSvg={undefined}
                />
              </div>
            );
          })}
        </div>
      </aside>

      {/* ── Main ── */}
      <div className="flex flex-col flex-1 min-w-0 min-h-0" style={{ paddingLeft: 24 }}>

        {/* Toolbar */}
        <div
          className="flex items-center gap-4 shrink-0"
          style={{
            height: 72,
          }}
        >
          {/* Style pills */}
          <div className="flex items-center gap-1.5">
            <span
              className="text-xs font-semibold uppercase tracking-widest mr-2"
              style={{ color: "var(--text-muted)" }}
            >
              Style:
            </span>
            {ICON_STYLES.map((style) => (
              <button
                key={style}
                onClick={() => setActiveStyle(style)}
                className="px-4 text-sm rounded-full transition-colors inline-flex items-center"
                style={
                  activeStyle === style
                    ? {
                        height: 40,
                        border: "1.5px solid var(--brand-primary)",
                        color: "var(--brand-primary)",
                        background: "var(--surface)",
                      }
                    : {
                        height: 40,
                        border: "1px solid var(--border-default)",
                        color: "var(--text-secondary)",
                        background: "var(--surface)",
                      }
                }
              >
                {STYLE_DISPLAY[style]}
              </button>
            ))}
          </div>

          {/* Size slider */}
          <div className="flex items-center gap-3 ml-6">
            <span
              className="text-xs font-semibold uppercase tracking-widest whitespace-nowrap"
              style={{ color: "var(--text-muted)" }}
            >
              Size:
            </span>
            <input
              type="range"
              min={0}
              max={SIZE_STEPS.length - 1}
              step={1}
              value={sizeIndex}
              onChange={(e) => setSizeIndex(Number(e.target.value))}
              className="w-28"
            />
            <span
              className="text-sm tabular-nums w-8"
              style={{ color: "var(--text-muted)" }}
            >
              {iconSize}
            </span>
          </div>

          {/* Spacer */}
          <div className="flex-1" />

          {/* Search */}
          <div
            className="flex items-center gap-2 px-3 search-bar"
            style={{
              width: 280,
              height: 40,
              border: "1px solid var(--border-default)",
              borderRadius: 999,
              background: "var(--surface)",
              transition: "border-color 150ms",
            }}
            onFocusCapture={(e) => (e.currentTarget.style.borderColor = "var(--brand-primary)")}
            onBlurCapture={(e) => (e.currentTarget.style.borderColor = "var(--border-default)")}
          >
            <svg
              width="16" height="16"
              viewBox="0 0 24 24" fill="none"
              stroke="currentColor" strokeWidth="1.5"
              strokeLinecap="round" strokeLinejoin="round"
              style={{ color: "var(--text-muted)", flexShrink: 0 }}
            >
              <circle cx="11" cy="11" r="7"/>
              <path d="M21 21l-4.35-4.35"/>
            </svg>
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search for an icon..."
              className="flex-1 text-sm bg-transparent"
              style={{ color: "var(--text-primary)", outline: "none", border: "none", boxShadow: "none" }}
            />
          </div>
        </div>

        {/* Icon grid */}
        <div className="custom-scroll flex-1 overflow-y-auto pt-3 pb-8" style={{ marginRight: "-40px", paddingRight: "40px", scrollbarGutter: "stable" }}>
          {filtered.length === 0 ? (
            <p className="text-sm" style={{ color: "var(--text-muted)" }}>
              No icons match your search.
            </p>
          ) : (
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(140px, 1fr))", gap: 8 }}>
              {filtered.map((icon) => (
                <IconCard key={icon.id} icon={icon} style={activeStyle} size={iconSize} />
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
}

// ─── Sidebar category row ─────────────────────────────────────────────────────

function CategoryRow({
  label,
  active,
  onClick,
  iconSvg,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
  iconSvg?: string;
}) {
  return (
    <button
      onClick={onClick}
      className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm text-left w-full transition-colors"
      style={
        active
          ? {
              border: "1.5px solid var(--brand-primary)",
              color: "var(--text-primary)",
              background: "var(--surface)",
            }
          : {
              border: "1px solid transparent",
              color: "var(--text-secondary)",
              background: "var(--surface)",
            }
      }
    >
      {iconSvg ? (
        <span
          className="w-5 h-5 shrink-0 flex items-center justify-center"
          dangerouslySetInnerHTML={{ __html: iconSvg.replace(/<svg /, '<svg width="20" height="20" ') }}
        />
      ) : (
        <span
          className="w-5 h-5 rounded-md shrink-0"
          style={{
            border: "1.5px solid var(--border-strong)",
            background: "var(--surface-active)",
          }}
        />
      )}
      {label}
    </button>
  );
}
