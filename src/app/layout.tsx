import type { Metadata, Viewport } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { PageProgress } from "@/components/PageProgress";
import { CommandPalette } from "@/components/CommandPalette";
import { TerminalModal } from "@/components/TerminalModal";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#F4F6F5" },
    { media: "(prefers-color-scheme: dark)", color: "#0B0D0E" },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL("https://www.pranavraj.xyz"),
  title: {
    default: "Pranav Raj — Software Engineer | Backend · AI · Systems",
    template: "%s | Pranav Raj",
  },
  description:
    "Software Engineer building reliable backend systems, distributed architectures, and AI products with Python, FastAPI, TypeScript, and PyTorch.",
  keywords: [
    "Software Engineer",
    "Backend Engineer",
    "Distributed Systems",
    "AI Systems",
    "Machine Learning",
    "FastAPI",
    "Python",
    "TypeScript",
    "Pranav Raj",
  ],
  authors: [{ name: "Pranav Raj", url: "https://www.pranavraj.xyz" }],
  creator: "Pranav Raj",
  openGraph: {
    title: "Pranav Raj — Software Engineer | Backend · AI · Systems",
    description:
      "Software Engineer building reliable backend systems, distributed architectures, and AI products.",
    url: "https://www.pranavraj.xyz",
    siteName: "Pranav Raj Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pranav Raj — Software Engineer | Backend · AI · Systems",
    description:
      "Software Engineer building reliable backend systems, distributed architectures, and AI products.",
    creator: "@Pranav_raj_18",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": "https://www.pranavraj.xyz/#person",
        name: "Pranav Raj",
        url: "https://www.pranavraj.xyz",
        jobTitle: "Software Engineer",
        sameAs: [
          "https://github.com/pranav172",
          "https://www.linkedin.com/in/pranav-raj-163230256/",
          "https://x.com/Pranav_raj_18",
          "https://leetcode.com/u/cookingDSA/",
        ],
        knowsAbout: [
          "Backend Systems",
          "Distributed Architecture",
          "Machine Learning",
          "FastAPI",
          "Python",
          "TypeScript",
          "PyTorch",
        ],
      },
      {
        "@type": "WebSite",
        "@id": "https://www.pranavraj.xyz/#website",
        url: "https://www.pranavraj.xyz",
        name: "Pranav Raj Portfolio",
        publisher: {
          "@id": "https://www.pranavraj.xyz/#person",
        },
      },
    ],
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var saved = localStorage.getItem('theme');
                  var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                  var theme = saved || (prefersDark ? 'dark' : 'light');
                  if (theme === 'dark') {
                    document.documentElement.classList.add('dark');
                    document.documentElement.dataset.theme = 'dark';
                    document.documentElement.style.colorScheme = 'dark';
                  } else {
                    document.documentElement.classList.remove('dark');
                    document.documentElement.dataset.theme = 'light';
                    document.documentElement.style.colorScheme = 'light';
                  }
                } catch(e) {}
              })();
            `,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased font-sans flex flex-col min-h-screen">
        {/* WAI-ARIA compliant skip to content link */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:px-4 focus:py-2 focus:bg-surface focus:text-accent focus:border focus:border-accent focus:rounded-md focus:shadow-lg text-xs font-mono"
        >
          Skip to content
        </a>
        <ThemeProvider>
          {/* Subtle accent loading line on route changes */}
          <PageProgress />
          <Nav />
          <main id="main-content" className="flex-1 page-animate">{children}</main>
          <Footer />
          <CommandPalette />
          <TerminalModal />
        </ThemeProvider>
      </body>
    </html>
  );
}
