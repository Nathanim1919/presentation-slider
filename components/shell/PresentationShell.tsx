'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import { slides } from '@/data/slides';
import SlideRenderer from '@/components/shell/SlideRenderer';
import ThemeToggle from '@/components/ui/ThemeToggle';

const STORAGE_KEY = 'presentation-slide-index';

export default function PresentationShell() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [transitioning, setTransitioning] = useState(false);
  const [direction, setDirection] = useState<'forward' | 'backward'>('forward');
  const totalSlides = slides.length;
  const containerRef = useRef<HTMLDivElement>(null);

  // Restore from sessionStorage
  useEffect(() => {
    const saved = sessionStorage.getItem(STORAGE_KEY);
    if (saved) {
      const idx = parseInt(saved, 10);
      if (!isNaN(idx) && idx >= 0 && idx < totalSlides) {
        setCurrentIndex(idx);
      }
    }
  }, [totalSlides]);

  // Persist to sessionStorage
  useEffect(() => {
    sessionStorage.setItem(STORAGE_KEY, String(currentIndex));
  }, [currentIndex]);

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
      }
    };

    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [goNext, goPrev]);

  const currentSlide = slides[currentIndex];
  const progress = ((currentIndex + 1) / totalSlides) * 100;

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
        }}
      >
        {/* Left — slide title */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-4)', minWidth: 0 }}>
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
              UI/UX & Product Design
            </span>
            <span style={{ color: 'var(--border-default)' }} aria-hidden="true">
              /
            </span>
            <span style={{ marginLeft: 'var(--space-3)', color: 'var(--text-primary)', fontWeight: 600 }}>
              {currentSlide.title}
            </span>
          </h1>
        </div>

        {/* Right — navigation */}
        <nav
          style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-4)', flexShrink: 0 }}
          aria-label="Slide navigation"
        >
          {/* Counter */}
          <span
            style={{
              fontSize: 'var(--text-caption)',
              color: 'var(--text-tertiary)',
              fontVariantNumeric: 'tabular-nums',
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

          {/* Prev */}
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
          >
            ←
          </button>

          {/* Next */}
          <button
            onClick={goNext}
            disabled={currentIndex === totalSlides - 1}
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
              color: currentIndex === totalSlides - 1 ? 'var(--text-tertiary)' : 'var(--text-secondary)',
              cursor: currentIndex === totalSlides - 1 ? 'not-allowed' : 'pointer',
              transition: 'all var(--duration-fast) ease',
              opacity: currentIndex === totalSlides - 1 ? 0.4 : 1,
              fontSize: '14px',
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
