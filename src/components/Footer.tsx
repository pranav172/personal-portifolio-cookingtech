'use client';

import { AmbientToggle } from './AmbientToggle';
import { VisitorCount } from './VisitorCount';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const openCommandPalette = () => {
    window.dispatchEvent(new CustomEvent('open-command-palette'));
  };

  const openTerminal = () => {
    window.dispatchEvent(new CustomEvent('open-terminal'));
  };

  return (
    <footer className="mt-24 border-t border-border py-12">
      <div className="max-w-xl mx-auto px-4 sm:px-6 space-y-4 text-xs font-mono text-muted">
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-4">
          <div>
            <span className="text-foreground">Pranav Raj</span>
            <span className="mx-2">·</span>
            <span>Software Engineer</span>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <a
              href="https://github.com/pranav172"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground transition-colors"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/pranav-raj-163230256/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="https://x.com/Pranav_raj_18"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground transition-colors"
            >
              X
            </a>
            <a
              href="mailto:rpranav1820@gmail.com"
              className="hover:text-foreground transition-colors"
            >
              Email
            </a>
            <span>© {currentYear}</span>
          </div>
        </div>

        {/* Interactive utilities: Command Palette & Terminal trigger */}
        <div className="flex items-center justify-between pt-2 border-t border-border/40 text-[11px] text-muted">
          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={openCommandPalette}
              type="button"
              className="hover:text-accent transition-colors flex items-center gap-1 cursor-pointer focus-visible:outline-2 focus-visible:outline-accent rounded-xs"
            >
              <span>⌘K</span>
              <span>commands</span>
            </button>
            <span>·</span>
            <button
              onClick={openTerminal}
              type="button"
              className="hover:text-accent transition-colors flex items-center gap-1 cursor-pointer focus-visible:outline-2 focus-visible:outline-accent rounded-xs"
            >
              <span>&gt;_</span>
              <span>terminal</span>
            </button>
            <span>·</span>
            <AmbientToggle />
          </div>

          <div className="flex items-center gap-3">
            <VisitorCount />
            <span className="hidden sm:inline text-border">·</span>
            <span className="hidden sm:inline text-muted/80">Graphite &amp; Mint</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
