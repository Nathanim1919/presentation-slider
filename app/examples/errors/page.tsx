"use client";

import { useState } from "react";
import ErrorHandlingExample from "@/components/examples/ErrorHandlingExample";

export default function ErrorsPage() {
  const [variant, setVariant] = useState<"bad" | "good">("bad");

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "var(--space-6)",
        maxWidth: 560,
        width: "100%",
      }}
    >
      <div style={{ textAlign: "center" }}>
        <h1
          style={{
            fontSize: "var(--text-h2)",
            fontWeight: 600,
            color: "var(--text-primary)",
            lineHeight: "var(--leading-snug)",
            marginBottom: "var(--space-3)",
          }}
        >
          Error Handling
        </h1>
        <p
          style={{
            fontSize: "var(--text-body)",
            color: "var(--text-secondary)",
            maxWidth: "40ch",
            margin: "0 auto",
            lineHeight: "var(--leading-normal)",
          }}
        >
          Error messages should explain the problem and tell users what to do
          next. Never blame the user.
        </p>
      </div>

      <div
        role="radiogroup"
        aria-label="Design variant"
        style={{
          display: "flex",
          borderRadius: "var(--radius-full)",
          border: "1px solid var(--border-default)",
          overflow: "hidden",
        }}
      >
        <button
          role="radio"
          aria-checked={variant === "bad"}
          onClick={() => setVariant("bad")}
          style={{
            fontSize: "var(--text-small)",
            fontWeight: 500,
            padding: "var(--space-2) var(--space-5)",
            border: "none",
            cursor: "pointer",
            transition: "all var(--duration-fast) ease",
            background:
              variant === "bad" ? "var(--danger-subtle)" : "transparent",
            color: variant === "bad" ? "var(--danger)" : "var(--text-tertiary)",
          }}
        >
          Bad Error
        </button>
        <button
          role="radio"
          aria-checked={variant === "good"}
          onClick={() => setVariant("good")}
          style={{
            fontSize: "var(--text-small)",
            fontWeight: 500,
            padding: "var(--space-2) var(--space-5)",
            border: "none",
            borderLeft: "1px solid var(--border-default)",
            cursor: "pointer",
            transition: "all var(--duration-fast) ease",
            background:
              variant === "good" ? "var(--success-subtle)" : "transparent",
            color:
              variant === "good" ? "var(--success)" : "var(--text-tertiary)",
          }}
        >
          Good Error
        </button>
      </div>

      <div
        style={{
          padding: "var(--space-7)",
          background: "var(--bg-elevated)",
          borderRadius: "var(--radius-lg)",
          border: "1px solid var(--border-subtle)",
          width: "100%",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <ErrorHandlingExample variant={variant} />
      </div>
    </div>
  );
}
