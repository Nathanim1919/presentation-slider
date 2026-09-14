'use client';

interface AccessibilityExampleProps {
  variant: 'bad' | 'good';
}

export default function AccessibilityExample({ variant }: AccessibilityExampleProps) {
  return variant === 'bad' ? <BadAccessibility /> : <GoodAccessibility />;
}

const statuses = [
  { label: 'Course Portal', status: 'healthy' },
  { label: 'Grade System', status: 'warning' },
  { label: 'Library Database', status: 'error' },
  { label: 'Student Email', status: 'healthy' },
];

function BadAccessibility() {
  const colorOnly: Record<string, string> = {
    healthy: '#22c55e',
    warning: '#eab308',
    error: '#ef4444',
  };

  return (
    <div style={{ maxWidth: 340, width: '100%' }}>
      <p style={{ fontSize: 'var(--text-caption)', color: 'var(--text-tertiary)', marginBottom: 'var(--space-4)' }}>
        UniFlow — System status. Can you tell what each dot means?
      </p>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
        {statuses.map((s) => (
          <div
            key={s.label}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: 'var(--space-3) var(--space-4)',
              background: 'var(--bg-surface)',
              borderRadius: 'var(--radius-sm)',
              border: '1px solid var(--border-subtle)',
            }}
          >
            <span style={{ fontSize: 'var(--text-small)', color: 'var(--text-secondary)' }}>
              {s.label}
            </span>
            {/* Color is the ONLY indicator */}
            <span
              style={{
                width: 10,
                height: 10,
                borderRadius: 'var(--radius-full)',
                background: colorOnly[s.status],
              }}
            />
          </div>
        ))}
      </div>
      <p style={{ fontSize: 'var(--text-caption)', color: 'var(--text-tertiary)', marginTop: 'var(--space-4)', fontStyle: 'italic' }}>
        Color-blind users see identical dots.
      </p>
    </div>
  );
}

function GoodAccessibility() {
  const statusInfo: Record<string, { color: string; bg: string; icon: string; text: string }> = {
    healthy: { color: 'var(--success)', bg: 'var(--success-subtle)', icon: '✓', text: 'Operational' },
    warning: { color: 'var(--warning)', bg: 'var(--warning-subtle)', icon: '!', text: 'Degraded' },
    error: { color: 'var(--danger)', bg: 'var(--danger-subtle)', icon: '✕', text: 'Down' },
  };

  return (
    <div style={{ maxWidth: 340, width: '100%' }}>
      <p style={{ fontSize: 'var(--text-caption)', color: 'var(--text-tertiary)', marginBottom: 'var(--space-4)' }}>
        UniFlow — System status. Multiple signals, not just color.
      </p>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
        {statuses.map((s) => {
          const info = statusInfo[s.status];
          return (
            <div
              key={s.label}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: 'var(--space-3) var(--space-4)',
                background: 'var(--bg-surface)',
                borderRadius: 'var(--radius-sm)',
                border: '1px solid var(--border-subtle)',
              }}
            >
              <span style={{ fontSize: 'var(--text-small)', color: 'var(--text-secondary)' }}>
                {s.label}
              </span>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 'var(--space-2)',
                  padding: 'var(--space-1) var(--space-3)',
                  background: info.bg,
                  borderRadius: 'var(--radius-full)',
                }}
              >
                <span
                  style={{
                    fontSize: '0.65rem',
                    fontWeight: 700,
                    color: info.color,
                    width: 14,
                    height: 14,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                  aria-hidden="true"
                >
                  {info.icon}
                </span>
                <span
                  style={{
                    fontSize: 'var(--text-caption)',
                    fontWeight: 500,
                    color: info.color,
                  }}
                >
                  {info.text}
                </span>
              </div>
            </div>
          );
        })}
      </div>
      <p style={{ fontSize: 'var(--text-caption)', color: 'var(--text-tertiary)', marginTop: 'var(--space-4)', fontStyle: 'italic' }}>
        Icon + text + color = accessible to everyone.
      </p>
    </div>
  );
}
