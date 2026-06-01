import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Pin the workspace root to this project so Next.js does not pick up a
  // stray lockfile from a parent directory when inferring the root.
  turbopack: {
    root: import.meta.dirname,
  },
  poweredByHeader: false,
};

export default nextConfig;
