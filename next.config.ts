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
  async headers() {
    return [
      {
        // Referrer-stripping checkout hop — critical for origin isolation
        source: "/checkout/whop",
        headers: [
          { key: "Referrer-Policy", value: "no-referrer" },
          { key: "Cache-Control", value: "no-store, no-cache" },
          { key: "X-Robots-Tag", value: "noindex" },
        ],
      },
      {
        // Post-payment result redirect — must not leak leakifyhub.com to Whop
        source: "/api/whop/result",
        headers: [
          { key: "Referrer-Policy", value: "no-referrer" },
          { key: "Cache-Control", value: "no-store, no-cache" },
        ],
      },
    ];
  },
};

export default nextConfig;
