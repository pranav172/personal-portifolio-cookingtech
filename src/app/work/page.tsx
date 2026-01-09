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
      <h1 className="text-2xl sm:text-3xl font-semibold tracking-tight mb-2 sm:mb-3">Projects</h1>
      
      {skillFilter ? (
        <p className="text-muted/80 text-sm sm:text-base mb-8 sm:mb-10">
          Showing projects with <span className="text-foreground font-medium">{skillFilter}</span>
          {' · '}
          <a href="/work" className="text-foreground hover:text-accent hover:underline underline-offset-4 transition-colors">Show all</a>
        </p>
      ) : (
        <p className="text-muted/80 text-sm sm:text-base mb-10 sm:mb-12">
          Selected projects across machine learning, backend systems, and problem solving.
        </p>
      )}
      
      {filteredProjects.length === 0 ? (
        <p className="text-muted">No projects found with this skill.</p>
      ) : (
        <div className="space-y-8 sm:space-y-10">
          {filteredProjects.map((project) => (
            <article key={project.id}>
              {/* Title with optional Featured label */}
              <h2 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3">
                {project.title}
                {project.featured && (
                  <span className="text-muted/60 text-sm font-normal ml-2">· Featured</span>
                )}
              </h2>
              
              {/* Description */}
              <p className="text-muted/80 text-sm sm:text-base leading-relaxed mb-2">
                {project.description}
              </p>
              
              {/* Tech Stack - quieter metadata */}
              <div className="text-[13px] sm:text-sm text-muted/70 mb-2">
                {project.tech.join(' · ')}
              </div>
              
              {/* Links - arrow style */}
              <div className="flex gap-4 text-[13px] sm:text-sm">
                {project.github && (
                  <a 
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground hover:text-accent hover:underline underline-offset-4 transition-colors"
                  >
                    → GitHub
                  </a>
                )}
                {project.live && (
                  <a 
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground hover:text-accent hover:underline underline-offset-4 transition-colors"
                  >
                    → Live Demo
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

