import Link from "next/link";

export const AboutRight = () => {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-lg xl:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="w-full mb-16">
        <h1 className="text-4xl text-center syne-font text-[#072661] font-bold mb-5">
          Capital Engine
        </h1>
        <p className="font-normal text-xl text-center text-[#072661] opcaity-80">
          AI-Powered Investor Matching & Grant Discovery
        </p>
      </div>
      <div className="grid gap-y-10 lg:gap-y-0 gap-x-20   lg:grid-cols-2">
        <div className="flex flex-col justify-center">
          <div className="max-w-xl mb-6">
            <h2 className="max-w-lg mb-3 text-xl font-bold    sm:text-2xl text-[#072661]">
              Find the Right Investors
            </h2>
            <p className="text-lg text-[#072661] md:text-xl font-normal opacity-80 tracking-[-0.010em] ">
              Quickly identify investors who align with your startup&apos;s
              mission, stage, and industry.
            </p>
          </div>
          <div className="max-w-xl mb-8">
            <h2 className="max-w-lg mb-3 text-xl font-bold    sm:text-2xl text-[#072661]">
              Discover Grant Opportunities
            </h2>
            <p className="text-lg text-[#072661] md:text-xl font-normal opacity-80 tracking-[-0.010em]">
              Gain access to a regularly updated list of grants tailored to
              startups, so you never miss an opportunity.
            </p>
          </div>

          <div className="grid space-y-3   sm:space-y-0 mb-8">
            <ul className="space-y-4 text-base text-[#072661]">
              <li className="flex items-center font-semibold ">
                <img src="/tick-blue.jpg" className="mr-2" />A curated database
                of active investors and grants
              </li>
              <li className="flex items-center font-semibold ">
                <img src="/tick-blue.jpg" className="mr-2" />
                Recommendations tailored to your unique needs
              </li>
              <li className="flex items-center font-semibold ">
                <img src="/tick-blue.jpg" className="mr-2" />
                Save countless hours with an organized, central resource
              </li>
            </ul>
          </div>
          <div className="">
            <Link
              href="/"
              className="bg-[#23B5E8] py-7 inline-flex items-center justify-center h-12 px-7 font-medium tracking-wide text-white transition duration-200 rounded-full shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
              aria-label="Sign up"
              title="Sign up"
            >
              Find Investors
            </Link>
          </div>
        </div>
        <div className="relative">
          <img
            className=" w-full   absolute -z-10 "
            src="/about-bg-1.jpg"
            alt=""
          />
          <img
            className=" w-full rounded shadow-lg  "
            src="/about-1.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};
