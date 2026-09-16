'use client';

import type { ExerciseContent } from '@/lib/types';

interface ExerciseSlideProps {
  content: ExerciseContent;
}

export default function ExerciseSlide({ content }: ExerciseSlideProps) {
  return (
    <article className="slide-article flex flex-1 flex-col items-center justify-center px-8 py-6">
      <div style={{ maxWidth: 600, width: '100%' }}>
        {/* Badge */}
        <div
          className="stagger-1 slide-active"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 'var(--space-2)',
            padding: 'var(--space-2) var(--space-4)',
            background: 'var(--accent-subtle)',
            borderRadius: 'var(--radius-full)',
            marginBottom: 'var(--space-6)',
          }}
        >
          <span
            style={{
              width: 8,
              height: 8,
              borderRadius: 'var(--radius-full)',
              background: 'var(--accent)',
            }}
            aria-hidden="true"
          />
          <span
            style={{
              fontSize: 'var(--text-label)',
              fontWeight: 600,
              color: 'var(--accent-text)',
              textTransform: 'uppercase' as const,
              letterSpacing: '0.08em',
            }}
          >
            Audience Exercise
          </span>
          {(content.duration || content.timeLimit) && (
            <span
              style={{
                fontSize: 'var(--text-label)',
                color: 'var(--accent-text)',
                opacity: 0.7,
              }}
            >
              · {content.duration || `${content.timeLimit} seconds`}
            </span>
          )}
        </div>

        {/* Instruction */}
        <h2
          className="stagger-2 slide-active"
          style={{
            fontSize: 'var(--text-h3)',
            fontWeight: 600,
            lineHeight: 'var(--leading-snug)',
            color: 'var(--text-primary)',
            marginBottom: 'var(--space-6)',
            maxWidth: '35ch',
          }}
        >
          {content.instruction}
        </h2>

        {/* Steps */}
        {content.steps && content.steps.length > 0 && (
          <ol
            className="stagger-3 slide-active"
            style={{
              listStyle: 'none',
              padding: 0,
              margin: 0,
              display: 'flex',
              flexDirection: 'column',
              gap: 'var(--space-3)',
            }}
          >
            {content.steps.map((step, i) => (
              <li
                key={i}
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: 'var(--space-4)',
                  padding: 'var(--space-4)',
                  background: 'var(--bg-elevated)',
                  borderRadius: 'var(--radius-md)',
                  border: '1px solid var(--border-subtle)',
                }}
              >
                <span
                  style={{
                    width: 28,
                    height: 28,
                    borderRadius: 'var(--radius-full)',
                    background: 'var(--bg-surface)',
                    border: '1px solid var(--border-default)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: 'var(--text-caption)',
                    fontWeight: 600,
                    color: 'var(--text-secondary)',
                    flexShrink: 0,
                  }}
                  aria-hidden="true"
                >
                  {i + 1}
                </span>
                <span
                  style={{
                    fontSize: 'var(--text-body)',
                    lineHeight: 'var(--leading-normal)',
                    color: 'var(--text-secondary)',
                    paddingTop: 2,
                  }}
                >
                  {step}
                </span>
              </li>
            ))}
          </ol>
        )}

        {/* Prompt */}
        {content.prompt && (
          <p
            className="stagger-4 slide-active"
            style={{
              fontSize: 'var(--text-small)',
              color: 'var(--text-tertiary)',
              marginTop: 'var(--space-6)',
              fontStyle: 'italic',
            }}
          >
            {content.prompt}
          </p>
        )}
      </div>
    </article>
  );
}
