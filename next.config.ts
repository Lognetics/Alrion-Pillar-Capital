import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Curated royalty-free imagery (Unsplash). Swap for owned brand
    // photography by replacing the URLs in src/lib/media.ts.
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
    ],
  },
};

export default nextConfig;
