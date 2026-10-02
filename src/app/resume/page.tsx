import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resume — Pranav Raj",
  description: "Curriculum Vitae of Pranav Raj — Software Engineer & Backend / Distributed Systems Specialist.",
};

export default function ResumePage() {
  return (
    <div className="px-4 sm:px-6 py-10 sm:py-14 max-w-3xl mx-auto space-y-8 animate-in">
      {/* Header & Quick Action Row */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-b border-border/50 pb-6">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
            Curriculum Vitae
          </h1>
          <p className="text-xs sm:text-sm text-muted mt-1">
            Master CV · Updated for Software Engineering &amp; Distributed Systems Roles
          </p>
        </div>

        <div className="flex items-center gap-2.5">
          <a
            href="/resume.pdf"
            download="Pranav_Raj_Resume.pdf"
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-md text-xs font-semibold bg-foreground text-background hover:opacity-90 transition-opacity"
          >
            <span>↓</span> Download PDF
          </a>
          <a
            href="/cv.tex"
            download="Pranav_Raj_CV.tex"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-mono border border-border hover:border-accent hover:text-accent transition-colors"
          >
            LaTeX .tex
          </a>
        </div>
      </div>

      {/* In-Browser High-Readability Document View */}
      <div className="card-minimal p-6 sm:p-8 space-y-7 bg-background shadow-xs">
        {/* Name & Contact */}
        <div className="text-center space-y-1.5 border-b border-border/40 pb-5">
          <h2 className="text-2xl font-bold tracking-tight text-foreground">
            Pranav Raj
          </h2>
          <div className="flex flex-wrap justify-center items-center gap-x-2 gap-y-1 text-xs text-muted">
            <a href="mailto:rpranav1820@gmail.com" className="hover:text-foreground">
              rpranav1820@gmail.com
            </a>
            <span>•</span>
            <span>+91-9155735631</span>
            <span>•</span>
            <a href="https://github.com/pranav172" target="_blank" rel="noopener noreferrer" className="hover:text-accent font-medium">
              GitHub
            </a>
            <span>•</span>
            <a href="https://www.linkedin.com/in/pranav-raj-163230256/" target="_blank" rel="noopener noreferrer" className="hover:text-accent font-medium">
              LinkedIn
            </a>
            <span>•</span>
            <a href="https://pranavraj.xyz" target="_blank" rel="noopener noreferrer" className="hover:text-accent font-medium">
              Portfolio
            </a>
          </div>
        </div>

        {/* Education */}
        <section className="space-y-1.5">
          <h3 className="text-xs font-bold uppercase tracking-wider text-foreground border-b border-border/60 pb-1">
            Education
          </h3>
          <div className="flex justify-between items-baseline text-xs sm:text-sm font-semibold text-foreground pt-1">
            <span>Manipal University Jaipur</span>
            <span className="font-mono text-muted text-xs">2022 – 2026</span>
          </div>
          <div className="flex justify-between items-baseline text-xs text-muted">
            <span>B.Tech in Information Technology</span>
            <span className="font-semibold text-foreground">CGPA: 7.8/10</span>
          </div>
          <p className="text-[11px] text-muted">
            Coursework: Data Structures &amp; Algorithms, Operating Systems, Computer Networks, DBMS, Cloud Computing, Machine Learning
          </p>
        </section>

        {/* Technical Skills */}
        <section className="space-y-2">
          <h3 className="text-xs font-bold uppercase tracking-wider text-foreground border-b border-border/60 pb-1">
            Technical Skills
          </h3>
          <ul className="text-xs space-y-1 text-muted">
            <li><strong className="text-foreground">Languages:</strong> Python, Java, C++, SQL, JavaScript, TypeScript</li>
            <li><strong className="text-foreground">Backend &amp; Payments:</strong> FastAPI, Node.js, REST APIs, WebSockets, Idempotency, Circuit Breaker, Rate Limiting, HMAC Webhooks</li>
            <li><strong className="text-foreground">Frontend:</strong> React, Vite, TailwindCSS, Chart.js, HTML5 Canvas</li>
            <li><strong className="text-foreground">Databases:</strong> PostgreSQL, MySQL, Redis, SQL Query Optimization</li>
            <li><strong className="text-foreground">Cloud &amp; DevOps:</strong> AWS, Docker, Terraform, Git, GitHub Actions, CI/CD, Linux</li>
            <li><strong className="text-foreground">Core &amp; Testing:</strong> Data Structures &amp; Algorithms, OOP, System Design, Pytest (27 cases), Vitest</li>
            <li><strong className="text-foreground">AI/ML:</strong> PyTorch, TensorFlow, TensorFlow.js, Scikit-learn, LangChain, FAISS, HuggingFace, RAG</li>
          </ul>
        </section>

        {/* Achievements */}
        <section className="space-y-2">
          <h3 className="text-xs font-bold uppercase tracking-wider text-foreground border-b border-border/60 pb-1">
            Achievements
          </h3>
          <ul className="text-xs space-y-1 text-muted list-disc list-inside">
            <li>
              <a href="https://codeforces.com/profile/cookingDSA" target="_blank" rel="noopener noreferrer" className="text-foreground font-semibold hover:text-accent">
                Codeforces Specialist (Rating: 1459)
              </a>
              {" "}|{" "}
              <a href="https://leetcode.com/u/cookingDSA/" target="_blank" rel="noopener noreferrer" className="text-foreground font-semibold hover:text-accent">
                LeetCode (Rating: 1415, 300+ solved)
              </a>
              {" "}|{" "}
              <a href="https://www.geeksforgeeks.org/profile/rpranatxwq" target="_blank" rel="noopener noreferrer" className="text-foreground font-semibold hover:text-accent">
                GeeksforGeeks (200+ solved, Rank: 113)
              </a>
            </li>
            <li>
              <strong className="text-foreground">Deloitte Hackathon Finalist</strong> for an AI-powered invoice fraud detection system (Top 8 / 300+ teams)
            </li>
            <li>
              Research paper accepted at <strong className="text-foreground">Springer LNNS (ICT4SD 2026)</strong>; won <strong className="text-foreground">Best Major Project</strong>
            </li>
          </ul>
        </section>

        {/* Internship */}
        <section className="space-y-2">
          <h3 className="text-xs font-bold uppercase tracking-wider text-foreground border-b border-border/60 pb-1">
            Internship
          </h3>
          <div className="flex justify-between items-baseline text-xs sm:text-sm font-semibold text-foreground pt-1">
            <span>Backend Analytics Intern, NIT Mizoram</span>
            <div className="flex items-center gap-2">
              <a href="https://drive.google.com/file/d/1QYB7fUVvYapT_dSPwJn_11LaiQsxT2Ew/view?usp=drivesdk" target="_blank" rel="noopener noreferrer" className="text-[11px] text-accent hover:underline">
                Certificate ↗
              </a>
              <span className="font-mono text-muted text-xs">Jun 2023 – Aug 2023</span>
            </div>
          </div>
          <ul className="text-xs space-y-1 text-muted list-disc list-inside">
            <li>Developed <strong className="text-foreground">5+ REST APIs</strong> in Python and FastAPI for backend analytics and data processing.</li>
            <li>Optimized <strong className="text-foreground">SQL queries and data pipelines</strong>, reducing dashboard response latency by <strong className="text-foreground">15%</strong>.</li>
            <li>Debugged backend issues using logs, improved workflow reliability, and wrote technical documentation.</li>
          </ul>
        </section>

        {/* Projects */}
        <section className="space-y-3">
          <h3 className="text-xs font-bold uppercase tracking-wider text-foreground border-b border-border/60 pb-1">
            Projects
          </h3>

          <div className="space-y-1">
            <div className="flex justify-between items-baseline text-xs sm:text-sm font-semibold text-foreground">
              <span>NIYAM — Policy Enforcement Gateway for AI-Agent Payments</span>
              <span className="text-[11px] text-accent font-semibold">Razorpay AI Buildathon</span>
            </div>
            <ul className="text-xs space-y-1 text-muted list-disc list-inside">
              <li>Built a <strong className="text-foreground">FastAPI</strong> gateway between AI agents and Razorpay (test mode): compiles spending rules into a JSON policy once; payments are gated by deterministic code with zero LLM in the payment path (&lt;0.04ms).</li>
              <li>Implemented <strong className="text-foreground">idempotency keys</strong>, a <strong className="text-foreground">circuit breaker</strong> that fails closed (503) on rail outages, token-bucket rate limiting, and HMAC-SHA256 webhook verification.</li>
              <li>Added an <strong className="text-foreground">append-only audit ledger</strong> with rule-fired explanations, CSV export, and a signed-token human approval flow; covered by 27 Pytest cases.</li>
            </ul>
          </div>

          <div className="space-y-1">
            <div className="flex justify-between items-baseline text-xs sm:text-sm font-semibold text-foreground">
              <span>Blast Radius — Consequence-Aware AI Governance Plane</span>
              <span className="text-[11px] text-accent font-semibold">Accenture Innovation Challenge</span>
            </div>
            <ul className="text-xs space-y-1 text-muted list-disc list-inside">
              <li>Built a proxy that scores each AI action on <strong className="text-foreground">irreversibility, people affected, regulated data, and financial value</strong>, routing it to 4 risk tiers so the LLM safety judge runs only on high-risk requests.</li>
              <li>Implemented gates for <strong className="text-foreground">PII redaction, prompt-injection detection, and commitment/claim checks</strong>, plus mandatory human review for critical actions.</li>
              <li>Issued <strong className="text-foreground">SHA-256 signed audit receipts</strong> per decision; built with React + TypeScript and tested with Vitest across 14 enterprise scenarios.</li>
            </ul>
          </div>

          <div className="space-y-1">
            <div className="flex justify-between items-baseline text-xs sm:text-sm font-semibold text-foreground">
              <span>Distributed Job Orchestrator (Atlas)</span>
              <a href="https://github.com/pranav172/Cloud-Data-Integration-Platform-" target="_blank" rel="noopener noreferrer" className="text-[11px] text-muted hover:text-foreground">
                GitHub ↗
              </a>
            </div>
            <ul className="text-xs space-y-1 text-muted list-disc list-inside">
              <li>Designed a job orchestration system with <strong className="text-foreground">FastAPI, Redis, and PostgreSQL</strong> to accept, prioritize, and run jobs across concurrent workers.</li>
              <li>Implemented <strong className="text-foreground">202 Accepted non-blocking ingestion</strong>, priority queues, automatic retries with exponential backoff, and graceful failure handling.</li>
              <li>Added Pytest coverage, Alembic async migrations, Docker containerization, and OpenAPI/Swagger documentation.</li>
            </ul>
          </div>

          <div className="space-y-1">
            <div className="flex justify-between items-baseline text-xs sm:text-sm font-semibold text-foreground">
              <span>AI Invoice Fraud Detection &amp; Automation</span>
              <span className="text-[11px] text-accent font-semibold">Deloitte Hackathon (Top 8 / 300)</span>
            </div>
            <ul className="text-xs space-y-1 text-muted list-disc list-inside">
              <li>Built an <strong className="text-foreground">OCR-driven document pipeline</strong> for automated invoice verification and fraud detection.</li>
              <li>Applied transfer learning (<strong className="text-foreground">MobileNetV2, DenseNet121, EfficientNet</strong>) for invoice classification, achieving 84%+ accuracy.</li>
            </ul>
          </div>
        </section>

        {/* Certifications */}
        <section className="space-y-1.5">
          <h3 className="text-xs font-bold uppercase tracking-wider text-foreground border-b border-border/60 pb-1">
            Certifications
          </h3>
          <p className="text-xs text-muted">
            <strong className="text-foreground">ML and Deep Learning Specializations</strong> (Andrew Ng, DeepLearning.AI) &bull; <strong className="text-foreground">Python Essentials 1 &amp; 2</strong> (Cisco)
          </p>
        </section>
      </div>

      {/* Embedded PDF Preview */}
      <div className="space-y-3 pt-2">
        <h3 className="text-xs font-bold uppercase tracking-wider text-foreground">
          PDF Preview
        </h3>
        <div className="rounded-xl overflow-hidden border border-border/60 bg-background/50" style={{ height: "75vh" }}>
          <iframe
            src="/resume.pdf#toolbar=0"
            width="100%"
            height="100%"
            title="Pranav Raj Resume PDF"
            className="w-full h-full border-none"
          />
        </div>
      </div>
    </div>
  );
}
