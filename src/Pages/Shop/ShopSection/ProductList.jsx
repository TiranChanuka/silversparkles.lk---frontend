import React, { useState } from "react";
import { productData } from "../../../Components/Product Card/ProductData";
import ReactPaginate from "react-paginate";
import ProductCard from "../../../Components/Product Card/ProductCard";
import axios from "axios";
import { useEffect } from "react";
import { useContext } from "react";
import { ProductFilterContext } from "../../../Contexts/ProductFilterContext";
// import { color } from "framer-motion";


const ProductList = () => {

  const {categoryFilter,gender,color,priceMax,priceMin,style,icedProduct} = useContext(ProductFilterContext);

  const [pageNumber, setPageNumber] = useState(0);
  const [isProduct, setIsProduct] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const api = import.meta.env.VITE_API_URL;

  let queries = "";

  console.log("Category Filter", categoryFilter);
  console.log("Gender Filter : ",gender);
  console.log("Color : " , color);
  console.log("Style : " ,style);
  console.log("Iced Product : ", icedProduct);
  
  if (categoryFilter !== '') {
    queries += `category=${categoryFilter}&`;
  }

  if (categoryFilter === 'all'){
    queries = '';
  }

  if (gender !== '') {
    queries = queries + `gender=${gender}&`;
  }

  

  if (priceMax !== 0) {
    queries = queries + `priceMax=${priceMax}&`;
  }

  if (priceMin !== 0) {
    queries = queries + `priceMin=${priceMin}&`;
  }

  if (style !== '') {
    queries = queries + `style=${style}&`;
  }

  if (icedProduct !== false) {
    queries = queries + `iced_product=${icedProduct}&`;
  }

  const fetchData = () => {
    let url = `${api}/api/product/filter?${queries}`;
    console.log("URL : ", url);
    axios.get(url)
      .then((res) => {
        setIsLoading(false);
        setIsProduct(true);
        setPrData(res && res.data);
        // console.log("Response data ", res.data);
      })
      .catch((error) => {
        setPrData([]);
        console.log(error);
      }).finally(() => {
        setIsLoading(false);

      });
  }

  const [prData, setPrData] = useState([]);

  useEffect(() => {
    fetchData();
  }, [categoryFilter,gender,color,priceMax,priceMin,style,icedProduct]);

  const productsPerPage = 12;
  const pagesVisited = pageNumber * productsPerPage;

  const displayProducts = prData
    .slice(pagesVisited, pagesVisited + productsPerPage)
    .map((product) => {
      return (
        <div className="productList" key={product.id}>
          {isLoading ? <h1>Loading Products ....</h1>:isProduct ? <ProductCard item={product} key={product.id} /> : <h1 className="text-black">No Product Found</h1> }
        </div>
      );
    });

  const pageCount = Math.ceil(prData.length / productsPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  return (
    <div className="productList flex flex-wrap gap-[50px] justify-center md:justify-center  left-0 right-0 ">
      {displayProducts}
      <ReactPaginate
        previousLabel={"Previous"}
        nextLabel={"Next"}
        pageCount={pageCount}
        onPageChange={changePage}
        containerClassName={"paginationBttns"}
        previousLinkClassName={"previousBttn"}
        nextLinkClassName={"nextBttn"}
        disabledClassName={"paginationDisabled"}
        activeClassName={"paginationActive"}

      />
    </div>
  );
};

export default ProductList;
