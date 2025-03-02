"use client";
import { useEffect, useRef } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

interface DropDownMenuProps {
  onClose: () => void;
  handleNavLinkClick: (scrollFunction: () => void) => void;
  scrollToAbout: () => void;
  scrollToGallery: () => void;
  scrollToEvents: () => void;
  scrollToBrands: () => void;
  scrollToInfo: () => void;
}

const DropDownMenu = ({
  onClose,
  handleNavLinkClick,
  scrollToAbout,
  scrollToGallery,
  scrollToEvents,
  scrollToBrands,
  scrollToInfo,
}: DropDownMenuProps) => {
  const dropdownRef = useRef<HTMLDivElement>(null);


  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose]);

  return (
    <AnimatePresence>
      <motion.div
        ref={dropdownRef}
        initial={{ y: "-100%", opacity: 0 }}
        animate={{ y: 0, opacity: 1 }} 
        exit={{ y: "-100%", opacity: 0 }} 
        transition={{ duration: 0.5, ease: "easeInOut" }} 
        className="fixed top-0 left-0 w-full h-screen bg-black bg-opacity-70 backdrop-blur-sm flex flex-col justify-center items-center space-y-6"
      >
        <div
          onClick={() => {
            handleNavLinkClick(scrollToAbout);
            onClose();
          }}
          className="text-slate-300 hover:text-gray-50 cursor-pointer text-2xl"
        >
          About
        </div>
        <div
          onClick={() => {
            handleNavLinkClick(scrollToEvents);
            onClose();
          }}
          className="text-slate-300 hover:text-gray-50 cursor-pointer text-2xl"
        >
          Events
        </div>
        <div
          onClick={() => {
            handleNavLinkClick(scrollToGallery);
            onClose();
          }}
          className="text-slate-300 hover:text-gray-50 cursor-pointer text-2xl"
        >
          Gallery
        </div>
        <Link
          href="/teams"
          onClick={onClose}
          className="text-slate-300 hover:text-gray-50 cursor-pointer text-2xl"
        >
          Teams
        </Link>
        <div
          onClick={() => {
            handleNavLinkClick(scrollToBrands);
            onClose();
          }}
          className="text-slate-300 hover:text-gray-50 cursor-pointer text-2xl"
        >
          Sponsors
        </div>
        <div
          onClick={() => {
            handleNavLinkClick(scrollToInfo);
            onClose();
          }}
          className="text-slate-300 hover:text-gray-50 cursor-pointer text-2xl"
        >
          FAQs
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default DropDownMenu;