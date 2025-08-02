import React, { useContext, useReducer } from "react";
import { ShopContext } from "../context";

function CartItem({ cart }) {
  const { state, dispatch } = useContext(ShopContext);
  const { name, image, color, size, price } = cart;
  console.log(cart);

  return (
    <div className="flex items-start space-x-4 pb-4 border-b border-gray-200 mb-4">
      <div className="w-16 h-16 bg-gray-100 rounded flex-shrink-0 flex items-center justify-center">
        <img src={image} alt={name} className="h-full w-auto object-cover" />
      </div>
      <div className="flex-grow">
        <div className="flex justify-between">
          <h3 className="font-medium line-clamp-2">{name}</h3>
          <span
            onClick={() =>
              dispatch({ type: "REMOVE_FROM_CART", payload: cart.id })
            }
            className="text-red-500 text-sm cursor-pointer"
          >
            ×
          </span>
        </div>
        <div className="flex items-center flex-wrap gap-3">
          <p className="text-sm text-gray-500">Size: {size}</p>
          <p className="text-sm text-gray-500">Color: {color}</p>
        </div>
        <div className="flex justify-between items-center mt-2">
          <p className="font-bold">৳{price}</p>
          <div className="flex items-center space-x-2">
            <button
              onClick={() =>
                dispatch({ type: "DECREMENT_QTY", payload: cart.id })
              }
              className="w-6 h-6 cursor-pointer bg-gray-100 rounded flex items-center justify-center"
            >
              −
            </button>
            <span className="text-sm">{cart.qty}</span>
            <button
              onClick={() =>
                dispatch({ type: "INCREMENT_QTY", payload: cart.id })
              }
              disabled={
                (state.products.find((p) => p.id === cart.id)?.stock ?? 0) === 0
              }
              className="w-6 h-6 cursor-pointer disabled:cursor-not-allowed bg-gray-100 rounded flex items-center justify-center"
            >
              +
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
