import { combineReducers } from "redux";

import { cartReducer } from "./reducer";
import {
  addProductReducer,
  getProductDetailsReducer,
  getProductsReducer,
  // getProductsReducerAdmin,
  userReducer,
} from "./reducer";

const rootReducer = combineReducers({
  cart: cartReducer,
  initProducts: getProductsReducer,
  getProductDetails: getProductDetailsReducer,
  addProductReducer,
  user: userReducer,
});

export default rootReducer;
