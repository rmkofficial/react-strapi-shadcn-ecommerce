import React from "react";
import NavBar from "../components/NavBar";
import BannerCarousel from "../components/BannerCarousel";
import ProductShowcase from "../components/ProductShowcase";
import CollectionCard from "../components/CollectionCard";
import ProductCarousel from "../components/ProductCarousel";

const HomePage = () => {
  return (
    <div>
      <NavBar />
      <BannerCarousel />
      <ProductShowcase />
      <CollectionCard />
      <ProductCarousel />
    </div>
  );
};

export default HomePage;
