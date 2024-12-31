"use client";
import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

const AnimatedTestimonials = ({ testimonials, autoplay = false }) => {
  const [active, setActive] = useState(0);
  const [isClient, setIsClient] = useState(false);

  const handleNext = () => {
    setActive((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const isActive = (index) => index === active;

  useEffect(() => {
    // Ensure the component renders on the client side
    setIsClient(true);

    if (autoplay) {
      const interval = setInterval(handleNext, 5000);
      return () => clearInterval(interval);
    }
  }, [autoplay]);

  return (
    <>
    <div className='flex flex-col justify-center items-center gap-6 md:w-[60%] mx-auto py-4'>
      <h1 className='text-center text-2xl md:text-4xl flex-shrink-0'>Our Team</h1>
      <div className='w-[70%] md:w-full h-1 bg-p1 flex-shrink-0'></div>
    </div>
    <div className="font-poppins px-4 md:px-8 lg:px-12 py-20">
      <div className="relative grid grid-cols-1 md:grid-cols-2 gap-1O">
        <div>
          <div className="relative h-80 w-full">
            {isClient && (
              <AnimatePresence>
                {testimonials.map((testimonial, index) => (
                  <motion.div
                    key={testimonial.src}
                    initial={{
                      opacity: 0,
                      scale: 0.9,
                      z: -100,
                      rotate: Math.random() * 20 - 10,
                    }}
                    animate={{
                      opacity: isActive(index) ? 1 : 0.7,
                      scale: isActive(index) ? 1 : 0.95,
                      z: isActive(index) ? 0 : -100,
                      rotate: isActive(index) ? 0 : Math.random() * 20 - 10,
                      zIndex: isActive(index) ? 999 : testimonials.length - index,
                      y: isActive(index) ? [0, -80, 0] : 0,
                    }}
                    exit={{
                      opacity: 0,
                      scale: 0.9,
                      z: 100,
                      rotate: Math.random() * 20 - 10,
                    }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    className="absolute inset-0 origin-bottom"
                  >
                    <Image
                      src={testimonial.src}
                      alt={testimonial.name}
                      width={300}
                      height={500}
                      draggable={false}
                      className="h-full w-[80%] rounded-3xl object-fit object-center"
                    />
                  </motion.div>
                ))}
              </AnimatePresence>
            )}
          </div>
        </div>
        <div className="flex justify-between flex-col py-4">
          <motion.div
            key={active}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
          >
            <h3 className="text-2xl font-bold">
              {testimonials[active].name}
            </h3>
            <p className="text-lg text-gray-500 dark:text-neutral-500">
              {testimonials[active].designation}
            </p>
            <motion.p className="text-lg text-gray-500 mt-8 dark:text-neutral-300">
              {testimonials[active].quote.split(" ").map((word, index) => (
                <motion.span
                  key={index}
                  initial={{ filter: "blur(10px)", opacity: 0, y: 5 }}
                  animate={{ filter: "blur(0px)", opacity: 1, y: 0 }}
                  transition={{ duration: 0.2, ease: "easeInOut", delay: 0.02 * index }}
                  className="inline-block"
                >
                  {word}&nbsp;
                </motion.span>
              ))}
            </motion.p>
          </motion.div>
          <div className="flex gap-4 pt-12 md:pt-0">
            <button
              onClick={handlePrev}
              className="h-7 w-7 rounded-full bg-gray-100 dark:bg-neutral-800 flex items-center justify-center group/button"
            >
              <IconArrowLeft className="h-5 w-5 text-black dark:text-neutral-400 group-hover/button:rotate-12 transition-transform duration-300" />
            </button>
            <button
              onClick={handleNext}
              className="h-7 w-7 rounded-full bg-gray-100 dark:bg-neutral-800 flex items-center justify-center group/button"
            >
              <IconArrowRight className="h-5 w-5 text-black dark:text-neutral-400 group-hover/button:-rotate-12 transition-transform duration-300" />
            </button>
          </div>
        </div>
      </div>
    </div>
  </>
  );
};

export default AnimatedTestimonials;
  