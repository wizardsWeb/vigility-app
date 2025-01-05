import React from "react";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";

const About = () => {
  return (
    <>
    <h2 className="relative z-20 font-bold text-center text-white font-sans tracking-tight py-2 md:py-12 sm:text-6xl md:text-7xl lg:text-8xl">
      About Us       
    </h2>
    <BackgroundBeamsWithCollision>
      <div>
      <h2 className="text-xl md:text-2xl relative z-20 text-center text-white tracking-tight">
        <p className="sm:text-2xl md:text-3xl lg:text-4xl">We focus on simplicity, innovation and {" "} </p>
        <div className="relative mx-auto inline-block w-max [filter:drop-shadow(0px_1px_3px_rgba(27,_37,_80,_0.14))]">

          <div className="relative bg-clip-text text-transparent bg-no-repeat bg-gradient-to-r from-blue-100 to-purple-400 py-4">
            <p className="text-4xl md:text-6xl font-semibold">efficient solutions.</p>
          </div>
        </div>
      </h2>
      <h2 className="max-w-5xl border border-white/20 p-12 mt-8 rounded-2xl hover:scale-105 duration-300 mb-12">
        <p className='text-center sm:text-sm md:text-md lg:text-lg'>
        Vigility Technologies helps organizations optimize their IT infrastructure and operations. We leverage AI and data-driven insights to enhance performance, efficiency, and sustainability through proactive monitoring and management.
        </p>
        <p className=' text-center mt-4 sm:text-sm md:text-md lg:text-lg font-light'>
        Our consulting, architecture, deployment, and support services empower customers to get the most from their enterprise technology and meet their business goals.
        </p>
      </h2>
      </div>
    </BackgroundBeamsWithCollision>
    </>
  )
}

export default About
