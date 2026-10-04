'use client';

import { useState } from "react";
import Link from "next/link";

export default function ContactPage() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    navigator.clipboard.writeText("rpranav1820@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const contactLinks = [
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/pranav-raj-163230256/",
      display: "pranav-raj-163230256",
    },
    {
      label: "GitHub",
      href: "https://github.com/pranav172",
      display: "github.com/pranav172",
    },
    {
      label: "X",
      href: "https://x.com/Pranav_raj_18",
      display: "@Pranav_raj_18",
    },
  ];

  return (
    <div className="max-w-xl mx-auto px-4 sm:px-6 py-16 sm:py-24 space-y-10">
      <header className="space-y-2 stagger-1">
        <h1 className="text-xl sm:text-2xl font-semibold tracking-tight text-foreground">
          Contact
        </h1>
        <p className="text-[14px] text-secondary leading-relaxed">
          Open to software engineering roles, systems discussions, or just a hello.
        </p>
      </header>

      {/* ── Contact Table Rows (Divider only, no boxes/cards) ── */}
      <div className="stagger-2">
        {/* Email Row with Click-to-Copy */}
        <div
          onClick={handleCopyEmail}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              handleCopyEmail(e as unknown as React.MouseEvent);
            }
          }}
          className="contact-row group cursor-pointer"
        >
          <span className="text-xs font-mono text-muted uppercase tracking-wider">Email</span>
          <span className="text-[13.5px] sm:text-[14px] font-mono text-foreground font-medium truncate break-all">
            rpranav1820@gmail.com
          </span>
          <span className="text-xs font-mono text-muted group-hover:text-accent flex-shrink-0">
            {copied ? (
              <span className="text-emerald-500 font-medium">Copied! ✓</span>
            ) : (
              "Copy ↗"
            )}
          </span>
        </div>

        {/* Other Social Rows */}
        {contactLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="contact-row group"
          >
            <span className="text-xs font-mono text-muted uppercase tracking-wider">
              {link.label}
            </span>
            <span className="text-[14px] font-mono text-foreground font-medium truncate">
              {link.display}
            </span>
            <span className="text-xs font-mono text-muted group-hover:text-accent group-hover:translate-x-0.5 transition-all duration-180 flex-shrink-0">
              ↗
            </span>
          </a>
        ))}
      </div>

      {/* ── Response Time & Plain Underlined Resume Link ── */}
      <div className="pt-6 border-t border-border flex flex-col sm:flex-row sm:items-center justify-between gap-4 stagger-3">
        <div className="flex items-center gap-2 text-xs font-mono text-secondary">
          <span className="inline-block w-1.5 h-1.5 rounded-full bg-accent" />
          <span>Usually reply within a day</span>
        </div>

        <Link
          href="/resume"
          className="text-xs font-mono text-muted hover:text-foreground underline underline-offset-4 decoration-border hover:decoration-accent transition-colors duration-180"
        >
          View Resume ↗
        </Link>
      </div>
    </div>
  );
}
