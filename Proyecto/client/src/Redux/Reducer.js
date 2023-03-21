import {
  GET_PRODUCTS,
  GET_PRODUCTS_DETAIL,
  GET_PRODUCTS_CATEGORY,
  FILTER_BY_NAME,
} from "./actions";

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
      
          
    default: return { ...state };
  } 
}
export default rootReducer;
