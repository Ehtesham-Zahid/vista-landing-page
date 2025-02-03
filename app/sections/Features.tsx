export const Features = () => {
  return (
    <div
      id="features"
      className="px-4 py-16 mx-auto  w-11/12 sm:w-5/6 md:w-11/12 2xl:max-w-screen-xl     lg:py-20"
    >
      <div className="max-w-xl mb-16 sm:mx-auto  ">
        <h2 className="syne-font text-3xl font-bold leading-tight tracking-tight text-[#072661] sm:text-4xl text-center mb-5">
          The IylaVista Way
        </h2>
        <p className="text-center text-[#072661] inter-font font-normal text-base sm:text-[20px] leading-7">
          AI-driven connections that save you time, helping you focus on what
          truly matters—your product and customers.
        </p>
      </div>
      <div className="grid gap-12 sm:gap-16 md:gap-20 lg:gap-24 row-gap-8 md:grid-cols-2 lg:grid-cols-3 inter-font ">
        <div className="flex">
          <div>
            <div className="  w-10 h-10 mb-6 rounded-full ">
              <img src="/feature-1.jpg" className="" alt="feature 1" />
            </div>
            <h6 className="mb-3 font-bold  text-xl  min-[500px]:text-2xl text-[#072661]">
              Centralized Resource Hub
            </h6>
            <p className="text-base min-[500px]:text-[18px] leading-7 text-[#072661]">
              One reliable source for all your investors, grants, and media
              contacts in an easy-to-access platform.
            </p>
          </div>
        </div>
        <div className="flex">
          <div>
            <div className="  w-10 h-10 mb-6 rounded-full ">
              <img src="/feature-2.jpg" className="" alt="feature 2" />
            </div>
            <h6 className="mb-3 font-bold   text-xl  min-[500px]:text-2xl text-[#072661]">
              Organized Connection Lists
            </h6>
            <p className="text-base min-[500px]:text-[18px] leading-7 text-[#072661]">
              Enriched and actionable lists that keep your connections organized
              and ready for outreach.
            </p>
          </div>
        </div>
        <div className="flex">
          <div>
            <div className="  w-10 h-10 mb-6 rounded-full ">
              <img
                src="https://s3-alpha-sig.figma.com/img/b22e/49b0/93d0cccf6d2ea2312aa4958ea9e54965?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mqXLt~rNHNlZtu5nVFE9~WwQx4VeXuS-XUIvLpRdvMF6sOltp8fwkYYyQGRhWEKiY7Yy2hfTDhzPwHmyvfimvWrAyxiUyrsG2sQEh1Bzp9SR0AOHaEzDcNIhmgQtQgU5QtfdO1UvLuh6geJEYipsoW7XmtVyIO3lIeWSAw0DePQztmfEwhX~0d4JbongXCcWQhyI6UCMVDzX5o4b4LqD~Azm~ZIi9-V29Eqk~wHa0KI3of0Oi7Ue7s1iVt3DwAqnMj5BA6AUzK75T767mdR-VmCNJejIfA0G8COH98xhNCtMdyRAk9~60J5f-DkCOpIj9ge7kcxwyIAEIH7xf8q06A__"
                className=""
              />
            </div>
            <h6 className="mb-3 font-bold   text-xl  min-[500px]:text-2xl text-[#072661]">
              AI-Powered Matching
            </h6>
            <p className="text-base min-[500px]:text-[18px] leading-7 text-[#072661]">
              Quick, relevant matches powered by AI to save you time and boost
              accuracy.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
