import React, { useState, useEffect } from "react";
import { fetchProducts } from "../api/api";
import ProductCard from "./ProductCard";

const ProductGrid = ({ selectedCategory }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const productsData = await fetchProducts();
        setProducts(productsData);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    getProducts();
  }, []);

  const getProductsForAllTab = (products) => {
    // Kategorilere göre ürünleri gruplandırma
    const groupedProducts = products.reduce((acc, product) => {
      if (!acc[product.category]) {
        acc[product.category] = [];
      }
      acc[product.category].push(product);
      return acc;
    }, {});

    const selectedProducts = Object.values(groupedProducts).map(
      (categoryProducts) => categoryProducts[0]
    );

    return selectedProducts;
  };

  // Seçilen kategoriye göre ürünleri filtreleme
  const filteredProducts =
    selectedCategory === "All"
      ? getProductsForAllTab(products) // Her kategoriden bir ürün
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
