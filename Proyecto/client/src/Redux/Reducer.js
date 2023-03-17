import { GET_PRODUCTS, GET_PRODUCTS_DETAIL } from "./actions";

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
  }
};

export default rootReducer;
