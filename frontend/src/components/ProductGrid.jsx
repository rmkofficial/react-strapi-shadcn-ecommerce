import React from "react";

const products = [
  {
    id: 1,
    name: "Short sleeve polo shirt",
    price: 179,
    imageUrl: "/images/product1.jpg",
  },
  {
    id: 2,
    name: "Short sleeve polo shirt",
    price: 179,
    imageUrl: "/images/product2.jpg",
  },
  {
    id: 3,
    name: "Short sleeve polo shirt",
    price: 179,
    imageUrl: "/images/product3.jpg",
  },
  {
    id: 4,
    name: "Short sleeve polo shirt",
    price: 179,
    imageUrl: "/images/product4.jpg",
  },
];

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

const ProductGrid = () => {
  return (
    <div className="grid grid-cols-2 gap-4">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductGrid;
