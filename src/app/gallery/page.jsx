"use client";
import React from "react";
import Card from "../../components/Card";

export default function Gallery() {
  // 将描述直接添加到原始数据结构中
  const cardList = [
    {
      images: [
        {
          src: "/p1.jpg",
          width: 800,
          height: 1000,
          alt: "This photo was taken at my university, University of Limerick.After class, I walked back to the dorm with my classmate. Because there was still sun, my classmate took this beautiful photo for me.The shadow of my hat falls on my face like natural sunglasses. It is very cool, and I like it a lot.",
        },
        {
          src: "/p2.jpg",
          width: 800,
          height: 1200,
          alt: "This photo was taken in my dorm room.I chose all black clothes for my outfit today, I like it very much.Also, I kept my face like this on purpose, to make me look cool and hard to approach",
        },
        {
          src: "/p3.jpg",
          width: 800,
          height: 1200,
          alt: "This photo was taken on a rainy day.I wore a very thick raincoat, like a fat, round roly-poly toy.I saw myself in the elevator mirror when I was going downstairs, and I thought it was very funny, so I took this photo to record this nice and silly moment.",
        },
        {
          src: "/p4.jpg",
          width: 800,
          height: 1200,
          alt: "This photo was taken in the dorm elevator.I chose pink color for my clothes, and I also wear two cute small fish hair clips (or, little fish accessories).The dark pink and light pink match well and are not too strange. I like the small blue and pink fish to match my clothes and nail polish color.",
        },
      ],
      title: "Business Photos – Individual",
      description:
        "A formal-style portrait representing myself,suitable as a professional headshot.",
    },
    {
      images: [
        {
          src: "/b1.jpg",
          width: 800,
          height: 1200,
          alt: "This is a low-angle photo showing a Chinese building with many floors (maybe a tower).The building is mostly a striking deep red color, and the curved roof corners are stacked up many times.The roof parts have colorful tiles and decorations, and the whole structure looks old and big under the cloudy sky.",
        },
        {
          src: "/b2.jpg",
          width: 800,
          height: 1200,
          alt: "The picture is outside, and the main thing is a big, smooth silver metal statue. It is very different from old Buddha statues.The surface is shiny and reflects the light and the things around it.The rough concrete walls and the metal rails at the bottom make a strong contrast with the smooth statue in the middle, giving a feeling like holy and science fiction.",
        },
        {
          src: "/b3.jpg",
          width: 800,
          height: 1200,
          alt: "On the left side of the photo, there is a very shiny gold relief carving with beautiful Buddha statues and complex patterns.On the right side, there is a dark wood board with a lot of Chinese Buddhist text carved on it, showing old wisdom.The rich gold carving and the serious dark text make a good contrast, creating a solemn and holy art atmosphere.",
        },
        {
          src: "/b4.png",
          width: 800,
          height: 1200,
          alt: "The sitting Buddha statue looks very important and mysterious because of the bright light.The light makes the face and the clothes look very clear, but the background is very dark.This kind of light makes the statue feel very holy and quiet.",
        },
      ],
      title: "Aesthetic Photos – Photography",
      description:
        "Shot in a museum, these creative photos show my love for art and culture.",
    },
    {
      images: [
        {
          src: "/o1.jpg",
          width: 1200,
          height: 800,
          alt: "This photo is also my parrots.They are 4 years old, one is a Sun Conure and one is a Lovebird.They always like to stay together, I think the atmosphere is very warm, so I took this photo to remember the good time, every minute and every second.",
        },
        {
          src: "/o2.jpg",
          width: 1200,
          height: 800,
          alt: `This photo was taken in Hongcun, Anhui.Hongcun is a beautiful Chinese city.Three big white geese are standing on the green grass after the rain.Behind them is a pond with many lotus leaves and lots of green plants, and then there are old grey-white Huizhou-style buildings with special "horse-head walls."The whole picture looks soft and quiet, showing the countryside view and peaceful life of an old water village.`,
        },
        {
          src: "/o3.jpg",
          width: 1200,
          height: 800,
          alt: "This is a very colorful and warm close-up photo of a green Quaker Parrot baby.The parrot is in a clear box, standing up, and its big eyes and bright green and yellow feathers are lit by warm light, looking very cute.The yellow-green bedding at the bottom matches the parrot's feathers well, and the warm light makes the whole picture feel cozy and soft.",
        },
        {
          src: "/o4.png",
          width: 1200,
          height: 800,
          alt: "This is a lively photo of a group of Red-crowned Cranes in nature. The photo was taken in Qiqihar, China, which is called the City of Red-crowned Cranes.In the front, some cranes are doing different things; two of them are spreading their big black and white wings, maybe dancing or fighting, which looks very active.The background has endless green grass and a cloudy blue sky, making a peaceful scene of nature.",
        },
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
          <Card key={index} images={item.images} title={item.title} />
        ))}
      </div>
    </>
  );
}
