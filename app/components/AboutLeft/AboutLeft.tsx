import Link from "next/link";

export const AboutLeft = () => {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="w-full mb-16">
        <h1 className="text-4xl text-center syne-font text-[#072661] font-bold mb-5">
          Coverage Engine
        </h1>
        <p className="font-normal text-xl text-center text-[#072661] opcaity-80">
          AI-Driven Media Connections & Real-Time Press Opportunities
        </p>
      </div>
      <div className="grid gap-x-20   lg:grid-cols-2">
        <div>
          <img
            className=" w-full rounded shadow-lg  "
            src="/about-2.jpg"
            alt=""
          />
        </div>
        <div className="flex flex-col justify-center">
          <div className="max-w-xl mb-6">
            <h2 className="max-w-lg mb-3 text-xl font-bold    sm:text-2xl text-[#072661]">
              Access Verified Media Contacts
            </h2>
            <p className="text-lg text-[#072661] md:text-xl font-normal opacity-80 tracking-[-0.010em] ">
              Get a list of journalists, bloggers, and influencers actively
              covering your industry.
            </p>
          </div>
          <div className="max-w-xl mb-8">
            <h2 className="max-w-lg mb-3 text-xl font-bold    sm:text-2xl text-[#072661]">
              Real-Time Media Requests
            </h2>
            <p className="text-lg text-[#072661] md:text-xl font-normal opacity-80 tracking-[-0.010em]">
              Connect with journalists seeking expert insights or innovative
              startup stories.
            </p>
          </div>

          <div className="grid space-y-3   sm:space-y-0 mb-8">
            <ul className="space-y-4 text-base text-[#072661]">
              <li className="flex items-center font-semibold ">
                <img src="/tick-blue.jpg" className="mr-2" />
                100K+ verified media profiles
              </li>
              <li className="flex items-center font-semibold ">
                <img src="/tick-blue.jpg" className="mr-2" />
                Live opportunities matched to your expertise
              </li>
              <li className="flex items-center font-semibold ">
                <img src="/tick-blue.jpg" className="mr-2" />
                Effortless outreach with tailored recommendations
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
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
