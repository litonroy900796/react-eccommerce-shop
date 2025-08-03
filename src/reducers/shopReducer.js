/* eslint-disable no-unused-vars */
import { products as productData } from "../data/products";

const initialState = {
  cart: [],
  products: productData,
  searchTerm: "",
  sortBy: "Most Popular",
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
      // eslint-disable-next-line no-case-declarations
      const itemToRemove = state.cart.find(
        (item) => item.id === action.payload
      );
      if (!itemToRemove) return state;

      return {
        ...state,
        products: state.products.map((p) =>
          p.id === itemToRemove.id
            ? { ...p, stock: p.stock + itemToRemove.qty } // restore full qty
            : p
        ),
        cart: state.cart.filter((item) => item.id !== action.payload),
      };

    case "INCREMENT_QTY":
      return {
        ...state,
        products: state.products.map((p) =>
          p.id === action.payload && p.stock > 0
            ? { ...p, stock: p.stock - 1 }
            : p
        ),
        cart: state.cart.map((item) =>
          item.id === action.payload &&
          state.products.find((p) => p.id === item.id)?.stock > 0
            ? { ...item, qty: item.qty + 1 }
            : item
        ),
      };
    case "DECREMENT_QTY":
      return {
        ...state,
        products: state.products.map((p) =>
          p.id === action.payload ? { ...p, stock: p.stock + 1 } : p
        ),
        cart: state.cart
          .map((item) =>
            item.id === action.payload ? { ...item, qty: item.qty - 1 } : item
          )
          .filter((item) => item.qty > 0), // remove from cart if qty becomes 0
      };
    case "SET_SEARCH_TERM":
      return {
        ...state,
        searchTerm: action.payload,
      };
    case "SET_SORT_BY":
      return {
        ...state,
        sortBy: action.payload,
      };
    default:
      return state;
  }
};
export { initialState, shopReducer };
