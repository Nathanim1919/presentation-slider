'use client';

import type { SynthesisContent } from '@/lib/types';

interface SynthesisSlideProps {
  content: SynthesisContent;
}

export default function SynthesisSlide({ content }: SynthesisSlideProps) {
  return (
    <article
      className="flex flex-1 flex-col items-center justify-center px-8 py-6 text-center"
      style={{ width: '100%', height: '100%' }}
    >
      <div
        style={{
          maxWidth: 720,
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
            margin: '0 0 var(--space-6)',
            lineHeight: 'var(--leading-tight)',
          }}
        >
          {content.heading}
        </h2>

        {/* Vertical Minimal Cascade */}
        <div
          className="stagger-3 slide-active"
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 'var(--space-2)',
            marginBottom: 'var(--space-7)',
          }}
        >
          <span
            style={{
              fontSize: 'var(--text-small)',
              fontWeight: 700,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: 'var(--accent-text)',
            }}
          >
            GOOD DESIGN
          </span>

          {content.points.map((pt, i) => (
            <div
              key={i}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: 'var(--space-1)',
              }}
            >
              <span style={{ fontSize: '11px', color: 'var(--border-strong)', lineHeight: 1 }}>↓</span>
              <span
                style={{
                  fontSize: 'var(--text-body)',
                  color: 'var(--text-secondary)',
                  fontWeight: 500,
                }}
              >
                {pt}
              </span>
            </div>
          ))}
        </div>

        {/* Hairline Divider */}
        <div
          className="stagger-4 slide-active"
          style={{
            width: 48,
            height: 1,
            background: 'var(--border-default)',
            marginBottom: 'var(--space-5)',
          }}
          aria-hidden="true"
        />

        {/* Final Memorable Statement */}
        <div className="stagger-4 slide-active" style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
          <p
            style={{
              fontSize: 'clamp(1.1rem, 1.6vw, 1.35rem)',
              fontWeight: 500,
              color: 'var(--text-primary)',
              margin: 0,
              lineHeight: 'var(--leading-snug)',
            }}
          >
            "{content.finalStatement.line1}"
          </p>
          <p
            style={{
              fontSize: 'clamp(1.1rem, 1.6vw, 1.35rem)',
              fontWeight: 600,
              color: 'var(--accent-text)',
              margin: 0,
              lineHeight: 'var(--leading-snug)',
            }}
          >
            "{content.finalStatement.line2}"
          </p>
        </div>
      </div>
    </article>
  );
}
