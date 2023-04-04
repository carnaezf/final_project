import {
  GET_PRODUCTS,
  GET_PRODUCTS_DETAIL,
  GET_PRODUCTS_CATEGORY,
  FILTER_BY_NAME,
  FILTER_BY_GENRES,
  FILTER_BY_PRICE,
  FILTER_BY_PRICE_ALL_PRODUCTS,
  // FILTER_BY_SIZE,
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
  filterPriceAllProducts: [],
  // filterSize: [],
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
        filterPriceAllProducts:action.payload.filter((e) => e.show === true) 
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
        // filterSize: action.payload,
      };

    case FILTER_BY_NAME:
      const namePrudutsId = action.payload.map((c) => c.id);
      const numId = [];

      state.products.filter(
        (e) => namePrudutsId.includes(e.id) && numId.push(e)
      ); //traigo mi estado general

      return { ...state, products: numId };

    case FILTER_BY_GENRES:
      const filterGenres = [];
      const nameGenres = state.productsCategory.map((a) => {
        if (a.breadcrumbs === action.payload) return a.id;
      });

      state.productsCategory.filter(
        (e) => nameGenres.includes(e.id) && filterGenres.push(e)
      );

      return {
        ...state,
        filterGenre: filterGenres,
        filterPrice: filterGenres,
        // filterSize: filterGenres,
      };

    case FILTER_BY_PRICE:
      const filterPrice = [];
      if (action.payload === "lower price") {
        const priceProduct = state.filterGenre.map((a) => {
          if (a.sellingPrice > 0 && a.sellingPrice <= 20) {
            filterPrice.push(a);
          }
        });
      }

      if (action.payload === "half price") {
        const priceProduct = state.filterGenre.map((a) => {
          if (a.sellingPrice > 20 && a.sellingPrice <= 60) {
            filterPrice.push(a);
          }
        });
      }

      if (action.payload === "higher price") {
        const priceProduct = state.filterGenre.map((a) => {
          if (a.sellingPrice > 60) {
            filterPrice.push(a);
          }
        });
      }



      return { ...state, filterPrice: filterPrice,  filterSize: filterPrice};

    // case FILTER_BY_SIZE:
    //   const filterSize = [];
    //   if (action.payload === "small") {
    //     const priceProduct = state.filterPrice.map((a) => {
    //       if (a.availability[0]){
    //         filterSize.push(a);
    //       }
    //     });
    //   }
    //   return { ...state,filterSize: filterSize};
    case FILTER_BY_PRICE_ALL_PRODUCTS:
      //const filterPrice = [];
      const filterPriceAllProducts = [];
      if (action.payload === "lower price") {
        const priceProduct = state.products.map((a) => {
          if (a.sellingPrice > 0 && a.sellingPrice <= 20) {
            filterPriceAllProducts.push(a);
          }
        });
      }

      if (action.payload === "half price") {
        const priceProduct = state.products.map((a) => {
          if (a.sellingPrice > 20 && a.sellingPrice <= 60) {
            filterPriceAllProducts.push(a);
          }
        });
      }
      if (action.payload === "medium high price") {
        const priceProduct = state.products.map((a) => {
          if (a.sellingPrice > 60 && a.sellingPrice <= 100) {
            filterPriceAllProducts.push(a);
          }
        });
      }

      if (action.payload === "higher price") {
        const priceProduct = state.products.map((a) => {
          if (a.sellingPrice > 100) {
            filterPriceAllProducts.push(a);
          }
        });
      }


      return { ...state, filterPriceAllProducts: filterPriceAllProducts};

      
    



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
