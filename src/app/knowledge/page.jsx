"use client";

import SkillBar from "../../components/SkillBar";

export default function Knowledge() {
  const skills = [
    { name: "SKETCH", position: "top-16 left-8" },
    { name: "FIGMA", position: "top-28 right-8" },
    { name: "PS", position: "top-38 left-8" },
    { name: "3D MAX", position: "top-52 left-8" },
    { name: "AI", position: "top-68 right-8" },
    { name: "REACT", position: "top-80 left-8" },
  ];

  const mainSkills = [
    {
      icon: "/ps.png",
      name: "Photoshop (PS)",
      description: "Photo editing & design",
      percentage: 90,
    },
    {
      icon: "/palette.png",
      name: "Illustrator (AI)",
      description: "Vector graphics design",
      percentage: 90,
    },
    {
      icon: "/triangle.png",
      name: "3D Max",
      description: "3D modeling",
      percentage: 60,
    },
    {
      icon: "/painting.png",
      name: "Figma / Sketch",
      description: "UI/UX design",
      percentage: 95,
    },
    {
      icon: "/react.png",
      name: "React",
      description: "Web development",
      percentage: 5,
    },
    {
      icon: "/blender.png",
      name: "Maya/Blender",
      description: "3D design/creat design",
      percentage: 30,
    },
    {
      icon: "/computer.png",
      name: "Unity",
      description: "VR/AR",
      percentage: 15,
    },
  ];

  return (
    <main className="text-gray-700 ralative w-full h-full">
      <div
        className="fixed top-0 right-0 h-screen w-[200px] 
                     bg-[linear-gradient(to_bottom,black_0%,transparent_70%)]"
      >
        <div className="relative h-full w-full">
          {skills.map((skill) => (
            <span
              key={skill.name}
              className={`absolute font-semibold text-xl text-white/80 ${skill.position}`}
            >
              {skill.name}
            </span>
          ))}
        </div>
      </div>
      <div
        className="fixed bottom-0 right-[250px] h-[65vh] w-[200px] 
                   bg-[linear-gradient(to_bottom,black_0%,transparent_70%)]"
      >
        <div className="relative h-full w-full">
          <span className="absolute top-16 left-8 font-semibold text-xl text-white/90">
            PROFESSIONAL
          </span>
          <span className="absolute top-32 right-8 font-semibold text-xl text-white/90">
            SKILL
          </span>
        </div>
      </div>

      <div className="absolute left-[200px] top-[36px] w-[40%] p-8 md:p-16">
        <div className="mx-auto space-y-6">
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
    </main>
  );
}
