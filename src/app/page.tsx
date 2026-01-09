import Link from "next/link";

export default function Home() {
  const skillGroups = {
    "Languages": ["Python", "C++", "JavaScript", "TypeScript"],
    "ML/DL": ["PyTorch", "TensorFlow"],
    "Web": ["React", "Next.js", "Node.js"],
    "Databases": ["PostgreSQL", "MongoDB", "Redis"],
  };

  const codingProfiles = [
    { name: "LeetCode", url: "https://leetcode.com/u/cookingDSA/" },
    { name: "GeeksforGeeks", url: "https://www.geeksforgeeks.org/profile/rpranatxwq" },
    { name: "Codeforces", url: "https://codeforces.com/profile/cookingDSA" },
  ];

  return (
    <div className="px-4 sm:px-6 py-12 sm:py-16 max-w-3xl mx-auto">
      {/* Name */}
      <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight mb-2">Pranav Raj</h1>
      
      {/* Current Focus Tag */}
      <p className="text-xs sm:text-sm text-muted/80 mb-6 sm:mb-8">
        Currently focused on Software Engineering & DSA
      </p>
      
      {/* Hero Bio - 2 lines max, increased line height, reduced opacity */}
      <p className="text-base sm:text-lg leading-loose text-muted/80 max-w-xl mb-6 sm:mb-8">
        Computer science student building reliable software systems.<br />
        Currently focused on software engineering and algorithmic problem solving,
        with long-term work in deep learning and NLP.
      </p>

      {/* Primary Links - GitHub first */}
      <section className="mb-10 sm:mb-12">
        <h2 className="text-sm font-semibold text-foreground uppercase tracking-wide mb-3">
          Links
        </h2>
        <div className="flex flex-wrap gap-4 sm:gap-6">
          <a
            href="https://github.com/pranav172"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm sm:text-base text-foreground hover:text-accent hover:underline underline-offset-4 transition-all duration-200"
          >
            → GitHub
          </a>
          <a
            href="https://drive.google.com/file/d/1QEnRVqmuc85YGMiui0sGQcS6g_M5nwDN/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm sm:text-base text-foreground hover:text-accent hover:underline underline-offset-4 transition-all duration-200"
          >
            → Resume
          </a>
          <a
            href="https://www.linkedin.com/in/pranav-raj-163230256/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm sm:text-base text-foreground hover:text-accent hover:underline underline-offset-4 transition-all duration-200"
          >
            → LinkedIn
          </a>
        </div>
      </section>

      {/* Skills - Grouped by category */}
      <section className="mb-10 sm:mb-12">
        <h2 className="text-sm font-semibold text-foreground uppercase tracking-wide mb-4">
          Skills
        </h2>
        <div className="space-y-2">
          {Object.entries(skillGroups).map(([category, skills]) => (
            <div key={category} className="text-sm sm:text-base">
              <span className="text-muted/70">{category}:</span>{" "}
              <span className="text-foreground">
                {skills.join(" · ")}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Coding Profiles - With intent descriptor */}
      <section className="mb-10 sm:mb-12">
        <h2 className="text-sm font-semibold text-foreground uppercase tracking-wide mb-2">
          Coding Profiles
        </h2>
        <p className="text-sm text-muted/70 mb-3">
          Algorithmic problem solving and competitive practice
        </p>
        <div className="flex flex-wrap gap-4 sm:gap-6">
          {codingProfiles.map((profile) => (
            <a
              key={profile.name}
              href={profile.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm sm:text-base text-foreground hover:text-accent hover:underline underline-offset-4 transition-all duration-200"
            >
              → {profile.name}
            </a>
          ))}
        </div>
      </section>


    </div>
  );
}

