import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  // Cloudflare Pages: fully static export.
  // Headers and redirects live in public/_headers and public/_redirects,
  // since next.config headers()/redirects() do not run on a static export.
  output: "export",
  // Pin the workspace root so Next does not infer it from a stray lockfile
  // higher up the filesystem and trace far more than this project.
  outputFileTracingRoot: path.join(__dirname),
  turbopack: {
    root: path.join(__dirname),
  },
  images: {
    // No Image Optimization server on Cloudflare Pages.
    unoptimized: true,
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "images.pexels.com" },
      { protocol: "https", hostname: "m.media-amazon.com" },
    ],
  },
};

export default nextConfig;
