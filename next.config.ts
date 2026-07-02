import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/matheus",
  assetPrefix: "/matheus/",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
