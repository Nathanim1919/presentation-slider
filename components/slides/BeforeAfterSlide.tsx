'use client';

import type { BeforeAfterContent } from '@/lib/types';

interface BeforeAfterSlideProps {
  content: BeforeAfterContent;
}

export default function BeforeAfterSlide({ content }: BeforeAfterSlideProps) {
  const beforeItems = content.before.issues || content.before.items || [];
  const afterItems = content.after.improvements || content.after.items || [];

  return (
    <article className="slide-article flex flex-1 flex-col items-center justify-center px-8 py-6">
      {content.heading && (
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
          {content.heading}
        </h2>
      )}

      <div className="slide-columns flex w-full items-stretch gap-6" style={{ maxWidth: 850 }}>
        {/* Before */}
        <div
          className="stagger-2 slide-active flex flex-1 flex-col"
          style={{
            padding: 'var(--space-6)',
            background: 'var(--danger-subtle)',
            borderRadius: 'var(--radius-md)',
            border: '1px solid rgba(248, 113, 113, 0.15)',
          }}
        >
          <span
            style={{
              fontSize: 'var(--text-label)',
              fontWeight: 600,
              letterSpacing: '0.08em',
              textTransform: 'uppercase' as const,
              color: 'var(--danger)',
              marginBottom: 'var(--space-3)',
            }}
          >
            {content.before.label}
          </span>
          {content.before.description && (
            <p
              style={{
                fontSize: 'var(--text-small)',
                color: 'var(--text-secondary)',
                lineHeight: 'var(--leading-normal)',
                marginBottom: 'var(--space-4)',
              }}
            >
              {content.before.description}
            </p>
          )}
          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            {beforeItems.map((issue, i) => (
              <li
                key={i}
                style={{
                  fontSize: 'var(--text-caption)',
                  color: 'var(--text-secondary)',
                  padding: 'var(--space-2) 0',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 'var(--space-2)',
                }}
              >
                <span style={{ color: 'var(--danger)', fontSize: '0.75em' }} aria-hidden="true">
                  ✕
                </span>
                {issue}
              </li>
            ))}
          </ul>
        </div>

        {/* Arrow */}
        <div className="slide-connector stagger-3 slide-active flex flex-col items-center justify-center">
          <span
            style={{
              fontSize: 'var(--text-h3)',
              color: 'var(--text-tertiary)',
            }}
            aria-hidden="true"
          >
            →
          </span>
        </div>

        {/* After */}
        <div
          className="stagger-4 slide-active flex flex-1 flex-col"
          style={{
            padding: 'var(--space-6)',
            background: 'var(--success-subtle)',
            borderRadius: 'var(--radius-md)',
            border: '1px solid rgba(74, 222, 128, 0.15)',
          }}
        >
          <span
            style={{
              fontSize: 'var(--text-label)',
              fontWeight: 600,
              letterSpacing: '0.08em',
              textTransform: 'uppercase' as const,
              color: 'var(--success)',
              marginBottom: 'var(--space-3)',
            }}
          >
            {content.after.label}
          </span>
          {content.after.description && (
            <p
              style={{
                fontSize: 'var(--text-small)',
                color: 'var(--text-secondary)',
                lineHeight: 'var(--leading-normal)',
                marginBottom: 'var(--space-4)',
              }}
            >
              {content.after.description}
            </p>
          )}
          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            {afterItems.map((improvement, i) => (
              <li
                key={i}
                style={{
                  fontSize: 'var(--text-caption)',
                  color: 'var(--text-secondary)',
                  padding: 'var(--space-2) 0',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 'var(--space-2)',
                }}
              >
                <span style={{ color: 'var(--success)', fontSize: '0.75em' }} aria-hidden="true">
                  ✓
                </span>
                {improvement}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </article>
  );
}
