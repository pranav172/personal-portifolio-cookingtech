import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Pranav Raj",
  description: "Get in touch with Pranav Raj.",
};

export default function ContactPage() {
  return (
    <div className="px-4 sm:px-6 py-12 sm:py-16 max-w-2xl mx-auto min-h-[55vh] sm:min-h-[60vh]">
      <h1 className="text-2xl sm:text-3xl font-semibold tracking-tight mb-6 sm:mb-8">Contact</h1>
      
      {/* Email */}
      <section className="mb-8 sm:mb-10">
        <h2 className="text-sm font-semibold text-foreground uppercase tracking-wide mb-2 sm:mb-3">
          Email
        </h2>
        <a
          href="mailto:rpranav1820@gmail.com"
          className="text-base sm:text-lg text-foreground hover:text-accent hover:underline underline-offset-4 transition-colors break-all"
        >
          rpranav1820@gmail.com
        </a>
      </section>

      {/* Socials */}
      <section>
        <h2 className="text-sm font-semibold text-foreground uppercase tracking-wide mb-3 sm:mb-4">
          Socials
        </h2>
        <div className="flex flex-wrap gap-4 sm:gap-6">
          <a
            href="https://linkedin.com/in/pranavraj"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm sm:text-base text-foreground hover:text-accent hover:underline underline-offset-4 transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="https://x.com/pranavraj"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm sm:text-base text-foreground hover:text-accent hover:underline underline-offset-4 transition-colors"
          >
            X (Twitter)
          </a>
          <a
            href="https://github.com/pranavraj"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm sm:text-base text-foreground hover:text-accent hover:underline underline-offset-4 transition-colors"
          >
            GitHub
          </a>
        </div>
      </section>
    </div>
  );
}
