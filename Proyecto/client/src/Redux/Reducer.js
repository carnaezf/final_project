import { GET_PRODUCTS } from "./actions";

const intialState = {
  products: [],
};

const rootReducer = (state = intialState, action) => {
  switch (action.type) {
    case GET_PRODUCTS:
      return { ...state, products: action.payload };
    default:
      return { ...state };
  }
};

export default rootReducer;
