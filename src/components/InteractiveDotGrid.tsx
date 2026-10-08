'use client';

import { useEffect, useRef } from 'react';

export function InteractiveDotGrid() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Keep off on touch devices and if user prefers reduced motion
    if (window.matchMedia('(pointer: coarse)').matches) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const el = containerRef.current;
    if (!el) return;

    let rafId: number | null = null;
    let targetX = -999;
    let targetY = -999;

    const updatePosition = () => {
      if (el) {
        el.style.setProperty('--mouse-x', `${targetX}px`);
        el.style.setProperty('--mouse-y', `${targetY}px`);
      }
      rafId = null;
    };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      targetX = e.clientX - rect.left;
      targetY = e.clientY - rect.top;

      if (!rafId) {
        rafId = requestAnimationFrame(updatePosition);
      }
    };

    const handleMouseLeave = () => {
      targetX = -999;
      targetY = -999;
      if (!rafId) {
        rafId = requestAnimationFrame(updatePosition);
      }
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="pointer-events-none absolute inset-0 overflow-hidden"
      aria-hidden="true"
    >
      {/* Base static dot grid */}
      <div className="absolute inset-0 bg-dot-grid opacity-60" />
      {/* Interactive mouse-reactive dot layer: brightens & grows dots near cursor */}
      <div className="absolute inset-0 dot-grid-spotlight hidden sm:block" />
    </div>
  );
}
