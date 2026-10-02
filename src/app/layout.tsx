import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";

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
          <Nav />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
