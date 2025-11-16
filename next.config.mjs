// next.config.mjs

import path from "path";
import { fileURLToPath } from "url";

// 获取 __dirname (ES Module 中需要这样处理)
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const isGithubActions = process.env.GITHUB_ACTIONS === "true";

// 硬编码仓库名
const repoName = "cs6431-yushan";
const basePath = isGithubActions ? `/${repoName}` : "";

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: basePath,
  assetPrefix: basePath,
  images: {
    unoptimized: true,
  },
  trailingSlash: true,

  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      "@": path.resolve(__dirname, "src"),
    };
    return config;
  },
};

export default nextConfig;
