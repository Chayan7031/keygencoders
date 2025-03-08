"use client";
import { useRouter } from "next/navigation";
import Image from "next/image";

const Footer: React.FC = () => {
  const router = useRouter();

  const openPdfInNewTab = () => {
    window.open("/PrisMa.pdf", "_blank");
  };

  return (
    <footer className="flex w-full flex-col justify-center space-y-10 bg-opacity-50 backdrop-blur-md backdrop-filter">
      <div className="text-outline absolute top-1/4 z-[-1] flex w-full -translate-y-1/2 transform flex-row items-center justify-evenly text-[2rem] font-extrabold tracking-widest text-[#1b1b1ba2] sm:text-[2rem] md:text-[4rem] lg:text-[6rem] xl:text-[9rem] italic">
        KEYGENCODERS
      </div>

      <div className="flex mt-6 w-full items-center justify-center">
        <Image
          className=""
          src="/logo/logo.png"
          alt="KeyGEnCoders"
          width={100}
          height={100}
        />
      </div>

      <div className="flex justify-center space-x-5">
        <a
          href="https://www.facebook.com/KeyGEnCoders/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg
            className="h-6 w-6 fill-green-600 hover:fill-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 8 19"
          >
            <path
              fillRule="evenodd"
              d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z"
              clipRule="evenodd"
            />
          </svg>
        </a>

        <a href="https://www.linkedin.com/company/keygencoders" target="_blank" rel="noopener noreferrer">
          <svg
            className="h-6 w-6 fill-green-600 hover:fill-white"
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="50"
            height="50"
            viewBox="0 0 50 50"
          >
            <path d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z"></path>
          </svg>
        </a>
        <a href="https://www.instagram.com/keygen_coders" target="_blank" rel="noopener noreferrer">
          <svg
            className="h-6 w-6 fill-green-600 hover:fill-white"
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="50"
            height="50"
            viewBox="0 0 50 50"
          >
            <path d="M 16 3 C 8.83 3 3 8.83 3 16 L 3 34 C 3 41.17 8.83 47 16 47 L 34 47 C 41.17 47 47 41.17 47 34 L 47 16 C 47 8.83 41.17 3 34 3 L 16 3 z M 37 11 C 38.1 11 39 11.9 39 13 C 39 14.1 38.1 15 37 15 C 35.9 15 35 14.1 35 13 C 35 11.9 35.9 11 37 11 z M 25 14 C 31.07 14 36 18.93 36 25 C 36 31.07 31.07 36 25 36 C 18.93 36 14 31.07 14 25 C 14 18.93 18.93 14 25 14 z M 25 16 C 20.04 16 16 20.04 16 25 C 16 29.96 20.04 34 25 34 C 29.96 34 34 29.96 34 25 C 34 20.04 29.96 16 25 16 z"></path>
          </svg>
        </a>
      </div>
      <hr className="pt-4 my-8 ml-20 mr-20 border-[#092b0b]" />
      <p className="text-center font-medium text-white/60">
        contact us : +918918599712 / +919874553769
      </p>
      <p className="pb-4 text-center font-medium text-white/60">
        &copy; {new Date().getFullYear()} KeyGEnCoders. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
