import { createSlice } from "@reduxjs/toolkit";

//Create Initial State
const initialState = {
  products: []
};

//Create the slice with Reducers
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const { id, title, price, img, qty } = action.payload;
      const existingItem = state.products.find((item) => item.id === id)
      if (existingItem) {
        existingItem.qty += 1
      } else {
        state.products.push({ id, title, price, img, qty });
      }
    },
    removeFromCart: (state, action) => {
      const cartId = action.payload;
      state.products = state.products.filter((item) => item.id !== cartId);
    },
    incrementQty: (state, action) => {
      const cartId = action.payload;
      const existingItem = state.products.find((item) => item.id === cartId)
      if (existingItem) {
        existingItem.qty += 1
      }
    },
    decrementQty: (state, action) => {
      const cartId = action.payload;
      const existingItem = state.products.find((item) => item.id === cartId)
      if (existingItem && existingItem.qty > 1) {
        existingItem.qty -= 1
      }
    },
    restCart: (state) => {
      state.products = []
    },
  },
});

//export the reducers(actions)
export const { addToCart, removeFromCart, incrementQty, decrementQty, restCart } = cartSlice.actions;
export default cartSlice.reducer;