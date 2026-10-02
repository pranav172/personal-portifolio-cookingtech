import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resume — Pranav Raj",
  description: "Pranav Raj's resume — software engineer, distributed systems, and ML enthusiast.",
};

const GOOGLE_DRIVE_DOWNLOAD = "https://drive.google.com/uc?export=download&id=1yn5iHGSpm19sChjHdJzbB0hMqWzulN-2";

export default function ResumePage() {
  return (
    <div className="px-4 sm:px-6 py-12 sm:py-16 max-w-3xl mx-auto">
      {/* Header */}
      <div className="flex items-center justify-between mb-6 animate-in">
        <h1 className="text-2xl sm:text-3xl font-semibold tracking-tight">
          Resume
        </h1>
        <div className="flex items-center gap-3">
          <a
            href="/resume.pdf"
            download="Pranav_Raj_Resume.pdf"
            className="text-sm px-4 py-2 rounded-lg border border-foreground/15 hover:border-accent hover:text-accent transition-all duration-200"
          >
            ↓ Download PDF
          </a>
        </div>
      </div>

      {/* Embedded Resume Preview */}
      <div
        className="animate-in delay-1 rounded-xl overflow-hidden border border-foreground/10 bg-background/50"
        style={{ height: "82vh" }}
      >
        <iframe
          src="/resume.pdf#toolbar=0"
          width="100%"
          height="100%"
          title="Pranav Raj — Resume"
          style={{ border: "none" }}
        />
      </div>

      <div className="mt-4 text-xs text-muted/70 text-right">
        Having trouble viewing?{" "}
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="text-accent hover:underline"
        >
          Open directly in browser ↗
        </a>{" "}
        or{" "}
        <a
          href={GOOGLE_DRIVE_DOWNLOAD}
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted hover:underline"
        >
          Google Drive link ↗
        </a>
      </div>
    </div>
  );
}
