'use client';

/**
 * PageProgress
 * A lightweight top-of-page progress bar that fires on every pathname change.
 * - Uses only CSS transform + opacity (compositor thread, zero layout reflow).
 * - No external dependencies.
 * - Respects prefers-reduced-motion via the CSS animation itself.
 */

import { usePathname } from 'next/navigation';
import { useEffect, useRef } from 'react';

export function PageProgress() {
  const pathname = usePathname();
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const bar = barRef.current;
    if (!bar) return;

    // Reset and replay the animation by toggling the class
    bar.classList.remove('progress-run');
    // Trigger reflow so the browser sees the removed class before re-adding
    void bar.offsetWidth;
    bar.classList.add('progress-run');
  }, [pathname]);

  return (
    <div
      aria-hidden="true"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        height: '2px',
        zIndex: 9999,
        pointerEvents: 'none',
      }}
    >
      <div
        ref={barRef}
        className="progress-bar"
      />
    </div>
  );
}
