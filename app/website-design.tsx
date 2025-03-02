"use client";

import Image from "next/image";

const WebsiteDesign = () => {
  return (
    <div className="text-white">
      <div className="p-4 mx-auto relative z-10 w-full pt-10 md:pt-20 px-2">
        <div className="text-4xl md:text-5xl text-center bg-clip-text text-green-500 font-bold">
          Gallery
        </div>
      </div>

    
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4">
        
        <div className="md:col-span-2 md:row-span-2">
          <Image
            width={800}
            height={800}
            priority
            className="h-full w-full object-cover rounded-lg"
            src="https://res.cloudinary.com/dlxpcyiin/image/upload/v1740845750/events12_wn2u5o.png"
            alt="Big Event 1"
          />
        </div>

    
        <div>
          <Image
            width={500}
            height={500}
            priority
            className="h-full w-full object-cover rounded-lg"
            src="https://res.cloudinary.com/dlxpcyiin/image/upload/v1740845748/events9_nl4aji.png"
            alt="Medium Event 1"
          />
        </div>
        <div>
          <Image
            width={500}
            height={500}
            priority
            className="h-full w-full object-cover rounded-lg"
            src="https://res.cloudinary.com/dlxpcyiin/image/upload/v1740845746/events11_vw1qld.png"
            alt="Medium Event 2"
          />
        </div>

      
        <div>
          <Image
            width={300}
            height={300}
            priority
            className="h-full w-full object-cover rounded-lg"
            src="https://res.cloudinary.com/dlxpcyiin/image/upload/v1740845745/events8_z9ismy.png"
            alt="Small Event 1"
          />
        </div>
        <div>
          <Image
            width={300}
            height={300}
            priority
            className="h-full w-full object-cover rounded-lg"
            src="https://res.cloudinary.com/dlxpcyiin/image/upload/v1740845744/events7_jjxrjc.png"
            alt="Small Event 2"
          />
        </div>

  
        <div>
          <Image
            width={500}
            height={500}
            priority
            className="h-full w-full object-cover rounded-lg"
            src="https://res.cloudinary.com/dlxpcyiin/image/upload/v1740845748/events9_nl4aji.png"
            alt="Medium Event 3"
          />
        </div>
        <div>
          <Image
            width={500}
            height={500}
            priority
            className="h-full w-full object-cover rounded-lg"
            src="https://res.cloudinary.com/dlxpcyiin/image/upload/v1740845746/events11_vw1qld.png"
            alt="Medium Event 4"
          />
        </div>

      
        <div className="md:col-span-2 md:row-span-2 md:col-start-3">
          <Image
            width={800}
            height={800}
            priority
            className="h-full w-full object-cover rounded-lg"
            src="https://res.cloudinary.com/dlxpcyiin/image/upload/v1740845750/events12_wn2u5o.png"
            alt="Big Event 2"
          />
        </div>

       
        <div>
          <Image
            width={300}
            height={300}
            priority
            className="h-full w-full object-cover rounded-lg"
            src="https://res.cloudinary.com/dlxpcyiin/image/upload/v1740845745/events8_z9ismy.png"
            alt="Small Event 3"
          />
        </div>
        <div>
          <Image
            width={300}
            height={300}
            priority
            className="h-full w-full object-cover rounded-lg"
            src="https://res.cloudinary.com/dlxpcyiin/image/upload/v1740845744/events7_jjxrjc.png"
            alt="Small Event 4"
          />
        </div>
      </div>
    </div>
  );
};

export default WebsiteDesign;