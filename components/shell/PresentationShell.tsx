'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import type { Workshop, Slide } from '@/lib/types';
import { uiUxSlides } from '@/data/workshops';
import SlideRenderer from '@/components/shell/SlideRenderer';
import ThemeToggle from '@/components/ui/ThemeToggle';

interface PresentationShellProps {
  workshop?: Workshop;
  slides?: Slide[];
  workshopTitle?: string;
  initialSlideIndex?: number;
}

export default function PresentationShell({
  workshop,
  slides: explicitSlides,
  workshopTitle: explicitTitle,
  initialSlideIndex = 0,
}: PresentationShellProps) {
  const router = useRouter();
  const effectiveSlides = explicitSlides || workshop?.slides || uiUxSlides;
  const effectiveTitle = explicitTitle || workshop?.title || 'UI/UX & Product Design';
  const workshopId = workshop?.id || 'default';
  const storageKey = `presentation-slide-index-${workshopId}`;

  const [currentIndex, setCurrentIndex] = useState(initialSlideIndex);
  const [transitioning, setTransitioning] = useState(false);
  const [direction, setDirection] = useState<'forward' | 'backward'>('forward');
  const totalSlides = effectiveSlides.length;
  const containerRef = useRef<HTMLDivElement>(null);

  // Restore from sessionStorage
  useEffect(() => {
    const saved = sessionStorage.getItem(storageKey);
    if (saved) {
      const idx = parseInt(saved, 10);
      if (!isNaN(idx) && idx >= 0 && idx < totalSlides) {
        setCurrentIndex(idx);
      }
    }
  }, [storageKey, totalSlides]);

  // Persist to sessionStorage
  useEffect(() => {
    sessionStorage.setItem(storageKey, String(currentIndex));
  }, [currentIndex, storageKey]);

  const goTo = useCallback(
    (index: number, dir: 'forward' | 'backward') => {
      if (index < 0 || index >= totalSlides || transitioning) return;
      setDirection(dir);
      setTransitioning(true);

      // Short exit phase, then switch
      setTimeout(() => {
        setCurrentIndex(index);
        // Short delay before entrance
        requestAnimationFrame(() => {
          setTransitioning(false);
        });
      }, 150);
    },
    [totalSlides, transitioning],
  );

  const goNext = useCallback(() => {
    if (currentIndex < totalSlides - 1) goTo(currentIndex + 1, 'forward');
  }, [currentIndex, totalSlides, goTo]);

  const goPrev = useCallback(() => {
    if (currentIndex > 0) goTo(currentIndex - 1, 'backward');
  }, [currentIndex, goTo]);

  const goHome = useCallback(() => {
    goTo(0, 'backward');
  }, [goTo]);

  const goEnd = useCallback(() => {
    goTo(totalSlides - 1, 'forward');
  }, [goTo, totalSlides]);

  const returnToWorkshops = useCallback(() => {
    router.push('/');
  }, [router]);

  // Keyboard navigation
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      // Don't capture when typing in inputs
      const tag = (e.target as HTMLElement)?.tagName;
      if (tag === 'INPUT' || tag === 'TEXTAREA' || tag === 'SELECT') return;

      if (e.key === 'ArrowRight' || e.key === ' ') {
        e.preventDefault();
        goNext();
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        goPrev();
      } else if (e.key === 'Escape') {
        e.preventDefault();
        returnToWorkshops();
      } else if (e.key === 'Home') {
        e.preventDefault();
        goHome();
      } else if (e.key === 'End') {
        e.preventDefault();
        goEnd();
      }
    };

    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [goNext, goPrev, goHome, goEnd, returnToWorkshops]);

  const currentSlide = effectiveSlides[currentIndex] || effectiveSlides[0];
  const progress = ((currentIndex + 1) / totalSlides) * 100;
  const isFinalSlide = currentIndex === totalSlides - 1;

  return (
    <div
      ref={containerRef}
      style={{
        display: 'flex',
        flexDirection: 'column',
        height: '100dvh',
        width: '100%',
        overflow: 'hidden',
        background: 'var(--bg-primary)',
      }}
    >
      {/* ---- HEADER ---- */}
      <header
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: 'var(--space-4) var(--space-6)',
          borderBottom: '1px solid var(--border-subtle)',
          flexShrink: 0,
          minHeight: 56,
          background: 'var(--bg-primary)',
          zIndex: 10,
        }}
      >
        {/* Left — Return to Workshops + breadcrumb */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-4)', minWidth: 0 }}>
          <Link
            href="/"
            aria-label="Return to Workshops Directory"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 'var(--space-2)',
              fontSize: 'var(--text-small)',
              fontWeight: 600,
              letterSpacing: '0.04em',
              textTransform: 'uppercase',
              color: 'var(--text-secondary)',
              textDecoration: 'none',
              padding: '6px 12px',
              borderRadius: 'var(--radius-sm)',
              background: 'rgba(255, 255, 255, 0.04)',
              border: '1px solid var(--border-subtle)',
              transition: 'all var(--duration-fast) ease',
              flexShrink: 0,
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.color = 'var(--text-primary)';
              el.style.background = 'var(--bg-hover)';
              el.style.borderColor = 'var(--accent)';
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.color = 'var(--text-secondary)';
              el.style.background = 'rgba(255, 255, 255, 0.04)';
              el.style.borderColor = 'var(--border-subtle)';
            }}
          >
            <span style={{ color: 'var(--accent)' }} aria-hidden="true">←</span>
            <span>WORKSHOPS</span>
          </Link>

          <span style={{ color: 'var(--border-default)' }} aria-hidden="true">
            /
          </span>

          <h1
            style={{
              fontSize: 'var(--text-small)',
              fontWeight: 500,
              color: 'var(--text-secondary)',
              margin: 0,
              whiteSpace: 'nowrap',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
            }}
          >
            <span style={{ color: 'var(--text-tertiary)', marginRight: 'var(--space-3)' }}>
              {effectiveTitle}
            </span>
            <span style={{ color: 'var(--border-default)' }} aria-hidden="true">
              /
            </span>
            <span style={{ marginLeft: 'var(--space-3)', color: 'var(--text-primary)', fontWeight: 600 }}>
              {currentSlide.title}
            </span>
          </h1>
        </div>

        {/* Right — navigation controls */}
        <nav
          style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-4)', flexShrink: 0 }}
          aria-label="Slide navigation"
        >
          {/* Slide Counter */}
          <span
            style={{
              fontSize: 'var(--text-caption)',
              color: 'var(--text-tertiary)',
              fontVariantNumeric: 'tabular-nums',
              fontWeight: 500,
            }}
            role="status"
            aria-live="polite"
            aria-label={`Slide ${currentIndex + 1} of ${totalSlides}`}
          >
            {String(currentIndex + 1).padStart(2, '0')}{' '}
            <span style={{ color: 'var(--border-default)' }}>/</span>{' '}
            {String(totalSlides).padStart(2, '0')}
          </span>

          {/* Theme switcher */}
          <ThemeToggle />

          {/* Prev button */}
          <button
            onClick={goPrev}
            disabled={currentIndex === 0}
            aria-label="Previous slide"
            style={{
              width: 32,
              height: 32,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              border: '1px solid var(--border-default)',
              borderRadius: 'var(--radius-sm)',
              background: 'transparent',
              color: currentIndex === 0 ? 'var(--text-tertiary)' : 'var(--text-secondary)',
              cursor: currentIndex === 0 ? 'not-allowed' : 'pointer',
              transition: 'all var(--duration-fast) ease',
              opacity: currentIndex === 0 ? 0.4 : 1,
              fontSize: '14px',
            }}
            onMouseEnter={(e) => {
              if (currentIndex > 0) {
                (e.currentTarget as HTMLElement).style.borderColor = 'var(--text-secondary)';
                (e.currentTarget as HTMLElement).style.color = 'var(--text-primary)';
              }
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.borderColor = 'var(--border-default)';
              (e.currentTarget as HTMLElement).style.color =
                currentIndex === 0 ? 'var(--text-tertiary)' : 'var(--text-secondary)';
            }}
          >
            ←
          </button>

          {/* Next button */}
          <button
            onClick={goNext}
            disabled={isFinalSlide}
            aria-label="Next slide"
            style={{
              width: 32,
              height: 32,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              border: '1px solid var(--border-default)',
              borderRadius: 'var(--radius-sm)',
              background: 'transparent',
              color: isFinalSlide ? 'var(--text-tertiary)' : 'var(--text-secondary)',
              cursor: isFinalSlide ? 'not-allowed' : 'pointer',
              transition: 'all var(--duration-fast) ease',
              opacity: isFinalSlide ? 0.4 : 1,
              fontSize: '14px',
            }}
            onMouseEnter={(e) => {
              if (!isFinalSlide) {
                (e.currentTarget as HTMLElement).style.borderColor = 'var(--text-secondary)';
                (e.currentTarget as HTMLElement).style.color = 'var(--text-primary)';
              }
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.borderColor = 'var(--border-default)';
              (e.currentTarget as HTMLElement).style.color =
                isFinalSlide ? 'var(--text-tertiary)' : 'var(--text-secondary)';
            }}
          >
            →
          </button>
        </nav>
      </header>

      {/* ---- CONTENT AREA ---- */}
      <main
        style={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          minHeight: 0,
          padding: 'var(--space-5) var(--space-6)',
          overflow: 'hidden',
          position: 'relative',
        }}
        aria-live="polite"
      >
        <div
          style={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            opacity: transitioning ? 0 : 1,
            transform: transitioning
              ? direction === 'forward'
                ? 'translateY(8px)'
                : 'translateY(-8px)'
              : 'translateY(0)',
            transition: transitioning
              ? 'none'
              : 'opacity var(--slide-duration) var(--ease-out), transform var(--slide-duration) var(--ease-out)',
          }}
          key={currentSlide.id}
        >
          <SlideRenderer slide={currentSlide} />
        </div>
      </main>

      {/* ---- PROGRESS BAR ---- */}
      <div
        style={{
          height: 2,
          background: 'var(--border-subtle)',
          flexShrink: 0,
        }}
        role="progressbar"
        aria-valuenow={currentIndex + 1}
        aria-valuemin={1}
        aria-valuemax={totalSlides}
        aria-label="Presentation progress"
      >
        <div
          className="progress-bar"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
}
