import { createContext, useState } from "react";

export const ProductFilterContext = createContext();

// provider component 
export const ProductFilterProvider = ({ children }) => {
    const [categoryFilter, setCategoryFilter] = useState('');
    const [gender, setGender] = useState('');
    const [priceMax, setPriceMax] = useState(0);
    const [priceMin, setPriceMin] = useState(0);
    const [style, setStyle] = useState('');
    const [icedProduct, setIcedProduct] = useState(false);
    const [color, setColor] = useState('');

  
    return (
      <ProductFilterContext.Provider value={{
        categoryFilter, setCategoryFilter,
        gender, setGender,
        priceMax, setPriceMax,
        priceMin, setPriceMin,
        style, setStyle,
        icedProduct, setIcedProduct,
        color,setColor
      }}>
        {children}
      </ProductFilterContext.Provider>
    );
};