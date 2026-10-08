'use client';

import { useEffect, useState } from 'react';

export function TimeGreeting() {
  const [greeting, setGreeting] = useState('');

  useEffect(() => {
    const hour = new Date().getHours();
    if (hour >= 0 && hour < 5) {
      setGreeting('Burning the midnight oil? 🌙');
    } else if (hour >= 5 && hour < 12) {
      setGreeting('Good morning, chai time ☕');
    } else if (hour >= 12 && hour < 17) {
      setGreeting('Good afternoon ☀️');
    } else if (hour >= 17 && hour < 22) {
      setGreeting('Good evening 🌆');
    } else {
      setGreeting('Night owl hours 🌙');
    }
  }, []);

  if (!greeting) return null; // Hydration-safe: prevents SSR/CSR markup mismatch

  return (
    <span
      className="inline-flex items-center gap-1.5 text-[11px] font-mono text-accent bg-accent-tint px-2.5 py-0.5 rounded-full border border-accent/20 cursor-default select-none animate-in fade-in duration-300"
      title="Personalized greeting based on your local time"
    >
      <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
      {greeting}
    </span>
  );
}
