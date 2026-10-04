import { articles } from "@/lib/articles";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Writing — Pranav Raj",
  description: "Notes on software engineering, algorithms, and systems.",
};

export default function WritingPage() {
  return (
    <div className="max-w-xl mx-auto px-4 sm:px-6 py-16 sm:py-24 space-y-10">
      <header className="space-y-2 stagger-1">
        <h1 className="text-xl sm:text-2xl font-semibold tracking-tight text-foreground">
          Writing
        </h1>
        <p className="text-[14px] text-secondary">
          Notes on software engineering, algorithms, and systems architecture.
        </p>
      </header>

      <div className="space-y-2 stagger-2">
        {articles.map((article) => (
          <Link
            key={article.slug}
            href={`/writing/${article.slug}`}
            className="group block project-row p-3.5 -mx-3.5 border border-transparent hover:border-border transition-all duration-180 space-y-1.5"
          >
            <div className="flex items-baseline justify-between gap-4">
              <span className="text-[15px] font-medium text-foreground group-hover:text-accent transition-colors duration-180 flex items-center gap-1.5">
                <span>{article.title}</span>
                <span className="text-xs font-mono text-muted group-hover:text-accent group-hover:translate-x-0.5 transition-all duration-180">
                  →
                </span>
              </span>
              <span className="font-mono text-[12px] text-muted flex-shrink-0">
                {article.date}
              </span>
            </div>

            <p className="text-[13.5px] text-secondary leading-relaxed">
              {article.summary}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}
