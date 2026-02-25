import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const existing = state.items.find(item => item._id === action.payload._id);
      if (existing) {
        existing.quantity += 1;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
    },
    increaseQty: (state, action) => {
      const item = state.items.find(i => i._id === action.payload.id);
      if (item) item.quantity += 1;
    },
    decreaseQty: (state, action) => {
      const item = state.items.find(i => i._id === action.payload.id);
      if (item && item.quantity > 1) item.quantity -= 1;
    },
    removeItem: (state, action) => {
      state.items = state.items.filter(i => i._id !== action.payload);
    },
    clearCart: (state) => {
      state.items = [];
    },
  },
});

export const { addToCart, increaseQty, decreaseQty, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;