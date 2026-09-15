'use client';

import { useState } from 'react';
import type { JourneyContent } from '@/lib/types';

interface JourneySlideProps {
  content: JourneyContent;
}

export default function JourneySlide({ content }: JourneySlideProps) {
  const [focusedId, setFocusedId] = useState<string | null>(null);
  const frictionMode = content.mode === 'friction';

  return (
    <article
      className="flex flex-1 flex-col px-8 py-5"
      style={{ gap: 'var(--space-5)' }}
    >
      {/* ── Header ─────────────────────────────────────────── */}
      <div className="stagger-1 slide-active">
        {content.product && (
          <span
            style={{
              display: 'block',
              fontSize: 'var(--text-label)',
              fontWeight: 600,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              color: frictionMode ? 'var(--danger)' : 'var(--accent-text)',
              marginBottom: 'var(--space-2)',
            }}
          >
            {content.product}
          </span>
        )}
        <h2
          style={{
            fontSize: 'var(--text-h2)',
            fontWeight: 600,
            color: 'var(--text-primary)',
            letterSpacing: '-0.025em',
            lineHeight: 'var(--leading-snug)',
            margin: 0,
          }}
        >
          {content.heading}
        </h2>
        {content.context && (
          <p
            style={{
              fontSize: 'var(--text-small)',
              color: 'var(--text-tertiary)',
              marginTop: 'var(--space-2)',
            }}
          >
            {content.context}
          </p>
        )}
      </div>

      {/* ── Journey steps grid ─────────────────────────────── */}
      <div
        className="stagger-2 slide-active flex flex-1 items-center"
        style={{ minHeight: 0 }}
      >
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: 'var(--space-3)',
            width: '100%',
          }}
        >
          {content.steps.map((step, i) => {
            const isFriction = frictionMode && !!step.isFriction;
            const isFocused  = focusedId === step.id;

            return (
              <div
                key={step.id}
                onClick={() =>
                  isFriction && setFocusedId(isFocused ? null : step.id)
                }
                style={{
                  flex: '1 1 calc(20% - 12px)',
                  minWidth: 120,
                  maxWidth: 200,
                  padding: 'var(--space-4)',
                  background: isFriction
                    ? 'var(--danger-subtle)'
                    : 'var(--bg-elevated)',
                  border: `1px solid ${
                    isFocused
                      ? 'var(--danger)'
                      : isFriction
                      ? 'var(--danger-border)'
                      : 'var(--border-subtle)'
                  }`,
                  borderRadius: 'var(--radius-md)',
                  cursor: isFriction ? 'pointer' : 'default',
                  transition: 'all var(--duration-fast) ease',
                  position: 'relative',
                  transform: isFocused ? 'scale(1.02)' : 'none',
                }}
              >
                {/* Step number */}
                <span
                  style={{
                    display: 'block',
                    fontSize: 'var(--text-caption)',
                    fontWeight: 700,
                    color: isFriction ? 'var(--danger)' : 'var(--text-tertiary)',
                    letterSpacing: '0.05em',
                    marginBottom: 'var(--space-1)',
                  }}
                >
                  {String(i + 1).padStart(2, '0')}
                </span>

                {/* Step label */}
                <span
                  style={{
                    display: 'block',
                    fontSize: 'var(--text-small)',
                    fontWeight: 600,
                    color: isFriction ? 'var(--danger)' : 'var(--text-primary)',
                    lineHeight: 'var(--leading-snug)',
                    marginBottom: 'var(--space-1)',
                  }}
                >
                  {step.label}
                </span>

                {/* User question */}
                <span
                  style={{
                    display: 'block',
                    fontSize: 'var(--text-caption)',
                    color: 'var(--text-tertiary)',
                    lineHeight: 'var(--leading-snug)',
                    fontStyle: 'italic',
                  }}
                >
                  &ldquo;{step.question}&rdquo;
                </span>

                {/* Friction warning icon */}
                {isFriction && (
                  <span
                    aria-hidden="true"
                    style={{
                      position: 'absolute',
                      top: 8,
                      right: 8,
                      fontSize: 12,
                      color: 'var(--danger)',
                    }}
                  >
                    ⚠
                  </span>
                )}

                {/* Friction tooltip */}
                {isFriction && isFocused && step.frictionDetail && (
                  <div
                    style={{
                      position: 'absolute',
                      bottom: 'calc(100% + 8px)',
                      left: '50%',
                      transform: 'translateX(-50%)',
                      background: 'var(--bg-surface)',
                      border: '1px solid var(--danger-border)',
                      borderRadius: 'var(--radius-md)',
                      padding: 'var(--space-3) var(--space-4)',
                      fontSize: 'var(--text-caption)',
                      color: 'var(--danger)',
                      whiteSpace: 'nowrap',
                      zIndex: 20,
                      boxShadow: 'var(--shadow-md)',
                    }}
                  >
                    {step.frictionDetail}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* ── Insight banner ─────────────────────────────────── */}
      {content.insight && (
        <div
          className="stagger-3 slide-active"
          style={{
            padding: 'var(--space-4) var(--space-5)',
            background: frictionMode
              ? 'var(--danger-subtle)'
              : 'var(--accent-subtle)',
            border: `1px solid ${frictionMode ? 'var(--danger-border)' : 'rgba(232,115,74,.2)'}`,
            borderRadius: 'var(--radius-md)',
          }}
        >
          {content.insightLabel && (
            <span
              style={{
                fontSize: 'var(--text-caption)',
                fontWeight: 600,
                color: frictionMode ? 'var(--danger)' : 'var(--accent-text)',
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                display: 'block',
                marginBottom: 'var(--space-1)',
              }}
            >
              {content.insightLabel}
            </span>
          )}
          <p
            style={{
              fontSize: 'var(--text-body)',
              fontWeight: 600,
              color: 'var(--text-primary)',
              margin: 0,
              letterSpacing: '-0.01em',
              lineHeight: 'var(--leading-snug)',
            }}
          >
            {content.insight}
          </p>
        </div>
      )}

      {frictionMode && (
        <p
          style={{
            fontSize: 'var(--text-caption)',
            color: 'var(--text-tertiary)',
            textAlign: 'center',
            margin: 0,
          }}
        >
          Click an orange step to see the friction detail.
        </p>
      )}
    </article>
  );
}
