import ProductCard from "../../Components/Product Card/ProductCard";
import { productData } from "../../Components/Product Card/ProductData";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";

const Section8 = () => {
  return (
    <div className=" md:mt-10 bg-black">
      {/* title */}
      <div className="md:block hidden absolute z-[-999]"></div>

      <div className="mb-[20px] md:pl-[50px] ">
        <motion.span
          initial={{ opacity: 0, x: -200 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="Poppins uppercase md:text-[40px] text-[30px]  text-white flex items-center justify-center md:justify-start font-[700] "
        >
          Explore our shop
        </motion.span>
      </div>

      {/* products */}
      <div className="flex justify-center gap-[30px] flex-wrap">
        {productData.slice(0, 4).map((item) => (
          <ProductCard item={item} key={item.id} />
        ))}
      </div>

      {/* go to shop link */}
      <div className=" md:flex hidden justify-center py-6">
        <div className="flex sBox justify-center items-center  ">
          <NavLink
            to={"/shop/1"}
            className="flex items-center gap-[5px] cursor-pointer textButton p-1 "
          >
            <span className="Poppins uppercase text-[18px] font-[500]">
              Go to our shop
            </span>

            <KeyboardDoubleArrowRightIcon />
          </NavLink>
        </div>
      </div>

      <NavLink
        to={"/shop/1"}
        className="flex md:hidden items-center gap-[5px] cursor-pointer pt-2 justify-center "
      >
        <span className="Poppins uppercase text-base textButton p-1 w-fit">
          Go to our shop<KeyboardDoubleArrowRightIcon />
        </span>


      </NavLink>
    </div>
  );
};

export default Section8;
