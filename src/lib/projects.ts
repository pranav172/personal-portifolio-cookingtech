export interface Project {
  id: string;
  title: string;
  description: string;
  tech: string[];
  github?: string;
  live?: string;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    id: "backend-systems",
    title: "Backend Systems",
    description: "Designed and implemented backend services exploring database design, caching strategies, and API architecture, with a focus on performance trade-offs and scalability.",
    tech: ["Node.js", "PostgreSQL", "Redis"],
    github: "https://github.com/pranavraj/backend-systems",
    live: "https://api-demo.pranavraj.dev",
  },
  {
    id: "violence-detection",
    title: "Violence Detection in Videos",
    description: "Built a CNN-based real-time violence detection pipeline with staged alarms, addressing data imbalance, false positives, and deployment constraints.",
    tech: ["Python", "TensorFlow", "OpenCV"],
    github: "https://github.com/pranavraj/violence-detection",
    live: "https://violence-detection-demo.vercel.app",
    featured: true,
  },
  {
    id: "ml-experiments",
    title: "ML Experiments",
    description: "A collection of experiments with transformers, CNNs, and reinforcement learning, documenting attention mechanisms and training dynamics.",
    tech: ["Python", "PyTorch", "NumPy"],
    github: "https://github.com/pranavraj/ml-experiments",
  },
];

