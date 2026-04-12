export interface FunProject {
  id: string;
  name: string;
  emoji: string;
  tagline: string;
  description: string;
  tech: string[];
  github?: string;
  live?: string;
  huggingface?: string;
}

export const funProjects: FunProject[] = [
  {
    id: 'mujanon',
    name: 'mujAnon',
    emoji: '💬',
    tagline: 'MUJ needed honest college talks without the social baggage.',
    description:
      'Anonymous 1-on-1 chat, swipeable confession wall, and group rooms for MUJ students. Real-time via Firebase RTDB, shadowban system, and a content moderation layer.',
    tech: ['Next.js', 'Firebase', 'TypeScript', 'PWA'],
    github: 'https://github.com/pranav172/mujanon',
    live: 'https://mujanon.vercel.app',
  },
  {
    id: 'ai-budget-coach',
    name: 'AI Budget Coach',
    emoji: '💰',
    tagline: 'Students needed brutal financial honesty, not another pretty banking app.',
    description:
      'PWA that uses Llama 3 (Groq) to generate monthly spending report cards, flag bad habits, and surface savings opportunities — designed for broke Indian students.',
    tech: ['Next.js', 'PostgreSQL', 'Groq', 'Prisma', 'Lucia Auth'],
    github: 'https://github.com/pranav172/ai-budget-coach',
    live: 'https://ai-budget-coach-mu.vercel.app',
  },
  {
    id: 'nn-visualizer',
    name: 'Neural Network Visualizer',
    emoji: '🧠',
    tagline: 'I wanted to actually see what happens inside a neural net while it trains.',
    description:
      'Browser-based tool to design, train, and observe neural networks. Color-coded activations, live loss/accuracy charts, dataset playground (XOR, moons, spiral) — no backend required.',
    tech: ['React', 'TensorFlow.js', 'Vite', 'TypeScript', 'Chart.js'],
    live: 'https://nn-visualizer-zeta.vercel.app',
  },
  {
    id: 'sentiment-analyzer',
    name: 'Twitter Sentiment Analyzer',
    emoji: '📊',
    tagline: 'My first end-to-end ML deploy. Picked Twitter data because tweets are hilariously extreme.',
    description:
      'Logistic regression + TF-IDF trained on 100k Sentiment140 tweets, achieving ~77% macro F1. Deployed on Hugging Face Spaces with a Gradio interface.',
    tech: ['Python', 'scikit-learn', 'Gradio', 'Hugging Face'],
    live: 'https://huggingface.co/spaces/CookingML/sentiment-analyzer',
  },
  {
    id: 'plum-claims',
    name: 'Plum OPD Claims AI',
    emoji: '🏥',
    tagline: 'Curious whether you could replace an insurance adjudicator with OCR + LLM logic.',
    description:
      'Upload a medical bill → Gemini Vision extracts text → Groq Llama adjudicates through a 6-step rule engine (eligibility, fraud, limits). Surprisingly accurate on real receipts.',
    tech: ['Next.js', 'Gemini Vision', 'Groq', 'TypeScript'],
    github: 'https://github.com/pranav172/plumCode',
    live: 'https://plum-code.vercel.app',
  },
  {
    id: 'smart-grid',
    name: 'Smart Grid AI',
    emoji: '⚡',
    tagline: 'Wanted to deploy a real PyTorch model and watch predictions stream live in the browser.',
    description:
      'FastAPI + PyTorch energy load forecaster backed by PJME dataset. React dashboard with a 2-second polling loop, glassmorphism UI, and confidence meter.',
    tech: ['FastAPI', 'PyTorch', 'React', 'Vite', 'Render'],
    live: 'https://smart-grid-ai.vercel.app',
  },
  {
    id: 'muj-gpt',
    name: 'MUJ-GPT',
    emoji: '✨',
    tagline: 'MUJ needed a chatbot that talks like a helpful senior, not a corporate FAQ bot.',
    description:
      'RAG chatbot backed by FAISS + LangChain that reads MUJ PDFs (academic calendar, mess menu, syllabus) and answers in Hinglish tone via Llama 3.3 on Groq.',
    tech: ['Python', 'LangChain', 'FAISS', 'Groq', 'Streamlit'],
  },
];
