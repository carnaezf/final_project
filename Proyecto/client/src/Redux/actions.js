import axios from "axios";
// import { combineReducers } from "redux";
// import { GET_PRODUCTS } from "./actionType";
export const GET_PRODUCTS = "GET_PRODUCTS";
export const GET_PRODUCTS_DETAIL = "GET_PRODUCTS_DETAIL";
export const GET_PRODUCTS_CATEGORY = "GET_PRODUCTS_CATEGORY";
export const FILTER_BY_NAME = "FILTER_BY_NAME";
export const FILTER_BY_GENRES = "FILTER_BY_GENRES";
export const FILTER_BY_PRICE = "FILTER_BY_ACCESSORIES_PRICE";




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

export const getCategory = (payload) => {
  return async function (dispatch) {
    const productCategory = await axios.get(`http://localhost:3001/products/category/${payload}`);
    const allProductsCategory = productCategory.data;
    dispatch({ type: GET_PRODUCTS_CATEGORY, payload: allProductsCategory });
  };
};

export const filterByName= (payload)=>{
  return async function (dispatch){
    try {
      const baseData= await axios.get(`http://localhost:3001/products/search?name=${payload}`);
      const productsName= baseData.data;
      dispatch({type: FILTER_BY_NAME, payload:productsName});
          
    } catch (error) {
      alert("No se encontro el Producto Buscado");
          
    }
    
  }

};

export const filterByGenres= (payload)=>{
  return async function (dispatch){
    if(payload !=="select"){
      dispatch({type: FILTER_BY_GENRES, payload: payload});
    }
    else{
      alert("Selccione un Opcion")
    }
    
  }
};
export const filterByPrice= (payload)=>{
  return async function (dispatch){
    if(payload !=="select"){
      dispatch({type: FILTER_BY_PRICE, payload: payload});
    }
    else{
      alert("Selccione un Opcion")
    }
    
  }
};

export const postUsers=(payload)=>{
  return async function(){
    try {
      const baseData= await axios.post(`http://localhost:3001/user`,payload);
      //return baseData;

    } catch (error) {
      alert({ error: error.message })
      
    }

  }
}
export const loginUsers=(payload)=>{
  return async function(dispatch){
    try {
      const baseData= await axios.post(`http://localhost:3001/user/signin`,payload);
      //return baseData;
      

    } catch (error) {
      alert({ error: error.message })
      
    }

  }
}


