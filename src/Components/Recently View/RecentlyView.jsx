import React from "react";
import { recentData } from "./RecentlyData";

import CollectionCard from "../Collection Card/CollectionCard";

const RecentlyView = () => {
  return (
    <div className="Outfit">
      {/* title */}
      <div className="flex items-center justify-center">
        <span className="text-[30px] font-[500]">Recently Viewed Products</span>
      </div>

      <div className="flex flex-wrap justify-center gap-[50px] mt-[50px]">
        {recentData.slice(0, 4).map((item) => (
          <CollectionCard item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default RecentlyView;
