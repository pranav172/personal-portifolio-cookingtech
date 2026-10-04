'use client';

import { useEffect, useState } from 'react';

export function LiveClock() {
  const [time, setTime] = useState<string>('');

  useEffect(() => {
    const formatTime = () => {
      const now = new Date();
      // Format as HH:MM:SS in Asia/Kolkata (IST)
      const istString = now.toLocaleTimeString('en-GB', {
        timeZone: 'Asia/Kolkata',
        hour12: false,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
      });
      return `${istString} IST`;
    };

    setTime(formatTime());
    const interval = setInterval(() => {
      setTime(formatTime());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  if (!time) {
    return <span className="font-mono text-muted text-xs">--:--:-- IST</span>;
  }

  return (
    <span className="font-mono text-xs text-muted tabular-nums" title="Local Time (IST)">
      {time}
    </span>
  );
}
