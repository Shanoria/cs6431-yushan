"use client";
import Image from "next/image";
import { getAssetPath } from "../../utils/assetPath";
import SkillBar from "../../components/SkillBar"; // 引入技能条组件

export default function Education() {
  // 从原 Knowledge 页面迁移过来的技能数据
  const mainSkills = [
    {
      icon: getAssetPath("/ps.png"),
      name: "Photoshop (PS)",
      description: "Photo editing & design",
      percentage: 90,
    },
    {
      icon: getAssetPath("/palette.png"),
      name: "Illustrator (AI)",
      description: "Vector graphics design",
      percentage: 90,
    },
    {
      icon: getAssetPath("/triangle.png"),
      name: "3D Max",
      description: "3D modeling",
      percentage: 60,
    },
    {
      icon: getAssetPath("/painting.png"),
      name: "Figma / Sketch",
      description: "UI/UX design",
      percentage: 95,
    },
    {
      icon: getAssetPath("/react.png"),
      name: "React",
      description: "Web development",
      percentage: 5,
    },
    {
      icon: getAssetPath("/blender.png"),
      name: "Maya/Blender",
      description: "3D design/creat design",
      percentage: 30,
    },
    {
      icon: getAssetPath("/computer.png"),
      name: "Unity",
      description: "VR/AR",
      percentage: 15,
    },
  ];

  return (
    <main className="flex h-screen w-full overflow-hidden text-gray-700">
      {/* 最左侧固定侧边栏 */}
      <div className="fixed top-0 left-0 h-screen w-48 bg-gray-800 z-0">
        <Image
          src={getAssetPath("/side_bg.png")}
          alt="side_bg"
          width={0}
          height={0}
          sizes="100vw"
          style={{ height: "100%", width: "auto" }}
        />
        <div className="absolute inset-0 z-10 flex items-center justify-center">
          <h1 className="text-white mt-16 text-2xl font-bold tracking-[0.5em] [writing-mode:vertical-rl] [text-orientation:upright]">
            EDUCATION & SKILLS
          </h1>
        </div>
      </div>

      {/* 右侧主内容区域（包含 Education 和 Knowledge） */}
      <div className="ml-48 flex-1 h-screen pt-[64px] px-8 md:px-16 flex items-center justify-center">
        {/* 外层容器限制高度并居中内容 */}
        <div className="flex w-full h-[85%] max-w-6xl gap-x-12">
          {/* === 左半部分：Education（改为上下布局） === */}
          <div className="flex flex-col w-1/2 justify-between items-center pr-12 overflow-y-auto scrollbar-hide py-4">
            {/* 1. 本科阶段 */}
            <div className="flex flex-col items-center text-center">
              <Image
                src={getAssetPath("/daLianJiaoTongLogo.png")}
                alt="Dalian Jiaotong University Logo"
                width={200}
                height={200}
              />
              <h2 className="mt-4 text-lg font-semibold">
                DALIAN JIAOTONG UNIVERSITY
              </h2>
              <p className="text-gray-600 mt-4 text-sm leading-relaxed">
                When I was in college, I learned how to use DW, 3D modelling and
                other tools. At the same time, I participated in the poster
                design of the digital Dunhuang project and won the first prize.
              </p>
            </div>

            {/* 2. 研究生阶段 */}
            <div className="flex flex-col items-center text-center mt-8">
              <Image
                src={getAssetPath("/universityOfLimerick.png")}
                alt="University of Limerick Logo"
                width={200}
                height={200}
              />
              <h2 className="mt-4 text-lg font-semibold">
                UNIVERSITY OF LIMERICK
              </h2>
              <p className="text-gray-600 mt-4 text-sm leading-relaxed">
                I am currently studying for a postgraduate degree. I am learning
                to use some code to make my design work, such as react. At the
                same time, I have also learned new modelling tools, Maya,
                blender and new parts of VR/AR.
              </p>
            </div>
          </div>

          {/* === 右半部分：Knowledge（去除了黑条的纯净列表） === */}
          <div className="flex flex-col w-1/2 justify-center pl-4 overflow-y-auto scrollbar-hide py-4">
            <div className="w-full space-y-7">
              {mainSkills.map((skill) => (
                <SkillBar
                  key={skill.name}
                  icon={skill.icon}
                  name={skill.name}
                  description={skill.description}
                  percentage={skill.percentage}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
