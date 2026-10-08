'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { ThemeToggle } from './ThemeToggle';
import { HeaderMusicToggle } from './HeaderMusicToggle';

export function Nav() {
  const pathname = usePathname();
  const [hide, setHide] = useState(false);

  useEffect(() => {
    let last = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      if (Math.abs(y - last) > 8) {
        setHide(y > last && y > 100);
        last = y;
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
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
    <>
      <header className={`hdr ${hide ? 'hide' : ''}`}>
        <div className="hdr-inner">
          <Link
            href="/"
            onClick={handleLogoClick}
            className="logo text-foreground hover:text-accent transition-all duration-200 cursor-pointer"
            title="Pranav Raj (Scroll to top)"
          >
            Pranav Raj
          </Link>

          {/* Desktop inline nav */}
          <nav className="nav nav-inline font-mono" aria-label="Main Navigation">
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
          </nav>

          {/* Header actions: Music, Theme, and Resume */}
          <div className="hdr-actions">
            <HeaderMusicToggle />
            <ThemeToggle />
            <Link
              href="/resume"
              className="hdr-resume text-secondary hover:text-accent focus-visible:outline-2 focus-visible:outline-accent rounded-xs transition-colors duration-180 font-mono text-[13px] py-1 px-1.5"
            >
              Resume ↗
            </Link>
          </div>
        </div>
      </header>

      {/* Floating bottom pill navigation for mobile */}
      <nav className="nav-pill" aria-label="Mobile Navigation">
        {links.map((link) => {
          const active = isActive(link.href);
          return (
            <Link
              key={link.href}
              href={link.href}
              aria-current={active ? 'page' : undefined}
              className={`transition-colors duration-150 ${active ? 'active' : ''}`}
            >
              {link.label}
            </Link>
          );
        })}
      </nav>
    </>
  );
}
