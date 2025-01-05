'use client';
import React from 'react';
import Header from "@/components/Header";
import Footer from '@/components/Footer';
import About from '@/components/about/About';
import { Testimonials } from '@/components/about/Testimonials';
import Vision from '@/components/about/Vision';

const page = () => {
  return (
    <div className='overflow-hidden px-4 md:px-10 max-m-[100rem] mx-auto'>
    <div className='h-full px-4 md:px-10 max-w-[100rem] mx-auto'>
      <Header />
    </div>
    <div className='h-full px-4 md:px-10 max-w-[100rem] mx-auto my-20'>
      <About />
    </div>
    <div className='h-full px-4 md:px-10 max-w-[100rem] mx-auto my-20'>
      <Vision />
    </div>
    <div className='h-full px-4 md:px-10 max-w-[100rem] mx-auto my-20'>
      <Testimonials />
    </div>
    <div className='h-full px-4 md:px-10 max-w-[100rem] mx-auto'>
      <Footer />
    </div>
  </div>
  )
}

export default page
