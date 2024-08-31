import { IoLocationOutline } from "react-icons/io5";
import { TfiEmail } from "react-icons/tfi";
import { LuPhone } from "react-icons/lu";

const Contact = () => {
  return (
    <div className="flex Outfit md:px-[50px] px-[20px] mt-[50px] mb-[100px] gap-[50px] items-center md:flex-row flex-col">
      {/* left */}
      <div className="flex-[1]">
        {/* title */}
        <div className="mb-[50px]">
          <span className="text-[32px] font-[700]">Contact Us</span>
        </div>

        <div className="flex flex-col gap-[40px]">
          {/* address */}
          <div className="flex items-start gap-[10px] border-b-[1px] border-solid border-gray-200 pb-[20px]">
            <div>
              <IoLocationOutline className="text-[30px]" />
            </div>
            <div className="text-[24px] font-[400] flex flex-col">
              <span>No. 101/A</span>
              <span>Lorem ipsum,</span>
              <span>Lorem ipsum,</span>
              <span>Lorem 1001,</span>
              <span>ipsum</span>
            </div>
          </div>

          {/* email */}
          <div className="flex items-center gap-[10px] border-b-[1px] border-solid border-gray-200 pb-[20px]">
            <div>
              <TfiEmail className="text-[30px]" />
            </div>
            <div>
              <span className="text-[24px] font-[400]">lorem@ipsum.com</span>
            </div>
          </div>

          {/* phone number */}
          <div className="flex items-center gap-[10px] border-b-[1px] border-solid border-gray-200 pb-[20px]">
            <div>
              <LuPhone className="text-[30px]" />
            </div>
            <div>
              <span className="text-[24px] font-[400]">011 2345 678</span>
            </div>
          </div>
        </div>
      </div>

      {/* right */}
      <div className="flex-[1]">
        <form className="flex flex-col gap-[25px]">
          <div className="flex justify-between gap-[25px]">
            <input
              type="text"
              placeholder="First Name"
              className="p-[10px] bg-gray-200 outline-none w-full"
            />

            <input
              type="text"
              placeholder="Last Name"
              className="p-[10px] bg-gray-200 outline-none w-full"
            />
          </div>
          <div>
            <input
              type="email"
              placeholder="Email"
              className="p-[10px] bg-gray-200 outline-none w-full"
            />
          </div>
          <div>
            <textarea
              name="msg"
              id="msg"
              cols="30"
              rows="10"
              placeholder="Message"
              className="bg-gray-200 p-[10px] w-full resize-none outline-none"
            ></textarea>
          </div>

          <div className="flex justify-center md:justify-end">
            <button className="textButton text-white p-[10px] px-[100px] cursor-pointer ">
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
