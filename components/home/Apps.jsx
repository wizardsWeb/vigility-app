import React from 'react'
import Cards from '../ui/Cards'

const Apps = () => {
  return (
    <>
    <div className='circlePosition w-[590px] h-[100px] p-20 bg-[#eb26fd] rounded-[100%] relative z-0 top-[5%] left-[100%] translate-x-[-50%] translate-y-[10%] blur-[90px] opacity-30'></div>
    <div className='flex flex-col justify-center items-center gap-6 md:w-[60%] mx-auto py-4'>
            <h1 className='text-center text-2xl md:text-4xl flex-shrink-0'>Our Apps</h1>
            <div className='w-[70%] md:w-full h-1 bg-p1 flex-shrink-0'></div>
    </div>
    <div className="relative z-[10]">
    <div className='mt-12'>
        <div className='grid lg:grid-cols-2 xl:gap-12 lg:gap-8 md:gap-6 sm:gap-6'>
            <Cards />
        </div>
    </div>
    </div>
    <div className='circlePosition w-[590px] h-[200px] bg-[#eb26fd] rounded-[100%] relative z-1 top-[80%] left-0 translate-x-[-50%] translate-y-[-50%] blur-[90px] opacity-30'></div>
    </>
  )
}

export default Apps
