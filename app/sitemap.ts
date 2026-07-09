import type { MetadataRoute } from "next";

const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL?.trim() || "https://robin-raq.github.io"
).replace(/\/$/, "");

// Static export: generated once at build time into sitemap.xml.
export const dynamic = "force-static";

// Case-study pages carry the most ranking intent; the homepage carries
// the name search. Priorities reflect that (Google mostly ignores
// priority, but other consumers read it).
const routes: Array<{ path: string; priority: number }> = [
  { path: "/", priority: 1.0 },
  { path: "/projects/", priority: 0.9 },
  { path: "/projects/oh-sheet/", priority: 0.9 },
  { path: "/projects/tunechat/", priority: 0.9 },
  { path: "/about/", priority: 0.7 },
  { path: "/skills/", priority: 0.6 },
  { path: "/resume/", priority: 0.6 },
  { path: "/contact/", priority: 0.5 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map(({ path, priority }) => ({
    url: `${siteUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority,
  }));
}
