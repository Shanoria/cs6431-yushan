"use client";
import React, { useState } from "react";
import Card from "../../components/Card";
import { FaHandPointer } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { getAssetPath } from "../../utils/assetPath";

export default function Gallery() {
  // 状态管理：true 为 workList，false 为 photoList
  const [isWorkDisplay, setIsWorkDisplay] = useState(true);

  // 将描述直接添加到原始数据结构中
  const workList = [
    {
      images: [
        {
          src: getAssetPath("/p1.jpg"),
          width: 800,
          height: 1200,
        },
        {
          src: getAssetPath("/p2.jpg"),
          width: 800,
          height: 1200,
        },
        {
          src: getAssetPath("/p3.jpg"),
          width: 800,
          height: 1200,
        },
        {
          src: getAssetPath("/p4.jpg"),
          width: 800,
          height: 1200,
        },
      ],
      title: "Display of personal paintings (part)",
      description:
        "This section presents some of my artworks, featuring plum blossoms, magnolias, peonies, and peach blossoms respectively. Created with Photoshop, these pieces adopt high-saturation colors to make the images more vivid and vibrant.",
    },
    {
      images: [
        {
          src: getAssetPath("/m1.png"),
          width: 800,
          height: 1000,
        },
        {
          src: getAssetPath("/m2.png"),
          width: 800,
          height: 1200,
        },
        {
          src: getAssetPath("/m3.png"),
          width: 800,
          height: 1200,
        },
        {
          src: getAssetPath("/m4.png"),
          width: 800,
          height: 1200,
        },
        {
          src: getAssetPath("/m5.png"),
          width: 800,
          height: 1200,
        },
      ],
      title: "Display of modelling (part)",
      description:
        "This section showcases some of my 3D modeling works, created with 3ds Max.",
    },

    {
      images: [
        {
          src: getAssetPath("/w1.png"),
          width: 1200,
          height: 800,
        },
        {
          src: getAssetPath("/w2.png"),
          width: 1200,
          height: 800,
        },
        {
          src: getAssetPath("/w3.png"),
          width: 1200,
          height: 800,
        },
        {
          src: getAssetPath("/w4.png"),
          width: 1200,
          height: 800,
        },
        {
          src: getAssetPath("/w5.jpg"),
          width: 1200,
          height: 800,
        },
        {
          src: getAssetPath("/w6.jpg"),
          width: 1200,
          height: 800,
        },
        {
          src: getAssetPath("/w7.jpg"),
          width: 1200,
          height: 800,
        },
      ],
      title: "Display of web page  (part)",
      description:
        "This section presents some of my web design works, created with Sketch and Figma. The pages feature diverse styles, including a Dunhuang-themed page with Chinese aesthetics and a minimalist style suitable for children's education.",
    },
  ];
  const photoList = [
    {
      images: [
        {
          src: getAssetPath("/photo1.jpg"),
          width: 800,
          height: 1200,
        },
      ],
      title: "Passion photo ",
      description: `This composite image is a true reflection of my love for traditional Chinese culture and art.To express this passion fully, I intentionally blended four things that matter most in my life — Guqin, calligraphy, tea ceremony, and Hanfu culture.I've been playing the Guqin for five years, practicing the tea ceremony for one year, and I'm currently learning calligraphy with a teacher.Every detail in the image holds this devotion:
        • The Guqin strings at the bottom
        • The calligraphy tools at the to
        • The tea set in the foreground
        • The Hanfu I'm wearing in the middle`,
    },
    {
      images: [
        {
          src: getAssetPath("/photo2.jpg"),
          width: 800,
          height: 1200,
        },
      ],
      title: "Business photo",
      description:
        "This is my business headshot.It has high-definition clarity, and the skin details are well-preserved. I applied refined makeup and am looking directly at the camera with a confident expression and a subtle smile.I also slightly tilted my head to present my best angle, as I prefer this over a straight-on shot. The lighting is positioned to enhance my facial contours.I chose this specific image because I appreciate my micro-expression and my eyes. By minimizing the smile, I achieve a more professional appearance, showcasing a different, more professional side of myself to the camera.",
    },

    {
      images: [
        {
          src: getAssetPath("/photo3.jpg"),
          width: 800,
          height: 1200,
        },
      ],
      title: "Aesthetic photo",
      description:
        "I really like images that are full of dramatic lighting effects, and I would describe this style as Aesthetic.With Christmas approaching, various places are filled with a festive spirit, which creates a warm and vintage atmosphere.I chose a vertical composition because of the numerous Christmas decorations on the ceiling, and I used them to fill the space at the top.In terms of depth of field and layering, the foreground features the audience, the middle ground is the performers, and the background is the decorations. This clear layering makes the viewers feel as if they are right there in the scene.The dominant colors are dark red and dark brown, which create a strong contrast with the gold and white elements—a very vintage and dramatic combination.The overall environment is dark, but the center of the stage is highlighted by localized warm lighting, which produces a dramatic light-and-shadow effect and emphasizes the focus of the festival and the performance.",
    },
  ];

  // 根据状态选择当前显示的列表
  const currentList = isWorkDisplay ? workList : photoList;

  // 切换显示模式
  const toggleDisplay = () => {
    setIsWorkDisplay(!isWorkDisplay);
  };

  return (
    <>
      <div className="h-[68px]"></div>
      {/* 添加右上角切换按钮 */}
      <div className="relative w-full">
        <button
          onClick={toggleDisplay}
          className="absolute top-2 right-8 z-30 flex items-center gap-2 px-4 py-2 bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-gray-200"
        >
          <FaHandPointer className="text-blue-500" />
          <span className="text-sm font-medium text-gray-700">
            {isWorkDisplay ? "Phone Display" : "Work Display"}
          </span>
        </button>
      </div>
      <div className="flex justify-around gap-10 w-full items-center h-[calc(100vh-68px)] overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={isWorkDisplay ? "work" : "photo"}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="flex justify-around gap-10 w-full"
          >
            {currentList.slice(0, 3).map((item, index) => (
              <Card
                key={`${isWorkDisplay ? "work" : "photo"}-${index}`}
                images={item.images}
                title={item.title || ""}
                description={item.description}
              />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </>
  );
}
