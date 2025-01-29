import "./style.css";

export const Services = () => {
  return (
    <div className="text-white  services-bg px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-28 rounded-2xl ">
      <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-20">
        <h2 className="syne-font max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight   sm:text-4xl md:mx-auto">
          Amazing services to make your business easier
        </h2>
      </div>
      <div className="grid max-w-[800px] gap-20  mx-auto lg:grid-cols-2">
        <div className="flex flex-col max-w-md sm:mx-auto sm:flex-row">
          <div className="mr-6">
            <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full ">
              <img src="/service-1.jpg" />
            </div>
          </div>
          <div>
            <h6 className="mb-3 text-2xl font-semibold leading-5">
              Investor Matching.
            </h6>
            <p className="mb-3 text-base font-normal opacity-70">
              Find the right investors aligned with your industry, stage, and
              growth goals in minute.
            </p>
          </div>
        </div>
        <div className="flex flex-col max-w-md sm:mx-auto sm:flex-row">
          <div className="mr-6">
            <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full ">
              <img src="/service-2.jpg" />
            </div>
          </div>
          <div>
            <h6 className="mb-3 text-2xl font-semibold leading-5">
              Grant Discovery
            </h6>
            <p className="mb-3 text-base font-normal opacity-70">
              Unlock opportunities with a real-time grant database tailored to
              your startup&apos;s eligibility.
            </p>
          </div>
        </div>{" "}
        <div className="flex flex-col max-w-md sm:mx-auto sm:flex-row">
          <div className="mr-6">
            <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full ">
              <img src="/service-3.jpg" />
            </div>
          </div>
          <div>
            <h6 className="mb-3 text-2xl font-semibold leading-5">
              Media Opportunities
            </h6>
            <p className="mb-3 text-base font-normal opacity-70">
              Stay ahead with real-time updates on journalists and outlets
              actively seeking stories in your industry.
            </p>
          </div>
        </div>
        <div className="flex flex-col max-w-md sm:mx-auto sm:flex-row">
          <div className="mr-6">
            <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full ">
              <img src="/service-4.jpg" />
            </div>
          </div>
          <div>
            <h6 className="mb-3 text-2xl font-semibold leading-5">
              Streamlined Outreach
            </h6>
            <p className="mb-3 text-base font-normal opacity-70">
              Simplify your workflow with an intuitive CRM that tracks,
              automates, and optimizes your follow-ups.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
