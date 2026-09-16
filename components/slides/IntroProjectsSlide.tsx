'use client';

import type { IntroProjectsContent } from '@/lib/types';

interface IntroProjectsSlideProps {
  content: IntroProjectsContent;
}

export default function IntroProjectsSlide({ content }: IntroProjectsSlideProps) {
  return (
    <article className="slide-article flex flex-1 flex-col items-center justify-center px-8 py-12 max-w-3xl mx-auto w-full text-center">
      {/* 1. Large Bold Statement */}
      <h2
        className="stagger-1 slide-active"
        style={{
          fontSize: 'clamp(2.75rem, 6vw, 4.5rem)',
          fontWeight: 800,
          color: 'var(--text-primary)',
          letterSpacing: '-0.04em',
          lineHeight: 1.05,
          margin: 0,
          marginBottom: 'var(--space-8)',
        }}
      >
        {content.heading}
      </h2>

      {/* 2. Statements with generous line-height & breathing room */}
      {content.statements && content.statements.length > 0 && (
        <div className="stagger-2 slide-active flex flex-col gap-6 max-w-xl mx-auto mb-10">
          {content.statements.map((statement, idx) => (
            <p
              key={idx}
              style={{
                fontSize:
                  idx === 0
                    ? 'clamp(1.2rem, 1.8vw, 1.45rem)'
                    : 'clamp(1rem, 1.4vw, 1.2rem)',
                fontWeight: idx === 0 ? 500 : 400,
                color:
                  idx === 0
                    ? 'var(--text-secondary)'
                    : 'var(--text-tertiary)',
                lineHeight: 'var(--leading-relaxed)',
                letterSpacing: '-0.01em',
                margin: 0,
              }}
            >
              {statement}
            </p>
          ))}
        </div>
      )}

      {/* 3. Quiet Memorable Subtext */}
      {content.quote && (
        <div className="stagger-3 slide-active max-w-md mx-auto">
          <p
            className="text-xs md:text-sm font-mono text-[var(--accent)] tracking-wide m-0"
          >
            {content.quote}
          </p>
        </div>
      )}
    </article>
  );
}
