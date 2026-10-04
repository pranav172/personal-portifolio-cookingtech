import { getProjectBySlug, projects } from "@/lib/projects";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ArchitectureViewer } from "@/components/ArchitectureViewer";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return projects.map((p) => ({
    slug: p.id,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {
      title: "Project Not Found — Pranav Raj",
    };
  }

  return {
    title: `${project.title} — Pranav Raj`,
    description: project.description,
  };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <article className="max-w-xl mx-auto px-4 sm:px-6 py-16 sm:py-24 space-y-10">
      <div>
        <Link
          href="/work"
          className="text-xs font-mono text-muted hover:text-foreground transition-colors duration-200"
        >
          ← Back to work
        </Link>
      </div>

      <header className="space-y-3 pb-6 border-b border-border">
        <div className="flex flex-wrap items-baseline gap-2.5">
          <h1 className="text-xl sm:text-2xl font-semibold tracking-tight text-foreground">
            {project.title}
          </h1>
          {project.badge && (
            <span className="text-[12px] font-mono text-accent font-medium">
              ★ {project.badge}
            </span>
          )}
        </div>

        <p className="text-[14.5px] text-secondary leading-relaxed">
          {project.description}
        </p>

        <div className="text-[12px] font-mono text-muted">
          {project.tech.join(" · ")}
        </div>

        <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-muted pt-2">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground hover:text-muted transition-colors duration-200"
            >
              GitHub ↗
            </a>
          )}
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground hover:text-muted transition-colors duration-200"
            >
              Live Demo ↗
            </a>
          )}
          {project.docs && (
            <a
              href={project.docs}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground transition-colors duration-200"
            >
              API Docs ↗
            </a>
          )}
          {project.kaggle && (
            <a
              href={project.kaggle}
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground hover:text-muted transition-colors duration-200"
            >
              Kaggle ↗
            </a>
          )}
        </div>
      </header>

      {project.details && (
        <section className="space-y-2">
          <h2 className="text-xs font-mono text-muted uppercase tracking-wider">
            Overview
          </h2>
          <p className="text-xs sm:text-[13px] text-secondary leading-relaxed">
            {project.details}
          </p>
        </section>
      )}

      {project.architecture && (
        <section className="space-y-1">
          <ArchitectureViewer architecture={project.architecture} />
        </section>
      )}

      <footer className="pt-8 border-t border-border flex items-center justify-between text-xs font-mono text-muted">
        <Link
          href="/work"
          className="hover:text-foreground transition-colors duration-200"
        >
          ← Back to work
        </Link>
        <Link
          href="/contact"
          className="hover:text-foreground transition-colors duration-200"
        >
          Contact →
        </Link>
      </footer>
    </article>
  );
}
