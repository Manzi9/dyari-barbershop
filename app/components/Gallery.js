"use client";

import Image from "next/image";
import Lightbox from "./Lightbox";

const galleryImages = Array.from({ length: 18 }, (_, index) => ({
  src: `/gallery/gallery-pic-${index + 1}.jpg`,
  alt: `Gallery Image ${index + 1}`,
}));

export default function Gallery() {
  return (
    <section id="gallery" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our Gallery</h2>
        <Lightbox images={galleryImages} />
      </div>
    </section>
  );
}
