import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    root: __dirname,
  },
  async redirects() {
    return [{ source: '/owners-manual', destination: '/', permanent: true }];
  },
};

export default nextConfig;
