'use client';

import { useState } from 'react';
import type { ButtonStatesContent } from '@/lib/types';

interface ButtonStatesSlideProps {
  content: ButtonStatesContent;
}

export default function ButtonStatesSlide({ content }: ButtonStatesSlideProps) {
  const [activeState, setActiveState] = useState<string>('hover');
  const [hoveredState, setHoveredState] = useState<string | null>(null);
  const [isPressed, setIsPressed] = useState<boolean>(false);
  const [focusSimulated, setFocusSimulated] = useState<boolean>(true);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [showDisabledTooltip, setShowDisabledTooltip] = useState<boolean>(false);
  const [successCount, setSuccessCount] = useState<number>(0);

  const states = content.states || [];
  const currentInspectState = states.find(
    (s) => s.id === (hoveredState || activeState)
  ) || states[0];

  return (
    <article className="flex flex-1 flex-col items-center justify-center px-6 py-4 overflow-x-hidden">
      {content.heading && (
        <h2
          className="stagger-1 slide-active"
          style={{
            fontSize: 'var(--text-h2)',
            fontWeight: 600,
            color: 'var(--text-primary)',
            letterSpacing: '-0.025em',
            textAlign: 'center',
            marginBottom: 'var(--space-6)',
          }}
        >
          {content.heading}
        </h2>
      )}

      {/* Main 7 Columns Container */}
      <div
        className="w-full max-w-6xl mx-auto flex flex-col items-center"
        style={{ marginTop: 'var(--space-2)' }}
      >
        {/* Row of 7 State Columns with Connectors */}
        <div className="w-full flex items-start justify-center gap-0">
          {states.map((state, i) => {
            const isCurrentHovered = hoveredState === state.id;
            const isCurrentActive = activeState === state.id;
            const isHighlighted = isCurrentHovered || isCurrentActive;

            return (
              <div
                key={state.id}
                className="flex items-start"
                style={{
                  flex: i < states.length - 1 ? '1 1 0' : '0 0 auto',
                  minWidth: 124,
                  maxWidth: 154,
                }}
              >
                {/* Column: Button Demo + Down Arrow + State Box */}
                <div
                  className="flex flex-col items-center w-full"
                  onMouseEnter={() => {
                    setHoveredState(state.id);
                  }}
                  onMouseLeave={() => {
                    setHoveredState(null);
                  }}
                  onClick={() => {
                    setActiveState(state.id);
                  }}
                  style={{ cursor: 'pointer' }}
                >
                  {/* --- BUTTON DEMO AREA (ABOVE BOX) --- */}
                  <div
                    className="relative flex flex-col items-center justify-center mb-3"
                    style={{
                      minHeight: 88,
                      width: '100%',
                      padding: '8px 4px',
                    }}
                  >
                    {/* Micro badge above button */}
                    <span
                      style={{
                        fontSize: '9px',
                        fontFamily: 'monospace',
                        textTransform: 'uppercase',
                        letterSpacing: '0.08em',
                        color: isHighlighted ? 'var(--accent)' : 'var(--text-tertiary)',
                        marginBottom: 6,
                        transition: 'color 0.2s ease',
                      }}
                    >
                      {state.badge || state.cssSelector || state.id}
                    </span>

                    {/* RENDER SPECIFIC INTERACTIVE BUTTON */}
                    {state.id === 'default' && (
                      <button
                        type="button"
                        className="px-3.5 py-2 text-xs font-semibold rounded-lg transition-all duration-200"
                        style={{
                          background: 'var(--bg-elevated)',
                          border: '1px solid var(--border-default)',
                          color: 'var(--text-primary)',
                          boxShadow: '0 2px 6px rgba(0,0,0,0.18)',
                        }}
                      >
                        Submit
                      </button>
                    )}

                    {state.id === 'hover' && (
                      <button
                        type="button"
                        className="group px-3.5 py-2 text-xs font-semibold rounded-lg transition-all duration-300"
                        style={{
                          background: isCurrentHovered
                            ? 'var(--accent)'
                            : 'var(--bg-elevated)',
                          border: isCurrentHovered
                            ? '1px solid var(--accent)'
                            : '1px solid var(--border-default)',
                          color: isCurrentHovered ? '#ffffff' : 'var(--text-primary)',
                          transform: isCurrentHovered
                            ? 'translateY(-3px)'
                            : 'translateY(0)',
                          boxShadow: isCurrentHovered
                            ? '0 6px 20px rgba(232, 115, 74, 0.45)'
                            : '0 2px 6px rgba(0,0,0,0.18)',
                        }}
                      >
                        {isCurrentHovered ? 'Hovered! ↗' : 'Hover Me'}
                      </button>
                    )}

                    {state.id === 'focus' && (
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          setFocusSimulated(!focusSimulated);
                        }}
                        className="px-3.5 py-2 text-xs font-semibold rounded-lg transition-all duration-200"
                        style={{
                          background: 'var(--bg-elevated)',
                          color: 'var(--text-primary)',
                          border: '1px solid var(--border-default)',
                          outline: focusSimulated
                            ? '2px solid #38bdf8'
                            : '2px solid transparent',
                          outlineOffset: 2,
                          boxShadow: focusSimulated
                            ? '0 0 14px rgba(56, 189, 248, 0.4)'
                            : '0 2px 6px rgba(0,0,0,0.18)',
                        }}
                      >
                        Focused ◉
                      </button>
                    )}

                    {state.id === 'pressed' && (
                      <button
                        type="button"
                        onMouseDown={() => setIsPressed(true)}
                        onMouseUp={() => setIsPressed(false)}
                        onTouchStart={() => setIsPressed(true)}
                        onTouchEnd={() => setIsPressed(false)}
                        className="px-3.5 py-2 text-xs font-semibold rounded-lg select-none transition-all duration-100"
                        style={{
                          background: isPressed
                            ? 'rgba(232, 115, 74, 0.25)'
                            : 'var(--bg-elevated)',
                          border: isPressed
                            ? '1px solid var(--accent)'
                            : '1px solid var(--border-default)',
                          color: isPressed ? 'var(--accent)' : 'var(--text-primary)',
                          transform: isPressed
                            ? 'scale(0.92) translateY(2px)'
                            : 'scale(1) translateY(0)',
                          boxShadow: isPressed
                            ? 'inset 0 2px 6px rgba(0,0,0,0.6)'
                            : '0 2px 6px rgba(0,0,0,0.18)',
                        }}
                      >
                        {isPressed ? 'Pressed! ●' : 'Press Me'}
                      </button>
                    )}

                    {state.id === 'loading' && (
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          setIsLoading(!isLoading);
                        }}
                        className="px-3 py-2 text-xs font-semibold rounded-lg flex items-center gap-1.5 transition-all duration-200"
                        style={{
                          background: 'var(--bg-elevated)',
                          border: '1px solid var(--border-strong)',
                          color: 'var(--text-secondary)',
                          cursor: 'pointer',
                        }}
                      >
                        {isLoading ? (
                          <>
                            <svg
                              className="animate-spin h-3.5 w-3.5 text-[var(--accent)]"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                            >
                              <circle
                                className="opacity-25"
                                cx="12"
                                cy="12"
                                r="10"
                                stroke="currentColor"
                                strokeWidth="4"
                              />
                              <path
                                className="opacity-75"
                                fill="currentColor"
                                d="M4 12a8 8 0 018-8v8H4z"
                              />
                            </svg>
                            <span>Saving…</span>
                          </>
                        ) : (
                          <span>Resume ⟳</span>
                        )}
                      </button>
                    )}

                    {state.id === 'success' && (
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          setSuccessCount((c) => c + 1);
                        }}
                        className="px-3.5 py-2 text-xs font-semibold rounded-lg flex items-center gap-1.5 transition-all duration-200 animate-in fade-in zoom-in-95"
                        style={{
                          background: 'rgba(74, 222, 128, 0.15)',
                          border: '1px solid rgba(74, 222, 128, 0.45)',
                          color: 'var(--success)',
                          boxShadow: '0 2px 10px rgba(74, 222, 128, 0.2)',
                        }}
                      >
                        <span>✓</span>
                        <span>{successCount > 0 ? 'Saved!' : 'Success'}</span>
                      </button>
                    )}

                    {state.id === 'disabled' && (
                      <div className="relative flex flex-col items-center">
                        {/* Tooltip on hover/touch */}
                        {showDisabledTooltip && (
                          <div
                            className="absolute -top-10 z-20 px-2.5 py-1 text-[10px] font-medium rounded shadow-xl whitespace-nowrap animate-in fade-in zoom-in-90"
                            style={{
                              background: '#18181b',
                              border: '1px solid #3f3f46',
                              color: '#fbbf24',
                            }}
                          >
                            ⚠️ Missing required fields
                          </div>
                        )}
                        <button
                          type="button"
                          disabled
                          onMouseEnter={() => setShowDisabledTooltip(true)}
                          onMouseLeave={() => setShowDisabledTooltip(false)}
                          onClick={(e) => e.stopPropagation()}
                          className="px-3.5 py-2 text-xs font-semibold rounded-lg select-none transition-all duration-200"
                          style={{
                            background: 'rgba(255, 255, 255, 0.03)',
                            border: '1px dashed var(--border-default)',
                            color: 'var(--text-tertiary)',
                            opacity: 0.5,
                            cursor: 'not-allowed',
                          }}
                        >
                          Disabled ⊘
                        </button>
                      </div>
                    )}

                    {/* Downward Connector Arrow */}
                    <div
                      className="flex flex-col items-center mt-2"
                      style={{
                        opacity: isHighlighted ? 1 : 0.4,
                        transition: 'opacity 0.2s ease',
                      }}
                    >
                      <div
                        style={{
                          width: 1,
                          height: 10,
                          background: isHighlighted
                            ? 'var(--accent)'
                            : 'var(--border-strong)',
                        }}
                      />
                      <div
                        style={{
                          width: 0,
                          height: 0,
                          borderLeft: '3px solid transparent',
                          borderRight: '3px solid transparent',
                          borderTop: `4px solid ${
                            isHighlighted
                              ? 'var(--accent)'
                              : 'var(--border-strong)'
                          }`,
                        }}
                      />
                    </div>
                  </div>

                  {/* --- STATE BOX (MATCHING PREVIOUS DIAGRAM) --- */}
                  <div
                    className={`stagger-${Math.min(i + 1, 5)} slide-active transition-all duration-200`}
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: '100%',
                      minHeight: 88,
                      padding: 'var(--space-4) var(--space-2)',
                      background: isHighlighted
                        ? 'var(--bg-surface)'
                        : 'var(--bg-elevated)',
                      borderRadius: 'var(--radius-md)',
                      border: isHighlighted
                        ? '1px solid var(--accent)'
                        : '1px solid var(--border-default)',
                      boxShadow: isHighlighted
                        ? '0 4px 16px rgba(232, 115, 74, 0.22)'
                        : 'none',
                      textAlign: 'center',
                    }}
                  >
                    <span
                      style={{
                        fontSize: 'var(--text-small)',
                        fontWeight: 600,
                        color: isHighlighted
                          ? 'var(--accent)'
                          : 'var(--text-primary)',
                        lineHeight: 'var(--leading-snug)',
                      }}
                    >
                      {state.label}
                    </span>
                    {state.description && (
                      <span
                        style={{
                          fontSize: 'var(--text-caption)',
                          color: 'var(--text-tertiary)',
                          marginTop: 'var(--space-1)',
                          lineHeight: 'var(--leading-snug)',
                        }}
                      >
                        {state.description}
                      </span>
                    )}
                  </div>
                </div>

                {/* --- HORIZONTAL CONNECTOR ARROW (BETWEEN BOXES) --- */}
                {i < states.length - 1 && (
                  <div
                    className="flex items-center self-center"
                    style={{
                      paddingTop: 104, // Aligns connector with the middle of the state box
                      paddingLeft: 4,
                      paddingRight: 4,
                      flexShrink: 0,
                      opacity: 0.65,
                    }}
                  >
                    <div
                      style={{
                        width: 14,
                        height: 1,
                        background: 'var(--border-strong)',
                      }}
                    />
                    <div
                      style={{
                        width: 0,
                        height: 0,
                        borderTop: '3px solid transparent',
                        borderBottom: '3px solid transparent',
                        borderLeft: '5px solid var(--border-strong)',
                      }}
                    />
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* State Inspector / Callout */}
        <div
          className="w-full max-w-3xl mt-8 px-5 py-3.5 rounded-xl transition-all duration-300"
          style={{
            background: 'rgba(255, 255, 255, 0.02)',
            border: '1px solid var(--border-default)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: 'var(--space-4)',
          }}
        >
          <div className="flex items-center gap-3">
            <span
              className="px-2 py-0.5 rounded text-[11px] font-mono font-medium"
              style={{
                background: 'rgba(232, 115, 74, 0.15)',
                color: 'var(--accent)',
                border: '1px solid rgba(232, 115, 74, 0.3)',
              }}
            >
              {currentInspectState.cssSelector || `:${currentInspectState.id}`}
            </span>
            <div className="flex flex-col">
              <span className="text-xs font-semibold text-[var(--text-primary)]">
                {currentInspectState.label} State
              </span>
              <span className="text-[11px] text-[var(--text-secondary)]">
                {currentInspectState.uxPrinciple || currentInspectState.description}
              </span>
            </div>
          </div>

          <span
            className="text-[11px] text-[var(--text-tertiary)] flex items-center gap-1 font-mono"
          >
            Hover or click any button above to test
          </span>
        </div>

        {/* Caption */}
        {content.caption && (
          <p
            className="stagger-5 slide-active text-center mt-6"
            style={{
              fontSize: 'var(--text-body)',
              color: 'var(--text-secondary)',
              maxWidth: 720,
              lineHeight: 'var(--leading-relaxed)',
            }}
          >
            {content.caption}
          </p>
        )}
      </div>
    </article>
  );
}
