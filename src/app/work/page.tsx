import { projects } from "@/lib/projects";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Work — Pranav Raj",
  description: "Selected projects across backend systems and machine learning.",
};

export default function WorkPage() {
  return (
    <div className="max-w-xl mx-auto px-4 sm:px-6 py-16 sm:py-24 space-y-10">
      <header className="space-y-2 stagger-1">
        <h1 className="text-xl sm:text-2xl font-semibold tracking-tight text-foreground">
          Work
        </h1>
        <p className="text-[14px] text-secondary">
          Selected software systems, distributed services, and machine learning research.
        </p>
      </header>

      {/* ── Work List without boxes: Dim siblings + title underline sweep + 1fr auto alignment ── */}
      <div className="row-list stagger-2">
        {projects.map((p) => (
          <article
            key={p.id}
            className="row-item group space-y-2 first:border-t-0"
          >
            {/* 1fr auto grid guarantees title and meta always share one single row and never wrap */}
            <div className="grid grid-cols-[1fr_auto] items-baseline gap-4">
              <div className="flex flex-wrap items-baseline gap-x-2.5 gap-y-1">
                <Link
                  href={`/work/${p.id}`}
                  className="inline-block"
                >
                  <h3 className="title-sweep text-[15.5px] font-medium text-foreground">
                    {p.title}
                  </h3>
                </Link>

                {/* Accent badge without background or border */}
                {p.badge && (
                  <span className="text-[12px] font-mono text-accent font-medium">
                    ★ {p.badge}
                  </span>
                )}
              </div>

              {/* Status / Year & External links */}
              <div className="flex items-center gap-3 text-[13px] font-mono text-muted flex-shrink-0">
                {p.year && (
                  <span className="text-[12px] text-muted">{p.year}</span>
                )}

                {p.github && (
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-foreground transition-colors duration-180"
                  >
                    GitHub ↗
                  </a>
                )}
                {p.live && (
                  <a
                    href={p.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent hover:text-accent-hover font-medium transition-colors duration-180"
                  >
                    Live ↗
                  </a>
                )}
                {p.kaggle && (
                  <a
                    href={p.kaggle}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-foreground transition-colors duration-180"
                  >
                    Kaggle ↗
                  </a>
                )}
              </div>
            </div>

            <p className="text-[13.5px] text-secondary leading-relaxed">
              {p.description}
            </p>

            {/* Plain mono text separated by dots in muted color */}
            <div className="text-[12px] font-mono text-muted">
              {p.tech.join(" · ")}
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
