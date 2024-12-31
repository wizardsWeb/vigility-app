import React from 'react'
import { BusinessModelData } from '@/constants'

const BusinessModel = () => {
  return (
    <>
      <div className='flex flex-col justify-center items-center gap-6 md:w-[60%] mx-auto py-8 mt-40'>
            <h1 className='text-center text-2xl md:text-4xl flex-shrink-0'>Business Model</h1>
            <div className=' w-[70%] md:w-full h-1 bg-p1 flex-shrink-0'></div>
     </div>
      <div className={'grid grid-cols-1 lg:grid-cols-3 gap-8 w-full mt-12'}>
          {BusinessModelData.map((data, index) => (
            <div key={index} className='mx-4 p-8 bg-white/5 border border-white/80 rounded-2xl hover:scale-105 duration-300 transition-all'>
              <div className='h-24 w-24 mx-auto'>
              {typeof data.svg === "string" ? (
                <div dangerouslySetInnerHTML={{ __html: data.svg }} />
              ) : (
                data.svg
              )}
              </div>
              <p className='text-center py-4 text-xl font-semibold'>{data.title}</p>
              <p className='text-center py-4 '>{data.description}</p>
              <p></p>
            </div>
          ))}
      </div>
    </>
  )
}

export default BusinessModel
