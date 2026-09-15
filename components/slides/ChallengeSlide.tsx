'use client';

import {
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';
import type { ChallengeContent } from '@/lib/types';

type Phase = 'scenario' | 'questions' | 'reveal';

interface ChallengeSlideProps {
  content: ChallengeContent;
}

export default function ChallengeSlide({ content }: ChallengeSlideProps) {
  const [phase, setPhase]               = useState<Phase>('scenario');
  const [visibleQs, setVisibleQs]       = useState(0);
  const phaseRef    = useRef(phase);
  const visibleQsRef = useRef(visibleQs);

  phaseRef.current    = phase;
  visibleQsRef.current = visibleQs;

  // Reset when content changes (slide re-mount)
  useEffect(() => {
    setPhase('scenario');
    setVisibleQs(0);
  }, [content]);

  const advance = useCallback(() => {
    const p  = phaseRef.current;
    const vq = visibleQsRef.current;

    if (p === 'scenario') {
      setPhase('questions');
      setVisibleQs(1);
      return true; // consumed
    }
    if (p === 'questions') {
      if (vq < content.questions.length) {
        setVisibleQs(vq + 1);
        return true; // consumed
      }
      if (content.reveal) {
        setPhase('reveal');
        return true; // consumed
      }
    }
    return false; // let shell navigate
  }, [content.questions.length, content.reveal]);

  // Capture keyboard in advance phases to prevent shell navigation
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key !== 'ArrowRight' && e.key !== ' ') return;
      const p  = phaseRef.current;
      const vq = visibleQsRef.current;

      const willConsume =
        p === 'scenario' ||
        (p === 'questions' &&
          (vq < content.questions.length || !!content.reveal));

      if (willConsume) {
        e.stopImmediatePropagation();
        e.preventDefault();
        advance();
      }
    };

    window.addEventListener('keydown', handleKey, { capture: true });
    return () =>
      window.removeEventListener('keydown', handleKey, { capture: true });
  }, [advance, content.questions.length, content.reveal]);

  return (
    <article
      className="flex flex-1 flex-col items-center justify-center px-8"
      onClick={() => advance()}
      style={{ cursor: phase !== 'reveal' ? 'pointer' : 'default' }}
    >
      {/* ── SCENARIO phase ─────────────────────────────────── */}
      {phase === 'scenario' && (
        <div style={{ maxWidth: 620, textAlign: 'center' }}>
          {content.badge && (
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 'var(--space-2)',
                padding: '5px 16px',
                background: 'var(--accent-subtle)',
                borderRadius: 'var(--radius-full)',
                marginBottom: 'var(--space-6)',
              }}
            >
              <span
                style={{
                  width: 8,
                  height: 8,
                  borderRadius: '50%',
                  background: 'var(--accent)',
                  flexShrink: 0,
                }}
              />
              <span
                style={{
                  fontSize: 'var(--text-label)',
                  fontWeight: 600,
                  color: 'var(--accent-text)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                }}
              >
                {content.badge}
              </span>
            </div>
          )}

          <h2
            style={{
              fontSize: 'var(--text-h1)',
              fontWeight: 700,
              color: 'var(--text-primary)',
              lineHeight: 'var(--leading-snug)',
              letterSpacing: '-0.03em',
              marginBottom: content.rule ? 'var(--space-5)' : 'var(--space-7)',
            }}
          >
            {content.scenario}
          </h2>

          {content.rule && (
            <p
              style={{
                fontSize: 'var(--text-body)',
                color: 'var(--accent-text)',
                fontWeight: 600,
                marginBottom: 'var(--space-7)',
              }}
            >
              {content.rule}
            </p>
          )}

          <p
            style={{
              fontSize: 'var(--text-caption)',
              color: 'var(--text-tertiary)',
            }}
          >
            Click or press <kbd>Space</kbd> to reveal the questions
          </p>
        </div>
      )}

      {/* ── QUESTIONS phase ────────────────────────────────── */}
      {phase === 'questions' && (
        <div style={{ width: '100%', maxWidth: 660 }}>
          <h3
            style={{
              fontSize: 'var(--text-h3)',
              fontWeight: 600,
              color: 'var(--text-primary)',
              letterSpacing: '-0.015em',
              marginBottom: 'var(--space-5)',
            }}
          >
            Before you design anything — answer these:
          </h3>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
            {content.questions.map((q, i) => (
              <div
                key={i}
                style={{
                  opacity:   i < visibleQs ? 1 : 0,
                  transform: i < visibleQs ? 'translateY(0)' : 'translateY(14px)',
                  transition: 'all 0.38s var(--ease-out)',
                  padding: 'var(--space-4) var(--space-5)',
                  background: 'var(--bg-elevated)',
                  border: '1px solid var(--border-subtle)',
                  borderRadius: 'var(--radius-md)',
                  display: 'flex',
                  gap: 'var(--space-4)',
                  alignItems: 'flex-start',
                }}
              >
                <span
                  style={{
                    fontSize: 'var(--text-small)',
                    fontWeight: 700,
                    color: 'var(--accent)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.06em',
                    minWidth: 96,
                    paddingTop: 2,
                    flexShrink: 0,
                  }}
                >
                  {q.label}
                </span>
                <span
                  style={{
                    fontSize: 'var(--text-body)',
                    color: 'var(--text-secondary)',
                    lineHeight: 'var(--leading-snug)',
                  }}
                >
                  {q.prompt}
                </span>
              </div>
            ))}
          </div>

          {visibleQs < content.questions.length && (
            <p
              style={{
                marginTop: 'var(--space-5)',
                fontSize: 'var(--text-caption)',
                color: 'var(--text-tertiary)',
                textAlign: 'center',
              }}
            >
              Click to reveal next question
            </p>
          )}
          {visibleQs >= content.questions.length && content.reveal && (
            <p
              style={{
                marginTop: 'var(--space-5)',
                fontSize: 'var(--text-caption)',
                color: 'var(--text-tertiary)',
                textAlign: 'center',
              }}
            >
              Click to see the design process
            </p>
          )}
        </div>
      )}

      {/* ── REVEAL phase ───────────────────────────────────── */}
      {phase === 'reveal' && content.reveal && (
        <div style={{ width: '100%', maxWidth: 600 }}>
          <h3
            style={{
              fontSize: 'var(--text-h2)',
              fontWeight: 600,
              color: 'var(--text-primary)',
              letterSpacing: '-0.02em',
              marginBottom: 'var(--space-6)',
            }}
          >
            {content.reveal.title}
          </h3>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2)' }}>
            {content.reveal.steps.map((step, i) => {
              const isLast = i === content.reveal!.steps.length - 1;
              return (
                <div
                  key={i}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 'var(--space-4)',
                    padding: 'var(--space-3) var(--space-4)',
                    background: isLast
                      ? 'var(--accent-subtle)'
                      : i % 2 === 0
                      ? 'var(--bg-elevated)'
                      : 'transparent',
                    borderRadius: 'var(--radius-sm)',
                    border: isLast ? '1px solid rgba(232,115,74,.25)' : 'none',
                  }}
                >
                  <span
                    style={{
                      fontSize: 'var(--text-caption)',
                      fontWeight: 700,
                      color: isLast ? 'var(--accent-text)' : 'var(--text-tertiary)',
                      minWidth: 24,
                      textAlign: 'center',
                    }}
                  >
                    {i + 1}
                  </span>
                  <span
                    style={{
                      fontSize: 'var(--text-small)',
                      fontWeight: isLast ? 600 : 400,
                      color: isLast ? 'var(--accent-text)' : 'var(--text-secondary)',
                      lineHeight: 'var(--leading-snug)',
                    }}
                  >
                    {step}
                  </span>
                </div>
              );
            })}
          </div>

          <p
            style={{
              marginTop: 'var(--space-5)',
              fontSize: 'var(--text-caption)',
              color: 'var(--text-tertiary)',
              textAlign: 'center',
            }}
          >
            Press <kbd>→</kbd> to continue
          </p>
        </div>
      )}
    </article>
  );
}
