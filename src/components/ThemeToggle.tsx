'use client';

import { useCallback, useSyncExternalStore } from 'react';

const emptySubscribe = () => () => {};

export function ThemeToggle() {
  const isMounted = useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false
  );

  const isDark = useSyncExternalStore(
    (callback) => {
      const observer = new MutationObserver(callback);
      observer.observe(document.documentElement, {
        attributes: true,
        attributeFilter: ['class', 'data-theme'],
      });
      return () => observer.disconnect();
    },
    () =>
      document.documentElement.classList.contains('dark') ||
      document.documentElement.dataset.theme === 'dark',
    () => false
  );

  const onClick = useCallback(async (e: React.MouseEvent<HTMLButtonElement>) => {
    const root = document.documentElement;
    const isCurrentlyDark =
      root.classList.contains('dark') || root.dataset.theme === 'dark';
    const next = isCurrentlyDark ? 'light' : 'dark';

    const apply = () => {
      if (next === 'dark') {
        root.classList.add('dark');
        root.dataset.theme = 'dark';
      } else {
        root.classList.remove('dark');
        root.dataset.theme = 'light';
      }
      localStorage.setItem('theme', next);
    };

    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const vt = (document as any).startViewTransition?.bind(document);
    if (!vt || reduce) {
      apply();
      return;
    }

    const r = e.currentTarget.getBoundingClientRect();
    const x = r.left + r.width / 2;
    const y = r.top + r.height / 2;
    const radius = Math.hypot(
      Math.max(x, window.innerWidth - x),
      Math.max(y, window.innerHeight - y)
    );

    const t = vt(apply);
    await t.ready;
    root.animate(
      {
        clipPath: [
          `circle(0px at ${x}px ${y}px)`,
          `circle(${radius}px at ${x}px ${y}px)`,
        ],
      },
      {
        duration: 600,
        easing: 'cubic-bezier(.4,0,.2,1)',
        pseudoElement: '::view-transition-new(root)',
      }
    );
  }, []);

  if (!isMounted) {
    return <span className="w-6 h-6 inline-block" aria-hidden="true" />;
  }

  return (
    <button
      className="toggle text-muted hover:text-foreground transition-colors min-w-[36px] min-h-[36px] sm:min-w-[28px] sm:min-h-[28px] flex items-center justify-center p-1 rounded-md focus-visible:outline-2 focus-visible:outline-accent"
      onClick={onClick}
      type="button"
      aria-label={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
      title={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
    >
      <span className="icon">
        {isDark ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="4" />
            <path d="M12 2v2" />
            <path d="M12 20v2" />
            <path d="m4.93 4.93 1.41 1.41" />
            <path d="m17.66 17.66 1.41 1.41" />
            <path d="M2 12h2" />
            <path d="M20 12h2" />
            <path d="m6.34 17.66-1.41 1.41" />
            <path d="m19.07 4.93-1.41 1.41" />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
          </svg>
        )}
      </span>
    </button>
  );
}
