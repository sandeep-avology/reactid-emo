import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slide1 from "../../../assets/images/slider-1.jpg"; 
import slide2 from "../../../assets/images/slide-02.jpg";

const HeroBanner = () => {
  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 800,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  const slides = [
    {
      id: 1,
      img: slide2,
      title: "Discover the latest arrivals",
      btn: "Shop Now"
    },
    {
      id: 2,
      img: Slide1,
      title: "Unbeatable prices on all categories",
       btn: "Shop Now"
    },

  ];

  return (
    <div className="w-full">
      <Slider {...settings}>
        {slides.map((slide) => (
          <div key={slide.id} className="relative">
            <img
              src={slide.img}
              alt={`Slide ${slide.id}`}
              className="w-full h-[700px] object-cover after:contet"
            />
            <div className="container mx-auto px-4">
              <div className="absolute top-1/2">
                <div className=" text-white text-3xl md:text-5xl font-bold drop-shadow-xl max-w-[600px]">
                  {slide.title}
                </div>
                <div className="mt-8">
                  <a href="" className="bg-[#fac1d9] py-2.5 px-8 inline-block text-white font-[poppins] font-bold">{slide.btn}</a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default HeroBanner;
