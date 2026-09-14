'use client';

import type { PrototypeContent } from '@/lib/types';

interface PrototypeSlideProps {
  content: PrototypeContent;
}

export default function PrototypeSlide({ content }: PrototypeSlideProps) {
  return (
    <article className="flex flex-1 flex-col items-center justify-center px-8 text-center">
      {content.principle && (
        <p
          className="stagger-1 slide-active"
          style={{
            fontSize: 'var(--text-label)',
            fontWeight: 600,
            letterSpacing: '0.08em',
            textTransform: 'uppercase' as const,
            color: 'var(--accent-text)',
            marginBottom: 'var(--space-5)',
          }}
        >
          {content.principle}
        </p>
      )}

      <h2
        className="stagger-2 slide-active"
        style={{
          fontSize: 'var(--text-h1)',
          fontWeight: 600,
          lineHeight: 'var(--leading-tight)',
          color: 'var(--text-primary)',
          letterSpacing: '-0.02em',
          maxWidth: '20ch',
        }}
      >
        {content.heading}
      </h2>

      <p
        className="stagger-3 slide-active"
        style={{
          fontSize: 'var(--text-body)',
          color: 'var(--text-secondary)',
          marginTop: 'var(--space-5)',
          maxWidth: '50ch',
          lineHeight: 'var(--leading-normal)',
        }}
      >
        {content.description}
      </p>

      <a
        href={content.ctaRoute || content.url || '#'}
        target="_blank"
        rel="noopener noreferrer"
        className="stagger-4 slide-active"
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: 'var(--space-3)',
          marginTop: 'var(--space-7)',
          padding: 'var(--space-3) var(--space-6)',
          background: 'var(--accent)',
          color: 'var(--text-inverted)',
          borderRadius: 'var(--radius-full)',
          fontSize: 'var(--text-small)',
          fontWeight: 600,
          textDecoration: 'none',
          transition: 'background var(--duration-fast) ease, transform var(--duration-fast) ease',
          cursor: 'pointer',
        }}
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLElement).style.background = 'var(--accent-hover)';
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLElement).style.background = 'var(--accent)';
        }}
        onMouseDown={(e) => {
          (e.currentTarget as HTMLElement).style.transform = 'scale(0.97)';
        }}
        onMouseUp={(e) => {
          (e.currentTarget as HTMLElement).style.transform = 'scale(1)';
        }}
      >
        {content.ctaLabel || content.cta || 'Explore'}
        <span aria-hidden="true">→</span>
      </a>
    </article>
  );
}
