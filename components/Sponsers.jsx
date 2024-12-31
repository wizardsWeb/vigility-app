"use client";
 
import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards.jsx";
const Sponsers = () => {
  return (
    <div className='flex justify-between items-center font-medium px-10 mx-auto'>
      <div className="h-[40rem] rounded-md flex flex-col antialiased dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </div>
    </div>
  )
}

const testimonials = [
    {
      image: '/sponsers/logo1.png'
    },
    {
      image: '/sponsers/logo2.png'
    },
    {
      image: '/sponsers/logo3.png'
    },
    {
      image: '/sponsers/logo4.png'
    },
    {
      image: '/sponsers/logo5.png'
    },
    {
      image: '/sponsers/logo6.png'
    },
    {
      image: '/sponsers/logo7.png'
    },
    {
      image: '/sponsers/logo8.png'
    },
    {
      image: '/sponsers/logo9.png'
    },
    {
      image: '/sponsers/logo10.png'
    },
    {
      image: '/sponsers/logo11.png'
    },
    {
      image: '/sponsers/logo12.png'
    },
    {
      image: '/sponsers/logo13.png'
    },
    {
      image: '/sponsers/logo14.png'
    },
    {
      image: '/sponsers/logo15.png'
    },
    {
      image: '/sponsers/logo16.png'
    },
    {
      image: '/sponsers/logo17.png'
    },
    {
      image: '/sponsers/logo18.png'
    },   
  ];

export default Sponsers
