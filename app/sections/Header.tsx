import "./style.css";

export const Header = () => {
  return (
    <>
      <div className="header-bg h-screen w-full -z-10 absolute"></div>
      <div className="  flex flex-col items-center justify-center px-4 pt-28 lg:pt-40 mx-auto    md:px-0">
        <div className="flex flex-col items-center  md:px-8 mb-20">
          <div className=" mb-10 md:mx-auto    md:mb-12 text-center flex flex-col items-center">
            <div>
              <p className="inline-block px-3 py-px mb-4 text-xs sm:text-sm md:text-base leading-9 font-semibold min-[500px]:tracking-wider text-[#1CA9DA] uppercase rounded-full bg-teal-accent-400">
                AI-Powered Growth Platform for Startups
              </p>
            </div>
            <h2 className=" mb-6  syne-font text-3xl min-[500px]:text-4xl sm:text-5xl md:text-6xl text-center   font-bold   text-[#072661] lg:text-7xl md:mx-auto ">
              Your Gateway to
              <br /> Capital & Coverage
            </h2>
            <p className="text-base min-[500px]:text-lg sm:text-xl md:text-2xl lg:text-3xl text-[#072661] w-5/6 sm:w-2/3 text-center font-normal">
              Match with investors, discover active grants, get featured in top
              media
            </p>
          </div>

          <div className="flex justify-between max-[450px]:gap-x-2 gap-x-10 md:gap-x-14 text-sm min-[500px]:text-base ">
            <button
              type="submit"
              className="bg-[#072661]   inline-flex items-center justify-center h-12 px-8 font-medium tracking-wide text-white transition duration-200 rounded-full shadow-md w-auto bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
            >
              Start for Free
            </button>
            <button
              type="submit"
              className="border-[#072661]   border-2 text-[#072661] inline-flex items-center justify-center h-12 px-8 font-medium tracking-wide   transition duration-200 rounded-full shadow-md w-auto bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
            >
              Learn More
            </button>
          </div>
        </div>
        <img
          src="/header-main.jpg"
          className="w-full max-w-screen-sm mx-auto rounded shadow-2xl md:w-auto lg:max-w-screen-lg"
          alt="dashboard"
        />
      </div>
    </>
  );
};
