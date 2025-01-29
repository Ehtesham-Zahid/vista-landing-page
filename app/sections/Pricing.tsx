import Link from "next/link";
import "./style.css";

export const Pricing = () => {
  return (
    <div className="pricing-bg px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
        <h2 className="syne-font max-w-lg mb-6 font-sans text-5xl font-bold  leading-[48px] text-[#072661] sm:text-4xl md:mx-auto">
          Plans Designed to Accelerate Your Success
        </h2>
        <p className="text-base   md:text-xl text-[#072661] font-normal leadng-8  ">
          Get started with the perfect plan for your growth journey.
        </p>
      </div>
      <div className="grid max-w-md gap-10 row-gap-5 lg:max-w-screen-lg sm:row-gap-10 lg:grid-cols-3 xl:max-w-screen-lg sm:mx-auto">
        <div className="text-[#072661] relative flex flex-col justify-between p-10 transition-shadow duration-300 bg-white border rounded-lg shadow-sm sm:items-start hover:shadow border-deep-purple-accent-400">
          <div className="text-start">
            <div className="text-lg font-semibold  mb-8">Basic Plan</div>
            <div className="flex items-end justify-start  mb-8">
              <div className="mr-1 text-5xl font-bold">$20</div>
              <div className=" ">/ Per Month</div>
            </div>
            <p className="mb-10 opacity-70 font-normal">
              This package is suitable for teams 1-50 people
            </p>
            <div className="mt-2 space-y-4">
              <div className="flex items-center font-semibold">
                <img
                  src="/tick.jpg"
                  className="mr-3 bg-[#23B5E8]  rounded-full w-[18px] h-[18px] p-1"
                />
                15 Unique Monthly Views
              </div>
              <div className="flex items-center font-semibold">
                <img
                  src="/tick.jpg"
                  className="mr-3 bg-[#23B5E8]  rounded-full w-[18px] h-[18px] p-1"
                />
                AI Messaging
              </div>{" "}
              <div className="flex items-center font-semibold">
                <img
                  src="/tick.jpg"
                  className="mr-3 bg-[#23B5E8]  rounded-full w-[18px] h-[18px] p-1"
                />
                Integrated CRM
              </div>{" "}
              <div className="flex items-center font-semibold">
                <img
                  src="/tick.jpg"
                  className="mr-3 bg-[#23B5E8]  rounded-full w-[18px] h-[18px] p-1"
                />
                Basic Statistics
              </div>{" "}
              <div className="flex items-center font-semibold">
                <img
                  src="/tick.jpg"
                  className="mr-3 bg-[#23B5E8]  rounded-full w-[18px] h-[18px] p-1"
                />
                Event Discovery
              </div>
            </div>
          </div>
          <div className="mt-4 w-full">
            <Link
              href="/"
              className="bg-white border inline-flex items-center justify-center w-full h-12 px-6 mt-6 font-medium tracking-wide text-[#072661] transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
            >
              Purchase Now
            </Link>
          </div>
        </div>
        <div className="text-white relative flex flex-col justify-between p-10 transition-shadow duration-300 bg-[#23B5E8] border rounded-lg shadow-sm sm:items-start hover:shadow border-deep-purple-accent-400">
          <div className="text-start">
            <div className="text-lg font-semibold  mb-8">Popular Plan</div>
            <div className="flex items-end justify-start  mb-8">
              <div className="mr-1 text-5xl font-bold">$46</div>
              <div className=" ">/ Per Month</div>
            </div>
            <p className="mb-10 opacity-70 font-normal">
              This package is suitable for teams 1-100 people
            </p>
            <div className="mt-2 space-y-4">
              <div className="flex items-center font-semibold">
                <img src="/tick.jpg" className="mr-3" />
                15 Unique Monthly Views
              </div>
              <div className="flex items-center font-semibold">
                <img src="/tick.jpg" className="mr-3" />
                AI Messaging
              </div>{" "}
              <div className="flex items-center font-semibold">
                <img src="/tick.jpg" className="mr-3" />
                Integrated CRM
              </div>{" "}
              <div className="flex items-center font-semibold">
                <img src="/tick.jpg" className="mr-3" />
                Basic Statistics
              </div>{" "}
              <div className="flex items-center font-semibold">
                <img src="/tick.jpg" className="mr-3" />
                Event Discovery
              </div>
            </div>
          </div>
          <div className="mt-4 w-full">
            <Link
              href="/"
              className="bg-white inline-flex items-center justify-center w-full h-12 px-6 mt-6 font-medium tracking-wide text-[#072661] transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
            >
              Purchase Now
            </Link>
          </div>
        </div>
        <div className="text-[#072661] relative flex flex-col justify-between p-10 transition-shadow duration-300 bg-white border rounded-lg shadow-sm sm:items-start hover:shadow border-deep-purple-accent-400">
          <div className="text-start">
            <div className="text-lg font-semibold  mb-8">Premium Plan</div>
            <div className="flex items-end justify-start  mb-8">
              <div className="mr-1 text-5xl font-bold">$90</div>
              <div className=" ">/ Per Month</div>
            </div>
            <p className="mb-10 opacity-70 font-normal">
              This package is suitable for big team or company
            </p>
            <div className="mt-2 space-y-4">
              <div className="flex items-center font-semibold">
                <img
                  src="/tick.jpg"
                  className="mr-3 bg-[#23B5E8]  rounded-full w-[18px] h-[18px] p-1"
                />
                15 Unique Monthly Views
              </div>
              <div className="flex items-center font-semibold">
                <img
                  src="/tick.jpg"
                  className="mr-3 bg-[#23B5E8]  rounded-full w-[18px] h-[18px] p-1"
                />
                AI Messaging
              </div>{" "}
              <div className="flex items-center font-semibold">
                <img
                  src="/tick.jpg"
                  className="mr-3 bg-[#23B5E8]  rounded-full w-[18px] h-[18px] p-1"
                />
                Integrated CRM
              </div>{" "}
              <div className="flex items-center font-semibold">
                <img
                  src="/tick.jpg"
                  className="mr-3 bg-[#23B5E8]  rounded-full w-[18px] h-[18px] p-1"
                />
                Basic Statistics
              </div>{" "}
              <div className="flex items-center font-semibold">
                <img
                  src="/tick.jpg"
                  className="mr-3 bg-[#23B5E8]  rounded-full w-[18px] h-[18px] p-1"
                />
                Event Discovery
              </div>
            </div>
          </div>
          <div className="mt-4 w-full">
            <Link
              href="/"
              className="bg-white border inline-flex items-center justify-center w-full h-12 px-6 mt-6 font-medium tracking-wide text-[#072661] transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
            >
              Purchase Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
