'use client';

import type { ProductTeardownContent } from '@/lib/types';

interface ProductTeardownSlideProps {
  content: ProductTeardownContent;
}

export default function ProductTeardownSlide({ content }: ProductTeardownSlideProps) {
  return (
    <article className="flex flex-1 items-center justify-center px-8 py-6">
      <div style={{ maxWidth: 750, width: '100%' }}>
        {/* Label */}
        <span
          className="stagger-1 slide-active"
          style={{
            fontSize: 'var(--text-label)',
            fontWeight: 600,
            letterSpacing: '0.08em',
            textTransform: 'uppercase' as const,
            color: 'var(--accent-text)',
            display: 'block',
            marginBottom: 'var(--space-3)',
          }}
        >
          Product Teardown
        </span>

        <h2
          className="stagger-1 slide-active"
          style={{
            fontSize: 'var(--text-h3)',
            fontWeight: 600,
            color: 'var(--text-primary)',
            lineHeight: 'var(--leading-snug)',
            marginBottom: 'var(--space-3)',
          }}
        >
          {content.heading}
        </h2>

        <p
          className="stagger-2 slide-active"
          style={{
            fontSize: 'var(--text-small)',
            color: 'var(--text-secondary)',
            lineHeight: 'var(--leading-normal)',
            marginBottom: 'var(--space-6)',
            maxWidth: '55ch',
          }}
        >
          {content.description}
        </p>

        {/* Observations */}
        <div
          className="stagger-3 slide-active"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: 'var(--space-3)',
          }}
        >
          {content.observations.map((observation, i) => (
            <div
              key={i}
              style={{
                padding: 'var(--space-4)',
                background: 'var(--bg-elevated)',
                borderRadius: 'var(--radius-md)',
                border: '1px solid var(--border-subtle)',
                display: 'flex',
                alignItems: 'flex-start',
                gap: 'var(--space-3)',
              }}
            >
              <span
                style={{
                  width: 24,
                  height: 24,
                  borderRadius: 'var(--radius-full)',
                  background: 'var(--accent-subtle)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: 'var(--text-caption)',
                  fontWeight: 600,
                  color: 'var(--accent-text)',
                  flexShrink: 0,
                }}
              >
                {i + 1}
              </span>
              <p
                style={{
                  fontSize: 'var(--text-caption)',
                  lineHeight: 'var(--leading-normal)',
                  color: 'var(--text-secondary)',
                  margin: 0,
                }}
              >
                {observation}
              </p>
            </div>
          ))}
        </div>
      </div>
    </article>
  );
}
