"use client";
import Image from "next/image";
import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useOutsideClick } from "@/hooks/useOutsideClick.jsx";
import Button from "../home/Button";

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
      "Vigility has extensive experience implementing top EMS tools like CA, IBM, HP, BMC, ServiceNow, and Dynatrace. Our team offers a full range of related services - from design and customization to implementation, migration, and maintenance.",
    title: "EMS - Enterprise Management Systems",
    src: "https://www.vigility.in/imgs/ITIL-course.png",
    ctaText: "View",
    ctaLink: "https://ui.aceternity.com/templates",
    content: () => {
      return (
        <div>
          Our Offerings
          <p>1. User & resource identity/access management</p>
          <p>2. Agent-based/agentless monitoring with automation</p>
          <p>3. Endpoint protection and application/device control</p>
          <p>4. Auto-discovery, asset management, incident tracking</p>
          <p>5. Centralized patch and endpoint management</p>
        </div>
      );
    },
  },
  {
    description:
      "Vigility's infrastructure lifecycle management takes the worry out of running your IT. Our experts leverage decades of experience to help you efficiently execute in every area - from planning and operations to end-of-life.",
    title: "Infrastructure Management Solutions",
    src: "https://www.vigility.in/imgs/ITIL-course.png",
    ctaText: "View",
    ctaLink: "https://ui.aceternity.com/templates",
    content: () => {
      return (
        <>
          <div>
            Our Offerings
            <p>1. Project management, design, delivery, and ongoing support</p>
            <p>2. Process implementation for improved IT services</p>
            <p>3. Monitoring, troubleshooting, and SLA optimization</p>
            <p>4. Comprehensive IT support and resource management</p>
            <p>5. Capacity optimization and forecasting</p>
          </div>
        </>
      );
    },
  },

  {
    description:
      "We specialize in both open-source and proprietary platforms, delivering tailored solutions that align with your business needs and budget to ensure maximum ROI. Our expertise includes:",
    title: "Software Development Expertise",
    src: "https://www.vigility.in/imgs/ITIL-course.png",
    ctaText: "View",
    ctaLink: "https://ui.aceternity.com/templates",
    content: () => {
      return (
        <>
          <p>1. Frameworks: PHP (CakePHP, Symphony), Opencart, and more.</p>
          <p>2. CMS Platforms: WordPress, Joomla, Drupal, Moodle.</p>
          <p>3. E-commerce Solutions: Magento, Opencart, OSCommerce, Drupal.</p>
          <p>
            4. Core Development Skills: Proficient in Java, PHP, ReactJS, VueJS,
            CSS, Node, Golang, Django, Flask.
          </p>

          <p>
            By integrating these technologies, we enhance customer experience,
            boost product recall, and elevate brand value to drive revenue
            growth for our clients.
          </p>
        </>
      );
    },
  },
  {
    description:
      'Vigility Technologies offers RPA solutions to automate business processes using software "robots" that capture, interpret, and process data across digital systems. Our RPA solutions enhance operational efficiency, improve productivity, and streamline workflows, enabling organizations to:',
    title: "Robotic Process Automation (RPA)",
    src: "https://www.vigility.in/imgs/ITIL-course.png",
    ctaText: "View",
    ctaLink: "https://ui.aceternity.com/templates",
    content: () => {
      return (
        <>
          <p>
            1. Optimize Resources: Free up IT professionals to focus on
            strategic initiatives like ERP and BPMS rollouts.
          </p>
          2. Boost Efficiency: Automate repetitive tasks to increase workforce
          capacity and reduce errors.
          <p>
            3. Achieve Agility: Enable faster, smoother operations, giving
            companies a competitive edge.
          </p>
        </>
      );
    },
  },
  {
    description:
      "Vigility Technologies provides specialized IT manpower and consulting services to optimize operations and reduce costs.",
    title: "Outsource Consulting and Virtual Manpower Services",
    src: "https://www.vigility.in/imgs/ITIL-course.png",
    ctaText: "View",
    ctaLink: "https://ui.aceternity.com/templates",
    content: () => {
      return (
        <>
          <p>
            1. Outsource Consulting: Tailored solutions to improve IT efficiency
            with reporting, notifications, and auditing based on standard
            processes.
          </p>
          <p>
            2. Virtual Manpower Services: Access to top professionals for short-
            or long-term needs, solving resource challenges without full-time
            hiring.
          </p>
          <p>
            3. Resources-as-a-Service (RaaS): Flexible solutions to focus on
            core objectives while we manage your resource needs efficiently.
          </p>
        </>
      );
    },
  },
  {
    description:
      "Vigility Technologies offers comprehensive IT infrastructure support to maximize uptime and efficiency.",
    title: "Business Services",
    src: "https://www.vigility.in/imgs/ITIL-course.png",
    ctaText: "View",
    ctaLink: "https://ui.aceternity.com/templates",
    content: () => {
      return (
        <>
          <p>
            1. Implementation Services: Identify gaps, design solutions, and
            implement processes for proactive IT issue detection and resolution.
          </p>
          <p>
            2. Upgradation & Migration: Seamless updates to the latest EMS tool
            versions without data loss.
          </p>
          <p>
            3. On-Call Support: 24/7 remote support via a dedicated portal, with
            customizable service models.
          </p>
          <p>
            4. SLA Management: Ensure uptime with SLA-based support and ticket
            tracking.
          </p>
          <p>
            5. Expert Resources: Skilled in EMS tools like CA Broadcom,
            ServiceNow, Dynatrace, and more. 6. Reporting & Analytics: Regular
            reviews and actionable insights for continuous improvement.
          </p>
        </>
      );
    },
  },
];
