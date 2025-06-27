import { configureStore } from "@reduxjs/toolkit";
import ProductReducer from "./redux/productSlice";
import cartReducer from "./redux/cartSlice";
export const store = configureStore({
  reducer: {
    product: ProductReducer,
    cart: cartReducer,
   
  },
});
