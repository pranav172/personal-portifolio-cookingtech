export interface LeetCodeStats {
  total: number;
  easy: number;
  medium: number;
  hard: number;
}

export interface LastCommitInfo {
  repo: string;
  relativeTime: string;
}

export interface CodeforcesStats {
  rating: number;
  maxRating: number;
  rank: string;
}

export interface ContestInfo {
  name: string;
  relativeTime: string;
}

export async function getLeetCode(user: string = "cookingDSA"): Promise<LeetCodeStats> {
  try {
    const res = await fetch("https://leetcode.com/graphql", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Referer: "https://leetcode.com",
        "User-Agent": "Mozilla/5.0",
      },
      body: JSON.stringify({
        query: `query($u:String!){matchedUser(username:$u){submitStatsGlobal{acSubmissionNum{difficulty count}}}}`,
        variables: { u: user },
      }),
      next: { revalidate: 600 },
    });

    if (!res.ok) throw new Error("LeetCode API error");

    const j = await res.json();
    const a = j?.data?.matchedUser?.submitStatsGlobal?.acSubmissionNum;
    if (!a) throw new Error("Invalid payload");

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const n = (d: string) => a.find((x: any) => x.difficulty === d)?.count ?? 0;
    return {
      total: n("All"),
      easy: n("Easy"),
      medium: n("Medium"),
      hard: n("Hard"),
    };
  } catch {
    // Robust fallback
    return { total: 386, easy: 113, medium: 214, hard: 59 };
  }
}

export async function getLastCommit(user: string = "pranav172"): Promise<LastCommitInfo | null> {
  try {
    const res = await fetch(`https://api.github.com/users/${user}/repos?sort=pushed&per_page=1`, {
      headers: {
        Accept: "application/vnd.github.v3+json",
        "User-Agent": "portfolio-stats",
      },
      next: { revalidate: 600 },
    });

    if (!res.ok) return null;

    const repos = await res.json();
    if (!Array.isArray(repos) || repos.length === 0) return null;

    const latest = repos[0];
    const pushedDate = new Date(latest.pushed_at);
    const now = new Date();
    const diffMs = now.getTime() - pushedDate.getTime();
    const diffHours = Math.floor(diffMs / (1000 * 60 * 60));
    const diffDays = Math.floor(diffHours / 24);

    let relative = "";
    if (diffHours < 1) {
      const diffMins = Math.max(1, Math.floor(diffMs / (1000 * 60)));
      relative = `${diffMins}m ago`;
    } else if (diffHours < 24) {
      relative = `${diffHours}h ago`;
    } else if (diffDays === 1) {
      relative = "yesterday";
    } else {
      relative = `${diffDays}d ago`;
    }

    return {
      repo: latest.name,
      relativeTime: relative,
    };
  } catch {
    return null;
  }
}

export async function getNextContest(): Promise<ContestInfo | null> {
  try {
    const res = await fetch("https://codeforces.com/api/contest.list", {
      next: { revalidate: 3600 },
    });
    if (!res.ok) return null;
    const j = await res.json();
    if (j.status !== "OK" || !Array.isArray(j.result)) return null;

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const upcoming = j.result
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      .filter((c: any) => c.phase === "BEFORE")
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      .sort((a: any, b: any) => (a.startTimeSeconds || 0) - (b.startTimeSeconds || 0));

    if (upcoming.length === 0) return null;
    const next = upcoming[0];
    const nowSec = Math.floor(Date.now() / 1000);
    const diffSec = (next.startTimeSeconds || 0) - nowSec;
    if (diffSec <= 0) return null;

    const hours = Math.floor(diffSec / 3600);
    const days = Math.floor(hours / 24);
    const remHours = hours % 24;

    let timeStr = "";
    if (days > 0) {
      timeStr = `${days}d ${remHours}h`;
    } else {
      timeStr = `${hours}h`;
    }

    return {
      name: next.name,
      relativeTime: timeStr,
    };
  } catch {
    return null;
  }
}

export async function getCodeforces(handle: string): Promise<CodeforcesStats | null> {
  try {
    const res = await fetch(`https://codeforces.com/api/user.info?handles=${handle}`, {
      next: { revalidate: 600 },
    });
    if (!res.ok) return null;
    const j = await res.json();
    if (j.status !== "OK" || !j.result || j.result.length === 0) return null;
    const u = j.result[0];
    return { rating: u.rating ?? 0, maxRating: u.maxRating ?? 0, rank: u.rank ?? "unrated" };
  } catch {
    return null;
  }
}
