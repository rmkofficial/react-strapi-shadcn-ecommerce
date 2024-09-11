import React from "react";

const ProductCard = ({ product }) => {
  return (
    <div className="flex flex-col p-2 items-center">
      <img
        src={product.imageUrl || "default-image-path.jpg"}
        alt={product.name}
        className="h-48 w-40 object-cover rounded-lg"
        style={{ objectFit: "cover" }}
      />
      <p className="mt-2 text-xs  text-left w-full">{product.name}</p>
      <p className="mt-1 text-orange-500 text-lg font-semibold text-left w-full">
        ${product.price}
      </p>
    </div>
  );
};

export default ProductCard;
