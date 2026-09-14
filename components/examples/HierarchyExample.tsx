'use client';

interface HierarchyExampleProps {
  variant: 'bad' | 'good';
}

export default function HierarchyExample({ variant }: HierarchyExampleProps) {
  return variant === 'bad' ? <BadHierarchy /> : <GoodHierarchy />;
}

const cardBase: React.CSSProperties = {
  padding: 'var(--space-5)',
  background: 'var(--bg-surface)',
  borderRadius: 'var(--radius-md)',
  border: '1px solid var(--border-subtle)',
  maxWidth: 360,
  width: '100%',
};

function BadHierarchy() {
  return (
    <div style={cardBase}>
      {/* Everything has the same visual weight */}
      <p style={{ fontSize: '14px', color: 'var(--text-secondary)', margin: '0 0 8px' }}>UniFlow</p>
      <p style={{ fontSize: '14px', color: 'var(--text-secondary)', margin: '0 0 8px' }}>Course Details</p>
      <p style={{ fontSize: '14px', color: 'var(--text-secondary)', margin: '0 0 8px' }}>Introduction to Computer Science</p>
      <p style={{ fontSize: '14px', color: 'var(--text-secondary)', margin: '0 0 8px' }}>Dr. Sarah Johnson</p>
      <p style={{ fontSize: '14px', color: 'var(--text-secondary)', margin: '0 0 8px' }}>Monday, Wednesday, Friday</p>
      <p style={{ fontSize: '14px', color: 'var(--text-secondary)', margin: '0 0 8px' }}>10:00 AM - 11:30 AM</p>
      <p style={{ fontSize: '14px', color: 'var(--text-secondary)', margin: '0 0 8px' }}>Room 204, Science Building</p>
      <p style={{ fontSize: '14px', color: 'var(--text-secondary)', margin: '0 0 8px' }}>3 Credits</p>
      <p style={{ fontSize: '14px', color: 'var(--text-secondary)', margin: '0 0 8px' }}>Prerequisites: None</p>
      <button style={{ fontSize: '14px', color: 'var(--text-secondary)', background: '#333', border: '1px solid #444', padding: '8px 16px', borderRadius: '4px', cursor: 'pointer', marginTop: '4px' }}>
        Enroll
      </button>
    </div>
  );
}

function GoodHierarchy() {
  return (
    <div style={cardBase}>
      {/* Clear visual hierarchy */}
      <span
        style={{
          fontSize: 'var(--text-label)',
          fontWeight: 600,
          color: 'var(--accent-text)',
          textTransform: 'uppercase' as const,
          letterSpacing: '0.06em',
        }}
      >
        UniFlow — Course Details
      </span>

      <h3
        style={{
          fontSize: 'var(--text-h3)',
          fontWeight: 600,
          color: 'var(--text-primary)',
          lineHeight: 'var(--leading-snug)',
          margin: 'var(--space-2) 0 var(--space-1)',
        }}
      >
        Introduction to Computer Science
      </h3>

      <p
        style={{
          fontSize: 'var(--text-small)',
          color: 'var(--text-secondary)',
          margin: '0 0 var(--space-4)',
        }}
      >
        Dr. Sarah Johnson
      </p>

      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 'var(--space-2)',
          padding: 'var(--space-3) 0',
          borderTop: '1px solid var(--border-subtle)',
          borderBottom: '1px solid var(--border-subtle)',
          marginBottom: 'var(--space-4)',
        }}
      >
        <DetailRow label="Schedule" value="Mon, Wed, Fri · 10:00–11:30" />
        <DetailRow label="Location" value="Room 204, Science Building" />
        <DetailRow label="Credits" value="3" />
        <DetailRow label="Prerequisites" value="None" />
      </div>

      <button
        style={{
          width: '100%',
          padding: 'var(--space-3)',
          background: 'var(--accent)',
          color: 'var(--text-inverted)',
          border: 'none',
          borderRadius: 'var(--radius-sm)',
          fontSize: 'var(--text-small)',
          fontWeight: 600,
          cursor: 'pointer',
        }}
      >
        Enroll in Course
      </button>
    </div>
  );
}

function DetailRow({ label, value }: { label: string; value: string }) {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <span style={{ fontSize: 'var(--text-caption)', color: 'var(--text-tertiary)' }}>
        {label}
      </span>
      <span style={{ fontSize: 'var(--text-caption)', color: 'var(--text-secondary)' }}>
        {value}
      </span>
    </div>
  );
}
