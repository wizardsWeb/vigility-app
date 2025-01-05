import React from 'react';
import clsx from "clsx";

const Button = ({
    icon,
    children,
    href,
    containerClassName,
    onClick,
    markerFill,
  }) => {
    const Inner = () => (
      <>
        <span className="relative flex items-center min-h-[50px] px-4 g4 rounded-xl inner-before group-hover:before:opacity-100 overflow-hidden">
  
          {icon && (
            <img
              src={icon}
              alt="circle"
              className="size-10 mr-5 object-contain z-10"
            />
          )}
  
          <span className="relative z-2 font-poppins base-bold text-p1 uppercase">
            {children}
          </span>
        </span>
  
        <span className="glow-before glow-after" />
      </>
    );
    return href ? (
      <a
        className={clsx(
          "relative p-0.5 g5 rounded-2xl shadow-500 group",
          containerClassName,
        )}
        href={href}
      >
        <Inner />
      </a>
    ) : (
      <button
        className={clsx(
          "relative p-0.5 g5 rounded-2xl shadow-500 group mt-4",
          containerClassName,
        )}
        onClick={onClick}
      >
        <Inner />
      </button>
    );
  };
  export default Button;
