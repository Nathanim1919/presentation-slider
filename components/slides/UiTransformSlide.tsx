'use client';

import { useState } from 'react';
import type { UiTransformContent } from '@/lib/types';

/* ------------------------------------------------------------------ */
/* The 8 UI pillars — directly from the transcript                     */
/* ------------------------------------------------------------------ */
const PILLARS = [
  { id: 'typography',    label: 'Typography',    desc: 'Fonts, weight, tracking' },
  { id: 'spacing',       label: 'Spacing',        desc: 'Rhythm, breathing room' },
  { id: 'color',         label: 'Color',           desc: 'Brand, contrast, meaning' },
  { id: 'layout',        label: 'Layout',          desc: 'Structure, alignment' },
  { id: 'hierarchy',     label: 'Hierarchy',       desc: 'Importance, focus' },
  { id: 'iconography',   label: 'Iconography',     desc: 'Icons, symbols' },
  { id: 'motion',        label: 'Motion',          desc: 'Animation, feedback' },
  { id: 'accessibility', label: 'Accessibility',   desc: 'Inclusion, clarity' },
] as const;

type PillarId = typeof PILLARS[number]['id'];

interface UiTransformSlideProps {
  content: UiTransformContent;
}

export default function UiTransformSlide({ content }: UiTransformSlideProps) {
  const [active, setActive] = useState<Set<PillarId>>(new Set());

  const toggle = (id: PillarId) =>
    setActive(prev => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });

  const has = (id: PillarId) => active.has(id);
  const count = active.size;

  /* ---------- derive form appearance from active pillars ----------- */
  const fontFamily = has('typography')
    ? "var(--font-lexend), 'Lexend', sans-serif"
    : 'monospace';
  const formPad   = has('spacing') ? '32px' : '14px';
  const inputPad  = has('spacing') ? '12px 14px' : '6px 8px';
  const fieldGap  = has('spacing') ? '18px' : '8px';
  const accentClr = has('color')   ? 'var(--accent)' : '#606060';
  const formBg    = has('color')   ? 'var(--bg-elevated)' : 'var(--bg-surface)';
  const radius    = has('layout')  ? 'var(--radius-md)' : '4px';
  const formRadius = has('layout') ? '20px' : '6px';
  const titleSize = has('hierarchy') ? '1.5rem' : '1rem';
  const titleW    = has('hierarchy') ? 700     : 400;
  const hasIcons  = has('iconography');
  const transition = has('motion') ? 'all 0.2s var(--ease-out)' : 'none';

  return (
    <article
      className="slide-article flex flex-1 flex-col px-8 py-5"
      style={{ gap: 'var(--space-4)' }}
    >
      {/* ── Heading ────────────────────────────────────────── */}
      <div className="stagger-1 slide-active">
        <h2
          style={{
            fontSize: 'var(--text-h3)',
            fontWeight: 600,
            color: 'var(--text-primary)',
            letterSpacing: '-0.02em',
            marginBottom: 'var(--space-1)',
          }}
        >
          {content.heading}
        </h2>
        <p style={{ fontSize: 'var(--text-small)', color: 'var(--text-tertiary)', margin: 0 }}>
          {content.description ??
            'Click each pillar to see what UI actually controls. Stack them to watch the form evolve.'}
        </p>
      </div>

      {/* ── Pillar pills ───────────────────────────────────── */}
      <div
        className="stagger-2 slide-active"
        style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--space-2)' }}
        role="group"
        aria-label="UI pillars"
      >
        {PILLARS.map(p => (
          <button
            key={p.id}
            onClick={() => toggle(p.id)}
            aria-pressed={has(p.id)}
            title={p.desc}
            style={{
              padding: '6px 16px',
              borderRadius: 'var(--radius-full)',
              border: `1px solid ${has(p.id) ? accentClr : 'var(--border-default)'}`,
              background: has(p.id) ? 'var(--accent-subtle)' : 'transparent',
              color: has(p.id) ? 'var(--accent-text)' : 'var(--text-secondary)',
              fontSize: 'var(--text-caption)',
              fontWeight: 500,
              cursor: 'pointer',
              transition: 'all 0.15s ease',
              letterSpacing: '0.02em',
            }}
          >
            {p.label}
          </button>
        ))}

        {count > 0 && (
          <button
            onClick={() => setActive(new Set())}
            style={{
              padding: '6px 16px',
              borderRadius: 'var(--radius-full)',
              border: '1px solid var(--border-subtle)',
              background: 'transparent',
              color: 'var(--text-tertiary)',
              fontSize: 'var(--text-caption)',
              cursor: 'pointer',
              transition: 'all 0.15s ease',
            }}
          >
            Reset
          </button>
        )}
      </div>

      {/* ── Live demo area ─────────────────────────────────── */}
      <div
        className="stagger-3 slide-active flex flex-1 items-center justify-center"
        style={{
          background: 'var(--bg-elevated)',
          borderRadius: 'var(--radius-lg)',
          border: '1px solid var(--border-subtle)',
          minHeight: 0,
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* ── The transforming form ── */}
        <div
          style={{
            maxWidth: 340,
            width: '100%',
            background: formBg,
            padding: formPad,
            borderRadius: formRadius,
            border: '1px solid var(--border-default)',
            display: 'flex',
            flexDirection: 'column',
            gap: fieldGap,
            fontFamily,
            transition,
            boxShadow: has('hierarchy') ? 'var(--shadow-md)' : 'none',
          }}
        >
          {/* Title */}
          <div style={{ marginBottom: has('spacing') ? '4px' : '0' }}>
            <h3
              style={{
                fontSize: titleSize,
                fontWeight: titleW,
                color: 'var(--text-primary)',
                margin: 0,
                letterSpacing: has('typography') ? '-0.025em' : '0',
                transition,
              }}
            >
              Welcome back
            </h3>
            {has('hierarchy') && (
              <p
                style={{
                  fontSize: '0.8125rem',
                  color: 'var(--text-tertiary)',
                  marginTop: '4px',
                  fontFamily,
                }}
              >
                Sign in to continue
              </p>
            )}
          </div>

          {/* Email */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
            {has('accessibility') && (
              <label
                style={{
                  fontSize: '0.6875rem',
                  fontWeight: 600,
                  color: 'var(--text-secondary)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.06em',
                  fontFamily,
                }}
              >
                Email address
              </label>
            )}
            <div style={{ position: 'relative' }}>
              {hasIcons && (
                <span
                  style={{
                    position: 'absolute',
                    left: 12,
                    top: '50%',
                    transform: 'translateY(-50%)',
                    color: 'var(--text-tertiary)',
                    fontSize: 14,
                    pointerEvents: 'none',
                  }}
                  aria-hidden="true"
                >
                  ✉
                </span>
              )}
              <input
                type="email"
                placeholder="you@example.com"
                readOnly
                style={{
                  width: '100%',
                  padding: inputPad,
                  paddingLeft: hasIcons ? '36px' : undefined,
                  borderRadius: radius,
                  border: '1px solid var(--border-default)',
                  background: 'var(--bg-surface)',
                  color: 'var(--text-secondary)',
                  fontSize: has('typography') ? '1rem' : '0.875rem',
                  fontFamily,
                  outline: 'none',
                  transition,
                  boxSizing: 'border-box',
                  cursor: 'default',
                }}
              />
            </div>
          </div>

          {/* Password */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
            {has('accessibility') && (
              <label
                style={{
                  fontSize: '0.6875rem',
                  fontWeight: 600,
                  color: 'var(--text-secondary)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.06em',
                  fontFamily,
                }}
              >
                Password
              </label>
            )}
            <div style={{ position: 'relative' }}>
              {hasIcons && (
                <span
                  style={{
                    position: 'absolute',
                    left: 12,
                    top: '50%',
                    transform: 'translateY(-50%)',
                    color: 'var(--text-tertiary)',
                    fontSize: 14,
                    pointerEvents: 'none',
                  }}
                  aria-hidden="true"
                >
                  🔒
                </span>
              )}
              <input
                type="password"
                placeholder="••••••••"
                readOnly
                style={{
                  width: '100%',
                  padding: inputPad,
                  paddingLeft: hasIcons ? '36px' : undefined,
                  borderRadius: radius,
                  border: '1px solid var(--border-default)',
                  background: 'var(--bg-surface)',
                  color: 'var(--text-secondary)',
                  fontSize: has('typography') ? '1rem' : '0.875rem',
                  fontFamily,
                  outline: 'none',
                  transition,
                  boxSizing: 'border-box',
                  cursor: 'default',
                }}
              />
            </div>
          </div>

          {/* Sign-in button */}
          <button
            style={{
              width: '100%',
              padding: has('spacing') ? '13px' : '7px',
              marginTop: has('spacing') ? '4px' : '0',
              background: accentClr,
              color: '#fff',
              border: 'none',
              borderRadius: radius,
              fontSize: has('typography') ? '1rem' : '0.875rem',
              fontWeight: has('hierarchy') ? 600 : 400,
              cursor: 'pointer',
              transition,
              fontFamily,
              letterSpacing: has('typography') ? '-0.01em' : '0',
            }}
          >
            Sign in
          </button>

          {has('hierarchy') && (
            <p
              style={{
                textAlign: 'center',
                fontSize: '0.8125rem',
                color: 'var(--text-tertiary)',
                margin: 0,
                fontFamily,
              }}
            >
              Forgot your password?{' '}
              <span style={{ color: accentClr, cursor: 'pointer' }}>Reset it</span>
            </p>
          )}
        </div>

        {/* Status badge */}
        <div
          style={{
            position: 'absolute',
            bottom: 'var(--space-4)',
            left: '50%',
            transform: 'translateX(-50%)',
            fontSize: 'var(--text-caption)',
            color: count === PILLARS.length ? 'var(--accent-text)' : 'var(--text-tertiary)',
            transition: 'color 0.3s ease',
            whiteSpace: 'nowrap',
          }}
        >
          {count === 0
            ? 'Click a pill above to see UI in action'
            : count === PILLARS.length
            ? `All ${PILLARS.length} pillars active — same form, completely different experience.`
            : `${count} of ${PILLARS.length} pillars active`}
        </div>
      </div>
    </article>
  );
}
