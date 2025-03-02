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
import { info } from "console";

export default function Home() {
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const toggleDropdown = () => {
    setDropdownVisible(!isDropdownVisible);
  };
  const closeDropdown = () => {
    setDropdownVisible(false);
  };

  const aboutRef = useRef<HTMLDivElement>(null);
  const eventsRef = useRef<HTMLDivElement>(null);
  const galleryRef = useRef<HTMLDivElement>(null);
  const shopifyStoresRef = useRef<HTMLDivElement>(null);
  const brandsRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
  const infoRef = useRef<HTMLDivElement>(null);

  const scrollToAbout = () => {
    aboutRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });
  };

  const scrollToEvents = () => {
    eventsRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });
  };

  const scrollToGallery = () => {
    galleryRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });
  };

  const scrollToShopifyStores = () => {
    shopifyStoresRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToBrands = () => {
    brandsRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToServices = () => {
    servicesRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToInfo = () => {
    infoRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });
  };

  const lineColors = [
    "text-green-400",
    "text-blue-400",
    "text-yellow-400",
    "text-purple-400",
    "text-pink-400",
    "text-red-400",
    "text-cyan-400",
  ];

  const fadeInUpVariants = {
    hidden: {
      opacity: 0,
      y: 40,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const fadeInBottomVariants = {
    hidden: {
      opacity: 0,
      y: -20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const staggerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll();

      setTimeout(() => {
        setIsLoading(false);
        document.body.style.cursor = "default";
        window.scrollTo(0, 0);
      }, 2000);
    })();
  }, []);

  return (
    <div className="w-full md:items-center md:justify-center bg-black antialiased relative overflow-hidden">
      <AnimatePresence mode="wait">
        {isLoading && <Preloader />}
      </AnimatePresence>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeInBottomVariants}
      >
        <Navbar
          scrollToAbout={scrollToAbout}
          scrollToGallery={scrollToGallery}
          scrollToEvents={scrollToEvents}
          scrollToBrands={scrollToBrands}
          scrollToInfo={scrollToInfo}
          // scrollToShopifyStores={scrollToShopifyStores}
          // scrollToServices={scrollToServices}
        />
      </motion.div>

      <Spotlight className="hidden md:flex md:-top-80 left-80  " fill="green" />

      <div className="p-4 mx-auto relative z-10 w-full px-2">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerVariants}
          className="space-y-6"
        >
          <motion.div
            variants={fadeInUpVariants}
            className="text-4xl py-10 md:text-7xl px-6 text-center bg-clip-text text-transparent bg-gradient-to-b from-green-500 to bg-neutral-400 bg-opacity-50"
          >
            KeyGEnCoders <br /> KGEC
          </motion.div>

          <motion.p
            variants={fadeInUpVariants}
            className="mt-4 text-lg font-normal text-neutral-200 max-w-lg text-center mx-auto px-4"
          >
            Coding club of Kalyani Government Engineering College
          </motion.p>

          <motion.div variants={fadeInUpVariants}>
            <a
              href={"/brochure.pdf"}
              download={"brochure.pdf"}
              className="cursor-pointer flex items-center justify-center border rounded-md w-48 p-2 mx-auto my-6 text-white hover:bg-green-500 hover:text-black hover:font-semibold hover:border-green-500"
            >
              Download Brochure
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          variants={fadeInUpVariants}
          ref={aboutRef}
          initial="hidden"
          animate="visible"
          className="w-full pt-20"
        >
          <About />
        </motion.div>

        <motion.div
          variants={fadeInUpVariants}
          ref={eventsRef}
          initial="hidden"
          animate="visible"
          className="w-full pt-20"
        >
          <SliderOne />
        </motion.div>

        <motion.div
          ref={galleryRef}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInUpVariants}
        >
          <WebsiteDesign />
        </motion.div>

        <motion.div
          ref={brandsRef}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInUpVariants}
        >
          <Brands />
        </motion.div>

        <motion.div
          id="services"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInUpVariants}
        >
          <Services />
        </motion.div>

        <motion.div
          ref={infoRef}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInUpVariants}
        >
          <FAQS />
        </motion.div>
      </div>
    </div>
  );
}
