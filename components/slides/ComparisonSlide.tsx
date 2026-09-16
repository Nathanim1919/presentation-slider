'use client';

import type { ComparisonContent, ComparisonSide } from '@/lib/types';

interface ComparisonSlideProps {
  content: ComparisonContent;
}

export default function ComparisonSlide({ content }: ComparisonSlideProps) {
  const { left, right, connectorLabel, heading } = content;

  const toneColor = (tone?: 'neutral' | 'positive' | 'negative', fallback: 'negative' | 'positive' = 'neutral' as any) => {
    const effective = tone || fallback;
    if (effective === 'positive') return 'var(--success)';
    if (effective === 'negative') return 'var(--danger)';
    return 'var(--accent)';
  };

  const renderSide = (side: ComparisonSide, defaultTone: 'negative' | 'positive', staggerClass: string) => {
    const items = side.points || side.items || [];
    const color = toneColor(side.tone, defaultTone);

    return (
      <div
        className={`${staggerClass} slide-active flex flex-1 flex-col`}
        style={{
          padding: 'var(--space-6)',
          background: 'var(--bg-elevated)',
          borderRadius: 'var(--radius-md)',
          border: '1px solid var(--border-subtle)',
        }}
      >
        <span
          style={{
            fontSize: 'var(--text-label)',
            fontWeight: 600,
            letterSpacing: '0.08em',
            textTransform: 'uppercase' as const,
            color,
            marginBottom: 'var(--space-3)',
          }}
        >
          {side.label}
        </span>
        {side.heading && (
          <h3
            style={{
              fontSize: 'var(--text-h3)',
              fontWeight: 600,
              color: 'var(--text-primary)',
              lineHeight: 'var(--leading-snug)',
              marginBottom: 'var(--space-5)',
            }}
          >
            {side.heading}
          </h3>
        )}
        <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
          {items.map((point, i) => (
            <li
              key={i}
              style={{
                fontSize: 'var(--text-small)',
                lineHeight: 'var(--leading-normal)',
                color: 'var(--text-secondary)',
                padding: 'var(--space-2) 0',
                display: 'flex',
                alignItems: 'flex-start',
                gap: 'var(--space-3)',
              }}
            >
              <span
                style={{
                  width: 5,
                  height: 5,
                  borderRadius: 'var(--radius-full)',
                  background: color,
                  flexShrink: 0,
                  marginTop: 7,
                  opacity: 0.8,
                }}
                aria-hidden="true"
              />
              {point}
            </li>
          ))}
        </ul>
      </div>
    );
  };

  return (
    <article className="slide-article flex flex-1 flex-col items-center justify-center px-8 py-6">
      {heading && (
        <h2
          className="stagger-1 slide-active text-center"
          style={{
            fontSize: 'var(--text-h2)',
            fontWeight: 600,
            color: 'var(--text-primary)',
            letterSpacing: '-0.02em',
            lineHeight: 'var(--leading-snug)',
            marginBottom: 'var(--space-7)',
            maxWidth: '32ch',
          }}
        >
          {heading}
        </h2>
      )}

      <div
        className="slide-columns flex w-full items-stretch gap-6"
        style={{ maxWidth: 900 }}
      >
        {/* Left panel */}
        {renderSide(left, 'negative', 'stagger-2')}

        {/* Connector */}
        {connectorLabel && (
          <div
            className="slide-connector stagger-3 slide-active flex flex-col items-center justify-center"
            style={{ width: 48 }}
          >
            <div
              style={{
                flex: 1,
                width: 1,
                background: 'var(--border-default)',
              }}
            />
            <span
              style={{
                fontSize: 'var(--text-label)',
                fontWeight: 600,
                color: 'var(--text-tertiary)',
                textTransform: 'uppercase' as const,
                letterSpacing: '0.1em',
                padding: 'var(--space-3) 0',
              }}
            >
              {connectorLabel}
            </span>
            <div
              style={{
                flex: 1,
                width: 1,
                background: 'var(--border-default)',
              }}
            />
          </div>
        )}

        {/* Right panel */}
        {renderSide(right, 'positive', 'stagger-4')}
      </div>
    </article>
  );
}
