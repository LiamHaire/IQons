import Link from "next/link";
import { IconBrowser } from "@/components/IconBrowser";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Browse Icons — IQons",
};

export default function IconsPage() {
  return (
    <div className="flex flex-col h-screen">
      {/* Nav */}
      <nav className="flex items-center justify-between px-8 py-4 border-b border-[var(--border)] shrink-0">
        <Link
          href="/"
          className="text-xl font-semibold tracking-tight hover:opacity-80 transition-opacity"
        >
          IQ<span className="text-[var(--accent)]">ons</span>
        </Link>
        <span className="text-xs text-[var(--muted-foreground)]">Icon Library</span>
      </nav>

      {/* Browser — client component handles all state */}
      <IconBrowser />
    </div>
  );
}
