"use client"
import React from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

const ResultsAchieved = () => {
  const [ref1, inView1] = useInView({ triggerOnce: true });
  const [ref2, inView2] = useInView({ triggerOnce: true });
  const [ref3, inView3] = useInView({ triggerOnce: true });
  const [ref4, inView4] = useInView({ triggerOnce: true });

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center my-24">
      <div ref={ref1} className="flex flex-col items-center my-6 lg:border-r lg:border-slate-500">
        <h1 className="text-5xl font-semibold">
          {inView1 && <CountUp end={99.99} decimals={2} decimal="." />}%
        </h1>
        <p className="font-light text-lg my-4 text-slate-200 pr-4">
          Availability, minimizing disruptions to critical operations.
        </p>
      </div>

      <div ref={ref2} className="flex flex-col items-center my-6 lg:border-r lg:border-slate-500">
        <h1 className="text-5xl font-semibold">
          {inView2 && <CountUp end={95} />}%
        </h1>
        <p className="font-light text-lg my-4 text-slate-200 pr-4">
          Queries resolved within 3 seconds, enhancing user experience.
        </p>
      </div>

      <div ref={ref3} className="flex flex-col items-center my-6 lg:border-r lg:border-slate-500">
        <h1 className="text-5xl font-semibold">
          {inView3 && <CountUp start={0} end={1} suffix="M" />}+
        </h1>
        <p className="font-light text-lg my-4 text-slate-200 pr-4">
          Documents and supports over 1,000 concurrent users.
        </p>
      </div>

      <div ref={ref4} className="flex flex-col items-center my-6">
        <h1 className="text-5xl font-semibold">
          {inView4 && <CountUp start={0} end={70} />}%
        </h1>
        <p className="font-light text-lg my-4 text-slate-200">
          Routine queries automated, reducing employee workload.
        </p>
      </div>
    </div>
  );
};

export default ResultsAchieved;
