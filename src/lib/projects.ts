export interface Project {
  id: string;
  title: string;
  description: string;
  tech: string[];
  github?: string;
  live?: string;
}

export const projects: Project[] = [
  {
    id: "violence-detection",
    title: "Violence Detection in Videos",
    description: "CNN-based pipeline for real-time violence detection with staged alarms. Explored data imbalance, false positives, and deployment challenges.",
    tech: ["Python", "TensorFlow", "OpenCV"],
    github: "https://github.com/pranavraj/violence-detection",
    live: "https://violence-detection-demo.vercel.app",
  },
  {
    id: "ml-experiments",
    title: "ML Experiments",
    description: "Collection of experiments with transformers, CNNs, and reinforcement learning. Documented attention mechanisms and training dynamics.",
    tech: ["Python", "PyTorch", "NumPy"],
    github: "https://github.com/pranavraj/ml-experiments",
  },
  {
    id: "backend-systems",
    title: "Backend Systems",
    description: "Various backend services exploring database design, caching patterns, and API architecture. Documented performance bottlenecks and trade-offs.",
    tech: ["Node.js", "PostgreSQL", "Redis"],
    github: "https://github.com/pranavraj/backend-systems",
    live: "https://api-demo.pranavraj.dev",
  },
];
