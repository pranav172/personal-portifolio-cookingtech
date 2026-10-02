import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Pranav Raj — Software Engineer | Backend & Distributed Systems",
  description:
    "Portfolio of Pranav Raj — B.Tech IT at Manipal University Jaipur. Specializing in deterministic AI gateways, distributed job orchestrators, and AI governance control planes.",
  keywords: [
    "Pranav Raj",
    "Software Engineer",
    "Backend Engineer",
    "Distributed Systems",
    "FastAPI",
    "AI Governance",
    "Codeforces Specialist",
    "Manipal University Jaipur",
  ],
  authors: [{ name: "Pranav Raj" }],
  openGraph: {
    title: "Pranav Raj — Software Engineer",
    description:
      "Backend & Distributed Systems Engineer. Codeforces Specialist (1459). Builder of NIYAM, Blast Radius, and Atlas.",
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
      <body className="antialiased">
        <ThemeProvider>
          <Nav />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
