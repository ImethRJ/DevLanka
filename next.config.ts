import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  async rewrites() {
    return [
      {
        source: "/8a720a8ff1784e4ca20d4791b01734f3",
        destination: "/8a720a8ff1784e4ca20d4791b01734f3.txt",
      },
    ];
  },
};

export default nextConfig;
