"use client";

import Slider from "react-slick";
import Image from "next/image";
import { useMediaQuery } from "react-responsive";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SliderOne = () => {
  const isLargeScreen = useMediaQuery({ minWidth: 1251 }); 
  const isMediumScreen = useMediaQuery({ minWidth: 869, maxWidth: 1250 }); 
  const isSmallScreen = useMediaQuery({ minWidth: 551, maxWidth: 868 }); 
  const isExtraSmallScreen = useMediaQuery({ maxWidth: 550 }); 


  const slidesToShow = isExtraSmallScreen
    ? 1
    : isSmallScreen
    ? 2 
    : isMediumScreen
    ? 3 
    : 4; 

  const settings = {
    arrows: false,
    infinite: true,
    slidesToShow: slidesToShow, 
    autoplay: true,
    speed: 4000,
    autoplaySpeed: 1000,
    className: "w-full mx-auto cursor-pointer center-mode",
  };

  return (
    <div className="py-6 space-y-10">
      <h1 className="text-green-500 text-4xl md:text-5xl font-bold text-center">
        Events
      </h1>
      <Slider {...settings}>
        {[
          "https://res.cloudinary.com/dlxpcyiin/image/upload/v1740845744/seminar5_newxnq.png",
          "https://res.cloudinary.com/dlxpcyiin/image/upload/v1740845744/seminar7_x6cydo.png",
          "https://res.cloudinary.com/dlxpcyiin/image/upload/v1740845743/seminar8_zt8q5g.png",
          "https://res.cloudinary.com/dlxpcyiin/image/upload/v1740845745/seminar6_qsguxs.png",
          "https://res.cloudinary.com/dlxpcyiin/image/upload/v1740845744/seminar4_uluodz.png",
          "https://res.cloudinary.com/dlxpcyiin/image/upload/v1740845742/seminar2_m2qr1j.png",
          "https://res.cloudinary.com/dlxpcyiin/image/upload/v1740845741/seminar3_hxpet9.jpg",
          "https://res.cloudinary.com/dlxpcyiin/image/upload/v1740845741/seminar1_aamt9y.jpg",
        ].map((src, index) => (
          <div key={index} className="rounded-md px-2 lg:p-4">
            <Image
              priority
              src={src}
              alt={`Event ${index + 1}`}
              width={500}
              height={500}
              className="rounded-2xl h-96 w-96"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SliderOne;