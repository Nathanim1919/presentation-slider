'use client';

import { useState } from 'react';
import type { ButtonStoryContent } from '@/lib/types';

type BtnState = 'idle' | 'hover' | 'loading' | 'success' | 'error';

interface StepInfo {
  label: string;
  caption: string;
  principle?: string;
  detail?: string;
}

const STATES: Record<BtnState, StepInfo> = {
  idle: {
    label: 'PAY $49',
    caption: 'Just a button. But everything about it communicates something.',
  },
  hover: {
    label: 'PAY $49',
    caption: 'Hover state: the interface responds before you commit.',
    principle: 'Feedback starts before the click',
  },
  loading: {
    label: 'Processing…',
    caption:
      'Loading state: the interface tells you it heard you and is working.',
    principle: 'Never leave the user in silence',
  },
  success: {
    label: '✓ Payment complete',
    caption: 'Success state: clear, positive, final.',
    principle: 'Confirm every outcome',
  },
  error: {
    label: '✗ Payment failed',
    caption: 'Error state: descriptive, human, with a path forward.',
    principle: 'Help users recover',
    detail: 'Your card wasn\'t charged. Check your details and try again.',
  },
};

const COLORS: Record<
  BtnState,
  { bg: string; border: string; color: string; shadow?: string }
> = {
  idle: {
    bg: 'var(--accent)',
    border: 'var(--accent)',
    color: '#fff',
    shadow: '0 4px 16px rgba(232, 115, 74, 0.35)',
  },
  hover: {
    bg: 'var(--accent-hover)',
    border: 'var(--accent-hover)',
    color: '#fff',
    shadow: '0 6px 24px rgba(232, 115, 74, 0.55)',
  },
  loading: {
    bg: 'var(--bg-surface)',
    border: 'var(--border-strong)',
    color: 'var(--text-secondary)',
  },
  success: {
    bg: 'var(--success-subtle)',
    border: 'var(--success-border)',
    color: 'var(--success)',
  },
  error: {
    bg: 'var(--danger-subtle)',
    border: 'var(--danger-border)',
    color: 'var(--danger)',
  },
};

interface ButtonStorySlideProps {
  content: ButtonStoryContent;
}

export default function ButtonStorySlide({ content }: ButtonStorySlideProps) {
  const [state, setState] = useState<BtnState>('idle');

  const handleClick = () => {
    if (state === 'idle' || state === 'hover') {
      setState('loading');
      // Deterministically cycle success then error for demos
      const goSuccess = Math.random() > 0.35;
      setTimeout(() => setState(goSuccess ? 'success' : 'error'), 1800);
    }
  };

  const reset = () => setState('idle');

  const info   = STATES[state];
  const colors = COLORS[state];
  const isDisabled = state === 'loading';

  return (
    <article className="flex flex-1 flex-col items-center justify-center px-8">
      {/* Heading */}
      <h2
        className="stagger-1 slide-active"
        style={{
          fontSize: 'var(--text-h2)',
          fontWeight: 600,
          color: 'var(--text-primary)',
          letterSpacing: '-0.025em',
          textAlign: 'center',
          marginBottom: 'var(--space-10)',
          maxWidth: '28ch',
          lineHeight: 'var(--leading-snug)',
        }}
      >
        {content.heading}
      </h2>

      {/* Button + caption stack */}
      <div
        className="stagger-2 slide-active flex flex-col items-center"
        style={{ gap: 'var(--space-7)' }}
      >
        {/* The button */}
        <button
          onClick={handleClick}
          onMouseEnter={() => state === 'idle' && setState('hover')}
          onMouseLeave={() => state === 'hover' && setState('idle')}
          disabled={isDisabled}
          aria-busy={state === 'loading'}
          style={{
            minWidth: 220,
            padding: '18px 44px',
            fontSize: '1.125rem',
            fontWeight: 600,
            letterSpacing: '-0.01em',
            background: colors.bg,
            color: colors.color,
            border: `1.5px solid ${colors.border}`,
            borderRadius: 'var(--radius-md)',
            cursor: isDisabled ? 'wait' : state === 'success' || state === 'error' ? 'default' : 'pointer',
            transition: 'all 0.22s var(--ease-out)',
            boxShadow: colors.shadow ?? 'none',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 10,
            transform: state === 'hover' ? 'translateY(-2px) scale(1.02)' : 'none',
          }}
        >
          {state === 'loading' && (
            <span
              className="btn-spinner"
              style={{
                display: 'inline-block',
                width: 18,
                height: 18,
                border: '2px solid var(--border-default)',
                borderTopColor: 'var(--text-secondary)',
                borderRadius: '50%',
              }}
              aria-hidden="true"
            />
          )}
          {info.label}
        </button>

        {/* Caption */}
        <div style={{ textAlign: 'center', maxWidth: '38ch' }}>
          <p
            style={{
              fontSize: 'var(--text-body)',
              color: 'var(--text-secondary)',
              lineHeight: 'var(--leading-normal)',
              marginBottom: info.principle ? 'var(--space-4)' : 0,
            }}
          >
            {info.caption}
          </p>

          {info.principle && (
            <span
              style={{
                display: 'inline-block',
                fontSize: 'var(--text-small)',
                fontWeight: 600,
                color: 'var(--accent-text)',
                padding: '5px 14px',
                background: 'var(--accent-subtle)',
                borderRadius: 'var(--radius-full)',
                letterSpacing: '0.01em',
              }}
            >
              {info.principle}
            </span>
          )}
        </div>

        {/* Error detail card */}
        {state === 'error' && info.detail && (
          <div
            style={{
              padding: 'var(--space-4) var(--space-5)',
              background: 'var(--danger-subtle)',
              border: '1px solid var(--danger-border)',
              borderRadius: 'var(--radius-md)',
              maxWidth: 340,
              textAlign: 'center',
            }}
          >
            <p style={{ fontSize: 'var(--text-small)', color: 'var(--danger)', margin: 0 }}>
              {info.detail}
            </p>
          </div>
        )}

        {/* Reset */}
        {(state === 'success' || state === 'error') && (
          <button
            onClick={reset}
            style={{
              fontSize: 'var(--text-caption)',
              color: 'var(--text-tertiary)',
              background: 'none',
              border: '1px solid var(--border-subtle)',
              padding: '6px 16px',
              borderRadius: 'var(--radius-full)',
              cursor: 'pointer',
              transition: 'border-color var(--duration-fast) ease',
            }}
          >
            Reset demo
          </button>
        )}
      </div>

      {/* Narrative footer */}
      {content.narrative && (
        <p
          className="stagger-3 slide-active"
          style={{
            position: 'absolute',
            bottom: 'var(--space-7)',
            left: '50%',
            transform: 'translateX(-50%)',
            fontSize: 'var(--text-small)',
            color: 'var(--text-tertiary)',
            textAlign: 'center',
            maxWidth: '52ch',
            lineHeight: 'var(--leading-normal)',
            whiteSpace: 'nowrap',
          }}
        >
          {content.narrative}
        </p>
      )}

      <style>{`
        .btn-spinner {
          animation: btn-spin 0.75s linear infinite;
        }
        @keyframes btn-spin {
          to { transform: rotate(360deg); }
        }
      `}</style>
    </article>
  );
}
