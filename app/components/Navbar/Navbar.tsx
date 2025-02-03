"use client";

import Link from "next/link";
import { useState } from "react";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="px-4 py-5 mx-auto   md:max-w-full  md:px-10 lg:px-5 xl:px-20 bg-transparent absolute top-0 left-0 w-screen">
      <div className="relative flex items-center justify-between text-sm xl:text-base">
        <Link
          href="/"
          aria-label="Company"
          title="Company"
          className="inline-flex items-center   "
        >
          <img src="/logo.png" className="w-32" alt="IylaVista Icon" />
        </Link>
        <ul className="flex items-center hidden space-x-8 lg:flex text-[#072661] ms-36  ">
          <li>
            <Link
              href="#services"
              aria-label="Our product"
              title="Our product"
              className="font-medium tracking-wide  transition-colors duration-200 hover:text-deep-purple-accent-400"
            >
              Why IylaVista
            </Link>
          </li>
          <li>
            <Link
              href="#features"
              aria-label="Our product"
              title="Our product"
              className="font-medium tracking-wide  transition-colors duration-200 hover:text-deep-purple-accent-400"
            >
              Features
            </Link>
          </li>
          <li>
            <Link
              href="#pricing"
              aria-label="Product pricing"
              title="Product pricing"
              className="font-medium tracking-wide  transition-colors duration-200 hover:text-deep-purple-accent-400"
            >
              Pricing
            </Link>
          </li>
          <li>
            <Link
              href="#how"
              aria-label="About us"
              title="About us"
              className="font-medium tracking-wide  transition-colors duration-200 hover:text-deep-purple-accent-400"
            >
              How it works
            </Link>
          </li>
        </ul>
        <div className=" flex ">
          <ul className="flex items-center hidden space-x-8 lg:flex">
            <li>
              <Link
                href="/"
                className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-[#072661] transition duration-200  "
                aria-label="Sign up"
                title="Sign up"
              >
                Login
              </Link>
            </li>
          </ul>
          <ul className="flex items-center hidden space-x-8 lg:flex">
            <li>
              <Link
                href="/"
                className="bg-[#23B5E8] inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded-full shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                aria-label="Sign up"
                title="Sign up"
              >
                Get Started for Free
              </Link>
            </li>
          </ul>
        </div>

        <div className="lg:hidden">
          <button
            aria-label="Open Menu"
            title="Open Menu"
            className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline hover:bg-deep-purple-50 focus:bg-deep-purple-50"
            onClick={() => setIsMenuOpen(true)}
          >
            <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
              />
              <path
                fill="currentColor"
                d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
              />
              <path
                fill="currentColor"
                d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
              />
            </svg>
          </button>
          {isMenuOpen && (
            <div className="absolute top-0 left-0 w-full">
              <div className="p-5 bg-white border rounded shadow-sm">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <Link
                      href="/"
                      aria-label="Company"
                      title="Company"
                      className="inline-flex items-center"
                    >
                      <img
                        src="/logo.jpg"
                        className="w-32"
                        alt="IylaVista Icon"
                      />
                    </Link>
                  </div>
                  <div>
                    <button
                      aria-label="Close Menu"
                      title="Close Menu"
                      className="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                        <path
                          fill="currentColor"
                          d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
                <nav className="mt-8">
                  <ul className="space-y-6 text- text-base">
                    <li>
                      <Link
                        href="#services"
                        aria-label="Our product"
                        title="Our product"
                        onClick={() => setIsMenuOpen(false)}
                        className="font-medium tracking-wide  transition-colors duration-200 hover:text-deep-purple-accent-400"
                      >
                        Why IylaVista
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="#features"
                        aria-label="Our product"
                        title="Our product"
                        onClick={() => setIsMenuOpen(false)}
                        className="font-medium tracking-wide  transition-colors duration-200 hover:text-deep-purple-accent-400"
                      >
                        Features
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="#pricing"
                        aria-label="Product pricing"
                        title="Product pricing"
                        onClick={() => setIsMenuOpen(false)}
                        className="font-medium tracking-wide  transition-colors duration-200 hover:text-deep-purple-accent-400"
                      >
                        Pricing
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="#how"
                        aria-label="About us"
                        title="About us"
                        onClick={() => setIsMenuOpen(false)}
                        className="font-medium tracking-wide  transition-colors duration-200 hover:text-deep-purple-accent-400"
                      >
                        How it works
                      </Link>
                    </li>
                  </ul>
                  <div className="  flex justify-between mt-8">
                    <ul className="flex items-center  space-x-8 lg:hidden">
                      <li>
                        <Link
                          href="/"
                          className=" text-[#23B5E8] border-[#23B5E8] border-2 inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide  transition duration-200 rounded-full   focus:shadow-outline focus:outline-none"
                          aria-label="Sign up"
                          onClick={() => setIsMenuOpen(false)}
                          title="Sign up"
                        >
                          Login
                        </Link>
                      </li>
                    </ul>
                    <ul className="flex items-center  space-x-8 lg:hidden">
                      <li>
                        <Link
                          href="/"
                          className="bg-[#23B5E8] inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded-full shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                          aria-label="Sign up"
                          onClick={() => setIsMenuOpen(false)}
                          title="Sign up"
                        >
                          Get Started for Free
                        </Link>
                      </li>
                    </ul>
                  </div>
                </nav>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
