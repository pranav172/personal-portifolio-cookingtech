import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 py-20 space-y-4">
      <h1 className="text-xl font-medium text-foreground">
        404
      </h1>
      <p className="text-sm text-secondary">
        Looks like this page doesn&apos;t exist.
      </p>
      <div>
        <Link
          href="/"
          className="text-xs font-mono text-foreground hover:text-accent transition-colors"
        >
          ← Back home
        </Link>
      </div>
    </div>
  );
}
