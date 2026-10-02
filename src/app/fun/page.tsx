import { funProjects } from "@/lib/fun-projects";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Fun Projects — Pranav Raj",
  description:
    "Experiments, side projects, and things I built for the joy of it.",
};

export default function FunPage() {
  return (
    <div className="px-4 sm:px-6 py-12 sm:py-16 max-w-3xl mx-auto">
      <h1 className="text-2xl sm:text-3xl font-semibold tracking-tight mb-2 animate-in">
        Fun Projects
      </h1>
      <p className="text-muted/80 text-sm sm:text-base mb-10 sm:mb-12 animate-in delay-1">
        Things I built because I was curious, bored, or mildly annoyed something
        didn&apos;t exist yet.
      </p>

      <div className="space-y-10 sm:space-y-12">
        {funProjects.map((project, i) => (
          <article
            key={project.id}
            className={`animate-in delay-${Math.min(i + 2, 6)}`}
          >
            {/* Name */}
            <h2 className="text-base sm:text-lg font-semibold mb-1">
              <span className="mr-1.5">{project.emoji}</span>
              {project.name}
            </h2>

            {/* Why I built it */}
            <p className="text-[13px] sm:text-sm text-accent/80 italic mb-2 leading-relaxed">
              &ldquo;{project.tagline}&rdquo;
            </p>

            {/* Description */}
            <p className="text-muted/80 text-sm sm:text-base leading-relaxed mb-2">
              {project.description}
            </p>

            {/* Tech */}
            <div className="text-[12px] sm:text-[13px] text-muted/50 mb-3">
              {project.tech.join(" · ")}
            </div>

            {/* Links */}
            <div className="flex flex-wrap gap-4 text-[13px] sm:text-sm">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground hover:text-accent hover:underline underline-offset-4 transition-colors duration-200"
                >
                  → GitHub
                </a>
              )}
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground hover:text-accent hover:underline underline-offset-4 transition-colors duration-200"
                >
                  → Live
                </a>
              )}
              {project.huggingface && (
                <a
                  href={project.huggingface}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground hover:text-accent hover:underline underline-offset-4 transition-colors duration-200"
                >
                  → Hugging Face
                </a>
              )}
            </div>

            {/* Divider — except last item */}
            {i < funProjects.length - 1 && (
              <div className="mt-10 sm:mt-12 h-px bg-foreground/5" />
            )}
          </article>
        ))}
      </div>
    </div>
  );
}
