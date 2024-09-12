import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const products = [
  {
    id: 1,
    name: "Short sleeve polo shirt",
    price: 179,
    imageUrl: "/path/to/image1.jpg", 
  },
  {
    id: 2,
    name: "Short sleeve polo shirt",
    price: 179,
    imageUrl: "/path/to/image2.jpg", 
  },
  {
    id: 3,
    name: "Short sleeve polo shirt",
    price: 179,
    imageUrl: "/path/to/image1.jpg", 
  },
  {
    id: 4,
    name: "Short sleeve polo shirt",
    price: 179,
    imageUrl: "/path/to/image2.jpg", 
  },
];

const ProductCarousel = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2, 
    autoplay: true,
    autoplaySpeed: 3000,
    afterChange: (current) => setActiveSlide(current / 2), 
    appendDots: (dots) => (
      <div className="absolute w-full flex justify-center">
        <ul className="flex justify-center gap-4"> {dots} </ul>
      </div>
    ),
    customPaging: (i) => (
      <div
        className={`w-8 h-2 rounded-lg mx-1 ${
          i === activeSlide ? "bg-orange-500" : "bg-gray-300"
        }`}
      >
        <div className="w-full h-full rounded-lg" />
      </div>
    ),
  };

  return (
    <div className="my-10 relative">
      <h2 className="text-center text-xl font-semibold mb-4">JUST FOR YOU</h2>
      <Slider {...settings}>
        {products.map((product) => (
          <div key={product.id} className="p-2">
            <div className="border rounded-lg overflow-hidden">
              <img
                src={product.imageUrl}
                alt={product.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <p className="text-sm">{product.name}</p>
                <p className="text-orange-500 font-bold">${product.price}</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ProductCarousel;
