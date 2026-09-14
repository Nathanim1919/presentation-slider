'use client';

import { useState } from 'react';

interface FormExampleProps {
  variant: 'bad' | 'good';
}

export default function FormExample({ variant }: FormExampleProps) {
  return variant === 'bad' ? <BadForm /> : <GoodForm />;
}

/* ---- BAD FORM ---- */
function BadForm() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div style={{ width: '100%', maxWidth: 420 }}>
      <div
        style={{
          padding: 'var(--space-5)',
          background: 'var(--bg-surface)',
          borderRadius: 'var(--radius-md)',
          border: '1px solid var(--border-subtle)',
        }}
      >
        {/* No title or context */}
        <p style={{ fontSize: 'var(--text-caption)', color: 'var(--text-tertiary)', marginBottom: 'var(--space-3)' }}>
          UniFlow — Student Registration
        </p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
          <input
            type="text"
            placeholder="Name"
            style={badInputStyle}
          />
          <input
            type="text"
            placeholder="Email"
            style={badInputStyle}
          />
          <input
            type="text"
            placeholder="Phone (optional? required?)"
            style={badInputStyle}
          />
          <input
            type="text"
            placeholder="Address Line 1"
            style={badInputStyle}
          />
          <input
            type="text"
            placeholder="Address Line 2"
            style={badInputStyle}
          />
          <input
            type="text"
            placeholder="City"
            style={badInputStyle}
          />
          <input
            type="text"
            placeholder="Zip"
            style={badInputStyle}
          />
          <input
            type="text"
            placeholder="Country"
            style={badInputStyle}
          />
          <input
            type="text"
            placeholder="Company (why?)"
            style={badInputStyle}
          />

          <button
            onClick={() => setSubmitted(true)}
            style={{
              padding: 'var(--space-3)',
              background: '#444',
              color: '#aaa',
              border: 'none',
              borderRadius: 'var(--radius-sm)',
              fontSize: 'var(--text-small)',
              cursor: 'pointer',
            }}
          >
            Submit
          </button>

          {/* No feedback on submit */}
          {submitted && (
            <p style={{ color: 'red', fontSize: 'var(--text-caption)', margin: 0 }}>
              Error: Please fill all required fields (which ones?)
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

const badInputStyle: React.CSSProperties = {
  padding: '8px',
  background: 'var(--bg-primary)',
  border: '1px solid var(--border-subtle)',
  borderRadius: 'var(--radius-sm)',
  color: 'var(--text-primary)',
  fontSize: 'var(--text-small)',
  outline: 'none',
};

/* ---- GOOD FORM ---- */
function GoodForm() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const e: Record<string, string> = {};
    if (!name.trim()) e.name = 'Name is required';
    if (!email.trim()) e.email = 'Email is required';
    else if (!email.includes('@')) e.email = 'Please enter a valid email';
    return e;
  };

  const handleSubmit = () => {
    const e = validate();
    if (Object.keys(e).length > 0) {
      setErrors(e);
      return;
    }
    setErrors({});
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div
        style={{
          width: '100%',
          maxWidth: 420,
          padding: 'var(--space-7)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 'var(--space-3)',
          textAlign: 'center',
        }}
      >
        <span
          style={{
            width: 48,
            height: 48,
            borderRadius: 'var(--radius-full)',
            background: 'var(--success-subtle)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '1.5rem',
            color: 'var(--success)',
          }}
        >
          ✓
        </span>
        <p style={{ fontSize: 'var(--text-body)', fontWeight: 600, color: 'var(--text-primary)', margin: 0 }}>
          You&apos;re all set!
        </p>
        <p style={{ fontSize: 'var(--text-small)', color: 'var(--text-secondary)', margin: 0 }}>
          We&apos;ll send a confirmation to {email}
        </p>
        <button
          onClick={() => { setSubmitted(false); setName(''); setEmail(''); }}
          style={{
            marginTop: 'var(--space-3)',
            padding: 'var(--space-2) var(--space-4)',
            background: 'transparent',
            color: 'var(--accent-text)',
            border: '1px solid var(--border-default)',
            borderRadius: 'var(--radius-full)',
            fontSize: 'var(--text-caption)',
            cursor: 'pointer',
          }}
        >
          Reset demo
        </button>
      </div>
    );
  }

  return (
    <div style={{ width: '100%', maxWidth: 420 }}>
      <div
        style={{
          padding: 'var(--space-6)',
          background: 'var(--bg-surface)',
          borderRadius: 'var(--radius-md)',
          border: '1px solid var(--border-subtle)',
        }}
      >
        <h3
          style={{
            fontSize: 'var(--text-body)',
            fontWeight: 600,
            color: 'var(--text-primary)',
            marginBottom: 'var(--space-1)',
          }}
        >
          UniFlow — Register
        </h3>
        <p
          style={{
            fontSize: 'var(--text-caption)',
            color: 'var(--text-tertiary)',
            marginBottom: 'var(--space-5)',
          }}
        >
          Just two fields and you&apos;re registered.
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
          <GoodField
            label="Full name"
            value={name}
            onChange={setName}
            error={errors.name}
            placeholder="e.g. Abebe Kebede"
          />
          <GoodField
            label="Email address"
            type="email"
            value={email}
            onChange={setEmail}
            error={errors.email}
            placeholder="you@example.com"
          />

          <button
            onClick={handleSubmit}
            style={{
              padding: 'var(--space-3)',
              background: 'var(--accent)',
              color: 'var(--text-inverted)',
              border: 'none',
              borderRadius: 'var(--radius-sm)',
              fontSize: 'var(--text-small)',
              fontWeight: 600,
              cursor: 'pointer',
              transition: 'background var(--duration-fast) ease',
              marginTop: 'var(--space-1)',
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.background = 'var(--accent-hover)';
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.background = 'var(--accent)';
            }}
          >
            Create account
          </button>
        </div>
      </div>
    </div>
  );
}

function GoodField({
  label,
  value,
  onChange,
  error,
  placeholder,
  type = 'text',
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  error?: string;
  placeholder?: string;
  type?: string;
}) {
  const id = label.toLowerCase().replace(/\s+/g, '-');

  return (
    <div>
      <label
        htmlFor={id}
        style={{
          display: 'block',
          fontSize: 'var(--text-caption)',
          fontWeight: 500,
          color: 'var(--text-secondary)',
          marginBottom: 'var(--space-1)',
        }}
      >
        {label}
      </label>
      <input
        id={id}
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        style={{
          width: '100%',
          padding: 'var(--space-3)',
          background: 'var(--bg-primary)',
          border: `1px solid ${error ? 'var(--danger)' : 'var(--border-default)'}`,
          borderRadius: 'var(--radius-sm)',
          color: 'var(--text-primary)',
          fontSize: 'var(--text-small)',
          outline: 'none',
          transition: 'border-color var(--duration-fast) ease',
          boxSizing: 'border-box',
        }}
        onFocus={(e) => {
          if (!error) (e.currentTarget as HTMLElement).style.borderColor = 'var(--accent)';
        }}
        onBlur={(e) => {
          if (!error) (e.currentTarget as HTMLElement).style.borderColor = 'var(--border-default)';
        }}
        aria-invalid={!!error}
        aria-describedby={error ? `${id}-error` : undefined}
      />
      {error && (
        <p
          id={`${id}-error`}
          role="alert"
          style={{
            fontSize: 'var(--text-caption)',
            color: 'var(--danger)',
            marginTop: 'var(--space-1)',
            margin: 0,
            marginBlockStart: 'var(--space-1)',
          }}
        >
          {error}
        </p>
      )}
    </div>
  );
}
