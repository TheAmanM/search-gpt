import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  distDir: "dist",
  async rewrites() {
    return [
      {
        source: "/relay-EQDD/static/:path*",
        destination: "https://us-assets.i.posthog.com/static/:path*",
      },
      {
        source: "/relay-EQDD/:path*",
        destination: "https://us.i.posthog.com/:path*",
      },
      {
        source: "/relay-EQDD/flags",
        destination: "https://us.i.posthog.com/flags",
      },
      // PostHog rewrites
      {
        source: "/ingest/static/:path*",
        destination: "https://us-assets.i.posthog.com/static/:path*",
      },
      {
        source: "/ingest/:path*",
        destination: "https://us.i.posthog.com/:path*",
      },
      {
        source: "/ingest/flags",
        destination: "https://us.i.posthog.com/flags",
      },
    ];
  },
  // This is required to support PostHog trailing slash API requests
  skipTrailingSlashRedirect: true,
};

export default nextConfig;
