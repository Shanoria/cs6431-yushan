"use client";
import React from "react";
import Card from "../../components/Card";

export default function Gallery() {
  const cardList = [
    {
      images: [
        { src: "/p1.jpg", width: 800, height: 1000 },
        { src: "/p2.jpg", width: 800, height: 1200 },
        { src: "/p3.jpg", width: 800, height: 1200 },
        { src: "/p4.png", width: 800, height: 1200 },
      ],
      title: "Business Photos – Individual",
      description:
        "A formal-style portrait representing myself,suitable as a professional headshot.",
    },
    {
      images: [
        { src: "/b1.jpg", width: 800, height: 1200 },
        { src: "/b2.jpg", width: 800, height: 1200 },
        { src: "/b3.jpg", width: 800, height: 1200 },
        { src: "/b4.png", width: 800, height: 1200 },
      ],
      title: "Aesthetic Photos – Photography",
      description:
        "Shot in a museum, these creative photos show my love for art and culture.",
    },
    {
      images: [
        { src: "/o1.jpg", width: 1200, height: 800 },
        { src: "/o2.jpg", width: 1200, height: 800 },
        { src: "/o3.jpg", width: 1200, height: 800 },
        { src: "/o4.png", width: 1200, height: 800 },
      ],
      title: "Interest Photos – Animals",
      description:
        "A wildlife photo of red-crowned cranes,showing my passion for nature and animalphotography.",
    },
  ];

  return (
    <>
      <div className="h-[68px]"></div>
      <div className="flex justify-around gap-10 w-full items-center h-[calc(100vh-68px)]">
        {cardList.slice(0, 3).map((item, index) => (
          <Card
            key={index}
            images={item.images}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
    </>
  );
}
