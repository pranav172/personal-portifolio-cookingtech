import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blogs | Pranav Raj",
  description: "Essays and thoughts on machine learning and software systems.",
};

export default function WritingPage() {
  return (
    <div className="px-4 sm:px-6 py-12 sm:py-16 max-w-2xl mx-auto min-h-[55vh] sm:min-h-[60vh]">
      <h1 className="text-2xl sm:text-3xl font-semibold tracking-tight mb-2 sm:mb-3">Blogs</h1>
      
      {/* Professional intro */}
      <p className="text-muted/80 text-sm sm:text-base mb-4 sm:mb-6 max-w-lg">
        A space for documenting learnings from building software and machine learning systems.
      </p>
      
      {/* Topics hint */}
      <p className="text-muted/60 text-sm mb-8 sm:mb-10">
        Topics may include systems design, machine learning, deep learning, and problem solving.
      </p>
      
      {/* Purpose-driven progress line */}
      <p className="text-muted/80 text-sm sm:text-base">
        Writing in progress. This space will document learnings from building real systems.
      </p>
    </div>
  );
}

