"use client";

import Link from "next/link";
// import { useState } from "react";

const FooterNav = () => {
  // const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div className="px-4 pt-5 mx-auto sm:max-w-xl md:max-w-full  md:px-24 lg:px-24 bg-transparent   w-11/12">
      {/* <ul className="flex  items-center lg:hidden space-x-8 justify-between  text-[#072661] mb-10 ">
        <li>
          <Link
            href="/"
            aria-label="Our product"
            title="Our product"
            className="font-medium tracking-wide  transition-colors duration-200 hover:text-deep-purple-accent-400"
          >
            Why IylaVista
          </Link>
        </li>
        <li>
          <Link
            href="/"
            aria-label="Our product"
            title="Our product"
            className="font-medium tracking-wide  transition-colors duration-200 hover:text-deep-purple-accent-400"
          >
            Features
          </Link>
        </li>
        <li>
          <Link
            href="/"
            aria-label="About us"
            title="About us"
            className="font-medium tracking-wide  transition-colors duration-200 hover:text-deep-purple-accent-400"
          >
            How it works
          </Link>
        </li>
        <li>
          <Link
            href="/"
            aria-label="Product pricing"
            title="Product pricing"
            className="font-medium tracking-wide  transition-colors duration-200 hover:text-deep-purple-accent-400"
          >
            Pricing
          </Link>
        </li>
      </ul> */}
      <div className="relative flex items-center justify-between  border-b-2 pb-8">
        <Link
          href="/"
          aria-label="Company"
          title="Company"
          className="inline-flex items-center   "
        >
          <img src="/logo.jpg" className="w-32" alt="IylaVista Logo" />
        </Link>
        <ul className="flex items-center hidden space-x-8 lg:flex text-[#072661] mr-16 ">
          <li>
            <Link
              href="/"
              aria-label="Our product"
              title="Our product"
              className="font-medium tracking-wide  transition-colors duration-200 hover:text-deep-purple-accent-400"
            >
              Why IylaVista
            </Link>
          </li>
          <li>
            <Link
              href="/"
              aria-label="Our product"
              title="Our product"
              className="font-medium tracking-wide  transition-colors duration-200 hover:text-deep-purple-accent-400"
            >
              Features
            </Link>
          </li>
          <li>
            <Link
              href="/"
              aria-label="About us"
              title="About us"
              className="font-medium tracking-wide  transition-colors duration-200 hover:text-deep-purple-accent-400"
            >
              How it works
            </Link>
          </li>
          <li>
            <Link
              href="/"
              aria-label="Product pricing"
              title="Product pricing"
              className="font-medium tracking-wide  transition-colors duration-200 hover:text-deep-purple-accent-400"
            >
              Pricing
            </Link>
          </li>
        </ul>
        <div className=" flex ">
          <img src="/linkedin.jpg" alt="LinkedIn" />
        </div>
      </div>
    </div>
  );
};

export default FooterNav;
