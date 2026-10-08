'use client';

import { useEffect, useRef } from 'react';

export function HeroSentinel() {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const root = document.documentElement;
    const io = new IntersectionObserver(
      ([e]) => {
        root.dataset.hero = e.isIntersecting ? 'in' : 'out';
      },
      { rootMargin: '-56px 0px 0px 0px' } // Height of sticky header
    );

    if (ref.current) io.observe(ref.current);

    return () => {
      io.disconnect();
      delete root.dataset.hero;
    };
  }, []);

  return (
    <span
      ref={ref}
      aria-hidden="true"
      className="absolute -top-12 left-0 w-1 h-1 pointer-events-none opacity-0"
    />
  );
}
