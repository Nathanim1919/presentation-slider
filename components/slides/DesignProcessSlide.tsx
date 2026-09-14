'use client';

import { useState, useEffect } from 'react';
import type { DesignProcessContent, DesignProcessStage } from '@/lib/types';

interface DesignProcessSlideProps {
  content: DesignProcessContent;
}

export default function DesignProcessSlide({ content }: DesignProcessSlideProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [isIterateView, setIsIterateView] = useState<boolean>(false);

  const stages = content.stages;
  const activeStage: DesignProcessStage | null =
    selectedIndex !== null && !isIterateView ? stages[selectedIndex] : null;

  const isDetailOpen = selectedIndex !== null || isIterateView;

  // Keyboard navigation when detail is open
  useEffect(() => {
    if (selectedIndex === null && !isIterateView) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        e.stopPropagation();
        setSelectedIndex(null);
        setIsIterateView(false);
      } else if (e.key === 'ArrowRight') {
        e.preventDefault();
        e.stopPropagation();
        if (isIterateView) {
          setIsIterateView(false);
          setSelectedIndex(0);
        } else if (selectedIndex !== null) {
          if (selectedIndex < stages.length - 1) {
            setSelectedIndex(selectedIndex + 1);
          } else {
            setIsIterateView(true);
            setSelectedIndex(null);
          }
        }
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        e.stopPropagation();
        if (isIterateView) {
          setIsIterateView(false);
          setSelectedIndex(stages.length - 1);
        } else if (selectedIndex !== null) {
          if (selectedIndex > 0) {
            setSelectedIndex(selectedIndex - 1);
          } else {
            setIsIterateView(true);
            setSelectedIndex(null);
          }
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown, { capture: true });
    return () => window.removeEventListener('keydown', handleKeyDown, { capture: true });
  }, [selectedIndex, isIterateView, stages.length]);

  return (
    <article
      className="flex flex-1 flex-col items-center justify-center px-6 py-4"
      style={{ width: '100%', height: '100%', position: 'relative' }}
    >
      {/* ---- HEADER ---- */}
      <div
        className="text-center"
        style={{
          marginBottom: isDetailOpen ? 'var(--space-3)' : 'var(--space-6)',
          transition: 'margin var(--duration-normal) ease',
        }}
      >
        <span
          style={{
            fontSize: 'var(--text-label)',
            fontWeight: 600,
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            color: 'var(--accent-text)',
            display: 'block',
            marginBottom: 'var(--space-1)',
          }}
        >
          THE DESIGN PROCESS
        </span>

        <h2
          style={{
            fontSize: isDetailOpen ? 'var(--text-h3)' : 'var(--text-h2)',
            fontWeight: 700,
            color: 'var(--text-primary)',
            lineHeight: 'var(--leading-snug)',
            letterSpacing: '-0.02em',
            margin: 0,
            transition: 'font-size var(--duration-normal) ease',
          }}
        >
          {content.heading}
        </h2>

        {!isDetailOpen && (
          <p
            style={{
              fontSize: 'var(--text-caption)',
              color: 'var(--text-tertiary)',
              marginTop: 'var(--space-1)',
              marginBottom: 0,
            }}
          >
            Click any stage to explore the questions · The process is a learning loop
          </p>
        )}
      </div>

      {/* ---- 6 PROCESS STAGE CARDS CONTAINER ---- */}
      <div
        style={{
          width: '100%',
          maxWidth: 960,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          position: 'relative',
        }}
      >
        {/* Stages Row */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%',
            gap: 0,
            position: 'relative',
            zIndex: 2,
          }}
        >
          {stages.map((stage, idx) => {
            const isSelected = selectedIndex === idx;
            const isMuted = isDetailOpen && !isSelected;

            return (
              <div
                key={stage.id}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  flex: 1,
                  position: 'relative',
                }}
              >
                <button
                  type="button"
                  onClick={() => {
                    setIsIterateView(false);
                    setSelectedIndex(isSelected ? null : idx);
                  }}
                  aria-expanded={isSelected}
                  aria-label={`Stage ${stage.number}: ${stage.label} — ${stage.subtitle}`}
                  style={{
                    flex: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: isDetailOpen
                      ? 'var(--space-2) var(--space-2)'
                      : 'var(--space-4) var(--space-2)',
                    minHeight: isDetailOpen ? 52 : 86,
                    borderRadius: 'var(--radius-md)',
                    background: isSelected ? 'var(--accent-subtle)' : 'var(--bg-elevated)',
                    border: isSelected
                      ? '1.5px solid var(--accent)'
                      : '1px solid var(--border-default)',
                    opacity: isMuted ? 0.45 : 1,
                    transform: isSelected ? 'scale(1.02)' : isMuted ? 'scale(0.98)' : 'scale(1)',
                    boxShadow: isSelected ? 'var(--shadow-md)' : 'var(--shadow-sm)',
                    cursor: 'pointer',
                    transition: 'all var(--duration-fast) ease',
                    outline: 'none',
                  }}
                >
                  <span
                    style={{
                      fontSize: '10px',
                      fontWeight: 600,
                      color: isSelected ? 'var(--accent-text)' : 'var(--text-tertiary)',
                      marginBottom: 2,
                    }}
                  >
                    {stage.number}
                  </span>
                  <span
                    style={{
                      fontSize: isDetailOpen ? 'var(--text-caption)' : 'var(--text-small)',
                      fontWeight: 700,
                      color: 'var(--text-primary)',
                      letterSpacing: '0.03em',
                    }}
                  >
                    {stage.label}
                  </span>

                  {!isDetailOpen && (
                    <span
                      style={{
                        fontSize: '11px',
                        color: 'var(--text-secondary)',
                        marginTop: 'var(--space-1)',
                        textAlign: 'center',
                        lineHeight: 1.2,
                      }}
                    >
                      {stage.subtitle}
                    </span>
                  )}
                </button>

                {idx < stages.length - 1 && (
                  <div
                    style={{
                      width: 14,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'var(--border-strong)',
                      fontSize: '11px',
                      opacity: isMuted ? 0.25 : 0.7,
                      flexShrink: 0,
                    }}
                    aria-hidden="true"
                  >
                    →
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* The Return Loop SVG (LEARN ➔ ITERATE ➔ UNDERSTAND) */}
        <div
          style={{
            width: '100%',
            height: isDetailOpen ? 36 : 46,
            position: 'relative',
            marginTop: 2,
            transition: 'height var(--duration-fast) ease',
          }}
        >
          <svg
            viewBox="0 0 1000 46"
            preserveAspectRatio="none"
            style={{
              width: '100%',
              height: '100%',
              display: 'block',
              overflow: 'visible',
            }}
            aria-hidden="true"
          >
            {/* Return path starting from bottom-center of card 6 (x=917), curving down and across to bottom of card 1 (x=83) */}
            <path
              d="M 917 0 L 917 16 Q 917 38 895 38 L 105 38 Q 83 38 83 16 L 83 4"
              fill="none"
              stroke={isIterateView ? 'var(--accent)' : 'var(--border-strong)'}
              strokeWidth={isIterateView ? '2' : '1.5'}
              strokeDasharray={isIterateView ? 'none' : '4 4'}
              opacity={isIterateView ? 1 : 0.6}
              style={{ transition: 'all var(--duration-fast) ease' }}
            />
            {/* Arrowhead pointing up at UNDERSTAND */}
            <polygon
              points="78,9 83,0 88,9"
              fill={isIterateView ? 'var(--accent)' : 'var(--border-strong)'}
              opacity={isIterateView ? 1 : 0.7}
            />
          </svg>

          {/* Interactive ITERATE Badge in the center of the loop line */}
          <div
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -15%)',
              zIndex: 3,
            }}
          >
            <button
              type="button"
              onClick={() => {
                setSelectedIndex(null);
                setIsIterateView(!isIterateView);
              }}
              aria-label="Explore the iterate loop"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 'var(--space-2)',
                padding: '4px 14px',
                background: isIterateView ? 'var(--accent)' : 'var(--bg-elevated)',
                border: isIterateView
                  ? '1.5px solid var(--accent)'
                  : '1px solid var(--border-default)',
                borderRadius: 'var(--radius-full)',
                color: isIterateView ? 'var(--text-inverted)' : 'var(--text-secondary)',
                fontSize: '11px',
                fontWeight: 600,
                letterSpacing: '0.04em',
                cursor: 'pointer',
                boxShadow: isIterateView ? 'var(--shadow-md)' : 'var(--shadow-sm)',
                transition: 'all var(--duration-fast) ease',
              }}
            >
              <span style={{ fontSize: '12px' }}>↻</span>
              <span>ITERATE</span>
            </button>
          </div>
        </div>
      </div>

      {/* ---- LAYER 2: EXPANDED CARD (WHEN A STAGE OR ITERATE IS CLICKED) ---- */}
      {isDetailOpen ? (
        <div
          role="region"
          style={{
            width: '100%',
            maxWidth: 780,
            background: 'var(--bg-elevated)',
            border: '1px solid var(--border-default)',
            borderRadius: 'var(--radius-lg)',
            boxShadow: 'var(--shadow-md)',
            padding: 'var(--space-5) var(--space-6)',
            marginTop: 'var(--space-3)',
            display: 'flex',
            flexDirection: 'column',
            gap: 'var(--space-4)',
            animation: 'fadeIn 200ms ease forwards',
          }}
        >
          {/* Header Row: Stage Name / Question & Close Button */}
          <div
            style={{
              display: 'flex',
              alignItems: 'flex-start',
              justifyContent: 'space-between',
              borderBottom: '1px solid var(--border-subtle)',
              paddingBottom: 'var(--space-3)',
            }}
          >
            <div>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 'var(--space-2)',
                  marginBottom: 'var(--space-1)',
                }}
              >
                <span
                  style={{
                    fontSize: 'var(--text-label)',
                    fontWeight: 700,
                    color: 'var(--accent-text)',
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                  }}
                >
                  {isIterateView
                    ? 'THE CORE LOOP · ↻ ITERATE'
                    : `STAGE ${activeStage?.number} · ${activeStage?.label}`}
                </span>
                {!isIterateView && (
                  <span style={{ fontSize: 'var(--text-caption)', color: 'var(--text-tertiary)' }}>
                    — {activeStage?.subtitle}
                  </span>
                )}
              </div>

              <h3
                style={{
                  fontSize: 'var(--text-h3)',
                  fontWeight: 600,
                  color: 'var(--text-primary)',
                  margin: 0,
                  lineHeight: 'var(--leading-snug)',
                }}
              >
                {isIterateView
                  ? '“Why is design a loop, not a straight line?”'
                  : `“${activeStage?.question}”`}
              </h3>
            </div>

            <button
              type="button"
              onClick={() => {
                setSelectedIndex(null);
                setIsIterateView(false);
              }}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 'var(--space-2)',
                padding: 'var(--space-1) var(--space-3)',
                background: 'transparent',
                border: '1px solid var(--border-default)',
                borderRadius: 'var(--radius-sm)',
                color: 'var(--text-secondary)',
                fontSize: 'var(--text-caption)',
                fontWeight: 500,
                cursor: 'pointer',
                flexShrink: 0,
              }}
            >
              <span>Back to loop</span>
              <kbd style={{ fontSize: '10px', color: 'var(--text-tertiary)' }}>ESC</kbd>
            </button>
          </div>

          {/* Card Body */}
          {isIterateView ? (
            /* Iterate Loop Body */
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
              <p
                style={{
                  fontSize: 'var(--text-body)',
                  color: 'var(--text-primary)',
                  lineHeight: 'var(--leading-relaxed)',
                  margin: 0,
                }}
              >
                Every stage creates information that can change the previous stage. The arrows show a
                common direction, but real design moves backward and forward.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2)' }}>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: 'var(--space-2)' }}>
                  <span style={{ color: 'var(--accent-text)', fontWeight: 700 }}>•</span>
                  <span style={{ color: 'var(--text-secondary)', fontSize: 'var(--text-small)' }}>
                    <strong>Iteration doesn't always mean changing the UI:</strong> Sometimes the output
                    of testing is a better interface. Sometimes it's realizing we were solving the wrong
                    problem.
                  </span>
                </div>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: 'var(--space-2)' }}>
                  <span style={{ color: 'var(--accent-text)', fontWeight: 700 }}>•</span>
                  <span style={{ color: 'var(--text-secondary)', fontSize: 'var(--text-small)' }}>
                    <strong>Mental models, not rigid laws:</strong> While prototyping, you may discover
                    you need to understand the user better (PROTOTYPE → UNDERSTAND). While testing, you
                    may reframe the problem (TEST → DEFINE).
                  </span>
                </div>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: 'var(--space-2)' }}>
                  <span style={{ color: 'var(--accent-text)', fontWeight: 700 }}>•</span>
                  <span style={{ color: 'var(--text-secondary)', fontSize: 'var(--text-small)' }}>
                    <strong>Reduce uncertainty:</strong> We're not trying to prove that our idea is
                    correct — we're trying to discover truth and learn quickly.
                  </span>
                </div>
              </div>

              {/* Takeaway Quote */}
              <div
                style={{
                  marginTop: 'var(--space-1)',
                  padding: 'var(--space-3) var(--space-4)',
                  borderLeft: '3px solid var(--accent)',
                  background: 'var(--accent-subtle)',
                  borderRadius: 'var(--radius-sm)',
                }}
              >
                <p
                  style={{
                    fontSize: 'var(--text-small)',
                    fontWeight: 600,
                    color: 'var(--text-primary)',
                    margin: 0,
                    lineHeight: 'var(--leading-snug)',
                  }}
                >
                  ✦ "The loop isn't there because designers love circular diagrams. It's there because
                  learning changes what we do next."
                </p>
              </div>

              {/* Navigation */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  paddingTop: 'var(--space-2)',
                  borderTop: '1px solid var(--border-subtle)',
                }}
              >
                <button
                  type="button"
                  onClick={() => {
                    setIsIterateView(false);
                    setSelectedIndex(stages.length - 1);
                  }}
                  style={{
                    background: 'transparent',
                    border: 'none',
                    color: 'var(--text-tertiary)',
                    fontSize: 'var(--text-caption)',
                    cursor: 'pointer',
                    padding: 0,
                  }}
                >
                  ← Previous (Stage 06: LEARN)
                </button>

                <button
                  type="button"
                  onClick={() => {
                    setIsIterateView(false);
                    setSelectedIndex(0);
                  }}
                  style={{
                    background: 'transparent',
                    border: 'none',
                    color: 'var(--accent-text)',
                    fontSize: 'var(--text-caption)',
                    fontWeight: 600,
                    cursor: 'pointer',
                    padding: 0,
                  }}
                >
                  Next (Stage 01: UNDERSTAND) →
                </button>
              </div>
            </div>
          ) : activeStage !== null ? (
            /* Specific Stage Body */
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
              {/* Definition */}
              <p
                style={{
                  fontSize: 'var(--text-body)',
                  color: 'var(--text-primary)',
                  lineHeight: 'var(--leading-relaxed)',
                  margin: 0,
                }}
              >
                {activeStage.definition}
              </p>

              {/* What We Investigate (Clean Bullets) */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2)' }}>
                {activeStage.whatWeDo.map((item, i) => (
                  <div
                    key={i}
                    style={{
                      display: 'flex',
                      alignItems: 'baseline',
                      gap: 'var(--space-2)',
                      fontSize: 'var(--text-small)',
                      color: 'var(--text-secondary)',
                      lineHeight: 'var(--leading-normal)',
                    }}
                  >
                    <span style={{ color: 'var(--accent-text)', fontWeight: 700 }}>•</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              {/* Key Takeaway / Insight Quote */}
              <div
                style={{
                  marginTop: 'var(--space-1)',
                  padding: 'var(--space-3) var(--space-4)',
                  borderLeft: '3px solid var(--accent)',
                  background: 'var(--accent-subtle)',
                  borderRadius: 'var(--radius-sm)',
                }}
              >
                <p
                  style={{
                    fontSize: 'var(--text-small)',
                    fontWeight: 600,
                    color: 'var(--text-primary)',
                    margin: 0,
                    lineHeight: 'var(--leading-snug)',
                  }}
                >
                  ✦ "{activeStage.keyIdea}"
                </p>
              </div>

              {/* Next / Previous Switcher */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  paddingTop: 'var(--space-2)',
                  borderTop: '1px solid var(--border-subtle)',
                }}
              >
                <button
                  type="button"
                  onClick={() => {
                    if (selectedIndex! > 0) setSelectedIndex(selectedIndex! - 1);
                    else {
                      setIsIterateView(true);
                      setSelectedIndex(null);
                    }
                  }}
                  style={{
                    background: 'transparent',
                    border: 'none',
                    color: 'var(--text-tertiary)',
                    fontSize: 'var(--text-caption)',
                    cursor: 'pointer',
                    padding: 0,
                  }}
                >
                  ← {selectedIndex! > 0 ? stages[selectedIndex! - 1].label : '↻ ITERATE'}
                </button>

                <button
                  type="button"
                  onClick={() => {
                    if (selectedIndex! < stages.length - 1) setSelectedIndex(selectedIndex! + 1);
                    else {
                      setIsIterateView(true);
                      setSelectedIndex(null);
                    }
                  }}
                  style={{
                    background: 'transparent',
                    border: 'none',
                    color: 'var(--accent-text)',
                    fontSize: 'var(--text-caption)',
                    fontWeight: 600,
                    cursor: 'pointer',
                    padding: 0,
                  }}
                >
                  {selectedIndex! < stages.length - 1 ? stages[selectedIndex! + 1].label : '↻ ITERATE'}{' '}
                  →
                </button>
              </div>
            </div>
          ) : null}
        </div>
      ) : (
        /* ---- LAYER 1: THE MINDSET (DEFAULT BOTTOM STATEMENT) ---- */
        <div
          className="text-center"
          style={{
            marginTop: 'var(--space-6)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 'var(--space-2)',
          }}
        >
          <span
            style={{
              fontSize: 'var(--text-label)',
              fontWeight: 700,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: 'var(--accent-text)',
            }}
          >
            THE MINDSET
          </span>
          <p
            style={{
              fontSize: 'clamp(1.1rem, 1.6vw, 1.35rem)',
              fontWeight: 500,
              color: 'var(--text-primary)',
              lineHeight: 'var(--leading-snug)',
              maxWidth: 620,
              margin: 0,
            }}
          >
            The goal isn't to be right on the first attempt.
            <br />
            <span style={{ color: 'var(--text-secondary)' }}>The goal is to learn quickly.</span>
          </p>
        </div>
      )}

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
