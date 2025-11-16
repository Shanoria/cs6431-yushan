/**
 * 获取资源完整路径（用于 CSS、inline styles 等）
 * Next.js 的 <Image> 组件会自动处理 basePath，但 CSS url() 不会
 *
 * @param {string} path - 资源路径，如 "/bg.png"
 * @returns {string} - 完整路径
 */
export function getAssetPath(path) {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
  return `${basePath}${path}`;
}
