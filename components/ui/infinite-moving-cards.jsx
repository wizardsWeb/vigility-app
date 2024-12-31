"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  className
}) => {
  const containerRef = React.useRef(null);
  const scrollerRef = React.useRef(null);

  useEffect(() => {
    addAnimation();
  }, []);

  const [start, setStart] = useState(false);

  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      // Duplicate the items to create the infinite scroll effect
      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      // Set the initial scroll position to the middle
      if (scrollerRef.current) {
        const scrollWidth = scrollerRef.current.scrollWidth;
        const containerWidth = containerRef.current.offsetWidth;
        const startPosition = (scrollWidth - containerWidth) / 2;
        scrollerRef.current.scrollLeft = startPosition;
      }

      // Apply direction and speed
      getDirection();
      getSpeed();
      setStart(true);
    }
  }

  const getDirection = () => {
    if (containerRef.current) {
      if (direction === "left") {
        containerRef.current.style.setProperty("--animation-direction", "forwards");
      } else {
        containerRef.current.style.setProperty("--animation-direction", "reverse");
      }
    }
  };

  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "10s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "20s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "30s");
      }
    }
  };

  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 max-w-9xl overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex min-w-full shrink-0 gap-4 py-4 w-max flex-nowrap",
          start && "animate-scroll"
        )}
      >
        {items.map((item, idx) => (
          <li
            className="w-[250px] max-w-full relative rounded-2xl flex-shrink-0 px-8 py-6 md:w-[350px]"
            style={{
              background:
                "linear-gradient(180deg, var(--slate-800), var(--slate-900))",
            }}
            key={idx}
          >
            <blockquote>
              <div
                aria-hidden="true"
                className="user-select-none -z-1 pointer-events-none absolute -left-0.5 -top-0.5 h-[calc(100%_+_4px)] w-[calc(100%_+_4px)]"
              ></div>
              <span className="relative z-20 text-sm leading-[1.6] text-gray-100 font-normal">
                <img src={item.image} alt=""  className='h-20 w-40 rounded-sm' />
              </span>
            </blockquote>
          </li>
        ))}
      </ul>
    </div>
  );
};
