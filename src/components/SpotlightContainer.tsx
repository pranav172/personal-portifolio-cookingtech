'use client';

import React from 'react';

interface SpotlightContainerProps {
  children: React.ReactNode;
  className?: string;
}

export function SpotlightContainer({ children, className = '' }: SpotlightContainerProps) {
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    e.currentTarget.style.setProperty('--x', `${x}px`);
    e.currentTarget.style.setProperty('--y', `${y}px`);
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      className={`spotlight-glow ${className}`}
    >
      {children}
    </div>
  );
}
