'use client';

import type { QuestionContent } from '@/lib/types';

interface QuestionSlideProps {
  content: QuestionContent;
}

export default function QuestionSlide({ content }: QuestionSlideProps) {
  return (
    <article className="slide-article flex flex-1 flex-col items-center justify-center px-8 text-center">
      {/* Question mark accent */}
      <span
        className="stagger-1 slide-active"
        aria-hidden="true"
        style={{
          fontSize: 'clamp(3rem, 6vw, 5rem)',
          fontWeight: 200,
          color: 'var(--accent)',
          lineHeight: 1,
          marginBottom: 'var(--space-5)',
          opacity: 0.4,
        }}
      >
        ?
      </span>

      <h2
        className="stagger-2 slide-active"
        style={{
          fontSize: 'var(--text-h1)',
          fontWeight: 600,
          lineHeight: 'var(--leading-tight)',
          color: 'var(--text-primary)',
          letterSpacing: '-0.02em',
          maxWidth: '22ch',
        }}
      >
        {content.question}
      </h2>

      {content.subtitle && (
        <p
          className="stagger-3 slide-active"
          style={{
            fontSize: 'var(--text-body)',
            color: 'var(--text-secondary)',
            marginTop: 'var(--space-5)',
            maxWidth: '45ch',
            lineHeight: 'var(--leading-normal)',
          }}
        >
          {content.subtitle}
        </p>
      )}

      {content.prompt && (
        <p
          className="stagger-4 slide-active"
          style={{
            fontSize: 'var(--text-small)',
            color: 'var(--accent-text)',
            marginTop: 'var(--space-6)',
            padding: 'var(--space-3) var(--space-5)',
            background: 'var(--accent-subtle)',
            borderRadius: 'var(--radius-full)',
          }}
        >
          {content.prompt}
        </p>
      )}
    </article>
  );
}
