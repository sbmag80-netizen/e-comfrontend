// redux/store.js
import { configureStore } from "@reduxjs/toolkit";
import { productApi } from "./productapi";

import { authapi } from "./authapi"; // <-- make sure the filename matches exactly (authApi.js)
import authReducer from "./authSlice"; // Import authSlice reducer
import cartReducer from "./cartSlice"; // Import authSlice reducer
import { orderApi } from "./orderApi";

const reduxStore = configureStore({
  reducer: {
        auth: authReducer,
    cart: cartReducer,

    [orderApi.reducerPath]: orderApi.reducer,
    [productApi.reducerPath]: productApi.reducer,
    [authapi.reducerPath]: authapi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productApi.middleware, authapi.middleware,orderApi.middleware),
});

export default reduxStore;