export interface Article {
  slug: string;
  title: string;
  summary: string;
  date: string;
  readTime: string;
  content: string[];
}

export const articles: Article[] = [
  {
    slug: "realtime-canvas-websockets",
    title: "Notes on Real-Time Canvas with WebSockets",
    summary: "Managing stroke interpolation, cursor throttling, and state sync across clients.",
    date: "2026",
    readTime: "3 min read",
    content: [
      "When building a multiplayer canvas, drawing directly from incoming WebSocket packets leads to jitter whenever the network fluctuates.",
      "The simplest approach that worked well was optimistic local rendering: paint the stroke immediately on the local canvas, and batch pointer coordinates every 50ms before transmitting them over WebSockets.",
      "To prevent lines from looking sharp or broken when packets arrive in chunks, quadratic Bézier curves smooth the points between coordinate batches. For late joiners, keeping an in-memory stroke history on the server and replaying it upon connection maintains state parity without transmitting image bitmaps."
    ]
  },
  {
    slug: "rag-document-retrieval",
    title: "Notes on RAG & Vector Retrieval",
    summary: "Practical takeaways from building a campus document retrieval system.",
    date: "2025",
    readTime: "3 min read",
    content: [
      "Most retrieval failures in RAG systems stem from bad chunking rather than model limitations. When indexing university circulars and schedules, fixed-size token splitting often bisects critical tables or rule lists.",
      "Preprocessing documents to preserve table structure (such as converting bounding boxes to markdown tables) significantly improved embedding similarity matches.",
      "For small to medium datasets (~1,000 documents), an in-memory FAISS flat index provides near-instant search (<10ms) without the overhead or cost of running an external vector database."
    ]
  }
];

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}
