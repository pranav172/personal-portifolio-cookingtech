'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ThemeToggle } from './ThemeToggle';

export function Nav() {
  const pathname = usePathname();

  const links = [
    { href: '/', label: 'Home' },
    { href: '/work', label: 'Projects' },
    { href: '/resume', label: 'Resume' },
    { href: '/fun', label: 'Fun' },
    { href: '/writing', label: 'Writing' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur-md bg-background/80 border-b border-border/40 transition-colors">
      <nav className="flex items-center justify-between py-3.5 px-4 sm:px-6 max-w-3xl mx-auto">
        {/* Brand / Name with subtle status */}
        <Link 
          href="/" 
          className="group flex items-center gap-2 text-sm font-semibold tracking-tight text-foreground"
        >
          <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
          <span className="group-hover:text-accent transition-colors">Pranav Raj</span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden sm:flex items-center gap-5">
          {links.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-xs font-medium transition-colors ${
                  isActive 
                    ? 'text-accent font-semibold' 
                    : 'text-muted hover:text-foreground'
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        {/* Mobile Links */}
        <div className="flex sm:hidden items-center gap-3">
          {links.slice(0, 4).map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-xs transition-colors ${
                  isActive 
                    ? 'text-accent font-semibold' 
                    : 'text-muted hover:text-foreground'
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        {/* Theme Toggle */}
        <div className="flex items-center gap-2">
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}
