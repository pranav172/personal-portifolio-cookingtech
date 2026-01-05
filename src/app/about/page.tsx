import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Pranav Raj",
  description: "Skills, experience, and coding profiles.",
};

export default function AboutPage() {
  const skills = [
    "Python", "JavaScript", "TypeScript", "C++",
    "TensorFlow", "PyTorch", "React", "Next.js",
    "Node.js", "PostgreSQL", "MongoDB", "Redis",
  ];

  const codingProfiles = [
    { name: "LeetCode", url: "https://leetcode.com/pranavraj" },
    { name: "GeeksforGeeks", url: "https://www.geeksforgeeks.org/user/pranavraj" },
    { name: "Codeforces", url: "https://codeforces.com/profile/pranavraj" },
  ];

  return (
    <div className="px-4 sm:px-6 py-12 sm:py-16 max-w-2xl mx-auto">
      <h1 className="text-2xl sm:text-3xl font-semibold tracking-tight mb-4 sm:mb-6">About</h1>
      
      {/* Bio */}
      <p className="text-base sm:text-lg leading-relaxed text-muted mb-10 sm:mb-12 max-w-md">
        I&apos;m learning computer science by building and breaking systems. 
        My interests include machine learning, backend engineering, and 
        understanding how complex systems behave in practice.
      </p>

      {/* Skills */}
      <section className="mb-10 sm:mb-12">
        <h2 className="text-sm font-medium text-muted uppercase tracking-wide mb-3 sm:mb-4">
          Skills
        </h2>
        <p className="text-sm sm:text-base text-foreground leading-relaxed">
          {skills.join(" · ")}
        </p>
      </section>

      {/* Coding Profiles */}
      <section className="mb-10 sm:mb-12">
        <h2 className="text-sm font-medium text-muted uppercase tracking-wide mb-3 sm:mb-4">
          Coding Profiles
        </h2>
        <div className="flex flex-wrap gap-4 sm:gap-6">
          {codingProfiles.map((profile) => (
            <a
              key={profile.name}
              href={profile.url}
              target="_blank"
              rel="noopener noreferrer"
              className="link text-sm sm:text-base"
            >
              {profile.name}
            </a>
          ))}
        </div>
      </section>

      {/* Resume */}
      <section>
        <h2 className="text-sm font-medium text-muted uppercase tracking-wide mb-3 sm:mb-4">
          Resume
        </h2>
        <a
          href="https://drive.google.com/file/d/1QEnRVqmuc85YGMiui0sGQcS6g_M5nwDN/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="link text-sm sm:text-base"
        >
          View / Download
        </a>
      </section>
    </div>
  );
}
