import React, { useState } from "react";
import CategoryTabs from "./CategoryTabs";
import ProductGrid from "./ProductGrid";
import ExploreMoreButton from "./ExploreMoreButton";

const ProductShowcase = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  return (
    <div className="p-4 pt-20 pb-20">
      <h1 className="text-center text-2xl font-bold">NEW ONES</h1>

      {/* Kategori sekmeleri */}
      <CategoryTabs
        selectedCategory={selectedCategory}
        onSelectCategory={(category) => setSelectedCategory(category)}
      />

      {/* Ürün grid */}
      <ProductGrid selectedCategory={selectedCategory} />

      {/* Explore More Butonu */}
      <ExploreMoreButton />
    </div>
  );
};

export default ProductShowcase;
