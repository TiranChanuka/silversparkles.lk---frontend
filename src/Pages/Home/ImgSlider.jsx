import Slider from "react-slick";
import SlideImage1 from "../../assets/slide1.png";
import SlideImage2 from "../../assets/neck.jpg";
import SlideImage3 from "../../assets/golds.jpg";

const ImgSlider = () => {
  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    pauseOnHover: false,
  };

  const SliderItems = [
    {
      id: 1,
      img: SlideImage1,
    },
    {
      id: 2,
      img: SlideImage2,
    },
    {
      id: 3,
      img: SlideImage3,
    },
  ]

  return (
    <div className="overflow-hidden">
      <Slider {...settings}>

        {SliderItems.map((item) => (
          <div key={item.id} className="w-[100%] h-[80vh]">
            <img src={item.img} alt="" className=" object-cover object-center  w-full h-full" />
          </div>))}
      </Slider>
    </div>
  );
};

export default ImgSlider;