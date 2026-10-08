'use client';

import Image from 'next/image';
import { useState, useRef } from 'react';

export function HeroAvatar() {
  const [clickCount, setClickCount] = useState(0);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const handleClick = () => {
    const nextCount = clickCount + 1;
    setClickCount(nextCount);

    if (timerRef.current) clearTimeout(timerRef.current);

    if (nextCount >= 5) {
      window.dispatchEvent(new CustomEvent('trigger-easter-egg'));
      setClickCount(0);
    } else {
      timerRef.current = setTimeout(() => {
        setClickCount(0);
      }, 2500);
    }
  };

  return (
    <button
      onClick={handleClick}
      type="button"
      title="Pranav Raj (Psst... clicking 5 times unlocks something secret)"
      aria-label="Profile picture - tap 5 times for a secret easter egg"
      className="relative flex-shrink-0 group cursor-pointer focus-visible:outline-2 focus-visible:outline-accent rounded-full text-left"
    >
      {/* Subtle ambient radial glow behind avatar */}
      <div
        className="absolute -inset-2 rounded-full bg-[radial-gradient(circle,rgba(110,231,183,0.22)_0%,transparent_70%)] blur-md pointer-events-none group-hover:scale-110 transition-transform duration-300"
        aria-hidden="true"
      />
      <div className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-full overflow-hidden border border-border avatar-tilt bg-surface group-active:scale-95 transition-transform duration-150">
        <Image
          src="/pranav.webp"
          alt="Pranav Raj"
          fill
          priority
          sizes="(max-width: 640px) 56px, 64px"
          className="object-cover"
        />
      </div>
    </button>
  );
}
