import { GET_PRODUCTS, GET_PRODUCTS_DETAIL, GET_PRODUCTS_CATEGORY } from "./actions";

const intialState = {
  products: [],
  productsDetail: [],
};

const rootReducer = (state = intialState, action) => {
  switch (action.type) {
    case GET_PRODUCTS:
      return {
        ...state,
        products: action.payload,
      };

    case GET_PRODUCTS_DETAIL:
      return {
        ...state,
        productsDetail: action.payload,
      };
    default:
      return { ...state };

    case GET_PRODUCTS_CATEGORY:
      return{
        ...state,
        productsCategory: action.payload,
      };
    
    // case GET_PRODUCTS_SEARCH:
    //   return{
    //     ...state,
    //     productsSearch: action.payload,
    //   };
  }
};

export default rootReducer;
