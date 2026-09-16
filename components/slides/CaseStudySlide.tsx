'use client';

import type { CaseStudyContent } from '@/lib/types';

interface CaseStudySlideProps {
  content: CaseStudyContent;
}

export default function CaseStudySlide({ content }: CaseStudySlideProps) {
  const title = content.product || content.scenario;
  const takeawayText = content.takeaway || content.insight;

  return (
    <article className="slide-article flex flex-1 flex-col items-center justify-center px-8 py-6">
      <div
        style={{
          maxWidth: 820,
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          gap: 'var(--space-4)',
        }}
      >
        {/* Scenario / Product title */}
        {title && (
          <div className="stagger-1 slide-active">
            <span
              style={{
                fontSize: 'var(--text-label)',
                fontWeight: 600,
                letterSpacing: '0.08em',
                textTransform: 'uppercase' as const,
                color: 'var(--accent-text)',
                display: 'block',
                marginBottom: 'var(--space-2)',
              }}
            >
              Case Study
            </span>
            <h2
              style={{
                fontSize: 'var(--text-h3)',
                fontWeight: 600,
                color: 'var(--text-primary)',
                lineHeight: 'var(--leading-snug)',
              }}
            >
              {title}
            </h2>
          </div>
        )}

        {/* Context */}
        <div
          className="stagger-2 slide-active"
          style={{
            padding: 'var(--space-4) var(--space-5)',
            background: 'var(--bg-elevated)',
            borderRadius: 'var(--radius-md)',
            border: '1px solid var(--border-subtle)',
          }}
        >
          <span
            style={{
              fontSize: 'var(--text-label)',
              fontWeight: 600,
              color: 'var(--text-tertiary)',
              textTransform: 'uppercase' as const,
              letterSpacing: '0.06em',
              display: 'block',
              marginBottom: 'var(--space-2)',
            }}
          >
            Context
          </span>
          <p
            style={{
              fontSize: 'var(--text-small)',
              lineHeight: 'var(--leading-normal)',
              color: 'var(--text-secondary)',
              margin: 0,
            }}
          >
            {content.context}
          </p>
        </div>

        {/* Problem if present */}
        {content.problem && (
          <div
            className="stagger-3 slide-active"
            style={{
              padding: 'var(--space-4) var(--space-5)',
              background: 'var(--danger-subtle)',
              borderRadius: 'var(--radius-md)',
              border: '1px solid rgba(248, 113, 113, 0.15)',
            }}
          >
            <span
              style={{
                fontSize: 'var(--text-label)',
                fontWeight: 600,
                color: 'var(--danger)',
                textTransform: 'uppercase' as const,
                letterSpacing: '0.06em',
                display: 'block',
                marginBottom: 'var(--space-2)',
              }}
            >
              Problem
            </span>
            <p
              style={{
                fontSize: 'var(--text-small)',
                lineHeight: 'var(--leading-normal)',
                color: 'var(--text-secondary)',
                margin: 0,
              }}
            >
              {content.problem}
            </p>
          </div>
        )}

        {/* Steps progression (e.g. 5 Whys) */}
        {content.steps && content.steps.length > 0 && (
          <div
            className="stagger-3 slide-active"
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 'var(--space-2)',
              padding: 'var(--space-4)',
              background: 'var(--bg-elevated)',
              borderRadius: 'var(--radius-md)',
              border: '1px solid var(--border-subtle)',
            }}
          >
            <span
              style={{
                fontSize: 'var(--text-label)',
                fontWeight: 600,
                color: 'var(--accent-text)',
                textTransform: 'uppercase' as const,
                letterSpacing: '0.06em',
                marginBottom: 'var(--space-1)',
              }}
            >
              The 5 Whys Discovery
            </span>
            {content.steps.map((step, i) => (
              <div
                key={i}
                style={{
                  display: 'flex',
                  alignItems: 'baseline',
                  gap: 'var(--space-3)',
                  padding: 'var(--space-2) 0',
                  borderBottom:
                    i < content.steps!.length - 1
                      ? '1px solid var(--border-subtle)'
                      : 'none',
                }}
              >
                <span
                  style={{
                    fontSize: 'var(--text-caption)',
                    fontWeight: 600,
                    color: i === content.steps!.length - 1 ? 'var(--success)' : 'var(--text-tertiary)',
                    minWidth: 85,
                  }}
                >
                  {step.action}
                </span>
                <span
                  style={{
                    fontSize: 'var(--text-small)',
                    color: i === content.steps!.length - 1 ? 'var(--text-primary)' : 'var(--text-secondary)',
                    fontWeight: i === content.steps!.length - 1 ? 600 : 400,
                  }}
                >
                  {step.result}
                </span>
              </div>
            ))}
          </div>
        )}

        {/* Key Takeaway / Insight */}
        {takeawayText && (
          <div
            className="stagger-4 slide-active"
            style={{
              padding: 'var(--space-4) var(--space-5)',
              background: 'var(--success-subtle)',
              borderRadius: 'var(--radius-md)',
              border: '1px solid rgba(74, 222, 128, 0.2)',
            }}
          >
            <span
              style={{
                fontSize: 'var(--text-label)',
                fontWeight: 600,
                color: 'var(--success)',
                textTransform: 'uppercase' as const,
                letterSpacing: '0.06em',
                display: 'block',
                marginBottom: 'var(--space-2)',
              }}
            >
              Core Insight
            </span>
            <p
              style={{
                fontSize: 'var(--text-body)',
                fontWeight: 500,
                color: 'var(--text-primary)',
                lineHeight: 'var(--leading-normal)',
                margin: 0,
              }}
            >
              {takeawayText}
            </p>
          </div>
        )}
      </div>
    </article>
  );
}
