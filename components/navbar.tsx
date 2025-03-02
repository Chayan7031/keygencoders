"use client";
import { useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation"; 
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
}

const Navbar = ({
  scrollToAbout,
  scrollToEvents,
  scrollToGallery,
  scrollToBrands,
  scrollToInfo,
}: NavbarProps) => {
  const [isDropDownVisible, setIsDropDownVisible] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  const toggleDropDown = () => {
    setIsDropDownVisible(!isDropDownVisible);
  };

  const closeDropDown = () => {
    setIsDropDownVisible(false);
  };

  const handleScroll = () => {
    setIsDropDownVisible(false);
  };

  const handleNavLinkClick = (scrollFunction: () => void) => {
    if (pathname === "/teams") {
      router.push("/");
    } else {
      scrollFunction(); 
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="fixed w-full top-0 left-0 z-50">
      <div
        className="p-6 md:px-10 flex items-center justify-between 
        backdrop-blur-sm bg-opacity-30 bg-black border-b border-neutral-800"
      >
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
          <div
            onClick={() => handleNavLinkClick(scrollToAbout)}
            className="hover:text-gray-50"
          >
            About
          </div>
          <div
            onClick={() => handleNavLinkClick(scrollToEvents)}
            className="hover:text-gray-50"
          >
            Events
          </div>

          <div
            onClick={() => handleNavLinkClick(scrollToGallery)}
            className="hover:text-gray-50"
          >
            Gallery
          </div>
          <Link href="/teams" className="hover:text-gray-50">
            Teams
          </Link>
          <div
            onClick={() => handleNavLinkClick(scrollToBrands)}
            className="hover:text-gray-50"
          >
            Sponsors
          </div>
          <div
            onClick={() => handleNavLinkClick(scrollToInfo)}
            className="hover:text-gray-50"
          >
            FAQs
          </div>
        </div>

        <div className="flex md:hidden">
          {isDropDownVisible ? (
            <div
              onClick={toggleDropDown}
              className="w-8 h-8 text-slate-300 cursor-pointer"
            >
              <X />
              <DropDownMenu
                onClose={closeDropDown}
                handleNavLinkClick={handleNavLinkClick} 
                scrollToAbout={scrollToAbout}
                scrollToGallery={scrollToGallery}
                scrollToEvents={scrollToEvents}
                scrollToBrands={scrollToBrands}
                scrollToInfo={scrollToInfo}
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