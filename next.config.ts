import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Volledig statische site: deploybaar op elke webserver (Apache, Nginx, Netlify, Vercel, ...).
  output: "export",
  trailingSlash: true,
  images: {
    // Bij een statische export is er geen image-server; afbeeldingen zijn vooraf op maat gemaakt.
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
