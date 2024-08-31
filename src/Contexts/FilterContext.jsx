import React, { createContext, useState } from "react";

const FilterContext = createContext();

export const FilterProvider = ({ children }) => {
  const [isFilterHidden, setFilterHidden] = useState(true);

  const toggleFilter = () => {
    setFilterHidden((prev) => !prev);
  };

  return (
    <FilterContext.Provider value={{ isFilterHidden, toggleFilter }}>
      {children}
    </FilterContext.Provider>
  );
};



export default FilterContext;
