"use client";
import React, { useState } from "react";
import Image from "next/image";

export default function Card({ images, title, description }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!images || images.length === 0) {
    return null;
  }

  const handlePrev = (e) => {
    e.stopPropagation();
    e.preventDefault();
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
    e.currentTarget.blur();
  };

  const handleNext = (e) => {
    e.stopPropagation();
    e.preventDefault();
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
    e.currentTarget.blur();
  };

  const currentImage = images[currentIndex];

  return (
    <div className="max-w-sm w-full rounded-xl overflow-hidden shadow-lg bg-white transform hover:scale-105 transition-transform duration-300 ease-in-out shrink-0">
      <div className="relative w-full group">
        <Image
          src={currentImage.src}
          alt={title}
          width={currentImage.width}
          height={currentImage.height}
          className="w-full h-auto object-cover aspect-[4/5]"
          priority
        />

        {images.length > 1 && (
          <>
            <button
              onClick={handlePrev}
              className="absolute top-1/2 left-3 -translate-y-1/2 z-20 p-2 bg-white/70 rounded-full shadow-lg hover:bg-white transition-all opacity-0 group-hover:opacity-100 focus:opacity-100"
              aria-label="Previous Image"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-gray-900"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={3}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>

            <button
              onClick={handleNext}
              className="absolute top-1/2 right-3 -translate-y-1/2 z-20 p-2 bg-white/70 rounded-full shadow-lg hover:bg-white transition-all opacity-0 group-hover:opacity-100 focus:opacity-100"
              aria-label="Next Image"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-gray-900"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={3}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </>
        )}
      </div>

      <div className="px-6 py-4">
        <h3 className="text-l mb-2 text-gray-800">{title}</h3>
        <p className="text-gray-500 text-center">{description}</p>
      </div>
    </div>
  );
}
