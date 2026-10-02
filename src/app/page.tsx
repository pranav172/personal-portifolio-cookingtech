import Link from "next/link";
import { projects } from "@/lib/projects";

interface LeetCodeStats {
  total: number;
  easy: number;
  medium: number;
  hard: number;
}

async function getLeetCodeStats(): Promise<LeetCodeStats> {
  try {
    const res = await fetch("https://leetcode.com/graphql", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Referer: "https://leetcode.com",
        Origin: "https://leetcode.com",
      },
      body: JSON.stringify({
        query: `query userPublicProfile($username: String!) {
          matchedUser(username: $username) {
            submitStatsGlobal {
              acSubmissionNum {
                difficulty
                count
              }
            }
          }
        }`,
        variables: { username: "cookingDSA" },
      }),
      next: { revalidate: 3600 },
    });

    const data = await res.json();
    const stats: { difficulty: string; count: number }[] =
      data?.data?.matchedUser?.submitStatsGlobal?.acSubmissionNum ?? [];

    const get = (d: string) =>
      stats.find((s) => s.difficulty === d)?.count ?? 0;

    return {
      total: get("All"),
      easy: get("Easy"),
      medium: get("Medium"),
      hard: get("Hard"),
    };
  } catch {
    return { total: 300, easy: 120, medium: 145, hard: 35 };
  }
}

