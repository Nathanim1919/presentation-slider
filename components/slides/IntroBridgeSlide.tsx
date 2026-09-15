'use client';

import Link from 'next/link';
import type { IntroBridgeContent } from '@/lib/types';

interface IntroBridgeSlideProps {
  content: IntroBridgeContent;
}

export default function IntroBridgeSlide({ content }: IntroBridgeSlideProps) {
  return (
    <article className="flex flex-1 flex-col items-center justify-center px-8 py-10 max-w-3xl mx-auto w-full text-center">
      {/* 1. The Quiet Honest Question */}
      <h2
        className="stagger-1 slide-active text-lg md:text-xl font-medium text-[var(--text-secondary)] mb-8"
        style={{ letterSpacing: '-0.01em' }}
      >
        {content.question}
      </h2>

      {/* 2. The Narrative Statement */}
      <p
        className="stagger-2 slide-active text-sm md:text-base text-[var(--text-tertiary)] max-w-xl mx-auto mb-10 leading-relaxed"
      >
        “Because I've spent the last few years on the other side of the screen — designing interfaces, building them, watching them break, and learning that…”
      </p>

      {/* 3. The Climax */}
      <div className="stagger-3 slide-active mb-12">
        <h1
          style={{
            fontSize: 'clamp(2rem, 4.5vw, 3.5rem)',
            fontWeight: 800,
            color: 'var(--accent)',
            letterSpacing: '-0.035em',
            margin: 0,
            lineHeight: 1.15,
          }}
        >
          {content.climax}
        </h1>
        <p
          className="text-sm md:text-base text-[var(--text-secondary)] font-normal mt-3"
        >
          {content.subclimax}
        </p>
      </div>

      {/* 4. Minimalist Transition Button */}
      {content.ctaUrl && (
        <div className="stagger-4 slide-active">
          <Link
            href={content.ctaUrl}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs md:text-sm font-semibold tracking-wide transition-all duration-200 hover:scale-105"
            style={{
              background: 'var(--bg-elevated)',
              color: 'var(--text-primary)',
              border: '1px solid var(--border-strong)',
              textDecoration: 'none',
              boxShadow: '0 2px 12px rgba(0,0,0,0.2)',
            }}
          >
            <span>{content.ctaText || 'Begin Workshop: UI/UX & Product Design'}</span>
            <span className="text-[var(--accent)]">→</span>
          </Link>
        </div>
      )}
    </article>
  );
}
