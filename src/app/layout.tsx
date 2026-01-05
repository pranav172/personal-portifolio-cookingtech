import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

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
      <body className={`${inter.variable} antialiased`}>
        <ThemeProvider>
          <Nav />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
