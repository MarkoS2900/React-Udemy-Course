import { configureStore } from "@reduxjs/toolkit";
import { uiReducer } from "../components/UI/uiSlice";
import { cartReducer } from "../components/Cart/CartSlice";

const store = configureStore({
  reducer: {
    ui: uiReducer,
    cart: cartReducer,
  },
});

export default store;
