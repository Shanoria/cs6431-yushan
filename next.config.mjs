// next.config.js

// 1. 使用 require 导入 path 模块
const path = require("path");

// 2. 您的仓库名
const repoName = "cs6431-yushan";

/** @type {import('next').NextConfig} */
const nextConfig = {
  // 3. 您的所有配置（完全保留）
  output: "export",
  basePath: `/${repoName}`,
  assetPrefix: `/${repoName}`,
  images: {
    unoptimized: true,
  },
  trailingSlash: true,

  // 4. Webpack 配置
  // 在 CommonJS 中，__dirname 是一个全局变量，可以直接使用
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      //路径映射
      "@": path.resolve(__dirname, "src"),
    };
    return config;
  },
};

// 5. 使用 module.exports 导出
module.exports = nextConfig;
