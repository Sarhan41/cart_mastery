import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addToCart: (state, action) => {
      const isexist = state.items.find((item) => item.id === action.payload.id);
      if (isexist) {
        isexist.quantity += action.payload.quantity;
      } else {
        state.items.push(action.payload);
      }
    },
     removefromCart: (state, action) => {
        const { id } = action.payload;
        state.items = state.items.filter((item) => item.id !== id);
     },

    increment: (state, action) => {
      const item = state.items.find((item) => item.id === action.payload.id);
      if (item) {
        item.quantity += 1;
      }
    },

    decrement: (state, action) => {
      const item = state.items.find((item) => item.id === action.payload.id);
      if (item && item.quantity > 0) {
        item.quantity -= 1;
        if (item.quantity === 0) {
            const { id } = action.payload;
            state.items = state.items.filter((item) => item.id !== id);
          }
      }
    },
  },
});

export const { addToCart, removefromCart, increment, decrement } =
  cartSlice.actions;

export default cartSlice.reducer;
