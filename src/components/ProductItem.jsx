import React, { useContext } from "react";
import { ShopContext } from "../context";

function ProductItem({ product }) {
  const { state, dispatch } = useContext(ShopContext);
  return (
    <div className="bg-gray-100 rounded-lg overflow-hidden transition-transform hover:scale-[1.02] duration-300">
      <div className="h-48 bg-gray-200 flex items-center justify-center">
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-auto object-cover"
        />
      </div>
      <div className="p-4">
        <h3 className="font-medium">{product.name}</h3>
        <div className="flex items-center justify-between">
          <div className="flex items-center my-1">
            <div className="flex text-yellow-400">
              <span>★</span>
              <span>★</span>
              <span>★</span>
              <span>★</span>
              <span className="text-gray-300">★</span>
            </div>
            <span className="text-xs text-gray-500 ml-1">
              {product.rating}/5
            </span>
          </div>
          <span className="text-xs text-gray-700">
            ({product.stock} pcs left)
          </span>
        </div>
        <p className="font-bold">৳{product.price}</p>
        <button
          onClick={() => dispatch({ type: "ADD_TO_CART", payload: product.id })}
          className="w-full mt-2 bg-red-800 py-1 text-gray-100 rounded flex items-center justify-center"
        >
          Add from Cart
        </button>
      </div>
    </div>
  );
}

export default ProductItem;
