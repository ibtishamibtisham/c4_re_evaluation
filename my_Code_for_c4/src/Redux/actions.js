import {
  PRODUCTFALIURE,
  PRODUCTREQ,
  PRODUCTSUCCESS,
  SORTPRODUCTS,
  VALUE,
} from "./actionTypes";
import axios from "axios";
// action for get products request
const getProductsReq = () => ({
  type: PRODUCTREQ,
});

// action for get products success

const getProductsSuccess = (data) => ({
  type: PRODUCTSUCCESS,
  payload: data,
});

// action for get products failure

const getProductsFailure = () => ({
  type: PRODUCTFALIURE,
});

// thunk call to fetch products  list
export const getproductsData = () => (dispatch) => {
  dispatch(getProductsReq());
  axios
    .get("https://movie-fake-server.herokuapp.com/products")
    .then((res) => {
      dispatch(getProductsSuccess(res.data));
    })
    .catch(() => {
      dispatch(getProductsFailure());
    });
};

// action object for sort  feature

export const sortProducts = (data) => ({
  type: SORTPRODUCTS,
  payload: data,
});
export const getvalue = (data) => ({
  type: VALUE,
  data,
});
