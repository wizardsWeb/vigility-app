import React from 'react';
import Button from './Button';
import Link from 'next/link';
import Spline from '@splinetool/react-spline/next';


const Hero = () => {
  return (
    <section className="relative pt-60 max-lg:pt-52  max-md:pt-36 flex flex-col ">
      <div>
        <div className="container">
          <div className="relative z-2 max-w-512 max-lg:max-w-512">
            <h1 className="mb-6 text-p4 max-lg:mb-7 max-md:mb-4 leading-[52px] text-5xl font-medium sm:text-6xl md:text-7xl lg:text-8xl">
              Enterprise Management Solution
            </h1>
            <p className="max-w-512 mb-14 max-md:mb-10 sm:text-md md:text-lg lg:text-2xl">
              High experience in Implementing various EMS tools available in the industry such as CA, IBM, HP, BMC, ServiceNow, Dyna Trace
            </p>
            <Link href="/features" offset={-100}>
              <Button icon="/images/zap.svg">Features</Button>
            </Link>
          </div>

          <div className="absolute -top-32 left-[calc(50%-340px)] w-[1230px] pointer-events-none hero-img_res">
            <div className=''>
            {/* <Spline
              scene="https://prod.spline.design/c2PFvXJp1CDjOTcb/scene.splinecode" 
              // style={{ transform: "scale(0.7)", borderRadius: '50%' }} // Scale down the object to fit
              className='scale-50 opacity-30 md:scale-75 md:opacity-50 lg:opacity-100 lg:rounded-[50%]'
              width={200}
              height={200}
              /> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
