'use client';

import { useEffect, useState, useCallback } from 'react';

const KONAMI_CODE = [
  'ArrowUp',
  'ArrowUp',
  'ArrowDown',
  'ArrowDown',
  'ArrowLeft',
  'ArrowRight',
  'ArrowLeft',
  'ArrowRight',
  'b',
  'a',
];

export function EasterEgg() {
  const [isActive, setIsActive] = useState(false);
  const [showToast, setShowToast] = useState(false);

  const togglePhosphor = useCallback(() => {
    setIsActive((prev) => {
      const next = !prev;
      if (next) {
        document.documentElement.classList.add('theme-phosphor');
        setShowToast(true);
      } else {
        document.documentElement.classList.remove('theme-phosphor');
        setShowToast(false);
      }
      return next;
    });
  }, []);

  const closeToast = useCallback(() => {
    document.documentElement.classList.remove('theme-phosphor');
    setIsActive(false);
    setShowToast(false);
  }, []);

  useEffect(() => {
    let index = 0;

    const handleKeyDown = (e: KeyboardEvent) => {
      // Don't intercept if user is typing in an input/textarea
      if (
        e.target instanceof HTMLInputElement ||
        e.target instanceof HTMLTextAreaElement
      ) {
        return;
      }

      if (e.key === 'Escape' && isActive) {
        closeToast();
        return;
      }

      const expectedKey = KONAMI_CODE[index];
      if (e.key.toLowerCase() === expectedKey.toLowerCase()) {
        index++;
        if (index === KONAMI_CODE.length) {
          togglePhosphor();
          index = 0;
        }
      } else {
        index = 0;
      }
    };

    const handleCustomTrigger = () => {
      togglePhosphor();
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('trigger-easter-egg', handleCustomTrigger);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('trigger-easter-egg', handleCustomTrigger);
      document.documentElement.classList.remove('theme-phosphor');
    };
  }, [isActive, togglePhosphor, closeToast]);

  if (!showToast) return null;

  return (
    <aside
      aria-live="polite"
      role="status"
      className="fixed bottom-6 right-6 z-50 max-w-sm p-3.5 rounded-lg border border-[var(--accent)] bg-[var(--surface)] text-[var(--foreground)] font-mono text-xs shadow-2xl backdrop-blur-md animate-in slide-in-from-bottom-2 duration-200"
    >
      <div className="flex items-start justify-between gap-3">
        <div className="space-y-1">
          <div className="flex items-center gap-1.5 font-semibold text-[var(--accent)]">
            <span>👾</span>
            <span>Phosphor Terminal Unlocked!</span>
          </div>
          <p className="text-[11px] text-[var(--muted)] leading-relaxed">
            You found the secret easter egg. Welcome to retro matrix mode.
          </p>
        </div>
        <button
          onClick={closeToast}
          type="button"
          aria-label="Exit secret mode"
          className="px-2 py-0.5 rounded text-[10px] font-bold border border-[var(--border)] hover:border-[var(--accent)] transition-colors cursor-pointer"
        >
          ESC
        </button>
      </div>
    </aside>
  );
}
