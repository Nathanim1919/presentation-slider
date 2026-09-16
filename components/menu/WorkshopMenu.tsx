'use client';

import { useState } from 'react';
import Link from 'next/link';
import { workshops } from '@/data/workshops';
import ThemeToggle from '@/components/ui/ThemeToggle';

export default function WorkshopMenu() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <div
      style={{
        minHeight: '100dvh',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        background: 'var(--bg-primary)',
        color: 'var(--text-primary)',
        position: 'relative',
        overflowY: 'auto',
      }}
    >
      {/* Header Bar */}
      <header
        className="workshop-header"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: 'var(--space-5) var(--space-8)',
          borderBottom: '1px solid var(--border-subtle)',
          minHeight: 64,
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)' }}>
          <img
            src="/photo_2026-01-05_02-51-50.jpg"
            alt="Nathanim Tadele"
            style={{
              width: 26,
              height: 26,
              borderRadius: '50%',
              objectFit: 'cover',
              border: '1.5px solid var(--accent)',
              boxShadow: '0 0 10px rgba(232, 115, 74, 0.3)',
            }}
          />
          <span
            style={{
              fontSize: 'var(--text-label)',
              fontWeight: 600,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: 'var(--text-secondary)',
            }}
          >
            Nathanim Tadele · Workshop Series
          </span>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-4)' }}>
          <ThemeToggle />
        </div>
      </header>

      {/* Main Directory Body */}
      <main
        className="workshop-main"
        style={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: 'clamp(2.5rem, 6vh, 4.5rem) var(--space-6)',
        }}
      >
        <div
          style={{
            maxWidth: 780,
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          {/* Title & Tagline */}
          <div
            style={{
              textAlign: 'center',
              marginBottom: 'clamp(2.5rem, 5vh, 3.75rem)',
            }}
          >
            <h1
              style={{
                fontSize: 'clamp(2.5rem, 5vw, 3.75rem)',
                fontWeight: 700,
                letterSpacing: '-0.035em',
                lineHeight: 1.1,
                color: 'var(--text-primary)',
                margin: '0 0 var(--space-3)',
              }}
            >
              WORKSHOPS
            </h1>
            <p
              style={{
                fontSize: 'clamp(1rem, 1.3vw, 1.25rem)',
                color: 'var(--text-secondary)',
                lineHeight: 'var(--leading-snug)',
                maxWidth: '42ch',
                margin: '0 auto',
                fontWeight: 400,
              }}
            >
              Practical workshops on building, engineering, and product thinking.
            </p>
          </div>

          {/* Hairline Divider */}
          <div
            style={{
              width: '100%',
              height: 1,
              background: 'var(--border-subtle)',
              marginBottom: 'var(--space-2)',
            }}
            aria-hidden="true"
          />

          {/* Directory Navigation */}
          <nav
            style={{
              display: 'flex',
              flexDirection: 'column',
              width: '100%',
            }}
            aria-label="Workshop Directory"
          >
            {workshops.map((workshop) => {
              const hasSubItems = workshop.subItems && workshop.subItems.length > 0;
              const isDirectHovered = hoveredId === workshop.id;

              if (hasSubItems) {
                return (
                  <div
                    key={workshop.id}
                    style={{
                      borderBottom: '1px solid var(--border-subtle)',
                      padding: 'var(--space-5) 0',
                    }}
                  >
                    {/* Category Header */}
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: 'clamp(1.25rem, 3vw, 2.5rem)',
                        padding: '0 var(--space-4) var(--space-3)',
                      }}
                    >
                      <span
                        style={{
                          fontFamily: 'monospace',
                          fontSize: 'clamp(1.5rem, 2.5vw, 2rem)',
                          fontWeight: 700,
                          letterSpacing: '-0.02em',
                          color: 'var(--text-tertiary)',
                          lineHeight: 1,
                          marginTop: 2,
                          minWidth: '2.5ch',
                        }}
                      >
                        {workshop.number}
                      </span>

                      <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                        <h2
                          style={{
                            fontSize: 'clamp(1.125rem, 1.8vw, 1.375rem)',
                            fontWeight: 600,
                            letterSpacing: '-0.02em',
                            color: 'var(--text-primary)',
                            margin: 0,
                            lineHeight: 'var(--leading-snug)',
                          }}
                        >
                          {workshop.title}
                        </h2>
                        <p
                          style={{
                            fontSize: 'var(--text-small)',
                            color: 'var(--text-secondary)',
                            lineHeight: 'var(--leading-normal)',
                            margin: 0,
                          }}
                        >
                          {workshop.subtitle}
                        </p>
                      </div>
                    </div>

                    {/* Sub-Items List */}
                    <div
                      style={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 'var(--space-1)',
                        paddingLeft: 'clamp(2.5rem, 5vw, 4.5rem)',
                        paddingRight: 'var(--space-2)',
                        marginTop: 'var(--space-2)',
                      }}
                    >
                      {workshop.subItems!.map((subItem) => {
                        const isSubHovered = hoveredId === subItem.id;

                        return (
                          <Link
                            key={subItem.id}
                            href={`/workshops/${subItem.id}`}
                            onMouseEnter={() => setHoveredId(subItem.id)}
                            onMouseLeave={() => setHoveredId(null)}
                            style={{
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'space-between',
                              padding: 'var(--space-3) var(--space-4)',
                              textDecoration: 'none',
                              background: isSubHovered
                                ? 'var(--bg-elevated)'
                                : 'rgba(255, 255, 255, 0.02)',
                              border: isSubHovered
                                ? '1px solid var(--accent)'
                                : '1px solid var(--border-subtle)',
                              borderRadius: 'var(--radius-sm)',
                              transition: 'all 0.2s cubic-bezier(0.16, 1, 0.3, 1)',
                              transform: isSubHovered
                                ? 'translateX(4px)'
                                : 'translateX(0)',
                            }}
                          >
                            <div
                              style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: 'var(--space-4)',
                                minWidth: 0,
                              }}
                            >
                              <span
                                style={{
                                  fontFamily: 'monospace',
                                  fontSize: '0.875rem',
                                  fontWeight: 700,
                                  color: isSubHovered
                                    ? 'var(--accent)'
                                    : 'var(--text-tertiary)',
                                  letterSpacing: '0.04em',
                                  transition: 'color 0.2s ease',
                                }}
                              >
                                {subItem.number}
                              </span>

                              <div style={{ display: 'flex', flexDirection: 'column' }}>
                                <span
                                  style={{
                                    fontSize: '0.9375rem',
                                    fontWeight: 600,
                                    letterSpacing: '0.02em',
                                    color: isSubHovered
                                      ? 'var(--text-primary)'
                                      : 'var(--text-primary)',
                                    textTransform: 'uppercase',
                                  }}
                                >
                                  {subItem.title}
                                </span>
                                <span
                                  style={{
                                    fontSize: 'var(--text-caption)',
                                    color: 'var(--text-secondary)',
                                  }}
                                >
                                  {subItem.subtitle}
                                </span>
                              </div>
                            </div>

                            <span
                              style={{
                                fontSize: '1.125rem',
                                color: isSubHovered
                                  ? 'var(--accent)'
                                  : 'var(--text-tertiary)',
                                opacity: isSubHovered ? 1 : 0.5,
                                transform: isSubHovered
                                  ? 'translateX(4px)'
                                  : 'translateX(0)',
                                transition: 'all 0.2s ease',
                                display: 'inline-block',
                              }}
                              aria-hidden="true"
                            >
                              →
                            </span>
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                );
              }

              // Direct Workshop Row (e.g. 00 INTRODUCTION)
              return (
                <Link
                  key={workshop.id}
                  href={`/workshops/${workshop.id}`}
                  onMouseEnter={() => setHoveredId(workshop.id)}
                  onMouseLeave={() => setHoveredId(null)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: 'var(--space-5) var(--space-4)',
                    borderBottom: '1px solid var(--border-subtle)',
                    textDecoration: 'none',
                    background: isDirectHovered ? 'var(--bg-elevated)' : 'transparent',
                    borderRadius: 'var(--radius-sm)',
                    transition: 'all 0.22s cubic-bezier(0.16, 1, 0.3, 1)',
                    position: 'relative',
                    transform: isDirectHovered ? 'translateX(4px)' : 'translateX(0)',
                  }}
                >
                  {/* Left Column: Number + Title & Subtitle */}
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: 'clamp(1.25rem, 3vw, 2.5rem)',
                      minWidth: 0,
                    }}
                  >
                    <span
                      style={{
                        fontFamily: 'monospace',
                        fontSize: 'clamp(1.5rem, 2.5vw, 2rem)',
                        fontWeight: 700,
                        letterSpacing: '-0.02em',
                        color: isDirectHovered
                          ? 'var(--accent)'
                          : 'var(--text-tertiary)',
                        transition: 'color 0.2s ease',
                        lineHeight: 1,
                        marginTop: 2,
                        minWidth: '2.5ch',
                      }}
                    >
                      {workshop.number}
                    </span>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                      <h2
                        style={{
                          fontSize: 'clamp(1.125rem, 1.8vw, 1.375rem)',
                          fontWeight: 600,
                          letterSpacing: '-0.02em',
                          color: isDirectHovered
                            ? 'var(--text-primary)'
                            : 'var(--text-primary)',
                          margin: 0,
                          lineHeight: 'var(--leading-snug)',
                        }}
                      >
                        {workshop.title}
                      </h2>

                      <p
                        style={{
                          fontSize: 'var(--text-small)',
                          color: 'var(--text-secondary)',
                          lineHeight: 'var(--leading-normal)',
                          margin: 0,
                        }}
                      >
                        {workshop.subtitle}
                      </p>
                    </div>
                  </div>

                  {/* Right Column: Arrow */}
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      paddingLeft: 'var(--space-4)',
                    }}
                  >
                    <span
                      style={{
                        fontSize: '1.25rem',
                        color: isDirectHovered
                          ? 'var(--accent)'
                          : 'var(--text-tertiary)',
                        opacity: isDirectHovered ? 1 : 0.4,
                        transform: isDirectHovered
                          ? 'translateX(4px)'
                          : 'translateX(0)',
                        transition: 'all 0.22s cubic-bezier(0.16, 1, 0.3, 1)',
                        display: 'inline-block',
                      }}
                      aria-hidden="true"
                    >
                      →
                    </span>
                  </div>
                </Link>
              );
            })}
          </nav>

          {/* Bottom Hairline Divider */}
          <div
            style={{
              width: '100%',
              height: 1,
              background: 'var(--border-subtle)',
              marginTop: 'var(--space-2)',
              marginBottom: 'var(--space-6)',
            }}
            aria-hidden="true"
          />

          {/* Footer Callout */}
          <div style={{ textAlign: 'center' }}>
            <span
              style={{
                fontSize: 'var(--text-small)',
                color: 'var(--text-tertiary)',
                letterSpacing: '0.04em',
                fontWeight: 400,
              }}
            >
              Select a workshop to begin
            </span>
          </div>
        </div>
      </main>

      {/* Subtle Footer info */}
      <footer
        className="workshop-footer"
        style={{
          padding: 'var(--space-4) var(--space-8)',
          display: 'flex',
          justifyContent: 'center',
          borderTop: '1px solid var(--border-subtle)',
          color: 'var(--text-tertiary)',
          fontSize: 'var(--text-caption)',
        }}
      >
        <span>
          Designed & built by{' '}
          <a
            href="https://nathanim.dev"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}
          >
            Nathanim Tadele
          </a>
        </span>
      </footer>
    </div>
  );
}
