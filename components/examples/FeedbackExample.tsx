'use client';

import { useState } from 'react';

interface FeedbackExampleProps {
  variant: 'bad' | 'good';
}

export default function FeedbackExample({ variant }: FeedbackExampleProps) {
  return variant === 'bad' ? <BadFeedback /> : <GoodFeedback />;
}

function BadFeedback() {
  return (
    <div style={{ textAlign: 'center', maxWidth: 300 }}>
      <p style={{ fontSize: 'var(--text-small)', color: 'var(--text-secondary)', marginBottom: 'var(--space-4)' }}>
        Click the button. What happens?
      </p>
      <button
        onClick={() => { /* intentionally nothing */ }}
        style={{
          padding: 'var(--space-3) var(--space-6)',
          background: '#444',
          color: '#aaa',
          border: 'none',
          borderRadius: 'var(--radius-sm)',
          fontSize: 'var(--text-small)',
          cursor: 'pointer',
        }}
      >
        Save Changes
      </button>
      <p
        style={{
          fontSize: 'var(--text-caption)',
          color: 'var(--text-tertiary)',
          marginTop: 'var(--space-5)',
          fontStyle: 'italic',
        }}
      >
        Did it save? Did it fail? You have no idea.
      </p>
    </div>
  );
}

function GoodFeedback() {
  const [state, setState] = useState<'idle' | 'saving' | 'saved'>('idle');

  const handleSave = () => {
    setState('saving');
    setTimeout(() => setState('saved'), 1200);
    setTimeout(() => setState('idle'), 3000);
  };

  return (
    <div style={{ textAlign: 'center', maxWidth: 300 }}>
      <p style={{ fontSize: 'var(--text-small)', color: 'var(--text-secondary)', marginBottom: 'var(--space-4)' }}>
        Click the button. Notice the difference.
      </p>
      <button
        onClick={handleSave}
        disabled={state !== 'idle'}
        style={{
          padding: 'var(--space-3) var(--space-6)',
          background:
            state === 'saved' ? 'var(--success)' :
            state === 'saving' ? 'var(--accent-hover)' : 'var(--accent)',
          color: state === 'saved' ? 'var(--bg-primary)' : 'var(--text-inverted)',
          border: 'none',
          borderRadius: 'var(--radius-sm)',
          fontSize: 'var(--text-small)',
          fontWeight: 600,
          cursor: state === 'idle' ? 'pointer' : 'default',
          transition: 'all var(--duration-normal) var(--ease-out)',
          minWidth: 160,
          opacity: state === 'saving' ? 0.85 : 1,
        }}
      >
        {state === 'idle' && 'Save Changes'}
        {state === 'saving' && 'Saving...'}
        {state === 'saved' && '✓ Saved'}
      </button>
      <p
        style={{
          fontSize: 'var(--text-caption)',
          color: 'var(--text-tertiary)',
          marginTop: 'var(--space-5)',
          fontStyle: 'italic',
        }}
      >
        {state === 'idle' && 'Clear feedback at every state.'}
        {state === 'saving' && 'The user knows the system is working.'}
        {state === 'saved' && 'Confirmation. Confidence. Trust.'}
      </p>
    </div>
  );
}
