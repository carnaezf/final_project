import {
  GET_PRODUCTS,
  GET_PRODUCTS_DETAIL,
  GET_PRODUCTS_CATEGORY,
  FILTER_BY_NAME,
  FILTER_BY_GENRES,
  //FILTER_BY_ACCESSORIES_PRICE,
  FILTER_BY_PRICE,
  GET_USERS,
  BANNED,
  GET_PRODUCTS_ADMIN,
  GET_ORDERS,
  GET_USER_ID,
} from "./actions";

const intialState = {
  products: [],
  productsAdmin: [],
  productsDetail: [],
  productsCategory: [],
  filterGenre: [],
  filterPrice: [],
  users: [],
  user: [],
  orders: [],
  userId: [],
};

const rootReducer = (state = intialState, action) => {
  switch (action.type) {
    case GET_PRODUCTS:
      return {
        ...state,
        products: action.payload.filter((e) => e.show === true),
      };
    case GET_PRODUCTS_ADMIN:
      return {
        ...state,
        productsAdmin: action.payload,
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
        filterGenre: action.payload,
        filterPrice: action.payload,
      };

    case FILTER_BY_NAME:
      const namePrudutsId = action.payload.map((c) => c.id);
      const numId = [];

      state.products.filter(
        (e) => namePrudutsId.includes(e.id) && numId.push(e)
      ); //traigo mi estado general

      return { ...state, products: numId };

    case FILTER_BY_GENRES:
      const filterAccessories = [];
      const nameAccessories = state.productsCategory.map((a) => {
        if (a.breadcrumbs === action.payload) return a.id;
      });

      state.productsCategory.filter(
        (e) => nameAccessories.includes(e.id) && filterAccessories.push(e)
      );

      return {
        ...state,
        filterGenre: filterAccessories,
        filterPrice: filterAccessories,
      };

    case FILTER_BY_PRICE:
      const filterPrice = [];
      if (action.payload === "lower price") {
        const priceAccessories = state.filterGenre.map((a) => {
          if (a.sellingPrice > 0 && a.sellingPrice <= 20) {
            filterPrice.push(a);
          }
        });
      }

      if (action.payload === "half price") {
        const priceAccessories = state.filterGenre.map((a) => {
          if (a.sellingPrice > 20 && a.sellingPrice <= 60) {
            filterPrice.push(a);
          }
        });
      }

      if (action.payload === "higher price") {
        const priceAccessories = state.filterGenre.map((a) => {
          if (a.sellingPrice > 60) {
            filterPrice.push(a);
          }
        });
      }

      return { ...state, filterPrice: filterPrice };

    case GET_USERS:
      return {
        ...state,
        users: action.payload,
      };

    case "LOGIN":
      return {
        ...state,
        user: action.payload,
      };

    case "LOGOUT":
      return {
        ...state,
        user: [],
      };

    case GET_USERS:
      return {
        ...state,
        users: action.payload,
      };
    case BANNED:
      return {
        ...state,
      };
    case GET_ORDERS:
      return {
        ...state,
        orders: action.payload,
      };
    case GET_USER_ID:
      return {
        ...state,
        userId: action.payload,
      };
    default:
      return { ...state };
  }
};
export default rootReducer;
