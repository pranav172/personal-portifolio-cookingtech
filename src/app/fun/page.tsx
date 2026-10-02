import { funProjects } from "@/lib/fun-projects";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Fun Projects — Pranav Raj",
  description: "Experiments, side projects, and tools built out of curiosity.",
};

export default function FunPage() {
  return (
    <div className="px-4 sm:px-6 py-10 sm:py-14 max-w-3xl mx-auto space-y-8 animate-in">
      <div>
        <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
          Experiments &amp; Explorations
        </h1>
        <p className="text-xs sm:text-sm text-muted mt-1 leading-relaxed">
          Side projects built for campus utility, curiosity, and rapid product prototyping.
        </p>
      </div>

      <div className="space-y-4">
        {funProjects.map((project) => (
          <article
            key={project.id}
            className="card-minimal p-5 space-y-2.5"
          >
            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
              <h2 className="text-sm sm:text-base font-semibold text-foreground flex items-center gap-1.5">
                <span>{project.emoji}</span>
                <span>{project.name}</span>
              </h2>

              <div className="flex items-center gap-3 text-xs">
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
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground hover:text-accent hover:underline"
                  >
                    GitHub →
                  </a>
                )}
                {project.huggingface && (
                  <a
                    href={project.huggingface}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent hover:underline"
                  >
                    HuggingFace ↗
                  </a>
                )}
              </div>
            </div>

            <p className="text-xs text-accent/90 italic font-mono">
              &ldquo;{project.tagline}&rdquo;
            </p>

            <p className="text-xs sm:text-sm text-muted leading-relaxed">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-1.5 pt-1">
              {project.tech.map((t) => (
                <span key={t} className="tag-badge text-[10px]">
                  {t}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
