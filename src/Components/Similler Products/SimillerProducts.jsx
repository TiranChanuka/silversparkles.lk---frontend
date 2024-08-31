import React from "react";

import CollectionCard from "../Collection Card/CollectionCard";
import { simillerProductData } from "./SmillerProductData";

const SimillerProducts = () => {
  return (
    <div className="Outfit">
      {/* title */}
      <div className="flex items-center justify-center">
        <span className="text-[30px] font-[500]">Similar Products</span>
      </div>

      <div className="flex flex-wrap justify-center gap-[50px] mt-[50px]">
        {simillerProductData.slice(0, 4).map((item) => (
          <CollectionCard item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default SimillerProducts;
