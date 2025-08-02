import React, { useContext } from "react";
import ProductItem from "./ProductItem";
import { ShopContext } from "../context";

export default function ProductList() {
  const { state, dispatch } = useContext(ShopContext);
  console.log("state", state);

  return (
    <div className="lg:col-span-2">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold">Your Products</h2>
        <div className="flex items-center space-x-2">
          <span className="text-sm">Sort by:</span>
          <select className="border rounded-md px-2 py-1 text-sm">
            <option>Most Popular</option>
            <option>Newest</option>
            <option>Price: Low to High</option>
            <option>Price: High to Low</option>
          </select>
        </div>
      </div>

      {/* Products Grid */}
      <div className="product-grid">
        {state.products && state.products.length > 0 ? (
          state.products.map((product) => (
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
