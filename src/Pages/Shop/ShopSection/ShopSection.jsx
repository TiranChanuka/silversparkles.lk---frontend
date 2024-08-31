import React from "react";
import Section1 from "./Section1";
import Section2 from "./Section2";
import Section3 from "./Section3";

const ShopSection = () => {
  return (
    <div className="md:px-[50px] py-[25px] flex flex-col gap-[20px]">
      <div>
        <Section1 />
      </div>

      <div className="md:sticky top-[0px] h-fit bg-white z-[999]">
        <Section2 />
      </div>

      <div>
        <Section3 />
      </div>
    </div>
  );
};

export default ShopSection;
