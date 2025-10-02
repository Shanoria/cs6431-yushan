"use client";
import React, { useRef, useEffect } from "react";
import Image from "next/image";

export default function Myself() {
  const skilList = [
    { name: "PS_logo", alt: "PS_logo" },
    { name: "XD", alt: "XD" },
    { name: "AI", alt: "AI" },
    { name: "Sketch", alt: "Sketch" },
  ];

  const learningList = [
    { name: "blender", alt: "blender" },
    { name: "c4d", alt: "c4d" },
    { name: "Dw", alt: "Dw" },
  ];

  const bambooAnimationRef = useRef(null);

  useEffect(() => {
    const animationElement = bambooAnimationRef.current;
    if (!animationElement) return;

    const playAnimation = () => {
      const direction = Math.random() < 0.5 ? -1 : 1;
      const translateX = direction * 30;

      const keyframes = [
        { transform: "translateX(0)", opacity: 1 },
        { transform: `translateX(${translateX}px)`, opacity: 0 },
      ];

      const options = {
        duration: 2000,
        easing: "ease-out",
        fill: "forwards",
      };

      animationElement.animate(keyframes, options);
    };

    const interval = setInterval(playAnimation, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="overflow-hidden">
      <div className="w-full relative">
        <Image
          src={"/myself_banner.png"}
          alt="myself_banner"
          width={1920}
          height={303}
          className="w-full h-auto"
          priority
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center w-[350]">
          <div className="text-4xl mb-4 text-white">ABOUT ME</div>
          <ul className="list-disc list-inside text-white text-lg space-y-1 ml-7">
            <li>MySelf</li>
            <li>My life</li>
            <li>My background</li>
          </ul>
        </div>
      </div>

      <div className="px-3 pt-3 md:px-12 md:pt-8 relative">
        <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-start">
          <div className="w-full md:w-1/4 flex-shrink-0">
            <Image
              src={"/parrot.jpg"}
              alt="parrot"
              width={1290}
              height={1558}
              className="w-full h-auto rounded-lg"
            />
          </div>
          <div className="w-full md:w-2/3 break-words">
            <div className="space-y-6 text-gray-700">
              <p>
                HI! !! <br />
                My name is Zhang Yushan. You can call me Shanoria. I come from
                Dalian, China. A beautiful seaside city, I love the traditional
                cultures of various countries around the world, which are very
                attractive to me. I can play the guqin, a traditional Chinese
                musical instrument. I enjoy drawing, traveling, and doing
                handcrafts. I love animals, especially parrots, and I have kept
                many of them.
              </p>
              <div>
                <p className="font-semibold text-xl mb-3">Be good at</p>
                <div className="flex items-center gap-4">
                  {skilList.map((skill) => (
                    <div key={skill.name} className="relative w-6 h-6">
                      <Image
                        src={`/${skill.name}.png`}
                        alt={skill.alt}
                        layout="fill"
                        objectFit="contain"
                      />
                    </div>
                  ))}
                  <div key={"figma.ink"}>
                    <Image
                      src={`/figma.ink.png`}
                      alt={"figma.ink"}
                      height={24}
                      width={68}
                    />
                  </div>
                </div>
              </div>
              <div>
                <p className="font-semibold text-xl mb-3">I am learning</p>
                <div className="flex items-center gap-4">
                  {learningList.map((learning) => (
                    <div key={learning.name} className="relative w-6 h-6">
                      <Image
                        src={`/${learning.name}.png`}
                        alt={learning.alt}
                        layout="fill"
                        objectFit="contain"
                      />
                    </div>
                  ))}
                </div>
              </div>
              <p>
                I majored in design as an undergraduate. During my internship, I
                worked as a UI designer and participated in the production of
                many web pages, APPs and applets, and drew a lot of posters,
                banners and some illustrations. I like to do things quietly by
                myself, and I am more introverted. Now I am currently studying
                for a postgraduate degree.
              </p>
            </div>
          </div>
        </div>

        {/* 关键修正：将竹子图片容器移回到 flex 布局的 div 之外 */}
        {/* 这样它就会相对于主内容区的右下角定位，而不会影响文字布局 */}
        <div className="absolute right-0 bottom-0 w-[408px] h-[431px] opacity-70">
          <Image
            src={"/bamboo.png"}
            alt="bamboo"
            layout="fill"
            objectFit="contain"
          />
          <Image
            ref={bambooAnimationRef}
            src={"/bamboo.png"}
            alt="bamboo animation"
            layout="fill"
            objectFit="contain"
            className="absolute right-0 bottom-0"
          />
        </div>
      </div>
    </div>
  );
}
