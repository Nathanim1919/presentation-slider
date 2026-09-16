'use client';

import { useState } from 'react';
import type { DesignInternetContent } from '@/lib/types';

interface DesignInternetSlideProps {
  content: DesignInternetContent;
}

export default function DesignInternetSlide({ content }: DesignInternetSlideProps) {
  const [activeCategoryIndex, setActiveCategoryIndex] = useState<number>(0);
  const [viewMode, setViewMode] = useState<'grid' | 'focused'>('grid');

  const categories = content.categories || [];
  const activeCat = categories[activeCategoryIndex] || categories[0];

  return (
    <article className="slide-article flex flex-1 flex-col items-center justify-between px-6 py-5 max-w-6xl mx-auto w-full overflow-hidden">
      {/* 1. Header */}
      <div className="w-full text-center">
        <h2
          className="stagger-1 slide-active"
          style={{
            fontSize: 'var(--text-h2)',
            fontWeight: 700,
            color: 'var(--text-primary)',
            letterSpacing: '-0.03em',
            margin: 0,
            marginBottom: 'var(--space-1)',
          }}
        >
          {content.heading}
        </h2>
        {content.subtitle && (
          <p
            className="stagger-2 slide-active text-xs md:text-sm text-[var(--text-secondary)] m-0 mb-3"
          >
            {content.subtitle}
          </p>
        )}

        {/* Category switcher tabs */}
        <div className="flex items-center justify-center flex-wrap gap-2 mb-2">
          {categories.map((cat, idx) => {
            const isActive = viewMode === 'focused' && activeCategoryIndex === idx;
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => {
                  setActiveCategoryIndex(idx);
                  setViewMode('focused');
                }}
                className="px-3 py-1.5 rounded-lg text-xs font-mono transition-all duration-200"
                style={{
                  background: isActive
                    ? 'rgba(232, 115, 74, 0.15)'
                    : 'var(--bg-elevated)',
                  border: isActive
                    ? '1px solid var(--accent)'
                    : '1px solid var(--border-default)',
                  color: isActive ? 'var(--accent)' : 'var(--text-secondary)',
                  cursor: 'pointer',
                  fontWeight: isActive ? 600 : 500,
                }}
              >
                <span className="opacity-60 mr-1.5">{cat.number}</span>
                {cat.question}
              </button>
            );
          })}
          <button
            type="button"
            onClick={() => setViewMode(viewMode === 'grid' ? 'focused' : 'grid')}
            className="px-2.5 py-1.5 rounded-lg text-xs font-mono transition-all"
            style={{
              background: viewMode === 'grid' ? 'rgba(255,255,255,0.08)' : 'transparent',
              border: '1px solid var(--border-default)',
              color: 'var(--text-tertiary)',
            }}
          >
            {viewMode === 'grid' ? 'Focus Mode' : 'View All 4'}
          </button>
        </div>
      </div>

      {/* 2. Categories Content: Grid or Focused */}
      <div className="w-full flex-1 flex flex-col justify-center my-2">
        {viewMode === 'grid' ? (
          /* 4-column responsive grid */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 w-full">
            {categories.map((cat, idx) => (
              <div
                key={cat.id}
                className="p-3.5 rounded-xl flex flex-col justify-between transition-all duration-200"
                style={{
                  background: 'var(--bg-elevated)',
                  border: '1px solid var(--border-default)',
                }}
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center gap-1.5 mb-1.5">
                    <span className="text-[10px] font-mono font-bold text-[var(--accent)]">
                      {cat.number}
                    </span>
                    <span className="text-xs font-semibold text-[var(--text-primary)]">
                      {cat.question}
                    </span>
                  </div>

                  {/* Resource Links */}
                  <div className="space-y-2.5 mt-2.5">
                    {cat.resources.map((res) => (
                      <div key={res.name} className="flex flex-col">
                        <a
                          href={res.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-xs font-bold text-[var(--text-primary)] hover:text-[var(--accent)] transition-colors group"
                        >
                          <span>{res.name}</span>
                          <span className="text-[10px] opacity-40 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all">
                            ↗
                          </span>
                        </a>
                        <div className="flex flex-wrap gap-1 mt-1">
                          {res.highlights.map((h) => (
                            <span
                              key={h}
                              className="text-[9px] px-1.5 py-0.5 rounded"
                              style={{
                                background: 'rgba(255, 255, 255, 0.04)',
                                color: 'var(--text-secondary)',
                              }}
                            >
                              {h}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Direct Study / Recommended Guide */}
                  {cat.directStudy && (
                    <div className="mt-3 pt-2 border-t border-[var(--border-default)]">
                      <span className="text-[10px] text-[var(--text-tertiary)] block mb-1">
                        Or study directly:
                      </span>
                      <div className="flex flex-wrap gap-1">
                        {cat.directStudy.map((app) => (
                          <span
                            key={app}
                            className="text-[9px] font-mono px-1.5 py-0.5 rounded"
                            style={{
                              background: 'rgba(232, 115, 74, 0.08)',
                              color: 'var(--accent)',
                              border: '1px solid rgba(232, 115, 74, 0.2)',
                            }}
                          >
                            {app}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {cat.recommendedGuide && (
                    <div className="mt-3 pt-2 border-t border-[var(--border-default)]">
                      <a
                        href={cat.recommendedGuide.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[10px] font-semibold text-[var(--accent)] hover:underline block"
                      >
                        ⭐ {cat.recommendedGuide.name} ↗
                      </a>
                      <span className="text-[9px] text-[var(--text-tertiary)] block mt-0.5">
                        {cat.recommendedGuide.note}
                      </span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* Focused Category Detailed View */
          <div
            className="w-full rounded-2xl p-6 transition-all duration-300"
            style={{
              background: 'var(--bg-elevated)',
              border: '1px solid var(--border-strong)',
              boxShadow: '0 8px 32px rgba(0,0,0,0.25)',
            }}
          >
            <div className="flex items-center gap-2 mb-4">
              <span className="px-2 py-0.5 rounded text-xs font-mono font-bold bg-[rgba(232,115,74,0.15)] text-[var(--accent)]">
                {activeCat.number}
              </span>
              <h3 className="text-base font-bold text-[var(--text-primary)] m-0">
                {activeCat.question}
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {activeCat.resources.map((res) => (
                <div
                  key={res.name}
                  className="p-4 rounded-xl flex flex-col justify-between"
                  style={{
                    background: 'rgba(255, 255, 255, 0.02)',
                    border: '1px solid var(--border-default)',
                  }}
                >
                  <div>
                    <a
                      href={res.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm font-bold text-[var(--text-primary)] hover:text-[var(--accent)] transition-colors group"
                    >
                      <span className="text-sm">{res.name}</span>
                      <span className="text-xs opacity-50 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all">
                        ↗
                      </span>
                    </a>
                    {res.description && (
                      <p className="text-xs text-[var(--text-secondary)] mt-1 mb-2">
                        {res.description}
                      </p>
                    )}
                  </div>
                  <div className="flex flex-wrap gap-1.5 mt-2">
                    {res.highlights.map((h) => (
                      <span
                        key={h}
                        className="text-[10px] px-2 py-0.5 rounded font-medium"
                        style={{
                          background: 'rgba(255, 255, 255, 0.05)',
                          color: 'var(--text-secondary)',
                          border: '1px solid var(--border-default)',
                        }}
                      >
                        {h}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Extra direct study or guides in focused view */}
            {(activeCat.directStudy || activeCat.recommendedGuide) && (
              <div className="mt-4 pt-3 border-t border-[var(--border-default)] flex items-center justify-between flex-wrap gap-2">
                {activeCat.directStudy && (
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-[var(--text-tertiary)]">
                      Or study live apps directly:
                    </span>
                    <div className="flex gap-1.5">
                      {activeCat.directStudy.map((app) => (
                        <span
                          key={app}
                          className="text-[10px] font-mono px-2 py-0.5 rounded bg-[rgba(232,115,74,0.1)] text-[var(--accent)] border border-[rgba(232,115,74,0.25)]"
                        >
                          {app}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
                {activeCat.recommendedGuide && (
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-[var(--text-tertiary)]">
                      Starting point:
                    </span>
                    <a
                      href={activeCat.recommendedGuide.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-semibold text-[var(--accent)] hover:underline"
                    >
                      {activeCat.recommendedGuide.name} ↗
                    </a>
                  </div>
                )}
              </div>
            )}
          </div>
        )}
      </div>

      {/* 3. Bottom Section: "Don't browse. Investigate." */}
      <div
        className="w-full mt-2 p-4 rounded-xl flex flex-col gap-2.5 transition-all"
        style={{
          background: 'rgba(0, 0, 0, 0.3)',
          border: '1px solid var(--border-default)',
        }}
      >
        <div className="flex items-center justify-between flex-wrap gap-2 border-b border-[var(--border-default)] pb-2">
          <span
            style={{
              fontSize: 'var(--text-small)',
              fontWeight: 700,
              letterSpacing: '-0.01em',
              color: 'var(--text-primary)',
            }}
          >
            {content.investigation.heading}
          </span>
          <span className="text-[11px] font-mono text-[var(--text-tertiary)]">
            Active analysis mindset
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-3 items-center">
          {/* Instead of box */}
          <div
            className="p-2.5 rounded-lg flex flex-col justify-center"
            style={{
              background: 'rgba(255, 255, 255, 0.02)',
              border: '1px solid rgba(244, 63, 94, 0.25)',
            }}
          >
            <span className="text-[10px] font-mono text-rose-400 uppercase tracking-wider">
              Instead of
            </span>
            <span className="text-xs text-[var(--text-secondary)] line-through mt-0.5">
              “{content.investigation.insteadOf}”
            </span>
          </div>

          {/* Ask questions */}
          <div className="md:col-span-3 flex flex-wrap gap-1.5 items-center">
            <span className="text-[10px] font-mono text-[var(--accent)] uppercase tracking-wider font-semibold mr-1">
              Ask:
            </span>
            {content.investigation.questions.map((q) => (
              <span
                key={q}
                className="text-[11px] px-2.5 py-1 rounded-md font-medium"
                style={{
                  background: 'rgba(255, 255, 255, 0.04)',
                  border: '1px solid var(--border-default)',
                  color: 'var(--text-primary)',
                }}
              >
                “{q}”
              </span>
            ))}
          </div>
        </div>

        {/* Final Takeaway */}
        <div
          className="text-center pt-1 text-xs font-semibold text-[var(--accent)]"
          style={{ letterSpacing: '-0.01em' }}
        >
          {content.investigation.takeaway}
        </div>
      </div>
    </article>
  );
}
