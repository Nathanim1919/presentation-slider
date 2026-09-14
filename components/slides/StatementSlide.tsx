'use client';

import type { StatementContent } from '@/lib/types';

interface StatementSlideProps {
  content: StatementContent;
}

export default function StatementSlide({ content }: StatementSlideProps) {
  return (
    <article className="flex flex-1 flex-col items-center justify-center px-8 text-center">
      <blockquote
        className="stagger-1 slide-active"
        style={{
          fontSize: 'var(--text-h1)',
          fontWeight: 600,
          lineHeight: 'var(--leading-tight)',
          color: 'var(--text-primary)',
          letterSpacing: '-0.025em',
          maxWidth: '20ch',
          margin: 0,
          padding: 0,
          border: 'none',
        }}
      >
        {content.statement || content.text}
      </blockquote>

      {content.attribution && (
        <cite
          className="stagger-2 slide-active"
          style={{
            fontSize: 'var(--text-body)',
            color: 'var(--text-tertiary)',
            marginTop: 'var(--space-6)',
            fontStyle: 'normal',
          }}
        >
          — {content.attribution}
        </cite>
      )}

      {content.footnote && (
        <p
          className="stagger-3 slide-active"
          style={{
            fontSize: 'var(--text-small)',
            color: 'var(--text-secondary)',
            marginTop: 'var(--space-7)',
            maxWidth: '50ch',
            lineHeight: 'var(--leading-normal)',
          }}
        >
          {content.footnote}
        </p>
      )}
    </article>
  );
}
