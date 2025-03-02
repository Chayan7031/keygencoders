"use client";

import Slider from "react-slick";
import Image from "next/image";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SliderOne = () => {
  const settings = {
    dots: false,
    infinite: true, 
    autoplay: true,
    speed: 5000,
    arrows: false,
    cssEase: "linear",
    slidesToShow: 4,
    slidesToScroll: 4, 
    initialSlide: 0, 
    className: "center",
    centerMode: true,
    centerPadding: "0px",
    responsive: [
      {
        breakpoint: 1230, 
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 930, 
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 630, 
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="space-y-10">
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
          <div
            key={index}
            className="rounded-md px-2 lg:p-4 group relative overflow-hidden"
          >
            <div className="rounded-2xl overflow-hidden">
              <Image
                priority
                src={src}
                alt={`Event ${index + 1}`}
                width={500}
                height={500}
                className="rounded-2xl h-96 w-full object-cover transform transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 transition-opacity duration-300 group-hover:bg-opacity-50"></div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SliderOne;