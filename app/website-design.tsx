"use client"; 

import Image from "next/image";
import { galleryItems } from "@/app/utils/GalleryItems";

const EgnitionGallery = () => {
  const imagesToShow = galleryItems.slice(0, 12);

  return (
    <div className="w-full flex gap-[2rem] flex-col justify-center items-center md:p-16 p-4 pt-16">
      <h2 className="text-center text-4xl md:text-5xl font-bold relative text-green-500 mb-6">
        Gallery
      </h2>
      <div className="w-full h-fit grid gap-[0.2rem] md:gap-[2rem] grid-cols-2 lg:grid-cols-4 grid-rows-auto">
        {imagesToShow.map((image) => (
          <div
            key={image.id}
            className={`w-full h-full rounded-lg relative group overflow-hidden ${
              image.id === 3 || image.id === 4 || image.id === 9 || image.id === 10
                ? "col-span-2 row-span-2"
                : "col-span-1 row-span-1"
            }`}
          >
            <Image
              alt="gallery image"
              src={image.imageNew}
              width={500}
              height={500}
              className="w-full h-full rounded-lg object-cover transform transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black bg-opacity-0 transition-opacity duration-300 group-hover:bg-opacity-30 rounded-lg"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EgnitionGallery;