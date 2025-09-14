"use client";

import { useState, useEffect } from "react"; 
import Slider from "react-slick";
import Image from "next/image";
import { events, Event as SliderEvent } from "@/app/utils/Slider";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from "next/link";
import { Download } from "lucide-react";

const SliderOne = () => {
  const [selectedEvent, setSelectedEvent] = useState<SliderEvent | null>(null);

 
  useEffect(() => {
    if (selectedEvent) {
      document.body.style.overflow = "hidden"; 
    } else {
      document.body.style.overflow = "auto"; 
    }

    
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [selectedEvent]);

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

  const handleEventClick = (event: SliderEvent) => {
    setSelectedEvent(event);
  };

  const closePopup = () => {
    setSelectedEvent(null);
  };

  return (
    <div className="space-y-10">
      <h1 className="text-green-500 text-4xl md:text-5xl font-bold text-center mb-8">
        Events
      </h1>
      <Slider {...settings}>
        {events.map((event) => (
          <div
            key={event.id}
            className="rounded-md px-2 lg:p-4 group relative overflow-hidden cursor-pointer"
            onClick={() => handleEventClick(event)}
          >
            <div className="rounded-2xl overflow-hidden">
              <Image
                priority
                src={event.eventImage}
                alt={event.eventName}
                width={500}
                height={500}
                className="rounded-2xl h-96 w-full object-cover transform transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 transition-opacity duration-300 group-hover:bg-opacity-50"></div>
            </div>
          </div>
        ))}
      </Slider>

      {selectedEvent && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
          onClick={closePopup}
        >
          <div 
            className="backdrop-blur-sm bg-opacity-50 bg-green-800 p-4 md:p-6 rounded-lg max-w-3xl flex flex-col lg:flex-row gap-4 md:gap-6"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="w-full lg:w-1/3 h-48 sm:h-60 lg:h-auto">
              <Image
                src={selectedEvent.eventImage}
                alt={selectedEvent.eventName}
                width={400}
                height={300}
                className="rounded-lg object-contain w-full h-full"
              />
            </div>
            <div className="w-full lg:w-2/3 flex flex-col justify-between">
              <div>
                <h2 className="text-xl md:text-2xl font-bold mb-2 md:mb-3 text-green-500">
                  {selectedEvent.eventName}
                </h2>
                <p className="text-green-500 mb-2 md:mb-3 text-sm md:text-base">
                  <strong className="text-green-400">Date:</strong>{" "}
                  {selectedEvent.eventDate}
                </p>
                <p className="text-green-500 mb-3 md:mb-4 text-sm md:text-base">
                  <strong className="text-green-400">Description:</strong>{" "}
                  {selectedEvent.eventDescription}
                </p>
              </div>
              
              <div className="flex flex-row justify-center space-x-3 mt-4">
                <Link
                 href={"/"}
                  // href={selectedEvent.registrationLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cursor-pointer flex items-center justify-center border rounded-md p-2 text-sm text-white hover:bg-green-500 hover:text-black hover:font-semibold hover:border-green-500"
                >
                  Register Now
                </Link>
                {selectedEvent.workbookDownloadLink && (
                  <Link
                  href={"/"}
                    // href={selectedEvent.workbookDownloadLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    download
                    className="cursor-pointer flex items-center justify-center border rounded-md p-2 text-sm text-white hover:bg-green-500 hover:text-black hover:font-semibold hover:border-green-500"
                  >
                    <Download/>  Workbook
                  </Link>
                )}
              </div>
              
              <div className="flex justify-center mt-4">
                <button
                  onClick={closePopup}
                  className="cursor-pointer flex items-center justify-center border rounded-md w-32 p-1 text-white hover:bg-green-500 hover:text-black hover:font-semibold hover:border-green-500"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SliderOne;