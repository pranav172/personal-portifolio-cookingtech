import { NextResponse } from 'next/server';

const LEETCODE_USERNAME = 'cookingDSA';

export async function GET() {
  try {
    const res = await fetch('https://leetcode.com/graphql', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Referer': 'https://leetcode.com',
        'Origin': 'https://leetcode.com',
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
        variables: { username: LEETCODE_USERNAME },
      }),
      next: { revalidate: 3600 },
    });

    if (!res.ok) throw new Error(`LeetCode responded ${res.status}`);

    const data = await res.json();
    const stats: { difficulty: string; count: number }[] =
      data?.data?.matchedUser?.submitStatsGlobal?.acSubmissionNum ?? [];

    const get = (d: string) => stats.find((s) => s.difficulty === d)?.count ?? 0;

    return NextResponse.json({
      total: get('All'),
      easy: get('Easy'),
      medium: get('Medium'),
      hard: get('Hard'),
    });
  } catch {
    // Fallback values so the UI never breaks
    return NextResponse.json({ total: 300, easy: 120, medium: 145, hard: 35 });
  }
}
