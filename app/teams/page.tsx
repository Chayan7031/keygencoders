'use client'

import Image from 'next/image'
import React from 'react'
import { thirdYearMembers, secondYearInterns, Member, convenors } from '@/app/utils/data'

const MemberGrid = ({ members, title }: { members: Member[]; title: string }) => {
  return (
    <>
      <div className="p-4 mx-auto relative z-10 w-full pt-10 md:pt-20 px-2">
        <div className="md:text-5xl text-4xl text-center bg-clip-text text-green-500 font-bold">
          {title}
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-10">
        {members.map((member, index) => (
          <div
            key={index}
            className="group aspect-square overflow-hidden rounded-lg relative"
          >

            <Image
              width={500}
              height={500}
              priority
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
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
      <MemberGrid members={convenors} title="Our Convenors" />
      {/* <MemberGrid members={fourthYearMembers} title="Fourth year members" /> */}
      <MemberGrid members={thirdYearMembers} title="Third year members" />
      <MemberGrid members={secondYearInterns} title="Second year Interns" />
      {/* <MemberGrid members={firstYearInterns} title="First year interns" /> */}
    </div>
  )
}

export default Page