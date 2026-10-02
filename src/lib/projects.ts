export type ProjectCategory = "all" | "systems" | "ai" | "fullstack";

export interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  category: "systems" | "ai" | "fullstack";
  tech: string[];
  event?: string;
  featured?: boolean;
  metrics?: string[];
  systemDesignPrinciple?: string;
  architecture?: string[];
  github?: string;
  live?: string;
  docs?: string;
  kaggle?: string;
}

export const projects: Project[] = [
  {
    id: "niyam",
    title: "NIYAM (नियम) — Policy Gateway for AI Payments",
    tagline: "LLMs converse; pure deterministic code enforces in <0.04ms.",
    description:
      "A deterministic policy enforcement gateway sitting between autonomous AI shopping agents and payment rails (Razorpay test mode). Compiles natural language intent into JSON spending schemas once, then executes payment gating via pure mathematical verification with zero AI in the critical financial path.",
    category: "systems",
    tech: ["FastAPI", "Python", "Razorpay MCP", "HMAC-SHA256", "Token-Bucket", "Circuit Breaker", "Pytest"],
    event: "Razorpay AI Buildathon (Track 1)",
    featured: true,
    systemDesignPrinciple: "Deterministic Zero-Trust Gatekeeper & Fail-Closed Isolation",
    metrics: [
      "<0.04ms evaluation latency (100% deterministic)",
      "Zero ghost debits via fail-closed circuit breaker (503)",
      "100% duplicate suppression via Idempotency keys",
      "27 automated Pytest test cases with 100% pass rate",
    ],
    architecture: [
      "Natural language policy compiled once via LLM into Pydantic JSON contracts (v1, v2...)",
      "Payment path executes pure mathematical bounds checking (per-transaction, daily, category caps)",
      "Fail-closed circuit breaker halts upstream traffic immediately during gateway outages",
      "Token-bucket rate limiter mitigates rogue infinite loops from automated agents",
      "Human-in-the-loop WhatsApp 1-tap approval ('Save the Sale') with single-use HMAC tokens",
      "Tamper-proof append-only audit ledger with DLQ backup and RFC-4180 CSV export",
    ],
    github: "https://github.com/pranav172/niyam",
    live: "https://niyam-gateway.onrender.com",
    docs: "https://niyam-gateway.onrender.com/docs",
  },
  {
    id: "blast-radius",
    title: "Blast Radius — AI Governance Control Plane",
    tagline: "Auditor-grade materiality scoring: check less, check smarter.",
    description:
      "A real-time, consequence-aware AI governance control plane acting as a zero-trust proxy layer between enterprise agents and foundation model APIs. Rather than running expensive safety judges on 100% of prompts, it evaluates potential real-world damage across 4 Consequence Tiers (T0–T3) so costly safety models only execute on high-risk requests.",
    category: "ai",
    tech: ["React", "TypeScript", "Vitest", "Node.js", "SHA-256", "TailwindCSS"],
    event: "Accenture Innovation Challenge",
    featured: true,
    systemDesignPrinciple: "Proportional Materiality Routing & Cryptographic Verification",
    metrics: [
      "<5ms latency on low-consequence T0 requests (zero LLM calls)",
      "~40ms on high-stakes T2 verified actions",
      "Tamper-proof SHA-256 audit receipts per decision",
      "14 pre-configured enterprise banking, lending & health test scenarios",
    ],
    architecture: [
      "Materiality formula combining Irreversibility (I), People Affected (P), Regulated Data (R), and Financial Value (V)",
      "Non-linear catastrophic coupling and asymmetric catastrophe floor overrides (e.g. ₹5 Cr wire transfer forces T3 block)",
      "Deterministic inline gates: high-speed regex PII scanner, prompt-injection detector, and commitment classifier",
      "Secondary AI Safety Judge invoked only on T2/T3 requests with ground-truth claim verification",
      "Structured AI Reviewer Brief generated for human authorization with immutable audit receipts",
    ],
    github: "https://github.com/pranav172/blastRadius",
  },
  {
    id: "atlas-orchestrator",
    title: "Atlas — Distributed Job Orchestration System",
    tagline: "High-throughput task queueing with non-blocking 202 Accepted architecture.",
    description:
      "A distributed job orchestration system engineered for high-throughput, resilient task execution, status tracking, and worker concurrency. Employs a non-blocking ingestion pattern to decouple client HTTP connections from long-running task durations, backed by durable state transitions and Redis priority queues.",
    category: "systems",
    tech: ["FastAPI", "Python", "Redis", "PostgreSQL", "SQLAlchemy", "Alembic", "Docker", "Pytest"],
    featured: true,
    systemDesignPrinciple: "Non-Blocking Ingestion (202 Accepted) & Decoupled Worker Fleet",
    metrics: [
      "100% hermetic unit test coverage (<0.35s in-memory SQLite)",
      "Predictable sub-10ms API ingestion response time",
      "State machine enum: PENDING → QUEUED → RUNNING → SUCCESS / FAILED / RETRYING / CANCELLED",
    ],
    architecture: [
      "Client requests receive immediate 202 Accepted with a unique UUID, avoiding gateway timeouts",
      "Priority scoring (Redis Sorted Sets) prioritizes critical enterprise workloads over batch jobs",
      "Worker concurrency with BRPOP / ZPOPMIN and heartbeat zombie task detection",
      "Exponential backoff retry policies and Dead Letter Queue (DLQ) for permanently failed tasks",
      "Async Alembic migration pipeline with indexed composite schemas on worker_id, status, and created_at",
    ],
    github: "https://github.com/pranav172/Cloud-Data-Integration-Platform-",
  },
  {
    id: "oxtrack",
    title: "OxTrack — Personal CRM & SWE Job Pipeline",
    tagline: "Treat your software engineering job search like a pipeline, not scattered sheets.",
    description:
      "A modern job-search management application and personal CRM designed to organize applications, track hiring progress, manage recruiter communications, prepare for interviews, and understand conversion rates through real-time analytics.",
    category: "fullstack",
    tech: ["Next.js", "React", "TypeScript", "Zustand", "Tailwind CSS", "Framer Motion", "Lucide"],
    featured: true,
    systemDesignPrinciple: "Component-Driven Pipeline Architecture & Modular Client-Side State",
    metrics: [
      "Full Kanban workflow: Saved → Applied → Screening → Interview → Final Round → Offer",
      "High information density with zero visual noise and sub-50ms interaction response",
      "Decoupled Zustand state slices for apps, recruiters, and analytics",
    ],
    architecture: [
      "Component-driven Next.js architecture separating UI, domain types, analytics, and state",
      "Zustand client-side store maintaining active application state, drawers, and filter selections",
      "Actionable next-action engine tracking follow-ups, take-homes, and interview dates",
      "Restrained motion design communicating state transitions without blocking UI performance",
    ],
    github: "https://github.com/pranav172/oxTrack",
  },
  {
    id: "smart-grid-ai",
    title: "Smart Grid AI — Real-Time Energy Prediction",
    tagline: "PyTorch load forecasting deployed with decoupled microservices.",
    description:
      "An end-to-end electrical grid load forecasting system utilizing deep learning to predict energy demand in real-time. Features a 3-layer PyTorch neural network trained on PJME energy datasets, serving millisecond inferences through FastAPI and streaming updates to a responsive React dashboard.",
    category: "ai",
    tech: ["PyTorch", "FastAPI", "Python", "React 18", "Vite", "Tailwind CSS", "Recharts", "Render", "Vercel"],
    featured: true,
    systemDesignPrinciple: "Decoupled Inference Engine & Real-Time Polling Pipeline",
    metrics: [
      "95%+ prediction confidence on temporal energy demand",
      "2-second real-time polling synchronization",
      "Sub-20ms inference latency per prediction request",
    ],
    architecture: [
      "Decoupled microservice architecture separating PyTorch inference backend from web client",
      "Temporal feature extraction: Hour, Minute, Day, Weekday, Month, Year for seasonal variations",
      "Real-time polling pipeline with min/max/average statistics and confidence indicators",
      "High-contrast dark mode dashboard built with Recharts area visualizations",
    ],
    github: "https://github.com/pranav172/smart-grid-ai",
    live: "https://smart-grid-ai.vercel.app",
  },
  {
    id: "url-shortener",
    title: "Scalable URL Shortener Backend",
    tagline: "Production-ready Base62 URL shortener with multi-tier Redis caching.",
    description:
      "A high-throughput URL shortening service built with FastAPI, PostgreSQL, and Redis. Features Base62 encoding, time-based link expiration, token-bucket rate limiting, and graceful degradation on database or cache network splits.",
    category: "systems",
    tech: ["Python", "FastAPI", "PostgreSQL", "Redis", "SQLAlchemy", "Docker", "Base62"],
    featured: false,
    systemDesignPrinciple: "Cache-Aside Pattern & Graceful Degradation",
    metrics: [
      "O(1) redirect lookups via Redis in-memory cache",
      "Base62 bi-directional ID compression",
      "Fully containerized with automated Docker Compose setup",
    ],
    architecture: [
      "Cache-aside pattern checking Redis prior to querying relational PostgreSQL tables",
      "Token-bucket rate limiting per IP to prevent scraping and denial-of-service",
      "Interactive OpenAPI/Swagger documentation with strict Pydantic payload validation",
    ],
    github: "https://github.com/pranav172/url-shortener-backend",
    live: "https://url-shortener-backend-fgyj.onrender.com",
    docs: "https://url-shortener-backend-fgyj.onrender.com/docs",
  },
  {
    id: "nn-visualizer",
    title: "Neural Network Visualizer & Trainer",
    tagline: "In-browser neural network design, training, and forward-pass inspection.",
    description:
      "An interactive client-side tool built with React, TypeScript, and TensorFlow.js that allows users to design, train, and inspect neural networks entirely in the browser. Features real-time activation color-coding, configurable hidden layers and learning rates, and live Chart.js metrics.",
    category: "ai",
    tech: ["React", "TypeScript", "TensorFlow.js", "Chart.js", "Vite", "IndexedDB"],
    featured: false,
    systemDesignPrinciple: "Zero-Backend Client-Side WebGL Inference & Persistence",
    metrics: [
      "Zero server overhead — 100% computed on client via TensorFlow.js",
      "Interactive datasets: XOR, Moons, Spiral, and custom distributions",
      "IndexedDB persistence for trained model weights",
    ],
    architecture: [
      "TensorFlow.js WebGL execution pipeline for client-side forward and backward passes",
      "Layer-by-layer forward-pass inspection exposing activation weights dynamically",
      "Chart.js integration for real-time loss and accuracy trajectory visualization",
    ],
    live: "https://nn-visualizer-zeta.vercel.app",
  },
  {
    id: "atsflow",
    title: "ATSFlow — AI Resume Optimization Platform",
    tagline: "Semantic ATS scoring and bullet optimization powered by RAG.",
    description:
      "An AI-powered resume optimization platform designed to beat applicant tracking systems. Features ATS scoring (0–100), semantic keyword gap analysis, job description matching, and dual-LLM workflows for structured resume refinement.",
    category: "ai",
    tech: ["FastAPI", "Next.js", "PostgreSQL", "RAG", "LangChain", "Docker", "TailwindCSS"],
    featured: false,
    systemDesignPrinciple: "Modular Microservices & Semantic RAG Pipeline",
    metrics: [
      "3 microservices containerized with Docker",
      "Semantic similarity scoring using embeddings and vector search",
      "Dual-AI synthesis for actionable feedback",
    ],
    architecture: [
      "PDF parsing and text chunking pipeline extracting structured skills and experience",
      "Embedding generation and cosine similarity matching against target job descriptions",
      "Containerized microservices enabling independent scaling of ingestion and inference",
    ],
    github: "https://github.com/pranav172/ATSFlow",
    live: "https://ats-flow.vercel.app",
  },
  {
    id: "collab-canvas",
    title: "Collaborative Canvas — Real-Time Drawing",
    tagline: "Multi-user drawing engine with authoritative server-side history.",
    description:
      "A real-time collaborative canvas built with TypeScript, Node.js, WebSockets, and HTML5 Canvas. A server-side room manager maintains authoritative stroke history and synchronizes complete canvas states to late-joining participants.",
    category: "fullstack",
    tech: ["TypeScript", "Node.js", "WebSockets", "HTML5 Canvas", "TailwindCSS"],
    featured: false,
    systemDesignPrinciple: "Authoritative Room State & Optimistic Local Rendering",
    metrics: [
      "50ms cursor throttling to preserve network bandwidth",
      "Sub-15ms broadcast latency across concurrent room peers",
      "Two-layer canvas decoupling active drawing from static background history",
    ],
    architecture: [
      "Authoritative room manager storing serialized stroke vectors and action sequences",
      "Optimistic local rendering drawing strokes immediately before server acknowledgement",
      "Touch gesture separation distinguishing pinch-to-scroll from active drawing strokes",
    ],
    github: "https://github.com/pranav172/flamAssignment",
  },
  {
    id: "invoice-fraud",
    title: "AI Invoice Fraud Detection",
    tagline: "OCR-driven deep learning pipeline for financial document fraud detection.",
    description:
      "An automated fraud detection and verification system built for invoice classification. Employs OCR extraction combined with transfer learning across CNN architectures (MobileNetV2, DenseNet121, EfficientNet) to identify manipulated invoices.",
    category: "ai",
    tech: ["Python", "TensorFlow", "Keras", "OpenCV", "MobileNetV2", "DenseNet121", "Kaggle"],
    event: "Deloitte Hackathon (Top 8 / 300 Teams)",
    featured: false,
    systemDesignPrinciple: "Transfer Learning & Multi-Stage Document Verification",
    metrics: [
      "84%+ validation accuracy on fraudulent invoice identification",
      "Top 8 Finalist out of 300+ competing engineering teams",
    ],
    architecture: [
      "OCR pipeline extracting tabular line items, tax IDs, and vendor headers",
      "Transfer learning feature extractor classifying visual tampering patterns",
    ],
    kaggle: "https://www.kaggle.com/code/pranav1718/invoicefrauddetection",
  },
  {
    id: "violence-detection",
    title: "Spatial-Temporal Video Violence Detection",
    tagline: "Published deep learning pipeline combining MobileNetV2 with BiLSTM.",
    description:
      "A video classification pipeline using PyTorch, MobileNetV2, and Bi-directional LSTM for spatial-temporal feature learning across video streams. Achieved 94% test accuracy across 2,000+ benchmark videos. Accepted for publication in Springer LNNS (ICT4SD 2026) and awarded Best Major Project.",
    category: "ai",
    tech: ["PyTorch", "Python", "MobileNetV2", "BiLSTM", "OpenCV", "NumPy"],
    event: "Springer LNNS (ICT4SD 2026) & Best Major Project Award",
    featured: false,
    systemDesignPrinciple: "Spatial-Temporal Feature Fusion for Real-Time Video",
    metrics: [
      "94% test accuracy across 2,000+ benchmark video clips",
      "Accepted at Springer LNNS (ICT4SD 2026)",
      "Best Major Project Award",
    ],
    architecture: [
      "MobileNetV2 extracts spatial frame-level embeddings with low computational overhead",
      "BiLSTM processes temporal frame sequences capturing forward and backward action dynamics",
    ],
    github: "https://github.com/pranav172/RealTimeVoilenceDetection",
  },
  {
    id: "muj-gpt",
    title: "MUJ-GPT — Campus RAG Assistant",
    tagline: "Retrieval-augmented campus assistant grounded in university documents.",
    description:
      "A university-specific RAG assistant built with LangChain, FAISS, and Llama 3.3 70B on Groq. Ingests university policy documents, academic calendars, and course handbooks to answer student queries with source-grounded citations.",
    category: "ai",
    tech: ["Python", "LangChain", "FAISS", "Groq", "Llama 3.3", "HuggingFace"],
    featured: false,
    systemDesignPrinciple: "Source-Grounded Semantic Search & Document Chunking",
    metrics: [
      "Sub-second response time via Groq hardware acceleration",
      "Zero-hallucination policy answers through grounded context embeddings",
    ],
    architecture: [
      "PDF document ingestion and recursive text chunking with HuggingFace embeddings",
      "FAISS similarity index retrieving relevant paragraphs for prompt grounding",
    ],
    github: "https://github.com/pranav172/MUJ-GPT",
  },
];
