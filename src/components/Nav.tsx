'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ThemeToggle } from './ThemeToggle';

export function Nav() {
  const pathname = usePathname();

  const links = [
    { href: '/work', label: 'Work' },
    { href: '/fun', label: 'Fun' },
    { href: '/writing', label: 'Writing' },
    { href: '/contact', label: 'Contact' },
  ];

  const isActive = (href: string) => {
    return pathname === href || pathname.startsWith(href + '/');
  };

  return (
    <header className="w-full border-b border-border bg-background/95 sticky top-0 z-40 backdrop-blur-xs">
      <div className="max-w-xl mx-auto px-4 sm:px-6 h-12 flex items-center justify-between">
        <Link
          href="/"
          className="text-sm font-medium tracking-tight text-foreground hover:text-muted transition-colors duration-200"
        >
          Pranav Raj
        </Link>

        <nav className="flex items-center gap-4 text-[13px] font-mono" aria-label="Main Navigation">
          {links.map((link) => {
            const active = isActive(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`transition-colors duration-180 ${
                  active
                    ? 'text-foreground font-medium underline underline-offset-4 decoration-accent'
                    : 'text-secondary hover:text-foreground'
                }`}
              >
                {link.label}
              </Link>
            );
          })}

          <Link
            href="/resume"
            className="text-secondary hover:text-foreground transition-colors duration-200"
          >
            Resume ↗
          </Link>

          <div className="h-3 w-px bg-border ml-1 hidden sm:block" />

          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}
