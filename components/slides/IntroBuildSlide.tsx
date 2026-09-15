'use client';

import { useState } from 'react';
import type { IntroBuildContent } from '@/lib/types';

interface IntroBuildSlideProps {
  content: IntroBuildContent;
}

export default function IntroBuildSlide({ content }: IntroBuildSlideProps) {
  const [demoState, setDemoState] = useState<'idle' | 'hover' | 'loading'>('idle');

  return (
    <article className="flex flex-1 flex-col items-center justify-center px-8 py-8 max-w-4xl mx-auto w-full text-center">
      {/* 1. Dramatic Statement */}
      <div className="stagger-1 slide-active mb-6">
        <h2
          style={{
            fontSize: 'clamp(2.25rem, 5vw, 3.75rem)',
            fontWeight: 800,
            color: 'var(--text-primary)',
            letterSpacing: '-0.04em',
            lineHeight: 1.05,
            margin: 0,
          }}
        >
          {content.unexpectedQuote}
        </h2>
        <p
          className="text-xs md:text-sm font-mono text-[var(--text-tertiary)] mt-2 mb-0"
        >
          “{content.subQuote}”
        </p>
      </div>

      {/* 2. Primary Revelation */}
      <div className="stagger-2 slide-active mb-8">
        <h3
          style={{
            fontSize: 'clamp(1.5rem, 3.5vw, 2.5rem)',
            fontWeight: 700,
            color: 'var(--accent)',
            letterSpacing: '-0.03em',
            margin: 0,
          }}
        >
          {content.primaryHeading}
        </h3>
      </div>

      {/* 3. The Clean Linear Loop */}
      <div
        className="stagger-3 slide-active flex items-center justify-center flex-wrap gap-2 md:gap-3 mb-10"
      >
        {content.workflow.map((step, idx) => (
          <div key={step} className="flex items-center gap-2 md:gap-3">
            <span
              className="text-xs font-mono font-semibold tracking-wider text-[var(--text-secondary)]"
            >
              {step}
            </span>
            {idx < content.workflow.length - 1 && (
              <span className="text-[11px] text-[var(--border-strong)] opacity-60">
                →
              </span>
            )}
          </div>
        ))}
      </div>

      {/* 4. One Simple, Elegant Live Button Experiment */}
      <div className="stagger-4 slide-active flex flex-col items-center gap-3 mb-8">
        <button
          type="button"
          onMouseEnter={() => setDemoState('hover')}
          onMouseLeave={() => setDemoState('idle')}
          onClick={() => {
            setDemoState('loading');
            setTimeout(() => setDemoState('idle'), 1200);
          }}
          className="px-6 py-3 rounded-xl text-xs md:text-sm font-semibold transition-all duration-200"
          style={{
            background:
              demoState === 'loading'
                ? 'var(--bg-elevated)'
                : demoState === 'hover'
                ? 'var(--accent-hover)'
                : 'var(--accent)',
            color: demoState === 'loading' ? 'var(--text-secondary)' : '#ffffff',
            border:
              demoState === 'loading'
                ? '1px solid var(--border-strong)'
                : '1px solid transparent',
            transform: demoState === 'hover' ? 'translateY(-2px)' : 'none',
            boxShadow:
              demoState === 'hover'
                ? '0 6px 24px rgba(232, 115, 74, 0.45)'
                : '0 2px 10px rgba(0,0,0,0.15)',
            cursor: 'pointer',
          }}
        >
          {demoState === 'loading' ? (
            <span className="flex items-center gap-2">
              <span className="inline-block animate-spin">⟳</span>
              <span>Thinking in states…</span>
            </span>
          ) : demoState === 'hover' ? (
            'Designing in the browser ↗'
          ) : (
            'Click or hover this button'
          )}
        </button>
        <span className="text-[11px] font-mono text-[var(--text-tertiary)]">
          Spacing · Typography · States · Interaction
        </span>
      </div>

      {/* 5. Clean, Quiet Philosophy Quote */}
      <div className="stagger-5 slide-active max-w-lg mx-auto">
        <p
          className="text-xs md:text-sm text-[var(--text-secondary)] leading-relaxed m-0"
        >
          “For me, the browser is part of the design tool. I think about spacing, hierarchy, and states while I'm actually writing the code.”
        </p>
      </div>
    </article>
  );
}
