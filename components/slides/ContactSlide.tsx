'use client';

import type { ContactContent } from '@/lib/types';
import { Globe } from 'lucide-react';

interface ContactSlideProps {
  content: ContactContent;
}

function formatExternalUrl(url: string): string {
  if (!url) return '';
  if (url.startsWith('http://') || url.startsWith('https://')) return url;
  return `https://${url}`;
}

function LinkedinIcon({ size = 15 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function GithubIcon({ size = 15 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

export default function ContactSlide({ content }: ContactSlideProps) {
  const rawWebsite =
    content.website ||
    content.links?.find(
      (l) => l.label.toLowerCase().includes('website') || l.url.includes('nathanim.dev'),
    )?.url ||
    'https://nathanim.dev';

  const rawLinkedin =
    content.links?.find(
      (l) => l.label.toLowerCase().includes('linkedin') || l.url.includes('linkedin'),
    )?.url ||
    'https://www.linkedin.com/in/nathanim-tadele-762099247/';

  const rawGithub =
    content.links?.find(
      (l) => l.label.toLowerCase().includes('git') || l.url.includes('github'),
    )?.url ||
    'https://github.com/nathanim1919';

  const website = formatExternalUrl(rawWebsite);
  const linkedin = formatExternalUrl(rawLinkedin);
  const github = formatExternalUrl(rawGithub);

  return (
    <article
      className="slide-article flex flex-1 flex-col items-center justify-center px-8 py-6 text-center"
      style={{ width: '100%', height: '100%' }}
    >
      <div
        style={{
          maxWidth: 600,
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 'var(--space-6)',
        }}
      >
        {/* 1. Main Heading: Thank You. */}
        <h1
          className="final-step-1"
          style={{
            fontSize: 'clamp(3rem, 6vw, 4.75rem)',
            fontWeight: 700,
            lineHeight: 1.1,
            color: 'var(--text-primary)',
            letterSpacing: '-0.03em',
            margin: 0,
          }}
        >
          {content.heading || 'Thank You.'}
        </h1>

        {/* Avatar */}
        <div className="final-step-2 mb-1">
          <div
            style={{
              width: 88,
              height: 88,
              borderRadius: '50%',
              padding: 2.5,
              background:
                'linear-gradient(135deg, var(--accent) 0%, rgba(255,255,255,0.2) 100%)',
              boxShadow: '0 0 28px rgba(232, 115, 74, 0.35)',
              margin: '0 auto',
            }}
          >
            <img
              src="/photo_2026-01-05_02-51-50.jpg"
              alt={content.name || 'Nathanim Tadele'}
              style={{
                width: '100%',
                height: '100%',
                borderRadius: '50%',
                objectFit: 'cover',
                display: 'block',
              }}
            />
          </div>
        </div>

        {/* 2. Name */}
        <div className="final-step-2">
          <span
            style={{
              fontSize: 'clamp(1.125rem, 1.8vw, 1.375rem)',
              fontWeight: 500,
              color: 'var(--text-secondary)',
              letterSpacing: '-0.01em',
            }}
          >
            {content.name || 'Nathanim Tadele'}
          </span>
        </div>

        {/* 3. Subtle Hairline Divider */}
        <div
          className="final-step-3"
          style={{
            width: 40,
            height: 1,
            background: 'var(--border-default)',
            margin: '0 auto',
          }}
          aria-hidden="true"
        />

        {/* 4. Links with Lucide Icons: Website · LinkedIn · GitHub */}
        <div
          className="final-step-3"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 'var(--space-6)',
            flexWrap: 'wrap',
          }}
        >
          <a
            href={website}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 'var(--space-2)',
              fontSize: 'var(--text-small)',
              color: 'var(--text-secondary)',
              textDecoration: 'none',
              transition: 'color var(--duration-fast) ease',
            }}
            onMouseEnter={(e) =>
              ((e.currentTarget as HTMLElement).style.color = 'var(--accent-text)')
            }
            onMouseLeave={(e) =>
              ((e.currentTarget as HTMLElement).style.color = 'var(--text-secondary)')
            }
          >
            <Globe size={15} strokeWidth={1.75} aria-hidden="true" />
            <span>nathanim.dev</span>
          </a>

          <a
            href={linkedin}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 'var(--space-2)',
              fontSize: 'var(--text-small)',
              color: 'var(--text-secondary)',
              textDecoration: 'none',
              transition: 'color var(--duration-fast) ease',
            }}
            onMouseEnter={(e) =>
              ((e.currentTarget as HTMLElement).style.color = 'var(--accent-text)')
            }
            onMouseLeave={(e) =>
              ((e.currentTarget as HTMLElement).style.color = 'var(--text-secondary)')
            }
          >
            <LinkedinIcon size={15} />
            <span>LinkedIn</span>
          </a>

          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 'var(--space-2)',
              fontSize: 'var(--text-small)',
              color: 'var(--text-secondary)',
              textDecoration: 'none',
              transition: 'color var(--duration-fast) ease',
            }}
            onMouseEnter={(e) =>
              ((e.currentTarget as HTMLElement).style.color = 'var(--accent-text)')
            }
            onMouseLeave={(e) =>
              ((e.currentTarget as HTMLElement).style.color = 'var(--text-secondary)')
            }
          >
            <GithubIcon size={15} />
            <span>GitHub</span>
          </a>
        </div>

        {/* 5. Prominent "BACK TO WORKSHOPS" Action Button */}
        <div className="final-step-4" style={{ marginTop: 'var(--space-4)' }}>
          <a
            href="/"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 'var(--space-3)',
              padding: '12px 28px',
              borderRadius: 'var(--radius-md)',
              background: 'var(--bg-elevated)',
              border: '1px solid var(--border-default)',
              color: 'var(--text-primary)',
              fontSize: 'var(--text-small)',
              fontWeight: 600,
              letterSpacing: '0.04em',
              textDecoration: 'none',
              transition: 'all 0.2s ease',
              boxShadow: '0 4px 16px rgba(0,0,0,0.3)',
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.borderColor = 'var(--accent)';
              el.style.background = 'var(--bg-hover)';
              el.style.transform = 'translateY(-1px)';
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.borderColor = 'var(--border-default)';
              el.style.background = 'var(--bg-elevated)';
              el.style.transform = 'translateY(0)';
            }}
          >
            <span style={{ color: 'var(--accent)' }} aria-hidden="true">←</span>
            <span>BACK TO WORKSHOPS</span>
          </a>
        </div>
      </div>

      <style jsx>{`
        @keyframes quietFadeUp {
          from {
            opacity: 0;
            transform: translateY(6px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .final-step-1 {
          opacity: 0;
          animation: quietFadeUp 550ms cubic-bezier(0.16, 1, 0.3, 1) 120ms forwards;
        }

        .final-step-2 {
          opacity: 0;
          animation: quietFadeUp 550ms cubic-bezier(0.16, 1, 0.3, 1) 260ms forwards;
        }

        .final-step-3 {
          opacity: 0;
          animation: quietFadeUp 550ms cubic-bezier(0.16, 1, 0.3, 1) 400ms forwards;
        }

        .final-step-4 {
          opacity: 0;
          animation: quietFadeUp 550ms cubic-bezier(0.16, 1, 0.3, 1) 520ms forwards;
        }
      `}</style>
    </article>
  );
}
