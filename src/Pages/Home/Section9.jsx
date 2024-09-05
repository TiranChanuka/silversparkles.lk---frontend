import React from "react";
import { motion } from "framer-motion";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ClientCard from "../../Components/Client Card/ClientCard";
import { clients } from "../../Components/Client Card/ClientData";

const Section9 = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };

  return (
    <div className="m-3 md:mt-10">
      {/* title */}
      <div className="md:block hidden absolute z-[-999]"></div>

      <div className="mb-[20px] md:pl-[50px]">
        <motion.span
          initial={{ opacity: 0, x: -200 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="Poppins text-[40px] uppercase text-black font-[700] flex items-center justify-center md:justify-start"
        >
          CELEBRITY CLIENTS
        </motion.span>
      </div>

      {/* clients slider */}
      <motion.div
        initial={{ opacity: 0, x: -200 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full  mx-auto md:max-w-full "
      >

        <Slider {...settings}>
          {clients.map((item) => (
            <div key={item.id}>
              <ClientCard item={item} />
            </div>
          ))}
        </Slider>
      </motion.div>
    </div>
  );
};

export default Section9;