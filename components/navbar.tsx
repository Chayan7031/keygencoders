"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { AlignJustify, X } from "lucide-react";

import Image from "next/image";
import Link from "next/link";
import DropDownMenu from "./drop-down-menu";

interface NavbarProps {
  scrollToAbout: () => void;
  scrollToGallery: () => void;
  scrollToEvents: () => void;
  scrollToBrands: () => void;
  scrollToInfo: () => void;
  // scrollToShopifyStores: () => void;
  // scrollToServices: () => void;
}

const Navbar = ({
  scrollToAbout,
  scrollToEvents,
  scrollToGallery,
  scrollToBrands,
  scrollToInfo,
}: // scrollToShopifyStores,
// scrollToServices,
NavbarProps) => {
  const [isDropDownVisible, setIsDropDownVisible] = useState(false);

  const toggleDropDown = () => {
    setIsDropDownVisible(!isDropDownVisible);
  };

  const closeDropDown = () => {
    setIsDropDownVisible(false);
  };

  const handleScroll = () => {
    setIsDropDownVisible(false)
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <div className="p-6 md:p-10 flex items-center justify-between z-50">
        <div>
          <Link className="cursor-pointer" href="/">
            <Image
              priority
              src="/logo/logo.png"
              alt="Logo"
              width={100}
              height={100}
              className="w-20 h-20 md:w-20 md:h-20"
            />
          </Link>
        </div>
        <div
          className="cursor-pointer hidden 
            md:flex space-x-10 items-center
             text-slate-300 text-center 
             bg-clip-text text-transparent 
             bg-gradient-to-b from-neutral-50
              to bg-neutral-400 bg-opacity-50"
        >
          <div onClick={scrollToAbout} className="hover:text-gray-50">
            About
          </div>
          <div onClick={scrollToEvents} className="hover:text-gray-50">
            Events
          </div>

          <div onClick={scrollToGallery} className="hover:text-gray-50">
            Gallery
          </div>
          <div onClick={scrollToBrands} className="hover:text-gray-50">
            Sponsors
          </div>
          <div onClick={scrollToInfo} className="hover:text-gray-50">
            FAQs
          </div>

          {/* <Link href="/teams" className="hover:text-gray-50">
            Teams
          </Link> */}
        </div>

        <div className="flex md:hidden">
          {isDropDownVisible ? (
            // display an x icon when the drop is visible
            <div
              onClick={toggleDropDown}
              className="w-8 h-8 text-slate-300 cursor-pointer"
            >
              <X />
              <DropDownMenu
                onClose={closeDropDown}
                scrollToAbout={scrollToAbout}
                scrollToGallery={scrollToGallery}
                scrollToEvents={scrollToEvents}
                scrollToBrands={scrollToBrands}
                scrollToInfo={scrollToInfo} // Pass scrollToServices
              />
            </div>
          ) : (
            <AlignJustify
              onClick={toggleDropDown}
              className="w-8 h-8 text-slate-300 cursor-pointer"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
