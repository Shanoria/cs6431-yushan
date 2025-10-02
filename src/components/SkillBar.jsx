"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";

export default function SkillBar({ icon, name, description, percentage }) {
  const [animatedValue, setAnimatedValue] = useState(0);
  const barRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          let currentValue = 0;
          const duration = 1500; // 动画总时长 1.5秒
          const frameRate = 60; // 帧率
          const totalFrames = (duration / 1000) * frameRate;
          // 计算每一帧应该增加的量，实现匀速
          const increment = percentage / totalFrames;

          const timer = setInterval(() => {
            currentValue += increment;
            if (currentValue >= percentage) {
              setAnimatedValue(percentage); // 确保最后停在目标值
              clearInterval(timer);
            } else {
              setAnimatedValue(Math.ceil(currentValue)); // 向上取整以显示整数
            }
          }, 1000 / frameRate); // 按帧率更新

          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    if (barRef.current) {
      observer.observe(barRef.current);
    }

    return () => observer.disconnect();
  }, [percentage]);

  return (
    // 我们将每个技能条包裹在一个 div 中，并传递 ref 给它
    <div ref={barRef}>
      {/* 第一行：图标和文字 */}
      <div className="flex items-center gap-3">
        <div className="relative w-6 h-6 flex-shrink-0">
          <Image src={icon} alt={name} layout="fill" objectFit="contain" />
        </div>
        <span className="font-semibold">{name}</span>
        <span className="text-gray-500">-</span>
        <span className="text-gray-500">{description}</span>
      </div>

      {/* 第二行：进度条和百分比 */}
      <div className="flex items-center justify-end gap-4 mt-2">
        <div className="w-56 bg-gray-200 h-3">
          <div
            className="bg-gray-800 h-3"
            style={{ width: `${animatedValue}%` }}
          ></div>
        </div>
        <span className="font-semibold text-gray-500 w-12 text-left">
          {animatedValue}%
        </span>
      </div>
    </div>
  );
}
