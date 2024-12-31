import React from 'react'
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

import { customerFeedback } from '@/constants'

const Customer = () => {
  return (
    <div>
    <div className='flex flex-col justify-center items-center gap-6 md:w-[60%] mx-auto py-8 mt-40 mb-20'>
            <h1 className='text-center text-2xl md:text-4xl flex-shrink-0'>Customer Feedback</h1>
            <div className='w-[70%] md:w-full h-1 bg-p1 flex-shrink-0'></div>
     </div>
    <Carousel className="w-full lg:w-[70%] mx-auto ">
      <CarouselContent>
        {customerFeedback.map((feedback, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <Card>
                <CardContent className="flex flex-col items-center justify-center">
                  <p className=" text-lg md:text-xl text-center py-2">{feedback.feedback}</p>
                  <p className=" text-md md:text-lg font-semibold text-center py-4">{feedback.author}</p>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
    </div>
  )
}

export default Customer
