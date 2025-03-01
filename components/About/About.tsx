"use client";

// interface AboutProps {
//   Head?: string;
//   Text?: string;
// }

export default function About() {
    const content="KeyGEnCoders is the official coding club of the Kalyani Government Engineering college. It is a group of students who are passionate about coding and programming. The club since its estiblishment has been working to promote coding culture in the college. The club organizes various events, workshops, and competitions to help students learn and grow in the field of coding. The club also participates in various coding competitions and hackathons to showcase the talent of the students. The club is open to all students of the college who are interested in coding and programming. The club aims to create a community of coders who can help each other and grow together.";
  return (
    <div className="gap-4 w-full flex flex-col justify-center items-center h-fit py-20 md:py-40" id="about">
      {/* <div className="sm:block hidden w-[4px] h-[100px] bg-green-500"></div> */}
      <div className="text-4xl md:text-5xl font-bold font-sans bg-clip-text text-green-500 mb-6">
        About
      </div>
      <div className="text-zinc-400 w-4/5 font-thin text-center sm:text-lg md:text-xl font-sans py-10">
        {content}
      </div>
    </div>
  );
}
