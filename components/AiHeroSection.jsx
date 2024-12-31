import React from "react";
import { Spotlight } from "./ui/spotlight";

export function AiHeroSection() {
  return (
    (<div
      className="h-[40rem] w-full rounded-md flex md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
      <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="white" />
      <div className=" p-4 max-w-7xl  mx-auto relative z-10  w-full pt-20 md:pt-0">
        <h1
          className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-blue-50 to-purple-500 bg-opacity-50">
          DIGIICE - <br /> Revolutionizing Enterprise Interactions with AI
        </h1>
        <p className="mt-4  sm:text-xl md:text-2xl my-12 max-w-2xl text-center mx-auto font-semibold">The Secure, Customizable RAG Chatbot Solution for Modern Enterprises</p>
        <p
          className="mt-4 font-normal sm:text-lg md:text-lg text-slate-200 max-w-4xl text-center mx-auto">
         DIGIICE is a cutting-edge Retrieval-Augmented Generation (RAG) chatbot solution designed for enterprises with stringent security and compliance needs. Developed for on-premise deployment, DIGIICE seamlessly combines real-time data retrieval with advanced AI generation to enhance customer interactions, streamline knowledge management, and boost operational efficiency.

        </p>
      </div>
    </div>)
  );
}
