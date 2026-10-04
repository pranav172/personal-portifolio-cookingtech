'use client';

import { useState, useEffect, useRef } from 'react';

interface HistoryEntry {
  command: string;
  output: string | React.ReactNode;
}

export function TerminalModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<HistoryEntry[]>([
    {
      command: '',
      output: (
        <div className="space-y-1 text-muted text-xs font-mono">
          <div>Pranav Raj — Interactive Portfolio Shell v1.0.0</div>
          <div>Type <span className="text-accent font-semibold">help</span> to view available commands, or <span className="text-accent font-semibold">exit</span> to close.</div>
        </div>
      ),
    },
  ]);
  const inputRef = useRef<HTMLInputElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);

  // Listen for open events
  useEffect(() => {
    const handleOpen = () => setIsOpen(true);
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === '`' && (e.ctrlKey || e.metaKey)) {
        e.preventDefault();
        setIsOpen((prev) => !prev);
      } else if (e.key === 'Escape' && isOpen) {
        e.preventDefault();
        setIsOpen(false);
      }
    };

    window.addEventListener('open-terminal', handleOpen);
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('open-terminal', handleOpen);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen]);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
      bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [isOpen, history]);

  const executeCommand = (cmd: string) => {
    const trimmed = cmd.trim().toLowerCase();
    let output: string | React.ReactNode = '';

    switch (trimmed) {
      case 'help':
        output = (
          <div className="space-y-1 text-xs font-mono">
            <div><span className="text-accent font-medium">about</span>    - Brief intro and engineering focus</div>
            <div><span className="text-accent font-medium">projects</span> - Top backend &amp; AI architectures</div>
            <div><span className="text-accent font-medium">stats</span>    - LeetCode &amp; algorithmic momentum</div>
            <div><span className="text-accent font-medium">contact</span>  - Email &amp; active channels</div>
            <div><span className="text-accent font-medium">theme</span>    - Toggle dark/light appearance</div>
            <div><span className="text-accent font-medium">clear</span>    - Clear terminal history</div>
            <div><span className="text-accent font-medium">exit</span>     - Close shell session</div>
          </div>
        );
        break;

      case 'about':
        output =
          'Pranav Raj — Software Engineer focused on high-throughput backend services, distributed systems, and machine learning pipelines. Accepted researcher at Springer LNNS 2026.';
        break;

      case 'projects':
        output = (
          <div className="space-y-1 text-xs font-mono">
            <div>• <span className="text-foreground font-medium">NIYAM</span>: Sub-millisecond policy gateway for Razorpay rails</div>
            <div>• <span className="text-foreground font-medium">Violence Detection</span>: MobileNetV2 + Bi-LSTM surveillance (Springer 2026)</div>
            <div>• <span className="text-foreground font-medium">Invoice Fraud</span>: ELA computer vision detector (Deloitte Top 8)</div>
            <div>• <span className="text-foreground font-medium">MUJ-GPT</span>: Grounded campus RAG with FAISS and Groq</div>
          </div>
        );
        break;

      case 'stats':
        output =
          'LeetCode: 386+ solved (113 Easy, 214 Medium, 59 Hard) · Handle: @cookingDSA · Focus: Graphs, DP, Trees';
        break;

      case 'contact':
        output =
          'Email: rpranav1820@gmail.com · GitHub: github.com/pranav172 · LinkedIn: pranav-raj-163230256 · X: @Pranav_raj_18';
        break;

      case 'theme': {
        const root = document.documentElement;
        const isDark = root.classList.contains('dark') || root.dataset.theme === 'dark';
        if (isDark) {
          root.classList.remove('dark');
          root.dataset.theme = 'light';
          localStorage.setItem('theme', 'light');
          output = 'Switched to light theme.';
        } else {
          root.classList.add('dark');
          root.dataset.theme = 'dark';
          localStorage.setItem('theme', 'dark');
          output = 'Switched to dark theme.';
        }
        break;
      }

      case 'clear':
        setHistory([]);
        return;

      case 'exit':
        setIsOpen(false);
        return;

      case '':
        output = '';
        break;

      default:
        output = `command not found: "${trimmed}". Type "help" for a list of commands.`;
        break;
    }

    setHistory((prev) => [...prev, { command: cmd, output }]);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;
    executeCommand(input);
    setInput('');
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-150"
      onClick={() => setIsOpen(false)}
      role="dialog"
      aria-modal="true"
      aria-label="Terminal Session"
    >
      <div
        className="w-full max-w-xl bg-surface border border-border rounded-xl shadow-2xl overflow-hidden flex flex-col h-[460px] max-h-[85vh] overscroll-contain"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Terminal Title Bar */}
        <div className="flex items-center justify-between px-4 py-2.5 bg-background border-b border-border select-none">
          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsOpen(false)}
              className="w-3 h-3 rounded-full bg-rose-500/80 hover:bg-rose-500 transition-colors"
              aria-label="Close terminal"
              type="button"
            />
            <span className="w-3 h-3 rounded-full bg-amber-500/80" aria-hidden="true" />
            <span className="w-3 h-3 rounded-full bg-emerald-500/80" aria-hidden="true" />
          </div>
          <span className="text-xs font-mono text-muted" translate="no">pranav@portfolio:~</span>
          <button
            onClick={() => setIsOpen(false)}
            className="text-xs font-mono text-muted hover:text-foreground"
            type="button"
            aria-label="Close terminal (Esc)"
          >
            esc
          </button>
        </div>

        {/* Terminal Screen Body */}
        <div className="flex-1 overflow-y-auto p-4 space-y-3 font-mono text-xs text-foreground bg-[#0B0D0E]/95 overscroll-contain">
          {history.map((entry, idx) => (
            <div key={idx} className="space-y-1">
              {entry.command && (
                <div className="flex items-center gap-2 text-muted" translate="no">
                  <span className="text-accent font-semibold">pranav@portfolio:~$</span>
                  <span className="text-foreground">{entry.command}</span>
                </div>
              )}
              {entry.output && <div className="text-secondary pl-2">{entry.output}</div>}
            </div>
          ))}

          {/* Prompt line */}
          <form onSubmit={handleSubmit} className="flex items-center gap-2 pt-1" translate="no">
            <span className="text-accent font-semibold flex-shrink-0">pranav@portfolio:~$</span>
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="flex-1 bg-transparent text-base sm:text-xs text-foreground focus:outline-hidden font-mono"
              autoFocus
              spellCheck={false}
              autoCorrect="off"
              autoComplete="off"
              autoCapitalize="none"
              aria-label="Terminal command input"
            />
          </form>
          <div ref={bottomRef} />
        </div>
      </div>
    </div>
  );
}
