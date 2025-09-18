'use client'

import Image from 'next/image'
import React from 'react'
import { thirdYearMembers, secondYearInterns, Member, convenors } from '@/app/utils/data'

const MemberGrid = ({ members, title, cols }: { members: Member[]; title: string; cols?: string }) => {
  // Default grid style (3 cols on small, 4 on md+)
  const gridCols = cols || "grid-cols-3 md:grid-cols-4";

  // Bigger gap only for Convenors
  const gridGap = title === "Our Convenors" ? "gap-5 sm:gap-2" : "gap-2";

  return (
    <>
      <div className="p-4 mx-auto relative z-10 w-full pt-10 md:pt-20 px-2">
        <div className="md:text-5xl text-4xl text-center bg-clip-text text-green-500 font-bold">
          {title}
        </div>
      </div>

      <div className={`grid ${gridCols} ${gridGap} py-10`}>
        {members.map((member, index) => (
          <div
            key={index}
            className="group aspect-square overflow-hidden rounded-lg relative"
          >
            <Image
              width={500}
              height={500}
              priority
              className={`w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 ${
                title === "Our Convenors" ? "aspect-[3/4] sm:aspect-square" : "aspect-square"
              }`}
              src={member.imageUrl}
              alt={member.name}
            />

            <div className="absolute inset-0 bg-black bg-opacity-0 transition-opacity duration-300 group-hover:bg-opacity-50"></div>

            <div className="absolute inset-x-0 bottom-0 p-4 text-white text-center translate-y-full transition-transform duration-500 group-hover:-translate-y-1/2">
              <p className="md:text-lg text-sm font-semibold">{member.name}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

const Page = () => {
  return (
    <div className="text-white p-2 pt-28">
      {/* Convenors → 2 cols on small, 4 on md */}
      <MemberGrid members={convenors} title="Our Convenors" cols="grid-cols-2 md:grid-cols-4" />

      {/* Third year & interns → 3 cols on small, 4 on md */}
      <MemberGrid members={thirdYearMembers} title="Third year members" cols="grid-cols-3 md:grid-cols-4" />
      <MemberGrid members={secondYearInterns} title="Second year Interns" cols="grid-cols-3 md:grid-cols-4" />
    </div>
  )
}


// const MemberGrid = ({ members, title }: { members: Member[]; title: string }) => {
//   return (
//     <>
//       <div className="p-4 mx-auto relative z-10 w-full pt-10 md:pt-20 px-2">
//         <div className="md:text-5xl text-4xl text-center bg-clip-text text-green-500 font-bold">
//           {title}
//         </div>
//       </div>

//       <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-10">
//         {members.map((member, index) => (
//           <div
//             key={index}
//             className="group aspect-square overflow-hidden rounded-lg relative"
//           >

//             <Image
//               width={500}
//               height={500}
//               priority
//               className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
//               src={member.imageUrl}
//               alt={member.name}
//             />

//             <div className="absolute inset-0 bg-black bg-opacity-0 transition-opacity duration-300 group-hover:bg-opacity-50"></div>

//             <div className="absolute inset-x-0 bottom-0 p-4 text-white text-center translate-y-full transition-transform duration-500 group-hover:-translate-y-1/2">
//               <p className="md:text-lg text-sm font-semibold">{member.name}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </>
//   )
// }

// const Page = () => {
//   return (
//     <div className="text-white p-2 pt-28">
//       <MemberGrid members={convenors} title="Our Convenors" />
//       {/* <MemberGrid members={fourthYearMembers} title="Fourth year members" /> */}
//       <MemberGrid members={thirdYearMembers} title="Third year members" />
//       <MemberGrid members={secondYearInterns} title="Second year Interns" />
//       {/* <MemberGrid members={firstYearInterns} title="First year interns" /> */}
//     </div>
//   )
// }

export default Page