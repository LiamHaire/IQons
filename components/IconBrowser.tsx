"use client";

import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { CATEGORY_LABELS, CATEGORY_ORDER, SECTOR_CATEGORIES, ICON_STYLES, CATEGORY_ICONS } from "@/lib/icons";
import { IconCard } from "./IconCard";
import { ZeroState } from "./ZeroState";
import type { Icon, IconCategory, IconStyle } from "@/lib/types";

const outExpo = [0.16, 1, 0.3, 1] as const;

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
  const [dark, setDark]                 = useState(false);
  const [pressing, setPressing]         = useState(false);
  const [searchFocused, setSearchFocused] = useState(false);

  function toggleTheme() {
    if (pressing) return;
    setPressing(true);
    setTimeout(() => {
      const next = !dark;
      setDark(next);
      document.documentElement.classList.toggle("dark", next);
      setPressing(false);
    }, 280);
  }


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

  const total = useMemo(() =>
    icons.filter((icon) => {
      if (activeCategory !== ALL && icon.category !== activeCategory) return false;
      return icon.styles.includes(activeStyle);
    }).length,
  [activeStyle, activeCategory, icons]);

  const categories = useMemo(() => {
    const seen = new Set(icons.map((i) => i.category));
    return CATEGORY_ORDER.filter((c) => seen.has(c));
  }, []);

  return (
    <>
      {/* ── Sidebar ── */}
      <aside
        className="flex flex-col shrink-0 overflow-y-auto custom-scroll"
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
            iconSvg={CATEGORY_ICONS["all"]}
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
                  iconSvg={CATEGORY_ICONS[cat]}
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
                        border: "1.5px solid var(--text-primary)",
                        color: "var(--text-primary)",
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
              border: searchFocused ? "1.5px solid var(--text-primary)" : "1px solid var(--border-default)",
              borderRadius: 999,
              background: "var(--surface)",
              transition: "border-color 150ms",
            }}
            onFocusCapture={() => setSearchFocused(true)}
            onBlurCapture={() => setSearchFocused(false)}
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
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search for an icon..."
              className="flex-1 text-sm bg-transparent"
              style={{ color: "var(--text-primary)", outline: "none", border: "none", boxShadow: "none" }}
            />
            {query && (
              <button
                onClick={() => setQuery("")}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                  background: "none",
                  border: "none",
                  padding: 0,
                  cursor: "pointer",
                  color: "var(--text-muted)",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "var(--text-primary)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-muted)")}
                aria-label="Clear search"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18.293 4.29305C18.6836 3.90252 19.3166 3.90252 19.7071 4.29305C20.0976 4.68358 20.0976 5.31661 19.7071 5.70711L13.4141 12.0001L19.7071 18.293C20.0976 18.6836 20.0976 19.3166 19.7071 19.7071C19.3166 20.0976 18.6836 20.0976 18.293 19.7071L12.0001 13.4141L5.70711 19.7071C5.31661 20.0976 4.68358 20.0976 4.29305 19.7071C3.90252 19.3166 3.90252 18.6836 4.29305 18.293L10.586 12.0001L4.29305 5.70711C3.90252 5.31658 3.90252 4.68357 4.29305 4.29305C4.68357 3.90252 5.31658 3.90252 5.70711 4.29305L12.0001 10.586L18.293 4.29305Z" fill="currentColor"/>
                </svg>
              </button>
            )}
          </div>

          {/* Theme toggle */}
          <motion.button
            onClick={toggleTheme}
            className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0"
            style={{
              border: "1px solid var(--border-default)",
              background: "transparent",
              color: "var(--text-secondary)",
              cursor: "pointer",
            }}
            animate={pressing ? { scale: 0.88, y: 2 } : { scale: 1, y: 0 }}
            transition={pressing ? { duration: 0.1, ease: "easeIn" } : { duration: 0.35, ease: outExpo }}
            whileHover={{ borderColor: "var(--border-strong)" }}
            title={dark ? "Switch to light mode" : "Switch to dark mode"}
          >
            {dark ? (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
              </svg>
            ) : (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="4"/>
                <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"/>
              </svg>
            )}
          </motion.button>
        </div>

        {/* Count */}
        <p className="shrink-0 text-sm mb-4" style={{ color: "var(--text-muted)" }}>
          Showing {filtered.length} of {total}
        </p>

        {/* Icon grid */}
        <div className="custom-scroll flex-1 overflow-y-auto pb-8" style={{ marginRight: "-40px", paddingRight: "40px", scrollbarGutter: "stable" }}>
          {filtered.length === 0 ? (
            <ZeroState query={query} />
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
              border: "1.5px solid var(--text-primary)",
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
      {iconSvg && (
        <span
          className="w-5 h-5 shrink-0 flex items-center justify-center"
          style={{ color: "var(--icon-fill)" }}
          dangerouslySetInnerHTML={{ __html: iconSvg.replace(/<svg /, '<svg width="20" height="20" ') }}
        />
      )}
      {label}
    </button>
  );
}
