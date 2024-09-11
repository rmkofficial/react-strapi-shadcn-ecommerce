import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const images = [
  { id: 1, src: "/images/banner1.jpg" },
  { id: 2, src: "/images/banner2.jpg" },
  { id: 3, src: "/images/banner3.jpg" },
];

const BannerCarousel = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    afterChange: (current) => setActiveSlide(current),
    appendDots: (dots) => (
      <div className="absolute w-full flex justify-center">
        <ul className="flex justify-center gap-16 mb-24"> {dots} </ul>
      </div>
    ),
    customPaging: (i) => (
      <div
        className={`w-16 h-2 rounded-lg mx-1 ${
          i === activeSlide ? "bg-orange-500" : "bg-gray-300"
        }`}
      >
        <div className="w-full h-full rounded-lg" />
      </div>
    ),
  };

  return (
    <div className="w-full h-screen relative">
      <Slider {...settings}>
        {images.map((image) => (
          <div key={image.id} className="relative w-full h-screen">
            <img
              src={image.src}
              alt={`Banner ${image.id}`}
              className="object-cover w-full h-full"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default BannerCarousel;
