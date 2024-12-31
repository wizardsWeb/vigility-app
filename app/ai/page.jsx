import AiCardGrid from '@/components/AiCardGrid'
import { AiHeroSection } from '@/components/AiHeroSection'
import { AiSolution } from '@/components/AiSolution'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import ResultsAchieved from '@/components/ResultsAchieved'
import React from 'react'

const page = () => {
  return (
    <div>
      <div className='overflow-hidden px-4 md:px-10 max-m-[100rem] mx-auto'>
        <div className='h-full px-4 md:px-10 max-w-[100rem] mx-auto'>
          <Header />
        </div>
        <div className='h-full px-4 md:px-10 max-w-[100rem] mx-auto'>
          <AiHeroSection />
        </div>
        <div className='h-full px-4 md:px-10 max-w-[100rem] mx-auto'>
          <AiCardGrid />
        </div>
        <div className='h-full px-4 md:px-10 max-w-[100rem] mx-auto'>
          <AiSolution />
        </div>
        <div className='h-full px-4 md:px-10 max-w-[100rem] mx-auto'>
          <ResultsAchieved />
        </div>
        <div className='h-full px-4 md:px-10 max-w-[100rem] mx-auto'>
          <Footer />
        </div>
      </div>
    </div>
  )
}

export default page
