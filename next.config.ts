import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/game',
        permanent: true,
      },
    ]
  },
};

export default nextConfig;