import Link from "next/link";

export default function HomePage() {
  return (
    <main className="flex flex-col min-h-screen">
      {/* Nav */}
      <nav className="flex items-center justify-between px-8 py-5 border-b border-[var(--border)]">
        <span className="text-xl font-semibold tracking-tight">
          IQ<span className="text-[var(--accent)]">ons</span>
        </span>
        <Link
          href="/icons"
          className="text-sm text-[var(--muted-foreground)] hover:text-[var(--foreground)] transition-colors"
        >
          Browse icons →
        </Link>
      </nav>

      {/* Hero — designs to follow */}
      <section className="flex flex-col items-center justify-center flex-1 px-8 text-center gap-6">
        <h1 className="text-7xl font-bold tracking-tight leading-none">
          IQ<span className="text-[var(--accent)]">ons</span>
        </h1>
        <p className="text-lg text-[var(--muted-foreground)] max-w-md">
          A thoughtfully crafted icon library. Multiple styles, every category.
        </p>
        <Link
          href="/icons"
          className="mt-2 inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-[var(--accent)] text-[var(--accent-foreground)] text-sm font-medium hover:opacity-90 transition-opacity"
        >
          Browse icons
        </Link>
      </section>
    </main>
  );
}
