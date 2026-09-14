'use client';

import { useState } from 'react';

interface ErrorHandlingExampleProps {
  variant: 'bad' | 'good';
}

export default function ErrorHandlingExample({ variant }: ErrorHandlingExampleProps) {
  return variant === 'bad' ? <BadErrors /> : <GoodErrors />;
}

function BadErrors() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  return (
    <div style={{ width: '100%', maxWidth: 380 }}>
      <div
        style={{
          padding: 'var(--space-5)',
          background: 'var(--bg-surface)',
          borderRadius: 'var(--radius-md)',
          border: '1px solid var(--border-subtle)',
        }}
      >
        <p style={{ fontSize: 'var(--text-small)', color: 'var(--text-secondary)', marginBottom: 'var(--space-4)' }}>
          UniFlow — Student Registration
        </p>
        <input
          type="text"
          value={email}
          onChange={(e) => { setEmail(e.target.value); setSubmitted(false); }}
          placeholder="Email"
          style={{
            width: '100%',
            padding: '8px',
            background: 'var(--bg-primary)',
            border: `1px solid ${submitted ? 'red' : 'var(--border-subtle)'}`,
            borderRadius: 'var(--radius-sm)',
            color: 'var(--text-primary)',
            fontSize: 'var(--text-small)',
            outline: 'none',
            marginBottom: 'var(--space-3)',
            boxSizing: 'border-box',
          }}
        />
        <button
          onClick={() => setSubmitted(true)}
          style={{
            width: '100%',
            padding: 'var(--space-3)',
            background: '#444',
            color: '#aaa',
            border: 'none',
            borderRadius: 'var(--radius-sm)',
            fontSize: 'var(--text-small)',
            cursor: 'pointer',
          }}
        >
          Register
        </button>
        {submitted && (
          <p style={{ color: 'red', fontSize: 'var(--text-caption)', marginTop: 'var(--space-3)', margin: 'var(--space-3) 0 0' }}>
            ❌ Error
          </p>
        )}
        <p style={{ fontSize: 'var(--text-caption)', color: 'var(--text-tertiary)', marginTop: 'var(--space-4)', fontStyle: 'italic' }}>
          What went wrong? How do you fix it? No idea.
        </p>
      </div>
    </div>
  );
}

function GoodErrors() {
  const [email, setEmail] = useState('');
  const [touched, setTouched] = useState(false);

  const isValid = email.includes('@') && email.includes('.');
  const showError = touched && email.length > 0 && !isValid;
  const showSuccess = touched && isValid;

  return (
    <div style={{ width: '100%', maxWidth: 380 }}>
      <div
        style={{
          padding: 'var(--space-5)',
          background: 'var(--bg-surface)',
          borderRadius: 'var(--radius-md)',
          border: '1px solid var(--border-subtle)',
        }}
      >
        <p style={{ fontSize: 'var(--text-small)', color: 'var(--text-secondary)', marginBottom: 'var(--space-4)' }}>
          UniFlow — Student Registration
        </p>
        <div>
          <label
            htmlFor="good-email"
            style={{
              display: 'block',
              fontSize: 'var(--text-caption)',
              fontWeight: 500,
              color: 'var(--text-secondary)',
              marginBottom: 'var(--space-1)',
            }}
          >
            University email
          </label>
          <input
            id="good-email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onBlur={() => setTouched(true)}
            placeholder="you@university.edu"
            aria-invalid={showError}
            aria-describedby={showError ? 'email-error' : showSuccess ? 'email-success' : undefined}
            style={{
              width: '100%',
              padding: 'var(--space-3)',
              background: 'var(--bg-primary)',
              border: `1px solid ${showError ? 'var(--danger)' : showSuccess ? 'var(--success)' : 'var(--border-default)'}`,
              borderRadius: 'var(--radius-sm)',
              color: 'var(--text-primary)',
              fontSize: 'var(--text-small)',
              outline: 'none',
              boxSizing: 'border-box',
              transition: 'border-color var(--duration-fast) ease',
            }}
          />
          {showError && (
            <p
              id="email-error"
              role="alert"
              style={{
                fontSize: 'var(--text-caption)',
                color: 'var(--danger)',
                marginTop: 'var(--space-1)',
                margin: 'var(--space-1) 0 0',
                display: 'flex',
                alignItems: 'center',
                gap: 'var(--space-2)',
              }}
            >
              <span aria-hidden="true">✕</span>
              Please enter a valid email, e.g. name@university.edu
            </p>
          )}
          {showSuccess && (
            <p
              id="email-success"
              style={{
                fontSize: 'var(--text-caption)',
                color: 'var(--success)',
                marginTop: 'var(--space-1)',
                margin: 'var(--space-1) 0 0',
                display: 'flex',
                alignItems: 'center',
                gap: 'var(--space-2)',
              }}
            >
              <span aria-hidden="true">✓</span>
              Looks good
            </p>
          )}
        </div>
        <button
          disabled={!isValid}
          style={{
            width: '100%',
            marginTop: 'var(--space-4)',
            padding: 'var(--space-3)',
            background: isValid ? 'var(--accent)' : '#333',
            color: isValid ? 'var(--text-inverted)' : 'var(--text-tertiary)',
            border: 'none',
            borderRadius: 'var(--radius-sm)',
            fontSize: 'var(--text-small)',
            fontWeight: 600,
            cursor: isValid ? 'pointer' : 'not-allowed',
            transition: 'all var(--duration-fast) ease',
          }}
        >
          Register
        </button>
        <p style={{ fontSize: 'var(--text-caption)', color: 'var(--text-tertiary)', marginTop: 'var(--space-4)', fontStyle: 'italic' }}>
          Inline validation. Helpful message. Preserved input.
        </p>
      </div>
    </div>
  );
}
