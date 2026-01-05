import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blogs | Pranav Raj",
  description: "Essays and thoughts on machine learning and software systems.",
};

export default function WritingPage() {
  return (
    <div className="px-4 sm:px-6 py-12 sm:py-16 max-w-2xl mx-auto min-h-[55vh] sm:min-h-[60vh]">
      <h1 className="text-2xl sm:text-3xl font-semibold tracking-tight mb-4 sm:mb-6">Blogs</h1>
      
      <p className="text-base sm:text-lg leading-relaxed text-muted max-w-lg">
        I&apos;ll use this space to write about what I learn while building systems.
      </p>
      
      <p className="text-muted mt-6 sm:mt-8 text-sm sm:text-base">
        Coming soon.
      </p>
    </div>
  );
}
