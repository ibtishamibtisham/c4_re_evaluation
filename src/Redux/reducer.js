import { PRODUCTFALIURE, PRODUCTREQ, PRODUCTSUCCESS } from "./actionTypes";
const initState = {
  products: [],
  isLoading: false,
  isError: false,
};

export const Reducer = (state = initState, { type, payload }) => {
  // add the switch statement for different actions
  switch (type) {
    case PRODUCTSUCCESS:
      return { ...state, products: payload };
    default:
      return state;
  }
};
