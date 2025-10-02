"use client";
import React, { useState, useEffect } from "react";
// 1. 引入 usePathname 来获取当前 URL 路径
import { usePathname, useRouter } from "next/navigation";

export default function Catalog() {
  const router = useRouter();
  const pathname = usePathname(); // 2. 获取当前路径，例如 "/myself"
  const [selectedIndex, setSelectedIndex] = useState(0);

  const CatalogList = [
    { name: "Home", path: "/" },
    { name: "MySelf", path: "/myself" },
    { name: "Education", path: "/education" },
    { name: "Professional Knowledge", path: "/knowledge" },
    { name: "Picture Gallery", path: "/gallery" },
  ];

  // 3. 使用 useEffect 监听路径变化，并更新选中状态
  // 这能确保刷新页面或通过链接跳转时，导航栏状态正确
  useEffect(() => {
    const currentIndex = CatalogList.findIndex(
      (item) => item.path === pathname
    );
    if (currentIndex !== -1) {
      setSelectedIndex(currentIndex);
    }
  }, [pathname]); // 依赖项是 pathname，路径一变就执行

  const handleItemClick = (index, path) => {
    setSelectedIndex(index);
    router.push(path);
  };

  // 4. 根据路径动态设置容器的样式
  const isRightAligned = pathname === "/myself" || pathname === "/education";

  // 5. 根据路径和选中状态动态设置文字颜色
  const getTextColorClass = (index) => {
    if (selectedIndex !== index) {
      return "text-[rgb(184,184,184)]"; // 未选中都是灰色
    }
    // 如果是选中状态
    if (pathname === "/myself") {
      return "text-white scale-110"; // myself 页面，选中为白色
    }
    return "text-black scale-110"; // 其他页面，选中为黑色
  };

  return (
    // 6. 应用动态容器样式
    <div
      className={`
        h-[64px] border-b-2 border-[rgb(184,184,184)] flex items-center absolute top-0 z-10 
        transition-all duration-300 ease-in-out
        ${
          isRightAligned
            ? "justify-end w-[50%] right-[28px] px-8" // 靠右布局：加宽并向右对齐
            : "justify-center left-[28px]" // 默认居中布局
        }
      `}
    >
      {CatalogList.map((item, index) => (
        <div
          key={index}
          className={`
            h-full px-[20px] flex items-center justify-center cursor-pointer 
            transition-all duration-300 ease-in-out
            ${getTextColorClass(index)}
          `}
          onClick={() => handleItemClick(index, item.path)}
        >
          {item.name}
        </div>
      ))}
    </div>
  );
}
