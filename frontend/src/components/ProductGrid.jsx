import React from "react";

const ProductCard = ({ product }) => {
  return (
    <div className="flex flex-col items-center p-4">
      <img
        src={product.imageUrl}
        alt={product.name}
        className="h-40 w-32 object-cover rounded-lg"
      />
      <p className="mt-2 text-sm">{product.name}</p>
      <p className="mt-1 text-orange-500 text-lg font-semibold">
        ${product.price}
      </p>
    </div>
  );
};

const ProductGrid = ({ selectedCategory }) => {
  const products = [
    {
      id: 1,
      name: "Short sleeve polo shirt",
      price: 179,
      category: "T-shirt",
      imageUrl: "/images/product1.jpg",
    },
    {
      id: 2,
      name: "Short sleeve polo shirt",
      price: 179,
      category: "T-shirt",
      imageUrl: "/images/product2.jpg",
    },
    {
      id: 3,
      name: "Leather shoes",
      price: 250,
      category: "Shoes",
      imageUrl: "/images/product3.jpg",
    },
    {
      id: 4,
      name: "Jeans jacket",
      price: 150,
      category: "Jeans",
      imageUrl: "/images/product4.jpg",
    },
    // Diğer ürünler...
  ];

  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter((product) => product.category === selectedCategory);

  return (
    <div className="grid grid-cols-2 gap-4">
      {filteredProducts.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductGrid;
