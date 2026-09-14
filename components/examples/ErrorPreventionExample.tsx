'use client';

import { useState } from 'react';

interface ErrorPreventionExampleProps {
  variant: 'bad' | 'good';
}

export default function ErrorPreventionExample({ variant }: ErrorPreventionExampleProps) {
  return variant === 'bad' ? <BadErrorPrevention /> : <GoodErrorPrevention />;
}

function BadErrorPrevention() {
  const [deleted, setDeleted] = useState(false);

  if (deleted) {
    return (
      <div style={{ textAlign: 'center', maxWidth: 320 }}>
        <p style={{ fontSize: 'var(--text-body)', fontWeight: 600, color: 'var(--danger)', marginBottom: 'var(--space-3)' }}>
          Account deleted.
        </p>
        <p style={{ fontSize: 'var(--text-caption)', color: 'var(--text-tertiary)', marginBottom: 'var(--space-5)' }}>
          No confirmation. No undo. Just gone.
        </p>
        <button
          onClick={() => setDeleted(false)}
          style={{
            padding: 'var(--space-2) var(--space-4)',
            background: 'transparent',
            color: 'var(--text-secondary)',
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
    <div style={{ textAlign: 'center', maxWidth: 320 }}>
      <p style={{ fontSize: 'var(--text-small)', color: 'var(--text-secondary)', marginBottom: 'var(--space-5)' }}>
        Manage your account settings
      </p>
      <button
        onClick={() => setDeleted(true)}
        style={{
          padding: 'var(--space-3) var(--space-6)',
          background: 'var(--danger)',
          color: 'white',
          border: 'none',
          borderRadius: 'var(--radius-sm)',
          fontSize: 'var(--text-small)',
          cursor: 'pointer',
        }}
      >
        Delete Account
      </button>
      <p style={{ fontSize: 'var(--text-caption)', color: 'var(--text-tertiary)', marginTop: 'var(--space-4)', fontStyle: 'italic' }}>
        One click. No warning. No going back.
      </p>
    </div>
  );
}

function GoodErrorPrevention() {
  const [showDialog, setShowDialog] = useState(false);
  const [deleted, setDeleted] = useState(false);
  const [confirmText, setConfirmText] = useState('');

  if (deleted) {
    return (
      <div style={{ textAlign: 'center', maxWidth: 320 }}>
        <p style={{ fontSize: 'var(--text-body)', fontWeight: 600, color: 'var(--text-primary)', marginBottom: 'var(--space-3)' }}>
          Account deletion requested
        </p>
        <p style={{ fontSize: 'var(--text-caption)', color: 'var(--text-secondary)', marginBottom: 'var(--space-5)' }}>
          You&apos;ll receive a confirmation email. You can cancel within 30 days.
        </p>
        <button
          onClick={() => { setDeleted(false); setConfirmText(''); }}
          style={{
            padding: 'var(--space-2) var(--space-4)',
            background: 'transparent',
            color: 'var(--text-secondary)',
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
    <div style={{ textAlign: 'center', maxWidth: 380, position: 'relative' }}>
      <p style={{ fontSize: 'var(--text-small)', color: 'var(--text-secondary)', marginBottom: 'var(--space-5)' }}>
        Manage your account settings
      </p>
      <button
        onClick={() => setShowDialog(true)}
        style={{
          padding: 'var(--space-3) var(--space-6)',
          background: 'transparent',
          color: 'var(--danger)',
          border: '1px solid rgba(248, 113, 113, 0.3)',
          borderRadius: 'var(--radius-sm)',
          fontSize: 'var(--text-small)',
          cursor: 'pointer',
          transition: 'all var(--duration-fast) ease',
        }}
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLElement).style.background = 'var(--danger-subtle)';
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLElement).style.background = 'transparent';
        }}
      >
        Delete Account
      </button>

      {/* Confirmation dialog */}
      {showDialog && (
        <>
          <div
            style={{
              position: 'fixed',
              inset: 0,
              background: 'rgba(0,0,0,0.6)',
              zIndex: 10,
            }}
            onClick={() => { setShowDialog(false); setConfirmText(''); }}
          />
          <div
            role="alertdialog"
            aria-labelledby="delete-dialog-title"
            aria-describedby="delete-dialog-desc"
            style={{
              position: 'fixed',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: '90%',
              maxWidth: 400,
              padding: 'var(--space-6)',
              background: 'var(--bg-elevated)',
              borderRadius: 'var(--radius-lg)',
              border: '1px solid var(--border-default)',
              zIndex: 11,
              textAlign: 'left',
              boxShadow: 'var(--shadow-md)',
            }}
          >
            <h3
              id="delete-dialog-title"
              style={{
                fontSize: 'var(--text-body)',
                fontWeight: 600,
                color: 'var(--danger)',
                marginBottom: 'var(--space-3)',
              }}
            >
              Delete your account?
            </h3>
            <p
              id="delete-dialog-desc"
              style={{
                fontSize: 'var(--text-small)',
                color: 'var(--text-secondary)',
                lineHeight: 'var(--leading-normal)',
                marginBottom: 'var(--space-4)',
              }}
            >
              This will permanently remove all your data, projects, and settings.
              This action cannot be undone.
            </p>
            <label
              htmlFor="confirm-delete"
              style={{
                display: 'block',
                fontSize: 'var(--text-caption)',
                color: 'var(--text-tertiary)',
                marginBottom: 'var(--space-2)',
              }}
            >
              Type <strong style={{ color: 'var(--text-primary)' }}>DELETE</strong> to confirm
            </label>
            <input
              id="confirm-delete"
              type="text"
              value={confirmText}
              onChange={(e) => setConfirmText(e.target.value)}
              placeholder="DELETE"
              style={{
                width: '100%',
                padding: 'var(--space-3)',
                background: 'var(--bg-primary)',
                border: '1px solid var(--border-default)',
                borderRadius: 'var(--radius-sm)',
                color: 'var(--text-primary)',
                fontSize: 'var(--text-small)',
                outline: 'none',
                marginBottom: 'var(--space-5)',
                boxSizing: 'border-box',
              }}
            />
            <div style={{ display: 'flex', gap: 'var(--space-3)', justifyContent: 'flex-end' }}>
              <button
                onClick={() => { setShowDialog(false); setConfirmText(''); }}
                style={{
                  padding: 'var(--space-2) var(--space-5)',
                  background: 'transparent',
                  color: 'var(--text-secondary)',
                  border: '1px solid var(--border-default)',
                  borderRadius: 'var(--radius-sm)',
                  fontSize: 'var(--text-small)',
                  cursor: 'pointer',
                }}
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  if (confirmText === 'DELETE') {
                    setShowDialog(false);
                    setDeleted(true);
                  }
                }}
                disabled={confirmText !== 'DELETE'}
                style={{
                  padding: 'var(--space-2) var(--space-5)',
                  background: confirmText === 'DELETE' ? 'var(--danger)' : '#333',
                  color: confirmText === 'DELETE' ? 'white' : 'var(--text-tertiary)',
                  border: 'none',
                  borderRadius: 'var(--radius-sm)',
                  fontSize: 'var(--text-small)',
                  fontWeight: 600,
                  cursor: confirmText === 'DELETE' ? 'pointer' : 'not-allowed',
                  transition: 'all var(--duration-fast) ease',
                }}
              >
                Delete Account
              </button>
            </div>
          </div>
        </>
      )}

      <p style={{ fontSize: 'var(--text-caption)', color: 'var(--text-tertiary)', marginTop: 'var(--space-4)', fontStyle: 'italic' }}>
        Friction is intentional. Safety matters.
      </p>
    </div>
  );
}
