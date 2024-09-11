import React from "react";
import NavBar from "../components/NavBar";
import BannerCarousel from "../components/BannerCarousel";
import ProductShowcase from "../components/ProductShowcase";

const HomePage = () => {
  return (
    <div>
      <NavBar />
      <BannerCarousel />
      <ProductShowcase />
    </div>
  );
};

export default HomePage;
