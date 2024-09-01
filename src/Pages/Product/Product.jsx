/* eslint-disable react/no-unescaped-entities */
import { useEffect, useState } from "react";
import Prmain from "../../assets/prmain.jpeg";
import Prsub1 from "../../assets/prsub1.jpeg";
import Prsub2 from "../../assets/prsub2.jpeg";
import Prsub3 from "../../assets/prsub3.jpeg";
import Prsub4 from "../../assets/prsub4.jpeg";
import { FaStar } from "react-icons/fa6";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { Progress } from "antd";
import SimillerProducts from "../../Components/Similler Products/SimillerProducts";
import { Link, useParams } from "react-router-dom";
import Rating from '@mui/material/Rating';
import axios from "axios";
import { Spin } from "antd";
import Cookie from "js-cookie";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const Product = () => {
  const [value, setValue] = useState();
  // product images
  const productImages = [Prmain, Prsub1, Prsub2, Prsub3, Prsub4];

  // get product id from url 
  const productId = useParams().id;
  // get api domain 
  const api = import.meta.env.VITE_API_URL;
  // total review 
  const [totalReviews, setTotalReviews] = useState(0);

  // submitting state 
  const [submitting, setSubmitting] = useState(false);


  // calculated total reviews 
  const calTotalReviews = () => {
    let total = 0;
    if (data && data.review) {
      data.review.forEach((review) => {
        total += review.one || 0;
        total += review.two || 0;
        total += review.three || 0;
        total += review.four || 0;
        total += review.five || 0;
      });
    }
    setTotalReviews(total);
  };



  const SubmitReview = (value) => {
    const submitUrl = `${api}/api/review/add`;
    setSubmitting(true);
    // get user Id if it is log into the web 
    if (Cookie.get("token")) {
      const userId = Cookie.get("userId");
      const token = Cookie.get("token");
      console.log("token : ", token)

      // submit with authorization 
      axios.post(submitUrl, {
        productId: productId,
        rating: value,
        userId: userId
      },
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }).then((res) => {
          console.log(res.data);
          toast.success("Review Submitted Successfully");
          fetchData();
          calTotalReviews();
          setSubmitting(false);


        }).catch((error) => {
          console.log(error);
          toast.error("Review Submission Failed " + error.response.data.message);
          setSubmitting(false);


        });
    } else {
      toast.error("Please Login to submit the review");
      setSubmitting(false);
    }

  }

  console.log("Total Reviews : ", totalReviews);  

  // selected product image

  const [selectedImg, setSelectedImg] = useState(0);

  // select sizes

  const [selectedSize, setSelectedSize] = useState(0);
  // selected color state 
  const [selectedColor, setSelectedColor] = useState(0);

  // Store retrive Data 
  const [data, setData] = useState([]);
  // is loading for loading state 
  const [isLoading, setIsLoading] = useState(true);

  // retrive the product according to the ID 
  const url = `${api}/api/product/get/${productId}`;

  const fetchData = () => {
    axios.get(url)
      .then((res) => {
        console.log(res.data);
        setData(res.data);
        setIsLoading(false);

      }).catch((error) => {
        console.log(error);
      }).finally(() => {
        setIsLoading(false);
      })
  }

  console.log(value);

  useEffect(() => {
    fetchData();

  }
    , []);

  return (
    isLoading ? (
      <div className="md:px-[50px] px-[20px] mt-[50px] mb-[100px]">
        <div className="flex justify-center items-center h-[300px]">
          <Spin size="large" />
        </div>
      </div>
    ) : (
      <div className="md:px-[50px] px-[20px] mt-[50px] mb-[100px]">
        <ToastContainer />
        {/* top */}
        <div className="flex gap-[50px] lg:flex-row flex-col">
          {/* left */}
          <div className="flex-[1]">
            {/* product images */}
            <div className="w-full">
              {/* main */}
              <div className="md:w-[600px] w-full h-[300px] flex justify-center items-center  md:h-[500px]">
                <img
                  src={data && data.images && data.images[selectedImg] && `${data.images[selectedImg].url}`}
                  alt='product'
                  className="w-full h-full object-cover"
                />
              </div>

              {/* sub */}
              <div className="flex md:justify-between gap-[10px] md:gap-0 mt-[25px]">
                {data && data.images && data.images.map((img, key) => (
                  <div

                    className="w-[100px] h-[100px] cursor-pointer hover:border-[1px] border-black border-solid"
                    onClick={() => setSelectedImg(key)}
                  >

                    <img
                      src={img.url}
                      alt={img.url}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* right */}
          <div className="flex-[2] Outfit">
            {/* road map */}
            <div className="flex items-center gap-[5px] Outfit">
              <div className="cursor-pointer hover:text-black/90">
                <span>Home</span>
              </div>
              <span>/</span>
              <div className="cursor-pointer hover:text-black/90">
                <span>{data && data.gender}</span>
              </div>
              <span>/</span>
              <div className="cursor-pointer hover:text-black/90">
                <span>{data && data.category} </span>
              </div>
              <span>/</span>
              <div className="cursor-pointer hover:text-black/90">
                <span>{data && data.title}</span>
              </div>
            </div>

            {/* product name */}
            <div className="border-b-[1px] border-black border-solid w-fit">
              <span className="font-[700] text-[28px]">
                {data && data.title}
                {" "}
                {data && data.length[0].length}
              </span>
            </div>

            {/* ratings */}
            <div className="flex gap-[10px] items-center mt-[25px]">
              <div className="text-[#FF9000] flex items-center gap-[5px] text-[18px]">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>

              <div>
                <span className="text-[18px] font-[500]">{totalReviews && totalReviews}</span>
              </div>
            </div>

            {/* desc */}
            <div className="border-b-[1px] border-black border-solid mt-[20px]">
              {/* <span className="text-[16px] font-[400]">
                *Lorem ipsum dolor sit amet, consectetur adipiscing elit, Lorem
                ipsum dolor sit amet, consectetur adipiscing elit,{" "}
              </span> */}
            </div>

            {/* colors */}
            <div className="mt-[25px]">
              {/* title */}
              <div>
                <span className="text-[20px] font-[500]">Color</span>
              </div>

              {/* color items */}
              <div className="flex gap-[20px] mt-[10px] flex-wrap">
                {data && data.color && data.color.map((color, key) => (
                  <div className={`py-[7px] px-[25px] ${selectedColor === key ? "text-white" : "text-[#0a6550]"
                    } ${selectedColor === key ? "bg-[#0a6550]" : "bg-white"} ${selectedColor === key ? "hover:bg-[#093512]" : "hover:bg-gray-100"
                    } border-[#0a6550] border-solid border-[1px] flex items-center justify-center rounded-full text-[16px] font-[500] cursor-pointer transition-colors`}
                    onClick={() => setSelectedColor(key)}>
                    <span>{color.color}</span>
                  </div>
                ))}
                {/* <div className="p-[10px] px-[25px] rounded-full bg-[#926C15] hover:bg-[#7e5e12] cursor-pointer transition-colors">
                  <span>Yellow</span>
                </div>
                <div className="p-[10px] px-[25px] rounded-full bg-[#EC9FD2] hover:bg-[#d38dbb] cursor-pointer transition-colors">
                  <span>Rose</span>
                </div> */}
              </div>
            </div>

            {/* sizes */}
            <div className="mt-[25px] w-fit border-b-[2px] border-gray-300 border-solid pb-[20px]">
              {/* title */}
              <div className="flex justify-between">
                <div>
                  <span className="text-[20px] font-[500]">Sizes</span>
                </div>

                <div>
                  <span className="text-[14px] font-[600] underline text-[#0a6550] cursor-pointer">
                    Size Chart
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-[10px] mt-[10px] flex-wrap">
                {data && data.length && data.length.map((length, key) => (
                  <div
                    className={`py-[7px] px-[25px] ${selectedSize === key ? "text-white" : "text-[#0a6550]"
                      } ${selectedSize === key ? "bg-[#0a6550]" : "bg-white"} ${selectedSize === key ? "hover:bg-[#093512]" : "hover:bg-gray-100"
                      } border-[#0a6550] border-solid border-[1px] flex items-center justify-center rounded-full text-[16px] font-[500] cursor-pointer transition-colors`}
                    onClick={() => setSelectedSize(key)}
                  >
                    <span>{length.length}</span>
                  </div>
                ))}
                {/* <div
                  className={`py-[7px] px-[25px] ${selectedSize === 1 ? "text-white" : "text-[#0a6550]"
                    } ${selectedSize === 1 ? "bg-[#0a6550]" : "bg-white"} ${selectedSize === 1 ? "hover:bg-[#093512]" : "hover:bg-gray-100"
                    } border-[#0a6550] border-solid border-[1px] flex items-center justify-center rounded-full text-[16px] font-[500] cursor-pointer transition-colors`}
                  onClick={() => setSelectedSize(1)}
                >
                  <span>18’’</span>
                </div>

                <div
                  className={`py-[7px] px-[25px] ${selectedSize === 2 ? "text-white" : "text-[#0a6550]"
                    } ${selectedSize === 2 ? "bg-[#0a6550]" : "bg-white"} ${selectedSize === 2 ? "hover:bg-[#093512]" : "hover:bg-gray-100"
                    } border-[#0a6550] border-solid border-[1px] flex items-center justify-center rounded-full text-[16px] font-[500] cursor-pointer transition-colors`}
                  onClick={() => setSelectedSize(2)}
                >
                  <span>20’’</span>
                </div>

                <div
                  className={`py-[7px] px-[25px] ${selectedSize === 3 ? "text-white" : "text-[#0a6550]"
                    } ${selectedSize === 3 ? "bg-[#0a6550]" : "bg-white"} ${selectedSize === 3 ? "hover:bg-[#093512]" : "hover:bg-gray-100"
                    } border-[#0a6550] border-solid border-[1px] flex items-center justify-center rounded-full text-[16px] font-[500] cursor-pointer transition-colors`}
                  onClick={() => setSelectedSize(3)}
                >
                  <span>22’’</span>
                </div>

                <div
                  className={`py-[7px] px-[25px] ${selectedSize === 4 ? "text-white" : "text-[#0a6550]"
                    } ${selectedSize === 4 ? "bg-[#0a6550]" : "bg-white"} ${selectedSize === 4 ? "hover:bg-[#093512]" : "hover:bg-gray-100"
                    } border-[#0a6550] border-solid border-[1px] flex items-center justify-center rounded-full text-[16px] font-[500] cursor-pointer transition-colors`}
                  onClick={() => setSelectedSize(4)}
                >
                  <span>24’’</span>
                </div> */}
              </div>
            </div>

            {/* buttons */}
            <div className="flex justify-between gap-[20px] mt-[50px]">
              <Link
                to={"/checkout"}
                className="py-[10px] px-[20px] textButton border-[#0a6550] flex items-center justify-center border-solid border-[1px] cursor-pointer w-full transition-colors"
              >
                <span>Buy Now</span>
              </Link>
              <div className="py-[10px] px-[20px] bg-white text-[#0a6550] border-[#0a6550] rounded-lg border-solid border-[1px] flex items-center justify-center hover:bg-gray-100 cursor-pointer w-full transition-colors">
                <span>Add to Cart</span>
              </div>
            </div>

            {/* desc */}
            <div className="mt-[20px]">
              <span className="text-[16px] font-[400]">
                {data && data.description},{" "}
              </span>
            </div>
          </div>
        </div>

        {/* bottom */}
        <div className="Outfit font-[600] mt-[50px]">
          <Tabs>
            <TabList>
              <Tab>Description</Tab>
              <Tab>Specifications</Tab>
              <Tab>Material</Tab>
              <Tab>Exchange / Return</Tab>
              <Tab>Reviews</Tab>
            </TabList>

            <TabPanel>
              <div className="flex flex-col gap-[10px] mt-[25px]">
                <span className="font-[400]">
                  {data && data.description}
                </span>

                <span>
                  This product is guaranteed for life - GLD will repair the item
                  should you experience any defects in craftsmanship or breakage.
                </span>
              </div>
            </TabPanel>
            <TabPanel>
              <div className="flex flex-col gap-[10px] mt-[25px]">
                <div className="flex items-center gap-[10px]">
                  <div>
                    <span className="font-[500]">Length :</span>
                  </div>
                  <div>
                    {data && data.length && data.length.map((length) => (
                      <span>{length.length} ,</span>
                    ))}
                  </div>
                </div>
                <div className="flex items-center gap-[10px]">
                  <div>
                    <span className="font-[500]">Width :</span>
                  </div>
                  <div>
                    <span>{data && data.width}</span>
                  </div>
                </div>
                <div className="flex items-center gap-[10px]">
                  <div>
                    <span className="font-[500]">Weight :</span>
                  </div>
                  <div>
                    <span>+/- {data && data.weight}</span>
                  </div>
                </div>
                {/* <div className="flex items-center gap-[10px]">
                  <div>
                    <span className="font-[500]">16’’ :</span>
                  </div>
                  <div>
                    <span>2 Grams</span>
                  </div>
                </div>
                <div className="flex items-center gap-[10px]">
                  <div>
                    <span className="font-[500]">18’’ :</span>
                  </div>
                  <div>
                    <span>4 Grams</span>
                  </div>
                </div>
                <div className="flex items-center gap-[10px]">
                  <div>
                    <span className="font-[500]">20’’ :</span>
                  </div>
                  <div>
                    <span>6 Grams</span>
                  </div>
                </div>
                <div className="flex items-center gap-[10px]">
                  <div>
                    <span className="font-[500]">21’’ :</span>
                  </div>
                  <div>
                    <span>8 Grams</span>
                  </div>
                </div>
                <div className="flex items-center gap-[10px]">
                  <div>
                    <span className="font-[500]">22’’ :</span>
                  </div>
                  <div>
                    <span>10 Grams</span>
                  </div>
                </div> */}
                {/* <div className="mt-[20px]">
                  <span className="font-[700]">18K Yellow Gold Plated.</span>
                </div> */}
              </div>
            </TabPanel>
            <TabPanel>
              <div className="flex flex-col gap-[10px] mt-[25px]">
                <div>
                  <span>18K Yellow Gold Plated.</span>
                </div>
                <div>
                  <div>
                    <span>This item is also available in:</span>
                  </div>
                  <div className="ml-[40px]">
                    <ul className="font-[400] ">
                      <li className="list-disc">{data && data.metal}</li>
                      <li className="list-disc">{data && data.stone}</li>
                    </ul>
                  </div>
                </div>
              </div>
            </TabPanel>
            <TabPanel>
              <div className="flex flex-col gap-[10px] mt-[25px]">
                <div>
                  <span className="font-[400]">
                    Orders placed between November 1st and December 25th can be
                    returned for FREE until January 15th.
                  </span>
                </div>
                <div>
                  <span>
                    We gladly accept returns/exchanges for items in unworn
                    brand-new condition, within the first 14 days after receipt of
                    your order.
                  </span>
                </div>
              </div>
            </TabPanel>

            <TabPanel>
              <div>
                <div className="mb-[15px]">
                  {/* ratings */}
                  <div className="flex gap-[10px] items-center mt-[25px]">
                    <div className="text-[#FF9000] flex items-center gap-[5px] text-[18px]">
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                    </div>

                    <div>
                      <span className="text-[18px] font-[500]">12</span>
                    </div>
                  </div>

                </div>
                <div className="lg:flex justify-between">
                  <div className="w-full">
                    <div className="flex items-center gap-[20px] text-center ">
                      <div>
                        <span>5 Star</span>
                      </div>

                      <div className="w-[300px]">
                        <Progress
                          percent={50}
                          showInfo={false}
                          strokeColor={"#FF9000"}
                        />
                      </div>

                      <div>
                        <span>4 Reviews</span>
                      </div>
                    </div>

                    <div className="flex items-center text-center gap-[20px] ">
                      <div>
                        <span>4 Star</span>
                      </div>

                      <div className="w-[300px]">
                        <Progress
                          percent={40}
                          showInfo={false}
                          strokeColor={"#FF9000"}
                        />
                      </div>

                      <div>
                        <span>3 Reviews</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-[20px]  text-center">
                      <div>
                        <span>3 Star</span>
                      </div>

                      <div className="w-[300px]">
                        <Progress
                          percent={30}
                          showInfo={false}
                          strokeColor={"#FF9000"}
                        />
                      </div>

                      <div>
                        <span>3 Reviews</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-[20px] text-center ">
                      <div>
                        <span>2 Star</span>
                      </div>

                      <div className="w-[300px]">
                        <Progress
                          percent={20}
                          showInfo={false}
                          strokeColor={"#FF9000"}
                        />
                      </div>

                      <div>
                        <span>2 Reviews</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-[20px] text-center ">
                      <div>
                        <span>1 Star</span>
                      </div>

                      <div className="w-[300px]">
                        <Progress
                          percent={10}
                          showInfo={false}
                          strokeColor={"#FF9000"}
                        />
                      </div>

                      <div>
                        <span>1 Reviews</span>
                      </div>
                    </div>
                    <div className="mt-[15px]">
                      <span className="font-[400]">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      </span>
                    </div>
                  </div>


                  {/* add Rating */}
                  <div className="w-full flex justify-center">
                    <div className=" space-y-5">
                      <div><span className="font-[500]">Add Your Rating</span></div>

                      <div>
                        <Rating
                          name="simple-controlled"
                          value={value}
                          onChange={(event, newValue) => {
                            setValue(newValue);
                          }}
                        />
                      </div>
                      <button
                        className="textButton p-1 w-full"
                        onClick={() => { SubmitReview(value) }}
                      >
                        {submitting ? "Submitting..." : "Submit"}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </TabPanel>
          </Tabs>
        </div>

        <div className="mt-[100px]">
          <SimillerProducts />
        </div>
      </div>
    ));
};

export default Product;
