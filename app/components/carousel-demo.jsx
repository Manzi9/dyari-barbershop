"use client";

import Carousel from "./ui/carousel";

export default function CarouselDemo() {
  const slideData = Array.from({ length: 18 }, (_, index) => ({
    title: `Gallery Image ${index + 1}`,
    button: "Explore Component",
    src: `/gallery/gallery-pic-${index + 1}.jpg`,
  }));

  return (
    <div className="relative overflow-hidden w-full h-full py-20">
      <h2
        id="gallery"
        className="text-4xl font-bold text-center mb-12 text-gray-700"
      >
        Gallery
      </h2>
      <Carousel slides={slideData} />
    </div>
  );
}
