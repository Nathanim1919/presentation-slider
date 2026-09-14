'use client';

import { useState } from 'react';
import type { TableOfContentsContent } from '@/lib/types';

interface TableOfContentsSlideProps {
  content: TableOfContentsContent;
}

export default function TableOfContentsSlide({ content }: TableOfContentsSlideProps) {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  return (
    <article
      className="flex flex-1 flex-col items-center justify-center px-8 py-6 text-center"
      style={{ width: '100%', height: '100%' }}
    >
      <div
        style={{
          maxWidth: 960,
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        {/* Meta / Eyebrow */}
        <div
          className="stagger-1 slide-active"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 'var(--space-2)',
            marginBottom: 'var(--space-2)',
          }}
        >
          <span
            style={{
              width: 6,
              height: 6,
              borderRadius: 'var(--radius-full)',
              background: 'var(--accent)',
              display: 'inline-block',
            }}
          />
          <span
            style={{
              fontSize: 'var(--text-label)',
              fontWeight: 600,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: 'var(--accent-text)',
            }}
          >
            {content.meta || 'THE CURRICULUM'}
          </span>
        </div>

        {/* Heading */}
        <h2
          className="stagger-2 slide-active"
          style={{
            fontSize: 'var(--text-h2)',
            fontWeight: 700,
            color: 'var(--text-primary)',
            letterSpacing: '-0.025em',
            margin: '0 0 var(--space-2)',
            lineHeight: 'var(--leading-tight)',
          }}
        >
          {content.heading}
        </h2>

        {/* Subtitle / Statement */}
        {content.statement && (
          <p
            className="stagger-2 slide-active"
            style={{
              fontSize: 'var(--text-body)',
              color: 'var(--text-secondary)',
              lineHeight: 'var(--leading-snug)',
              maxWidth: '52ch',
              margin: '0 0 var(--space-6)',
            }}
          >
            {content.statement}
          </p>
        )}

        {/* Table of Contents Grid (3 columns x 2 rows) */}
        <div
          className="stagger-3 slide-active"
          style={{
            width: '100%',
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: 'var(--space-4)',
            textAlign: 'left',
            marginBottom: 'var(--space-6)',
          }}
        >
          {content.items.map((item, idx) => {
            const isHovered = hoveredIdx === idx;
            return (
              <div
                key={idx}
                onMouseEnter={() => setHoveredIdx(idx)}
                onMouseLeave={() => setHoveredIdx(null)}
                style={{
                  padding: 'var(--space-5)',
                  background: isHovered ? 'var(--bg-hover)' : 'var(--bg-elevated)',
                  borderRadius: 'var(--radius-md)',
                  border: isHovered
                    ? '1px solid var(--accent)'
                    : '1px solid var(--border-subtle)',
                  transition: 'all 0.2s cubic-bezier(0.16, 1, 0.3, 1)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 'var(--space-3)',
                  cursor: 'default',
                  position: 'relative',
                  overflow: 'hidden',
                  transform: isHovered ? 'translateY(-2px)' : 'translateY(0)',
                  boxShadow: isHovered
                    ? '0 8px 24px -6px rgba(0, 0, 0, 0.45)'
                    : 'none',
                }}
              >
                {/* Header: Number & Tag */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}
                >
                  <span
                    style={{
                      fontFamily: 'monospace',
                      fontSize: '0.8125rem',
                      fontWeight: 700,
                      color: isHovered ? 'var(--accent)' : 'var(--text-tertiary)',
                      letterSpacing: '0.05em',
                      transition: 'color 0.2s ease',
                    }}
                  >
                    {item.number}
                  </span>

                  {item.tag && (
                    <span
                      style={{
                        fontSize: '0.6875rem',
                        fontWeight: 600,
                        letterSpacing: '0.08em',
                        textTransform: 'uppercase',
                        padding: '2px 8px',
                        borderRadius: 'var(--radius-full)',
                        background: isHovered
                          ? 'var(--accent-subtle)'
                          : 'rgba(255, 255, 255, 0.05)',
                        color: isHovered
                          ? 'var(--accent-text)'
                          : 'var(--text-tertiary)',
                        border: isHovered
                          ? '1px solid var(--accent-subtle)'
                          : '1px solid var(--border-subtle)',
                        transition: 'all 0.2s ease',
                      }}
                    >
                      {item.tag}
                    </span>
                  )}
                </div>

                {/* Title */}
                <h3
                  style={{
                    fontSize: 'clamp(1rem, 1.3vw, 1.125rem)',
                    fontWeight: 600,
                    color: 'var(--text-primary)',
                    letterSpacing: '-0.015em',
                    lineHeight: 'var(--leading-snug)',
                    margin: 0,
                  }}
                >
                  {item.title}
                </h3>

                {/* Description */}
                <p
                  style={{
                    fontSize: 'var(--text-small)',
                    color: 'var(--text-secondary)',
                    lineHeight: 'var(--leading-normal)',
                    margin: 0,
                  }}
                >
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Footnote */}
        {content.footnote && (
          <p
            className="stagger-4 slide-active"
            style={{
              fontSize: 'var(--text-small)',
              color: 'var(--text-tertiary)',
              margin: 0,
              maxWidth: '60ch',
              lineHeight: 'var(--leading-normal)',
              letterSpacing: '0.02em',
            }}
          >
            {content.footnote}
          </p>
        )}
      </div>
    </article>
  );
}
