# Pranav Raj — Personal Portfolio

[![Live Site](https://img.shields.io/badge/Live-pranavraj.xyz-0F766E?style=for-the-badge&logo=vercel&logoColor=white)](https://pranavraj.xyz)
[![Next.js](https://img.shields.io/badge/Next.js-16-black?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-v4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)

A fast, minimal, and content-first personal engineering website built with Next.js 16 (App Router), React 19, TypeScript, and Tailwind CSS v4.

🔗 **Live:** [pranavraj.xyz](https://pranavraj.xyz)

---

## 🎯 Design Philosophy

- **Content > Decoration**: Built around strong typography, whitespace, and thin dividers rather than excessive cards, borders, or flashy 3D effects.
- **Hover Without Boxes**: Subtle sibling dimming, title underline sweeps, and cursor-follow illumination instead of heavy container boxes.
- **Palette: Graphite + Mint**: Cold, technical, and calm color palette:
  - **Dark**: `#0B0D0E` (Graphite canvas) · `#E7ECEA` (Text) · `#6EE7B7` (Mint accent)
  - **Light**: `#F4F6F5` (Mist canvas) · `#0E1311` (Text) · `#0F766E` (Deep Mint accent)
- **Live Technical Signals**:
  - Real-time GitHub latest pushed repository badge
  - Real-time IST ticking clock (`HH:MM:SS IST`)
  - Server-cached LeetCode problem difficulty split bar (All / Easy / Medium / Hard)
  - Live Codeforces upcoming contest countdown
- **Zero Layout Shifts**: Enforces `scrollbar-gutter: stable`, fluid CSS grid transitions, and compositor-only animations.

---

## 📄 Pages & Architecture

| Route | Name | Highlights |
|---|---|---|
| `/` | **Home** | Minimal hero with ambient glow avatar, live clock, GitHub push state, LeetCode proportional bar, and selected work. |
| `/work` | **Work** | Scannable list of software and ML projects, credibility badges (Springer LNNS 2026, Deloitte Hackathon Top 8), and single-line grid alignment. |
| `/work/[slug]` | **Case Studies** | In-depth project architectural breakdowns and ASCII pipeline diagrams. |
| `/fun` | **Fun & Experiments** | Big-type index with hover reveal accordion, playful wiggling emojis, and origin quotes. |
| `/writing` | **Writing** | Engineering notes on WebSockets, RAG pipelines, and systems design. |
| `/contact` | **Contact** | 3-column table with click-to-copy email, active response note, and direct resume link. |
| `/resume` | **Resume** | PDF embedded viewer with download and Google Drive backup links. |

---

## 🛠️ Tech Stack

- **Framework**: Next.js 16.1 (Turbopack, App Router, React Server Components)
- **Runtime / Rendering**: Statically Pre-rendered (SSG) with Incremental Static Regeneration (ISR)
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS v4 (`@theme inline` integration)
- **State & Theme**: Pure CSS variable injection with zero-FOUC inline script
- **Fonts**: System-native modern sans (`ui-sans-serif, system-ui, Segoe UI Variable, SF Pro`) and mono (`Cascadia Code, SF Mono`)

---

## 🚀 Getting Started

### Prerequisites

- Node.js 18.17+ or later
- npm, pnpm, or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/pranav172/personal-portifolio-cookingtech.git
cd personal-portifolio-cookingtech

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

```bash
npm run build
npm run start
```

---

## 📁 Project Directory Structure

```
├── public/
│   ├── pranav.webp           # Optimized circular portrait
│   ├── pranav-full.jpg       # Full outdoor photo
│   └── resume.pdf            # PDF resume asset
├── src/
│   ├── app/
│   │   ├── layout.tsx        # Root layout, JSON-LD, SEO metadata
│   │   ├── page.tsx          # Home page with live stats
│   │   ├── globals.css       # Color tokens, micro-animations, typography
│   │   ├── work/             # Work project list and [slug] case studies
│   │   ├── fun/              # Direction A Big-Type Fun page
│   │   ├── writing/          # Engineering notes
│   │   ├── contact/          # Interactive contact table
│   │   ├── resume/           # Embedded PDF reader
│   │   ├── robots.ts         # SEO crawlers directive
│   │   └── sitemap.ts        # Dynamic XML sitemap generator
│   ├── components/
│   │   ├── Nav.tsx           # Sticky minimal navigation
│   │   ├── Footer.tsx        # Footer with social links
│   │   ├── ThemeToggle.tsx   # Light/dark mode toggle
│   │   ├── LiveClock.tsx     # Real-time ticking IST clock
│   │   └── SpotlightContainer.tsx # Mouse tracking radial spotlight
│   └── lib/
│       ├── projects.ts       # Structured engineering projects data
│       ├── fun-projects.ts   # Playground experiments with origin quotes
│       ├── articles.ts       # Technical essays and notes
│       └── stats.ts          # Server-cached LeetCode, GitHub & Codeforces API
```

---

## 📬 Connect

- **Website**: [pranavraj.xyz](https://pranavraj.xyz)
- **Email**: [rpranav1820@gmail.com](mailto:rpranav1820@gmail.com)
- **GitHub**: [@pranav172](https://github.com/pranav172)
- **LinkedIn**: [pranav-raj-163230256](https://www.linkedin.com/in/pranav-raj-163230256/)
- **X (Twitter)**: [@Pranav_raj_18](https://x.com/Pranav_raj_18)
- **LeetCode**: [@cookingDSA](https://leetcode.com/u/cookingDSA/)

---

## 📝 License

MIT © [Pranav Raj](https://pranavraj.xyz)
