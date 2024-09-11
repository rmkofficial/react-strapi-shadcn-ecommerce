import React from "react";

const categories = ["All", "Shoes", "Jeans", "T-shirt", "Headwear"];

const CategoryTabs = ({ selectedCategory, onSelectCategory }) => {
  return (
    <div className="flex justify-center space-x-4 mt-6 mb-4">
      {categories.map((category, index) => (
        <button
          key={index}
          className={`text-lg font-bold ${
            selectedCategory === category ? "text-orange-500" : "text-gray-500"
          }`}
          onClick={() => onSelectCategory(category)}
        >
          {category}
          {selectedCategory === category && (
            <div className="h-1 w-6 bg-orange-500 mx-auto mt-1 rounded-full"></div>
          )}
        </button>
      ))}
    </div>
  );
};

export default CategoryTabs;
