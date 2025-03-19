"use client";

import { useState } from "react";
import Image from "next/image";

export default function Lightbox({ images }) {
  const [isOpen, setIsOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(null);

  const openLightbox = (image) => {
    setCurrentImage(image);
    setIsOpen(true);
  };

  const closeLightbox = () => {
    setIsOpen(false);
    setCurrentImage(null);
  };

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75">
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 text-white text-2xl"
          >
            &times;
          </button>
          <div className="relative w-3/4 h-3/4">
            <Image
              src={currentImage.src}
              alt={currentImage.alt}
              fill
              className="object-contain"
            />
          </div>
        </div>
      )}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {images.map((image, index) => (
          <div
            key={index}
            className="relative aspect-[16/9] w-full cursor-pointer"
            onClick={() => openLightbox(image)}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover rounded-lg"
            />
          </div>
        ))}
      </div>
    </>
  );
}
