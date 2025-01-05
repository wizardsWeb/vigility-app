import React from 'react';
import Button from '../home/Button';
import Link from 'next/link';
import Spline from '@splinetool/react-spline/next';


const EgsHero = () => {
  return (
    <section className="relative pt-60 max-lg:pt-52  max-md:pt-36 flex flex-col ">
      <div>
        <div className="container">
          <div className="relative z-2 max-w-512 max-lg:max-w-512">
            <h1 className="mb-6 text-p4 max-lg:mb-7 max-md:mb-4 leading-[52px] text-5xl font-medium sm:text-6xl md:text-7xl lg:text-8xl">
                DIGIICE - Revolutionizing Enterprise Interactions with AI
            </h1>
            <p className="max-w-512 mb-14 max-md:mb-10 sm:text-lg md:text-xl lg:text-3xl">
            The Secure, Customizable RAG Chatbot Solution for Modern Enterprises
            </p>
          </div>

          <div className="absolute -top-80 left-[calc(50%-340px)] w-[1300px] pointer-events-none hero-img_res">
            <div className=''>
            <Spline
              scene="https://prod.spline.design/j2UAWonxinlvfPrx/scene.splinecode"
              // style={{ transform: "scale(0.7)", borderRadius: '50%' }} // Scale down the object to fit
              className='scale-50 opacity-30 md:scale-75 md:opacity-50 lg:opacity-100 lg:rounded-[50%]'
              width={200}
              height={200}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default EgsHero
