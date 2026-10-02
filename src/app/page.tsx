import Link from "next/link";

interface LeetCodeStats {
  total: number;
  easy: number;
  medium: number;
  hard: number;
}

async function getLeetCodeStats(): Promise<LeetCodeStats> {
  try {
    const res = await fetch("https://leetcode.com/graphql", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Referer: "https://leetcode.com",
        Origin: "https://leetcode.com",
      },
      body: JSON.stringify({
        query: `query userPublicProfile($username: String!) {
          matchedUser(username: $username) {
            submitStatsGlobal {
              acSubmissionNum {
                difficulty
                count
              }
            }
          }
        }`,
        variables: { username: "cookingDSA" },
      }),
      next: { revalidate: 3600 },
    });

    const data = await res.json();
    const stats: { difficulty: string; count: number }[] =
      data?.data?.matchedUser?.submitStatsGlobal?.acSubmissionNum ?? [];

    const get = (d: string) =>
      stats.find((s) => s.difficulty === d)?.count ?? 0;

    return {
      total: get("All"),
      easy: get("Easy"),
      medium: get("Medium"),
      hard: get("Hard"),
    };
  } catch {
    return { total: 300, easy: 120, medium: 145, hard: 35 };
  }
}

export default async function Home() {
  const lc = await getLeetCodeStats();

  const skillGroups = {
    Languages: ["Python", "C++", "JavaScript", "TypeScript", "SQL"],
    "Backend & Cloud": ["FastAPI", "Node.js", "PostgreSQL", "Redis", "Docker"],
    "ML & Systems": ["PyTorch", "TensorFlow", "DSA", "System Design"],
    Web: ["React", "Next.js", "TailwindCSS"],
  };

  const codingProfiles = [
    { name: "LeetCode", url: "https://leetcode.com/u/cookingDSA/" },
    {
      name: "GeeksforGeeks",
      url: "https://www.geeksforgeeks.org/profile/rpranatxwq",
    },
    { name: "Codeforces", url: "https://codeforces.com/profile/cookingDSA" },
  ];

  return (
    <div className="px-4 sm:px-6 py-12 sm:py-16 max-w-3xl mx-auto">
      {/* Name + Avatar */}
      <div className="flex items-center gap-3 mb-2 animate-in">
        {/* Small avatar */}
        <div
          className="avatar-ring flex-shrink-0"
          style={{ width: 40, height: 40 }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/pranav.jpg"
            alt="Pranav Raj"
            width={40}
            height={40}
            style={{ objectFit: "cover", width: "100%", height: "100%" }}
          />
        </div>
        <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight">
          Pranav Raj
        </h1>
      </div>

      {/* Current Focus Tag */}
      <p className="text-xs sm:text-sm text-muted/80 mb-6 sm:mb-8 animate-in delay-1">
        Currently focused on Software Engineering &amp; DSA
      </p>

      {/* Hero Bio */}
      <p className="text-base sm:text-lg leading-loose text-muted/80 max-w-xl mb-8 sm:mb-10 animate-in delay-2">
        Computer science student building reliable software systems.
        <br />
        Currently focused on software engineering and algorithmic problem
        solving, with long-term work in deep learning and NLP.
      </p>

      {/* Primary Links */}
      <section className="mb-10 sm:mb-12 animate-in delay-3">
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
            href="https://x.com/cookingDSA"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm sm:text-base text-foreground hover:text-accent hover:underline underline-offset-4 transition-all duration-200"
          >
            → X (Twitter)
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

      {/* Resume */}
      <section className="mb-10 sm:mb-12 animate-in delay-3">
        <h2 className="text-sm font-semibold text-foreground uppercase tracking-wide mb-3">
          Resume
        </h2>
        <div className="flex flex-wrap gap-4 sm:gap-6">
          <Link
            href="/resume"
            className="text-sm sm:text-base text-foreground hover:text-accent hover:underline underline-offset-4 transition-all duration-200"
          >
            → View Resume ↗
          </Link>
          <a
            href="/resume.pdf"
            download="Pranav_Raj_Resume.pdf"
            className="text-sm sm:text-base text-foreground hover:text-accent hover:underline underline-offset-4 transition-all duration-200"
          >
            → Download PDF ↓
          </a>
        </div>
      </section>

      <div className="section-divider mb-10 sm:mb-12" />

      {/* Skills */}
      <section className="mb-10 sm:mb-12 animate-in delay-4">
        <h2 className="text-sm font-semibold text-foreground uppercase tracking-wide mb-4">
          Skills
        </h2>
        <div className="space-y-2">
          {Object.entries(skillGroups).map(([category, skills]) => (
            <div key={category} className="text-sm sm:text-base">
              <span className="text-muted/70">{category}:</span>{" "}
              <span className="text-foreground">{skills.join(" · ")}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Coding Profiles + LeetCode Stats */}
      <section className="mb-10 sm:mb-12 animate-in delay-5">
        <h2 className="text-sm font-semibold text-foreground uppercase tracking-wide mb-2">
          Coding Profiles
        </h2>
        <p className="text-sm text-muted/70 mb-3">
          Algorithmic problem solving and competitive practice
        </p>
        <div className="flex flex-wrap gap-4 sm:gap-6 mb-5">
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

        {/* LeetCode Stats Widget */}
        {lc.total > 0 && (
          <div className="inline-flex flex-wrap gap-x-5 gap-y-2 text-[13px] sm:text-sm text-muted/70 bg-foreground/[0.04] rounded-lg px-4 py-3">
            <span>
              <span className="text-foreground font-medium">{lc.total}</span>{" "}
              solved
            </span>
            <span className="text-foreground/20">·</span>
            <span>
              <span className="text-green-500 font-medium">{lc.easy}</span>{" "}
              Easy
            </span>
            <span>
              <span className="text-yellow-500 font-medium">{lc.medium}</span>{" "}
              Medium
            </span>
            <span>
              <span className="text-red-500 font-medium">{lc.hard}</span> Hard
            </span>
          </div>
        )}
      </section>
    </div>
  );
}
