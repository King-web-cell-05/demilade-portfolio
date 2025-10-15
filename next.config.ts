import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    // ⚡ Vercel will skip ESLint checks during build
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
