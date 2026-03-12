"use client";
import React, { useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";

export default function Catalog() {
  const router = useRouter();
  const pathname = usePathname();
  const [selectedIndex, setSelectedIndex] = useState(0);

  // 1. 修改 CatalogList，为 Others 添加 subItems
  const CatalogList = [
    { name: "Home", path: "/" },
    { name: "MySelf", path: "/myself" },
    { name: "Education", path: "/education" },
    { name: "Picture Gallery", path: "/gallery" },
    { name: "Video", path: "/video" },
    {
      name: "Others",
      path: "/others",
      subItems: [
        { name: "You Are a Note", path: "/others" },
        { name: "The Sound of First Intuition", path: "/firstIntuition" }, // 暂时占位的路由
      ],
    },
  ];

  useEffect(() => {
    // 2. 优化选中逻辑：遍历检查主路径和子路径
    const currentIndex = CatalogList.findIndex((item) => {
      if (item.path === pathname) return true;
      if (item.subItems && item.subItems.some((sub) => sub.path === pathname))
        return true;
      return false;
    });

    if (currentIndex !== -1) {
      setSelectedIndex(currentIndex);
    }
  }, [pathname]);

  const handleItemClick = (index, path) => {
    setSelectedIndex(index);
    router.push(path);
  };

  const isRightAligned = pathname === "/myself" || pathname === "/education";

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
        // 3. 在外层添加 relative 和 group，以便控制下拉菜单
        <div key={index} className="relative h-full flex items-center group">
          {/* 主导航项 */}
          <div
            className={`
              h-full px-[20px] flex items-center justify-center cursor-pointer 
              transition-all duration-300 ease-in-out
              ${getTextColorClass(index)}
            `}
            onClick={() => {
              // 如果有子菜单，点击主菜单默认跳转到第一个子页面；没有则正常跳转
              const targetPath = item.subItems
                ? item.subItems[0].path
                : item.path;
              handleItemClick(index, targetPath);
            }}
          >
            {item.name}
          </div>

          {/* 下拉菜单（仅在存在 subItems 时渲染） */}
          {item.subItems && (
            <div className="absolute top-[64px] left-1/2 -translate-x-1/2 w-[220px] bg-white/95 backdrop-blur-md shadow-lg rounded-b-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 flex flex-col overflow-hidden border border-gray-100 z-50">
              {item.subItems.map((subItem, subIdx) => (
                <div
                  key={subIdx}
                  className="px-4 py-3 text-sm text-gray-500 hover:bg-gray-100 hover:text-black cursor-pointer text-center transition-colors"
                  onClick={(e) => {
                    e.stopPropagation(); // 阻止事件冒泡，防止触发外层点击
                    handleItemClick(index, subItem.path);
                  }}
                >
                  {subItem.name}
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
