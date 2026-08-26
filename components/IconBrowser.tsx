"use client";

import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { CATEGORY_LABELS, CATEGORY_ORDER, SECTOR_CATEGORIES, ICON_STYLES, CATEGORY_ICONS, CATEGORY_ICONS_OUTLINE } from "@/lib/icons";
import { IconCard } from "./IconCard";
import { IconDetail } from "./IconDetail";
import { ZeroState } from "./ZeroState";
import type { Icon, IconCategory, IconStyle } from "@/lib/types";

const outExpo = [0.16, 1, 0.3, 1] as const;
const ALL = "all";

const STYLE_DISPLAY: Record<IconStyle, string> = {
  outline:  "Outline",
  duotone:  "Duo-tone",
  filled:   "Fill",
  thin:     "Thin",
};

export function IconBrowser({ icons }: { icons: Icon[] }) {
  const [query, setQuery]                   = useState("");
  const [activeStyle, setActiveStyle]       = useState<IconStyle>("outline");
  const [activeCategory, setActiveCategory] = useState<string>(ALL);
  const SIZE_STEPS = [16, 18, 20, 24, 28, 32, 40, 48, 56];
  const [sizeIndex, setSizeIndex]           = useState(5);
  const iconSize = SIZE_STEPS[sizeIndex];
  const [dark, setDark]                     = useState(false);
  const [pressing, setPressing]             = useState(false);
  const [selectedIcon, setSelectedIcon]     = useState<Icon | null>(null);
  const [searchFocused, setSearchFocused]   = useState(false);

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
  }, [query, activeStyle, activeCategory, icons]);

  const total = useMemo(() =>
    icons.filter((icon) => {
      if (activeCategory !== ALL && icon.category !== activeCategory) return false;
      return icon.styles.includes(activeStyle);
    }).length,
  [activeStyle, activeCategory, icons]);

  const categories = useMemo(() => {
    const seen = new Set(icons.map((i) => i.category));
    return CATEGORY_ORDER.filter((c) => seen.has(c));
  }, [icons]);

  return (
    <>
      <IconDetail icon={selectedIcon} style={activeStyle} onClose={() => setSelectedIcon(null)} />

      {/* ── Sidebar ── */}
      <aside
        className="flex flex-col shrink-0 overflow-y-auto custom-scroll"
        style={{
          width: 220,
          borderRight: "1px solid var(--border-default)",
          paddingTop: 24,
          paddingBottom: 32,
          paddingLeft: 0,
          paddingRight: 16,
        }}
      >
        <p
          className="text-xs font-semibold uppercase tracking-widest px-3 mb-3"
          style={{ color: "var(--text-muted)" }}
        >
          Category
        </p>

        <div className="flex flex-col gap-0.5">
          <CategoryRow
            label="All"
            active={activeCategory === ALL}
            onClick={() => setActiveCategory(ALL)}
            iconSvg={CATEGORY_ICONS["all"]}
            iconSvgOutline={CATEGORY_ICONS_OUTLINE["all"]}
          />
          {categories.map((cat, i) => {
            const isFirstSector =
              SECTOR_CATEGORIES.has(cat) &&
              (i === 0 || !SECTOR_CATEGORIES.has(categories[i - 1]));
            return (
              <div key={cat}>
                {isFirstSector && (
                  <p
                    className="text-xs font-semibold uppercase tracking-widest mt-5 mb-1.5 px-3"
                    style={{ color: "var(--text-muted)" }}
                  >
                    Sector
                  </p>
                )}
                <CategoryRow
                  label={CATEGORY_LABELS[cat as IconCategory]}
                  active={activeCategory === cat}
                  onClick={() => setActiveCategory(cat)}
                  iconSvg={CATEGORY_ICONS[cat]}
                  iconSvgOutline={CATEGORY_ICONS_OUTLINE[cat]}
                />
              </div>
            );
          })}
        </div>
      </aside>

      {/* ── Main ── */}
      <div className="flex flex-col flex-1 min-w-0 min-h-0" style={{ paddingLeft: 32, paddingTop: 24 }}>

        {/* ── Search bar — full width ── */}
        <div
          className="flex items-center gap-3 px-4 shrink-0"
          style={{
            height: 48,
            border: searchFocused
              ? "1.5px solid var(--brand-primary)"
              : "1px solid var(--border-default)",
            borderRadius: 12,
            background: "var(--surface)",
            transition: "border-color 150ms, box-shadow 150ms",
            boxShadow: searchFocused ? "0 0 0 3px var(--brand-primary-soft)" : "none",
            marginRight: 0,
          }}
          onFocusCapture={() => setSearchFocused(true)}
          onBlurCapture={() => setSearchFocused(false)}
        >
          <svg
            width="18" height="18"
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
            placeholder="Search icons…"
            className="flex-1 text-base bg-transparent"
            style={{ color: "var(--text-primary)", outline: "none", border: "none", boxShadow: "none" }}
            autoFocus
          />
          {query && (
            <button
              onClick={() => setQuery("")}
              style={{
                display: "flex", alignItems: "center", justifyContent: "center",
                flexShrink: 0, background: "none", border: "none",
                padding: 4, cursor: "pointer", color: "var(--text-muted)",
                borderRadius: 6,
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--text-primary)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-muted)")}
              aria-label="Clear search"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M18.293 4.293a1 1 0 0 1 1.414 1.414L13.414 12l6.293 6.293a1 1 0 0 1-1.414 1.414L12 13.414l-6.293 6.293a1 1 0 0 1-1.414-1.414L10.586 12 4.293 5.707a1 1 0 0 1 1.414-1.414L12 10.586l6.293-6.293z"/>
              </svg>
            </button>
          )}
        </div>

        {/* ── Filter row: style chips + controls ── */}
        <div
          className="flex items-center gap-2 shrink-0 mt-5"
          style={{ paddingBottom: 16, borderBottom: "1px solid var(--border-default)" }}
        >
          {/* Style chips */}
          <div className="flex items-center gap-1.5 flex-1">
            {ICON_STYLES.map((style) => (
              <StyleChip
                key={style}
                label={STYLE_DISPLAY[style]}
                active={activeStyle === style}
                onClick={() => setActiveStyle(style)}
              />
            ))}
          </div>


          {/* Size slider */}
          <div className="flex items-center gap-2.5">
            <span
              className="text-xs font-medium"
              style={{ color: "var(--text-muted)" }}
            >
              Size
            </span>
            <input
              type="range"
              min={0}
              max={SIZE_STEPS.length - 1}
              step={1}
              value={sizeIndex}
              onChange={(e) => setSizeIndex(Number(e.target.value))}
              className="w-24"
            />
            <span
              className="text-xs tabular-nums"
              style={{ color: "var(--text-muted)", minWidth: 24 }}
            >
              {iconSize}
            </span>
          </div>

          {/* Theme toggle */}
          <motion.button
            onClick={toggleTheme}
            className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0"
            style={{
              border: "1px solid var(--border-default)",
              background: "transparent",
              color: "var(--text-secondary)",
              cursor: "pointer",
              transition: "background 150ms, border-color 150ms",
            }}
            animate={pressing ? { scale: 0.88, y: 2 } : { scale: 1, y: 0 }}
            transition={pressing ? { duration: 0.1, ease: "easeIn" } : { duration: 0.35, ease: outExpo }}
            whileHover={{ borderColor: "var(--border-strong)", background: "var(--surface-hover)" }}
            title={dark ? "Switch to light mode" : "Switch to dark mode"}
          >
            {dark ? (
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M12 1C12.853 1 13.683 1.1 14.48 1.283 11.772 2.105 9.8 4.622 9.8 7.6c0 3.531 2.773 6.415 6.261 6.591L16.4 14.2c2.978 0 5.494-1.972 6.316-4.682C22.9 10.316 23 11.146 23 12c0 6.075-4.925 11-11 11S1 18.075 1 12 5.925 1 12 1z"/>
              </svg>
            ) : (
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 19a.75.75 0 0 1 .75.75v1.5a.75.75 0 0 1-1.5 0v-1.5A.75.75 0 0 1 12 19z"/>
                <path d="M7.476 18.337a.75.75 0 0 1 1.024 1.025l-.75 1.299a.75.75 0 1 1-1.299-.75l.75-1.299a.75.75 0 0 1 .275-.275zM15.5 18.063a.75.75 0 0 1 1.024.274l.75 1.299a.75.75 0 1 1-1.299.75l-.75-1.299a.75.75 0 0 1 .275-1.024z"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M12 6a6 6 0 1 0 0 12A6 6 0 0 0 12 6zm0 1.5a4.5 4.5 0 1 1 0 9 4.5 4.5 0 0 1 0-9z"/>
                <path d="M4.913 15.226a.75.75 0 0 1 .274 1.024l-.75 1.299a.75.75 0 1 1-1.299-.75l.75-1.299a.75.75 0 0 1 1.025-.274zM18.063 15.5a.75.75 0 0 1 1.024.274l.75 1.299a.75.75 0 1 1-1.299.75l-.75-1.299a.75.75 0 0 1 .275-1.024zM4.25 11.25a.75.75 0 0 1 0 1.5H2.75a.75.75 0 0 1 0-1.5h1.5zM21.25 11.25a.75.75 0 0 1 0 1.5h-1.5a.75.75 0 0 1 0-1.5h1.5zM3.34 7a.75.75 0 0 1 1.025.274l.75 1.299a.75.75 0 1 1-1.299.75L3.066 8.024A.75.75 0 0 1 3.34 7zM19.636 6.726a.75.75 0 0 1 .274 1.024l-.75 1.299a.75.75 0 1 1-1.299-.75l.75-1.299a.75.75 0 0 1 1.025-.274zM7 3.34a.75.75 0 0 1 1.024.275l.75 1.298a.75.75 0 1 1-1.299.75l-.75-1.298A.75.75 0 0 1 7 3.34zM15.976 3.614a.75.75 0 0 1 1.024.275l.75 1.299a.75.75 0 1 1-1.299.75l-.75-1.299a.75.75 0 0 1 .275-1.025zM12 2a.75.75 0 0 1 .75.75v1.5a.75.75 0 0 1-1.5 0v-1.5A.75.75 0 0 1 12 2z"/>
              </svg>
            )}
          </motion.button>
        </div>

        {/* Icon grid */}
        <div
          className="custom-scroll flex-1 overflow-y-auto pb-8 pt-4"
          style={{ marginRight: "-32px", paddingRight: "32px", scrollbarGutter: "stable" }}
        >
          {filtered.length === 0 ? (
            <ZeroState query={query} onHome={() => { setQuery(""); setActiveCategory(ALL); }} />
          ) : (
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(120px, 1fr))", gap: 6 }}>
              {filtered.map((icon) => (
                <IconCard
                  key={icon.id}
                  icon={icon}
                  style={activeStyle}
                  size={iconSize}
                  onClick={() => setSelectedIcon(icon)}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
}

// ─── Style chip ───────────────────────────────────────────────────────────────

function StyleChip({ label, active, onClick }: { label: string; active: boolean; onClick: () => void }) {
  const [hovered, setHovered] = useState(false);
  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="px-3.5 text-sm rounded-full inline-flex items-center"
      style={
        active
          ? {
              height: 32,
              background: "var(--text-primary)",
              color: "var(--text-inverse)",
              border: "1.5px solid var(--text-primary)",
              cursor: "pointer",
              fontWeight: 500,
              transition: "background 150ms, border-color 150ms",
            }
          : {
              height: 32,
              background: hovered ? "var(--surface-hover)" : "transparent",
              color: hovered ? "var(--text-primary)" : "var(--text-secondary)",
              border: "1px solid var(--border-default)",
              cursor: "pointer",
              fontWeight: 400,
              transition: "background 150ms, border-color 150ms, color 150ms",
            }
      }
    >
      {label}
    </button>
  );
}

// ─── Sidebar category row ─────────────────────────────────────────────────────

function CategoryRow({
  label,
  active,
  onClick,
  iconSvg,
  iconSvgOutline,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
  iconSvg?: string;
  iconSvgOutline?: string;
}) {
  const [hovered, setHovered] = useState(false);
  const displaySvg = active && iconSvgOutline ? iconSvgOutline : iconSvg;
  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="flex items-center gap-2.5 px-3 rounded-lg text-sm text-left w-full"
      style={{
        height: 34,
        background: active
          ? "var(--surface-active)"
          : hovered
            ? "var(--surface-hover)"
            : "transparent",
        color: active ? "var(--text-primary)" : hovered ? "var(--text-primary)" : "var(--text-secondary)",
        border: "none",
        cursor: "pointer",
        transition: "background 120ms, color 120ms",
        fontWeight: active ? 500 : 400,
      }}
    >
      {displaySvg && (
        <span
          className="shrink-0 flex items-center justify-center"
          style={{
            width: 18,
            height: 18,
            color: "var(--icon-fill)",
          }}
          dangerouslySetInnerHTML={{ __html: displaySvg.replace(/<svg /, '<svg width="18" height="18" ') }}
        />
      )}
      <span className="truncate">{label}</span>
    </button>
  );
}
