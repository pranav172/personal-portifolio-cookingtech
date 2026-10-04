import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resume — Pranav Raj",
  description: "Pranav Raj's software engineering resume.",
};

const GOOGLE_DRIVE_DOWNLOAD = "https://drive.google.com/uc?export=download&id=1yn5iHGSpm19sChjHdJzbB0hMqWzulN-2";

export default function ResumePage() {
  return (
    <div className="max-w-xl mx-auto px-4 sm:px-6 py-16 sm:py-24 space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-4">
        <div>
          <h1 className="text-2xl font-semibold tracking-tight text-foreground">
            Resume
          </h1>
          <p className="text-xs font-mono text-muted mt-1">
            Software Engineer · Backend &amp; AI
          </p>
        </div>

        <div className="flex items-center gap-4 text-xs font-mono">
          <a
            href="/resume.pdf"
            download="Pranav_Raj_Resume.pdf"
            className="text-foreground hover:text-accent transition-colors"
          >
            Download PDF ↓
          </a>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted hover:text-foreground transition-colors"
          >
            Open in tab ↗
          </a>
        </div>
      </div>

      {/* Embedded Resume Preview */}
      <div
        className="rounded-md overflow-hidden border border-border bg-surface-hover/20"
        style={{ height: "80vh" }}
      >
        <iframe
          src="/resume.pdf#toolbar=0"
          width="100%"
          height="100%"
          title="Pranav Raj — Resume"
          className="border-none w-full h-full"
        />
      </div>

      <div className="text-xs font-mono text-muted text-right">
        Having trouble viewing?{" "}
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-foreground"
        >
          Open directly in browser ↗
        </a>{" "}
        or{" "}
        <a
          href={GOOGLE_DRIVE_DOWNLOAD}
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-foreground"
        >
          Google Drive backup ↗
        </a>
      </div>
    </div>
  );
}
