import React, { useState, useEffect } from "react";
import axios from "axios";
import ProductCard from "./ProductCard";
const ProductGrid = ({ selectedCategory }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(
          "http://localhost:1337/api/products?populate=*"
        );

        const productsData = response.data.data.map((product) => {
          const imageUrl =
            product.attributes.image?.data[0]?.attributes?.url || "";
          return {
            id: product.id,
            name: product.attributes.name,
            price: product.attributes.price,
            category: product.attributes.category,
            imageUrl: `http://localhost:1337${imageUrl}`,
          };
        });

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
    <div className="grid grid-cols-2 gap-2">
      {filteredProducts.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductGrid;
