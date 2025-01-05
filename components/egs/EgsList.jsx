"use client";
import { egsList } from "@/constants";
import React, { useState } from "react";

const EgsList = () => {
  const [expandedId, setExpandedId] = useState(null);

  const toggleExpand = (id) => {
    setExpandedId((prevId) => (prevId === id ? null : id));
  };

  return (
    <div>
      <div className="relative h-full w-full bg-slate-950">
        <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
      </div>
      <div className="flex flex-col justify-center items-center gap-6 md:w-[60%] mx-auto py-4">
        <h1 className="text-center text-2xl md:text-4xl flex-shrink-0">Services</h1>
        <div className="w-[70%] md:w-full h-1 bg-p1 flex-shrink-0"></div>
      </div>

      <div>
        <ul>
          {egsList.map((list) => (
            <li
              key={list.id}
              className="flex flex-col  gap-4 p-4 border border-white/20 my-4 rounded-xl cursor-pointer hover:scale-105 transition-all duration-300"
              onClick={() => toggleExpand(list.id)}
            >
              <div className="md:flex gap-8 px-4">
              <div className="flex gap-8 mb-4">
                <div className="h-[75px] w-[75px] rounded-full md:rounded-lg md:h-[100px] md:w-[170px] lg:h-[150px] lg:w-[230px]">
                  <img src={list.image} alt="" className="w-full h-full rounded-xl"  />
                </div>
                <div className="flex items-center md:hidden flex-1 w-full">
                  <h1 className="font-semibold text-lg">{list.title}</h1>
                </div>
              </div>
              <div className="flex flex-col">
                <div className="hidden md:block mb-4">
                  <h1 className="font-semibold text-lg">{list.title}</h1>
                </div>
                <div>
                  <p className="font-light">{list.description}</p>
                </div>
              </div>
              </div>

              {/* Expandable Section with Smooth Animation */}
              <div
                className={`overflow-hidden transition-[max-height] duration-500 ease-in-out`}
                style={{
                  maxHeight: expandedId === list.id ? "300px" : "0",
                }}
              >
                <div className="mt-4 px-4  rounded-md">
                  <h2 className="font-bold">Capabilities</h2>
                  <ul className="list-disc pl-5">
                    {list.capabilities?.map((capability, index) => (
                      <li key={index}>{capability}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default EgsList;

