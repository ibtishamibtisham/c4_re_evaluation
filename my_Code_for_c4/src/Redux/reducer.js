import {
  PRODUCTFALIURE,
  PRODUCTREQ,
  PRODUCTSUCCESS,
  SORTPRODUCTS,
  VALUE,
} from "./actionTypes";
const initState = {
  products: [],
  isLoading: false,
  isError: false,
  //   val: "",
  sorted: [],
};

export const Reducer = (state = initState, { type, payload }) => {
  // add the switch statement for different actions
  switch (type) {
    case PRODUCTSUCCESS:
      return { ...state, products: payload };
    case SORTPRODUCTS:
      return {
        ...state,
        sorted: payload.data.sort((a, b) => {
          if (payload.name == "asc") {
            if (a.price < b.price) {
              return -1;
            } else {
              return 1;
            }
          } else if (payload.name == "desc") {
            if (a.price > b.price) {
              return -1;
            } else {
              return 1;
            }
          }
        }),
      };

    default:
      return state;
  }
};
