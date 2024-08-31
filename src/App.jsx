import React from "react";
import Layout from "./Layout/Layout";
import { FilterProvider } from "./Contexts/FilterContext";
import { useLocation } from "react-router-dom";
import {  ProductFilterProvider } from "./Contexts/ProductFilterContext";

const App = () => {
  const ScrollToTop = () => {
    const { pathname } = useLocation();

    React.useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);

    return null;
  };

  return (
    <FilterProvider>
      <ProductFilterProvider>
        <div>
          <ScrollToTop />
          <Layout />
        </div>
      </ProductFilterProvider>
    </FilterProvider>
  );
};

export default App;
