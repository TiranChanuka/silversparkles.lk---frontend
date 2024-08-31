import React, { useContext } from "react";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { Select } from "antd";
import FilterContext from "../../../Contexts/FilterContext";
import VisibilityIcon from "@mui/icons-material/Visibility";

const Section1 = () => {
  const { toggleFilter } = useContext(FilterContext);

  const { isFilterHidden } = useContext(FilterContext);

  return (
    <div>
      <div className="Outfit flex md:flex-row flex-col md:justify-between items-center ">
        {/* shop Name */}
        <div>
          <h1 className="text-[25px] font-[700]">Silver Sparkles</h1>
        </div>

        {/* action buttons */}
        <div className=" flex md:flex-row flex-col mt-[20px] md:mt-0 md:gap-[30px] gap-[20px] justify-center items-center ">
          {/* clear filter */}
          <div
            className="flex items-center gap-[5px] cursor-pointer text-[#0A6550] hover:text-gray-400"
            onClick={() => location.reload()}
          >
            <span>Clear Filter</span>
            <AutoAwesomeIcon />
          </div>

          {/* hide filter */}
          {isFilterHidden ? (
            <div
              className="flex items-center gap-[5px] cursor-pointer text-[#0A6550] hover:text-gray-400"
              onClick={toggleFilter}
            >
              <span>Show Filter</span>
              <VisibilityIcon />
            </div>
          ) : (
            <div
              className="flex items-center gap-[5px] cursor-pointer hover:text-gray-400"
              onClick={toggleFilter}
            >
              <span>Hide Filter</span>
              <VisibilityOffIcon />
            </div>
          )}

          {/* sort by */}
          <div className="flex items-center gap-[5px] cursor-pointer hover:text-gray-400">
            <Select
              className="Outfit "
              labelInValue
              defaultValue={{
                value: "sortby",
                label: "Sort By",
              }}
              style={{
                width: 120,
              }}
              options={[
                {
                  value: "price",
                  label: "Price",
                },
                {
                  value: "color",
                  label: "Color",
                },
              ]}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section1;
