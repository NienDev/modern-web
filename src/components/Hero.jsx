export const Hero = () => {
  return (
    <div className="flex flex-row">
      <div className="">
        <div className="items-center uppercase flex flex-row bg-gradient-to-b from-[#272727] to-[#11101D] rounded-xl px-4 py-2 pb-1  text-[#FFFFFF99] gap-2 mb-6">
          <img
            src="/assets/Discount.svg"
            alt="logo"
            className="bg-gradient-to-b from-[#272727] to-[#11101D] rounded-xl"
          />
          <div>
            <span className="text-white font-medium">20%</span> discount for{" "}
            <span className="text-white font-medium">1 month</span> account
          </div>
        </div>
        <div className="relative">
          <h1 className="text-7xl font-semibold mb-12">
            The Next{" "}
            <span className=" bg-clip-text text-transparent bg-gradient-to-r from-[#33BBCF] via-[#9DEDF0] to-[#DEF9FA] rounded-xl">
              Generation
            </span>{" "}
            Payment Method.
          </h1>
          <div className="border-2 box-content p-8 rounded-[50%] text-center absolute top-0 right-0 text-[18px] text-[#9DEDF0] border-[#9DEDF0]">
            <div className="flex flex-row text-center justify-center">
              <div className="">Get </div>
              <img className="w-6 h-6" src="/assets/arrow-up.svg" alt="icon" />
            </div>
            <div>Started</div>
          </div>
        </div>

        <p className="text-[#FFFFFFB2] text-[18px] w-[440px]">
          Our team of experts uses a methodology to identify the credit cards
          most likely to fit your needs. We examine annual percentage rates,
          annual fees.
        </p>
      </div>
      <img
        src="/assets/robot.png"
        alt="hero-image"
        className="w-[600px]  left-24 relative"
      />
    </div>
  );
};