export default async function Home() {
  const lc = await getLeetCodeStats();
  const featuredProjects = projects.filter((p) => p.featured).slice(0, 5);

  const skillGroups = [
    {
      category: "Languages",
      skills: ["Python", "Java", "C++", "SQL", "JavaScript", "TypeScript"],
    },
    {
      category: "Backend & Systems",
      skills: ["FastAPI", "Node.js", "REST APIs", "WebSockets", "Idempotency", "Circuit Breakers", "Rate Limiting", "HMAC Webhooks"],
    },
    {
      category: "Databases & Storage",
      skills: ["PostgreSQL", "MySQL", "Redis", "SQL Query Optimization", "Alembic"],
    },
    {
      category: "Cloud & DevOps",
      skills: ["AWS", "Docker", "Terraform", "Git", "GitHub Actions", "CI/CD", "Linux"],
    },
    {
      category: "AI, ML & Governance",
      skills: ["PyTorch", "TensorFlow", "TensorFlow.js", "Scikit-learn", "LangChain", "FAISS", "Groq", "RAG"],
    },
    {
      category: "Core CS & Testing",
      skills: ["Data Structures & Algorithms", "OOP", "System Design", "Pytest (27 cases)", "Vitest"],
    },
  ];

  return (
    <div className="px-4 sm:px-6 py-10 sm:py-14 max-w-3xl mx-auto space-y-12">
      {/* ── 1. HERO HEADER ── */}
      <section className="space-y-4 animate-in">
        <div className="flex items-center gap-3.5">
          <div className="avatar-ring flex-shrink-0 w-11 h-11">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/pranav.jpg"
              alt="Pranav Raj"
              width={44}
              height={44}
              className="object-cover w-full h-full"
            />
          </div>
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
              Pranav Raj
            </h1>
            <p className="text-xs sm:text-sm text-accent font-medium">
              Software Engineer — Backend, Distributed Systems &amp; AI Infrastructure
            </p>
          </div>
        </div>

        <p className="text-sm sm:text-base leading-relaxed text-muted">
          B.Tech in Information Technology from <strong className="text-foreground">Manipal University Jaipur</strong> (2022–2026, CGPA: 7.8/10). 
          Building high-throughput, fault-tolerant backend architectures, deterministic payment gateways, and materiality-driven AI governance planes. 
          Competitive programmer with a focus on core algorithmic optimization.
        </p>

        {/* Recruiter Quick Proof-of-Work Strip */}
        <div className="flex flex-wrap gap-2 pt-1">
          <span className="tag-badge tag-badge-accent">
            ⚡ Codeforces Specialist (1459)
          </span>
          <span className="tag-badge">
            🏆 Deloitte Hackathon Finalist
          </span>
          <span className="tag-badge">
            📄 Springer LNNS Published
          </span>
          <span className="tag-badge">
            💼 NIT Mizoram Intern
          </span>
        </div>

        {/* Primary Action Buttons */}
        <div className="flex flex-wrap items-center gap-3 pt-2">
          <a
            href="/resume.pdf"
            download="Pranav_Raj_Resume.pdf"
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-md text-xs font-semibold bg-foreground text-background hover:opacity-90 transition-opacity"
          >
            <span>↓</span> Download Resume (PDF)
          </a>
          <Link
            href="/work"
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-md text-xs font-semibold border border-border hover:border-accent hover:text-accent transition-colors"
          >
            <span>→</span> Explore Systems ({projects.length})
          </Link>
          <a
            href="https://github.com/pranav172"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-muted hover:text-foreground underline underline-offset-4 transition-colors px-2 py-1.5"
          >
            GitHub ↗
          </a>
          <a
            href="https://www.linkedin.com/in/pranav-raj-163230256/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-muted hover:text-foreground underline underline-offset-4 transition-colors px-2 py-1.5"
          >
            LinkedIn ↗
          </a>
          <a
            href="mailto:rpranav1820@gmail.com"
            className="text-xs text-muted hover:text-foreground underline underline-offset-4 transition-colors px-2 py-1.5"
          >
            Email ↗
          </a>
        </div>
      </section>

      <div className="section-divider" />

      {/* ── 2. SYSTEM DESIGN PHILOSOPHY ── */}
      <section className="space-y-4 animate-in delay-1">
        <div className="flex items-center justify-between">
          <h2 className="text-xs font-bold uppercase tracking-wider text-foreground">
            System Design &amp; Architectural Tenets
          </h2>
          <span className="text-[11px] text-muted font-mono">0.04ms · Idempotent · Resilient</span>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
          <div className="card-minimal p-3.5 space-y-1">
            <div className="font-semibold text-foreground flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-accent" />
              Deterministic Financial Gating
            </div>
            <p className="text-muted leading-relaxed">
              LLMs converse, but mathematical code enforces bounds in &lt;0.04ms. No probabilistic models exist in the direct payment execution path.
            </p>
          </div>

          <div className="card-minimal p-3.5 space-y-1">
            <div className="font-semibold text-foreground flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-accent" />
              Fail-Closed Outage Isolation
            </div>
            <p className="text-muted leading-relaxed">
              Circuit breakers trip to HTTP 503 during rail outages to prevent ghost debits, stranded transactions, or cascade failures.
            </p>
          </div>

          <div className="card-minimal p-3.5 space-y-1">
            <div className="font-semibold text-foreground flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-accent" />
              Non-Blocking 202 Ingestion
            </div>
            <p className="text-muted leading-relaxed">
              Decoupling client HTTP timeouts from long task execution durations via Redis priority queues and state-machine transitions.
            </p>
          </div>

          <div className="card-minimal p-3.5 space-y-1">
            <div className="font-semibold text-foreground flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-accent" />
              Proportional Materiality Routing
            </div>
            <p className="text-muted leading-relaxed">
              Consequence formulas (Irreversibility, People, Regulated Data, Financial Value) ensure expensive safety judges run only on high-risk tiers.
            </p>
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* ── 3. FEATURED SYSTEMS ── */}
      <section className="space-y-5 animate-in delay-2">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-foreground">
              Featured Systems &amp; Projects
            </h2>
            <p className="text-xs text-muted mt-0.5">
              Production-grade applications and architectural prototypes
            </p>
          </div>
          <Link
            href="/work"
            className="text-xs text-accent hover:underline underline-offset-4 font-medium"
          >
            View all ({projects.length}) →
          </Link>
        </div>

        <div className="space-y-4">
          {featuredProjects.map((project) => (
            <article
              key={project.id}
              className="card-minimal p-4 sm:p-5 space-y-3"
            >
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
                <div className="flex items-center gap-2">
                  <h3 className="text-sm sm:text-base font-semibold text-foreground">
                    {project.title}
                  </h3>
                  {project.event && (
                    <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-accent/10 text-accent font-semibold">
                      {project.event}
                    </span>
                  )}
                </div>
                <div className="flex items-center gap-3 text-xs">
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-accent hover:underline font-semibold"
                    >
                      Live Demo ↗
                    </a>
                  )}
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground hover:text-accent hover:underline"
                    >
                      GitHub →
                    </a>
                  )}
                </div>
              </div>

              <p className="text-xs sm:text-sm text-muted leading-relaxed">
                {project.description}
              </p>

              {/* Metrics strip */}
              {project.metrics && project.metrics.length > 0 && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-[11px] text-foreground/80 bg-foreground/[0.02] p-2.5 rounded border border-border/40">
                  {project.metrics.slice(0, 2).map((m, idx) => (
                    <div key={idx} className="flex items-center gap-1.5">
                      <span className="text-accent">✓</span>
                      <span>{m}</span>
                    </div>
                  ))}
                </div>
              )}

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-1.5 pt-1">
                {project.tech.map((t) => (
                  <span key={t} className="tag-badge text-[11px]">
                    {t}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <div className="section-divider" />

      {/* ── 4. TECHNICAL SKILLS MATRIX ── */}
      <section className="space-y-4 animate-in delay-3">
        <h2 className="text-xs font-bold uppercase tracking-wider text-foreground">
          Technical Skills &amp; Competencies
        </h2>
        <div className="space-y-2.5 text-xs sm:text-sm">
          {skillGroups.map((group) => (
            <div key={group.category} className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-2">
              <span className="text-muted font-medium w-40 flex-shrink-0">
                {group.category}:
              </span>
              <span className="text-foreground leading-relaxed">
                {group.skills.join(" · ")}
              </span>
            </div>
          ))}
        </div>
      </section>

      <div className="section-divider" />

      {/* ── 5. EXPERIENCE & INTERNSHIP ── */}
      <section className="space-y-4 animate-in delay-4">
        <div className="flex items-center justify-between">
          <h2 className="text-xs font-bold uppercase tracking-wider text-foreground">
            Experience &amp; Internship
          </h2>
          <span className="text-xs text-muted font-mono">Jun 2023 – Aug 2023</span>
        </div>

        <div className="card-minimal p-4 space-y-2">
          <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between">
            <h3 className="text-sm font-semibold text-foreground">
              Backend Analytics Intern — National Institute of Technology (NIT) Mizoram
            </h3>
            <a
              href="https://drive.google.com/file/d/1QYB7fUVvYapT_dSPwJn_11LaiQsxT2Ew/view?usp=drivesdk"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-accent hover:underline font-medium"
            >
              Verified Certificate ↗
            </a>
          </div>
          <ul className="list-disc list-inside text-xs sm:text-sm text-muted space-y-1 leading-relaxed">
            <li>Developed <strong className="text-foreground">5+ REST APIs</strong> in Python and FastAPI for backend analytics and student data processing.</li>
            <li>Optimized <strong className="text-foreground">SQL queries and data pipelines</strong>, reducing dashboard response latency by <strong className="text-foreground">15%</strong>.</li>
            <li>Analyzed logs to debug production bottlenecks, improved workflow reliability, and authored API documentation.</li>
          </ul>
        </div>
      </section>

      <div className="section-divider" />

      {/* ── 6. PROBLEM SOLVING & LEETCODE ── */}
      <section className="space-y-4 animate-in delay-5">
        <div className="flex items-center justify-between">
          <h2 className="text-xs font-bold uppercase tracking-wider text-foreground">
            Competitive Programming &amp; DSA
          </h2>
          <span className="text-xs text-muted font-mono">Profile: cookingDSA</span>
        </div>

        <div className="flex flex-wrap gap-4 text-xs sm:text-sm">
          <a
            href="https://codeforces.com/profile/cookingDSA"
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground hover:text-accent hover:underline underline-offset-4 font-medium"
          >
            → Codeforces (Specialist, 1459)
          </a>
          <a
            href="https://leetcode.com/u/cookingDSA/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground hover:text-accent hover:underline underline-offset-4 font-medium"
          >
            → LeetCode (Rating: 1415, 300+ Solved)
          </a>
          <a
            href="https://www.geeksforgeeks.org/profile/rpranatxwq"
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground hover:text-accent hover:underline underline-offset-4 font-medium"
          >
            → GeeksforGeeks (200+ Solved, Rank: 113)
          </a>
        </div>

        {lc.total > 0 && (
          <div className="inline-flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-muted bg-foreground/[0.03] border border-border/50 rounded-lg px-3.5 py-2.5">
            <span className="text-foreground font-semibold">
              LeetCode Submissions:
            </span>
            <span>
              <strong className="text-foreground">{lc.total}</strong> Total
            </span>
            <span className="text-border">|</span>
            <span className="text-emerald-500 font-medium">
              {lc.easy} Easy
            </span>
            <span className="text-amber-500 font-medium">
              {lc.medium} Medium
            </span>
            <span className="text-rose-500 font-medium">
              {lc.hard} Hard
            </span>
          </div>
        )}
      </section>

      {/* ── 7. FOOTER CTA ── */}
      <section className="pt-2 text-center text-xs text-muted">
        <p>
          Designed for maximum performance and readability · Built with Next.js &amp; Tailwind CSS
        </p>
      </section>
    </div>
  );
}
