'use client';

import { useState } from 'react';

interface ArchitectureViewerProps {
  architecture: string;
}

export function ArchitectureViewer({ architecture }: ArchitectureViewerProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(architecture);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative group py-2">
      <div className="flex items-center justify-between pb-1.5 text-xs font-mono text-muted">
        <span className="uppercase tracking-wider">Architecture Flow</span>
        <button
          onClick={handleCopy}
          type="button"
          aria-label="Copy architecture ASCII diagram"
          className="text-muted hover:text-accent transition-colors flex items-center gap-1 cursor-pointer focus-visible:outline-2 focus-visible:outline-accent"
        >
          <span aria-live="polite">
            {copied ? (
              <span className="text-emerald-500 font-medium">Copied! ✓</span>
            ) : (
              <span>Copy ASCII ↗</span>
            )}
          </span>
        </button>
      </div>

      <div className="py-3 px-1 border-t border-b border-border overflow-x-auto scrollbar-thin">
        <pre className="font-mono text-[12px] sm:text-[13px] leading-relaxed text-foreground select-all whitespace-pre" translate="no">
          {architecture}
        </pre>
      </div>
    </div>
  );
}
