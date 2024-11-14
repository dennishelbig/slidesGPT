import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  sassOptions: {
    api: "modern-compiler",
    silenceDeprecations: ['legacy-js-api'],
  }
};

export default nextConfig;
