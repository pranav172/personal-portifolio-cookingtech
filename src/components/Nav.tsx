'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { ThemeToggle } from './ThemeToggle';
import { HeaderMusicToggle } from './HeaderMusicToggle';

export function Nav() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = [
    { href: '/work', label: 'Work' },
    { href: '/fun', label: 'Fun' },
    { href: '/writing', label: 'Writing' },
    { href: '/contact', label: 'Contact' },
  ];

  const isActive = (href: string) => {
    return pathname === href || pathname.startsWith(href + '/');
  };

  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (pathname === '/') {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <header className="hdr">
      <div className="hdr-inner">
        <Link
          href="/"
          onClick={handleLogoClick}
          className={`logo text-foreground hover:text-accent transition-all duration-250 cursor-pointer ${
            pathname === '/'
              ? scrolled
                ? 'opacity-100 translate-y-0 pointer-events-auto'
                : 'opacity-0 -translate-y-1.5 pointer-events-none'
              : 'opacity-100 translate-y-0'
          }`}
          title="Pranav Raj (Click to scroll to top)"
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
                    ? 'text-accent font-medium underline underline-offset-4 decoration-accent'
                    : 'text-secondary hover:text-accent'
                }`}
              >
                {link.label}
              </Link>
            );
          })}

          <Link
            href="/resume"
            className="py-1 text-secondary hover:text-accent focus-visible:outline-2 focus-visible:outline-accent rounded-xs transition-colors duration-180"
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
