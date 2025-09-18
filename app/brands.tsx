import Image from "next/image";
import React from "react";

import { Lora } from "next/font/google";
import { cn } from "@/lib/utils";

const font = Lora({
  subsets: ["latin"],
  weight: ["400"],
});

const logos = [
  {
    image: "https://res.cloudinary.com/db9l85phg/image/upload/v1757922257/images__1_-removebg-preview_gqd1my.png",
  },
  {
    image: "https://res.cloudinary.com/db9l85phg/image/upload/v1757922549/domino039s-pizza-logo-hd-transparent-background-735811696675648utxbcdqal9-removebg-preview_1_fx3rpt.png",
  },
  {
    image: "https://res.cloudinary.com/db9l85phg/image/upload/v1757922371/WhatsApp_Image_2025-09-15_at_12.52.21_0460e1cb-removebg-preview_1_syzkz8.png",
  },
  {
    image: "https://res.cloudinary.com/db9l85phg/image/upload/v1758211561/4d5bd669826c15d6acfa0c0817511db4_icon-removebg-preview_yry3ps.png",
  },
  {
    image: "https://res.cloudinary.com/db9l85phg/image/upload/v1758210800/HackerRank_Icon-1000px-removebg-preview_as4cwu.png",
  },
  {
    image: "https://res.cloudinary.com/db9l85phg/image/upload/v1758215964/images__2_-removebg-preview_hhaxut.png",
  },
  {
    image: "https://res.cloudinary.com/db9l85phg/image/upload/v1758211121/ueScU0LV_400x400-removebg-preview_yyqdce.png",
  },
  {
    image: "https://res.cloudinary.com/db9l85phg/image/upload/v1758211636/images_imavpp.png",
  },
];

const Brands = () => {
  return (
    <div>
      <div className=" p-4   mx-auto relative z-10  w-full pt-20 md:pt-32">
        <div className="text-4xl md:text-5xl md:pb-8 text-center 
        bg-clip-text text-green-500 font-bold">
          Sponsors
        </div>

        {/* <p className="mt-4 text-lg font-normal  text-neutral-300 max-w-lg text-center mx-auto">
          From small businesses to large corporations, we have helped many
          brands elevate their business.
        </p> */}

        <div className="grid grid-cols-2 md:grid-cols-4 items-center justify-center  mx-auto md:w-3/5 cursor-pointer">
          {logos.map((logo, i) => (
            <div key={i} className="p-10 sm:p-5 lg:p-10">
              <Image
                priority
                src={logo.image}
                width={800}
                height={800}
                alt="logo"
                className="w-full h-auto max-w-full rounded-lg shadow-[0_0_10px_#22c55e] hover:shadow-[0_0_40px_#22c55e] transition duration-300"
              />
            </div>
          ))}
        </div>

        {/* <div
          className={cn(
            "flex items-center justify-center text-xl xl:text-2xl pt-10 md:pt-0 pb-4  px-8  text-center text-white  ",
            font.className
          )}
        >
          &quot;We got rid of nearly a dozen different tools because of what
          Bird does for us.&quot;
        </div>

        <div className="items-center flex justify-center flex-col text-white">
          <Image
            src="/images/logo.svg"
            alt="logo"
            width={1000}
            height={1000}
            className="pt-2 xl:pt-0  w-10 xl:w-14 "
          />

          <div className=" text-center">
            <div className="text-sm  font-medium pt-4">Carlos Hernandez</div>
            <div className="text-sm">Marketing Director, Palium Software</div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Brands;
