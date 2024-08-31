/* eslint-disable react/no-unescaped-entities */
import { PopularCollectionData } from "../../Components/Collection Card/CollectionData";
import CollectionCard from "../../Components/Collection Card/CollectionCard";
import { motion } from "framer-motion";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";

const Section5 = () => {
  return (
    <div className=" md:mt-10 bg-[#2a2a2a]">
      {/* title */}
      <div className="flex text-center justify-center mb-[20px]">
        <motion.span
          initial={{ opacity: 0, y: -100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="Outfit capitalize md:text-[40px] text-[25px] font-[600] text-center text-white"
        >
          What's popular nature twist collection
        </motion.span>
      </div>

      {/* products */}
      <div className="flex justify-center gap-[30px] flex-wrap">
        {PopularCollectionData.map((item) => (
          <CollectionCard item={item} key={item.id} />
        ))}
      </div>
      <div className="p-6">
        {/* see all */}
        <div className=" md:flex hidden items-center  justify-center  uppercase font-[500]">
          <div className=" flex items-center gap-[5px] text-[18px] textButton p-2 cursor-pointer">
            <span>see all our best deals</span>
            <KeyboardDoubleArrowRightIcon />
          </div>
        </div>

        {/* mobile mod btn */}
        <div className="flex md:hidden justify-center">
          <div className=" flex md:hidden justify-center items-center gap-[5px] text-base  cursor-pointer textButton p-1 uppercase w-fit">
            <span>see all our best deals</span>
            <KeyboardDoubleArrowRightIcon />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section5;
