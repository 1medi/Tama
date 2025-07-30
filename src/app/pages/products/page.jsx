"use client";

import { useState } from "react";
import Header from "../../../components/header";
import Footer from "@/components/footer";
const allProducts = [
  { name: "Fresh Kangkong", price: "$2.99/bunch", category: "Vegetables" },
  { name: "Pancit Canton Noodles", price: "$1.49", category: "Pantry" },
  { name: "Ube Ice Cream", price: "$6.99", category: "Frozen" },
  { name: "Jasmine Rice 25lbs", price: "$24.99", category: "Rice & Grains" },
  { name: "Fish Sauce (Patis)", price: "$3.49", category: "Condiments" },
  { name: "Fresh Durian", price: "$12.99/kg", category: "Fruits" },
];

const categories = ["All", ...new Set(allProducts.map((p) => p.category))];

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProducts =
    selectedCategory === "All"
      ? allProducts
      : allProducts.filter((p) => p.category === selectedCategory);

  return (
    <>
      <Header />
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-center mb-8 text-foreground">
          All Products
        </h1>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 text-sm rounded-full border ${
                selectedCategory === category
                  ? "bg-primary text-white"
                  : "bg-background text-foreground hover:bg-muted"
              } transition`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product, index) => (
            <div
              key={index}
              className="border rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="flex justify-between items-start mb-3">
                <span className="text-xs px-2 py-1 border rounded text-muted-foreground">
                  {product.category}
                </span>
                <span className="text-muted-foreground cursor-pointer">♡</span>
              </div>
              <h3 className="font-semibold text-foreground mb-2">
                {product.name}
              </h3>
              <p className="text-lg font-bold text-primary">{product.price}</p>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}
