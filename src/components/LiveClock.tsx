'use client';

import { useEffect, useState } from 'react';

export function LiveClock() {
  const [dateTime, setDateTime] = useState<string>('');

  useEffect(() => {
    const tick = () => {
      const now = new Date();
      const date = new Intl.DateTimeFormat('en-IN', {
        timeZone: 'Asia/Kolkata',
        weekday: 'short',
        day: 'numeric',
        month: 'short',
      }).format(now);
      const time = new Intl.DateTimeFormat('en-IN', {
        timeZone: 'Asia/Kolkata',
        hour: '2-digit',
        minute: '2-digit',
        hour12: false,
      }).format(now);
      setDateTime(`${date} · ${time} IST`);
    };

    tick();
    const interval = setInterval(tick, 30000);
    return () => clearInterval(interval);
  }, []);

  if (!dateTime) {
    return <span className="font-mono text-muted text-xs">IST</span>;
  }

  return (
    <span className="font-mono text-xs text-muted tabular-nums">
      {dateTime}
    </span>
  );
}
