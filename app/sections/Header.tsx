import "./style.css";

export const Header = () => {
  return (
    <>
      <div className="header-bg h-screen w-screen -z-10 absolute"></div>
      <div className="  flex flex-col items-center justify-center px-4 pt-40 mx-auto    md:px-0">
        <div className="flex flex-col items-center  md:px-8 mb-20">
          <div className=" mb-10 md:mx-auto    md:mb-12 text-center flex flex-col items-center">
            <div>
              <p className="inline-block px-3 py-px mb-4 text-base leading-9 font-semibold tracking-wider text-[#1CA9DA] uppercase rounded-full bg-teal-accent-400">
                AI-Powered Growth Platform for Startups
              </p>
            </div>
            <h2 className=" mb-6  syne-font text-5xl text-center leading-loose font-bold   text-[#072661] sm:text-7xl md:mx-auto ">
              Your Gateway to
              <br /> Capital & Coverage
            </h2>
            <p className="text-3xl text-[#072661]  w-2/3 text-center font-normal">
              Match with investors, discover active grants, get featured in top
              media
            </p>
          </div>

          <div className="flex justify-between w-2/5">
            <button
              type="submit"
              className="bg-[#072661] inline-flex items-center justify-center w-full h-12 px-8 font-medium tracking-wide text-white transition duration-200 rounded-full shadow-md md:w-auto bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
            >
              Start for Free
            </button>
            <button
              type="submit"
              className="border-[#072661] border-2 text-[#072661] inline-flex items-center justify-center w-full h-12 px-8 font-medium tracking-wide   transition duration-200 rounded-full shadow-md md:w-auto bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
            >
              Learn More
            </button>
          </div>
        </div>
        <img
          src="https://s3-alpha-sig.figma.com/img/5ca2/fb21/89a317359cd6369222bbfc5a22d650dc?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=gAjEf9ExQJkNNFfgqPhOUDXjE6rUqW3iGJ255kSryOc-lpivnxGVHxuW926-i6CWDD85PUDBrcFfSzjVRGuXNEeYQ5VqRkjM7aWWCvQsBLDbxlXmOwQtotnIYPQd57kdy6C-SlR~x4Xuh6jfzSsDQj1oPc7EPW6mpI6D7MuBKd8sOZWaT8mA-p0WMYkJrNSEWVYoh9Sda8M9yVySpA~GdUBMYJcBUoTq4GIQvScxAxA0luTrRySJEfNaF4an-BlWnsFcUqdN-zzA4KBXK8HuCt4K7qaqBR6tbL~WkiEeh84-u6G3Xeia2YDNPXQOi21AkJ~ZLPhsmln4pnDoJAgSFg__"
          className="w-full max-w-screen-sm mx-auto rounded shadow-2xl md:w-auto lg:max-w-screen-lg"
          alt=""
        />
      </div>
    </>
  );
};
