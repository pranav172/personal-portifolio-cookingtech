import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Pranav Raj",
  description: "Get in touch with Pranav Raj.",
};

export default function ContactPage() {
  return (
    <div className="px-4 sm:px-6 py-12 sm:py-16 max-w-3xl mx-auto min-h-[55vh] sm:min-h-[60vh]">
      <h1 className="text-2xl sm:text-3xl font-semibold tracking-tight mb-2 sm:mb-3">Contact</h1>
      
      {/* Context line */}
      <p className="text-muted/80 text-sm sm:text-base mb-8 sm:mb-10">
        Open to collaboration, internships, and software engineering roles.
      </p>
      
      {/* Two-column layout on desktop, stacked on mobile */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-10">
        {/* Email */}
        <section>
          <h2 className="text-sm font-semibold text-foreground uppercase tracking-wide mb-2 sm:mb-3">
            Email
          </h2>
          <a
            href="mailto:rpranav1820@gmail.com"
            className="text-sm sm:text-base text-foreground hover:text-accent hover:underline underline-offset-4 transition-colors"
          >
            → rpranav1820@gmail.com
          </a>
        </section>

        {/* Socials - reordered by professional priority */}
        <section>
          <h2 className="text-sm font-semibold text-foreground uppercase tracking-wide mb-2 sm:mb-3">
            Socials
          </h2>
          <div className="flex flex-wrap gap-4 sm:gap-6">
            <a
              href="https://www.linkedin.com/in/pranav-raj-163230256/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm sm:text-base text-foreground hover:text-accent hover:underline underline-offset-4 transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="https://x.com/Pranav_raj_18"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm sm:text-base text-foreground hover:text-accent hover:underline underline-offset-4 transition-colors"
            >
              X (Twitter)
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}

