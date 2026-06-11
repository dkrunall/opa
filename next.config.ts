import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/nightlife",
        destination: "/nightlife-in-andheri",
        permanent: true,
      },
      {
        source: "/fine-dine",
        destination: "/fine-dine-in-andheri-east",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
