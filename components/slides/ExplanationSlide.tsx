'use client';

import type { ExplanationContent } from '@/lib/types';

interface ExplanationSlideProps {
  content: ExplanationContent;
}

export default function ExplanationSlide({ content }: ExplanationSlideProps) {
  const hasVisual = content.visual && content.visual.type === 'list' && content.visual.items;

  return (
    <article
      className="flex flex-1 gap-12 px-8 py-6"
      style={{
        alignItems: 'flex-start',
      }}
    >
      {/* Main content */}
      <div className="flex flex-1 flex-col" style={{ minWidth: 0 }}>
        <h2
          className="stagger-1 slide-active"
          style={{
            fontSize: 'var(--text-h2)',
            fontWeight: 600,
            lineHeight: 'var(--leading-snug)',
            color: 'var(--text-primary)',
            letterSpacing: '-0.02em',
            marginBottom: 'var(--space-6)',
            maxWidth: '28ch',
          }}
        >
          {content.heading}
        </h2>

        <div className="flex flex-col" style={{ gap: 'var(--space-4)' }}>
          {content.body.map((paragraph, i) => (
            <p
              key={i}
              className={`stagger-${Math.min(i + 2, 5)} slide-active`}
              style={{
                fontSize: 'var(--text-body)',
                lineHeight: 'var(--leading-relaxed)',
                color: 'var(--text-secondary)',
                maxWidth: '55ch',
                margin: 0,
              }}
            >
              {paragraph}
            </p>
          ))}
        </div>
      </div>

      {/* Side visual */}
      {hasVisual && (
        <aside
          className="stagger-3 slide-active"
          style={{
            width: '280px',
            flexShrink: 0,
            padding: 'var(--space-5)',
            background: 'var(--bg-elevated)',
            borderRadius: 'var(--radius-md)',
            border: '1px solid var(--border-subtle)',
          }}
        >
          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            {content.visual!.items!.map((item, i) => (
              <li
                key={i}
                style={{
                  fontSize: 'var(--text-small)',
                  lineHeight: 'var(--leading-normal)',
                  color: 'var(--text-secondary)',
                  padding: 'var(--space-3) 0',
                  borderBottom:
                    i < content.visual!.items!.length - 1
                      ? '1px solid var(--border-subtle)'
                      : 'none',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 'var(--space-3)',
                }}
              >
                <span
                  style={{
                    width: 6,
                    height: 6,
                    borderRadius: 'var(--radius-full)',
                    background: 'var(--accent)',
                    flexShrink: 0,
                  }}
                  aria-hidden="true"
                />
                {item}
              </li>
            ))}
          </ul>
        </aside>
      )}
    </article>
  );
}
