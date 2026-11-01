import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Volledig statische site: deploybaar op elke webserver (Apache, Nginx, Netlify, Vercel, ...).
  output: "export",
  trailingSlash: true,
  // Afbeeldingen worden vooraf geoptimaliseerd (scripts/optimize-images.mjs) en via <picture> geserveerd;
  // next/image wordt niet gebruikt.
  images: {
    unoptimized: true,
  },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
