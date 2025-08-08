import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "eu-west-2.graphassets.com",
      },
    ],
  },
};

export default nextConfig;
