export interface Project {
  id: string;
  title: string;
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
    id: "atsflow",
    title: "ATSFlow (Resume Optimization Platform)",
    description: "AI-powered resume optimization that beats applicant tracking systems. Features ATS scoring (0-100), keyword gap analysis, job description matching, and dual-AI optimization using Gemini + Groq for intelligent resume improvements.",
    tech: ["Next.js", "TypeScript", "PostgreSQL", "Clerk Auth", "Gemini AI", "Groq/LLaMA", "Drizzle ORM", "TailwindCSS"],
    github: "https://github.com/pranav172/ATSFlow",
    live: "https://ats-flow.vercel.app",
    featured: true,
  },
  {
    id: "url-shortener",
    title: "Scalable URL Shortener (Backend System)",
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
    description: "End-to-end deep learning system for detecting fraudulent invoices using transfer learning. Generated synthetic fraud data, compared CNN architectures, and deployed via Streamlit.",
    tech: ["Python", "TensorFlow", "Keras", "OpenCV", "Streamlit", "Kaggle"],
    kaggle: "https://www.kaggle.com/code/pranav1718/invoicefrauddetection",
    featured: true,
  },
  {
    id: "violence-detection",
    title: "Violence Detection in Videos (Deep Learning)",
    description: "Video classification pipeline using MobileNetV2 + Bi-LSTM for temporal dynamics. Achieves 94% accuracy with frame-level and full-video inference capabilities.",
    tech: ["Python", "TensorFlow", "Keras", "OpenCV", "NumPy", "Matplotlib"],
    github: "https://github.com/pranav172/RealTimeVoilenceDetection/tree/main",
  },
];

