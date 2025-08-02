import { products as productData } from "../data/products";

const initialState = {
  cart: [],
  products: productData,
};
const shopReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      break;
    case "REMOVE_FROM_CART":
      break;
    default:
      return state;
  }
};
export { initialState, shopReducer };
