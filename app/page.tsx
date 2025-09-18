"use client";

import { useState, useRef, useEffect } from "react";
import Navbar from "@/components/navbar";
import SliderOne from "@/components/ui/slider";
import { Spotlight } from "@/components/ui/spotlight";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";

import WebsiteDesign from "./website-design";
import GraphicDesign from "./graphic-design";
import ShopifyStores from "./shopify-stores";
import Brands from "./brands";
import Services from "./services";
import FAQS from "./faq";
import { InfiniteMovingCardsDemo } from "./snippets/infinite-moving-card-snippet";
import Typewriter from "typewriter-effect";
import Preloader from "@/components/Preloader";
import About from "@/components/About/About";

const refs = {
  aboutRef: null as HTMLDivElement | null,
  eventsRef: null as HTMLDivElement | null,
  galleryRef: null as HTMLDivElement | null,
  brandsRef: null as HTMLDivElement | null,
  infoRef: null as HTMLDivElement | null,
};

const scrollToElement = (ref: HTMLDivElement | null) => {
  ref?.scrollIntoView({
    behavior: "smooth",
    block: "start",
    inline: "nearest",
  });
};

export const about = () => scrollToElement(refs.aboutRef);
export const events = () => scrollToElement(refs.eventsRef);
export const gallery = () => scrollToElement(refs.galleryRef);
export const sponsors = () => scrollToElement(refs.brandsRef);
export const faq = () => scrollToElement(refs.infoRef);

export default function Home() {
  const aboutRef = useRef<HTMLDivElement>(null);
  const eventsRef = useRef<HTMLDivElement>(null);
  const galleryRef = useRef<HTMLDivElement>(null);
  const brandsRef = useRef<HTMLDivElement>(null);
  const infoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    refs.aboutRef = aboutRef.current;
    refs.eventsRef = eventsRef.current;
    refs.galleryRef = galleryRef.current;
    refs.brandsRef = brandsRef.current;
    refs.infoRef = infoRef.current;
  }, []);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      new LocomotiveScroll();

      setTimeout(() => {
        setIsLoading(false);
        document.body.style.cursor = "default";
        window.scrollTo(0, 0);
      }, 2000);
    })();
  }, []);


  return (
    <div className="w-full pt-40 md:items-center md:justify-center bg-black antialiased relative overflow-hidden">
      <AnimatePresence mode="wait">{isLoading && <Preloader />}</AnimatePresence>

      <Spotlight className="hidden md:flex md:-top-80 left-80" fill="green" />

      <div className="p-4 mx-auto relative z-10 w-full px-2">
        <motion.div initial="hidden" animate="visible" className="space-y-6 m-8">
          <motion.div className="text-3xl py-10 md:text-7xl px-6 text-center bg-clip-text text-transparent bg-gradient-to-b from-green-500 to bg-neutral-400 bg-opacity-50">
            KeyGEnCoders <br /> KGEC
          </motion.div>

          <motion.p className="mt-4 text-lg font-normal text-neutral-200 max-w-lg text-center mx-auto px-4">
            Coding club of Kalyani Government Engineering College
          </motion.p>

          {/* <motion.div> */}
            {/* <a */}
              {/* href={"/brochure.pdf"} */}
              {/* download={"brochure.pdf"} */}
              {/* className="cursor-pointer flex items-center justify-center border rounded-md w-48 p-2 mx-auto my-6 text-white hover:bg-green-500 hover:text-black hover:font-semibold hover:border-green-500" */}
            {/* > */}
              {/* Download Brochure */}
            {/* </a> */}
          {/* </motion.div> */}
        </motion.div>

        <motion.div ref={aboutRef} initial="hidden" animate="visible" className="w-full pt-20">
          <About />
        </motion.div>

        <motion.div ref={eventsRef} initial="hidden" animate="visible" className="w-full ">
          <SliderOne />
        </motion.div>

        <motion.div ref={galleryRef} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
          <WebsiteDesign />
        </motion.div>

        <motion.div ref={brandsRef} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
          <Brands />
        </motion.div>

        <motion.div id="services" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
          <Services />
        </motion.div>

        <motion.div ref={infoRef} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
          <FAQS />
        </motion.div>
      </div>
    </div>
  );
}
