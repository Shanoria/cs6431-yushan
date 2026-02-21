"use client";
import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { getAssetPath } from "../../utils/assetPath";

const desc = `The United Nations Sustainable Development Goals (UN SDGs) are a global framework for action launched by the United Nations in 2015, formally known as the "2030 Agenda for Sustainable Development." Comprising 17 core goals and 169 specific sub-targets, they aim to address the world's social, economic, and environmental challenges by 2030.`;
const title = "SDGS";

const variants = {
  enter: (direction) => ({
    x: direction > 0 ? "20%" : "-20%",
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction) => ({
    x: direction < 0 ? "20%" : "-20%",
    opacity: 0,
  }),
};

const textData = [
  { id: 1, title: "Core Concept of the Project 🎵", content: `The core of this installation is that "every person is a unique musical note". Through technology, we transform human heartbeats into perceptible sound and visuals, ultimately forming a collectively harmonious work.

• Theme Alignment: The project is closely tied to the United Nations Sustainable Development Goals (SDG 3: Good Health and Well-being, SDG 10: Reduced Inequalities), exploring mental health, a sense of belonging, and the importance of "being seen."

• Core Ideas:

◦ Every individual matters; without you, the system is incomplete.

◦ Personal emotions and heartbeats (representing individual states) converge into collective harmony (representing social connection).` },
  { id: 2, title: "Technology & Algorithm Logic ⚙️", content: `Behind the installation is a sophisticated set of rules and algorithms that ensure a smooth and meaningful experience.

1. Signal Processing

• Heart rate (BPM) is read every 2 seconds.

• A moving average filter is used to smooth the signal, ignoring abnormal peaks outside the 40–150 BPM range.

2. Instrument Assignment Algorithm

• Instrument list: Piano, Violin, Flute, Synth Pad, Choir, Glockenspiel.

• When a new user joins, the next unused instrument is assigned in sequence, looping back after the list ends to avoid repetition.

3. Note Mapping Rule

• To ensure harmony, all notes belong to the C major scale.

• Notes are mapped to different heart rate ranges:

• 50–65 BPM → C

• 66–75 BPM → D

• 76–85 BPM → E

• 86–95 BPM → G

• 96+ BPM → A

4. Harmony Logic

• With multiple participants, the system will:

• Combine all notes into chords

• Dynamically adjust volume levels

• Maintain consonant intervals to avoid dissonant sounds` },
];

const sdgData = [
  { id: 1, src: getAssetPath("/sdgs1.png") },
  { id: 2, src: getAssetPath("/sdgs2.png") },
  { id: 3, src: getAssetPath("/sdgs3.png") },
  { id: 4, src: getAssetPath("/sdgs4.png") },
];

// --- 新增：右侧上部数据 ---
const rightTopData = [
  {
    id: 1,
    src: getAssetPath("/Scene0.jpg"), 
    detail: ""
  },
  {
    id: 2,
    src: getAssetPath("/Scene02.jpg"), // 确保你的静态资源里有这张图
    detail: ""
  }
];

// --- 新增：右侧下部六张图数据 ---
// 请替换为您实际的图片路径
const rightBottomData = [
  { id: 1, title: "Scene 1", src: getAssetPath("/scene1.jpg"), detail: `Entry

• A glowing pedestal stands at the center of the space; the projection wall is empty.

• Text appears on the screen: “Touch to be heard.”

• Atmosphere: Empty, incomplete, suggesting that “something is missing.”` },
  { id: 2, title: "Scene 2", src: getAssetPath("/scene2.jpg"), detail: `First Interaction

• The participant places their hand on the pulse sensor on the pedestal.

• System response:

◦ Detects heart rate (BPM)

◦ Assigns a unique instrument (e.g., Piano)

◦ Activates a musical note

◦ Projects a corresponding color

◦ Displays a geometric fragment

• The sound loops gently with the heartbeat, and the space “comes alive” but remains incomplete.` },
  { id: 3, title: "Scene 3", src: getAssetPath("/scene3.jpg"), detail: `Second Participant

• When a second person joins, the system will:

◦ Assign a new instrument (e.g., Violin)

◦ Generate a different note within the same scale

◦ Project a new color

◦ Display a new geometric fragment

• At this point, the two notes form harmony, colors begin to blend, and visual fragments start to connect.

• The atmosphere shifts from “individual” to “collective.”` },
  { id: 4, title: "Scene 4", src: getAssetPath("/scene4.jpg"), detail: ` Collective Completion

• When 4–6 participants have joined:

◦ All notes combine into a full chord

◦ All colors blend into a dynamic gradient

◦ All fragments form a complete circular mandala

• The projection wall displays: “You matter.” “This space needs you.”` },
  { id: 5, title: "Scene 5", src: getAssetPath("/scene5.jpg"), detail: ` Collective Completion

• When 4–6 participants have joined:

◦ All notes combine into a full chord

◦ All colors blend into a dynamic gradient

◦ All fragments form a complete circular mandala

• The projection wall displays: “You matter.” “This space needs you.”` },
  { id: 6, title: "Scene 6", src: getAssetPath("/scene6.jpg"), detail: `Detailed explanation` },
];

export default function SDGPage() {
  const [[page, direction], setPage] = useState([0, 0]);
  const [[textPage, textDirection], setTextPage] = useState([0, 0]);

  const paginate = (newDirection) => {
    let newIndex = (page + newDirection + sdgData.length) % sdgData.length;
    setPage([newIndex, newDirection]);
  };

  const paginateText = (newDirection) => {
    let newIndex = (textPage + newDirection + textData.length) % textData.length;
    setTextPage([newIndex, newDirection]);
  };

  return (
    /**
     * 布局重构说明：
     * 1. 使用 h-screen 锁定视口高度，用 pt-[64px] 替代 mt 避开导航栏，彻底消除垂直滚动条。
     * 2. 内层使用 flex-1 和 min-w-0/min-h-0，完美平分空间且防止子元素撑破容器，消除水平滚动条。
     */
    <div className="h-screen w-full pt-[64px] overflow-hidden flex flex-col">
      <div className="flex-1 flex gap-8 p-8 min-h-0 min-w-0">
        
        {/* 左侧区域：等宽左右布局 */}
        <div className="flex-1 flex gap-8 min-w-0">
          
          {/* 元素一：轮播图 */}
          <div className="flex-1 relative rounded-2xl overflow-hidden shadow-xl bg-gray-100 group min-w-0 h-full">
            <AnimatePresence initial={false} custom={direction}>
              <motion.div
                key={page}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.4 },
                }}
                className="absolute inset-0 w-full h-full"
              >
                <Image
                  src={sdgData[page].src}
                  alt={title}
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-black/20" />
              </motion.div>
            </AnimatePresence>

            {/* 底部描述文字 - 修正了原生的 p 标签导致 framer-motion 报错的问题 */}
            <div className="absolute bottom-0 left-0 right-0 p-8 pt-12 bg-gradient-to-t from-black/70 via-black/30 to-transparent z-10">
              <motion.p 
                key={`d-${page}`}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="text-white text-sm leading-relaxed"
              >
                {desc}
              </motion.p>
            </div>

            <button
              onClick={() => paginate(-1)}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-2 bg-white/10 hover:bg-white/30 backdrop-blur-sm rounded-full text-white transition-all opacity-0 group-hover:opacity-100"
            >
              <BsChevronLeft size={24} />
            </button>
            <button
              onClick={() => paginate(1)}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-2 bg-white/10 hover:bg-white/30 backdrop-blur-sm rounded-full text-white transition-all opacity-0 group-hover:opacity-100"
            >
              <BsChevronRight size={24} />
            </button>
          </div>

          {/* 元素二：左侧内右侧等宽元素 - 纯文字独立轮播（无背景） */}
          <div className="flex-1 relative group flex flex-col overflow-hidden min-w-0 h-full">
            <AnimatePresence mode="wait" custom={textDirection}>
              <motion.div
                key={textPage}
                custom={textDirection}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.3 }
                }}
                className="absolute inset-0 flex flex-col py-4 px-10 h-full"
              >
                {/* 1. 标题区：固定不动 */}
                <div className="flex-shrink-0 mb-4 pb-2 border-b border-gray-200/60">
                  <h3 className="text-xl font-bold text-gray-900 tracking-tight">
                    {textData[textPage].title}
                  </h3>
                </div>

                {/* 2. 内容区：内部独立滚动 */}
                <div className="flex-1 overflow-y-auto scrollbar-hide text-gray-600 text-[14px] leading-relaxed whitespace-pre-wrap font-light pr-2">
                  {textData[textPage].content}
                </div>
              </motion.div>
            </AnimatePresence>

            {/* 左右切换按钮 */}
            <button
              onClick={() => paginateText(-1)}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-20 p-2 text-gray-300 hover:text-gray-800 transition-all opacity-0 group-hover:opacity-100"
            >
              <BsChevronLeft size={22} />
            </button>
            <button
              onClick={() => paginateText(1)}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-20 p-2 text-gray-300 hover:text-gray-800 transition-all opacity-0 group-hover:opacity-100"
            >
              <BsChevronRight size={22} />
            </button>
          </div>
        </div>
{/* ================= 右侧大区域（修复重叠与对齐） ================= */}
        <div className="flex-1 rounded-2xl bg-white p-5 lg:p-6 shadow-[0_4px_20px_rgba(0,0,0,0.05)] min-w-0 h-full flex flex-col overflow-hidden">
          
          {/* 全局大标题 */}
          <div className="flex-shrink-0 mb-4 pb-2 border-b border-gray-50">
            <h2 className="text-2xl lg:text-3xl font-extrabold text-gray-900 tracking-tight">
              Storyboard
            </h2>
          </div>

          {/* --- 上半部分 (2张图，恢复左侧对齐) --- */}
          <div className="flex-shrink-0 flex flex-col gap-2 mb-4">
            <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
              The First Edition (sket)
            </h4>
            
            <div className="grid grid-cols-3 gap-x-3 gap-y-3">
              {rightTopData.map((item) => (
 
                <div key={item.id} className="flex flex-col gap-1.5">
                  <div className="relative group w-full aspect-[4/3] rounded-lg overflow-hidden bg-gray-50 border border-gray-100/50 shadow-sm flex items-center justify-center cursor-pointer">
                    <Image
                      src={item.src}
                      alt={item.title}
                      fill
                      className="object-contain transition-transform duration-700 group-hover:scale-105 p-1" 
                    />
                    
                    <div className="absolute inset-0 bg-black/80 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-all duration-300 p-3 overflow-y-auto custom-scrollbar z-10">
                      <div className="text-white text-[10px] lg:text-xs leading-relaxed font-light whitespace-pre-wrap text-left">
                        {item.detail}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 分割线 */}
          <div className="h-px w-full bg-gray-100 mb-4 flex-shrink-0"></div>

          {/* --- 下半部分 (6张图 Grid，加入局部滚动防止重叠) --- */}
          {/* 关键修改 2：去掉了会导致溢出居中的 justify-center，改为自适应结构 */}
          <div className="flex-1 min-h-0 flex flex-col">
            <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2 flex-shrink-0">
              The Final Version
            </h4>
            
            {/* 关键修改 3：在网格外部包裹一层 overflow-y-auto，如果高度不足则在内部滚动，绝不影响上方 */}
            <div className="flex-1 overflow-y-auto scrollbar-hide pb-4 pr-1">
              <div className="grid grid-cols-3 gap-x-3 gap-y-3 lg:gap-y-4">
                {rightBottomData.map((item) => (
                  <div key={item.id} className="flex flex-col gap-1.5">
                    <div className="relative group w-full aspect-[4/3] rounded-lg overflow-hidden bg-gray-100 shadow-sm cursor-pointer">
                      <Image
                        src={item.src}
                        alt={item.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-black/85 backdrop-blur-[1px] opacity-0 group-hover:opacity-100 transition-all duration-300 p-3 overflow-y-auto custom-scrollbar z-10">
                        <div className="text-white text-[10px] lg:text-xs leading-relaxed font-light whitespace-pre-wrap text-left">
                          {item.detail}
                        </div>
                      </div>
                    </div>
                    <span className="text-[11px] lg:text-xs font-medium text-gray-700 text-center truncate px-1">
                      {item.title}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}