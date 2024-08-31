/* eslint-disable react/no-unescaped-entities */
import { LuxuryCollectionData } from "../../Components/Collection Card/CollectionData";
import CollectionCard from "../../Components/Collection Card/CollectionCard";
import { motion } from "framer-motion";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";

const Section7 = () => {
  return (
    <div className="m-3 md:mt-10">
      {/* title */}
      <div className="flex justify-center mb-[20px]">
        <motion.span
          initial={{ opacity: 0, y: -100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="Outfit md:text-[40px] text-[25px] text-center capitalize font-[600]"
        >
          what's popular in time 4 luxury collection
        </motion.span>
      </div>

      {/* collections */}
      <div className="flex justify-center gap-[30px] flex-wrap">
        {LuxuryCollectionData.map((item) => (
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

export default Section7;
