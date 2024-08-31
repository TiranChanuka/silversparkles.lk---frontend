import React from "react";
import { motion } from "framer-motion";

const HeaderSection = () => {
  return (
    <div>
      {/* header */}
      <div className="shopHeader md:h-[50vh] h-[70vh] flex justify-center">
        <div className="overlay"></div>

        {/* Ad */}
        <div className="Inter capitalize leading-[70px] z-[1000] text-white flex justify-center flex-col items-center">
          <motion.h2
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="md:text-[50px] text-[35px] font-[500]"
          >
            Bracelet bliss
          </motion.h2>
          <motion.h1
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="md:text-[80px] text-[60px] font-[700]"
          >
            50% off
          </motion.h1>
          <motion.span
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="md:text-[30px] text-[25px] font-[500]"
          >
            only today
          </motion.span>
        </div>
      </div>
    </div>
  );
};

export default HeaderSection;
