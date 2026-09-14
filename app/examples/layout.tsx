import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Interactive Example — UI/UX Presentation",
  description: "A standalone interactive demonstration of a UI/UX design principle.",
};

import ThemeToggle from "@/components/ui/ThemeToggle";

export default function ExamplesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      style={{
        minHeight: "100dvh",
        display: "flex",
        flexDirection: "column",
        background: "var(--bg-primary)",
        overflow: "auto",
      }}
      className="allow-scroll"
    >
      {/* Top bar */}
      <header
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "var(--space-3) var(--space-6)",
          borderBottom: "1px solid var(--border-subtle)",
          flexShrink: 0,
        }}
      >
        <span
          style={{
            fontSize: "var(--text-caption)",
            color: "var(--text-tertiary)",
          }}
        >
          UI/UX Presentation — Interactive Example
        </span>
        <div style={{ display: "flex", alignItems: "center", gap: "var(--space-4)" }}>
          <ThemeToggle />
          <a
            href="/"
            style={{
              fontSize: "var(--text-caption)",
              color: "var(--accent-text)",
              textDecoration: "none",
              display: "flex",
              alignItems: "center",
              gap: "var(--space-2)",
            }}
          >
            ← Back to presentation
          </a>
        </div>
      </header>

      {/* Content */}
      <main
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "var(--space-8) var(--space-6)",
        }}
      >
        {children}
      </main>
    </div>
  );
}
