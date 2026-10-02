import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Writing & Notes | Pranav Raj",
  description: "Engineering notes on distributed systems, AI governance, and system design.",
};

export default function WritingPage() {
  const essays = [
    {
      title: "Deterministic Code vs LLMs in Critical Financial Paths",
      description: "Why probabilistic foundation models must never touch raw payment APIs directly, and how deterministic math contracts eliminate hallucinations in automated commerce.",
      tag: "FinTech & Systems",
      status: "Upcoming Note",
    },
    {
      title: "Why 202 Accepted Beats Synchronous HTTP in Task Orchestration",
      description: "Architecting non-blocking ingestion to decouple client network timeouts from heavy job execution durations using Redis priority sets and state machines.",
      tag: "Distributed Systems",
      status: "Upcoming Note",
    },
    {
      title: "Auditor-Grade Materiality Scoring for Real-Time AI Governance",
      description: "Scaling enterprise AI safety by routing prompts through a 4-tier consequence formula (Irreversibility, People, Regulated Data, Value) instead of brute-force checking.",
      tag: "AI Safety & Governance",
      status: "Upcoming Note",
    },
    {
      title: "Designing Fail-Closed Circuit Breakers for Upstream Rail Outages",
      description: "Preventing ghost debits and cascade timeouts when external payment gateways or third-party webhooks experience downtime.",
      tag: "Resilience Engineering",
      status: "Upcoming Note",
    },
  ];

  return (
    <div className="px-4 sm:px-6 py-10 sm:py-14 max-w-3xl mx-auto space-y-8 animate-in min-h-[60vh]">
      <div>
        <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
          Writing &amp; Architectural Notes
        </h1>
        <p className="text-xs sm:text-sm text-muted mt-1 leading-relaxed">
          Observations from building distributed backends, AI governance layers, and deterministic payment systems.
        </p>
      </div>

      <div className="space-y-4">
        {essays.map((essay, idx) => (
          <article
            key={idx}
            className="card-minimal p-5 space-y-2"
          >
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
              <h2 className="text-sm sm:text-base font-semibold text-foreground">
                {essay.title}
              </h2>
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-foreground/[0.05] text-muted">
                  {essay.tag}
                </span>
                <span className="text-[10px] font-mono text-accent">
                  {essay.status}
                </span>
              </div>
            </div>
            <p className="text-xs sm:text-sm text-muted leading-relaxed">
              {essay.description}
            </p>
          </article>
        ))}
      </div>
    </div>
  );
}
