import React from 'react';
import { CardBody, CardContainer, CardItem } from "../ui/3d-card";
import { aboutData, aiCardData } from "@/constants";

const AiCardGrid = () => {
  return (
      <>
      <div className="relative h-full w-full bg-slate-950"><div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div></div>
      <div className='flex flex-col justify-center items-center gap-6 md:w-[60%] mx-auto py-4'>
        <h1 className='text-center text-2xl md:text-4xl flex-shrink-0'>Challenges Addressed</h1>
        <div className='w-[70%] md:w-full h-1 bg-p1 flex-shrink-0'></div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {aiCardData.map((data, index) => (
          <CardContainer className="inter-var flex" key={index}>
            <CardBody
              className="relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] bg-white/10 backdrop border-white/[0.2] w-full rounded-xl p-6 border  h-[24rem] flex flex-col items-center" // Added min-height here
            >
              <div className='h-24 w-24 mx-auto my-4'>
                {typeof data.svg === "string" ? (
                  <div dangerouslySetInnerHTML={{ __html: data.svg }} />
                ) : (
                  data.svg
                )}
                </div>
              <CardItem
                translateZ="50"
                className="text-2xl font-medium text-white text-center py-2 h-[4rem]"
              >
                  {data.title}
              </CardItem>
              <CardItem translateZ="100" className="w-full mt-4">
              </CardItem>
              <CardItem
                as="p"
                translateZ="60"
                className="text-md max-w-sm mt-2 text-neutral-300 flex items-center py-2"
              >
                {data.description}
              </CardItem>
            </CardBody>
          </CardContainer>
        ))}
      </div>
      </>
    );
};

export default AiCardGrid;
