import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import axios from "axios";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const BannerCarousel = () => {
  const [banners, setBanners] = useState([]);
  const [activeSlide, setActiveSlide] = useState(0);

  // Strapi'den verileri almak için useEffect
  useEffect(() => {
    const fetchBanners = async () => {
      try {
        const response = await axios.get(
          "http://localhost:1337/api/banners?populate=*"
        );

        const bannersData = response.data.data.map((banner) => {
          const imageUrl =
            banner.attributes.Image?.data[0]?.attributes?.url || "";
          return {
            id: banner.id,
            title: banner.attributes.Title,
            imageUrl: `http://localhost:1337${imageUrl}`,
          };
        });

        setBanners(bannersData);
      } catch (error) {
        console.error("Error fetching banners:", error);
      }
    };

    fetchBanners();
  }, []);

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
        <ul className="flex justify-center gap-4 mb-24"> {dots} </ul>
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
    <div className="w-full h-screen relative overflow-hidden">
      {" "}
      <Slider {...settings}>
        {banners.map((banner) => (
          <div key={banner.id} className="relative w-full h-screen">
            <img
              src={banner.imageUrl || "default-image-path.jpg"}
              alt={banner.title}
              className="object-cover w-full h-full"
              style={{ objectFit: "cover" }}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default BannerCarousel;
