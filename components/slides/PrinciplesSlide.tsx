'use client';

import type { PrinciplesContent } from '@/lib/types';

interface PrinciplesSlideProps {
  content: PrinciplesContent;
}

export default function PrinciplesSlide({ content }: PrinciplesSlideProps) {
  return (
    <article
      className="flex flex-1 flex-col items-center justify-center px-8 py-6 text-center"
      style={{ width: '100%', height: '100%' }}
    >
      <div
        style={{
          maxWidth: 820,
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        {/* Eyebrow */}
        <span
          className="stagger-1 slide-active"
          style={{
            fontSize: 'var(--text-label)',
            fontWeight: 600,
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            color: 'var(--accent-text)',
            display: 'inline-block',
            marginBottom: 'var(--space-2)',
          }}
        >
          {content.eyebrow || 'GOOD DESIGN vs BAD DESIGN'}
        </span>

        {/* Title */}
        <h2
          className="stagger-2 slide-active"
          style={{
            fontSize: 'var(--text-h2)',
            fontWeight: 700,
            color: 'var(--text-primary)',
            letterSpacing: '-0.025em',
            margin: '0 0 var(--space-3)',
            lineHeight: 'var(--leading-tight)',
          }}
        >
          {content.heading}
        </h2>

        {/* Main Statement */}
        <p
          className="stagger-2 slide-active"
          style={{
            fontSize: 'clamp(1.125rem, 1.8vw, 1.375rem)',
            fontWeight: 500,
            color: 'var(--text-primary)',
            lineHeight: 'var(--leading-snug)',
            maxWidth: '44ch',
            margin: '0 0 var(--space-7)',
          }}
        >
          "{content.statement}"
        </p>

        {/* Principles Grid (Not decorative cards — clean, hairline editorial grid) */}
        <div
          className="stagger-3 slide-active"
          style={{
            width: '100%',
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: 'var(--space-5) var(--space-6)',
            textAlign: 'left',
            padding: 'var(--space-6) var(--space-7)',
            borderTop: '1px solid var(--border-subtle)',
            borderBottom: '1px solid var(--border-subtle)',
            marginBottom: 'var(--space-6)',
          }}
        >
          {content.principles.map((item, idx) => (
            <div key={idx} style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
              <span
                style={{
                  fontSize: 'var(--text-label)',
                  fontWeight: 700,
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  color: 'var(--text-primary)',
                }}
              >
                {item.title}
              </span>
              <span
                style={{
                  fontSize: 'var(--text-small)',
                  color: 'var(--text-secondary)',
                  lineHeight: 'var(--leading-normal)',
                }}
              >
                {item.description}
              </span>
            </div>
          ))}
        </div>

        {/* Closing Note / Presenter Takeaway */}
        {content.closingNote && (
          <p
            className="stagger-4 slide-active"
            style={{
              fontSize: 'var(--text-small)',
              color: 'var(--text-tertiary)',
              margin: 0,
              maxWidth: '52ch',
              lineHeight: 'var(--leading-normal)',
            }}
          >
            {content.closingNote}
          </p>
        )}
      </div>
    </article>
  );
}
