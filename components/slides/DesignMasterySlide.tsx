'use client';

import { useState } from 'react';
import type { DesignMasteryContent } from '@/lib/types';

interface DesignMasterySlideProps {
  content: DesignMasteryContent;
}

export default function DesignMasterySlide({ content }: DesignMasterySlideProps) {
  // 1-indexed for progressive reveal: 1 to 6 (or 6 for all visible)
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [showAll, setShowAll] = useState<boolean>(false);

  const totalSteps = content.principles.length;
  const activeIndex = currentStep - 1;
  const activePrinciple = content.principles[activeIndex] || content.principles[0];

  return (
    <article className="flex flex-1 flex-col items-center justify-between px-8 py-6 max-w-6xl mx-auto w-full overflow-hidden">
      {/* 1. Header & The Visual Growth Loop */}
      <div className="w-full flex flex-col items-center text-center">
        <h2
          className="stagger-1 slide-active"
          style={{
            fontSize: 'var(--text-h2)',
            fontWeight: 700,
            color: 'var(--text-primary)',
            letterSpacing: '-0.03em',
            margin: 0,
            marginBottom: 'var(--space-2)',
          }}
        >
          {content.heading}
        </h2>
        {content.subtitle && (
          <p
            className="stagger-2 slide-active text-sm md:text-base max-w-2xl"
            style={{
              color: 'var(--text-secondary)',
              lineHeight: 'var(--leading-relaxed)',
              margin: 0,
              marginBottom: 'var(--space-4)',
            }}
          >
            {content.subtitle}
          </p>
        )}

        {/* Continuous Loop Ribbon: OBSERVE → QUESTION → BUILD → TEST → LEARN → REPEAT */}
        <div
          className="stagger-2 slide-active flex items-center justify-center flex-wrap gap-2 px-4 py-2 rounded-full mb-3"
          style={{
            background: 'rgba(255, 255, 255, 0.03)',
            border: '1px solid var(--border-default)',
            boxShadow: '0 2px 12px rgba(0,0,0,0.15)',
          }}
        >
          {content.loop.map((step, idx) => (
            <div key={step} className="flex items-center gap-2">
              <span
                className="text-[11px] font-mono tracking-wider font-semibold px-2 py-0.5 rounded transition-all duration-300"
                style={{
                  color:
                    idx === (currentStep - 1) % content.loop.length
                      ? 'var(--accent)'
                      : 'var(--text-secondary)',
                  background:
                    idx === (currentStep - 1) % content.loop.length
                      ? 'rgba(232, 115, 74, 0.12)'
                      : 'transparent',
                }}
              >
                {step}
              </span>
              {idx < content.loop.length - 1 ? (
                <span style={{ color: 'var(--border-strong)', fontSize: '10px' }}>
                  →
                </span>
              ) : (
                <span style={{ color: 'var(--accent)', fontSize: '10px' }}>
                  ↺
                </span>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* 2. Step Navigation Pills / Stepper Controls */}
      <div className="w-full flex items-center justify-between mt-1 mb-3">
        <div className="flex items-center gap-1.5 sm:gap-2">
          {content.principles.map((p, idx) => {
            const isCurrent = currentStep === idx + 1;
            const isRevealed = showAll || currentStep >= idx + 1;

            return (
              <button
                key={p.id}
                type="button"
                onClick={() => {
                  setCurrentStep(idx + 1);
                  setShowAll(false);
                }}
                className="px-2.5 py-1 rounded-md text-xs font-mono transition-all duration-200"
                style={{
                  background: isCurrent
                    ? 'var(--accent)'
                    : isRevealed
                    ? 'rgba(255, 255, 255, 0.06)'
                    : 'rgba(255, 255, 255, 0.02)',
                  color: isCurrent
                    ? '#ffffff'
                    : isRevealed
                    ? 'var(--text-primary)'
                    : 'var(--text-tertiary)',
                  border: isCurrent
                    ? '1px solid var(--accent)'
                    : '1px solid var(--border-default)',
                  fontWeight: isCurrent ? 700 : 500,
                  cursor: 'pointer',
                }}
              >
                {p.number}
              </button>
            );
          })}
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => setShowAll(!showAll)}
            className="text-[11px] font-mono px-2.5 py-1 rounded border transition-colors"
            style={{
              background: showAll ? 'rgba(232, 115, 74, 0.15)' : 'transparent',
              borderColor: showAll ? 'var(--accent)' : 'var(--border-default)',
              color: showAll ? 'var(--accent)' : 'var(--text-secondary)',
            }}
          >
            {showAll ? 'Step Focus Mode' : 'View All 6'}
          </button>

          {!showAll && (
            <div className="flex items-center gap-1">
              <button
                type="button"
                disabled={currentStep === 1}
                onClick={() => setCurrentStep((s) => Math.max(1, s - 1))}
                className="p-1 rounded text-xs transition-opacity"
                style={{
                  border: '1px solid var(--border-default)',
                  color: currentStep === 1 ? 'var(--text-tertiary)' : 'var(--text-primary)',
                  opacity: currentStep === 1 ? 0.35 : 1,
                  background: 'var(--bg-elevated)',
                  cursor: currentStep === 1 ? 'not-allowed' : 'pointer',
                }}
                title="Previous principle"
              >
                ←
              </button>
              <button
                type="button"
                disabled={currentStep === totalSteps}
                onClick={() => setCurrentStep((s) => Math.min(totalSteps, s + 1))}
                className="px-2.5 py-1 rounded text-xs font-medium transition-all"
                style={{
                  border: '1px solid var(--accent)',
                  background: 'rgba(232, 115, 74, 0.15)',
                  color: 'var(--accent)',
                  cursor: currentStep === totalSteps ? 'default' : 'pointer',
                  opacity: currentStep === totalSteps ? 0.5 : 1,
                }}
                title="Next principle"
              >
                Next (0{currentStep}/0{totalSteps}) →
              </button>
            </div>
          )}
        </div>
      </div>

      {/* 3. Main Principle Content Area */}
      <div className="w-full flex-1 flex flex-col justify-center min-h-[300px]">
        {showAll ? (
          /* Grid View of all 6 principles */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5 w-full">
            {content.principles.map((p) => (
              <div
                key={p.id}
                className="p-3.5 rounded-xl flex flex-col justify-between"
                style={{
                  background: 'var(--bg-elevated)',
                  border: '1px solid var(--border-default)',
                }}
              >
                <div>
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className="text-xs font-mono text-[var(--accent)] font-bold">
                      {p.number}
                    </span>
                    <h3 className="text-sm font-semibold text-[var(--text-primary)] m-0">
                      {p.title}
                    </h3>
                  </div>
                  {p.subtitle && (
                    <p className="text-xs text-[var(--text-secondary)] m-0 mb-2">
                      {p.subtitle}
                    </p>
                  )}
                </div>

                {/* Specific micro-previews */}
                {p.contrast && (
                  <div className="mt-1 text-[11px] space-y-1">
                    <div className="text-[var(--text-tertiary)] line-through">
                      ✕ {p.contrast.insteadOf}
                    </div>
                    <div className="text-[var(--accent)] font-medium">
                      ✓ {p.contrast.ask}
                    </div>
                  </div>
                )}

                {p.quote && (
                  <div
                    className="mt-2 p-2 rounded text-[11px] italic"
                    style={{
                      background: 'rgba(255, 255, 255, 0.03)',
                      borderLeft: '2px solid var(--accent)',
                      color: 'var(--text-primary)',
                    }}
                  >
                    “{p.quote.text}”
                  </div>
                )}

                {p.iterationSteps && (
                  <div className="mt-2 flex flex-wrap items-center gap-1 text-[10px] font-mono text-[var(--text-secondary)]">
                    {p.iterationSteps.join(' → ')}
                  </div>
                )}

                {p.items && (
                  <div className="mt-2 flex flex-wrap gap-1">
                    {p.items.slice(0, 5).map((item) => (
                      <span
                        key={item}
                        className="text-[9px] px-1.5 py-0.5 rounded"
                        style={{
                          background: 'rgba(255, 255, 255, 0.05)',
                          color: 'var(--text-secondary)',
                        }}
                      >
                        {item}
                      </span>
                    ))}
                    {p.items.length > 5 && (
                      <span className="text-[9px] text-[var(--text-tertiary)]">
                        +{p.items.length - 5}
                      </span>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        ) : (
          /* Single Principle Progressive Spotlight */
          <div
            className="w-full rounded-2xl p-6 md:p-8 flex flex-col justify-center transition-all duration-300"
            style={{
              background: 'var(--bg-elevated)',
              border: '1px solid var(--border-strong)',
              boxShadow: '0 8px 32px rgba(0,0,0,0.3)',
            }}
          >
            {/* Top row: Number and Title */}
            <div className="flex items-center gap-3 mb-2">
              <span
                className="px-2.5 py-1 rounded-md text-sm font-mono font-bold"
                style={{
                  background: 'rgba(232, 115, 74, 0.15)',
                  color: 'var(--accent)',
                  border: '1px solid rgba(232, 115, 74, 0.3)',
                }}
              >
                {activePrinciple.number}
              </span>
              <h3
                style={{
                  fontSize: 'var(--text-h2)',
                  fontWeight: 700,
                  color: 'var(--text-primary)',
                  letterSpacing: '-0.02em',
                  margin: 0,
                }}
              >
                {activePrinciple.title}
              </h3>
            </div>

            {activePrinciple.subtitle && (
              <p
                style={{
                  fontSize: 'var(--text-body)',
                  color: 'var(--text-secondary)',
                  marginTop: 'var(--space-1)',
                  marginBottom: 'var(--space-6)',
                  maxWidth: 680,
                }}
              >
                {activePrinciple.subtitle}
              </p>
            )}

            {/* Principle 01: Contrast Box */}
            {activePrinciple.contrast && (
              <div
                className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2 p-5 rounded-xl"
                style={{
                  background: 'rgba(0, 0, 0, 0.25)',
                  border: '1px solid var(--border-default)',
                }}
              >
                <div className="flex flex-col gap-1">
                  <span className="text-xs font-mono text-[var(--text-tertiary)] uppercase tracking-wider">
                    Don't only ask
                  </span>
                  <span className="text-lg font-medium text-[var(--text-secondary)] line-through decoration-rose-500/60">
                    “{activePrinciple.contrast.insteadOf}”
                  </span>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-xs font-mono text-[var(--accent)] uppercase tracking-wider font-semibold">
                    Always ask
                  </span>
                  <span className="text-lg font-semibold text-[var(--text-primary)]">
                    “{activePrinciple.contrast.ask}”
                  </span>
                </div>
              </div>
            )}

            {/* Principle 02 & 04: Tags / Items Grid */}
            {activePrinciple.items && (
              <div className="mt-2">
                <div className="flex flex-wrap gap-2.5">
                  {activePrinciple.items.map((item, i) => (
                    <span
                      key={item}
                      className="px-3.5 py-1.5 rounded-lg text-xs md:text-sm font-medium transition-all"
                      style={{
                        background: 'rgba(255, 255, 255, 0.04)',
                        border: '1px solid var(--border-default)',
                        color: 'var(--text-primary)',
                      }}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Principle 05: Visual Iteration Chain */}
            {activePrinciple.iterationSteps && (
              <div
                className="mt-3 p-6 rounded-xl flex items-center justify-center flex-wrap gap-3 md:gap-4"
                style={{
                  background: 'rgba(0, 0, 0, 0.2)',
                  border: '1px solid var(--border-default)',
                }}
              >
                {activePrinciple.iterationSteps.map((step, idx) => (
                  <div key={step} className="flex items-center gap-3 md:gap-4">
                    <div
                      className="px-4 py-2 rounded-lg text-xs md:text-sm font-semibold tracking-wide"
                      style={{
                        background:
                          idx === activePrinciple.iterationSteps!.length - 1
                            ? 'rgba(232, 115, 74, 0.2)'
                            : 'var(--bg-surface)',
                        border:
                          idx === activePrinciple.iterationSteps!.length - 1
                            ? '1px solid var(--accent)'
                            : '1px solid var(--border-strong)',
                        color:
                          idx === activePrinciple.iterationSteps!.length - 1
                            ? 'var(--accent)'
                            : 'var(--text-primary)',
                        boxShadow: '0 2px 8px rgba(0,0,0,0.2)',
                      }}
                    >
                      {step}
                    </div>
                    {idx < activePrinciple.iterationSteps!.length - 1 && (
                      <span
                        style={{
                          color: 'var(--border-strong)',
                          fontSize: '14px',
                        }}
                      >
                        ↓
                      </span>
                    )}
                  </div>
                ))}
              </div>
            )}

            {/* Principle 06: Taste vs Judgment Highlight Quote */}
            {activePrinciple.quote && (
              <div
                className="mt-2 p-6 rounded-xl relative overflow-hidden"
                style={{
                  background: 'linear-gradient(135deg, rgba(232,115,74,0.08) 0%, rgba(255,255,255,0.02) 100%)',
                  border: '1px solid rgba(232, 115, 74, 0.3)',
                }}
              >
                <p
                  style={{
                    fontSize: 'var(--text-h3)',
                    fontWeight: 600,
                    color: 'var(--text-primary)',
                    margin: 0,
                    lineHeight: 'var(--leading-snug)',
                    letterSpacing: '-0.015em',
                  }}
                >
                  “{activePrinciple.quote.text}”
                </p>
                {activePrinciple.quote.subtext && (
                  <p
                    className="text-xs font-mono text-[var(--accent)] mt-3 mb-0"
                  >
                    {activePrinciple.quote.subtext}
                  </p>
                )}
              </div>
            )}
          </div>
        )}
      </div>

      {/* 4. Bottom Powerful Takeaway Banner */}
      <div
        className="stagger-4 slide-active w-full mt-4 py-3 px-6 rounded-xl flex items-center justify-center text-center"
        style={{
          background: 'rgba(232, 115, 74, 0.06)',
          border: '1px solid rgba(232, 115, 74, 0.25)',
        }}
      >
        <span
          style={{
            fontSize: 'var(--text-body)',
            fontWeight: 700,
            color: 'var(--accent)',
            letterSpacing: '-0.01em',
          }}
        >
          {content.closing}
        </span>
      </div>
    </article>
  );
}
