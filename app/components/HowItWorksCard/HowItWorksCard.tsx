const HowItWorksCard = ({
  title,
  text1,
  text2,
  text3,
}: {
  title: string;
  text1: string;
  text2: string;
  text3?: string;
}) => {
  return (
    <div className="text-white   border-white border-2  backdrop-blur-2xl text-sm 2xl:text-base   rounded-xl p-8 w-full md:w-5/6 2xl:w-3/4  mx-auto">
      <h1 className=" text-xl font-semibold mb-4 ">{title}</h1>
      <p className="opacity-70 mb-3 sm:mb-2 ">{text1}</p>
      <p className="opacity-70 mb-3 sm:mb-2 ">{text2}</p>
      {text3 && <p className="opacity-70 mb-3 sm:mb-2 ">{text3}</p>}
    </div>
  );
};

export default HowItWorksCard;
