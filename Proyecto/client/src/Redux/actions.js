// import { combineReducers } from "redux";
// import { GET_PRODUCTS } from "./actionType";

export const GET_PRODUCTS = "GET_PRODUCTS";


export const getProducts = () => {
  return function (dispatch) {
    const allProducts = array;
    dispatch({ type: GET_PRODUCTS, payload: allProducts });
  };
};
