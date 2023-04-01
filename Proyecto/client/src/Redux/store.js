// import { createStore, applyMiddleware, compose } from "redux";
// // import { composeWithDevTools } from "redux-devtools-extension";
// import thunkMiddleware from "redux-thunk";
// import rootReducer from "./reducer";

// const composeEnhancer = window.REDUX_DEVTOOLS_EXTENSION_COMPOSE || compose();

// const store = createStore(
//   rootReducer,
//   composeEnhancer(applyMiddleware(thunkMiddleware))
// );

// export default store;

import { createStore, applyMiddleware, compose } from "redux";
import thunkMiddleware from "redux-thunk";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import rootReducer from "./reducer";

const persistConfig = {
  key: "root",
  storage: storage,
  whitelist: ["user"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const composeEnhancer = window.REDUX_DEVTOOLS_EXTENSION_COMPOSE || compose;

export const store = createStore(
  persistedReducer,
  composeEnhancer(applyMiddleware(thunkMiddleware))
);

export const persistor = persistStore(store);
