"use client";
import React, { useState } from "react";
import { getAssetPath } from "../../utils/assetPath";

export default function Video() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="min-h-screen flex items-center justify-center p-8 pt-24">
      <div className="w-full max-w-7xl flex gap-8 items-stretch">
        {/* 左侧视频 */}
        <div className="flex-1 flex">
          <div className="bg-black rounded-lg overflow-hidden shadow-2xl w-full flex items-center">
            <video
              controls
              className="w-full h-full object-contain"
              src={getAssetPath("/movie.mp4")}
              type="video/mp4"
            >
              Your browser does not support the video tag.
            </video>
          </div>
        </div>

        {/* 右侧艺术字/描述 */}
        <div
          className="w-1/3 bg-white/90 backdrop-blur-sm rounded-lg shadow-xl flex items-center justify-center cursor-pointer transition-all duration-500 relative overflow-hidden"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* 艺术字 */}
          <h1
            className={`text-5xl font-bold text-gray-800 text-center leading-tight px-6 transition-all duration-500 ${
              isHovered ? "opacity-0 scale-90" : "opacity-100 scale-100"
            }`}
            style={{
              fontFamily: "Georgia, serif",
              letterSpacing: "0.05em",
            }}
          >
            Sound That Never Ages.
          </h1>

          {/* 右下角提示 */}
          <p
            className={`absolute bottom-4 right-4 text-gray-400 text-xs italic transition-all duration-500 ${
              isHovered ? "opacity-0" : "opacity-100"
            }`}
          >
            Move the mouse to view the introduction
          </p>

          {/* 描述文字 */}
          <div
            className={`absolute inset-0 p-6 flex items-center transition-all duration-500 ${
              isHovered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <p className="text-gray-700 leading-relaxed text-sm">
              This is an advertisement idea for headphones. The advertisement
              starts in an elegant restaurant in the 1940s, with a phonograph
              placed on the table. The camera focuses on someone adjusting the
              equipment, connecting the headphones, and then slowly placing the
              needle on the vinyl record. The music suddenly starts, and the actor
              dances along, after which the camera pans around. A studio shot is
              interspersed in the middle. Then, the scene switches to the 1970s.
              The music style changes, and the actor in the shot changes clothes,
              holds a tape, and walks out of the door with the camera following in
              the bright light. As time progresses to 2025, the music changes
              again. The actor walks out of the door, wearing modern clothes,
              walks happily through the campus, and nods to passers-by. Finally,
              the picture shows a rotating shot of the headphones, and ends with
              the slogan "Sound That Never Ages".
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
