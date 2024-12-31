import React from 'react'
import Header from "@/components/Header";
import Services from '@/components/Services';
import Footer from '@/components/Footer';

const page = () => {
  return (
    <div className='overflow-hidden px-4 md:px-10 max-m-[100rem] mx-auto'>
        <div className='h-full px-4 md:px-10 max-w-[100rem] mx-auto'>
          <Header />
        </div>
        <div className='h-full px-4 md:px-10 max-w-[100rem] mx-auto my-20'>
          <Services />
        </div>
        <div className='h-full px-4 md:px-10 max-w-[100rem] mx-auto'>
          <Footer />
        </div>
      </div>
  )
}

export default page
