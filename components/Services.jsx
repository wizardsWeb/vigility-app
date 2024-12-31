"use client";
import Image from "next/image";
import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useOutsideClick } from "@/hooks/useOutsideClick.jsx";
import Button from "./Button";

export default function Services() {
  const [active, setActive] = useState(null);
  const ref = useRef(null);
  const id = useId();

  useEffect(() => {
    function onKeyDown(event) {
      if (event.key === "Escape") {
        setActive(false);
      }
    }

    if (active && typeof active === "object") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  useOutsideClick(ref, () => setActive(null));

  return (
    <>
      <div>
        <h1 className="px-4 text-3xl md:text-4xl py-6 text-center md:text-start lg:text-5xl">
          Services
        </h1>
        <div className="w-[50%]"></div>
      </div>
      <AnimatePresence>
        {active && typeof active === "object" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/20 h-full z-10"
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {active && typeof active === "object" ? (
          <div className="fixed inset-0  grid place-items-center z-[100]">
            <motion.button
              key={`button-${active.title}-${id}`}
              layout
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              exit={{
                opacity: 0,
                transition: {
                  duration: 0.05,
                },
              }}
              className="flex absolute top-12 right-6 lg:hidden items-center justify-center bg-white rounded-full h-6 w-6"
              onClick={() => setActive(null)}
            >
              <CloseIcon />
            </motion.button>
            <motion.div
              layoutId={`card-${active.title}-${id}`}
              ref={ref}
              className="w-[80%] max-w-[500px] h-[80%] backdrop-blur-2xl md:h-fit md:max-h-[90%] flex flex-col bg-neutral-900 rounded-3xl overflow-hidden"
            >
              <motion.div layoutId={`image-${active.title}-${id}`}>
                <Image
                  priority
                  width={200}
                  height={200}
                  src={active.src}
                  alt={active.title}
                  className="w-full h-80 lg:h-80 sm:rounded-tr-lg sm:rounded-tl-lg object-cover object-top"
                />
              </motion.div>

              <div>
                <div className="flex justify-between items-start p-4">
                  <div className="">
                    <motion.h3
                      layoutId={`title-${active.title}-${id}`}
                      className="font-bold text-neutral-700 dark:text-neutral-200"
                    >
                      {active.title}
                    </motion.h3>
                    <motion.p
                      layoutId={`description-${active.description}-${id}`}
                      className="text-neutral-600 dark:text-neutral-400"
                    >
                      {active.description}
                    </motion.p>
                  </div>
                </div>
                <div className="pt-4 relative px-4">
                  <motion.div
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-neutral-600 text-xs md:text-sm lg:text-base h-40 md:h-fit pb-10 flex flex-col items-start gap-4 overflow-auto dark:text-neutral-400 [mask:linear-gradient(to_bottom,white,white,transparent)] [scrollbar-width:none] [-ms-overflow-style:none] [-webkit-overflow-scrolling:touch]"
                  >
                    {typeof active.content === "function"
                      ? active.content()
                      : active.content}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>
      <ul className="mx-auto w-full gap-4">
        {cards.map((card, index) => (
          <motion.div
            layoutId={`card-${card.title}-${id}`}
            key={`card-${card.title}-${id}`}
            onClick={() => setActive(card)}
            className="p-4 my-4 flex flex-col md:flex-row justify-between items-center hover:bg-neutral-800/60  rounded-xl cursor-pointer"
          >
            <div className="flex gap-4 flex-col md:flex-row ">
              <motion.div layoutId={`image-${card.title}-${id}`}>
                <Image
                  width={100}
                  height={100}
                  src={card.src}
                  alt={card.title}
                  className="h-40 w-80 md:h-24 md:w-60 rounded-lg object-cover object-top mx-auto"
                />
              </motion.div>
              <div className="w-full px-4">
                <motion.h3
                  layoutId={`title-${card.title}-${id}`}
                  className="font-medium text-neutral-300 dark:text-neutral-200 text-center md:text-left"
                >
                  {card.title}
                </motion.h3>
                <motion.p
                  layoutId={`description-${card.description}-${id}`}
                  className="text-neutral-600 dark:text-neutral-400 text-center md:text-left"
                >
                  {card.description}
                </motion.p>
              </div>
            </div>
            <Button
              layoutId={`button-${card.title}-${id}`}
              className="px-8 text-sm rounded-full font-bold bg-gray-100 hover:bg-green-500 hover:text-white text-black mt-8 md:mt-0"
            >
              {card.ctaText}
            </Button>
          </motion.div>
        ))}
      </ul>
    </>
  );
}

export const CloseIcon = () => {
  return (
    <motion.svg
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      exit={{
        opacity: 0,
        transition: {
          duration: 0.05,
        },
      }}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4 text-black"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </motion.svg>
  );
};

const cards = [
  {
    description:
      "Empowering businesses to align with environmental, social, and governance (ESG) frameworks through comprehensive reporting solutions.",
    title: "ESG Reporting",
    src: "https://www.vigility.in/imgs/ITIL-course.png",
    ctaText: "View",
    ctaLink: "https://ui.aceternity.com/templates",
    content: () => {
      return (
        <p>
          Capabilities:
          <p>1. Development of ESG strategies tailored to industry standards.</p>
          <p>2. Compliance-driven reporting aligned with global frameworks like GRI and SASB.</p>
          <p>3. Data collection, validation, and visualization for transparent disclosure.</p>
        </p>
      );
    },
  },
  {
    description:
      "Providing precise greenhouse gas (GHG) accounting services to help organizations measure and reduce their carbon footprint.",
    title: "GHG Accounting",
    src: "https://www.vigility.in/imgs/ITIL-course.png",
    ctaText: "View",
    ctaLink: "https://ui.aceternity.com/templates",
    content: () => {
      return (
        <>
          <p>
          Capabilities:
            <p>1. Scope 1, 2, and 3 emissions tracking and reporting.</p>
            <p>2. Carbon footprint assessments for sustainability planning.</p>
            <p>3. Customized dashboards for monitoring emissions performance.</p>
          </p>
        </>
      );
    },
  },

  {
    description:
      "Streamlining Business Responsibility and Sustainability Reporting (BRSR) for Indian businesses to meet SEBI/'s regulatory requirements.",
    title: "BRSR Reporting",
    src: "https://www.vigility.in/imgs/ITIL-course.png",
    ctaText: "View",
    ctaLink: "https://ui.aceternity.com/templates",
    content: () => {
      return (
        <>
           <p>
          Capabilities:
            <p>1. End-to-end assistance with BRSR compliance and disclosure.</p>
            <p>2. Integration of sustainability metrics into organizational reporting.</p>
            <p>3. Stakeholder engagement through transparent and accessible reports.</p>
          </p>
        </>
      );
    },
  },
  {
    description:
      'Leveraging advanced data analytics to turn complex datasets into actionable insights through intuitive visualizations.',
    title: "Data Analysis and Management (Visualization)",
    src: "https://www.vigility.in/imgs/ITIL-course.png",
    ctaText: "View",
    ctaLink: "https://ui.aceternity.com/templates",
    content: () => {
      return (
        <>
           <p>
          Capabilities:
            <p>1. Real-time data integration and reporting.</p>
            <p>2. Interactive dashboards for better decision-making.</p>
            <p>3. Advanced analytics for sustainability and ESG metrics.</p>
          </p>
        </>
      );
    },
  },
  {
    description:
      "Mitigating climate-related risks by forecasting and modeling potential impacts on business operations and assets.",
    title: "Climate Risk Modeling",
    src: "https://www.vigility.in/imgs/ITIL-course.png",
    ctaText: "View",
    ctaLink: "https://ui.aceternity.com/templates",
    content: () => {
      return (
        <>
           <p>
          Capabilities:
            <p>1. Scenario analysis for physical and transition risks.</p>
            <p>2. Climate data integration for predictive modeling.</p>
            <p>3. Risk mitigation strategies tailored to industry challenges.</p>
          </p>
        </>
      );
    },
  },
  {
    description:
      "Designing tailored sustainability solutions that address specific organizational goals and challenges.",
    title: "Customized Sustainability Solutions",
    src: "https://www.vigility.in/imgs/ITIL-course.png",
    ctaText: "View",
    ctaLink: "https://ui.aceternity.com/templates",
    content: () => {
      return (
        <>
           <p>
          Capabilities:
            <p>1. Sustainable strategy development aligned with global goals (e.g., SDGs).</p>
            <p>2. Lifecycle assessments to minimize environmental impact.</p>
            <p>3. Industry-specific initiatives to enhance long-term sustainability.</p>
          </p>
        </>
      );
    },
  },
];
