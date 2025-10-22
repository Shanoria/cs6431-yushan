"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

// 图片滑动动画的变体
const variants = {
  enter: (direction) => ({
    x: direction > 0 ? "100%" : "-100%",
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction) => ({
    x: direction < 0 ? "100%" : "-100%",
    opacity: 0,
  }),
};

export default function Card({ images, title }) {
  // state 同时保存当前页面索引和滑动方向
  const [[page, direction], setPage] = useState([0, 0]);

  // --- 新增代码：图片预加载 ---
  useEffect(() => {
    // 当组件挂载后，遍历图片数组，在后台预加载所有图片
    images.forEach((image) => {
      const img = new window.Image();
      img.src = image.src;
    });
  }, [images]); // 依赖项是 images 数组，如果图片列表变化会重新预加载

  if (!images || images.length === 0) {
    return null;
  }

  // 翻页逻辑
  const paginate = (newDirection) => {
    let newIndex = page + newDirection;
    // 实现循环播放
    if (newIndex < 0) {
      newIndex = images.length - 1;
    } else if (newIndex >= images.length) {
      newIndex = 0;
    }
    setPage([newIndex, newDirection]);
  };

  const currentImage = images[page];

  return (
    <div className="max-w-sm w-full rounded-xl overflow-hidden shadow-lg bg-white transform hover:scale-105 transition-transform duration-300 ease-in-out shrink-0 flex flex-col">
      {/* 图片容器 */}
      <div className="relative w-full h-96 group overflow-hidden">
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={page} // key 必须是动态的，以便 AnimatePresence 检测到变化
            className="absolute w-full h-full"
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 },
            }}
          >
            <Image
              src={currentImage.src}
              alt={currentImage.alt} // 使用从数据中传入的 alt
              width={currentImage.width}
              height={currentImage.height}
              className="w-full h-full object-cover"
              priority // 优先加载第一张可见的图片
            />
          </motion.div>
        </AnimatePresence>

        {/* 左右箭头按钮 */}
        {images.length > 1 && (
          <>
            <button
              onClick={(e) => {
                e.stopPropagation();
                paginate(-1);
              }}
              className="absolute top-1/2 left-3 -translate-y-1/2 z-20 p-2 bg-white/70 rounded-full shadow-lg hover:bg-white transition-all opacity-0 group-hover:opacity-100 focus:opacity-100"
              aria-label="Previous Image"
            >
              <BsChevronLeft className="h-5 w-5 text-gray-900" />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                paginate(1);
              }}
              className="absolute top-1/2 right-3 -translate-y-1/2 z-20 p-2 bg-white/70 rounded-full shadow-lg hover:bg-white transition-all opacity-0 group-hover:opacity-100 focus:opacity-100"
              aria-label="Next Image"
            >
              <BsChevronRight className="h-5 w-5 text-gray-900" />
            </button>
          </>
        )}
      </div>

      {/* 文字描述区域 */}
      <div className="px-6 py-4 flex-grow flex flex-col justify-center items-center">
        <h3 className="text-l mb-2 text-gray-800 font-semibold">{title}</h3>
        {/* 修改开始：调整高度并移除 relative */}
        <div className="h-16 w-full flex items-center justify-center">
          {" "}
          {/* 将 h-12 调整为 h-16 (约等于3-4行高度) */}
          <AnimatePresence mode="wait">
            {" "}
            {/* mode="wait" 确保旧文字退出后再显示新文字 */}
            <motion.p
              key={page} // key 同样是动态的
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              // 修改开始：移除 absolute，添加最大高度、滚动和滚动条样式
              className="text-gray-500 text-center text-sm max-h-full overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent px-1"
              // 修改结束
            >
              {currentImage.alt} {/* 显示当前图片的描述文字 */}
            </motion.p>
          </AnimatePresence>
        </div>
        {/* 修改结束 */}
      </div>
    </div>
  );
}
