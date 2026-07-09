import type { NextConfig } from "next";

/**
 * User site (https://robin-raq.github.io/) uses no base path — repo must be named robin-raq.github.io.
 * Project site (https://user.github.io/repo/) needs BASE_PATH=/repo for that layout.
 * Omit BASE_PATH for local dev at http://localhost:3000/
 */
const rawBase = process.env.BASE_PATH?.trim() ?? "";
const basePath = rawBase.replace(/\/$/, "");

const nextConfig: NextConfig = {
  output: "export",
  // Emit about/index.html instead of about.html: GitHub Pages then 301s
  // /about → /about/, so both URL shapes resolve (previously /about/
  // 404'd — a canonicalization split for crawlers and shared links).
  trailingSlash: true,
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
  ...(basePath ? { basePath, assetPrefix: `${basePath}/` } : {}),
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "iamraq.github.io",
        pathname: "/public/**",
      },
    ],
  },
};

export default nextConfig;
