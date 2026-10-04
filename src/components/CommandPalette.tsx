'use client';

import { useState, useEffect, useCallback, useMemo } from 'react';
import { useRouter } from 'next/navigation';

interface CommandItem {
  id: string;
  title: string;
  category: 'Navigation' | 'Actions' | 'Socials';
  shortcut?: string;
  action: () => void;
}

export function CommandPalette() {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [copied, setCopied] = useState(false);
  const router = useRouter();

  const toggleTheme = useCallback(() => {
    const root = document.documentElement;
    const isDark = root.classList.contains('dark') || root.dataset.theme === 'dark';
    const next = isDark ? 'light' : 'dark';
    if (next === 'dark') {
      root.classList.add('dark');
      root.dataset.theme = 'dark';
    } else {
      root.classList.remove('dark');
      root.dataset.theme = 'light';
    }
    localStorage.setItem('theme', next);
  }, []);

  const copyEmail = useCallback(() => {
    navigator.clipboard.writeText('rpranav1820@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }, []);

  const openTerminal = useCallback(() => {
    window.dispatchEvent(new CustomEvent('open-terminal'));
  }, []);

  const items: CommandItem[] = useMemo(
    () => [
      // Navigation
      {
        id: 'nav-home',
        title: 'Go to Home',
        category: 'Navigation',
        shortcut: 'H',
        action: () => router.push('/'),
      },
      {
        id: 'nav-work',
        title: 'Go to Work & Projects',
        category: 'Navigation',
        shortcut: 'W',
        action: () => router.push('/work'),
      },
      {
        id: 'nav-fun',
        title: 'Go to Fun & Experiments',
        category: 'Navigation',
        shortcut: 'F',
        action: () => router.push('/fun'),
      },
      {
        id: 'nav-writing',
        title: 'Go to Writing & Notes',
        category: 'Navigation',
        shortcut: 'B',
        action: () => router.push('/writing'),
      },
      {
        id: 'nav-contact',
        title: 'Go to Contact',
        category: 'Navigation',
        shortcut: 'C',
        action: () => router.push('/contact'),
      },
      {
        id: 'nav-resume',
        title: 'View Resume (PDF)',
        category: 'Navigation',
        shortcut: 'R',
        action: () => router.push('/resume'),
      },

      // Actions
      {
        id: 'action-copy-email',
        title: copied ? 'Email Copied!' : 'Copy Email Address',
        category: 'Actions',
        action: copyEmail,
      },
      {
        id: 'action-toggle-theme',
        title: 'Toggle Theme (Dark / Light)',
        category: 'Actions',
        shortcut: 'T',
        action: toggleTheme,
      },
      {
        id: 'action-terminal',
        title: 'Open Interactive Terminal (>_)',
        category: 'Actions',
        shortcut: '~',
        action: openTerminal,
      },

      // Socials
      {
        id: 'social-github',
        title: 'Open GitHub Profile',
        category: 'Socials',
        action: () => window.open('https://github.com/pranav172', '_blank'),
      },
      {
        id: 'social-linkedin',
        title: 'Open LinkedIn Profile',
        category: 'Socials',
        action: () =>
          window.open(
            'https://www.linkedin.com/in/pranav-raj-163230256/',
            '_blank'
          ),
      },
      {
        id: 'social-x',
        title: 'Open X (Twitter) Profile',
        category: 'Socials',
        action: () => window.open('https://x.com/Pranav_raj_18', '_blank'),
      },
      {
        id: 'social-leetcode',
        title: 'Open LeetCode Profile (@cookingDSA)',
        category: 'Socials',
        action: () => window.open('https://leetcode.com/u/cookingDSA/', '_blank'),
      },
    ],
    [router, copyEmail, toggleTheme, openTerminal, copied]
  );

  const filteredItems = useMemo(() => {
    if (!query.trim()) return items;
    const q = query.toLowerCase();
    return items.filter(
      (item) =>
        item.title.toLowerCase().includes(q) ||
        item.category.toLowerCase().includes(q)
    );
  }, [items, query]);

  // Keyboard shortcut listener (Cmd+K / Ctrl+K)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setIsOpen((prev) => !prev);
      } else if (e.key === 'Escape' && isOpen) {
        e.preventDefault();
        setIsOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  // Listen for custom open event
  useEffect(() => {
    const handleCustomOpen = () => setIsOpen(true);
    window.addEventListener('open-command-palette', handleCustomOpen);
    return () => window.removeEventListener('open-command-palette', handleCustomOpen);
  }, []);

  // Keyboard navigation within list
  useEffect(() => {
    setSelectedIndex(0);
  }, [query]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIndex((prev) =>
        prev < filteredItems.length - 1 ? prev + 1 : 0
      );
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIndex((prev) =>
        prev > 0 ? prev - 1 : filteredItems.length - 1
      );
    } else if (e.key === 'Enter') {
      e.preventDefault();
      if (filteredItems[selectedIndex]) {
        filteredItems[selectedIndex].action();
        setIsOpen(false);
      }
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-start justify-center pt-20 sm:pt-28 px-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-150"
      onClick={() => setIsOpen(false)}
      role="dialog"
      aria-modal="true"
      aria-label="Command Palette"
    >
      <div
        className="w-full max-w-lg bg-surface border border-border rounded-xl shadow-2xl overflow-hidden flex flex-col max-h-[75vh] overscroll-contain"
        onClick={(e) => e.stopPropagation()}
        onKeyDown={handleKeyDown}
      >
        {/* Search Input Bar */}
        <div className="flex items-center px-4 py-3 border-b border-border gap-3">
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-muted flex-shrink-0"
            aria-hidden="true"
          >
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.3-4.3" />
          </svg>
          <input
            type="text"
            role="combobox"
            aria-autocomplete="list"
            aria-expanded="true"
            aria-controls="command-palette-results"
            placeholder="Type a command or search…"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            autoFocus
            className="w-full bg-transparent text-base sm:text-sm text-foreground placeholder:text-muted focus:outline-hidden font-sans"
          />
          <kbd className="hidden sm:inline-block px-1.5 py-0.5 text-[10px] font-mono text-muted bg-background border border-border rounded">
            ESC
          </kbd>
        </div>

        {/* Results List */}
        <div
          id="command-palette-results"
          role="listbox"
          aria-label="Commands"
          className="overflow-y-auto p-2 divide-y divide-border/30 overscroll-contain"
        >
          {filteredItems.length === 0 ? (
            <div className="py-8 text-center text-xs font-mono text-muted">
              No matching commands found.
            </div>
          ) : (
            <div className="space-y-0.5">
              {filteredItems.map((item, idx) => {
                const isSelected = idx === selectedIndex;
                return (
                  <button
                    key={item.id}
                    role="option"
                    aria-selected={isSelected}
                    onClick={() => {
                      item.action();
                      setIsOpen(false);
                    }}
                    onMouseEnter={() => setSelectedIndex(idx)}
                    type="button"
                    className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-left text-xs transition-colors duration-150 ${
                      isSelected
                        ? 'bg-accent/10 text-accent font-medium'
                        : 'text-foreground hover:bg-surface-hover'
                    }`}
                  >
                    <div className="flex items-center gap-2.5">
                      <span className="text-[11px] font-mono text-muted uppercase tracking-wider w-16 flex-shrink-0">
                        {item.category}
                      </span>
                      <span className="truncate">{item.title}</span>
                    </div>

                    {item.shortcut && (
                      <kbd className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-background border border-border text-muted flex-shrink-0">
                        {item.shortcut}
                      </kbd>
                    )}
                  </button>
                );
              })}
            </div>
          )}
        </div>

        {/* Footer Helper */}
        <div className="px-4 py-2 bg-background/50 border-t border-border flex items-center justify-between text-[11px] font-mono text-muted">
          <span>Navigate with ↑ ↓ · Select with ↵</span>
          <span>Pranav Raj</span>
        </div>
      </div>
    </div>
  );
}
