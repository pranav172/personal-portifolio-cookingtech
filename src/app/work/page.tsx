'use client';

import { useState } from "react";
import { projects, ProjectCategory, Project } from "@/lib/projects";

export default function WorkPage() {
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>("all");
  const [expandedArchitectures, setExpandedArchitectures] = useState<Record<string, boolean>>({
    niyam: true, // Default expand NIYAM as primary showcase
  });

  const toggleArchitecture = (id: string) => {
    setExpandedArchitectures((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const filteredProjects = selectedCategory === "all"
    ? projects
    : projects.filter((p) => p.category === selectedCategory);

  const categories: { label: string; value: ProjectCategory }[] = [
    { label: "All Projects", value: "all" },
    { label: "Distributed Systems & Backend", value: "systems" },
    { label: "AI Governance & ML", value: "ai" },
    { label: "Full-Stack & Tools", value: "fullstack" },
  ];

  return (
    <div className="px-4 sm:px-6 py-10 sm:py-14 max-w-3xl mx-auto space-y-8 animate-in">
      {/* Header */}
      <div>
        <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
          Engineering Projects &amp; Systems
        </h1>
        <p className="text-xs sm:text-sm text-muted mt-1 leading-relaxed">
          Production-grade systems, deterministic AI gateways, distributed task orchestrators, and research prototypes.
        </p>
      </div>

      {/* Category Filter Pills */}
      <div className="flex flex-wrap gap-2 pt-1 border-b border-border/50 pb-4">
        {categories.map((cat) => {
          const isSelected = selectedCategory === cat.value;
          return (
            <button
              key={cat.value}
              onClick={() => setSelectedCategory(cat.value)}
              className={`text-xs px-3 py-1.5 rounded-full transition-all duration-150 font-medium ${
                isSelected
                  ? "bg-foreground text-background shadow-xs font-semibold"
                  : "bg-foreground/[0.04] text-muted hover:text-foreground hover:bg-foreground/[0.08]"
              }`}
            >
              {cat.label}
            </button>
          );
        })}
      </div>

      {/* Projects List */}
      <div className="space-y-8">
        {filteredProjects.map((project: Project) => {
          const isExpanded = !!expandedArchitectures[project.id];
          return (
            <article
              key={project.id}
              className="card-minimal p-5 sm:p-6 space-y-4"
            >
              {/* Card Header */}
              <div className="space-y-1.5">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                  <div className="flex flex-wrap items-center gap-2">
                    <h2 className="text-base sm:text-lg font-bold text-foreground">
                      {project.title}
                    </h2>
                    {project.event && (
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-accent/15 text-accent font-semibold">
                        {project.event}
                      </span>
                    )}
                  </div>
                  {/* Action Links */}
                  <div className="flex items-center gap-3 text-xs flex-wrap">
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-accent hover:underline font-semibold"
                      >
                        Live Demo ↗
                      </a>
                    )}
                    {project.docs && (
                      <a
                        href={project.docs}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted hover:text-foreground hover:underline"
                      >
                        API Docs ↗
                      </a>
                    )}
                    {project.kaggle && (
                      <a
                        href={project.kaggle}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-accent hover:underline"
                      >
                        Kaggle ↗
                      </a>
                    )}
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-foreground hover:text-accent hover:underline font-medium"
                      >
                        GitHub →
                      </a>
                    )}
                  </div>
                </div>

                <p className="text-xs text-accent/90 font-mono">
                  {project.tagline}
                </p>
              </div>

              {/* Description */}
              <p className="text-xs sm:text-sm text-muted leading-relaxed">
                {project.description}
              </p>

              {/* System Design Principle Callout */}
              {project.systemDesignPrinciple && (
                <div className="text-xs bg-foreground/[0.03] border-l-2 border-accent pl-3 py-1.5 text-foreground/90 font-mono">
                  <span className="text-muted">Core Principle:</span>{" "}
                  <strong>{project.systemDesignPrinciple}</strong>
                </div>
              )}

              {/* Key Metrics / Highlights */}
              {project.metrics && project.metrics.length > 0 && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-[11px] text-foreground/80 bg-foreground/[0.02] p-3 rounded border border-border/40">
                  {project.metrics.map((metric, idx) => (
                    <div key={idx} className="flex items-center gap-1.5">
                      <span className="text-accent font-bold">✓</span>
                      <span>{metric}</span>
                    </div>
                  ))}
                </div>
              )}

              {/* Architecture Drawer / Toggle */}
              {project.architecture && project.architecture.length > 0 && (
                <div className="pt-1">
                  <button
                    onClick={() => toggleArchitecture(project.id)}
                    className="text-[11px] text-muted hover:text-foreground inline-flex items-center gap-1 underline underline-offset-4 cursor-pointer"
                  >
                    <span>{isExpanded ? "▾ Hide Architecture Details" : "▸ Show Architectural Breakdown"}</span>
                  </button>

                  {isExpanded && (
                    <ul className="mt-2.5 space-y-1.5 pl-4 list-disc text-xs text-muted leading-relaxed border-t border-border/30 pt-2.5">
                      {project.architecture.map((item, idx) => (
                        <li key={idx} className="text-foreground/90">
                          {item}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              )}

              {/* Tech Stack Tags */}
              <div className="flex flex-wrap gap-1.5 pt-1">
                {project.tech.map((t) => (
                  <span key={t} className="tag-badge text-[11px]">
                    {t}
                  </span>
                ))}
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
}
