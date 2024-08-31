import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import { b64toBlob } from "./Bblob";

const ProductCard = ({ item }) => {
  // const images = JSON.parse(item.images);
  const [image, setImage] = useState('');
  const apiHost = import.meta.env.VITE_API_URL;

// use useEffecrt to set the image
  useEffect(() => {
    try {
      const images = JSON.parse(item.images);
      if (images.length > 0 && images[0].url) {
        // Set the first image's URL, prepend with apiHost if not empty
        setImage(`${images[0].url}`);
        console.log(image);
      }

    } catch (e) {
      console.log(e);
    }
  }, []);


  return (
    <Link
      to={`/product/${item.id}`}
      className="Poppins flex flex-col shadow-xl md:w-[250px] w-[150px] h-fit  hover:shadow-2xl transition-shadow"
    >
      {/* product Img */}
      <div className="md:w-[250px] md:h-[300px] w-[150px] h-[250px]">
        <img
          src={image}
          alt="proImg"
          className="w-[100%] h-[100%] object-cover"
        />
      </div>

      {/* productDetails */}
      <div className="flex flex-col bg-white capitalize pb-[10px] px-[10px]">
        {/* name */}
        <span className="font-[500] text-[18px] ">{item.title}</span>

        {/* size */}
        <span className="font-[500]">

        </span>

        <span className="font-[500] text-gray-600">{item.length && item.length[0].length}mm</span>

        
      
        {/* price */}
        <span className="font-[500] text-gray-600">From ${item.price}</span>
      </div>
    </Link>
  );
};

export default ProductCard;
