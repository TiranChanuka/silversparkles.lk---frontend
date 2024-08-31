import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const CollectionCard = ({ item }) => {
  return (
    <Link to={`/product/${item.id}`}>
      <motion.div
        whileHover={{ scale: 1.1 }}
        className="w-[250px] h-[350px] relative cursor-pointer"
      >
        {/* image */}
        <img
          src={item.img}
          alt="pimg"
          className="w-[100%] h-[100%] object-cover "
        />

        {/* details */}
        <div className="absolute Poppins w-[60%] flex flex-col bottom-0 p-[5px] bg-black/10">
          <span className="text-[18px] font-[500] text-white">
            {item.title}
          </span>
          <span className="text-white tet-[20px]">{item.size}</span>
        </div>
      </motion.div>
    </Link>
  );
};

export default CollectionCard;
