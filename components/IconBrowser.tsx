"use client";

import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { CATEGORY_LABELS, CATEGORY_ORDER, SECTOR_CATEGORIES, ICON_STYLES, CATEGORY_ICONS } from "@/lib/icons";
import { IconCard } from "./IconCard";
import { IconDetail } from "./IconDetail";
import { ZeroState } from "./ZeroState";
import type { Icon, IconCategory, IconStyle } from "@/lib/types";

const outExpo = [0.16, 1, 0.3, 1] as const;

const ALL = "all";

// Style label overrides to match the screenshot
const STYLE_DISPLAY: Record<IconStyle, string> = {
  outline:  "Outline",
  duotone:  "Duo-tone",
  filled:   "Fill",
  thin:     "Thin",
};

export function IconBrowser({ icons }: { icons: Icon[] }) {
  const [query, setQuery]               = useState("");
  const [activeStyle, setActiveStyle]   = useState<IconStyle>("outline");
  const [activeCategory, setActiveCategory] = useState<string>(ALL);
  const SIZE_STEPS = [16, 18, 20, 24, 28, 32, 40, 48, 56];
  const [sizeIndex, setSizeIndex]       = useState(5); // default 32px
  const iconSize = SIZE_STEPS[sizeIndex];
  const [dark, setDark]                 = useState(false);
  const [pressing, setPressing]         = useState(false);
  const [selectedIcon, setSelectedIcon] = useState<Icon | null>(null);
  const [searchFocused, setSearchFocused] = useState(false);
  const [searchHovered, setSearchHovered] = useState(false);

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
      <IconDetail icon={selectedIcon} style={activeStyle} onClose={() => setSelectedIcon(null)} />
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
                className="px-4 text-sm rounded-full inline-flex items-center"
                style={
                  activeStyle === style
                    ? {
                        height: 40,
                        border: "1.5px solid var(--brand-primary)",
                        color: "var(--text-primary)",
                        background: "transparent",
                        cursor: "pointer",
                        transition: "background 150ms, border-color 150ms",
                      }
                    : {
                        height: 40,
                        border: "1px solid var(--border-default)",
                        color: "var(--text-secondary)",
                        background: "transparent",
                        cursor: "pointer",
                        transition: "background 150ms, border-color 150ms",
                      }
                }
                onMouseEnter={(e) => { e.currentTarget.style.background = "var(--surface-hover)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; }}
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
              border: searchFocused
                ? "1.5px solid var(--brand-primary)"
                : searchHovered
                  ? "1px solid var(--border-strong)"
                  : "1px solid var(--border-default)",
              borderRadius: 999,
              background: searchHovered && !searchFocused ? "var(--surface-hover)" : "transparent",
              transition: "border-color 150ms, background 150ms",
              cursor: "text",
            }}
            onFocusCapture={() => setSearchFocused(true)}
            onBlurCapture={() => setSearchFocused(false)}
            onMouseEnter={() => setSearchHovered(true)}
            onMouseLeave={() => setSearchHovered(false)}
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
              transition: "background 150ms, border-color 150ms",
            }}
            animate={pressing ? { scale: 0.88, y: 2 } : { scale: 1, y: 0 }}
            transition={pressing ? { duration: 0.1, ease: "easeIn" } : { duration: 0.35, ease: outExpo }}
            whileHover={{ borderColor: "var(--border-strong)", background: "var(--surface-hover)" }}
            title={dark ? "Switch to light mode" : "Switch to dark mode"}
          >
            {dark ? (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M12 1C12.8532 1 13.6831 1.0994 14.4805 1.2832C11.7718 2.10533 9.79998 4.62238 9.7998 7.59961C9.7998 11.1308 12.5732 14.0147 16.0605 14.1914L16.4004 14.2002C19.3779 14.2 21.8939 12.2276 22.7158 9.51855C22.8998 10.3162 23 11.1464 23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12C1 5.92487 5.92487 1 12 1ZM9.92676 2.72949C5.67738 3.67564 2.5 7.46559 2.5 12C2.5 17.2467 6.75329 21.5 12 21.5C16.5351 21.5 20.3251 18.3216 21.2705 14.0713C19.9157 15.0933 18.2297 15.7001 16.4004 15.7002C11.9269 15.7002 8.2998 12.0731 8.2998 7.59961C8.29989 5.77095 8.90541 4.08445 9.92676 2.72949Z" fill="currentColor"/>
              </svg>
            ) : (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 20C12.4142 20 12.75 20.3358 12.75 20.75V22.25C12.75 22.6642 12.4142 23 12 23C11.5858 23 11.25 22.6642 11.25 22.25V20.75C11.25 20.3358 11.5858 20 12 20Z" fill="currentColor"/>
                <path d="M6.97559 19.2031C7.18269 18.8444 7.64128 18.7216 8 18.9287C8.35856 19.1359 8.48148 19.5945 8.27441 19.9531L7.52441 21.252C7.31727 21.6105 6.85866 21.7334 6.5 21.5264C6.14131 21.3193 6.01854 20.8607 6.22559 20.502L6.97559 19.2031Z" fill="currentColor"/>
                <path d="M16 18.9287C16.3587 18.7216 16.8173 18.8444 17.0244 19.2031L17.7744 20.502C17.9815 20.8607 17.8587 21.3193 17.5 21.5264C17.1413 21.7334 16.6827 21.6105 16.4756 21.252L15.7256 19.9531C15.5185 19.5945 15.6414 19.1359 16 18.9287Z" fill="currentColor"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M12 5C15.866 5 19 8.13401 19 12C19 15.866 15.866 19 12 19C8.13401 19 5 15.866 5 12C5 8.13401 8.13401 5 12 5ZM12 6.5C8.96243 6.5 6.5 8.96243 6.5 12C6.5 15.0376 8.96243 17.5 12 17.5C15.0376 17.5 17.5 15.0376 17.5 12C17.5 8.96243 15.0376 6.5 12 6.5Z" fill="currentColor"/>
                <path d="M4.04688 15.7256C4.40559 15.5185 4.86516 15.6413 5.07227 16C5.27921 16.3587 5.15553 16.8173 4.79688 17.0244L3.49805 17.7744C3.13934 17.9815 2.68072 17.8587 2.47363 17.5C2.2666 17.1413 2.38948 16.6827 2.74805 16.4756L4.04688 15.7256Z" fill="currentColor"/>
                <path d="M18.9277 16C19.1348 15.6413 19.5944 15.5185 19.9531 15.7256L21.252 16.4756C21.6105 16.6827 21.7334 17.1413 21.5264 17.5C21.3193 17.8587 20.8607 17.9814 20.502 17.7744L19.2031 17.0244C18.8445 16.8173 18.7208 16.3587 18.9277 16Z" fill="currentColor"/>
                <path d="M3.25 11.25C3.66421 11.25 4 11.5858 4 12C4 12.4142 3.66421 12.75 3.25 12.75H1.75C1.33579 12.75 1 12.4142 1 12C1 11.5858 1.33579 11.25 1.75 11.25H3.25Z" fill="currentColor"/>
                <path d="M22.25 11.25C22.6642 11.25 23 11.5858 23 12C23 12.4142 22.6642 12.75 22.25 12.75H20.75C20.3358 12.75 20 12.4142 20 12C20 11.5858 20.3358 11.25 20.75 11.25H22.25Z" fill="currentColor"/>
                <path d="M2.47363 6.5C2.68072 6.14132 3.13934 6.01857 3.49805 6.22559L4.79688 6.97559C5.15552 7.18265 5.2792 7.64131 5.07227 8C4.86516 8.35872 4.40559 8.48152 4.04688 8.27441L2.74805 7.52441C2.38949 7.31726 2.26658 6.85865 2.47363 6.5Z" fill="currentColor"/>
                <path d="M20.502 6.22559C20.8607 6.01855 21.3193 6.14131 21.5264 6.5C21.7334 6.85865 21.6105 7.31727 21.252 7.52441L19.9531 8.27441C19.5944 8.48152 19.1348 8.35872 18.9277 8C18.7208 7.64131 18.8445 7.18266 19.2031 6.97559L20.502 6.22559Z" fill="currentColor"/>
                <path d="M6.5 2.47363C6.85866 2.26658 7.31727 2.38947 7.52441 2.74805L8.27441 4.04688C8.48148 4.40552 8.35855 4.86412 8 5.07129C7.64128 5.2784 7.18269 5.15559 6.97559 4.79688L6.22559 3.49805C6.01854 3.13934 6.14131 2.68073 6.5 2.47363Z" fill="currentColor"/>
                <path d="M16.4756 2.74805C16.6827 2.38947 17.1413 2.26658 17.5 2.47363C17.8587 2.68072 17.9815 3.13934 17.7744 3.49805L17.0244 4.79688C16.8173 5.15559 16.3587 5.2784 16 5.07129C15.6414 4.86412 15.5185 4.40552 15.7256 4.04688L16.4756 2.74805Z" fill="currentColor"/>
                <path d="M12 1C12.4142 1 12.75 1.33579 12.75 1.75V3.25C12.75 3.66421 12.4142 4 12 4C11.5858 4 11.25 3.66421 11.25 3.25V1.75C11.25 1.33579 11.5858 1 12 1Z" fill="currentColor"/>
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
            <ZeroState query={query} onHome={() => { setQuery(""); setActiveCategory(ALL); }} />
          ) : (
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(140px, 1fr))", gap: 8 }}>
              {filtered.map((icon) => (
                <IconCard
                  key={icon.id}
                  icon={icon}
                  style={activeStyle}
                  size={iconSize}
                  selected={selectedIcon?.id === icon.id}
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
  const [hovered, setHovered] = useState(false);
  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm text-left w-full"
      style={{
        border: active ? "1.5px solid var(--brand-primary)" : "1px solid transparent",
        color: active ? "var(--text-primary)" : "var(--text-secondary)",
        background: hovered ? "var(--surface-hover)" : "transparent",
        cursor: "pointer",
        transition: "background 150ms, border-color 150ms",
      }}
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
