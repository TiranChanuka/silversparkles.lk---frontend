import { motion } from "framer-motion";

const adItem = [
  {
    id: 1,
    ends: "Ends in 30TH june 2024",
    title: " Black friday \n extended",
    off: "50% off",
  },
];

const Ads = () => {
  return (
    <div className="Outfit text-center md:text-left">
      {adItem.map((item) => (
        <div className="  flex flex-col mt-[10%] md:w-[400px]" key={item.id}>
          {/* ends */}
          <motion.div
            initial={{ opacity: 0, x: -300 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="bg-black px-[2] md:w-[400px] text-[#fff] font-[600] flex items-center md:items-end justify-center md:justify-end md:pr-[20px]"
          >
            <span className="uppercase text-[20px]">{item.ends}</span>
          </motion.div>

          {/* title */}
          <div className="flex flex-col md:pl-[50px]">
            <motion.div
              initial={{ opacity: 0, x: -300 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <span className="uppercase text-[50px] font-[700]">
                {item.title}
              </span>
            </motion.div>

            {/* offer */}
            <motion.div
              initial={{ opacity: 0, x: -300 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              <span className="uppercase text-[80px] font-[700] text-[#0A6550]">
                {item.off}
              </span>
            </motion.div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Ads;
