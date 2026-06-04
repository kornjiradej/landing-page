import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Pin the workspace root to this project so Next.js does not pick up a
  // stray lockfile from a parent directory when inferring the root.
  turbopack: {
    root: import.meta.dirname,
  },
  poweredByHeader: false,
  images: {
    // WebP only (intentionally NOT AVIF): AVIF encodes ~50% slower, and on
    // Vercel the first (uncached) request encodes on demand — which slowed the
    // cold LCP measurement. WebP is fast to encode and widely supported.
    formats: ["image/webp"],
    // Honor the quality values actually used (hero=55, others 65/70); otherwise
    // Next.js snaps them to the default [75] and serves larger images.
    qualities: [55, 65, 70, 75],
  },
};

export default nextConfig;
