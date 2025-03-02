'use client'

import { CardHoverEffectDemo } from "./snippets/card-hover-effect-snippet";

const Services = () => {
    return ( <div className="max-w-5xl mx-auto py-20">
   
        <div className="text-4xl mb-6 md:text-5xl text-center
         bg-clip-text text-green-500 font-bold">
          what we do
        </div>
        {/* <p className="mt-4 text-lg font-normal
          text-neutral-300 max-w-lg 
          text-center mx-auto">
          From website design to social media management, We offer a wide range of services to help you grow your business. 
        </p> */}

        <CardHoverEffectDemo />

    </div> 
    
    );
}
 
export default Services;