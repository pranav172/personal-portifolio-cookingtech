'use client';

/**
 * ScrollProgress
 * A fluid 2px line at the top of the viewport that tracks scroll depth.
 * - Sets --scroll-progress CSS var on <html> for smooth CSS-driven animation.
 * - Uses requestAnimationFrame for compositor-thread efficiency.
 * - Zero layout reflow — only writes a CSS custom property.
 * - Respects prefers-reduced-motion via CSS.
 */

import { useEffect } from 'react';

export function PageProgress() {
  useEffect(() => {
    let rafId: number;

    const update = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? scrollTop / docHeight : 0;
      document.documentElement.style.setProperty('--scroll-progress', String(progress));
    };

    const onScroll = () => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(update);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    update(); // set initial value

    return () => {
      window.removeEventListener('scroll', onScroll);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return <div aria-hidden="true" className="scroll-line" />;
}
