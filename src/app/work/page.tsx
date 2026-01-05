'use client';

import { projects } from "@/lib/projects";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

function ProjectsList() {
  const searchParams = useSearchParams();
  const skillFilter = searchParams.get('skill');
  
  const filteredProjects = skillFilter 
    ? projects.filter(p => p.tech.some(t => t.toLowerCase() === skillFilter.toLowerCase()))
    : projects;

  return (
    <div className="px-4 sm:px-6 py-12 sm:py-16 max-w-2xl mx-auto">
      <h1 className="text-2xl sm:text-3xl font-semibold tracking-tight mb-3 sm:mb-4">Projects</h1>
      
      {skillFilter ? (
        <p className="text-muted text-sm sm:text-base mb-8 sm:mb-12">
          Showing projects with <span className="text-foreground font-medium">{skillFilter}</span>
          {' · '}
          <a href="/work" className="text-foreground hover:text-accent hover:underline underline-offset-4 transition-colors">Show all</a>
        </p>
      ) : (
        <p className="text-muted text-sm sm:text-base mb-12 sm:mb-16">
          Experiments in ML, systems, and problem-solving.
        </p>
      )}
      
      {filteredProjects.length === 0 ? (
        <p className="text-muted">No projects found with this skill.</p>
      ) : (
        <div className="space-y-12 sm:space-y-16">
          {filteredProjects.map((project) => (
            <article key={project.id}>
              <h2 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3">{project.title}</h2>
              
              <p className="text-muted text-sm sm:text-base leading-relaxed mb-3 sm:mb-4">
                {project.description}
              </p>
              
              {/* Tech - clickable */}
              <div className="flex flex-wrap gap-2 text-xs sm:text-sm mb-3 sm:mb-4">
                {project.tech.map((t, i) => (
                  <span key={t}>
                    <a 
                      href={`/work?skill=${encodeURIComponent(t)}`}
                      className="text-foreground hover:text-accent hover:underline underline-offset-4 transition-colors"
                    >
                      {t}
                    </a>
                    {i < project.tech.length - 1 && <span className="text-muted"> · </span>}
                  </span>
                ))}
              </div>
              
              {/* Links */}
              <div className="flex gap-4 sm:gap-6 text-sm">
                {project.github && (
                  <a 
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground hover:text-accent hover:underline underline-offset-4 transition-colors"
                  >
                    GitHub
                  </a>
                )}
                {project.live && (
                  <a 
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground hover:text-accent hover:underline underline-offset-4 transition-colors"
                  >
                    Live
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      )}
    </div>
  );
}

export default function WorkPage() {
  return (
    <Suspense fallback={
      <div className="px-4 sm:px-6 py-12 sm:py-16 max-w-2xl mx-auto">
        <h1 className="text-2xl sm:text-3xl font-semibold tracking-tight mb-4">Projects</h1>
        <p className="text-muted">Loading...</p>
      </div>
    }>
      <ProjectsList />
    </Suspense>
  );
}
