import { motion } from "framer-motion";

const Section2 = () => {
  return (
    <div className="Outfit gallary flex flex-col m-3 md:mt-10">
      <div className="wrapper p-[40px]">
        <motion.div
          whileHover={{ scale: 1.1 }}
          className="col c2 flex items-end"
        >
          <span className="md:text-[25px] font-[600] pl-[7px] text-white">
            Gold Bracelets
          </span>
        </motion.div>

        <div className="col col-l c1">
          <motion.div
            whileHover={{ scale: 1.1 }}
            className="row r1 flex items-end"
          >
            <span className="md:text-[25px] font-[600] pl-[7px] text-white">
              Gold Watches
            </span>
          </motion.div>

          <div className="row r2">
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="col rc1 flex items-end"
            >
              <span className="md:text-[25px] font-[600] pl-[7px] text-white">
                Gold <br /> Earrings
              </span>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="col rc2 flex items-end"
            >
              <span className="md:text-[25px] font-[600] pl-[7px] text-white">
                Gold <br /> Neckless
              </span>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section2;
