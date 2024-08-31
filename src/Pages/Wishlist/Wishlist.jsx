import React from "react";
import { HiOutlineArrowLongLeft } from "react-icons/hi2";
import { Link } from "react-router-dom";
import { wishData } from "./WishlistData";
import WishlistCard from "./WishlistCard";
import RecentlyView from "../../Components/Recently View/RecentlyView";

const Wishlist = () => {
  return (
    <div className="mt-[50px] px-[50px] mb-[100px]">
      {/* title */}
      <div className="mb-[100px]">
        <div className="flex flex-col gap-[10px] w-fit">
          <span className="text-[35px] font-[700] Outfit">Check Out</span>
          <Link to={"/shop/1"}>
            <div className="flex items-center gap-[5px] cursor-pointer hover:text-black/90 text-[#0A6550]">
              <HiOutlineArrowLongLeft className="text-[30px]" />
              <span className="Outfit text-[20px] font-[400]">
                continue shopping
              </span>
            </div>
          </Link>
        </div>
        <div></div>
      </div>

      <div className="flex flex-col md:gap-[25px] gap-[40px] ">
        {wishData.map((item) => (
          <WishlistCard item={item} key={item.id} />
        ))}
      </div>

      <div className="mt-[100px]">
        <RecentlyView />
      </div>
    </div>
  );
};

export default Wishlist;
