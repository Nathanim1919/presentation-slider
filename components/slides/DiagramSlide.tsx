'use client';

import type { DiagramContent } from '@/lib/types';

interface DiagramSlideProps {
  content: DiagramContent;
}

export default function DiagramSlide({ content }: DiagramSlideProps) {
  const isHorizontal = content.direction === 'horizontal';

  return (
    <article className="flex flex-1 flex-col items-center justify-center px-8 py-6">
      <div
        className={`flex ${isHorizontal ? 'flex-row' : 'flex-col'} items-center`}
        style={{
          gap: 0,
          maxWidth: isHorizontal ? 900 : 400,
          width: '100%',
        }}
      >
        {content.nodes.map((node, i) => (
          <div
            key={node.id || node.label || i}
            className={`flex ${isHorizontal ? 'flex-row' : 'flex-col'} items-center`}
            style={{ flex: i < content.nodes.length - 1 ? 1 : undefined }}
          >
            {/* Node */}
            <div
              className={`stagger-${Math.min(i + 1, 5)} slide-active`}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                width: isHorizontal ? 120 : '100%',
                minHeight: 80,
                padding: 'var(--space-4) var(--space-3)',
                background: 'var(--bg-elevated)',
                borderRadius: 'var(--radius-md)',
                border: '1px solid var(--border-default)',
                flexShrink: 0,
                textAlign: 'center',
                transition: 'border-color var(--duration-normal) ease',
              }}
            >
              <span
                style={{
                  fontSize: 'var(--text-small)',
                  fontWeight: 600,
                  color: 'var(--text-primary)',
                  lineHeight: 'var(--leading-snug)',
                }}
              >
                {node.label}
              </span>
              {node.description && (
                <span
                  style={{
                    fontSize: 'var(--text-caption)',
                    color: 'var(--text-tertiary)',
                    marginTop: 'var(--space-1)',
                    lineHeight: 'var(--leading-snug)',
                  }}
                >
                  {node.description}
                </span>
              )}
            </div>

            {/* Connector */}
            {i < content.nodes.length - 1 && (
              <div
                className="flex items-center"
                style={{
                  flex: 1,
                  minWidth: isHorizontal ? 24 : undefined,
                  minHeight: isHorizontal ? undefined : 24,
                  flexDirection: isHorizontal ? 'row' : 'column',
                  padding: isHorizontal ? '0 2px' : '2px 0',
                }}
              >
                <div
                  style={{
                    flex: 1,
                    ...(isHorizontal
                      ? { height: 1, background: 'var(--border-strong)' }
                      : { width: 1, background: 'var(--border-strong)' }),
                  }}
                />
                <div
                  style={{
                    width: 0,
                    height: 0,
                    ...(isHorizontal
                      ? {
                          borderTop: '4px solid transparent',
                          borderBottom: '4px solid transparent',
                          borderLeft: '7px solid var(--border-strong)',
                        }
                      : {
                          borderLeft: '4px solid transparent',
                          borderRight: '4px solid transparent',
                          borderTop: '7px solid var(--border-strong)',
                        }),
                  }}
                  aria-hidden="true"
                />
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Loop indicator */}
      {content.loop && (
        <div
          className="stagger-5 slide-active"
          style={{
            marginTop: 'var(--space-4)',
            display: 'flex',
            alignItems: 'center',
            gap: 'var(--space-3)',
            color: 'var(--accent-text)',
            fontSize: 'var(--text-caption)',
            fontWeight: 500,
          }}
        >
          <span
            style={{
              display: 'inline-block',
              width: 20,
              height: 20,
              border: '1.5px solid var(--accent)',
              borderRadius: 'var(--radius-full)',
              borderTopColor: 'transparent',
              transform: 'rotate(-45deg)',
            }}
            aria-hidden="true"
          />
          <span>iterate</span>
        </div>
      )}

      {content.caption && (
        <p
          className="stagger-5 slide-active"
          style={{
            fontSize: 'var(--text-small)',
            color: 'var(--text-tertiary)',
            marginTop: 'var(--space-7)',
            maxWidth: '55ch',
            textAlign: 'center',
            lineHeight: 'var(--leading-normal)',
          }}
        >
          {content.caption}
        </p>
      )}
    </article>
  );
}
