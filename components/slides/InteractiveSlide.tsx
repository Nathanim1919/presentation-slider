'use client';

import { useState } from 'react';
import type { InteractiveContent } from '@/lib/types';
import FormExample from '@/components/examples/FormExample';
import FeedbackExample from '@/components/examples/FeedbackExample';
import HierarchyExample from '@/components/examples/HierarchyExample';
import AccessibilityExample from '@/components/examples/AccessibilityExample';
import ErrorHandlingExample from '@/components/examples/ErrorHandlingExample';

interface InteractiveSlideProps {
  content: InteractiveContent;
}

const exampleComponents: Record<string, React.ComponentType<{ variant: 'bad' | 'good' }>> = {
  forms: FormExample,
  feedback: FeedbackExample,
  hierarchy: HierarchyExample,
  accessibility: AccessibilityExample,
  errors: ErrorHandlingExample,
};

export default function InteractiveSlide({ content }: InteractiveSlideProps) {
  const [variant, setVariant] = useState<'bad' | 'good'>('bad');
  const ExampleComponent = exampleComponents[content.exampleId];

  const labelBad = content.toggleLabels?.[0] ?? 'Bad Design';
  const labelGood = content.toggleLabels?.[1] ?? 'Good Design';

  return (
    <article className="flex flex-1 flex-col px-8 py-6" style={{ gap: 'var(--space-5)' }}>
      {/* Top section — description + toggle */}
      <div
        className="stagger-1 slide-active flex items-start justify-between"
        style={{ gap: 'var(--space-6)' }}
      >
        <div style={{ maxWidth: '45ch' }}>
          <h2
            style={{
              fontSize: 'var(--text-h3)',
              fontWeight: 600,
              color: 'var(--text-primary)',
              lineHeight: 'var(--leading-snug)',
              marginBottom: 'var(--space-3)',
            }}
          >
            {content.heading}
          </h2>
          <p
            style={{
              fontSize: 'var(--text-small)',
              color: 'var(--text-secondary)',
              lineHeight: 'var(--leading-normal)',
              margin: 0,
            }}
          >
            {content.description}
          </p>
        </div>

        <div className="flex items-center" style={{ gap: 'var(--space-2)', flexShrink: 0 }}>
          <div
            role="radiogroup"
            aria-label="Design variant"
            style={{
              display: 'flex',
              borderRadius: 'var(--radius-full)',
              border: '1px solid var(--border-default)',
              overflow: 'hidden',
            }}
          >
            <button
              role="radio"
              aria-checked={variant === 'bad'}
              onClick={() => setVariant('bad')}
              style={{
                fontSize: 'var(--text-caption)',
                fontWeight: 500,
                padding: 'var(--space-2) var(--space-4)',
                border: 'none',
                cursor: 'pointer',
                transition: 'all var(--duration-fast) ease',
                background: variant === 'bad' ? 'var(--danger-subtle)' : 'transparent',
                color: variant === 'bad' ? 'var(--danger)' : 'var(--text-tertiary)',
              }}
            >
              {labelBad}
            </button>
            <button
              role="radio"
              aria-checked={variant === 'good'}
              onClick={() => setVariant('good')}
              style={{
                fontSize: 'var(--text-caption)',
                fontWeight: 500,
                padding: 'var(--space-2) var(--space-4)',
                border: 'none',
                borderLeft: '1px solid var(--border-default)',
                cursor: 'pointer',
                transition: 'all var(--duration-fast) ease',
                background: variant === 'good' ? 'var(--success-subtle)' : 'transparent',
                color: variant === 'good' ? 'var(--success)' : 'var(--text-tertiary)',
              }}
            >
              {labelGood}
            </button>
          </div>

          {content.exampleRoute && (
            <a
              href={content.exampleRoute}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontSize: 'var(--text-caption)',
                color: 'var(--accent-text)',
                textDecoration: 'none',
                padding: 'var(--space-2) var(--space-3)',
                borderRadius: 'var(--radius-sm)',
                border: '1px solid var(--border-subtle)',
                transition: 'border-color var(--duration-fast) ease',
                whiteSpace: 'nowrap',
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = 'var(--accent)';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = 'var(--border-subtle)';
              }}
            >
              Open full ↗
            </a>
          )}
        </div>
      </div>

      {/* Example area */}
      <div
        className="stagger-2 slide-active flex flex-1 items-center justify-center"
        style={{
          background: 'var(--bg-elevated)',
          borderRadius: 'var(--radius-lg)',
          border: '1px solid var(--border-subtle)',
          padding: 'var(--space-6)',
          minHeight: 0,
          overflow: 'hidden',
        }}
      >
        {ExampleComponent ? (
          <ExampleComponent variant={variant} />
        ) : (
          <p style={{ color: 'var(--text-tertiary)', fontSize: 'var(--text-small)' }}>
            Example &ldquo;{content.exampleId}&rdquo; not found
          </p>
        )}
      </div>
    </article>
  );
}
