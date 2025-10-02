import path from "path";
import { fileURLToPath } from "url";

// 获取 ESM 的 __dirname 等效值
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default {
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      //路径映射
      "@": path.resolve(__dirname, "src"),
    };
    return config;
  },
};
