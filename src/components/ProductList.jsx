import React, { useContext } from "react";
import ProductItem from "./ProductItem";
import { ShopContext } from "../context";

export default function ProductList() {
  const { state, dispatch } = useContext(ShopContext);
  const filteredProducts = state.products.filter((product) =>
    product.name.toLowerCase().includes(state.searchTerm.toLowerCase())
  );
  switch (state.sortBy) {
    case "Price: Low to High":
      filteredProducts.sort((a, b) => a.price - b.price);
      break;
    case "Price: High to Low":
      filteredProducts.sort((a, b) => b.price - a.price);
      break;
    case "Newest":
      filteredProducts.sort((a, b) => b.id - a.id); // Assuming higher ID = newer
      break;
    case "Most Popular":
    default:
      filteredProducts.sort((a, b) => b.rating - a.rating); // assuming rating exists
      break;
  }
  return (
    <div className="lg:col-span-2">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold">Your Products</h2>
        <div className="flex items-center space-x-2">
          <span className="text-sm">Sort by:</span>
          <select
            value={state.sortBy}
            onChange={(e) =>
              dispatch({ type: "SET_SORT_BY", payload: e.target.value })
            }
            className="border rounded-md px-2 py-1 text-sm"
          >
            <option>Most Popular</option>
            <option>Newest</option>
            <option>Price: Low to High</option>
            <option>Price: High to Low</option>
          </select>
        </div>
      </div>

      {/* Products Grid */}
      <div className="product-grid">
        {filteredProducts && filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div key={product.id}>
              <ProductItem product={product} />
            </div>
          ))
        ) : (
          <p>Product not found</p>
        )}
      </div>
    </div>
  );
}
