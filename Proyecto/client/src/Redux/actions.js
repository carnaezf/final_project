import axios from "axios";
// import { combineReducers } from "redux";
// import { GET_PRODUCTS } from "./actionType";

import { func } from "prop-types";
export const GET_PRODUCTS = "GET_PRODUCTS";
export const GET_PRODUCTS_DETAIL = "GET_PRODUCTS_DETAIL";

export const getProducts = () => {
  return async function (dispatch) {
    const product = await axios.get("http://localhost:3001/products");
    const allProducts = product.data;
    dispatch({ type: GET_PRODUCTS, payload: allProducts });
  };
};

export const getProductsDetail = (payload) => {
  return async function (dispatch) {
    try {
      const product = await axios.get(
        `http://localhost:3001/products/${payload}`
      );
      console.log(product);
      const detailProduct = product.data;
      dispatch({
        type: GET_PRODUCTS_DETAIL,
        payload: detailProduct,
      });
    } catch (error) {
      // console.log(error);
    }
  };
};
