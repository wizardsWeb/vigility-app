import EgsHero from '@/components/egs/EgsHero'
import EgsList from '@/components/egs/EgsList'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import React from 'react'

const page = () => {
  return (
    <div>
      <div className='overflow-hidden px-4 md:px-10 max-m-[100rem] mx-auto'>
        <div className='h-full px-4 md:px-10 max-w-[100rem] mx-auto'>
          <Header />
        </div>
        
        <div className='h-full px-4 md:px-10 max-w-[100rem] mx-auto'>
            <EgsHero />
        </div>
        <div className='h-full px-4 md:px-10 max-w-[100rem] mx-auto'>
            <EgsList />
        </div>
        <div className='h-full px-4 md:px-10 max-w-[100rem] mx-auto'>
          <Footer />
        </div>
      </div>
    </div>
  )
}

export default page
