"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CATEGORY_LABELS } from "@/lib/icons";
import type { Icon, IconStyle } from "@/lib/types";

interface IconDetailProps {
  icon: Icon | null;
  style: IconStyle;
  onClose: () => void;
}

type Tab = "react" | "shadcn" | "svg";

const STYLE_DISPLAY: Record<IconStyle, string> = {
  outline: "Outline",
  filled:  "Fill",
  duotone: "Duo-tone",
  thin:    "Thin",
};

export function IconDetail({ icon, style, onClose }: IconDetailProps) {
  const [activeTab,     setActiveTab]     = useState<Tab>("react");
  const [activeVariant, setActiveVariant] = useState<IconStyle>(style);
  const [copiedKey,     setCopiedKey]     = useState<string | null>(null);

  // Sync variant when icon or global style changes
  useEffect(() => {
    if (!icon) return;
    setActiveTab("react");
    const initial = icon.styles.includes(style) ? style : (icon.styles[0] as IconStyle);
    setActiveVariant(initial);
  }, [icon?.id, style]);

  // Close on Escape
  useEffect(() => {
    function onKey(e: KeyboardEvent) { if (e.key === "Escape") onClose(); }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  function copy(text: string, key: string) {
    navigator.clipboard.writeText(text).catch(() => {});
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 1800);
  }

  const svgContent = icon
    ? (icon.svg[activeVariant] ?? icon.svg[icon.styles[0] as IconStyle] ?? "")
    : "";

  const componentName = icon
    ? icon.id.split("-").map(w => w.charAt(0).toUpperCase() + w.slice(1)).join("")
    : "";

  const snippets = icon ? [
    {
      key: "react" as Tab,
      label: "React",
      note: "Coming in Step 3 — iqons-react package",
      code: `import { ${componentName} } from 'iqons-react'\n\n<${componentName} variant="${activeVariant}" size={24} className="text-foreground" />`,
    },
    {
      key: "shadcn" as Tab,
      label: "ShadCN",
      note: "Coming in Step 5 — ShadCN registry",
      code: `npx shadcn add iqons/${icon.id}`,
    },
    {
      key: "svg" as Tab,
      label: "Raw SVG",
      note: "Available now — copy and paste directly",
      code: svgContent,
    },
  ] : [];

  return (
    <AnimatePresence>
      {icon && (
        <>
          {/* Backdrop */}
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.18 }}
            onClick={onClose}
            style={{
              position: "fixed",
              inset: 0,
              zIndex: 40,
              background: "rgba(0,0,0,0.4)",
              backdropFilter: "blur(2px)",
            }}
          />

          {/* Modal */}
          <motion.div
            key="modal"
            initial={{ opacity: 0, scale: 0.96, y: 8 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 8 }}
            transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
            style={{
              position: "fixed",
              inset: 0,
              zIndex: 50,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              pointerEvents: "none",
            }}
          >
            <div
              style={{
                width: 560,
                maxWidth: "calc(100vw - 48px)",
                maxHeight: "calc(100vh - 80px)",
                background: "var(--background)",
                border: "1px solid var(--border-default)",
                borderRadius: 16,
                boxShadow: "0 24px 64px rgba(0,0,0,0.18), 0 4px 16px rgba(0,0,0,0.08)",
                display: "flex",
                flexDirection: "column",
                overflow: "hidden",
                pointerEvents: "all",
              }}
            >
              {/* ── Header ── */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 16,
                  padding: "20px 20px 16px",
                  borderBottom: "1px solid var(--border-default)",
                  flexShrink: 0,
                }}
              >
                {/* Close button — top left */}
                <button
                  onClick={onClose}
                  style={{
                    width: 32,
                    height: 32,
                    borderRadius: 8,
                    border: "1px solid var(--border-default)",
                    background: "transparent",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "var(--text-muted)",
                    flexShrink: 0,
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "var(--surface-hover)";
                    e.currentTarget.style.color = "var(--text-primary)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "transparent";
                    e.currentTarget.style.color = "var(--text-muted)";
                  }}
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                    <path d="M18.293 4.293a1 1 0 0 1 1.414 1.414L13.414 12l6.293 6.293a1 1 0 0 1-1.414 1.414L12 13.414l-6.293 6.293a1 1 0 0 1-1.414-1.414L10.586 12 4.293 5.707a1 1 0 0 1 1.414-1.414L12 10.586l6.293-6.293Z" fill="currentColor"/>
                  </svg>
                </button>

                {/* Icon name + category */}
                <div style={{ flex: 1, minWidth: 0 }}>
                  <h2 style={{ fontSize: 16, fontWeight: 600, color: "var(--text-primary)", margin: 0 }}>
                    {icon.name}
                  </h2>
                  <p style={{ fontSize: 12, color: "var(--text-muted)", margin: "2px 0 0" }}>
                    {CATEGORY_LABELS[icon.category]}
                  </p>
                </div>
              </div>

              {/* ── Body ── */}
              <div style={{ flex: 1, overflowY: "auto", display: "flex", flexDirection: "column" }}>

                {/* Preview + meta row */}
                <div style={{ display: "flex", gap: 0, borderBottom: "1px solid var(--border-default)" }}>

                  {/* Icon preview */}
                  <div
                    style={{
                      width: 160,
                      flexShrink: 0,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      borderRight: "1px solid var(--border-default)",
                      background: "var(--surface-raised)",
                      padding: "32px 0",
                    }}
                  >
                    <span
                      style={{ color: "var(--icon-fill)", display: "flex", alignItems: "center", justifyContent: "center" }}
                      dangerouslySetInnerHTML={{
                        __html: svgContent.replace(/<svg /, '<svg width="64" height="64" '),
                      }}
                    />
                  </div>

                  {/* Meta */}
                  <div style={{ flex: 1, padding: "20px 24px", display: "flex", flexDirection: "column", gap: 16 }}>

                    {/* Description */}
                    {icon.description && (
                      <p style={{ fontSize: 13, color: "var(--text-secondary)", lineHeight: 1.6, margin: 0 }}>
                        {icon.description}
                      </p>
                    )}

                    {/* Variants — clickable */}
                    <div>
                      <Label>Variants</Label>
                      <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginTop: 6 }}>
                        {icon.styles.map((s) => {
                          const active = s === activeVariant;
                          return (
                            <button
                              key={s}
                              onClick={() => setActiveVariant(s as IconStyle)}
                              style={{
                                padding: "4px 12px",
                                borderRadius: 999,
                                border: active
                                  ? "1.5px solid var(--brand-primary)"
                                  : "1px solid var(--border-default)",
                                background: active ? "var(--brand-primary-soft, var(--surface-hover))" : "transparent",
                                fontSize: 12,
                                color: active ? "var(--brand-primary)" : "var(--text-secondary)",
                                cursor: "pointer",
                                transition: "all 150ms",
                                fontWeight: active ? 500 : 400,
                              }}
                              onMouseEnter={(e) => {
                                if (!active) e.currentTarget.style.background = "var(--surface-hover)";
                              }}
                              onMouseLeave={(e) => {
                                if (!active) e.currentTarget.style.background = "transparent";
                              }}
                            >
                              {STYLE_DISPLAY[s as IconStyle] ?? s}
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* Keywords */}
                    {icon.keywords && icon.keywords.length > 0 && (
                      <div>
                        <Label>Keywords</Label>
                        <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginTop: 6 }}>
                          {icon.keywords.map((k) => <Chip key={k} label={k} />)}
                        </div>
                      </div>
                    )}

                    {/* Aliases */}
                    {icon.aliases && icon.aliases.length > 0 && (
                      <div>
                        <Label>Aliases</Label>
                        <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginTop: 6 }}>
                          {icon.aliases.map((a) => <Chip key={a} label={a} mono />)}
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* Usage section */}
                <div style={{ padding: "20px 24px 24px" }}>
                  <Label>Usage</Label>

                  {/* Tab bar */}
                  <div style={{ display: "flex", gap: 4, margin: "10px 0 12px" }}>
                    {snippets.map((s) => (
                      <button
                        key={s.key}
                        onClick={() => setActiveTab(s.key)}
                        style={{
                          padding: "5px 14px",
                          borderRadius: 999,
                          border: activeTab === s.key
                            ? "1.5px solid var(--brand-primary)"
                            : "1px solid var(--border-default)",
                          background: "transparent",
                          fontSize: 12,
                          color: activeTab === s.key ? "var(--text-primary)" : "var(--text-secondary)",
                          cursor: "pointer",
                          transition: "border-color 150ms, color 150ms",
                          fontWeight: activeTab === s.key ? 500 : 400,
                        }}
                      >
                        {s.label}
                      </button>
                    ))}
                  </div>

                  {snippets.map((s) => {
                    if (s.key !== activeTab) return null;
                    return (
                      <div key={s.key}>
                        <p style={{ fontSize: 11, color: "var(--text-muted)", marginBottom: 8 }}>
                          {s.note}
                        </p>
                        <div style={{ position: "relative" }}>
                          <pre
                            style={{
                              margin: 0,
                              padding: "14px 48px 14px 16px",
                              borderRadius: 10,
                              border: "1px solid var(--border-default)",
                              background: "var(--surface-raised)",
                              fontSize: 12,
                              fontFamily: "var(--font-mono, monospace)",
                              color: "var(--text-primary)",
                              overflowX: "auto",
                              whiteSpace: "pre-wrap",
                              wordBreak: "break-all",
                              lineHeight: 1.6,
                              maxHeight: 180,
                              overflowY: "auto",
                            }}
                          >
                            {s.code}
                          </pre>
                          <button
                            onClick={() => copy(s.code, s.key)}
                            title="Copy"
                            style={{
                              position: "absolute",
                              top: 10,
                              right: 10,
                              width: 28,
                              height: 28,
                              borderRadius: 6,
                              border: "1px solid var(--border-default)",
                              background: "var(--background)",
                              cursor: "pointer",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              color: copiedKey === s.key ? "var(--brand-primary)" : "var(--text-muted)",
                              transition: "color 150ms, background 150ms",
                            }}
                            onMouseEnter={(e) => { e.currentTarget.style.background = "var(--surface-hover)"; }}
                            onMouseLeave={(e) => { e.currentTarget.style.background = "var(--background)"; }}
                          >
                            {copiedKey === s.key ? (
                              <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                                <path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                              </svg>
                            ) : (
                              <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                                <rect x="8" y="8" width="12" height="14" rx="2" stroke="currentColor" strokeWidth="1.5"/>
                                <path d="M16 8V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                              </svg>
                            )}
                          </button>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

function Label({ children }: { children: React.ReactNode }) {
  return (
    <p style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--text-muted)", margin: 0 }}>
      {children}
    </p>
  );
}

function Chip({ label, mono }: { label: string; mono?: boolean }) {
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        padding: "3px 10px",
        borderRadius: 999,
        border: "1px solid var(--border-default)",
        background: "var(--surface-raised)",
        fontSize: 12,
        color: mono ? "var(--text-muted)" : "var(--text-secondary)",
        fontFamily: mono ? "var(--font-mono, monospace)" : "inherit",
      }}
    >
      {label}
    </span>
  );
}
