"use client";

import { useState, useMemo } from "react";
import { icons, CATEGORY_LABELS, ICON_STYLES, STYLE_LABELS } from "@/lib/icons";
import { IconCard } from "./IconCard";
import type { IconCategory, IconStyle } from "@/lib/types";

const ALL = "all";

export function IconBrowser() {
  const [query, setQuery] = useState("");
  const [activeStyle, setActiveStyle] = useState<IconStyle>("outline");
  const [activeCategory, setActiveCategory] = useState<string>(ALL);

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

  const grouped = useMemo(() => {
    if (activeCategory !== ALL) {
      return [[activeCategory, filtered] as [string, typeof filtered]];
    }
    const map = new Map<string, typeof filtered>();
    for (const icon of filtered) {
      const existing = map.get(icon.category) ?? [];
      map.set(icon.category, [...existing, icon]);
    }
    return Array.from(map.entries());
  }, [filtered, activeCategory]);

  const categories = useMemo(() => {
    const seen = new Set(icons.map((i) => i.category));
    return Array.from(seen) as IconCategory[];
  }, []);

  return (
    <div className="flex flex-col gap-0 min-h-0 flex-1">
      {/* Toolbar */}
      <div className="sticky top-0 z-10 flex flex-wrap items-center gap-4 px-8 py-4 border-b border-[var(--border)] bg-[var(--background)]">
        {/* Search */}
        <div className="relative flex-1 min-w-[200px] max-w-xs">
          <svg
            className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[var(--muted-foreground)] pointer-events-none"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="11" cy="11" r="7" />
            <path d="M21 21l-4.35-4.35" />
          </svg>
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search icons…"
            className="w-full pl-9 pr-3 py-2 text-sm rounded-md bg-[var(--surface)] border border-[var(--border)] text-[var(--foreground)] placeholder:text-[var(--muted-foreground)] focus:outline-none focus:border-[var(--accent)] transition-colors"
          />
        </div>

        {/* Style toggle */}
        <div className="flex items-center gap-1 p-1 rounded-md bg-[var(--surface)] border border-[var(--border)]">
          {ICON_STYLES.map((style) => (
            <button
              key={style}
              onClick={() => setActiveStyle(style)}
              className={`px-3 py-1.5 text-xs rounded transition-colors ${
                activeStyle === style
                  ? "bg-[var(--accent)] text-[var(--accent-foreground)]"
                  : "text-[var(--muted-foreground)] hover:text-[var(--foreground)]"
              }`}
            >
              {STYLE_LABELS[style]}
            </button>
          ))}
        </div>

        {/* Category filter */}
        <div className="flex items-center gap-1.5 flex-wrap">
          <button
            onClick={() => setActiveCategory(ALL)}
            className={`px-2.5 py-1 text-xs rounded-full border transition-colors ${
              activeCategory === ALL
                ? "border-[var(--accent)] text-[var(--accent)] bg-[var(--accent)]/10"
                : "border-[var(--border)] text-[var(--muted-foreground)] hover:text-[var(--foreground)] hover:border-[var(--foreground)]/30"
            }`}
          >
            All
          </button>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-2.5 py-1 text-xs rounded-full border transition-colors ${
                activeCategory === cat
                  ? "border-[var(--accent)] text-[var(--accent)] bg-[var(--accent)]/10"
                  : "border-[var(--border)] text-[var(--muted-foreground)] hover:text-[var(--foreground)] hover:border-[var(--foreground)]/30"
              }`}
            >
              {CATEGORY_LABELS[cat]}
            </button>
          ))}
        </div>
      </div>

      {/* Results count */}
      <div className="px-8 py-3 text-xs text-[var(--muted-foreground)]">
        {filtered.length} icon{filtered.length !== 1 ? "s" : ""}
      </div>

      {/* Icon grid, grouped by category */}
      <div className="flex-1 overflow-y-auto px-8 pb-16 flex flex-col gap-10">
        {grouped.length === 0 ? (
          <p className="text-sm text-[var(--muted-foreground)]">No icons match your search.</p>
        ) : (
          grouped.map(([category, categoryIcons]) => (
            <section key={category}>
              <h2 className="text-xs font-semibold uppercase tracking-widest text-[var(--muted-foreground)] mb-4">
                {CATEGORY_LABELS[category as IconCategory] ?? category}
                <span className="ml-2 font-normal normal-case tracking-normal">
                  ({categoryIcons.length})
                </span>
              </h2>
              <div className="grid gap-2 grid-cols-[repeat(auto-fill,minmax(88px,1fr))]">
                {categoryIcons.map((icon) => (
                  <IconCard key={icon.id} icon={icon} style={activeStyle} />
                ))}
              </div>
            </section>
          ))
        )}
      </div>
    </div>
  );
}
