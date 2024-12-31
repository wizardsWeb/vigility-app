import Apps from "@/components/Apps";
import BusinessModel from "@/components/BusinessModel";
import Customer from "@/components/Customer";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Sponsers from "@/components/Sponsers";
import Strengths from "@/components/Strengths";
import { Values } from "@/components/Values";
export default function Home() {
  return (
      <div className='overflow-hidden px-4 md:px-10 max-m-[100rem] mx-auto'>
        <div className='h-full px-4 md:px-10 max-w-[100rem] mx-auto'>
          <Header />
        </div>
        <div className='h-full px-4 md:px-10 max-w-[100rem] mx-auto'>
          <Hero />
        </div>
        <Sponsers />
        <div className='h-full px-4 md:px-10 max-w-[100rem] mx-auto'>
          <Strengths />
        </div>
        <div className='h-full px-4 md:px-10 max-w-[100rem] mx-auto'>
          <Apps />
        </div>
        <div className='h-full px-4 md:px-10 max-w-[100rem] mx-auto'>
          <Values />
        </div>
        <div className='h-full px-4 md:px-10 max-w-[100rem] mx-auto'>
          <BusinessModel />
        </div>
        <div className='h-full px-16 md:px-24 max-w-[100rem] mx-auto'>
          <Customer />
        </div>
        <div className='h-full px-4 md:px-10 max-w-[100rem] mx-auto'>
          <Footer />
        </div>
      </div>
  );
}
