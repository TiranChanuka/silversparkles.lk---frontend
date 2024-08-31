const NewsLetter = () => {
  return (
    <div className="Poppins bg-[#2a2a2a] pt-[50px]">
      {/* title */}
      <div className="flex flex-col justify-center items-center  text-white">
        <span className="text-lg">Join the</span>
        <span className=" uppercase text-5xl font-bold text-center">Silver Sparkles</span>
        <span className="capitalize text-2xl text-center pb-[20px]">
          Early Access, premium discounts,<br /> Exclusive Services
        </span>
      </div>
      {/* subscribe */}
      <div className="flex justify-center md:gap-[200px] gap-[20px] mt-[20px]  items-center pb-[50px] px-[5px] flex-col">
        <div className="w-[80%] md:w-[500px]">
          <form action="" className=" space-y-6">
            {/* newsletter input */}
            <div className="flex justify-center items-center gap-[20px] flex-col md:flex-row">
              <div className="border-white border-solid border-[1px]  w-[80%] md:w-[500px] flex items-center justify-between p-[10px]">
                <input
                  type="email"
                  placeholder="Your Email"
                  className="bg-transparent border-none outline-none text-white placeholder:text-white"
                />
              </div>

            </div>
            <input type="checkbox" className=" mr-2" checked />
            <label htmlFor="checkbox" className="text-white text-[18px] text-center">
              By subscribing,
              you agree to receive recurring automated
              promotional and personalized marketing text
              messages
            </label>
            <input type="submit" className="hidden" />
            {/* right */}
            <div>
              <div className=" md:flex hidden justify-center rounded-md items-center mx-[25px] md:mx-0">
                <span className="text-white text-[20px]  font-lg p-2 textButton cursor-pointer">
                  Join Silver Sparkles Team
                </span>
              </div>


              {/* mobile screen button */}
              <div className="flex md:hidden p-[15px] w-full justify-center items-center text-base textButton">
                <span>Join Silver Sparkles Team</span>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
