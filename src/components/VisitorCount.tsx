'use client';

import { useEffect, useState } from 'react';

export function VisitorCount() {
  const [count, setCount] = useState<number | null>(null);

  useEffect(() => {
    let counted = false;
    try {
      counted = !!localStorage.getItem('visited');
    } catch {}

    fetch('/api/visit', { method: counted ? 'GET' : 'POST' })
      .then((res) => res.json())
      .then((data) => {
        if (typeof data.count === 'number' && data.count > 0) {
          setCount(data.count);
          try {
            localStorage.setItem('visited', '1');
          } catch {}
        }
      })
      .catch(() => {
        setCount(null);
      });
  }, []);

  if (count === null || count === 0) return null;

  return (
    <div className="flex items-center gap-2 text-xs font-mono text-muted select-none">
      <span className="relative flex h-1.5 w-1.5 items-center justify-center flex-shrink-0">
        <span className="absolute inline-flex h-full w-full rounded-full bg-accent opacity-75 animate-ping" />
        <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-accent" />
      </span>
      <span>
        visitor no.{' '}
        <span className="font-semibold text-foreground tabular-nums">
          {String(count).padStart(4, '0')}
        </span>
      </span>
    </div>
  );
}
