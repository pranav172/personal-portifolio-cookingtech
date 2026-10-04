export interface FunProject {
  id: string;
  name: string;
  emoji: string;
  quote: string;
  description: string;
  tech: string[];
  year: string;
  wiggle?: number;
  github?: string;
  live?: string;
  huggingface?: string;
}

export const funProjects: FunProject[] = [
  {
    id: "mujanon",
    name: "mujAnon",
    emoji: "🎭",
    year: "2026",
    wiggle: -12,
    quote: "MUJ needed honest college talks without the social baggage.",
    description: "Anonymous 1-on-1 chat and confession wall for university students with real-time Firebase syncing.",
    tech: ["Next.js", "Firebase", "TypeScript"],
    github: "https://github.com/pranav172/mujanon",
    live: "https://mujanon.vercel.app",
  },
  {
    id: "collab-canvas",
    name: "Collaborative Canvas",
    emoji: "🎨",
    year: "2025",
    wiggle: 10,
    quote: "What if an entire drawing app was one WebSocket event loop?",
    description: "Multiplayer drawing canvas using WebSockets, server-authoritative rooms, and HTML5 Canvas.",
    tech: ["TypeScript", "Node.js", "WebSockets"],
    github: "https://github.com/pranav172/flamAssignment",
  },
  {
    id: "nn-visualizer",
    name: "Neural Network Visualizer",
    emoji: "🧠",
    year: "2025",
    wiggle: -8,
    quote: "Watching weights update in real-time makes gradient descent click instantly.",
    description: "Interactive in-browser tool to build, train, and watch feedforward neural networks learn using TensorFlow.js.",
    tech: ["React", "TensorFlow.js", "TypeScript"],
    live: "https://nn-visualizer-zeta.vercel.app",
  },
  {
    id: "ai-budget-coach",
    name: "AI Budget Coach",
    emoji: "💸",
    year: "2025",
    wiggle: 14,
    quote: "Automating monthly expenses without leaking credentials to a bank scraper.",
    description: "PWA that parses bank statements and categorizes spending habits using Llama 3 on Groq.",
    tech: ["Next.js", "PostgreSQL", "Groq"],
    github: "https://github.com/pranav172/ai-budget-coach",
    live: "https://ai-budget-coach-mu.vercel.app",
  },
  {
    id: "smart-grid",
    name: "Smart Grid AI",
    emoji: "⚡",
    year: "2025",
    wiggle: -10,
    quote: "Predicting campus power spikes so sub-stations don't trip during exams.",
    description: "Energy load forecasting model built with PyTorch and served with FastAPI.",
    tech: ["FastAPI", "PyTorch", "React"],
    github: "https://github.com/pranav172/smart-grid-ai",
    live: "https://smart-grid-ai.vercel.app",
  },
  {
    id: "plum-claims",
    name: "Plum Claims AI",
    emoji: "🏥",
    year: "2024",
    wiggle: 8,
    quote: "Nobody likes deciphering handwritten hospital receipts.",
    description: "Medical bill text extraction and rule verification prototype using Gemini Vision and Groq.",
    tech: ["Next.js", "Gemini Vision", "TypeScript"],
    github: "https://github.com/pranav172/plumCode",
    live: "https://plum-code.vercel.app",
  },
  {
    id: "sentiment-analyzer",
    name: "Twitter Sentiment Analyzer",
    emoji: "📊",
    year: "2024",
    wiggle: -14,
    quote: "Testing how well classic logistic regression holds up against modern tweets.",
    description: "Logistic regression model trained on Sentiment140, deployed on Hugging Face Spaces.",
    tech: ["Python", "scikit-learn", "Gradio"],
    live: "https://huggingface.co/spaces/CookingML/sentiment-analyzer",
  },
];
