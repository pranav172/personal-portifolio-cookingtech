'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ThemeToggle } from './ThemeToggle';
import { HeaderMusicToggle } from './HeaderMusicToggle';

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
    <header className="hdr">
      <div className="hdr-inner">
        <Link
          href="/"
          className={`logo ${pathname === '/' ? 'hero-scroll-logo' : ''} text-foreground hover:text-muted transition-colors`}
        >
          Pranav Raj
        </Link>

        <nav className="nav font-mono" aria-label="Main Navigation">
          {links.map((link) => {
            const active = isActive(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={active ? 'page' : undefined}
                className={`py-1 focus-visible:outline-2 focus-visible:outline-accent rounded-xs transition-colors duration-180 ${
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
            className="py-1 text-secondary hover:text-foreground focus-visible:outline-2 focus-visible:outline-accent rounded-xs transition-colors duration-180"
          >
            Resume ↗
          </Link>
        </nav>

        <div className="hdr-actions flex items-center gap-1 sm:gap-2">
          <HeaderMusicToggle />
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
