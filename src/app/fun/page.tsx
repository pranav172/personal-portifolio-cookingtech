import { funProjects } from "@/lib/fun-projects";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Fun — Pranav Raj",
  description: "Stuff I built at 2am instead of sleeping.",
};

export default function FunPage() {
  const countStr = String(funProjects.length).padStart(2, "0");

  return (
    <div className="max-w-xl mx-auto px-4 sm:px-6 py-16 sm:py-24 space-y-10">
      <header className="space-y-2 stagger-1">
        <div className="flex items-center justify-between">
          <h1 className="text-xl sm:text-2xl font-semibold tracking-tight text-foreground">
            Fun
          </h1>
          <span className="text-xs font-mono text-muted">
            {countStr} experiments
          </span>
        </div>
        <p className="text-[14px] text-secondary">
          Stuff I built at 2am instead of sleeping.
        </p>
      </header>

      {/* ── Direction A: Big-type index with hover reveal ── */}
      <ul className="fun-list stagger-2">
        {funProjects.map((project) => (
          <li
            key={project.id}
            tabIndex={0}
            className="fun-row group first:border-t-0 focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2 rounded-xs"
            style={{ "--wiggle": `${project.wiggle ?? -12}deg` } as React.CSSProperties}
          >
            <div className="fun-line">
              <span className="fun-emoji" aria-hidden="true">
                {project.emoji}
              </span>
              <h2>{project.name}</h2>
              <span className="fun-year">{project.year} ↗</span>
            </div>

            <div className="fun-more">
              <div className="space-y-2 pt-2">
                {/* Quote */}
                {project.quote && (
                  <p className="text-[13.5px] italic text-secondary leading-snug">
                    &ldquo;{project.quote}&rdquo;
                  </p>
                )}

                {/* Tech & Links on single line */}
                <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs font-mono text-muted pt-1">
                  <span>{project.tech.join(" · ")}</span>

                  {(project.live || project.github || project.huggingface) && (
                    <span>·</span>
                  )}

                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-accent hover:text-accent-hover font-medium underline underline-offset-4 decoration-accent/40"
                    >
                      Live ↗
                    </a>
                  )}

                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted hover:text-foreground underline underline-offset-4 decoration-border hover:decoration-foreground"
                    >
                      GitHub ↗
                    </a>
                  )}

                  {project.huggingface && (
                    <a
                      href={project.huggingface}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted hover:text-foreground underline underline-offset-4 decoration-border hover:decoration-foreground"
                    >
                      Spaces ↗
                    </a>
                  )}
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
