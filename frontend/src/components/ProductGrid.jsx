import React, { useEffect, useState } from "react";
import axios from "axios";

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
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(
          "http://localhost:1337/api/products?populate=*"
        );

        const productsData = response.data.data.map((product) => ({
          id: product.id,
          name: product.attributes.name,
          price: product.attributes.price,
          category: product.attributes.category,
          imageUrl: `http://localhost:1337${product.attributes.image?.data?.attributes?.url}`,
        }));

        setProducts(productsData);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

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
