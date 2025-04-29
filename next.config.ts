import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        hostname: 'test.zhihur.com',
      },
    ],
  },
};

export default nextConfig;
