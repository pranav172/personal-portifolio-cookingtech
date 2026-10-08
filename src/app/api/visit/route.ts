import { NextRequest, NextResponse } from "next/server";

const url = process.env.UPSTASH_REDIS_REST_URL;
const token = process.env.UPSTASH_REDIS_REST_TOKEN;

async function redis(cmd: (string | number)[]) {
  if (!url || !token) {
    throw new Error("Missing Upstash Redis environment variables");
  }
  const r = await fetch(url, {
    method: "POST",
    headers: { Authorization: `Bearer ${token}` },
    body: JSON.stringify(cmd),
    cache: "no-store",
  });
  const data = await r.json();
  return data.result;
}

export async function GET() {
  try {
    const n = await redis(["GET", "visits"]);
    return NextResponse.json({ count: Number(n ?? 0) });
  } catch (error) {
    console.error("Redis GET error:", error);
    return NextResponse.json({ count: 0 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const ua = req.headers.get("user-agent") ?? "";
    if (/bot|crawl|spider|preview|headless|lighthouse/i.test(ua)) {
      return GET();
    }
    const n = await redis(["INCR", "visits"]);
    return NextResponse.json({ count: Number(n) });
  } catch (error) {
    console.error("Redis POST error:", error);
    return NextResponse.json({ count: 0 });
  }
}
