import React, { useContext } from "react";
import Filters from "./Filters";
import { productData } from "../../../Components/Product Card/ProductData";
import ProductCard from "../../../Components/Product Card/ProductCard";
import FilterContext from "../../../Contexts/FilterContext";
import { AnimatePresence, motion } from "framer-motion";
import ProductList from "./ProductList";

const Section3 = () => {
  const { isFilterHidden } = useContext(FilterContext);

  const exitAnimation = {
    x: -300,
    transition: { duration: 0.3 },
  };

  return (
    <div className="flex gap-[50px] relative">
      {/* left */}

      <AnimatePresence>
        {isFilterHidden ? null : (
          <motion.div
            initial={{ x: -300 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.5 }}
            exit={exitAnimation}
            className="flex-[1] md:sticky md:top-[50px] md:h-[100%] md:z-[800] z-[1000] bg-white w-[100vw] md:w-fit h-auto p-[20px]  absolute"
          >
            <Filters />
          </motion.div>
        )}
      </AnimatePresence>
      {/* right */}
      <div className="flex-[5]  ">
        <ProductList />
      </div>
    </div>
  );
};

export default Section3;
