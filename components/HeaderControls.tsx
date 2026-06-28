"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const outExpo = [0.16, 1, 0.3, 1] as const;

export function HeaderControls() {
  const [dark, setDark] = useState(false);
  const [pressing, setPressing] = useState(false);

  function toggleTheme() {
    if (pressing) return;
    setPressing(true);

    // After press settles, swap icon and apply theme
    setTimeout(() => {
      const next = !dark;
      setDark(next);
      document.documentElement.classList.toggle("dark", next);
      setPressing(false);
    }, 280);
  }

  return (
    <div className="flex items-center gap-2">
      {/* Info button */}
      <NavButton>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="9"/>
          <path d="M12 8h.01"/>
          <path d="M11 12h1v4h1"/>
        </svg>
      </NavButton>

      {/* Theme toggle */}
      <motion.button
        onClick={toggleTheme}
        className="w-9 h-9 rounded-lg flex items-center justify-center"
        style={{
          border: "1px solid var(--border-default)",
          background: "transparent",
          color: "var(--text-secondary)",
          cursor: "pointer",
        }}
        animate={pressing
          ? { scale: 0.88, y: 2 }
          : { scale: 1, y: 0 }
        }
        transition={pressing
          ? { duration: 0.1, ease: "easeIn" }
          : { duration: 0.35, ease: outExpo }
        }
        whileHover={{ borderColor: "var(--border-strong)" }}
        title={dark ? "Switch to light mode" : "Switch to dark mode"}
      >
        {dark ? <MoonIcon /> : <SunIcon />}
      </motion.button>
    </div>
  );
}

function NavButton({ children }: { children: React.ReactNode }) {
  return (
    <button
      className="w-9 h-9 rounded-lg flex items-center justify-center transition-colors"
      style={{
        border: "1px solid var(--border-default)",
        background: "transparent",
        color: "var(--text-secondary)",
        cursor: "pointer",
      }}
      onMouseEnter={(e) => (e.currentTarget.style.borderColor = "var(--border-strong)")}
      onMouseLeave={(e) => (e.currentTarget.style.borderColor = "var(--border-default)")}
    >
      {children}
    </button>
  );
}

function SunIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="4"/>
      <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"/>
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
    </svg>
  );
}
