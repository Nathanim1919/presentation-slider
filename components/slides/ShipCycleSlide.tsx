'use client';

import { useState, useEffect, useRef } from 'react';
import type { LifecycleContent, LifecycleStage } from '@/lib/types';

interface ShipCycleSlideProps {
  content: LifecycleContent;
}

export default function ShipCycleSlide({ content }: ShipCycleSlideProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [animatingStep, setAnimatingStep] = useState<number>(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const stages = content.stages;
  const activeStage: LifecycleStage | null = selectedIndex !== null ? stages[selectedIndex] : null;

  // Stagger reveal steps when a stage is selected
  useEffect(() => {
    if (selectedIndex === null) {
      setAnimatingStep(0);
      return;
    }

    setAnimatingStep(1);
    const t1 = setTimeout(() => setAnimatingStep(2), 140);
    const t2 = setTimeout(() => setAnimatingStep(3), 280);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, [selectedIndex]);

  // Keyboard navigation when detail is open
  useEffect(() => {
    if (selectedIndex === null) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        e.stopPropagation();
        setSelectedIndex(null);
      } else if (e.key === 'ArrowRight') {
        e.preventDefault();
        e.stopPropagation();
        if (selectedIndex < stages.length - 1) {
          setSelectedIndex(selectedIndex + 1);
        } else {
          // Loop back to first stage
          setSelectedIndex(0);
        }
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        e.stopPropagation();
        if (selectedIndex > 0) {
          setSelectedIndex(selectedIndex - 1);
        } else {
          setSelectedIndex(stages.length - 1);
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown, { capture: true });
    return () => window.removeEventListener('keydown', handleKeyDown, { capture: true });
  }, [selectedIndex, stages.length]);

  return (
    <article
      ref={containerRef}
      className="flex flex-1 flex-col items-center justify-center px-6 py-4"
      style={{ width: '100%', height: '100%', position: 'relative' }}
    >
      {/* ---- TOP TITLE & SUBTITLE ---- */}
      <div
        className="text-center"
        style={{
          marginBottom: selectedIndex !== null ? 'var(--space-4)' : 'var(--space-7)',
          transition: 'all var(--duration-normal) ease',
        }}
      >
        <span
          style={{
            fontSize: 'var(--text-label)',
            fontWeight: 600,
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            color: 'var(--accent-text)',
            display: 'block',
            marginBottom: 'var(--space-2)',
          }}
        >
          Continuous Product Thinking
        </span>

        <h2
          style={{
            fontSize: selectedIndex !== null ? 'var(--text-h3)' : 'var(--text-h2)',
            fontWeight: 700,
            color: 'var(--text-primary)',
            lineHeight: 'var(--leading-snug)',
            letterSpacing: '-0.02em',
            margin: 0,
            transition: 'font-size var(--duration-normal) ease',
          }}
        >
          {content.heading || "You're Not Done When You Ship"}
        </h2>

        <p
          style={{
            fontSize: 'var(--text-caption)',
            color: 'var(--text-tertiary)',
            marginTop: 'var(--space-1)',
            marginBottom: 0,
          }}
        >
          {selectedIndex === null
            ? 'Click any stage to zoom into the concept · The loop never ends'
            : `Exploring Stage ${stages[selectedIndex].number} of ${String(stages.length).padStart(2, '0')} · Press ESC to zoom out`}
        </p>
      </div>

      {/* ---- 6-STAGE CARDS FLOW ---- */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '100%',
          maxWidth: 960,
          position: 'relative',
          gap: 0,
          marginBottom: selectedIndex !== null ? 'var(--space-4)' : 'var(--space-6)',
          transition: 'all var(--duration-normal) ease',
        }}
      >
        {stages.map((stage, idx) => {
          const isSelected = selectedIndex === idx;
          const isInactive = selectedIndex !== null && !isSelected;

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
              {/* The Stage Card Button */}
              <button
                type="button"
                onClick={() => setSelectedIndex(isSelected ? null : idx)}
                aria-expanded={isSelected}
                aria-label={`Explore stage ${stage.number}: ${stage.label}`}
                style={{
                  flex: 1,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: selectedIndex !== null ? 'var(--space-2) var(--space-2)' : 'var(--space-4) var(--space-2)',
                  minHeight: selectedIndex !== null ? 60 : 88,
                  borderRadius: 'var(--radius-md)',
                  background: isSelected
                    ? 'var(--accent-subtle)'
                    : isInactive
                    ? 'var(--bg-elevated)'
                    : 'var(--bg-elevated)',
                  border: isSelected
                    ? '2px solid var(--accent)'
                    : '1px solid var(--border-default)',
                  boxShadow: isSelected
                    ? '0 0 0 1px var(--accent), 0 4px 20px rgba(232, 115, 74, 0.25)'
                    : 'none',
                  opacity: isInactive ? 0.35 : 1,
                  transform: isSelected
                    ? 'scale(1.04)'
                    : isInactive
                    ? 'scale(0.96)'
                    : 'scale(1)',
                  transition: 'all var(--duration-normal) var(--ease-out)',
                  cursor: 'pointer',
                  outline: 'none',
                  position: 'relative',
                }}
                onMouseEnter={(e) => {
                  if (!isSelected && selectedIndex === null) {
                    (e.currentTarget as HTMLElement).style.borderColor = 'var(--accent)';
                    (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isSelected && selectedIndex === null) {
                    (e.currentTarget as HTMLElement).style.borderColor = 'var(--border-default)';
                    (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
                  }
                }}
              >
                {/* Number tag */}
                <span
                  style={{
                    fontSize: '10px',
                    fontWeight: 600,
                    letterSpacing: '0.05em',
                    color: isSelected ? 'var(--accent-text)' : 'var(--text-tertiary)',
                    marginBottom: 2,
                  }}
                >
                  {stage.number}
                </span>

                {/* Title */}
                <span
                  style={{
                    fontSize: selectedIndex !== null ? 'var(--text-caption)' : 'var(--text-small)',
                    fontWeight: 700,
                    color: isSelected ? 'var(--accent-text)' : 'var(--text-primary)',
                    letterSpacing: '0.04em',
                    lineHeight: 'var(--leading-snug)',
                  }}
                >
                  {stage.label}
                </span>

                {/* Subtitle (hidden when compact/selected to keep flow clean) */}
                {selectedIndex === null && (
                  <span
                    style={{
                      fontSize: '11px',
                      color: 'var(--text-tertiary)',
                      marginTop: 'var(--space-1)',
                      textAlign: 'center',
                      lineHeight: 1.2,
                    }}
                  >
                    {stage.subtitle}
                  </span>
                )}

                {/* Anchor indicator beacon pointing to detail panel */}
                {isSelected && (
                  <div
                    style={{
                      position: 'absolute',
                      bottom: -10,
                      left: '50%',
                      transform: 'translateX(-50%)',
                      width: 0,
                      height: 0,
                      borderLeft: '7px solid transparent',
                      borderRight: '7px solid transparent',
                      borderTop: '8px solid var(--accent)',
                      zIndex: 10,
                    }}
                    aria-hidden="true"
                  />
                )}
              </button>

              {/* Arrow Connector between cards */}
              {idx < stages.length - 1 && (
                <div
                  style={{
                    width: 18,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: isInactive ? 'var(--border-subtle)' : 'var(--border-strong)',
                    fontSize: '12px',
                    opacity: isInactive ? 0.3 : 0.8,
                    flexShrink: 0,
                    transition: 'all var(--duration-normal) ease',
                  }}
                  aria-hidden="true"
                >
                  →
                </div>
              )}

              {/* Final Loop Indicator after stage 6 (IMPROVE) */}
              {idx === stages.length - 1 && (
                <div
                  style={{
                    position: 'absolute',
                    right: -24,
                    display: 'flex',
                    alignItems: 'center',
                    gap: 2,
                    color: isSelected ? 'var(--accent)' : 'var(--accent-text)',
                    fontSize: '11px',
                    fontWeight: 600,
                    opacity: isInactive ? 0.3 : 0.9,
                    transition: 'all var(--duration-normal) ease',
                  }}
                  title="Loops back to Design"
                >
                  <span style={{ fontSize: '13px' }}>↺</span>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* ---- DETAIL VIEW (TEMPORARILY ZOOMING INTO SELECTED STAGE) ---- */}
      {activeStage !== null ? (
        <div
          role="region"
          aria-label={`Detailed breakdown of ${activeStage.label}`}
          className="allow-scroll"
          style={{
            width: '100%',
            maxWidth: 960,
            maxHeight: 'calc(100dvh - 250px)',
            background: 'var(--bg-elevated)',
            border: '1px solid var(--border-strong)',
            borderRadius: 'var(--radius-lg)',
            boxShadow: 'var(--shadow-md)',
            padding: 'var(--space-5) var(--space-6)',
            display: 'flex',
            flexDirection: 'column',
            gap: 'var(--space-4)',
            overflowY: 'auto',
            animation: 'fadeInUp 260ms var(--ease-out) forwards',
          }}
        >
          {/* Top Bar inside Detail View */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              borderBottom: '1px solid var(--border-subtle)',
              paddingBottom: 'var(--space-3)',
            }}
          >
            {/* Back Button */}
            <button
              type="button"
              onClick={() => setSelectedIndex(null)}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 'var(--space-2)',
                padding: 'var(--space-1) var(--space-3)',
                background: 'var(--bg-surface)',
                border: '1px solid var(--border-default)',
                borderRadius: 'var(--radius-sm)',
                color: 'var(--text-secondary)',
                fontSize: 'var(--text-caption)',
                fontWeight: 600,
                cursor: 'pointer',
                transition: 'all var(--duration-fast) ease',
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = 'var(--accent)';
                (e.currentTarget as HTMLElement).style.color = 'var(--text-primary)';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = 'var(--border-default)';
                (e.currentTarget as HTMLElement).style.color = 'var(--text-secondary)';
              }}
            >
              <span>← Back to flow</span>
              <kbd
                style={{
                  fontSize: '10px',
                  padding: '1px 4px',
                  background: 'var(--bg-primary)',
                  border: '1px solid var(--border-subtle)',
                  borderRadius: '3px',
                  color: 'var(--text-tertiary)',
                }}
              >
                ESC
              </kbd>
            </button>

            {/* Current Stage Indicator */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)' }}>
              <span
                style={{
                  fontSize: 'var(--text-caption)',
                  fontWeight: 600,
                  color: 'var(--accent-text)',
                  letterSpacing: '0.05em',
                  textTransform: 'uppercase',
                }}
              >
                {activeStage.label} · Stage {activeStage.number} / {String(stages.length).padStart(2, '0')}
              </span>
            </div>

            {/* Prev / Next Stage Switcher */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)' }}>
              <button
                type="button"
                onClick={() => {
                  if (selectedIndex !== null) {
                    setSelectedIndex(selectedIndex > 0 ? selectedIndex - 1 : stages.length - 1);
                  }
                }}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 'var(--space-1)',
                  padding: 'var(--space-1) var(--space-3)',
                  background: 'transparent',
                  border: '1px solid var(--border-subtle)',
                  borderRadius: 'var(--radius-sm)',
                  color: 'var(--text-secondary)',
                  fontSize: '11px',
                  fontWeight: 500,
                  cursor: 'pointer',
                }}
                title="Previous stage (ArrowLeft)"
              >
                <span>← {selectedIndex !== null ? stages[(selectedIndex - 1 + stages.length) % stages.length].label : ''}</span>
              </button>

              <button
                type="button"
                onClick={() => {
                  if (selectedIndex !== null) {
                    setSelectedIndex((selectedIndex + 1) % stages.length);
                  }
                }}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 'var(--space-1)',
                  padding: 'var(--space-1) var(--space-3)',
                  background: 'transparent',
                  border: '1px solid var(--border-subtle)',
                  borderRadius: 'var(--radius-sm)',
                  color: 'var(--text-secondary)',
                  fontSize: '11px',
                  fontWeight: 500,
                  cursor: 'pointer',
                }}
                title="Next stage (ArrowRight)"
              >
                <span>{selectedIndex !== null ? stages[(selectedIndex + 1) % stages.length].label : ''} →</span>
              </button>
            </div>
          </div>

          {/* Progressive Reveal Phase 1: Header */}
          <div
            style={{
              opacity: animatingStep >= 1 ? 1 : 0,
              transform: animatingStep >= 1 ? 'translateY(0)' : 'translateY(4px)',
              transition: 'all 200ms ease',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'baseline', gap: 'var(--space-3)' }}>
              <h3
                style={{
                  fontSize: 'var(--text-h2)',
                  fontWeight: 700,
                  color: 'var(--text-primary)',
                  letterSpacing: '-0.02em',
                  margin: 0,
                  lineHeight: 'var(--leading-snug)',
                }}
              >
                {activeStage.label}
              </h3>
              <span
                style={{
                  fontSize: 'var(--text-body)',
                  fontWeight: 500,
                  color: 'var(--accent-text)',
                }}
              >
                — {activeStage.subtitle}
              </span>
            </div>

            <p
              style={{
                fontSize: 'var(--text-body)',
                color: 'var(--text-primary)',
                fontWeight: 500,
                lineHeight: 'var(--leading-normal)',
                marginTop: 'var(--space-2)',
                marginBottom: 0,
                maxWidth: '65ch',
              }}
            >
              "{activeStage.mainIdea}"
            </p>
          </div>

          {/* Progressive Reveal Phase 2 & 3: Two Columns Layout */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1.1fr 1fr',
              gap: 'var(--space-5)',
              opacity: animatingStep >= 2 ? 1 : 0,
              transform: animatingStep >= 2 ? 'translateY(0)' : 'translateY(6px)',
              transition: 'all 240ms ease',
            }}
          >
            {/* Left Column: Why it matters & Key Points */}
            <div
              style={{
                padding: 'var(--space-4)',
                background: 'var(--bg-surface)',
                borderRadius: 'var(--radius-md)',
                border: '1px solid var(--border-subtle)',
                display: 'flex',
                flexDirection: 'column',
                gap: 'var(--space-3)',
              }}
            >
              <span
                style={{
                  fontSize: 'var(--text-label)',
                  fontWeight: 600,
                  color: 'var(--text-tertiary)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                }}
              >
                {activeStage.whyItMattersHeading || 'What This Stage Involves'}
              </span>

              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                {activeStage.whyItMatters.map((point, i) => (
                  <li
                    key={i}
                    style={{
                      fontSize: 'var(--text-small)',
                      color: 'var(--text-secondary)',
                      lineHeight: 'var(--leading-normal)',
                      padding: 'var(--space-1) 0',
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: 'var(--space-2)',
                    }}
                  >
                    <span
                      style={{
                        width: 5,
                        height: 5,
                        borderRadius: 'var(--radius-full)',
                        background: 'var(--accent)',
                        marginTop: 7,
                        flexShrink: 0,
                      }}
                      aria-hidden="true"
                    />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>

              {/* Core Statement Banner */}
              <div
                style={{
                  marginTop: 'auto',
                  padding: 'var(--space-3) var(--space-4)',
                  background: 'var(--accent-subtle)',
                  borderRadius: 'var(--radius-sm)',
                  borderLeft: '3px solid var(--accent)',
                }}
              >
                <span
                  style={{
                    fontSize: 'var(--text-caption)',
                    fontWeight: 600,
                    color: 'var(--text-primary)',
                    display: 'block',
                    lineHeight: 'var(--leading-snug)',
                  }}
                >
                  ✦ {activeStage.keyStatement}
                </span>
              </div>
            </div>

            {/* Right Column: Concrete Example & Contrast */}
            <div
              style={{
                padding: 'var(--space-4)',
                background: 'var(--bg-surface)',
                borderRadius: 'var(--radius-md)',
                border: '1px solid var(--border-subtle)',
                display: 'flex',
                flexDirection: 'column',
                gap: 'var(--space-3)',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <span
                  style={{
                    fontSize: 'var(--text-label)',
                    fontWeight: 600,
                    color: 'var(--accent-text)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.08em',
                  }}
                >
                  {activeStage.example.title}
                </span>
              </div>

              {/* Comparison Box if applicable */}
              {activeStage.example.comparison && (
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 'var(--space-2)',
                    padding: 'var(--space-3)',
                    background: 'var(--bg-elevated)',
                    borderRadius: 'var(--radius-sm)',
                    border: '1px solid var(--border-subtle)',
                  }}
                >
                  <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <span
                      style={{
                        fontSize: '10px',
                        fontWeight: 600,
                        color: 'var(--text-tertiary)',
                        textTransform: 'uppercase',
                      }}
                    >
                      {activeStage.example.comparison.labelA}
                    </span>
                    <span
                      style={{
                        fontSize: 'var(--text-caption)',
                        color: 'var(--danger)',
                        fontWeight: 600,
                      }}
                    >
                      {activeStage.example.comparison.valueA}
                    </span>
                  </div>

                  <div
                    style={{
                      height: 1,
                      background: 'var(--border-subtle)',
                      margin: '2px 0',
                    }}
                  />

                  <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <span
                      style={{
                        fontSize: '10px',
                        fontWeight: 600,
                        color: 'var(--text-tertiary)',
                        textTransform: 'uppercase',
                      }}
                    >
                      {activeStage.example.comparison.labelB}
                    </span>
                    <span
                      style={{
                        fontSize: 'var(--text-caption)',
                        color: 'var(--success)',
                        fontWeight: 600,
                      }}
                    >
                      {activeStage.example.comparison.valueB}
                    </span>
                  </div>
                </div>
              )}

              {/* Visual Flow Steps if applicable */}
              {activeStage.example.flow && (
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 'var(--space-2)',
                    padding: 'var(--space-3)',
                    background: 'var(--bg-elevated)',
                    borderRadius: 'var(--radius-sm)',
                    border: '1px solid var(--border-subtle)',
                    flexWrap: 'wrap',
                  }}
                >
                  {activeStage.example.flow.map((step, sIdx) => (
                    <div key={sIdx} style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)' }}>
                      <span
                        style={{
                          fontSize: 'var(--text-caption)',
                          fontWeight: 600,
                          color: sIdx === activeStage.example.flow!.length - 1 ? 'var(--accent-text)' : 'var(--text-secondary)',
                          padding: '2px 6px',
                          background: 'var(--bg-surface)',
                          borderRadius: '4px',
                        }}
                      >
                        {step}
                      </span>
                      {sIdx < activeStage.example.flow!.length - 1 && (
                        <span style={{ color: 'var(--text-tertiary)', fontSize: '11px' }}>↓</span>
                      )}
                    </div>
                  ))}
                </div>
              )}

              <p
                style={{
                  fontSize: 'var(--text-small)',
                  color: 'var(--text-secondary)',
                  lineHeight: 'var(--leading-relaxed)',
                  margin: 0,
                }}
              >
                {activeStage.example.description}
              </p>

              {/* Talking Point Note */}
              {activeStage.talkingPoint && (
                <div
                  style={{
                    marginTop: 'auto',
                    padding: 'var(--space-2) var(--space-3)',
                    background: 'var(--bg-elevated)',
                    borderRadius: 'var(--radius-sm)',
                    border: '1px solid var(--border-subtle)',
                  }}
                >
                  <span
                    style={{
                      fontSize: '11px',
                      color: 'var(--text-tertiary)',
                      display: 'block',
                      lineHeight: 'var(--leading-normal)',
                    }}
                  >
                    🎙 <em>Presenter note:</em> {activeStage.talkingPoint}
                  </span>
                </div>
              )}
            </div>
          </div>

          {/* Special Teaching Moment when IMPROVE is selected */}
          {activeStage.id === 'improve' && (
            <div
              style={{
                marginTop: 'var(--space-2)',
                padding: 'var(--space-3) var(--space-4)',
                background: 'linear-gradient(90deg, var(--accent-subtle), var(--bg-surface))',
                borderRadius: 'var(--radius-md)',
                border: '1px solid var(--accent)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}
            >
              <div>
                <span
                  style={{
                    fontSize: 'var(--text-small)',
                    fontWeight: 700,
                    color: 'var(--accent-text)',
                    marginRight: 'var(--space-3)',
                  }}
                >
                  Ship ≠ Finished.
                </span>
                <span style={{ fontSize: 'var(--text-caption)', color: 'var(--text-secondary)' }}>
                  Every release gives us another chance to learn. Build → Learn → Improve → Repeat.
                </span>
              </div>
              <span
                style={{
                  fontSize: '11px',
                  fontWeight: 600,
                  color: 'var(--accent-text)',
                  padding: '2px 8px',
                  borderRadius: 'var(--radius-full)',
                  border: '1px solid var(--accent)',
                  flexShrink: 0,
                }}
              >
                Continuous Loop ↺
              </span>
            </div>
          )}
        </div>
      ) : (
        /* ---- BOTTOM SUMMARY BANNER (WHEN NO STAGE EXPANDED) ---- */
        <div
          className="stagger-4 slide-active text-center"
          style={{
            maxWidth: 680,
            marginTop: 'var(--space-4)',
            padding: 'var(--space-4) var(--space-6)',
            background: 'var(--bg-elevated)',
            borderRadius: 'var(--radius-md)',
            border: '1px solid var(--border-default)',
            boxShadow: 'var(--shadow-sm)',
          }}
        >
          <p
            style={{
              fontSize: 'var(--text-body)',
              fontWeight: 600,
              color: 'var(--text-primary)',
              margin: '0 0 var(--space-2)',
              letterSpacing: '-0.01em',
            }}
          >
            "Ship ≠ Finished."
          </p>

          <p
            style={{
              fontSize: 'var(--text-small)',
              color: 'var(--text-secondary)',
              margin: 0,
              lineHeight: 'var(--leading-normal)',
            }}
          >
            Analytics tells you <strong style={{ color: 'var(--text-primary)' }}>WHAT</strong> happened.{' '}
            Research helps you understand <strong style={{ color: 'var(--accent-text)' }}>WHY</strong>.
          </p>
        </div>
      )}

      {/* Keyframe animation styling */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(8px);
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
