import { CardsData } from "@/constants";
import React from "react";

const Cards = ({ className }) => {
  return (
    <>
      {CardsData.map((item, index) => (
        <div
          key={index}
          className={`${className} hover:scale-105 duration-500 transition-all h-[40rem] bg-white/5 backdrop-blur-lg border-2 border-white/10  opacity-100 rounded-2xl flex flex-col justify-between p-6  md:mt-0 mt-12`}
        >
            <div className="">
              <div className="body-1 py-4">{item.title}</div>
              <div className="body-2 py-2 md:h-18 lg:h-24">
                {item.description}
              </div>
              <div className="py-2 flex flex-wrap flex-auto gap-4">
                {item.tags.map((tag, index) => (
                  <div className="px-4 py-1 border border-white/40 rounded-md " key={index}>
                    {tag}
                  </div>
                ))}
              </div>
            </div>
            <div className="h-[60%] ">
              <img
                src="https://framerusercontent.com/images/g1YDBl06cC4JnR3Ifb0KI0AvBdQ.png"
                className="h-full object-cover rounded-2xl"
                alt=""
              />
            </div>
        </div>
      ))}
    </>
  );
};

export default Cards;
