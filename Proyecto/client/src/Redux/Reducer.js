import {
  GET_PRODUCTS,
  GET_PRODUCTS_DETAIL,
  GET_PRODUCTS_CATEGORY,
  FILTER_BY_NAME,
  FILTER_BY_ACCESSORIES_GENRES,
  FILTER_BY_PRICE,
} from "./actions";

const intialState = {
  products: [],
  productsDetail: [],
  productsCategory: [],
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
      
    case GET_PRODUCTS_CATEGORY:
      return {
        ...state,
        productsCategory: action.payload,
      };

    case FILTER_BY_NAME:
      const namePrudutsId = action.payload.map((c) => c.id);
      const numId = [];
          
      state.products.filter((e) => namePrudutsId.includes(e.id) && numId.push(e)); //traigo mi estado general
            
      return { ...state, products: numId };
      
    case FILTER_BY_ACCESSORIES_GENRES:
      
      return {...state, productsCategory: action.payload}
      
    case FILTER_BY_PRICE:
    default: return { ...state };
  } 
}
export default rootReducer;
