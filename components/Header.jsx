'use client';
import React, { useState } from 'react';
import Link from 'next/link';

const Header = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <header className=" relative z-50">
      {/* Top Navbar */}
      <div className="flex justify-between items-center py-5 font-medium ">
        {/* Logo */}
        <div>
          <Link href="/">
            <img src="/images/xora.svg" alt="logo" width={115} height={55} />
          </Link>
        </div>

        {/* Desktop Menu */}
        <div>
          <ul className="hidden sm:flex gap-10 text-xl">
            <Link href="/" className="hover:text-white transition-colors duration-200">Home</Link>
            <Link href="/services" className="hover:text-white transition-colors duration-200">Services</Link>
            <Link href="/about" className="hover:text-white transition-colors duration-200">About</Link>
            <Link href="/ai" className="hover:text-white transition-colors duration-200">AI</Link>
          </ul>
        </div>

        {/* Hamburger Menu Button */}
        <div className="sm:hidden">
          <button
            className="lg:hidden z-50 size-10 border-2 border-s4/25 rounded-full flex justify-center items-center"
            onClick={() => setIsOpen((prevState) => !prevState)}
          >
            <img
              src={`/images/${isOpen ? 'magic' : 'close'}.svg`}
              alt="magic"
              className="size-1/2 object-contain"
            />
          </button>
        </div>
      </div>

      {/* Sidebar Menu */}
      <div
        className={`sm:hidden fixed top-20 right-0 bottom-0 left-0 bg-s1 backdrop-blur-xl transition-all text-2xl z-50 ${
          !isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col w-[90%] mx-auto my-20">
          <Link
            onClick={() => setIsOpen(false)}
            className="my-5 pl-10 hover:text-white transition-colors duration-200"
            href="/"
          >
            Home
          </Link>
          <Link
            onClick={() => setIsOpen(false)}
            className="my-5 pl-10 hover:text-white transition-colors duration-200"
            href="/services"
          >
            Services
          </Link>
          <Link
            onClick={() => setIsOpen(false)}
            className="my-5 pl-10 hover:text-white transition-colors duration-200"
            href="/about"
          >
            About
          </Link>
          <Link
            onClick={() => setIsOpen(false)}
            className="my-5 pl-10 hover:text-white transition-colors duration-200"
            href="/"
          >
            AI
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
