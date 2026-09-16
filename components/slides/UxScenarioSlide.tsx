'use client';

import { useState, useEffect } from 'react';
import type { UxScenarioContent } from '@/lib/types';

interface UxScenarioSlideProps {
  content: UxScenarioContent;
}

type Phase = 'bad' | 'reveal' | 'good';

export default function UxScenarioSlide({ content }: UxScenarioSlideProps) {
  const [phase, setPhase] = useState<Phase>('bad');

  // Scenario 01: Buttons state
  const [s1SavedBad, setS1SavedBad] = useState(false);
  const [s1SavedGood, setS1SavedGood] = useState(false);
  const [s1Name, setS1Name] = useState('Nathanim');
  const [s1Weekly, setS1Weekly] = useState(true);

  // Scenario 02: Destructive state
  const [s2DeletedBad, setS2DeletedBad] = useState(false);
  const [s2ModalOpenGood, setS2ModalOpenGood] = useState(false);
  const [s2DeletedGood, setS2DeletedGood] = useState(false);
  const [s2ConfirmChecked, setS2ConfirmChecked] = useState(false);

  // Scenario 03: Forms state
  const [s3Email, setS3Email] = useState('nathanim@example.com');
  const [s3Password, setS3Password] = useState('pass');
  const [s3Confirm, setS3Confirm] = useState('different');
  const [s3BadSubmitted, setS3BadSubmitted] = useState(false);
  const [s3GoodSubmitted, setS3GoodSubmitted] = useState(false);

  // Scenario 04: Navigation state
  const [s4ClickedBad, setS4ClickedBad] = useState<string | null>(null);
  const [s4ClickedGood, setS4ClickedGood] = useState<string | null>(null);

  // Scenario 05: Checkout state
  const [s5BadCharged, setS5BadCharged] = useState(false);
  const [s5GoodStep, setS5GoodStep] = useState<1 | 2 | 3>(3);
  const [s5GoodPlaced, setS5GoodPlaced] = useState(false);

  // Scenario 06: Empty state
  const [s6Projects, setS6Projects] = useState<string[]>([]);

  // Keyboard shortcut to switch phases: 1=bad, 2=reveal, 3=good
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const tag = (e.target as HTMLElement)?.tagName;
      if (tag === 'INPUT' || tag === 'TEXTAREA') return;

      if (e.key === '1') {
        setPhase('bad');
      } else if (e.key === '2' || e.key.toLowerCase() === 'r') {
        setPhase('reveal');
      } else if (e.key === '3' || e.key.toLowerCase() === 'g') {
        setPhase('good');
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <article
      className="slide-article flex flex-1 flex-col items-center justify-between px-6 py-4"
      style={{ width: '100%', height: '100%', position: 'relative' }}
    >
      {/* ---- TOP HEADER ---- */}
      <div
        className="ux-scenario-header"
        style={{
          width: '100%',
          maxWidth: 780,
          display: 'flex',
          alignItems: 'flex-start',
          justifyContent: 'space-between',
          borderBottom: '1px solid var(--border-subtle)',
          paddingBottom: 'var(--space-3)',
        }}
      >
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)', marginBottom: '2px' }}>
            <span
              style={{
                fontSize: 'var(--text-label)',
                fontWeight: 700,
                color: 'var(--accent-text)',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
              }}
            >
              {content.scenarioNumber}
            </span>
            <span style={{ fontSize: 'var(--text-caption)', color: 'var(--text-tertiary)' }}>·</span>
            <span
              style={{
                fontSize: 'var(--text-caption)',
                fontWeight: 600,
                color: 'var(--text-secondary)',
                letterSpacing: '0.04em',
                textTransform: 'uppercase',
              }}
            >
              {content.scenarioTitle}
            </span>
          </div>

          <p
            style={{
              fontSize: 'var(--text-small)',
              color: 'var(--text-primary)',
              fontWeight: 500,
              margin: 0,
            }}
          >
            {phase === 'bad'
              ? content.question
              : phase === 'reveal'
              ? 'Analyze what happened: the design problem and the UX principle.'
              : 'Experience the improved design — notice the clarity and predictability.'}
          </p>
        </div>

        {/* Phase Pill Selector */}
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            background: 'var(--bg-elevated)',
            border: '1px solid var(--border-default)',
            borderRadius: 'var(--radius-full)',
            padding: '2px',
            gap: '2px',
            flexShrink: 0,
          }}
        >
          <button
            type="button"
            onClick={() => setPhase('bad')}
            style={{
              padding: '4px 10px',
              fontSize: '11px',
              fontWeight: 600,
              borderRadius: 'var(--radius-full)',
              border: 'none',
              background: phase === 'bad' ? 'var(--bg-surface)' : 'transparent',
              color: phase === 'bad' ? 'var(--danger)' : 'var(--text-tertiary)',
              cursor: 'pointer',
              transition: 'all var(--duration-fast) ease',
            }}
          >
            1. Bad Design
          </button>
          <button
            type="button"
            onClick={() => setPhase('reveal')}
            style={{
              padding: '4px 10px',
              fontSize: '11px',
              fontWeight: 600,
              borderRadius: 'var(--radius-full)',
              border: 'none',
              background: phase === 'reveal' ? 'var(--accent)' : 'transparent',
              color: phase === 'reveal' ? '#ffffff' : 'var(--text-tertiary)',
              cursor: 'pointer',
              transition: 'all var(--duration-fast) ease',
            }}
          >
            2. The Problem
          </button>
          <button
            type="button"
            onClick={() => setPhase('good')}
            style={{
              padding: '4px 10px',
              fontSize: '11px',
              fontWeight: 600,
              borderRadius: 'var(--radius-full)',
              border: 'none',
              background: phase === 'good' ? 'var(--bg-surface)' : 'transparent',
              color: phase === 'good' ? 'var(--success)' : 'var(--text-tertiary)',
              cursor: 'pointer',
              transition: 'all var(--duration-fast) ease',
            }}
          >
            3. Good Design
          </button>
        </div>
      </div>

      {/* ---- CENTER STAGE: THE INTERACTIVE SANDBOX ---- */}
      <div
        style={{
          width: '100%',
          maxWidth: 780,
          minHeight: 340,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          position: 'relative',
          padding: 'var(--space-2) 0',
        }}
      >
        {/* ========================================================
            PHASE: REVEAL (WHAT YOU EXPERIENCED → PROBLEM → PRINCIPLE)
            ======================================================== */}
        {phase === 'reveal' && (
          <div
            style={{
              width: '100%',
              maxWidth: 680,
              background: 'var(--bg-elevated)',
              border: '1px solid var(--border-default)',
              borderRadius: 'var(--radius-lg)',
              padding: 'var(--space-5) var(--space-6)',
              boxShadow: 'var(--shadow-md)',
              display: 'flex',
              flexDirection: 'column',
              gap: 'var(--space-4)',
              animation: 'fadeIn 200ms ease forwards',
            }}
          >
            {/* What you experienced */}
            <div>
              <span
                style={{
                  fontSize: 'var(--text-label)',
                  fontWeight: 700,
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  color: 'var(--accent-text)',
                  display: 'block',
                  marginBottom: 'var(--space-1)',
                }}
              >
                WHAT YOU EXPERIENCED
              </span>
              <p
                style={{
                  fontSize: 'var(--text-body)',
                  color: 'var(--text-primary)',
                  lineHeight: 'var(--leading-relaxed)',
                  margin: 0,
                }}
              >
                "{content.reveal.whatYouExperienced}"
              </p>
            </div>

            {/* The problem */}
            <div>
              <span
                style={{
                  fontSize: 'var(--text-label)',
                  fontWeight: 700,
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  color: 'var(--danger)',
                  display: 'block',
                  marginBottom: 'var(--space-1)',
                }}
              >
                THE PROBLEM
              </span>
              <p
                style={{
                  fontSize: 'var(--text-small)',
                  color: 'var(--text-secondary)',
                  lineHeight: 'var(--leading-relaxed)',
                  margin: 0,
                }}
              >
                {content.reveal.theProblem}
              </p>
            </div>

            {/* The principle */}
            <div
              style={{
                padding: 'var(--space-3) var(--space-4)',
                borderLeft: '3px solid var(--accent)',
                background: 'var(--accent-subtle)',
                borderRadius: 'var(--radius-sm)',
              }}
            >
              <span
                style={{
                  fontSize: 'var(--text-label)',
                  fontWeight: 700,
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  color: 'var(--text-primary)',
                  display: 'block',
                  marginBottom: '2px',
                }}
              >
                THE UX PRINCIPLE
              </span>
              <p
                style={{
                  fontSize: 'var(--text-small)',
                  color: 'var(--text-primary)',
                  fontWeight: 500,
                  lineHeight: 'var(--leading-snug)',
                  margin: 0,
                }}
              >
                {content.reveal.thePrinciple}
              </p>
            </div>
          </div>
        )}

        {/* ========================================================
            SCENARIO 01: BUTTONS & AFFORDANCE
            ======================================================== */}
        {content.scenarioId === 'buttons' && phase !== 'reveal' && (
          <div
            style={{
              width: '100%',
              maxWidth: 580,
              background: 'var(--bg-elevated)',
              border: '1px solid var(--border-default)',
              borderRadius: 'var(--radius-lg)',
              padding: 'var(--space-5)',
              boxShadow: 'var(--shadow-md)',
              display: 'flex',
              flexDirection: 'column',
              gap: 'var(--space-4)',
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid var(--border-subtle)', paddingBottom: 'var(--space-2)' }}>
              <span style={{ fontSize: 'var(--text-small)', fontWeight: 600, color: 'var(--text-primary)' }}>
                Account Preferences
              </span>
              <span style={{ fontSize: '11px', color: phase === 'bad' ? 'var(--danger)' : 'var(--success)', fontWeight: 600 }}>
                {phase === 'bad' ? 'Ambiguous UI' : 'Clear Affordance'}
              </span>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
              <div>
                <label style={{ display: 'block', fontSize: '11px', color: 'var(--text-secondary)', marginBottom: 4 }}>
                  Display Name
                </label>
                <input
                  type="text"
                  value={s1Name}
                  onChange={(e) => setS1Name(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '6px 10px',
                    fontSize: 'var(--text-small)',
                    background: 'var(--bg-surface)',
                    border: '1px solid var(--border-default)',
                    borderRadius: 'var(--radius-sm)',
                    color: 'var(--text-primary)',
                    outline: 'none',
                  }}
                />
              </div>

              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <span style={{ fontSize: 'var(--text-small)', color: 'var(--text-secondary)' }}>
                  Receive weekly performance digest
                </span>
                <input
                  type="checkbox"
                  checked={s1Weekly}
                  onChange={(e) => setS1Weekly(e.target.checked)}
                  style={{ cursor: 'pointer' }}
                />
              </div>
            </div>

            {/* Bottom Action Area */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'flex-end',
                gap: 'var(--space-2)',
                paddingTop: 'var(--space-3)',
                borderTop: '1px solid var(--border-subtle)',
              }}
            >
              {phase === 'bad' ? (
                /* BAD: Icon-only ambiguous button */
                <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)' }}>
                  <span style={{ fontSize: '11px', color: 'var(--text-tertiary)' }}>
                    {s1SavedBad ? 'Action triggered (what happened?)' : 'Hover & click action:'}
                  </span>
                  <button
                    type="button"
                    onClick={() => setS1SavedBad(true)}
                    style={{
                      width: 36,
                      height: 36,
                      borderRadius: 'var(--radius-sm)',
                      background: 'var(--bg-surface)',
                      border: '1px solid var(--border-default)',
                      color: 'var(--text-primary)',
                      fontSize: '14px',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                    title=""
                  >
                    ✓
                  </button>
                </div>
              ) : (
                /* GOOD: Labeled button with clear affordance and feedback */
                <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)', width: '100%', justifyContent: 'space-between' }}>
                  <span style={{ fontSize: '11px', color: s1SavedGood ? 'var(--success)' : 'var(--text-tertiary)' }}>
                    {s1SavedGood ? '✓ Changes saved to account' : 'Clear labeled actions'}
                  </span>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)' }}>
                    <button
                      type="button"
                      onClick={() => {
                        setS1SavedGood(false);
                        setS1Name('Nathanim');
                      }}
                      style={{
                        padding: '6px 12px',
                        fontSize: 'var(--text-caption)',
                        background: 'transparent',
                        border: 'none',
                        color: 'var(--text-tertiary)',
                        cursor: 'pointer',
                      }}
                    >
                      Discard
                    </button>
                    <button
                      type="button"
                      onClick={() => setS1SavedGood(true)}
                      style={{
                        padding: '6px 14px',
                        fontSize: 'var(--text-caption)',
                        fontWeight: 600,
                        background: 'var(--accent)',
                        color: '#ffffff',
                        border: 'none',
                        borderRadius: 'var(--radius-sm)',
                        cursor: 'pointer',
                      }}
                    >
                      Save changes
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        {/* ========================================================
            SCENARIO 02: DESTRUCTIVE ACTIONS
            ======================================================== */}
        {content.scenarioId === 'destructive' && phase !== 'reveal' && (
          <div
            style={{
              width: '100%',
              maxWidth: 580,
              background: 'var(--bg-elevated)',
              border: '1px solid var(--border-default)',
              borderRadius: 'var(--radius-lg)',
              padding: 'var(--space-5)',
              boxShadow: 'var(--shadow-md)',
              display: 'flex',
              flexDirection: 'column',
              gap: 'var(--space-4)',
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid var(--border-subtle)', paddingBottom: 'var(--space-2)' }}>
              <div>
                <h4 style={{ margin: 0, fontSize: 'var(--text-small)', fontWeight: 600, color: 'var(--text-primary)' }}>
                  Project: Marketing Website
                </h4>
                <span style={{ fontSize: '11px', color: 'var(--text-tertiary)' }}>
                  14 published pages · 42 media assets
                </span>
              </div>
              <span style={{ fontSize: '11px', color: phase === 'bad' ? 'var(--danger)' : 'var(--success)', fontWeight: 600 }}>
                {phase === 'bad' ? 'Accidental Risk' : 'Error Prevention'}
              </span>
            </div>

            {phase === 'bad' ? (
              /* BAD: Vague confirmation dialog with identical buttons */
              <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
                {s2DeletedBad ? (
                  <div style={{ padding: 'var(--space-4)', background: 'var(--danger-subtle)', border: '1px solid var(--danger-border)', borderRadius: 'var(--radius-sm)' }}>
                    <p style={{ margin: 0, fontSize: 'var(--text-small)', color: 'var(--danger)' }}>
                      ⚠ Project deleted immediately without warning or consequence explanation.
                    </p>
                    <button
                      type="button"
                      onClick={() => setS2DeletedBad(false)}
                      style={{ marginTop: 8, fontSize: '11px', color: 'var(--text-secondary)', background: 'transparent', border: 'none', cursor: 'pointer', padding: 0 }}
                    >
                      ↺ Restore project to try again
                    </button>
                  </div>
                ) : (
                  <div style={{ padding: 'var(--space-3)', background: 'var(--bg-surface)', borderRadius: 'var(--radius-sm)' }}>
                    <p style={{ margin: '0 0 var(--space-3)', fontSize: 'var(--text-small)', color: 'var(--text-primary)' }}>
                      Delete Project
                    </p>
                    <div style={{ display: 'flex', gap: 'var(--space-2)' }}>
                      <button
                        type="button"
                        onClick={() => setS2DeletedBad(true)}
                        style={{
                          padding: '6px 14px',
                          background: 'var(--bg-elevated)',
                          border: '1px solid var(--border-default)',
                          borderRadius: 'var(--radius-sm)',
                          fontSize: 'var(--text-caption)',
                          color: 'var(--text-primary)',
                          cursor: 'pointer',
                        }}
                      >
                        Delete
                      </button>
                      <button
                        type="button"
                        style={{
                          padding: '6px 14px',
                          background: 'var(--bg-elevated)',
                          border: '1px solid var(--border-default)',
                          borderRadius: 'var(--radius-sm)',
                          fontSize: 'var(--text-caption)',
                          color: 'var(--text-primary)',
                          cursor: 'pointer',
                        }}
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              /* GOOD: Clear consequence, confirmation checkbox, distinct buttons */
              <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
                {s2DeletedGood ? (
                  <div style={{ padding: 'var(--space-4)', background: 'var(--bg-surface)', borderRadius: 'var(--radius-sm)' }}>
                    <p style={{ margin: 0, fontSize: 'var(--text-small)', color: 'var(--text-secondary)' }}>
                      Project "Marketing Website" permanently deleted.
                    </p>
                    <button
                      type="button"
                      onClick={() => {
                        setS2DeletedGood(false);
                        setS2ConfirmChecked(false);
                        setS2ModalOpenGood(false);
                      }}
                      style={{ marginTop: 8, fontSize: '11px', color: 'var(--accent-text)', background: 'transparent', border: 'none', cursor: 'pointer', padding: 0 }}
                    >
                      ↺ Reset demo
                    </button>
                  </div>
                ) : s2ModalOpenGood ? (
                  <div style={{ padding: 'var(--space-4)', background: 'var(--bg-surface)', border: '1px solid var(--danger-border)', borderRadius: 'var(--radius-md)' }}>
                    <h5 style={{ margin: '0 0 var(--space-2)', fontSize: 'var(--text-small)', fontWeight: 600, color: 'var(--text-primary)' }}>
                      Delete "Marketing Website"?
                    </h5>
                    <p style={{ margin: '0 0 var(--space-3)', fontSize: 'var(--text-caption)', color: 'var(--text-secondary)', lineHeight: 1.4 }}>
                      This will permanently delete the project, all 14 published pages, and 42 associated media assets. <strong>This action cannot be undone.</strong>
                    </p>
                    <label style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)', fontSize: '11px', color: 'var(--text-primary)', cursor: 'pointer', marginBottom: 'var(--space-4)' }}>
                      <input
                        type="checkbox"
                        checked={s2ConfirmChecked}
                        onChange={(e) => setS2ConfirmChecked(e.target.checked)}
                      />
                      I understand this action is permanent
                    </label>
                    <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 'var(--space-2)' }}>
                      <button
                        type="button"
                        onClick={() => setS2ModalOpenGood(false)}
                        style={{ padding: '6px 12px', background: 'transparent', border: '1px solid var(--border-default)', borderRadius: 'var(--radius-sm)', fontSize: 'var(--text-caption)', color: 'var(--text-secondary)', cursor: 'pointer' }}
                      >
                        Cancel
                      </button>
                      <button
                        type="button"
                        disabled={!s2ConfirmChecked}
                        onClick={() => setS2DeletedGood(true)}
                        style={{
                          padding: '6px 14px',
                          background: s2ConfirmChecked ? 'var(--danger)' : 'var(--bg-surface)',
                          color: s2ConfirmChecked ? '#ffffff' : 'var(--text-tertiary)',
                          border: 'none',
                          borderRadius: 'var(--radius-sm)',
                          fontSize: 'var(--text-caption)',
                          fontWeight: 600,
                          cursor: s2ConfirmChecked ? 'pointer' : 'not-allowed',
                        }}
                      >
                        Delete project permanently
                      </button>
                    </div>
                  </div>
                ) : (
                  <div>
                    <p style={{ margin: '0 0 var(--space-3)', fontSize: 'var(--text-caption)', color: 'var(--text-secondary)' }}>
                      Manage or delete this project and all affiliated files.
                    </p>
                    <button
                      type="button"
                      onClick={() => setS2ModalOpenGood(true)}
                      style={{
                        padding: '6px 12px',
                        background: 'transparent',
                        border: '1px solid var(--danger-border)',
                        color: 'var(--danger)',
                        borderRadius: 'var(--radius-sm)',
                        fontSize: 'var(--text-caption)',
                        fontWeight: 500,
                        cursor: 'pointer',
                      }}
                    >
                      Delete project...
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>
        )}

        {/* ========================================================
            SCENARIO 03: FORMS & ERROR MESSAGES
            ======================================================== */}
        {content.scenarioId === 'forms' && phase !== 'reveal' && (
          <div
            style={{
              width: '100%',
              maxWidth: 580,
              background: 'var(--bg-elevated)',
              border: '1px solid var(--border-default)',
              borderRadius: 'var(--radius-lg)',
              padding: 'var(--space-5)',
              boxShadow: 'var(--shadow-md)',
              display: 'flex',
              flexDirection: 'column',
              gap: 'var(--space-3)',
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid var(--border-subtle)', paddingBottom: 'var(--space-2)' }}>
              <span style={{ fontSize: 'var(--text-small)', fontWeight: 600, color: 'var(--text-primary)' }}>
                Create Account
              </span>
              <span style={{ fontSize: '11px', color: phase === 'bad' ? 'var(--danger)' : 'var(--success)', fontWeight: 600 }}>
                {phase === 'bad' ? 'Generic Blame' : 'Helpful Recovery'}
              </span>
            </div>

            {/* Bad generic error alert */}
            {phase === 'bad' && s3BadSubmitted && (
              <div
                style={{
                  padding: '8px 12px',
                  background: 'var(--danger-subtle)',
                  border: '1px solid var(--danger-border)',
                  borderRadius: 'var(--radius-sm)',
                  fontSize: 'var(--text-caption)',
                  color: 'var(--danger)',
                }}
              >
                ⚠ Something went wrong.
              </div>
            )}

            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2)' }}>
              <div>
                <label style={{ display: 'block', fontSize: '11px', color: 'var(--text-secondary)', marginBottom: 2 }}>
                  Email
                </label>
                <input
                  type="email"
                  value={s3Email}
                  onChange={(e) => setS3Email(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '6px 10px',
                    fontSize: 'var(--text-caption)',
                    background: 'var(--bg-surface)',
                    border: '1px solid var(--border-default)',
                    borderRadius: 'var(--radius-sm)',
                    color: 'var(--text-primary)',
                    outline: 'none',
                  }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '11px', color: 'var(--text-secondary)', marginBottom: 2 }}>
                  Password
                </label>
                <input
                  type="password"
                  value={s3Password}
                  onChange={(e) => setS3Password(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '6px 10px',
                    fontSize: 'var(--text-caption)',
                    background: 'var(--bg-surface)',
                    border: '1px solid var(--border-default)',
                    borderRadius: 'var(--radius-sm)',
                    color: 'var(--text-primary)',
                    outline: 'none',
                  }}
                />
                {/* Good inline rules */}
                {phase === 'good' && (
                  <div style={{ display: 'flex', gap: 'var(--space-3)', marginTop: 4, fontSize: '10px' }}>
                    <span style={{ color: s3Password.length >= 8 ? 'var(--success)' : 'var(--text-tertiary)' }}>
                      {s3Password.length >= 8 ? '✓' : '○'} 8+ characters
                    </span>
                    <span style={{ color: /\d/.test(s3Password) ? 'var(--success)' : 'var(--text-tertiary)' }}>
                      {/\d/.test(s3Password) ? '✓' : '○'} One number
                    </span>
                    <span style={{ color: /[A-Z]/.test(s3Password) ? 'var(--success)' : 'var(--text-tertiary)' }}>
                      {/[A-Z]/.test(s3Password) ? '✓' : '○'} One uppercase
                    </span>
                  </div>
                )}
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '11px', color: 'var(--text-secondary)', marginBottom: 2 }}>
                  Confirm Password
                </label>
                <input
                  type="password"
                  value={s3Confirm}
                  onChange={(e) => setS3Confirm(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '6px 10px',
                    fontSize: 'var(--text-caption)',
                    background: 'var(--bg-surface)',
                    border:
                      phase === 'good' && s3Confirm.length > 0 && s3Password !== s3Confirm
                        ? '1px solid var(--danger)'
                        : '1px solid var(--border-default)',
                    borderRadius: 'var(--radius-sm)',
                    color: 'var(--text-primary)',
                    outline: 'none',
                  }}
                />
                {/* Good inline mismatch error */}
                {phase === 'good' && s3Confirm.length > 0 && s3Password !== s3Confirm && (
                  <span style={{ display: 'block', fontSize: '10px', color: 'var(--danger)', marginTop: 2 }}>
                    Passwords don't match.
                  </span>
                )}
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: 'var(--space-2)' }}>
              <span style={{ fontSize: '11px', color: 'var(--text-tertiary)' }}>
                {phase === 'bad' ? 'Try submitting invalid data' : 'Real-time guidance'}
              </span>
              <button
                type="button"
                onClick={() => {
                  if (phase === 'bad') {
                    setS3BadSubmitted(true);
                    setS3Password('');
                    setS3Confirm('');
                  } else {
                    setS3GoodSubmitted(true);
                  }
                }}
                style={{
                  padding: '6px 14px',
                  fontSize: 'var(--text-caption)',
                  fontWeight: 600,
                  background: 'var(--accent)',
                  color: '#ffffff',
                  border: 'none',
                  borderRadius: 'var(--radius-sm)',
                  cursor: 'pointer',
                }}
              >
                Create Account
              </button>
            </div>
          </div>
        )}

        {/* ========================================================
            SCENARIO 04: NAVIGATION & INFORMATION ARCHITECTURE
            ======================================================== */}
        {content.scenarioId === 'navigation' && phase !== 'reveal' && (
          <div
            style={{
              width: '100%',
              maxWidth: 720,
              background: 'var(--bg-elevated)',
              border: '1px solid var(--border-default)',
              borderRadius: 'var(--radius-lg)',
              padding: 'var(--space-5)',
              boxShadow: 'var(--shadow-md)',
              display: 'flex',
              flexDirection: 'column',
              gap: 'var(--space-4)',
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid var(--border-subtle)', paddingBottom: 'var(--space-2)' }}>
              <span style={{ fontSize: 'var(--text-small)', fontWeight: 600, color: 'var(--text-primary)' }}>
                Acme Software Inc.
              </span>
              <span style={{ fontSize: '11px', color: phase === 'bad' ? 'var(--danger)' : 'var(--success)', fontWeight: 600 }}>
                {phase === 'bad' ? 'Flat Clutter (10 Links)' : 'Clear Hierarchy (4 Links + Primary CTA)'}
              </span>
            </div>

            {phase === 'bad' ? (
              /* BAD: 10 flat competing links */
              <div>
                <p style={{ fontSize: '11px', color: 'var(--text-tertiary)', margin: '0 0 var(--space-2)' }}>
                  Question: Where would you click to contact this company?
                </p>
                <div
                  style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    alignItems: 'center',
                    gap: 'var(--space-2)',
                    padding: 'var(--space-3)',
                    background: 'var(--bg-surface)',
                    borderRadius: 'var(--radius-sm)',
                  }}
                >
                  {[
                    'Dashboard',
                    'Services',
                    'Products',
                    'Solutions',
                    'Resources',
                    'Company',
                    'More',
                    'Other',
                    'Explore',
                    'Discover',
                  ].map((item) => (
                    <button
                      key={item}
                      type="button"
                      onClick={() => setS4ClickedBad(item)}
                      style={{
                        padding: '4px 8px',
                        fontSize: '11px',
                        background: s4ClickedBad === item ? 'var(--bg-hover)' : 'transparent',
                        border: '1px solid var(--border-subtle)',
                        borderRadius: 'var(--radius-sm)',
                        color: s4ClickedBad === item ? 'var(--text-primary)' : 'var(--text-secondary)',
                        cursor: 'pointer',
                      }}
                    >
                      {item}
                    </button>
                  ))}
                </div>
                {s4ClickedBad && (
                  <p style={{ fontSize: '11px', color: 'var(--text-secondary)', marginTop: 'var(--space-2)' }}>
                    You clicked <strong>{s4ClickedBad}</strong>. Did it lead to contact info? The user is forced to guess.
                  </p>
                )}
              </div>
            ) : (
              /* GOOD: 4 clear categories + 1 explicit CTA */
              <div>
                <p style={{ fontSize: '11px', color: 'var(--text-tertiary)', margin: '0 0 var(--space-2)' }}>
                  Clear visual priority: Core categories + Direct contact action
                </p>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: 'var(--space-3) var(--space-4)',
                    background: 'var(--bg-surface)',
                    borderRadius: 'var(--radius-sm)',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-4)' }}>
                    {['Products', 'Solutions', 'Pricing', 'Resources'].map((item) => (
                      <button
                        key={item}
                        type="button"
                        onClick={() => setS4ClickedGood(item)}
                        style={{
                          fontSize: 'var(--text-caption)',
                          fontWeight: 500,
                          background: 'transparent',
                          border: 'none',
                          color: s4ClickedGood === item ? 'var(--text-primary)' : 'var(--text-secondary)',
                          cursor: 'pointer',
                          padding: 0,
                        }}
                      >
                        {item}
                      </button>
                    ))}
                  </div>

                  <button
                    type="button"
                    onClick={() => setS4ClickedGood('Contact Sales')}
                    style={{
                      padding: '6px 14px',
                      fontSize: 'var(--text-caption)',
                      fontWeight: 600,
                      background: 'var(--accent)',
                      color: '#ffffff',
                      border: 'none',
                      borderRadius: 'var(--radius-sm)',
                      cursor: 'pointer',
                    }}
                  >
                    Contact Sales
                  </button>
                </div>
                {s4ClickedGood === 'Contact Sales' && (
                  <p style={{ fontSize: '11px', color: 'var(--success)', marginTop: 'var(--space-2)' }}>
                    ✓ Instant recognition. Eye lands immediately on the contact action without scanning.
                  </p>
                )}
              </div>
            )}
          </div>
        )}

        {/* ========================================================
            SCENARIO 05: CHECKOUT & TRUST
            ======================================================== */}
        {content.scenarioId === 'checkout' && phase !== 'reveal' && (
          <div
            style={{
              width: '100%',
              maxWidth: 580,
              background: 'var(--bg-elevated)',
              border: '1px solid var(--border-default)',
              borderRadius: 'var(--radius-lg)',
              padding: 'var(--space-5)',
              boxShadow: 'var(--shadow-md)',
              display: 'flex',
              flexDirection: 'column',
              gap: 'var(--space-4)',
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid var(--border-subtle)', paddingBottom: 'var(--space-2)' }}>
              <span style={{ fontSize: 'var(--text-small)', fontWeight: 600, color: 'var(--text-primary)' }}>
                Order Checkout
              </span>
              <span style={{ fontSize: '11px', color: phase === 'bad' ? 'var(--danger)' : 'var(--success)', fontWeight: 600 }}>
                {phase === 'bad' ? 'Hidden Fees & Uncertainty' : 'Transparent Certainty'}
              </span>
            </div>

            {phase === 'bad' ? (
              /* BAD: Hidden costs, vague button, uncertain charge */
              <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
                <div style={{ fontSize: '11px', color: 'var(--text-tertiary)' }}>
                  Cart → Address → Payment → ??? → Order
                </div>
                <div style={{ padding: 'var(--space-3)', background: 'var(--bg-surface)', borderRadius: 'var(--radius-sm)' }}>
                  <p style={{ margin: '0 0 4px', fontSize: 'var(--text-small)', fontWeight: 600, color: 'var(--text-primary)' }}>
                    UI/UX Masterclass Course
                  </p>
                  <p style={{ margin: 0, fontSize: 'var(--text-caption)', color: 'var(--text-secondary)' }}>
                    Price: 1,500 ETB (Delivery & taxes not calculated)
                  </p>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: 'var(--space-2)' }}>
                  <span style={{ fontSize: '11px', color: 'var(--danger)' }}>
                    {s5BadCharged ? '⚠ Card charged 1,725 ETB! (Hidden fees added)' : 'Will clicking submit charge me?'}
                  </span>
                  <button
                    type="button"
                    onClick={() => setS5BadCharged(true)}
                    style={{
                      padding: '6px 14px',
                      fontSize: 'var(--text-caption)',
                      fontWeight: 600,
                      background: 'var(--bg-hover)',
                      border: '1px solid var(--border-default)',
                      color: 'var(--text-primary)',
                      borderRadius: 'var(--radius-sm)',
                      cursor: 'pointer',
                    }}
                  >
                    Continue
                  </button>
                </div>
              </div>
            ) : (
              /* GOOD: 3 clear steps, itemized transparent review */
              <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
                <div style={{ display: 'flex', gap: 'var(--space-3)', fontSize: '11px' }}>
                  <span style={{ color: 'var(--text-secondary)' }}>1. Delivery (Addis Ababa)</span>
                  <span style={{ color: 'var(--border-strong)' }}>·</span>
                  <span style={{ color: 'var(--text-secondary)' }}>2. Payment (•••• 1234)</span>
                  <span style={{ color: 'var(--border-strong)' }}>·</span>
                  <span style={{ color: 'var(--accent-text)', fontWeight: 600 }}>3. Review</span>
                </div>

                <div style={{ padding: 'var(--space-3) var(--space-4)', background: 'var(--bg-surface)', borderRadius: 'var(--radius-sm)', display: 'flex', flexDirection: 'column', gap: '4px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 'var(--text-caption)', color: 'var(--text-secondary)' }}>
                    <span>UI/UX Masterclass Course</span>
                    <span>1,500 ETB</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 'var(--text-caption)', color: 'var(--text-secondary)' }}>
                    <span>Standard Delivery</span>
                    <span>150 ETB</span>
                  </div>
                  <div style={{ borderTop: '1px solid var(--border-subtle)', margin: '4px 0' }} />
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 'var(--text-small)', fontWeight: 700, color: 'var(--text-primary)' }}>
                    <span>Total</span>
                    <span>1,650 ETB</span>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: 'var(--space-1)' }}>
                  <span style={{ fontSize: '11px', color: s5GoodPlaced ? 'var(--success)' : 'var(--text-tertiary)' }}>
                    {s5GoodPlaced ? '✓ Order placed! Receipt sent to email.' : 'No hidden fees before payment.'}
                  </span>
                  <button
                    type="button"
                    onClick={() => setS5GoodPlaced(true)}
                    style={{
                      padding: '8px 16px',
                      fontSize: 'var(--text-caption)',
                      fontWeight: 600,
                      background: 'var(--accent)',
                      color: '#ffffff',
                      border: 'none',
                      borderRadius: 'var(--radius-sm)',
                      cursor: 'pointer',
                    }}
                  >
                    Place order — 1,650 ETB
                  </button>
                </div>
              </div>
            )}
          </div>
        )}

        {/* ========================================================
            SCENARIO 06: EMPTY STATES
            ======================================================== */}
        {content.scenarioId === 'empty_states' && phase !== 'reveal' && (
          <div
            style={{
              width: '100%',
              maxWidth: 580,
              background: 'var(--bg-elevated)',
              border: '1px solid var(--border-default)',
              borderRadius: 'var(--radius-lg)',
              padding: 'var(--space-5)',
              boxShadow: 'var(--shadow-md)',
              display: 'flex',
              flexDirection: 'column',
              gap: 'var(--space-4)',
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid var(--border-subtle)', paddingBottom: 'var(--space-2)' }}>
              <span style={{ fontSize: 'var(--text-small)', fontWeight: 600, color: 'var(--text-primary)' }}>
                My Projects
              </span>
              <span style={{ fontSize: '11px', color: phase === 'bad' ? 'var(--danger)' : 'var(--success)', fontWeight: 600 }}>
                {phase === 'bad' ? 'Blank Dead End' : 'Context + Next Action'}
              </span>
            </div>

            {phase === 'bad' ? (
              /* BAD: Completely empty blank space */
              <div
                style={{
                  height: 140,
                  background: 'var(--bg-surface)',
                  border: '1px dashed var(--border-default)',
                  borderRadius: 'var(--radius-sm)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <span style={{ fontSize: '11px', color: 'var(--text-tertiary)', fontStyle: 'italic' }}>
                  (Completely blank screen — no text, no guidance, no action)
                </span>
              </div>
            ) : (
              /* GOOD: Contextual illustration, explanation, working button */
              <div>
                {s6Projects.length === 0 ? (
                  <div
                    style={{
                      padding: 'var(--space-5) var(--space-4)',
                      background: 'var(--bg-surface)',
                      borderRadius: 'var(--radius-sm)',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      textAlign: 'center',
                      gap: 'var(--space-2)',
                    }}
                  >
                    <span style={{ fontSize: '24px', opacity: 0.7 }}>📁</span>
                    <h5 style={{ margin: 0, fontSize: 'var(--text-small)', fontWeight: 600, color: 'var(--text-primary)' }}>
                      You don't have any projects yet.
                    </h5>
                    <p style={{ margin: 0, fontSize: 'var(--text-caption)', color: 'var(--text-secondary)', maxWidth: '38ch' }}>
                      Create your first project to start organizing your wireframes and research notes.
                    </p>
                    <button
                      type="button"
                      onClick={() => setS6Projects(['UniFlow Student Portal'])}
                      style={{
                        marginTop: 'var(--space-2)',
                        padding: '6px 14px',
                        fontSize: 'var(--text-caption)',
                        fontWeight: 600,
                        background: 'var(--accent)',
                        color: '#ffffff',
                        border: 'none',
                        borderRadius: 'var(--radius-sm)',
                        cursor: 'pointer',
                      }}
                    >
                      + Create project
                    </button>
                  </div>
                ) : (
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2)' }}>
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        padding: 'var(--space-3) var(--space-4)',
                        background: 'var(--bg-surface)',
                        borderRadius: 'var(--radius-sm)',
                        border: '1px solid var(--border-subtle)',
                      }}
                    >
                      <div>
                        <span style={{ fontSize: 'var(--text-small)', fontWeight: 600, color: 'var(--text-primary)', display: 'block' }}>
                          UniFlow Student Portal
                        </span>
                        <span style={{ fontSize: '11px', color: 'var(--text-tertiary)' }}>
                          Created just now · 0 screens
                        </span>
                      </div>
                      <span style={{ fontSize: '11px', color: 'var(--success)' }}>Active</span>
                    </div>
                    <button
                      type="button"
                      onClick={() => setS6Projects([])}
                      style={{
                        alignSelf: 'flex-start',
                        fontSize: '11px',
                        color: 'var(--text-tertiary)',
                        background: 'transparent',
                        border: 'none',
                        cursor: 'pointer',
                        padding: 0,
                        marginTop: 4,
                      }}
                    >
                      ↺ Reset to empty state
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>
        )}

        {/* Takeaway banner when in GOOD phase */}
        {phase === 'good' && (
          <div
            style={{
              marginTop: 'var(--space-3)',
              padding: 'var(--space-2) var(--space-4)',
              background: 'var(--accent-subtle)',
              borderLeft: '3px solid var(--accent)',
              borderRadius: 'var(--radius-sm)',
              maxWidth: 680,
              width: '100%',
              animation: 'fadeIn 200ms ease forwards',
            }}
          >
            <p style={{ margin: 0, fontSize: 'var(--text-small)', fontWeight: 600, color: 'var(--text-primary)' }}>
              ✦ {content.takeaway}
            </p>
          </div>
        )}
      </div>

      {/* ---- BOTTOM STEP CONTROLS ---- */}
      <div
        style={{
          width: '100%',
          maxWidth: 780,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          borderTop: '1px solid var(--border-subtle)',
          paddingTop: 'var(--space-3)',
        }}
      >
        <button
          type="button"
          onClick={() => {
            if (phase === 'good') setPhase('reveal');
            else if (phase === 'reveal') setPhase('bad');
          }}
          disabled={phase === 'bad'}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 'var(--space-1)',
            padding: 'var(--space-1) var(--space-3)',
            background: 'transparent',
            border: '1px solid var(--border-subtle)',
            borderRadius: 'var(--radius-sm)',
            fontSize: 'var(--text-caption)',
            color: phase === 'bad' ? 'var(--text-tertiary)' : 'var(--text-secondary)',
            cursor: phase === 'bad' ? 'default' : 'pointer',
            opacity: phase === 'bad' ? 0.3 : 1,
          }}
        >
          ← Previous phase
        </button>

        <span style={{ fontSize: '11px', color: 'var(--text-tertiary)' }}>
          Shortcut: <kbd>1</kbd> Bad · <kbd>2</kbd> Reveal · <kbd>3</kbd> Good
        </span>

        <button
          type="button"
          onClick={() => {
            if (phase === 'bad') setPhase('reveal');
            else if (phase === 'reveal') setPhase('good');
            else setPhase('bad');
          }}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 'var(--space-1)',
            padding: 'var(--space-1) var(--space-3)',
            background: phase === 'good' ? 'transparent' : 'var(--accent)',
            border: phase === 'good' ? '1px solid var(--border-default)' : 'none',
            borderRadius: 'var(--radius-sm)',
            fontSize: 'var(--text-caption)',
            fontWeight: 600,
            color: phase === 'good' ? 'var(--text-secondary)' : '#ffffff',
            cursor: 'pointer',
          }}
        >
          {phase === 'bad'
            ? 'Reveal the Problem →'
            : phase === 'reveal'
            ? 'Try Good Design →'
            : '↺ Restart Scenario'}
        </button>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(4px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </article>
  );
}
