'use client';

import { useState } from 'react';
import type { IntroJourneyContent } from '@/lib/types';

interface IntroJourneySlideProps {
  content: IntroJourneyContent;
}

export default function IntroJourneySlide({ content }: IntroJourneySlideProps) {
  return (
    <article className="flex flex-1 flex-col items-center justify-center px-8 py-10 max-w-4xl mx-auto w-full text-center">
      {/* 1. Subtle Label & Clean Heading */}
      <span
        className="stagger-1 slide-active text-xs font-mono uppercase tracking-widest text-[var(--text-tertiary)] mb-3 block"
      >
        My Journey
      </span>
      <h2
        className="stagger-1 slide-active"
        style={{
          fontSize: 'clamp(2rem, 3.8vw, 3rem)',
          fontWeight: 700,
          color: 'var(--text-primary)',
          letterSpacing: '-0.03em',
          margin: 0,
          marginBottom: 'var(--space-10)',
        }}
      >
        {content.heading}
      </h2>

      {/* 2. Airy Horizontal Progression Ribbon */}
      <div
        className="stagger-2 slide-active flex items-center justify-center flex-wrap gap-3 md:gap-4 mb-12"
      >
        {content.steps.map((step, idx) => {
          const isFinal = idx === content.steps.length - 1;

          return (
            <div key={step.label} className="flex items-center gap-3 md:gap-4">
              <span
                className="font-mono text-xs md:text-sm font-semibold tracking-wider"
                style={{
                  color: isFinal ? 'var(--accent)' : 'var(--text-secondary)',
                  letterSpacing: '0.06em',
                }}
              >
                {step.label}
              </span>

              {idx < content.steps.length - 1 && (
                <span
                  style={{
                    color: 'var(--border-strong)',
                    fontSize: '13px',
                    userSelect: 'none',
                    opacity: 0.6,
                  }}
                >
                  →
                </span>
              )}
            </div>
          );
        })}
      </div>

      {/* 3. Pure Minimal Story Typography */}
      <div className="stagger-3 slide-active max-w-xl flex flex-col gap-4 text-center">
        {content.story.map((paragraph, i) => (
          <p
            key={i}
            style={{
              fontSize: i === 0 ? 'clamp(1.25rem, 2vw, 1.5rem)' : 'var(--text-body)',
              fontWeight: i === 0 ? 600 : 400,
              color: i === 0 ? 'var(--text-primary)' : 'var(--text-secondary)',
              lineHeight: 'var(--leading-relaxed)',
              letterSpacing: i === 0 ? '-0.02em' : 'normal',
              margin: 0,
            }}
          >
            {paragraph}
          </p>
        ))}
      </div>
    </article>
  );
}
