export interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  tech: string[];
  github?: string;
  kaggle?: string;
  docs?: string;
  live?: string;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    id: "niyam",
    title: "NIYAM — Policy Enforcement Gateway for AI Payments",
    tagline: "I wanted deterministic math, not probabilistic LLMs, guarding real payment rails.",
    description: "Deterministic policy enforcement gateway between autonomous AI agents and Razorpay payment rails (Razorpay AI Buildathon). Built with FastAPI: LLM compiles spending rules into JSON schemas once, payments are verified by deterministic code with zero LLM in the payment path (<0.04ms). Features idempotency keys, fail-closed circuit breaker (503), token-bucket rate limiting, 1-tap WhatsApp human waiver ('Save the Sale'), and append-only audit ledger. Covered by 27 Pytest cases.",
    tech: ["Python", "FastAPI", "Razorpay MCP", "HMAC-SHA256", "Token-Bucket", "Circuit Breaker", "Pytest"],
    github: "https://github.com/pranav172/niyam",
    live: "https://niyam-gateway.onrender.com",
    docs: "https://niyam-gateway.onrender.com/docs",
    featured: true,
  },
  {
    id: "blast-radius",
    title: "Blast Radius — Consequence-Aware AI Governance Control Plane",
    tagline: "Enterprise AI wastes huge compute safety-checking routine tasks — check less, check smarter.",
    description: "Real-time AI governance proxy evaluating real-world materiality (Irreversibility, People Affected, Regulated Data, Financial Value) across 4 Consequence Tiers (T0–T3) so expensive LLM safety judges run only on high-risk requests (Accenture Innovation Challenge). Features inline deterministic gates for PII auto-redaction, prompt injection detection, commitment checks, and SHA-256 signed tamper-proof audit receipts.",
    tech: ["TypeScript", "React", "Node.js", "Vitest", "Vite", "TailwindCSS"],
    github: "https://github.com/pranav172/blastRadius",
    featured: true,
  },
  {
    id: "job-orchestrator",
    title: "Atlas — Distributed Job Orchestration System",
    tagline: "I needed non-blocking task ingestion that never drops jobs when workers scale or retry.",
    description: "Distributed job orchestration system engineered for high-throughput task execution and worker concurrency. Implements non-blocking 202 Accepted ingestion pattern, priority queues, state machine lifecycle (PENDING, QUEUED, RUNNING, SUCCESS, FAILED), automated retries with exponential backoff, and async Alembic migrations with containerized PostgreSQL and Redis.",
    tech: ["Python", "FastAPI", "PostgreSQL", "Redis", "SQLAlchemy", "Alembic", "Docker", "Pytest"],
    github: "https://github.com/pranav172/Cloud-Data-Integration-Platform-",
    featured: true,
  },
  {
    id: "oxtrack",
    title: "OxTrack — Personal CRM & Job Pipeline for SWEs",
    tagline: "Job hunting shouldn't be scattered across 10 spreadsheets — treat applications like an agile pipeline.",
    description: "Modern job-search management application and personal CRM to organize applications, track hiring progress, manage recruiter contacts, prepare for interviews, and analyze job search metrics. Features Kanban pipeline workflow, next-action engine, and interview preparation workspace.",
    tech: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Zustand", "Framer Motion", "Lucide React"],
    github: "https://github.com/pranav172/oxTrack",
    featured: true,
  },
  {
    id: "atsflow",
    title: "ATSFlow (Resume Optimization Platform)",
    tagline: "Curious if dual-LLM semantic retrieval could actually reverse-engineer ATS rejection filters.",
    description: "AI-powered resume optimization that beats applicant tracking systems. Features ATS scoring (0-100), keyword gap analysis, job description matching, and dual-AI optimization using Gemini + Groq for intelligent resume improvements.",
    tech: ["Next.js", "TypeScript", "PostgreSQL", "Clerk Auth", "Gemini AI", "Groq/LLaMA", "Drizzle ORM", "TailwindCSS"],
    github: "https://github.com/pranav172/ATSFlow",
    live: "https://ats-flow.vercel.app",
    featured: true,
  },
  {
    id: "url-shortener",
    title: "Scalable URL Shortener (Backend System)",
    tagline: "Wanted to build a production backend that survives cache crashes and sudden traffic spikes.",
    description: "Production-ready URL shortening backend built with FastAPI, PostgreSQL, and Redis. Features time-based link expiry, rate limiting, and graceful degradation for cache/database failures.",
    tech: ["Python", "FastAPI", "PostgreSQL", "Redis", "SQLAlchemy", "REST APIs"],
    github: "https://github.com/pranav172/url-shortener-backend",
    live: "https://url-shortener-backend-fgyj.onrender.com",
    docs: "https://url-shortener-backend-fgyj.onrender.com/docs",
    featured: true,
  },
  {
    id: "invoice-fraud-detection",
    title: "Invoice Fraud Detection (Computer Vision)",
    tagline: "Can OCR plus deep transfer learning catch visual tampering in messy real-world invoices?",
    description: "End-to-end deep learning system for detecting fraudulent invoices using transfer learning. Generated synthetic fraud data, compared CNN architectures, and ranked in Top 8 teams at Deloitte Hackathon.",
    tech: ["Python", "TensorFlow", "Keras", "OpenCV", "Streamlit", "Kaggle"],
    kaggle: "https://www.kaggle.com/code/pranav1718/invoicefrauddetection",
    featured: true,
  },
  {
    id: "violence-detection",
    title: "Violence Detection in Videos (Deep Learning)",
    tagline: "Spatial CNNs alone miss temporal context; pairing MobileNet with BiLSTM solved action dynamics.",
    description: "Video classification pipeline using MobileNetV2 + Bi-LSTM for temporal dynamics. Achieves 94% accuracy with frame-level and full-video inference capabilities. Research accepted at Springer LNNS (ICT4SD 2026).",
    tech: ["Python", "TensorFlow", "Keras", "OpenCV", "NumPy", "Matplotlib"],
    github: "https://github.com/pranav172/RealTimeVoilenceDetection/tree/main",
  },
];
