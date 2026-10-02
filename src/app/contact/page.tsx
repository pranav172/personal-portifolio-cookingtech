import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Pranav Raj",
  description: "Get in touch with Pranav Raj for software engineering roles and collaboration.",
};

export default function ContactPage() {
  return (
    <div className="px-4 sm:px-6 py-10 sm:py-14 max-w-3xl mx-auto space-y-8 animate-in min-h-[60vh]">
      <div>
        <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
          Contact &amp; Connect
        </h1>
        <p className="text-xs sm:text-sm text-muted mt-1 leading-relaxed">
          Open to full-time Software Engineer, Backend Engineer, and Distributed Systems roles.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Direct Channels */}
        <div className="card-minimal p-5 space-y-3">
          <h2 className="text-xs font-bold uppercase tracking-wider text-foreground">
            Direct Reach
          </h2>
          <div className="space-y-2 text-xs">
            <div>
              <span className="text-muted block text-[11px]">Primary Email</span>
              <a
                href="mailto:rpranav1820@gmail.com"
                className="text-foreground hover:text-accent font-medium text-sm transition-colors"
              >
                rpranav1820@gmail.com
              </a>
            </div>
            <div>
              <span className="text-muted block text-[11px]">Phone / WhatsApp</span>
              <span className="text-foreground font-mono text-sm">+91-9155735631</span>
            </div>
            <div>
              <span className="text-muted block text-[11px]">Location</span>
              <span className="text-foreground text-xs">Jaipur / Bengaluru / Remote (India)</span>
            </div>
          </div>
        </div>

        {/* Professional Profiles */}
        <div className="card-minimal p-5 space-y-3">
          <h2 className="text-xs font-bold uppercase tracking-wider text-foreground">
            Professional Networks
          </h2>
          <div className="flex flex-col gap-2 text-xs">
            <a
              href="https://github.com/pranav172"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground hover:text-accent hover:underline flex items-center justify-between"
            >
              <span>GitHub (@pranav172)</span>
              <span className="text-muted">↗</span>
            </a>
            <a
              href="https://www.linkedin.com/in/pranav-raj-163230256/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground hover:text-accent hover:underline flex items-center justify-between"
            >
              <span>LinkedIn (/in/pranav-raj-163230256)</span>
              <span className="text-muted">↗</span>
            </a>
            <a
              href="https://codeforces.com/profile/cookingDSA"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground hover:text-accent hover:underline flex items-center justify-between"
            >
              <span>Codeforces (@cookingDSA)</span>
              <span className="text-muted">↗</span>
            </a>
            <a
              href="https://leetcode.com/u/cookingDSA/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground hover:text-accent hover:underline flex items-center justify-between"
            >
              <span>LeetCode (@cookingDSA)</span>
              <span className="text-muted">↗</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
