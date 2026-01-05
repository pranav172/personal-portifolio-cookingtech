import Link from "next/link";

export default function Home() {
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
      {/* Name */}
      <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight mb-4 sm:mb-6">Pranav Raj</h1>
      
      {/* About */}
      <p className="text-base sm:text-lg leading-relaxed text-muted max-w-md mb-10 sm:mb-12">
        Building experiments in machine learning, software systems, and solving 
        problems through algorithms. Learning by building and breaking systems.
      </p>

      {/* Skills - Clickable to filter projects */}
      <section className="mb-10 sm:mb-12">
        <h2 className="text-sm font-semibold text-foreground uppercase tracking-wide mb-3 sm:mb-4">
          Skills
        </h2>
        <div className="flex flex-wrap gap-x-3 gap-y-2 sm:gap-x-4">
          {skills.map((skill) => (
            <Link
              key={skill}
              href={`/work?skill=${encodeURIComponent(skill)}`}
              className="text-sm text-foreground hover:text-accent hover:underline underline-offset-4 transition-all duration-200"
            >
              {skill}
            </Link>
          ))}
        </div>
      </section>

      {/* Coding Profiles */}
      <section className="mb-10 sm:mb-12">
        <h2 className="text-sm font-semibold text-foreground uppercase tracking-wide mb-3 sm:mb-4">
          Coding Profiles
        </h2>
        <div className="flex flex-wrap gap-4 sm:gap-6">
          {codingProfiles.map((profile) => (
            <a
              key={profile.name}
              href={profile.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm sm:text-base text-foreground hover:text-accent hover:underline underline-offset-4 transition-all duration-200"
            >
              {profile.name}
            </a>
          ))}
        </div>
      </section>

      {/* Resume */}
      <section>
        <h2 className="text-sm font-semibold text-foreground uppercase tracking-wide mb-3 sm:mb-4">
          Resume
        </h2>
        <a
          href="https://drive.google.com/file/d/1QEnRVqmuc85YGMiui0sGQcS6g_M5nwDN/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm sm:text-base text-foreground hover:text-accent hover:underline underline-offset-4 transition-all duration-200"
        >
          View / Download
        </a>
      </section>
    </div>
  );
}
