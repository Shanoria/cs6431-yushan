import Image from "next/image";
import { getAssetPath } from "../../utils/assetPath";

export default function Education() {
  return (
    <main>
      <div className="fixed top-0 left-0 h-screen bg-gray-800">
        <Image
          src={getAssetPath("/side_bg.png")}
          alt="side_bg"
          width={0} // 设为0，由样式决定
          height={0} // 设为0，由样式决定
          sizes="100vw"
          style={{ height: "100%", width: "auto" }}
        />

        <div className="absolute inset-0 left-[20] top-[20] z-10 flexitems-center justify-center">
          <h1 className="text-white text-3xl font-bold tracking-[0.5em] [writing-mode:vertical-rl] [text-orientation:upright]">
            EDUCATION
          </h1>
        </div>
      </div>

      {/* 右侧主内容区域 */}
      <div className="ml-48 h-screen flex items-center px-8 md:px-16 overflow-hidden">
        <div className="flex w-full gap-x-24">
          {/* == 左列 == */}

          <div className="flex flex-col w-1/2 items-center text-center">
            <div>
              <Image
                src={getAssetPath("/daLianJiaoTongLogo.png")}
                alt="Dalian Jiaotong University Logo"
                width={280}
                height={280}
              />
              <h2 className="mt-4 text-lg font-semibold">
                DALIAN JIAOTONG UNIVERSITY
              </h2>
            </div>

            <p className="text-gray-600 mt-12">
              When I was in college, I learned how to use DW, 3D modelling and
              other tools. At the same time, I participated in the poster design
              of the digital Dunhuang project and won the first prize.
            </p>
          </div>

          <div className="flex flex-col w-1/2 items-center text-center">
            <p className="text-gray-600">
              I am currently studying for a postgraduate degree. I am learning
              to use some code to make my design work, such as react. At the
              same time, I have also learned new modelling tools, Maya, blender
              and new parts of VR/AR.
            </p>

            <div className="mt-12">
              <Image
                src={getAssetPath("/universityOfLimerick.png")}
                alt="University of Limerick Logo"
                width={280}
                height={280}
              />
              <h2 className="mt-4 text-lg font-semibold">
                UNIVERSITY OF LIMERICK
              </h2>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
