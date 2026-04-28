import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/final_portfolko",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
