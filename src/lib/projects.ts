export interface Project {
  id: string;
  title: string;
  description: string;
  details?: string;
  tech: string[];
  github?: string;
  live?: string;
  docs?: string;
  kaggle?: string;
  featured?: boolean;
  architecture?: string;
  badge?: string;
  year?: string;
  status?: string;
}

export const projects: Project[] = [
  {
    id: "niyam",
    title: "NIYAM",
    description: "Policy enforcement gateway between AI agents and Razorpay payment rails.",
    details: "Built with FastAPI. Uses deterministic rules and schemas to verify payment requests with sub-millisecond latency. Features HMAC validation, token-bucket rate limiting, and circuit breaker.",
    tech: ["Python", "FastAPI", "Razorpay MCP", "Redis", "Pytest"],
    github: "https://github.com/pranav172/niyam",
    live: "https://niyam-gateway.onrender.com",
    docs: "https://niyam-gateway.onrender.com/docs",
    featured: true,
    badge: "Razorpay AI Buildathon",
    year: "2026",
    status: "Live",
    architecture: `AI Agent ──► [ NIYAM Gateway ] ──► [ Razorpay API ]
                    │
                    ▼ (Rule check, HMAC, rate limiting)
               [ Redis / Log ]`,
  },
  {
    id: "violence-detection",
    title: "Real-Time Violence Detection",
    description: "Video classification research accepted at Springer LNNS (ICT4SD 2026).",
    details: "Combines MobileNetV2 spatial embeddings with Bi-LSTM temporal sequence modeling to detect violent actions in surveillance footage with 94% accuracy.",
    tech: ["Python", "TensorFlow", "Keras", "OpenCV", "Bi-LSTM"],
    github: "https://github.com/pranav172/RealTimeVoilenceDetection/tree/main",
    featured: true,
    badge: "Accepted · Springer LNNS 2026",
    year: "2026",
    status: "Research",
  },
  {
    id: "invoice-fraud-detection",
    title: "Invoice Fraud Detection",
    description: "Deep learning pipeline for detecting tampered invoices using computer vision.",
    details: "Uses computer vision and transfer learning with Error Level Analysis (ELA) to identify visual tampering and font inconsistencies in scanned receipts.",
    tech: ["Python", "TensorFlow", "OpenCV", "Keras"],
    kaggle: "https://www.kaggle.com/code/pranav1718/invoicefrauddetection",
    featured: true,
    badge: "Top 8 · Deloitte Hackathon",
    year: "2024",
    status: "Award",
  },
  {
    id: "muj-gpt",
    title: "MUJ-GPT",
    description: "Campus assistant using RAG and semantic retrieval over university documents.",
    details: "Indexes academic circulars, syllabus PDFs, and schedules using FAISS vector search and LangChain, querying Groq/Llama for grounded student answers.",
    tech: ["Python", "LangChain", "FAISS", "Groq", "FastAPI"],
    github: "https://github.com/pranav172/MUJ-GPT",
    featured: true,
    year: "2025",
    status: "Campus",
    architecture: `User Query ──► [ Embedding ] ──► [ FAISS Search ] ──► [ LLM (Groq) ] ──► Answer`,
  },
  {
    id: "collab-canvas",
    title: "Collaborative Canvas",
    description: "Real-time multiplayer drawing board with server-authoritative state.",
    details: "Built with WebSockets and HTML5 Canvas. Includes optimistic local rendering, 50ms cursor throttling, and state sync for late joiners.",
    tech: ["TypeScript", "Node.js", "WebSockets", "HTML5 Canvas"],
    github: "https://github.com/pranav172/flamAssignment",
    featured: false,
    year: "2025",
    status: "Open Source",
    architecture: `Client A ──(WebSocket)──► [ Node.js Server ] ──► Client B, C
   │ (optimistic render)         │ (broadcast)
   ▼                             ▼
 Canvas                       Canvas`,
  },
  {
    id: "atlas",
    title: "Atlas Job Orchestrator",
    description: "Distributed task execution system with priority queues and state machines.",
    details: "Implements non-blocking 202 Accepted ingestion, state transitions (PENDING, RUNNING, SUCCESS, FAILED), automated retries with exponential backoff, and PostgreSQL/Redis storage.",
    tech: ["Python", "FastAPI", "PostgreSQL", "Redis", "Docker"],
    github: "https://github.com/pranav172/Cloud-Data-Integration-Platform-",
    featured: false,
    year: "2025",
    status: "System",
  },
  {
    id: "blast-radius",
    title: "Blast Radius",
    description: "AI governance proxy evaluating risk tiers and enforcing safety constraints.",
    details: "Routes AI requests across 4 consequence tiers so heavier safety checks run only on high-risk operations. Includes PII redaction and audit receipts.",
    tech: ["TypeScript", "React", "Node.js", "Vite"],
    github: "https://github.com/pranav172/blastRadius",
    featured: false,
    badge: "Accenture Challenge",
    year: "2025",
    status: "Hackathon",
  },
  {
    id: "url-shortener",
    title: "URL Shortener",
    description: "Backend link shortening service built with FastAPI, PostgreSQL, and Redis.",
    details: "Features rate limiting, Base62 encoding, and graceful fallback to the database if Redis is unavailable.",
    tech: ["Python", "FastAPI", "PostgreSQL", "Redis"],
    github: "https://github.com/pranav172/url-shortener-backend",
    live: "https://url-shortener-backend-fgyj.onrender.com",
    docs: "https://url-shortener-backend-fgyj.onrender.com/docs",
    featured: false,
    year: "2025",
    status: "Live",
  },
  {
    id: "atsflow",
    title: "ATSFlow",
    description: "Resume optimization tool comparing resumes against job descriptions.",
    details: "Scores keywords and analyzes skill gaps using LLMs to suggest improvements for job applications.",
    tech: ["Next.js", "TypeScript", "PostgreSQL", "Groq"],
    github: "https://github.com/pranav172/ATSFlow",
    live: "https://ats-flow.vercel.app",
    featured: false,
    year: "2025",
    status: "Live",
  },
  {
    id: "oxtrack",
    title: "OxTrack",
    description: "Job application tracker and personal CRM for software engineers.",
    details: "Kanban pipeline for managing recruiter contacts, applications, and interview preparation notes.",
    tech: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    github: "https://github.com/pranav172/oxTrack",
    featured: false,
    year: "2024",
    status: "Live",
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.id === slug);
}
