import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Pin the workspace root to this project so Next.js does not pick up a
  // stray lockfile from a parent directory when inferring the root.
  turbopack: {
    root: import.meta.dirname,
  },
  poweredByHeader: false,
  images: {
    // AVIF first (≈20% smaller than WebP) with WebP fallback — shrinks the
    // hero/LCP payload. Browsers without AVIF support automatically get WebP.
    formats: ["image/avif", "image/webp"],
    // Allow the quality levels actually used by the components; otherwise
    // Next.js snaps them to the default [75] and logs a warning.
    qualities: [65, 70, 75],
    // Cache optimized images longer to avoid repeated re-optimization.
    minimumCacheTTL: 2678400, // 31 days
  },
};

export default nextConfig;
