import React, { useContext, useState } from "react";
import { ProductFilterContext } from "../../../Contexts/ProductFilterContext";

const Section2 = () => {
  // gender filter state
  const [genderFilter, setGenderFilter] = useState(true);
  const {setCategoryFilter,setGender} = useContext(ProductFilterContext);

  return (
    <div>
      <div className="flex md:justify-between md:flex-row flex-col p-[20px] md:p-[10px] gap-[20px] ">
        {/* gender filter */}
        <div className=" border-[1px] z-[10000] border-black w-fit rounded-2xl p-[2px] overflow-hidden flex justify-center items-center ">
          <div className="flex items-center   ">
            {/* men */}
            <div
              className={`${
                genderFilter ? "bg-[#333]" : "bg-white"
              } rounded-2xl cursor-pointer ${
                genderFilter ? " hover:bg-black" : "hover:bg-gray-200"
              } w-[80px] text-center ${
                genderFilter ? "text-white" : "text-black"
              } p-[5px]`}
              onClick={() =>{ setGenderFilter(true);setGender('men');}}
            >
              Men
            </div>

            {/* women */}
            <div
              className={`${
                genderFilter ? "bg-white" : "bg-[#333]"
              } rounded-2xl cursor-pointer ${
                genderFilter ? " hover:bg-gray-200" : "hover:bg-black"
              } w-[80px] text-center ${
                genderFilter ? "text-black" : "text-white"
              } p-[5px]`}
              onClick={() => {setGenderFilter(false);setGender('women')}}
            >
              Women
            </div>
          </div>
        </div>

        {/* category filter */}
        <div>
          <div className="Outfit flex md:gap-[50px] gap-[25px] flex-wrap text-[18px] text-gray-500">
            {/* chains */}
            <div className="hover:text-black cursor-pointer" onClick={() => {setCategoryFilter('chains');setGender('')}}>Chains</div>

            {/* pendants */}
            <div className="hover:text-black cursor-pointer" onClick={() => {setCategoryFilter('pendants');setGender('')}}>Pendants</div>

            {/* earrings */}
            <div className="hover:text-black cursor-pointer" onClick={() => {setCategoryFilter('earrings');setGender('')}}>Earrings</div>

            {/* rings */}
            <div className="hover:text-black cursor-pointer" onClick={() => {setCategoryFilter('rings');setGender('')}}>Rings</div>

            {/* bracelets */}
            <div className="hover:text-black cursor-pointer" onClick={() => {setCategoryFilter('bracelets');setGender('')}}>Bracelets</div>

            {/* anklets */}
            <div className="hover:text-black cursor-pointer" onClick={() =>{ setCategoryFilter('anklets');setGender('')}}>Anklets</div>

            {/* bundles */}
            <div className="hover:text-black cursor-pointer" onClick={() => {setCategoryFilter('bundles');setGender('')}}>Bundles</div>

            {/* watches */}
            <div className="hover:text-black cursor-pointer" onClick={() =>{ setCategoryFilter('watches');setGender('')}}>Watches</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section2;
