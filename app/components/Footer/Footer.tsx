import FooterBanner from "../FooterBanner/FooterBanner";
import FooterNav from "../FooterNav/FooterNav";
import "./Footer.css";

export const Footer = () => {
  return (
    <div className="footer-bg">
      <div className="px-4 py- mx-auto   md:px-24 lg:px-8  pt-20  pb-10">
        <div className="max-w-xl sm:mx-auto lg:max-w-2xl">
          <div className="flex flex-col  sm:text-center  ">
            <div className="max-w-xl   md:mx-auto sm:text-center lg:max-w-2xl md:mb-12 flex justify-center flex-col items-center">
              <h1 className="text-center syne-font  mb-6  text-3xl font-bold tracking-tight  text-[#072661] sm:text-4xl md:mx-auto">
                Ready to Power Your Growth?
              </h1>
              <p className="text-center text-base text-[#072661]  opcaity-80 mb-6 tracking-tight w-5/6">
                Join the hundreds of startups already using AI to build
                meaningful relationships with investors and media.
              </p>

              <p className="text-center text-base text-[#072661]  opcaity-80 tracking-tight">
                Save time and money while accelerating your path to funding.
              </p>
            </div>
          </div>
        </div>
      </div>
      <FooterNav />
      <FooterBanner />
    </div>
  );
};
