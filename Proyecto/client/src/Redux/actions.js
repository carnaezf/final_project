import axios from "axios";
// import { combineReducers } from "redux";
// import { GET_PRODUCTS } from "./actionType";
export const GET_PRODUCTS = "GET_PRODUCTS";
export const GET_PRODUCTS_DETAIL = "GET_PRODUCTS_DETAIL";
export const GET_PRODUCTS_CATEGORY = "GET_PRODUCTS_CATEGORY";
export const FILTER_BY_NAME = "FILTER_BY_NAME";
export const FILTER_BY_GENRES = "FILTER_BY_GENRES";
export const FILTER_BY_PRICE = "FILTER_BY_PRICE";
export const FILTER_BY_PRICE_ALL_PRODUCTS = "FILTER_BY_PRICE_ALL_PRODUCTS";
// export const FILTER_BY_SIZE = "FILTER_BY_SIZE";
export const GET_USERS = "GET_USERS";
export const BANNED = "BANNED";
export const GET_PRODUCTS_ADMIN = "GET_PRODUCTS_ADMIN";
export const GET_ORDERS = "GET_ORDERS";
export const GET_USER_ID = "GET_USER_ID";

export const getProducts = () => {
  return async function (dispatch) {
    const product = await axios.get("http://finalproject-production-58fc.up.railway.app/products/help");
    const allProducts = product.data;
    dispatch({ type: GET_PRODUCTS, payload: allProducts });
  };
};

export const getProductsAdmin = () => {
  return async function (dispatch) {
    const product = await axios.get("/products");
    const allProducts = product.data;
    dispatch({ type: GET_PRODUCTS_ADMIN, payload: allProducts });
  };
};

export const getProductsDetail = (payload) => {
  return async function (dispatch) {
    try {
      const product = await axios.get(
        `/products/${payload}`
      );
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

export const getCategory = (payload) => {
  return async function (dispatch) {
    const productCategory = await axios.get(
      `/products/category/${payload}`
    );
    const allProductsCategory = productCategory.data;
    dispatch({ type: GET_PRODUCTS_CATEGORY, payload: allProductsCategory });
  };
};

export const filterByName = (payload) => {
  return async function (dispatch) {
    try {
      const baseData = await axios.get(
        `/products/search?name=${payload}`
      );
      const productsName = baseData.data;
      dispatch({ type: FILTER_BY_NAME, payload: productsName });
    } catch (error) {
      alert("No se encontro el Producto Buscado");
    }
  };
};

export const filterByGenres = (payload) => {
  return async function (dispatch) {
    if (payload !== "select") {
      dispatch({ type: FILTER_BY_GENRES, payload: payload });
    } else {
      alert("Selccione un Opcion");
    }
  };
};
export const filterByPrice = (payload) => {
  return async function (dispatch) {
    if (payload !== "select") {
      dispatch({ type: FILTER_BY_PRICE, payload: payload });
    } else {
      alert("Selccione un Opcion");
    }
  };
};
export const filterByPriceAllProducts = (payload) => {
  return async function (dispatch) {
    if (payload !== "select") {
      dispatch({ type: FILTER_BY_PRICE_ALL_PRODUCTS, payload: payload });
    } else {
      alert("Selccione un Opcion");
    }
  };
};
// export const filterBySize = (payload) => {
//   return async function (dispatch) {
//     if (payload !== "select") {
//       dispatch({ type: FILTER_BY_SIZE, payload: payload });
//     } else {
//       alert("Selccione un Opcion");
//     }
//   };
// };

export const postUsers = (payload) => {
  return async function () {
    try {
      const baseData = await axios.post(`/user`, payload);
      //return baseData;
    } catch (error) {
      alert({ error: error.message });
    }
  };
};

export const getUsers = () => {
  return async function (dispatch) {
    const user = await axios.get("/user");
    const allUsers = user.data;
    dispatch({ type: GET_USERS, payload: allUsers });
  };
};

export const loginUsers = (payload) => {
  return async function (dispatch) {
    try {
      const baseData = await axios.post(
        `/user/signin`,
        payload
      );
      dispatch({ type: "LOGIN", payload: baseData.data });
    } catch (error) {
      console.log(error.response.data);
      dispatch({ type: "LOGIN", payload: error.response.data });
    }
  };
};

export const logoutUsers = () => {
  return async function (dispatch) {
    try {
      dispatch({ type: "LOGOUT" });
    } catch (error) {
      console.log(error);
    }
  };
};

export const userban = (id) => {
  return async function (dispatch) {
    try {
      const baseData = await axios.put(`/user/${id}/ban`);
      dispatch({ type: BANNED, payload: baseData });
    } catch (error) {
      alert({ error: error.message });
    }
  };
};
export const productban = (id) => {
  return async function (dispatch) {
    try {
      const baseData = await axios.put(
        `/product/${id}/ban`
      );
      dispatch({ type: BANNED, payload: baseData });
    } catch (error) {
      alert({ error: error.message });
    }
  };
};

export const doModerator = (id) => {
  return async function (dispatch) {
    try {
      const baseData = await axios.put(`/admin/${id}`);
      dispatch({ type: BANNED, payload: baseData });
    } catch (error) {
      alert({ error: error.message });
    }
  };
};

export const getOrders = () => {
  return async function (dispatch) {
    const order = await axios.get("/order");
    const allOrders = order.data;
    dispatch({ type: "GET_ORDERS", payload: allOrders });
  };
};

export const getUserbyId = (id) => {
  return async function (dispatch) {
    try {
      const baseData = await axios.get(`/user/${id}`);
      dispatch({ type: "GET_USER_ID", payload: baseData.data });
    } catch (error) {
      alert({ error: error.message });
    }
  };
};

export const postComment = (payload) => {
  return async function () {
    try {
      const baseData = await axios.post(
        `/products/addComment`,
        payload
      );
    } catch (error) {
      alert({ error: error.message });
    }
  };
};
export const loginGoogle = (payload) => {
  return async function (dispatch) {
    try {
      const baseData = await axios.post(
        `/user/signin/google`,
        payload
      );
      dispatch({ type: "LOGIN", payload: baseData.data });
    } catch (error) {
      console.log(error.response.data);
      //   dispatch({ type: "LOGIN", payload: error.response.data });
    }
  };
};
