export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-24 border-t border-border py-12">
      <div className="max-w-xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row sm:items-baseline justify-between gap-4 text-xs font-mono text-muted">
        <div>
          <span className="text-foreground">Pranav Raj</span>
          <span className="mx-2">·</span>
          <span>Software Engineer</span>
        </div>

        <div className="flex items-center gap-4">
          <a
            href="https://github.com/pranav172"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/pranav-raj-163230256/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="https://x.com/Pranav_raj_18"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground transition-colors"
          >
            X
          </a>
          <a
            href="mailto:rpranav1820@gmail.com"
            className="hover:text-foreground transition-colors"
          >
            Email
          </a>
          <span>© {currentYear}</span>
        </div>
      </div>
    </footer>
  );
}
