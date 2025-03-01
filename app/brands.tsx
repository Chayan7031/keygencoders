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
    image: "https://res.cloudinary.com/di4qqgdw2/image/upload/v1740840758/Coding_Ninjas_qmpuz2.png",
  },
  {
    image: "https://res.cloudinary.com/di4qqgdw2/image/upload/v1740840955/GeeksforGeeks_lsve7i.png",
  },
  {
    image: "/logo/logoipsum-225.svg",
  },
  {
    image: "/logo/logoipsum-248.svg",
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

        <div className="grid grid-cols-2  items-center justify-center  mx-auto md:w-3/5 cursor-pointer">
          {logos.map((logo, i) => (
            <div key={i} className="p-4 sm:p-10 lg:p-20">
              <Image
                priority
                src={logo.image}
                width={300}
                height={300}
                alt="logo"
                className="w-full h-auto max-w-full rounded-lg"
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
