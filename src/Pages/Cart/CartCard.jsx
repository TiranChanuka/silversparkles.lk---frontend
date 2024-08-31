import { useState } from "react";
import { RiDeleteBin6Line } from "react-icons/ri";

const CartCard = ({ item }) => {
  // quentity
  const [quentity, setQuentity] = useState(1);

  return (
    <div className="flex md:justify-between md:flex-row flex-col gap-[20px] md:gap-0 Outfit shadow-lg md:shadow-none p-[25px] md:p-0">
      <div className="flex gap-[25px] flex-col md:flex-row">
        <div className="w-[100px] h-[130px]">
          <img
            src={item.productImg}
            alt="productImg"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="font-[600] flex flex-col">
          <div>
            <span>{item.productName}</span>
          </div>

          <div>
            <span>({item.size}mm)</span>
          </div>
        </div>
      </div>

      <div>
        <div className="flex items-center md:gap-[20px] gap-[15px] text-center">
          <div
            className="px-[15px] py-[5px] border-[#0A6550] border-solid border-2 w-fit h-fit cursor-pointer hover:bg-gray-100"
            onClick={() =>
              setQuentity(quentity === 1 ? quentity : quentity - 1)
            }
          >
            <span>-</span>
          </div>
          <div>
            <span>{quentity}</span>
          </div>
          <div
            className="px-[15px] py-[5px] border-[#0A6550] border-solid border-2 w-fit h-fit cursor-pointer hover:bg-gray-100"
            onClick={() => setQuentity(quentity + 1)}
          >
            <span>+</span>
          </div>
        </div>
      </div>

      <div>
        <span>${item.price}</span>
      </div>

      <div>
        <RiDeleteBin6Line className="text-red-500 text-[20px] cursor-pointer" />
      </div>
    </div>
  );
};

export default CartCard;
