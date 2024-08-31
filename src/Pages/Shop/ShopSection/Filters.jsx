import React, { useContext, useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { motion } from "framer-motion";
import { ProductFilterContext } from "../../../Contexts/ProductFilterContext";



const Filters = () => {
  // price expand
  const [priceEx, setPriceEx] = useState(false);

  // product style expand
  const [prStyle, setPrStyle] = useState(false);

  //in stock switch
  const [stockSwitch, setStockSwitch] = useState(false);

  // iced product expand
  const [icedEx, setIcedEx] = useState(false);

  // product width expand
  const [prWidthEx, setPrWidthEx] = useState(false);

  const {setCategoryFilter,setColor,setPriceMax,setPriceMin} = useContext(ProductFilterContext);

  const handlePriceMin = (e) => {
    setPriceMin(e.target.value);
  }

  const handlePriceMax = (e) => {
    setPriceMax(e.target.value);
  }



  return (
    <div className="flex flex-col gap-[20px]">
      {/* 'gold', 'silver', 'rose gold', 'white gold' */}
      {/* colour filter */}
      <div className="flex flex-col gap-[10px] border-b-[1px] border-b-black border-b-[solid] pb-[20px] w-fit">
        {/* title */}
        <span className="Outfit text-[25px] font-[500]">Color</span>

        {/* filter Items */}
        <div className="Poppins flex items-center gap-[10px]">
          {/* item 1 */}
          <div className="flex items-center justify-center p-[5px] rounded-full px-[20px] bg-[#D7CFCF] hover:bg-[#beb7b7] cursor-pointer text-[15px]"
            onClick={() => {setColor('white')}}          >
            <span>White</span>
          </div>
          {/* item 2 */}
          <div className="flex items-center justify-center p-[5px] rounded-full px-[20px] bg-[#926C15] hover:bg-[#795911] cursor-pointer text-[15px]"
           onClick={() => {setColor('yellow')}}
          >
            <span>Yellow</span>
          </div>
          {/* item 3 */}
          <div className="flex items-center justify-center p-[5px] rounded-full px-[20px] bg-[#EC9FD2] hover:bg-[#d687bc]  cursor-pointer text-[15px]"
           onClick={() => {setColor('rose gold')}}
          >
            <span>Rose Gold</span>
          </div>

          {/* item 4 */}
          <div className="flex items-center justify-center p-[5px] rounded-full px-[20px] bg-[#D7CFCF] hover:bg-[#beb7b7]  cursor-pointer text-[15px]"
           onClick={() => {setColor('white gold')}}
          >
            <span>White Gold</span>
          </div>
        </div>
      </div>

      {/* Price filter */}
      <div className="flex flex-col price Poppins gap-[5px] border-b-[1px] border-black border-solid pb-[20px]">
        {/* title */}
        <div className="flex items-center justify-between">
          <span className="Outfit text-[25px] font-[500]">Price</span>

          {/* expand btn */}
          {priceEx ? (
            <div className="cursor-pointer" onClick={() => setPriceEx(false)}>
              <KeyboardArrowUpIcon style={{ fontSize: 40 }} />
            </div>
          ) : (
            <div className="cursor-pointer" onClick={() => setPriceEx(true)}>
              <KeyboardArrowDownIcon style={{ fontSize: 40 }} />
            </div>
          )}
        </div>
        {/* filter items */}
        {priceEx && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex   items-center justify-between "
          >
            {/* from */}
            <div className="flex flex-col">
              <label htmlFor="from" className="text-[13px] text-gray-500">
                From
              </label>
              <div className="flex border-gray-500 p-[2px] w-[100px] border-[1px] border-solid rounded-sm">
                <span>$</span>
                <input
                  type="number"
                  id="from"
                  placeholder="0"
                  className="outline-none w-[100%]"
                  onChange={handlePriceMin}
                />
              </div>
            </div>

            {/* to */}
            <div>
              <label htmlFor="to" className="text-[13px] text-gray-500 ">
                To
              </label>
              <div className="flex border-gray-500 p-[2px] rounded-sm w-[100px] border-[1px] border-solid">
                <span>$</span>
                <input
                  type="number"
                  id="to"
                  placeholder="0"
                  className="outline-none w-[100%]"
                  onChange={handlePriceMax}
                />
              </div>
            </div>
          </motion.div>
        )}
      </div>

      {/*product style */}
      <div className="flex flex-col gap-[10px] border-black border-solid border-b-[1px] pb-[20px]">
        <div className="flex justify-between items-center">
          <span className="Outfit text-[25px] font-[500]">Product Style</span>
          {prStyle ? (
            <div className="cursor-pointer" onClick={() => setPrStyle(false)}>
              <KeyboardArrowUpIcon style={{ fontSize: 40 }} />
            </div>
          ) : (
            <div className="cursor-pointer" onClick={() => setPrStyle(true)}>
              <KeyboardArrowDownIcon style={{ fontSize: 40 }} />
            </div>
          )}
        </div>

        {/* filter items */}
        {prStyle && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            className="Poppins flex flex-col gap-[10px]"
          >
            {/* item 1 */}
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-[5px]">
                <input type="radio" name="ps" id="cuban" />
                <label className="cursor-pointer" htmlFor="cuban">
                  Cuban
                </label>
              </div>

              {/* avialable products */}
              <span>(10)</span>
            </div>

            {/* item 2 */}
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-[5px]">
                <input type="radio" name="ps" id="tennis" />
                <label className="cursor-pointer" htmlFor="tennis">
                  Tennis
                </label>
              </div>

              {/* avialable products */}
              <span>(10)</span>
            </div>

            {/* item 3 */}
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-[5px]">
                <input type="radio" name="ps" id="figaro" />
                <label className="cursor-pointer" htmlFor="figaro">
                  Figaro
                </label>
              </div>

              {/* avialable products */}
              <span>(10)</span>
            </div>

            {/* item 4 */}
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-[5px]">
                <input type="radio" name="ps" id="rope" />
                <label className="cursor-pointer" htmlFor="rope">
                  Rope
                </label>
              </div>

              {/* avialable products */}
              <span>(10)</span>
            </div>

            {/* item 5 */}
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-[5px]">
                <input type="radio" name="ps" id="palm" />
                <label className="cursor-pointer" htmlFor="palm">
                  Palm
                </label>
              </div>

              {/* avialable products */}
              <span>(10)</span>
            </div>

            {/* item 6 */}
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-[5px]">
                <input type="radio" name="ps" id="our" />
                <label className="cursor-pointer" htmlFor="our">
                  Our Exclusive
                </label>
              </div>

              {/* avialable products */}
              <span>(10)</span>
            </div>
          </motion.div>
        )}
      </div>

      {/* In stock */}
      <div className="flex items-center justify-between border-black border-solid border-b-[1px] pb-[20px]">
        {/* title */}
        <span className="Outfit text-[25px] font-[500]">In Stock</span>

        <div className="stockSwitch">
          <div className="check">
            <input type="checkbox" id="check" />
            <label htmlFor="check"></label>
          </div>
        </div>
      </div>

      {/* Iced product */}
      <div className="flex flex-col gap-[10px] border-black border-solid border-b-[1px] pb-[20px]">
        {/* title */}
        <div className="flex items-center justify-between">
          <span className="Outfit text-[25px] font-[500]">Iced Product</span>

          {icedEx ? (
            <div className="cursor-pointer" onClick={() => setIcedEx(false)}>
              <KeyboardArrowUpIcon style={{ fontSize: 40 }} />
            </div>
          ) : (
            <div className="cursor-pointer" onClick={() => setIcedEx(true)}>
              <KeyboardArrowDownIcon style={{ fontSize: 40 }} />
            </div>
          )}
        </div>

        {/* items */}
        {icedEx && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col gap-[10px]"
          >
            {/* item 1 */}
            <div className="Poppins flex justify-between">
              <div className=" flex items-center gap-[5px]">
                <input type="radio" id="yes" name="iced" />
                <label htmlFor="yes" className="cursor-pointer">
                  Yes
                </label>
              </div>

              {/* available */}
              <span>(10)</span>
            </div>

            {/* item 2 */}
            <div className="Poppins flex justify-between">
              <div className=" flex items-center gap-[5px]">
                <input type="radio" id="no" name="iced" />
                <label htmlFor="no" className="cursor-pointer">
                  No
                </label>
              </div>

              {/* available */}
              <span>(10)</span>
            </div>
          </motion.div>
        )}
      </div>

      {/* product width */}
      <div className="flex flex-col gap-[10px]">
        {/* title */}
        <div className="flex items-center justify-between">
          <span className="Outfit text-[25px] font-[500]">Product Width</span>

          {prWidthEx ? (
            <div className="cursor-pointer" onClick={() => setPrWidthEx(false)}>
              <KeyboardArrowUpIcon style={{ fontSize: 40 }} />
            </div>
          ) : (
            <div className="cursor-pointer" onClick={() => setPrWidthEx(true)}>
              <KeyboardArrowDownIcon style={{ fontSize: 40 }} />
            </div>
          )}
        </div>

        {/* items */}
        {prWidthEx && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            className="Poppins flex flex-col gap-[10px]"
          >
            {/* item 1 */}
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-[5px]">
                <input type="radio" id="4" name="width" />
                <label htmlFor="4" className="cursor-pointer">{`< 4mm`}</label>
              </div>

              <span>(10)</span>
            </div>

            {/* item 2 */}
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-[5px]">
                <input type="radio" id="5" name="width" />
                <label
                  htmlFor="5"
                  className="cursor-pointer"
                >{`5mm - 9mm`}</label>
              </div>

              <span>(10)</span>
            </div>

            {/* item 3 */}

            <div className="flex justify-between items-center">
              <div className="flex items-center gap-[5px]">
                <input type="radio" id="10" name="width" />
                <label
                  htmlFor="10"
                  className="cursor-pointer"
                >{`> 10mm`}</label>
              </div>

              <span>(10)</span>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Filters;
