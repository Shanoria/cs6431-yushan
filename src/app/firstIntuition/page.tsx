"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { getAssetPath } from "../../utils/assetPath";

// 视频轮播数据
const videoData = [
  { id: 1, src: "/part1.mp4" },
  { id: 2, src: "/part2.mp4" },
];

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

export default function FirstIntuitionPage() {
  const [[page, direction], setPage] = useState([0, 0]);

  const paginate = (newDirection) => {
    let newIndex = page + newDirection;
    if (newIndex < 0) {
      newIndex = videoData.length - 1;
    } else if (newIndex >= videoData.length) {
      newIndex = 0;
    }
    setPage([newIndex, newDirection]);
  };

  return (
    <div className="h-screen w-full pt-[64px] overflow-hidden flex flex-col bg-[#fcfcfc] text-gray-800">
      <div className="flex-1 flex gap-8 p-8 min-h-0 min-w-0 max-w-screen-2xl mx-auto w-full">
        {/* ================= 左侧列 ================= */}
        <div className="flex-1 flex flex-col gap-6 min-w-0 h-full">
          {/* 1. 视频轮播区 */}
          <div className="relative w-full h-[45%] rounded-2xl overflow-hidden bg-black shadow-lg group flex-shrink-0">
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
                  opacity: { duration: 0.2 },
                }}
                className="absolute inset-0 w-full h-full flex items-center justify-center"
              >
                <video
                  controls
                  className="w-full h-full object-contain"
                  src={getAssetPath(videoData[page].src)}
                >
                  Your browser does not support the video tag.
                </video>
              </motion.div>
            </AnimatePresence>

            <button
              onClick={() => paginate(-1)}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-3 bg-white/20 hover:bg-white/40 backdrop-blur-md rounded-full text-white transition-all opacity-0 group-hover:opacity-100"
            >
              <BsChevronLeft size={20} />
            </button>
            <button
              onClick={() => paginate(1)}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-3 bg-white/20 hover:bg-white/40 backdrop-blur-md rounded-full text-white transition-all opacity-0 group-hover:opacity-100"
            >
              <BsChevronRight size={20} />
            </button>

            <div className="absolute top-4 right-4 z-20 bg-black/50 text-white text-xs px-3 py-1 rounded-full backdrop-blur-sm">
              Video {page + 1} / {videoData.length}
            </div>
          </div>

          {/* 2. 公式区域 */}
          <div className="flex-shrink-0 bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
            <h3 className="text-xl font-bold text-gray-900 mb-3 tracking-tight">
              Visualisation formula
            </h3>
            <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 inline-block w-full text-center">
              <span className="font-mono text-lg text-gray-800 font-semibold tracking-wide">
                Word Length - {"{"}Odd : Left Zone{"}"} {"{"}Even : Right Zone
                {"}"}
              </span>
            </div>
          </div>

          {/* 3. 左侧说明文字区 (已更新为最新文案) */}
          <div className="flex-1 overflow-y-auto custom-scrollbar bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
            <h3 className="text-lg font-bold text-gray-900 mb-4 pb-2 border-b border-gray-100">
              Algorithmic Composition Rule: From Intuition to Sound
            </h3>
            <div className="space-y-5 text-sm text-gray-600 leading-relaxed font-light">
              <div>
                <h4 className="font-semibold text-gray-800 mb-1">
                  Step 1: Interface Mapping
                </h4>
                <p>
                  The Freesound Loop Generator is divided into two trigger
                  zones:
                </p>
                <ul className="list-disc list-inside mt-2 space-y-1 ml-2">
                  <li>Left Zone (Odd): Keys 3, 4, W, E, S, D, Z, X</li>
                  <li>Right Zone (Even): Keys 5, 6, R, T, F, G, C, V</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-gray-800 mb-1">
                  Step 2: The Intuition Engine
                </h4>
                <p>
                  Open a random text. Capture the first word by pure intuition.
                </p>
                <ul className="list-disc list-inside mt-2 space-y-1 ml-2">
                  <li>
                    If ODD number of letters: Trigger a random key in the Left
                    Zone.
                  </li>
                  <li>
                    If EVEN number of letters: Trigger a random key in the Right
                    Zone.
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-gray-800 mb-1">
                  Step 3: Synthesis
                </h4>
                <p>
                  Record a sequence of 10–15 sounds to create a sparse,
                  atmospheric soundscape. Finally, play back the entire sequence
                  rapidly to transform isolated &quot;intuitions&quot; into a
                  structured musical finale.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ================= 右侧列 ================= */}
        <div className="flex-1 flex flex-col gap-6 min-w-0 h-full">
          {/* 1. 顶部 PDF 按钮 */}
          <div className="flex-shrink-0 bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col justify-center items-start">
            <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight mb-4">
              More details
            </h2>
            <a
              href={getAssetPath("/CS6042_assignment2.pdf")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-6 py-3 bg-gray-900 text-white rounded-xl hover:bg-gray-800 hover:scale-[1.02] transition-all text-base font-medium shadow-md group"
            >
              <svg
                className="w-6 h-6 text-white group-hover:animate-bounce"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
              Click to view complete assignment PDF
            </a>
          </div>

          <div className="flex-1 overflow-y-auto custom-scrollbar bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
            <div className="prose prose-sm max-w-none text-gray-600 leading-loose font-light space-y-4">
              <p>
                I named my interactive soundscape project &quot;The Sound of
                First Intuition.&quot; To explain my motivation, I have to
                mention a cherished memory with my grandma. When I was a kid in
                the countryside, we played a simple game with small stones. She
                would throw a stone on the ground; if it bounced an odd number
                of times, she clapped once. If it bounced an even number of
                times, she clapped twice. This simple rule created a unique,
                unpredictable rhythm. This memory became the core inspiration
                for my algorithmic performance.
              </p>
              <p>
                While designing the rules, I was heavily inspired by the
                &quot;Fluxus&quot; art movement and Japanese experimental
                artists like Yoko Ono and Takehisa Kosugi. They often used daily
                actions or simple text instructions as an &quot;Event
                Score&quot; to create art rather than traditional musical notes.
                My rule of counting the letters of a randomly chosen word to
                trigger left or right sounds, is directly inspired by their
                philosophy. At the same time, my performance is also a simple
                form of &quot;Text Sonification,&quot; where I translate
                physical text data into an audio experience.
              </p>
              <p>
                For the tool, I chose the Freesound Loop Generator. I selected
                it because it can quickly load 16 completely random and
                unpredictable sound samples, ranging from natural environments
                to mechanical noises. This unpredictability perfectly matches my
                chance-based design.
              </p>
              <p>
                However, there was a significant limitation that deeply inspired
                me. This software is originally designed as a step sequencer to
                generate music loops. To strictly follow the assignment rule of
                not using autonomous generation, I had to overcome this
                limitation. I decided to completely ignore its main looping
                feature and use my computer keyboard to manually trigger the 16
                pads. This limitation inspired me to transform an automatic
                sequencing tool into a live, manual performance instrument.
              </p>
              <p>
                My performance strictly follows an algorithm. I open an English
                article and pick the first word my intuition sees. I count the
                letters: if it is an odd number, I press a key on the left side
                of my keyboard; if even, I press the right side. The performance
                has two phases. First, I do this slowly, creating a scattered
                soundscape while secretly writing down my keystrokes. Then, for
                the climax, I rapidly play back the entire recorded sequence.
              </p>
              <p>
                Ultimately, my algorithmic rules sometimes produce chaotic and
                unharmonious audio textures. However, I believe this
                &quot;ugliness&quot; is exactly the core beauty of chance
                operations. It removes my subjective musical bias and lets the
                algorithm decide. It reminds us that sound is just sound, and we
                don't always need to force it into a traditional musical
                structure.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
