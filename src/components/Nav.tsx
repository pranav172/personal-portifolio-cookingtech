'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ThemeToggle } from './ThemeToggle';

export function Nav() {
  const pathname = usePathname();

  const links = [
    { href: '/', label: 'Home' },
    { href: '/work', label: 'Projects' },
    { href: '/fun', label: 'Fun' },
    { href: '/writing', label: 'Blogs' },
    { href: '/contact', label: 'Contact' },
  ];

  // Match active route: exact for '/', prefix match for others
  const isActive = (href: string) =>
    href === '/' ? pathname === '/' : pathname.startsWith(href);

  return (
    <nav className="relative py-4 px-4 sm:py-6 sm:px-6 max-w-3xl mx-auto">
      <div className="flex items-center justify-between">
        {/* Desktop Navigation */}
        <div className="hidden sm:flex items-center gap-6">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-semibold transition-colors duration-200 ${
                isActive(link.href)
                  ? 'nav-active'
                  : 'text-foreground hover:text-accent'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Mobile Navigation */}
        <div className="flex sm:hidden items-center gap-4">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-xs font-semibold transition-colors duration-200 ${
                isActive(link.href)
                  ? 'nav-active'
                  : 'text-foreground hover:text-accent'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <ThemeToggle />
      </div>
    </nav>
  );
}
