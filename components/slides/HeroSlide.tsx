'use client';

import type { HeroContent } from '@/lib/types';

interface HeroSlideProps {
  content: HeroContent;
}

export default function HeroSlide({ content }: HeroSlideProps) {
  return (
    <article className="flex flex-1 flex-col items-center justify-center px-8 text-center">
      {content.meta && (
        <p
          className="stagger-1 slide-active"
          style={{
            fontSize: 'var(--text-label)',
            fontWeight: 600,
            letterSpacing: '0.12em',
            textTransform: 'uppercase' as const,
            color: 'var(--text-tertiary)',
            marginBottom: 'var(--space-4)',
          }}
        >
          {content.meta}
        </p>
      )}

      <h2
        className={`${content.meta ? 'stagger-2' : 'stagger-1'} slide-active`}
        style={{
          fontSize: 'var(--text-display)',
          fontWeight: 700,
          lineHeight: 'var(--leading-tight)',
          color: 'var(--text-primary)',
          letterSpacing: '-0.03em',
          maxWidth: '18ch',
        }}
      >
        {content.headline}
      </h2>

      <p
        className={`${content.meta ? 'stagger-3' : 'stagger-2'} slide-active`}
        style={{
          fontSize: 'var(--text-h3)',
          fontWeight: 400,
          lineHeight: 'var(--leading-snug)',
          color: 'var(--text-secondary)',
          marginTop: 'var(--space-5)',
          maxWidth: '36ch',
          letterSpacing: '-0.01em',
        }}
      >
        {content.subheadline}
      </p>

      {content.footer && (
        <p
          className="stagger-4 slide-active"
          style={{
            fontSize: 'var(--text-body)',
            fontWeight: 500,
            color: 'var(--accent-text)',
            marginTop: 'var(--space-7)',
            maxWidth: '40ch',
          }}
        >
          {content.footer}
        </p>
      )}

      {content.attribution && (
        <p
          className="stagger-5 slide-active"
          style={{
            fontSize: 'var(--text-small)',
            color: 'var(--text-tertiary)',
            marginTop: 'var(--space-6)',
          }}
        >
          {content.attribution}
        </p>
      )}
    </article>
  );
}
