import { useState } from "react";
import { HiOutlineArrowLongLeft } from "react-icons/hi2";
import ReactFlagsSelect from "react-flags-select";
import { CiCircleInfo } from "react-icons/ci";
import Paypal from "../../assets/paypal.png";
import PaypalPlus from "../../assets/paypalplus.png";
import Invest from "../../assets/invest.png";
import CheckoutCard from "./CheckoutCard";
import { checkData } from "./CheckoutData";
import RecentlyView from "../../Components/Recently View/RecentlyView";
import { Link } from "react-router-dom";
const Checkout = () => {
  // gender selector
  const [selectedGen, setSelectdGen] = useState(0);

  //   country selector
  const [selected, setSelected] = useState("");

  return (
    <div className="mt-[50px] md:px-[50px] px-[25px] mb-[100px]">
      {/* title */}
      <div className="mb-[100px]">
        <div className="flex flex-col gap-[10px] w-fit">
          <span className="text-[35px] font-[700] Outfit">Check Out</span>
          <Link to={"/shop/1"}>
            <div className="flex items-center gap-[5px] cursor-pointer hover:text-black/90">
              <HiOutlineArrowLongLeft className="text-[30px]" />
              <span className="Outfit text-[20px] font-[400] text-[#0a6550]">
                continue shopping
              </span>
            </div>
          </Link>
        </div>
        <div></div>
      </div>

      <div className="flex gap-[50px] flex-col md:flex-row">
        {/* left  */}
        <div className="flex-[2] flex gap-[50px] flex-col md:flex-row">
          {/* left in left */}
          <div className="flex-[1]">
            {/* form */}
            <div>
              {/* gender button */}
              <div>
                <div className="border-[1px] rounded-md overflow-hidden border-solid border-black flex w-fit">
                  <div
                    className={`py-[10px] px-[20px] ${selectedGen === 0 ? "bg-black" : "bg-white"
                      } flex items-center justify-center ${selectedGen === 0
                        ? "hover:bg-black/90"
                        : "hover:bg-gray-100"
                      } ${selectedGen === 0 ? "text-white" : "text-black"
                      } cursor-pointer`}
                    onClick={() => setSelectdGen(0)}
                  >
                    <span>Mrs.</span>
                  </div>
                  <div
                    className={`py-[10px] px-[20px]  flex items-center justify-center  text-black cursor-pointer ${selectedGen === 1 ? "bg-black" : "bg-white"
                      } ${selectedGen === 1
                        ? "hover:bg-black/90"
                        : "hover:bg-gray-100"
                      } ${selectedGen === 1 ? "text-white" : "text-black"}`}
                    onClick={() => setSelectdGen(1)}
                  >
                    <span>Mr.</span>
                  </div>
                </div>
              </div>

              {/* form items */}
              <div className="mt-[25px] flex flex-col gap-[25px] Outfit">
                {/* first name */}
                <div>
                  <input
                    type="text"
                    placeholder="First name*"
                    className="p-[10px] border-gray-400/60 border-solid border-[1px] outline-none w-[100%] rounded-md"
                  />
                </div>

                {/* Last name */}
                <div>
                  <input
                    type="text"
                    placeholder="Last name*"
                    className="p-[10px] border-gray-400/60 border-solid border-[1px] outline-none w-[100%] rounded-md"
                  />
                </div>

                {/* email */}
                <div>
                  <input
                    type="email"
                    placeholder="E-mail"
                    className="p-[10px] border-gray-400/60 border-solid border-[1px] outline-none w-[100%] rounded-md"
                  />
                </div>

                {/* street | house */}
                <div className="flex gap-[10px]">
                  {/* street */}
                  <div className="flex-[2]">
                    <input
                      type="text"
                      placeholder="Street*"
                      className="p-[10px] border-gray-400/60 border-solid border-[1px] outline-none w-[100%] rounded-md"
                    />
                  </div>
                  {/* house */}
                  <div className="flex-[1]">
                    <input
                      type="text"
                      placeholder="House*"
                      className="p-[10px] border-gray-400/60 border-solid border-[1px] outline-none w-[100%] rounded-md"
                    />
                  </div>
                </div>

                {/* postcode | location */}
                <div className="flex gap-[10px]">
                  {/* street */}
                  <div className="flex-[1]">
                    <input
                      type="text"
                      placeholder="PostCode*"
                      className="p-[10px] border-gray-400/60 border-solid border-[1px] outline-none w-[100%] rounded-md"
                    />
                  </div>
                  {/* house */}
                  <div className="flex-[2]">
                    <input
                      type="text"
                      placeholder="Location*"
                      className="p-[10px] border-gray-400/60 border-solid border-[1px] outline-none w-[100%] rounded-md"
                    />
                  </div>
                </div>

                {/* Select Country */}
                <div>
                  <ReactFlagsSelect
                    selected={selected}
                    onSelect={(code) => setSelected(code)}
                  />
                </div>

                {/* phone number */}
                <div>
                  <input
                    type="text"
                    placeholder="Phone Number"
                    className="p-[10px] border-gray-400/60 border-solid border-[1px] outline-none w-[100%] rounded-md"
                  />
                </div>
              </div>

              {/* form items 2 */}
              <div className="mt-[50px] Outfit flex flex-col gap-[25px]">
                {/* create a customer account */}
                <div className="flex gap-[10px] items-start">
                  <div>
                    <input
                      type="checkbox"
                      className="w-[17px] h-[17px] "
                      id="create"
                    />
                  </div>
                  <div className="flex flex-col gap-[5px]">
                    <div>
                      <label htmlFor="create">
                        <span className="text-[17px] font-[500]">
                          Create a customer account now and benefit from many
                          advantages.
                        </span>
                      </label>
                    </div>
                    <div className="flex items-center gap-[5px] text-gray-500">
                      <div>
                        <CiCircleInfo className=" text-[20px]" />
                      </div>
                      <div>
                        <span className="text-[13px]">
                          The password will be sent to you by email
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* shipping defferent */}
                <div>
                  <div className="flex gap-[5px]">
                    <input
                      type="checkbox"
                      className="w-[17px] h-[17px] "
                      id="dif"
                    />
                    <div>
                      <label htmlFor="dif">
                        <span className="text-[17px] font-[500]">
                          Shipping Address is Different
                        </span>
                      </label>
                    </div>
                  </div>

                  {/* form */}
                  <div className="flex flex-col gap-[25px] mt-[25px]">
                    {/* first name */}
                    <div>
                      <input
                        type="text"
                        placeholder="First name*"
                        className="p-[10px] border-gray-400/60 border-solid border-[1px] outline-none w-[100%] rounded-md"
                      />
                    </div>

                    {/* Last name */}
                    <div>
                      <input
                        type="text"
                        placeholder="Last name*"
                        className="p-[10px] border-gray-400/60 border-solid border-[1px] outline-none w-[100%] rounded-md"
                      />
                    </div>

                    {/* street | house */}
                    <div className="flex gap-[10px]">
                      {/* street */}
                      <div className="flex-[2]">
                        <input
                          type="text"
                          placeholder="Street*"
                          className="p-[10px] border-gray-400/60 border-solid border-[1px] outline-none w-[100%] rounded-md"
                        />
                      </div>
                      {/* house */}
                      <div className="flex-[1]">
                        <input
                          type="text"
                          placeholder="House*"
                          className="p-[10px] border-gray-400/60 border-solid border-[1px] outline-none w-[100%] rounded-md"
                        />
                      </div>
                    </div>

                    {/* postcode | location */}
                    <div className="flex gap-[10px]">
                      {/* street */}
                      <div className="flex-[1]">
                        <input
                          type="text"
                          placeholder="PostCode*"
                          className="p-[10px] border-gray-400/60 border-solid border-[1px] outline-none w-[100%] rounded-md"
                        />
                      </div>
                      {/* house */}
                      <div className="flex-[2]">
                        <input
                          type="text"
                          placeholder="Location*"
                          className="p-[10px] border-gray-400/60 border-solid border-[1px] outline-none w-[100%] rounded-md"
                        />
                      </div>
                    </div>

                    {/* Select Country */}
                    <div>
                      <ReactFlagsSelect
                        selected={selected}
                        onSelect={(code) => setSelected(code)}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* right in left */}
          <div className="flex-[1] Outfit flex flex-col gap-[25px]">
            {/* paypal */}
            <div className="flex items-center gap-[10px] cursor-pointer hover:bg-gray-200 p-[10px]">
              <div className="border-black/60 border-solid border-[1px] w-[80px] p-[5px] flex justify-center items-center">
                <img src={Paypal} alt="paypal" className="w-fit h-fit" />
              </div>
              <span className="text-[20px]">Pay Pal</span>
            </div>

            {/* paypal plus */}
            <div className="flex items-center gap-[10px] cursor-pointer hover:bg-gray-200 p-[10px]">
              <div className="border-black/60 border-solid border-[1px] w-[80px] p-[5px] flex justify-center items-center">
                <img src={PaypalPlus} alt="paypal" className="w-fit h-fit" />
              </div>
              <span className="text-[20px]">Pay Pal Plus</span>
            </div>

            {/* Investment bank */}
            <div className="flex items-center gap-[10px] cursor-pointer hover:bg-gray-200 p-[10px]">
              <div className="border-black/60 w-[80px] p-[5px] flex justify-center items-center border-solid border-[1px]">
                <img src={Invest} alt="paypal" className="w-fit h-fit" />
              </div>
              <span className="text-[20px]">Investment Bank</span>
            </div>

            {/* form */}
            <div className="flex flex-col gap-[25px]">
              {/* Credit card Number */}
              <div>
                <input
                  type="text"
                  placeholder="Credit card number*"
                  className="p-[10px] border-gray-400/60 border-solid border-[1px] outline-none w-[100%] rounded-md"
                />
              </div>

              {/* Expiry Date | CVC/CVV */}
              <div className="flex gap-[10px]">
                {/* expire */}
                <div className="flex-[2]">
                  <input
                    type="text"
                    placeholder="Expiry Date*"
                    className="p-[10px] border-gray-400/60 border-solid border-[1px] outline-none w-[100%] rounded-md"
                  />
                </div>
                {/* cvc/cvv */}
                <div className="flex-[1]">
                  <input
                    type="text"
                    placeholder="CVC / CVV*"
                    className="p-[10px] border-gray-400/60 border-solid border-[1px] outline-none w-[100%] rounded-md"
                  />
                </div>
              </div>

              {/* name of cardholder */}
              <div>
                <input
                  type="text"
                  placeholder="Name of Cardholder*"
                  className="p-[10px] border-gray-400/60 border-solid border-[1px] outline-none w-[100%] rounded-md"
                />
              </div>
            </div>
          </div>
        </div>
        {/* right */}
        <div className="flex-[1]">
          {/* article */}
          <div>
            {/* top */}
            <div className="flex items-center justify-between Outfit text-[20px]">
              <div>
                <span>Article</span>
              </div>
              <div>
                <span>Total </span>
              </div>
            </div>

            <div className="mt-[25px] flex flex-col gap-[20px]">
              {checkData.map((item) => (
                <CheckoutCard item={item} key={item.id} />
              ))}
            </div>
          </div>

          {/* do you have a voucher */}
          <div className="flex flex-col Outfit mt-[50px] gap-[20px]">
            {/* top */}
            <div className="flex gap-[10px] font-[600]">
              <div>
                <span>Do you have a voucher?</span>
              </div>
              <div>
                <span className="text-gray-400">(Optional)</span>
              </div>
            </div>

            {/* promo code */}
            <div className="flex items-center flex-col md:flex-row md:justify-between gap-[10px] md:gap-0">
              <input
                type="text"
                placeholder="Enter the code"
                className="p-[8px] border-gray-300 w-full md:w-fit border-solid border-[1px] outline-none"
              />
              <button className="px-[40px] w-full py-[8px]  md:w-fit  cursor-pointer textButton">
                Redeem
              </button>
            </div>
          </div>

          {/* subtotal */}
          <div className="mt-[50px] flex flex-col gap-[10px]">
            {/* sub */}
            <div className="flex items-center justify-between Outfit font-[600]">
              <div>
                <span>Subtotal</span>
              </div>
              <div>
                <span>$228.00</span>
              </div>
            </div>

            {/* shippment */}
            <div className="flex items-center justify-between text-gray-400 Outfit font-[600]">
              <div>
                <span>Shipment</span>
              </div>
              <div>
                <span>103.50</span>
              </div>
            </div>

            {/* delivery time */}
            <div className="flex items-center text-gray-400 justify-between Outfit font-[600]">
              <div>
                <span>Delivery time 2 - 4 working days</span>
              </div>
            </div>
          </div>

          {/* checkout button */}
          <div className="Outfit mt-[50px]">
            {/* button */}
            <div>
              <div className="flex items-center justify-center p-2 textButton cursor-pointer">
                <span className="text-[18px] font-[500]">Checkout</span>
              </div>
            </div>

            <div className="flex gap-[10px] items-start mt-[25px]">
              <input type="checkbox" className="w-[20px] h-[20px]" id="agree" />
              <div>
                <label htmlFor="agree">
                  <span className="text-gray-400">
                    T&C is simply dummy text of the printing and typesetting
                    industry
                  </span>
                </label>
              </div>
            </div>
          </div>

          {/* total*/}
          <div className="Outfit font-[600] text-[18px] flex items-center justify-between mt-[25px]">
            <div>
              <span>Total</span>
            </div>
            <div>
              <span>$ 331.50</span>
            </div>
          </div>
        </div>
      </div>

      {/* Recently View */}
      <div className="mt-[100px] ">
        <RecentlyView />
      </div>
    </div>
  );
};

export default Checkout;
