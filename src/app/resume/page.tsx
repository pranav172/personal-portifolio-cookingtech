import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resume — Pranav Raj",
  description: "Pranav Raj's resume — software engineer and ML enthusiast.",
};

const FILE_ID = "1yn5iHGSpm19sChjHdJzbB0hMqWzulN-2";
const PREVIEW_URL = `https://drive.google.com/file/d/${FILE_ID}/preview`;
const DOWNLOAD_URL = `https://drive.google.com/uc?export=download&id=${FILE_ID}`;

export default function ResumePage() {
  return (
    <div className="px-4 sm:px-6 py-12 sm:py-16 max-w-3xl mx-auto">
      {/* Header */}
      <div className="flex items-center justify-between mb-6 animate-in">
        <h1 className="text-2xl sm:text-3xl font-semibold tracking-tight">
          Resume
        </h1>
        <a
          href={DOWNLOAD_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm px-4 py-2 rounded-lg border border-foreground/15 hover:border-accent hover:text-accent transition-all duration-200"
        >
          ↓ Download PDF
        </a>
      </div>

      {/* Google Drive iframe */}
      <div
        className="animate-in delay-1 rounded-xl overflow-hidden border border-foreground/10"
        style={{ height: "80vh" }}
      >
        <iframe
          src={PREVIEW_URL}
          width="100%"
          height="100%"
          allow="autoplay"
          title="Pranav Raj — Resume"
          style={{ border: "none" }}
        />
      </div>
    </div>
  );
}
