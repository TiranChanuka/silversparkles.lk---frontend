/* eslint-disable react/no-unescaped-entities */
import { motion } from "framer-motion";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import { FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";


const Section4 = () => {
  return (
    <div className="Section4 Poppins h-[60vh] flex flex-col justify-center md:items-center  items-center  m-3 md:mt-10">
      {/* text */}
      <div className="flex md:justify- text-center  flex-col md:flex-row w-[100%] ">
        <div className="w-full">
          <motion.h1
            initial={{ opacity: 0, x: -200 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="uppercase text-white text-[30px] md:text-[50px] font-[700]"
          >
            Create Your Own Customized Design
          </motion.h1>
        </div>
      </div>
      <div className="flex justify-center space-x-2">
        {/* see all */}
        <div className=" flex justify-center py-6">
          <div className="md:flex hidden justify-center items-center  ">
            <Link to="/contact-us">
              <div className="flex items-center gap-[5px] cursor-pointer textButton p-2">
                <span className="Poppins uppercase text-[18px] font-[500]">
                  Contact
                </span>

                <KeyboardDoubleArrowRightIcon />
              </div>
            </Link>
          </div>

          {/* mobile view */}
          <Link to="/contact-us">
            <div className="flex md:hidden items-center gap-[5px] cursor-pointer textButton p-1">
              <span className="Poppins uppercase text-base">
                Contact
              </span>

              <KeyboardDoubleArrowRightIcon />
            </div>
          </Link>
        </div>
        {/* see all */}
        <div className=" flex justify-center py-6">
          <div className="md:flex hidden justify-center items-center  ">
            <div className="flex items-center gap-[5px] cursor-pointer textButton p-2">
              <span className="Poppins uppercase text-[18px] font-[500]">
                <Link to="https://api.whatsapp.com/send/?phone=%2B94778884033&text&app_absent=0">
                  Message Us</Link>
              </span>

              <FaWhatsapp />
            </div>
          </div>

          {/* mobile view */}

          <div className="flex md:hidden items-center gap-[5px] cursor-pointer textButton p-1">
            <span className="Poppins uppercase text-base">
              <Link to="https://api.whatsapp.com/send/?phone=%2B94778884033&text&app_absent=0">
                Message Us</Link>
            </span>

            <FaWhatsapp />
          </div>
        </div>
      </div>

    </div>
  );
};

export default Section4;
