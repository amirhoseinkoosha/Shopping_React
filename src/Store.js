import {
  legacy_createStore as createstore,
  combineReducers,
  applyMiddleware,
} from "redux";
import { ProductDetailReducer, ProductReducer } from "./reducer/ProductReducer";
import { thunk } from "redux-thunk";
import { cartreducer } from "./reducer/cartreducer";
const reducer = combineReducers({
  productList: ProductReducer,
  productDetail: ProductDetailReducer,
  cart: cartreducer,
});
const cartItemsFromLocalStorage = localStorage.getItem("Cartitems")
  ? JSON.parse(localStorage.getItem("Cartitems"))
  : [];
const initialstate = {
  cart: { cardItem: cartItemsFromLocalStorage },
};
console.log(reducer.cart);
const midleware = [thunk];
const store = createstore(reducer, initialstate, applyMiddleware(...midleware));
export default store;
