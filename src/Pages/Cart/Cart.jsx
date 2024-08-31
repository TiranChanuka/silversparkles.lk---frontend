import { useState } from "react";
import { HiOutlineArrowLongLeft } from "react-icons/hi2";
import CartCard from "./CartCard";
import { cartData } from "./CartData";
import { IoIosArrowUp } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import { Link } from "react-router-dom";
import RecentlyView from "../../Components/Recently View/RecentlyView";
import { motion } from "framer-motion";

const Cart = () => {
  // voucher show
  const [voucherShow, setVoucherShow] = useState(false);

  return (
    <div className="mt-[50px] md:px-[50px] px-[20px] mb-[100px]">
      {/* title */}
      <div className="mb-[100px]">
        <div className="flex flex-col gap-[10px] w-fit">
          <span className="text-[35px] font-[700] Outfit">Check Out</span>
          <Link to={"/shop/1"}>
            <div className="flex items-center gap-[5px] cursor-pointer text-[#0A6550] hover:text-black/90">
              <HiOutlineArrowLongLeft className="text-[30px]" />
              <span className="Outfit text-[20px] font-[400]">
                continue shopping
              </span>
            </div>
          </Link>
        </div>
        <div></div>
      </div>

      <div className="flex gap-[100px] md:flex-row flex-col">
        {/* left */}
        <div className="flex-[2]">
          <div className="flex flex-col gap-[50px]">
            {cartData.map((item) => (
              <CartCard item={item} key={item.id} />
            ))}
          </div>
        </div>

        {/* right */}
        <div className="flex-[1] Outfit">
          <div>
            {/* top */}
            <div
              className="flex items-center gap-[20px] cursor-pointer w-fit text-[18px] font-[600]"
              onClick={() => setVoucherShow(!voucherShow)}
            >
              <div className="flex items-center gap-[10px]">
                <span>Do you have a voucher?</span>
                <span className="text-gray-300">(Optional)</span>
              </div>

              <div>
                {voucherShow ? (
                  <IoIosArrowUp className="text-[25px]" />
                ) : (
                  <IoIosArrowDown className="text-[25px]" />
                )}
              </div>
            </div>

            {voucherShow && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="mt-[25px]"
              >
                <div className="flex md:justify-between flex-col md:flex-row gap-[10px] md:gap-0">
                  <input
                    type="text"
                    placeholder="Enter the code"
                    className="p-[10px] border-gray-400 border-solid border-[1px] outline-none"
                  />
                  <div className="p-[10px] px-[40px] bg-black text-white cursor-pointer hover:bg-black/90">
                    <span>Redeem</span>
                  </div>
                </div>
              </motion.div>
            )}

            {/* subtotal */}
            <div className="flex justify-between mt-[25px]">
              <div className="flex flex-col leading-5">
                <div>
                  <span className="text-[20px] font-[500]">Subtotal</span>
                </div>
                <div>
                  <span className="text-[15px] text-gray-400">shipping</span>
                </div>
              </div>
              <div className="flex flex-col leading-5">
                <div>
                  <span className="text-[20px] font-[500]">$138,00 </span>
                </div>
                <div>
                  <span className="text-[15px] text-gray-400">$89</span>
                </div>
              </div>
            </div>

            {/* total */}
            <div className="flex justify-between items-center mt-[25px]">
              <div>
                <span className="text-[20px] font-[500]">Total</span>
              </div>
              <div>
                <span className="text-[20px] font-[500]">$143,91 </span>
              </div>
            </div>

            {/* checkout Button */}
            <Link to={"/checkout"}>
              <div className="py-[10px] px-[30px]  flex items-center justify-center text-[18px] font-[500] mt-[25px] textButton">
                <span>Safe to checkout</span>
              </div>
            </Link>
          </div>
        </div>
      </div>

      <div className="mt-[100px]">
        <RecentlyView />
      </div>
    </div>
  );
};

export default Cart;
