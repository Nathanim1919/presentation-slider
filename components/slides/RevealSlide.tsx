'use client';

import { useEffect, useState } from 'react';
import type { RevealContent, RevealLine } from '@/lib/types';

interface RevealSlideProps {
  content: RevealContent;
}

export default function RevealSlide({ content }: RevealSlideProps) {
  const [visibleCount, setVisibleCount] = useState(0);

  // Staggered auto-reveal: first line at 300ms, then every 600ms
  useEffect(() => {
    setVisibleCount(0);
    const timers: ReturnType<typeof setTimeout>[] = [];
    content.lines.forEach((_, i) => {
      const t = setTimeout(
        () => setVisibleCount(i + 1),
        300 + i * 600,
      );
      timers.push(t);
    });
    return () => timers.forEach(clearTimeout);
  }, [content]);

  return (
    <article className="slide-article flex flex-1 flex-col items-center justify-center px-8 text-center">
      <div style={{ maxWidth: '22ch' }}>
        {content.lines.map((line, i) => {
          const isString = typeof line === 'string';
          const text  = isString ? (line as string) : (line as RevealLine).text;
          const emph  = isString ? false : !!(line as RevealLine).emphasis;
          const size  = isString ? 'large' : ((line as RevealLine).size  ?? 'large');
          const color = isString ? 'primary' : ((line as RevealLine).color ?? 'primary');

          const fontSize =
            size === 'display' ? 'var(--text-display)' :
            size === 'large'   ? 'var(--text-h1)'      :
                                 'var(--text-h2)';

          const textColor =
            color === 'accent' ? 'var(--accent-text)' :
            color === 'muted'  ? 'var(--text-tertiary)' :
                                 'var(--text-primary)';

          return (
            <p
              key={i}
              style={{
                fontSize,
                fontWeight: emph ? 800 : 700,
                lineHeight: 'var(--leading-tight)',
                letterSpacing: '-0.03em',
                color: textColor,
                margin: 0,
                marginBottom:
                  i < content.lines.length - 1 ? 'var(--space-4)' : 0,
                opacity:   i < visibleCount ? 1 : 0,
                transform: i < visibleCount ? 'translateY(0)' : 'translateY(24px)',
                transition:
                  'opacity 0.55s var(--ease-out), transform 0.55s var(--ease-out)',
              }}
            >
              {text}
            </p>
          );
        })}
      </div>

      {content.caption && (
        <p
          style={{
            fontSize: 'var(--text-small)',
            color: 'var(--text-tertiary)',
            marginTop: 'var(--space-8)',
            maxWidth: '50ch',
            lineHeight: 'var(--leading-normal)',
            opacity: visibleCount >= content.lines.length ? 1 : 0,
            transition: 'opacity 0.5s ease 0.2s',
          }}
        >
          {content.caption}
        </p>
      )}
    </article>
  );
}
