/* eslint-disable no-unused-vars */
import { products as productData } from "../data/products";

const initialState = {
  cart: [],
  products: productData,
};
const shopReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      // eslint-disable-next-line no-case-declarations
      const product = state.products.find((p) => p.id === action.payload);
      // eslint-disable-next-line no-case-declarations
      const alreadyInCart = state.cart.find((item) => item.id === product.id);
      if (!product || product.stock === 0 || alreadyInCart) return state;
      return {
        ...state,
        products: state.products.map((p) =>
          p.id === product.id ? { ...p, stock: p.stock - 1 } : p
        ),
        cart: [...state.cart, { ...product, qty: 1 }],
      };

    case "REMOVE_FROM_CART":
      break;
    default:
      return state;
  }
};
export { initialState, shopReducer };
