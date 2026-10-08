'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { ThemeToggle } from './ThemeToggle';
import { MusicToggle } from './MusicToggle';

const links = [
  { href: '/work', label: 'Work' },
  { href: '/fun', label: 'Fun' },
  { href: '/writing', label: 'Writing' },
  { href: '/contact', label: 'Contact' },
];

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Close sheet after navigating
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Prevent background scrolling when sheet is open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  // Hide on scroll down, show on scroll up
  useEffect(() => {
    let last = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 8);
      if (!open && Math.abs(y - last) > 8) {
        setHidden(y > last && y > 120);
        last = y;
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [open]);

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
    <header className={`hdr ${hidden ? 'hide' : ''} ${scrolled ? 'scrolled' : ''} ${open ? 'open' : ''}`}>
      <div className="hdr-in">
        <Link href="/" onClick={handleLogoClick} className="mark" aria-label="Home">
          pr<span>.</span>
        </Link>

        <nav className="nav" aria-label="Main">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              aria-current={isActive(l.href) ? 'page' : undefined}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="hdr-end">
          <ThemeToggle />
          <button
            className="burger"
            type="button"
            aria-label={open ? 'Close menu' : 'Menu'}
            aria-expanded={open}
            onClick={() => setOpen(!open)}
          >
            <i />
            <i />
          </button>
        </div>
      </div>

      <div className="sheet" aria-hidden={!open}>
        <nav aria-label="Mobile Navigation">
          {links.map((l, i) => (
            <Link
              key={l.href}
              href={l.href}
              style={{ transitionDelay: `${open ? 60 + i * 40 : 0}ms` }}
              aria-current={isActive(l.href) ? 'page' : undefined}
            >
              {l.label}
            </Link>
          ))}
        </nav>
        <div className="sheet-foot">
          <MusicToggle />
          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">Resume ↗</a>
          <a href="https://github.com/pranav172" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://www.linkedin.com/in/pranav-raj-163230256/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="https://x.com/Pranav_raj_18" target="_blank" rel="noopener noreferrer">X</a>
        </div>
      </div>
    </header>
  );
}

export { Header as Nav };
