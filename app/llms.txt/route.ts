import { NextResponse } from "next/server";

const SITE_URL = "https://omna.club";

export function GET() {
  const body = [
    "# OMNA",
    "",
    "> Omnipresent Technology, Applied.",
    "",
    "This file helps LLM agents and indexing tools discover key pages.",
    "",
    "## Canonical",
    `${SITE_URL}/`,
    "",
    "## Sitemap",
    `${SITE_URL}/sitemap.xml`,
    "",
    "## Preferred language",
    "es-MX",
  ].join("\n");

  return new NextResponse(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
}
