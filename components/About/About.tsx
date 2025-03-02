"use client";

// interface AboutProps {
//   Head?: string;
//   Text?: string;
// }

export default function About() {
    const content="KeyGEnCoders is the official coding club of the Kalyani Government Engineering college. It is a group of students who are passionate about coding and programming. The club since its estiblishment has been working to promote coding culture in the college. The club organizes various events, workshops, and competitions to help students learn and grow in the field of coding.";
  return (
    <div className="gap-4 w-full flex flex-col justify-center items-center h-fit py-10 md:py-24" id="about">
      {/* <div className="sm:block hidden w-[4px] h-[100px] bg-green-500"></div> */}
      <div className="text-4xl md:text-5xl font-bold bg-clip-text text-green-500 mb-6">
        About
      </div>
      <div className="text-zinc-400 w-4/5 text-center sm:text-lg md:text-xl font-semibold md:font-normal">
        {content}
      </div>
    </div>
  );
}
