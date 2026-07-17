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

type Tab = "usage" | "svg";

export function IconDetail({ icon, style, onClose }: IconDetailProps) {
  const [activeTab, setActiveTab]       = useState<Tab>("usage");
  const [copiedKey, setCopiedKey]       = useState<string | null>(null);

  // Reset tab when icon changes
  useEffect(() => { setActiveTab("usage"); }, [icon?.id]);

  // Close on Escape
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  function copy(text: string, key: string) {
    navigator.clipboard.writeText(text).catch(() => {});
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 1800);
  }

  const svgContent = icon ? (icon.svg[style] ?? icon.svg[icon.styles[0]] ?? "") : "";

  // Code snippets — grow naturally as the package is built
  const componentName = icon
    ? icon.id.split("-").map(w => w.charAt(0).toUpperCase() + w.slice(1)).join("")
    : "";

  const snippets = icon ? [
    {
      key: "react",
      label: "React (iqons-react)",
      note: "Coming in Step 3",
      code: `import { ${componentName} } from 'iqons-react'\n\n<${componentName} variant="${style}" size={24} className="text-foreground" />`,
    },
    {
      key: "shadcn",
      label: "ShadCN registry",
      note: "Coming in Step 5",
      code: `npx shadcn add iqons/${icon.id}`,
    },
    {
      key: "svg",
      label: "Raw SVG",
      note: "Available now",
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
              background: "rgba(0,0,0,0.15)",
            }}
          />

          {/* Panel */}
          <motion.aside
            key="panel"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
            style={{
              position: "fixed",
              top: 0,
              right: 0,
              bottom: 0,
              width: 400,
              zIndex: 50,
              background: "var(--background)",
              borderLeft: "1px solid var(--border-default)",
              display: "flex",
              flexDirection: "column",
              overflow: "hidden",
            }}
          >
            {/* Header */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "20px 24px 16px",
                borderBottom: "1px solid var(--border-default)",
                flexShrink: 0,
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                {/* Icon preview */}
                <div
                  style={{
                    width: 48,
                    height: 48,
                    borderRadius: 10,
                    border: "1px solid var(--border-default)",
                    background: "var(--surface-raised)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "var(--icon-fill)",
                    flexShrink: 0,
                  }}
                  dangerouslySetInnerHTML={{
                    __html: svgContent.replace(/<svg /, '<svg width="24" height="24" '),
                  }}
                />
                <div>
                  <h2 style={{ fontSize: 16, fontWeight: 600, color: "var(--text-primary)", margin: 0 }}>
                    {icon.name}
                  </h2>
                  <p style={{ fontSize: 12, color: "var(--text-muted)", margin: 0, marginTop: 2 }}>
                    {CATEGORY_LABELS[icon.category]}
                  </p>
                </div>
              </div>

              {/* Close */}
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
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <path d="M18.293 4.293a1 1 0 0 1 1.414 1.414L13.414 12l6.293 6.293a1 1 0 0 1-1.414 1.414L12 13.414l-6.293 6.293a1 1 0 0 1-1.414-1.414L10.586 12 4.293 5.707a1 1 0 0 1 1.414-1.414L12 10.586l6.293-6.293Z" fill="currentColor"/>
                </svg>
              </button>
            </div>

            {/* Scrollable body */}
            <div style={{ flex: 1, overflowY: "auto", padding: "20px 24px 32px" }}>

              {/* Description */}
              {icon.description && (
                <p style={{ fontSize: 14, color: "var(--text-secondary)", lineHeight: 1.6, margin: "0 0 20px" }}>
                  {icon.description}
                </p>
              )}

              {/* Variants */}
              <Section label="Variants">
                <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                  {icon.styles.map((s) => (
                    <Chip key={s} label={s} />
                  ))}
                </div>
              </Section>

              {/* Keywords */}
              {icon.keywords && icon.keywords.length > 0 && (
                <Section label="Keywords">
                  <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
                    {icon.keywords.map((k) => (
                      <Chip key={k} label={k} />
                    ))}
                  </div>
                </Section>
              )}

              {/* Aliases */}
              {icon.aliases && icon.aliases.length > 0 && (
                <Section label="Aliases">
                  <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
                    {icon.aliases.map((a) => (
                      <Chip key={a} label={a} muted />
                    ))}
                  </div>
                </Section>
              )}

              {/* Divider */}
              <div style={{ borderTop: "1px solid var(--border-default)", margin: "20px 0" }} />

              {/* Usage section */}
              <Section label="Usage">
                {/* Tab bar */}
                <div style={{ display: "flex", gap: 4, marginBottom: 12 }}>
                  {snippets.map((s) => (
                    <button
                      key={s.key}
                      onClick={() => setActiveTab(s.key as Tab)}
                      style={{
                        padding: "5px 12px",
                        borderRadius: 999,
                        border: activeTab === s.key
                          ? "1.5px solid var(--brand-primary)"
                          : "1px solid var(--border-default)",
                        background: "transparent",
                        fontSize: 12,
                        color: activeTab === s.key ? "var(--text-primary)" : "var(--text-secondary)",
                        cursor: "pointer",
                        transition: "border-color 150ms, color 150ms",
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
                      {/* Note badge */}
                      <p style={{ fontSize: 11, color: "var(--text-muted)", marginBottom: 8 }}>
                        {s.note}
                      </p>

                      {/* Code block */}
                      <div style={{ position: "relative" }}>
                        <pre
                          style={{
                            margin: 0,
                            padding: "14px 16px",
                            paddingRight: 48,
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
                            maxHeight: 220,
                            overflowY: "auto",
                          }}
                        >
                          {s.code}
                        </pre>

                        {/* Copy button */}
                        <button
                          onClick={() => copy(s.code, s.key)}
                          title="Copy to clipboard"
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
              </Section>
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}

function Section({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div style={{ marginBottom: 20 }}>
      <p style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--text-muted)", margin: "0 0 8px" }}>
        {label}
      </p>
      {children}
    </div>
  );
}

function Chip({ label, muted }: { label: string; muted?: boolean }) {
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        padding: "3px 10px",
        borderRadius: 999,
        border: "1px solid var(--border-default)",
        background: muted ? "transparent" : "var(--surface-raised)",
        fontSize: 12,
        color: muted ? "var(--text-muted)" : "var(--text-secondary)",
        fontFamily: muted ? "var(--font-mono, monospace)" : "inherit",
      }}
    >
      {label}
    </span>
  );
}
