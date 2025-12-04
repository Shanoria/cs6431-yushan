"use client";
import React, { useState } from "react";
import { getAssetPath } from "../../utils/assetPath";

export default function Video() {
  const [isHovered, setIsHovered] = useState(false);
  const [showDetail, setShowDetail] = useState(false);

  return (
    <div className="min-h-screen flex items-center justify-center p-8 pt-24 relative">
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

      {/* 页面右下角箭头按钮 */}
      <button
        onClick={() => setShowDetail(true)}
        className="fixed bottom-8 right-8 w-14 h-14 bg-white/90 hover:bg-white rounded-full shadow-xl flex items-center justify-center transition-all duration-300 hover:scale-110 group z-40"
        aria-label="查看视频详情"
      >
        <svg
          className="w-7 h-7 text-gray-800 group-hover:text-blue-600 transition-colors duration-300"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>

      {/* 视频详情页面 - 全屏覆盖 */}
      {showDetail && (
        <div className="fixed inset-0 bg-white z-50 overflow-y-auto">
          {/* 返回按钮 */}
          <div className="absolute top-8 left-8 z-10">
            <button
              onClick={() => setShowDetail(false)}
              className="flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition-all duration-300 group"
              aria-label="返回视频页"
            >
              <svg
                className="w-5 h-5 text-gray-700 group-hover:text-gray-900 transition-colors duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
              <span className="text-gray-700 group-hover:text-gray-900 font-medium">
                Back
              </span>
            </button>
          </div>

          {/* 详情内容区域 */}
          <div className="min-h-screen p-8 pt-24">
            <div className="max-w-7xl mx-auto">
              {/* 网格布局 */}
              <div className="grid grid-cols-2 gap-6 h-auto">
                {/* 左侧列 */}
                <div className="flex flex-col gap-6">
                  {/* 1. Studio storyboard - 左上 */}
                  <div className="bg-white rounded-2xl shadow-lg p-6 h-[500px] overflow-hidden">
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">
                      Studio Storyboard
                    </h2>
                    <div className="w-full h-[calc(100%-3rem)] flex items-center justify-center">
                      <img
                        src={getAssetPath("/video1.jpg")}
                        alt="Studio Storyboard"
                        className="w-full h-full object-contain rounded-lg"
                      />
                    </div>
                  </div>

                  {/* 4. Responsibility - 左下 */}
                  <div className="bg-white rounded-2xl shadow-lg p-6 h-[600px] overflow-y-auto">
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">
                      Responsibility
                    </h2>
                    <p className="text-gray-700 leading-relaxed text-sm">
                      As the photographer for this headphone advertisement, though not a professional, I conducted thorough preliminary research on the shooting logic of numerous high-quality headphone ads to develop a lens approach tailored to the product's characteristics. In terms of camera movement, I primarily used progressive tracking shots—gradually pushing in from a wide-angle to the subject. This not only preserves the spatial depth and atmosphere of the scene but also naturally highlights the detailed features of the headphones. By advancing the shot scale, I enhanced the visual weight of the main subject, ensuring the headphones stand out without feeling disjointed in the scene.
                      <br /><br />
                      To boost flexibility in post-editing, I captured additional groups of environmental cutaways and narrative long takes, leaving ample room for footage assembly and avoiding editing gaps. Meanwhile, I adopted a shooting method of transitioning from character-centered composition to product focus. Taking the character's usage scenarios and emotional states as visual guides, I used lens language to smoothly shift to close-ups of the headphones, creating a seamless visual flow of "character - scene - product". This integrates the product display into the narrative logic, resulting in more cohesive transitions and a complete story, effectively elevating the ad's appeal and persuasiveness.
                    </p>
                  </div>
                </div>

                {/* 右侧列 */}
                <div className="flex flex-col gap-6">
                  {/* 2. Shoot storyboard - 右上 */}
                  <div className="bg-white rounded-2xl shadow-lg p-6 h-[300px] overflow-hidden">
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">
                      Shoot Storyboard
                    </h2>
                    <div className="w-full h-[calc(100%-3rem)] flex items-center justify-center">
                      <img
                        src={getAssetPath("/video2.jpg")}
                        alt="Shoot Storyboard"
                        className="w-full h-full object-contain rounded-lg"
                      />
                    </div>
                  </div>

                  {/* 3. Shooting - 右中 */}
                  <div className="bg-white rounded-2xl shadow-lg p-6 h-[280px]">
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">
                      Shooting
                    </h2>
                    <div className="space-y-4">
                      <div>
                        <h3 className="text-lg font-semibold text-gray-700 mb-2">
                          Music:
                        </h3>
                        <ul className="list-disc list-inside text-gray-600 space-y-1 text-sm">
                          <li>Waltz in the cloud</li>
                          <li>Don't stop me now by Queen</li>
                          <li>High hopes by Panic! at the Disco</li>
                        </ul>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-700 mb-2">
                          Shooting Equipment:
                        </h3>
                        <p className="text-gray-600 text-sm">DJI Pocket 3</p>
                      </div>
                    </div>
                  </div>

                  {/* 5. Shooting titbits - 右下 */}
                  <div className="bg-white rounded-2xl shadow-lg p-6">
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">
                      Shooting Titbits
                    </h2>
                    <div className="grid grid-cols-2 gap-4">
                      <img
                        src={getAssetPath("/behind_the_scenes1.jpg")}
                        alt="Behind the scenes 1"
                        className="w-full h-auto object-cover rounded-lg"
                      />
                      <img
                        src={getAssetPath("/behind_the_scenes2.jpg")}
                        alt="Behind the scenes 2"
                        className="w-full h-auto object-cover rounded-lg"
                      />
                      <img
                        src={getAssetPath("/behind_the_scenes3.jpg")}
                        alt="Behind the scenes 3"
                        className="w-full h-auto object-cover rounded-lg"
                      />
                      <img
                        src={getAssetPath("/behind_the_scenes4.jpg")}
                        alt="Behind the scenes 4"
                        className="w-full h-auto object-cover rounded-lg"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
