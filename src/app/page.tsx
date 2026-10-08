import Link from "next/link";
import { projects } from "@/lib/projects";
import { getLeetCode, getLeetCodeActivity, getLastCommit, getNextContest } from "@/lib/stats";
import { LiveClock } from "@/components/LiveClock";
import { SpotlightContainer } from "@/components/SpotlightContainer";
import { InteractiveDotGrid } from "@/components/InteractiveDotGrid";
import { HeroAvatar } from "@/components/HeroAvatar";
import { TimeGreeting } from "@/components/TimeGreeting";

export default async function Home() {
  const [leetcode, activity, lastCommit, nextContest] = await Promise.all([
    getLeetCode("cookingDSA"),
    getLeetCodeActivity("cookingDSA"),
    getLastCommit("pranav172"),
    getNextContest(),
  ]);

  // Show 3 core projects to keep home page focused and minimal
  const selectedProjects = projects.filter((p) => p.featured).slice(0, 3);

  return (
    <div className="relative min-h-[calc(100vh-3rem)]">
      {/* ── Background dot-grid that reacts to desktop cursor ── */}
      <InteractiveDotGrid />

      <div className="relative max-w-xl mx-auto px-4 sm:px-6 py-16 sm:py-24 space-y-16">
        {/* ── Intro with Avatar, Glow & Real-Time Single-Line Status ── */}
        <section className="space-y-4 stagger-1">
          <div className="flex items-center gap-4">
            <HeroAvatar />

            <div className="min-w-0">
              <div className="flex flex-wrap items-center gap-2">
                <h1 className="text-xl sm:text-2xl font-semibold tracking-tight text-foreground flex items-center gap-2 hero-scroll-title">
                  <span>Pranav Raj</span>
                  <span className="wave-hand text-lg" aria-label="wave">👋</span>
                </h1>
                <TimeGreeting />
              </div>

              {/* Single-line header: ● Thu, 8 Oct · 17:54 IST (last commit on hover tooltip) */}
              <div
                className="flex items-center gap-2 text-xs font-mono text-muted mt-1 whitespace-nowrap overflow-hidden cursor-default"
                title={lastCommit?.repo ? `Last commit to ${lastCommit.repo} (${lastCommit.relativeTime})` : undefined}
              >
                <span className="relative flex h-2 w-2 items-center justify-center flex-shrink-0">
                  <span className="pulse-ring absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-accent" />
                </span>
                <LiveClock />
              </div>
            </div>
          </div>

          <p className="text-[15px] text-secondary leading-relaxed pt-1">
            Software engineer building backend architectures, distributed systems, and machine learning pipelines. Focused on clean system design, sub-millisecond gateways, and algorithmic efficiency.
          </p>

          {/* Social icons & primary actions */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <Link
              href="/work"
              className="text-[13px] font-mono font-medium text-accent hover:text-accent-hover transition-colors duration-180"
            >
              Work →
            </Link>

            {/* GitHub */}
            <a
              href="https://github.com/pranav172"
              target="_blank"
              rel="noopener noreferrer"
              className="p-1 rounded text-muted hover:text-foreground transition-colors duration-180"
              aria-label="GitHub Profile"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
              </svg>
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/pranav-raj-163230256/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-1 rounded text-muted hover:text-foreground transition-colors duration-180"
              aria-label="LinkedIn Profile"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>

            {/* X / Twitter */}
            <a
              href="https://x.com/Pranav_raj_18"
              target="_blank"
              rel="noopener noreferrer"
              className="p-1 rounded text-muted hover:text-foreground transition-colors duration-180"
              aria-label="X Profile"
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.253 5.622 5.911-5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>

            <Link
              href="/resume"
              className="text-[13px] font-mono text-muted hover:text-foreground transition-colors duration-180"
            >
              Resume ↗
            </Link>
          </div>
        </section>

        {/* ── 1. LeetCode: One Clean Line + Proportional Bar (No Box!) ── */}
        <section className="space-y-3 stagger-2">
          <div className="flex items-center justify-between border-b border-border pb-2.5">
            <h2 className="text-xs font-mono text-muted uppercase tracking-wider">
              Algorithmic Problem Solving
            </h2>
            <a
              href="https://leetcode.com/u/cookingDSA/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-mono text-muted hover:text-foreground transition-colors duration-180"
              translate="no"
            >
              @cookingDSA ↗
            </a>
          </div>

          <div className="py-2 space-y-3">
            {/* Big stat headline */}
            <div className="flex flex-wrap items-baseline justify-between gap-y-2">
              <div className="flex items-baseline gap-2">
                <span className="stat-num text-foreground tabular-nums">{leetcode.total}</span>
                <span className="text-sm font-mono text-muted">solved</span>
              </div>

              {/* Difficulty split text */}
              <div className="stat-line font-mono tabular-nums">
                <span><b>{leetcode.easy}</b> easy</span>
                <span>·</span>
                <span><b>{leetcode.medium}</b> medium</span>
                <span>·</span>
                <span><b>{leetcode.hard}</b> hard</span>
              </div>
            </div>

            {/* Proportional colored 2.5px split bar */}
            <div className="stat-bar" aria-hidden="true">
              <i style={{ flex: leetcode.easy, background: "#6EE7B7" }} />
              <i style={{ flex: leetcode.medium, background: "#E5C07B" }} />
              <i style={{ flex: leetcode.hard, background: "#F0868A" }} />
            </div>

            {/* 28-day real submission activity from LeetCode API */}
            <div className="pt-2 space-y-1.5">
              <div className="flex items-center justify-between text-[11px] font-mono text-muted">
                <span>28-Day Submission Activity</span>
                <span>
                  {activity.filter((l) => l > 0).length} active day{activity.filter((l) => l > 0).length !== 1 ? 's' : ''}
                </span>
              </div>
              <div className="grid grid-cols-14 sm:grid-cols-28 gap-1 items-center" aria-label="28-day LeetCode submission heatmap">
                {activity.map((lvl, i) => (
                  <span
                    key={i}
                    title={`${28 - i} day${28 - i !== 1 ? 's' : ''} ago: ${
                      lvl === 0 ? 'no submissions' :
                      lvl === 1 ? '1–2 submissions' :
                      lvl === 2 ? '3–4 submissions' :
                      lvl === 3 ? '5–7 submissions' :
                      '8+ submissions'
                    }`}
                    className={`h-2 sm:h-2.5 rounded-xs ${
                      lvl >= 4
                        ? 'bg-accent'
                        : lvl === 3
                        ? 'bg-accent/75'
                        : lvl === 2
                        ? 'bg-accent/45'
                        : lvl === 1
                        ? 'bg-accent/25'
                        : 'bg-border/60'
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Next contest countdown line */}
            {nextContest && (
              <div className="flex items-center justify-between text-[12px] font-mono text-muted pt-1">
                <span className="truncate max-w-[340px]">
                  Next: {nextContest.name}
                </span>
                <span className="text-accent font-medium flex-shrink-0">
                  {nextContest.relativeTime}
                </span>
              </div>
            )}
          </div>
        </section>

        {/* ── Selected Work: Hover Without Boxes (Dim siblings + title underline sweep + spotlight glow) ── */}
        <section className="space-y-4 stagger-3">
          <div className="flex items-center justify-between border-b border-border pb-2.5">
            <h2 className="text-xs font-mono text-muted uppercase tracking-wider">
              Selected Work
            </h2>
            <Link
              href="/work"
              className="text-xs font-mono text-muted hover:text-foreground transition-colors duration-180"
            >
              All projects ({projects.length}) →
            </Link>
          </div>

          <SpotlightContainer className="py-1">
            <div className="row-list">
              {selectedProjects.map((p) => (
                <article
                  key={p.id}
                  className="row-item group space-y-2 first:border-t-0"
                >
                  <div className="flex items-baseline justify-between gap-4">
                    <div className="flex flex-wrap items-baseline gap-2.5">
                      <Link href={`/work/${p.id}`} className="inline-block">
                        <h3 className="title-sweep text-[15px] font-medium text-foreground">
                          {p.title}
                        </h3>
                      </Link>

                      {p.badge && (
                        <span className="text-[12px] font-mono text-accent font-medium">
                          ★ {p.badge}
                        </span>
                      )}
                    </div>

                    <span className="arrow-slide text-xs font-mono">
                      ↗
                    </span>
                  </div>

                  <p className="text-[13.5px] text-secondary leading-relaxed">
                    {p.description}
                  </p>

                  {/* Plain mono tags separated by dots */}
                  <div className="text-[12px] font-mono text-muted">
                    {p.tech.slice(0, 4).join(" · ")}
                  </div>
                </article>
              ))}
            </div>
          </SpotlightContainer>
        </section>

        {/* ── Research & Systems (Clean divider, no card) ── */}
        <section className="space-y-3 stagger-4">
          <div className="border-b border-border pb-2.5">
            <h2 className="text-xs font-mono text-muted uppercase tracking-wider">
              Research &amp; Systems
            </h2>
          </div>

          <div className="py-3 space-y-1.5">
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <span className="text-[14.5px] font-medium text-foreground">
                Video Classification Research
              </span>
              <span className="text-[12px] font-mono text-accent font-medium">
                ★ Springer LNNS 2026
              </span>
            </div>
            <p className="text-[13.5px] text-secondary leading-relaxed">
              Deep learning surveillance framework using MobileNetV2 and Bi-LSTM. Accepted at ICT4SD 2026.
            </p>
          </div>
        </section>

        {/* ── Direct Contact ── */}
        <section className="space-y-3 pt-6 border-t border-border stagger-5">
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-3 text-xs font-mono">
            <span className="text-secondary">Open to software engineering roles &amp; internships.</span>
            <a
              href="mailto:rpranav1820@gmail.com"
              className="text-foreground hover:text-accent font-medium transition-colors duration-180"
            >
              rpranav1820@gmail.com →
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}
