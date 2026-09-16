'use client';

import type { ThreeLayerContent } from '@/lib/types';

const LAYER_COLORS = [
  { bg: 'rgba(232,115,74,.07)', border: 'rgba(232,115,74,.22)', label: 'var(--accent-text)' },
  { bg: 'rgba(74,222,128,.06)', border: 'rgba(74,222,128,.2)',  label: 'var(--success)' },
  { bg: 'rgba(255,255,255,.04)', border: 'var(--border-default)', label: 'var(--text-secondary)' },
];

interface ThreeLayerSlideProps {
  content: ThreeLayerContent;
}

export default function ThreeLayerSlide({ content }: ThreeLayerSlideProps) {
  return (
    <article
      className="slide-article flex flex-1 flex-col items-center justify-center px-8 py-6"
      style={{ gap: 'var(--space-6)' }}
    >
      {/* Optional heading */}
      {content.heading && (
        <h2
          className="stagger-1 slide-active"
          style={{
            fontSize: 'var(--text-h2)',
            fontWeight: 600,
            color: 'var(--text-primary)',
            letterSpacing: '-0.025em',
            textAlign: 'center',
            margin: 0,
          }}
        >
          {content.heading}
        </h2>
      )}

      {/* Layer rows */}
      <div
        style={{
          width: '100%',
          maxWidth: 820,
          display: 'flex',
          flexDirection: 'column',
          gap: content.overlap ? 'var(--space-1)' : 'var(--space-4)',
        }}
      >
        {content.layers.map((layer, i) => {
          const stagger = `stagger-${i + (content.heading ? 2 : 1)}`;
          const c = LAYER_COLORS[i % LAYER_COLORS.length];

          return (
            <div
              key={i}
              className={`three-layer-row stagger-${Math.min(i + 2, 5)} slide-active`}
              style={{
                display: 'flex',
                alignItems: 'stretch',
                background: c.bg,
                border: `1px solid ${c.border}`,
                borderRadius: content.overlap
                  ? i === 0
                    ? 'var(--radius-md) var(--radius-md) 0 0'
                    : i === content.layers.length - 1
                    ? '0 0 var(--radius-md) var(--radius-md)'
                    : '0'
                  : 'var(--radius-md)',
                overflow: 'hidden',
                /* Overlap: subsequent rows shift left to create nesting feel */
                marginLeft: content.overlap ? `${i * 24}px` : undefined,
              }}
            >
              {/* Label column */}
              <div
                className="three-layer-label"
                style={{
                  minWidth: 150,
                  padding: 'var(--space-5)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  borderRight: `1px solid ${c.border}`,
                  flexShrink: 0,
                }}
              >
                <span
                  style={{
                    fontSize: 'var(--text-h3)',
                    fontWeight: 800,
                    color: c.label,
                    letterSpacing: '-0.02em',
                    lineHeight: 1,
                  }}
                >
                  {layer.label}
                </span>
                {layer.sublabel && (
                  <span
                    style={{
                      fontSize: 'var(--text-caption)',
                      color: 'var(--text-tertiary)',
                      marginTop: 'var(--space-1)',
                    }}
                  >
                    {layer.sublabel}
                  </span>
                )}
              </div>

              {/* Questions / chips */}
              <div
                className="three-layer-chips"
                style={{
                  flex: 1,
                  padding: 'var(--space-4) var(--space-5)',
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: 'var(--space-2)',
                  alignItems: 'center',
                }}
              >
                {layer.questions.map((q, j) => (
                  <span
                    key={j}
                    style={{
                      fontSize: 'var(--text-small)',
                      color: 'var(--text-secondary)',
                      padding: '4px 13px',
                      background: 'var(--bg-surface)',
                      borderRadius: 'var(--radius-full)',
                      border: '1px solid var(--border-subtle)',
                      lineHeight: 'var(--leading-snug)',
                    }}
                  >
                    {q}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      {/* Closing statement */}
      {content.closing && (
        <p
          className={`stagger-${content.layers.length + (content.heading ? 2 : 1)} slide-active`}
          style={{
            fontSize: 'var(--text-body)',
            color: 'var(--text-tertiary)',
            textAlign: 'center',
            maxWidth: '54ch',
            lineHeight: 'var(--leading-normal)',
            margin: 0,
          }}
        >
          {content.closing}
        </p>
      )}
    </article>
  );
}
