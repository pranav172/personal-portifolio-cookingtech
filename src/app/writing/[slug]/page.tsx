import { articles, getArticleBySlug } from "@/lib/articles";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return articles.map((a) => ({
    slug: a.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    return {
      title: "Article Not Found — Pranav Raj",
    };
  }

  return {
    title: `${article.title} — Pranav Raj`,
    description: article.summary,
  };
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  return (
    <article className="max-w-xl mx-auto px-4 sm:px-6 py-16 sm:py-24 space-y-8">
      <div>
        <Link
          href="/writing"
          className="text-xs font-mono text-muted hover:text-foreground transition-colors duration-200"
        >
          ← Back to writing
        </Link>
      </div>

      <header className="space-y-2 pb-6 border-b border-border">
        <div className="text-xs font-mono text-muted">
          {article.date} · {article.readTime}
        </div>

        <h1 className="text-xl sm:text-2xl font-medium tracking-tight text-foreground leading-snug">
          {article.title}
        </h1>

        <p className="text-sm text-secondary leading-relaxed">
          {article.summary}
        </p>
      </header>

      <div className="space-y-4 text-[14px] sm:text-[15px] leading-relaxed text-secondary">
        {article.content.map((paragraph, idx) => (
          <p key={idx} className="leading-relaxed">
            {paragraph}
          </p>
        ))}
      </div>

      <footer className="pt-8 border-t border-border flex items-center justify-between text-xs font-mono text-muted">
        <Link
          href="/writing"
          className="hover:text-foreground transition-colors duration-200"
        >
          ← Back to writing
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
