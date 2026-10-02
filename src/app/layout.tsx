import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { PageProgress } from "@/components/PageProgress";

export const metadata: Metadata = {
  title: "Pranav Raj",
  description: "I explore machine learning and software systems by building experiments and writing about what I learn over time.",
  keywords: ["machine learning", "software engineering", "portfolio", "Pranav Raj"],
  authors: [{ name: "Pranav Raj" }],
  openGraph: {
    title: "Pranav Raj",
    description: "I explore machine learning and software systems by building experiments and writing about what I learn over time.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased font-sans">
        <ThemeProvider>
          {/* Thin accent bar at the very top on every route change */}
          <PageProgress />
          <Nav />
          {/* page-animate: 350ms opacity+translateY fade — compositor only */}
          <main className="page-animate">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
