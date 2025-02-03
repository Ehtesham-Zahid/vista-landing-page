import HowItWorksCard from "../components/HowItWorksCard/HowItWorksCard";
import "./style.css";

export const HowItWorks = () => {
  return (
    <div
      id="how"
      className="text-white  services-bg px-4 py-16 mx-auto  w-11/12 sm:w-5/6 lg:px-8 lg:py-20 rounded-2xl "
    >
      <div className="max-w-xl mb-10 md:mx-auto text-center lg:max-w-2xl md:mb-20">
        <h2 className="syne-font max-w-lg mb-6 font-sans text-3xl font-bold leading-none     sm:text-4xl md:mx-auto">
          Transform Connections Into Opportunities.
        </h2>
        <p className="opacity-70 text-sm sm:text-base">
          With IylaVista, you’re not just accessing a database—you’re unleashing
          a smart, actionable growth engine that puts the right connections at
          your fingertips.
        </p>
      </div>
      <HowItWorksCard
        title={"How It Works"}
        text1={
          " 1. Tell us about your startup’s vision, sector, and goals in a quick onboarding step."
        }
        text2={
          " 2. Let our AI analyze your needs and connect you with the top matches across media and capital."
        }
        text3={
          " 3. Start engaging with curated connections while IylaVista manages the follow-ups and tracking."
        }
      />
      <div className="mt-12"></div>
      <HowItWorksCard
        title={"Seamless Media and Capital Connections"}
        text1={
          "1. Media: Journalists, influencers, podcasters, and editors tailored to your industry."
        }
        text2={
          "2. Capital: Angel investors, VCs, accelerators, and corporate venture funds aligned with your stage and goals."
        }
      />
    </div>
  );
};
