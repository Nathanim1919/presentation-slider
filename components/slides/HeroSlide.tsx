'use client';

import type { HeroContent } from '@/lib/types';

interface HeroSlideProps {
  content: HeroContent;
}

export default function HeroSlide({ content }: HeroSlideProps) {
  return (
    <article className="slide-article flex flex-1 flex-col items-center justify-center px-8 text-center max-w-2xl mx-auto">
      {content.avatar && (
        <div className="stagger-1 slide-active mb-8 flex items-center justify-center">
          {content.avatar.startsWith('/') ||
          content.avatar.startsWith('http') ||
          /\.(jpg|jpeg|png|webp|svg|gif)$/i.test(content.avatar) ? (
            <div
              style={{
                width: 96,
                height: 96,
                borderRadius: '50%',
                padding: 2,
                border: '1px solid var(--border-strong)',
                background: 'var(--bg-elevated)',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <img
                src={content.avatar}
                alt={content.headline || 'Avatar'}
                style={{
                  width: '100%',
                  height: '100%',
                  borderRadius: '50%',
                  objectFit: 'cover',
                  display: 'block',
                }}
              />
            </div>
          ) : (
            <div
              style={{
                width: 72,
                height: 72,
                borderRadius: '50%',
                background: 'var(--bg-elevated)',
                border: '1px solid var(--border-strong)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.25rem',
                fontWeight: 700,
                fontFamily: 'monospace',
                color: 'var(--accent)',
              }}
            >
              {content.avatar}
            </div>
          )}
        </div>
      )}

      {content.meta && (
        <p
          className="stagger-1 slide-active"
          style={{
            fontSize: 'var(--text-caption)',
            fontWeight: 600,
            letterSpacing: '0.15em',
            textTransform: 'uppercase' as const,
            color: 'var(--text-tertiary)',
            marginBottom: 'var(--space-3)',
          }}
        >
          {content.meta}
        </p>
      )}

      <h1
        className={`${content.meta ? 'stagger-2' : 'stagger-1'} slide-active`}
        style={{
          fontSize: 'clamp(2.25rem, 4.5vw, 3.5rem)',
          fontWeight: 700,
          lineHeight: 'var(--leading-tight)',
          color: 'var(--text-primary)',
          letterSpacing: '-0.035em',
          margin: 0,
        }}
      >
        {content.headline}
      </h1>

      <p
        className={`${content.meta ? 'stagger-3' : 'stagger-2'} slide-active`}
        style={{
          fontSize: 'clamp(1rem, 1.4vw, 1.25rem)',
          fontWeight: 400,
          lineHeight: 'var(--leading-relaxed)',
          color: 'var(--text-secondary)',
          marginTop: 'var(--space-3)',
          marginBottom: 0,
          letterSpacing: '-0.01em',
        }}
      >
        {content.subheadline}
      </p>

      {content.footer && (
        <p
          className="stagger-4 slide-active"
          style={{
            fontSize: 'var(--text-small)',
            color: 'var(--text-tertiary)',
            marginTop: 'var(--space-6)',
            letterSpacing: '0.02em',
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
            marginTop: 'var(--space-4)',
          }}
        >
          {content.attribution}
        </p>
      )}
    </article>
  );
}
