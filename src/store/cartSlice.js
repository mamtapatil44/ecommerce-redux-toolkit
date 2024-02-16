import { createSlice } from "@reduxjs/toolkit";

;

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartProducts :[]
  },
  reducers: {
    addToCart: (state, action) => {
      state.cartProducts.push(action.payload);
    },
    removeCart: (state, action) => {
      const items = state.cartProducts.filter((item) =>  item.id !== action.payload);
      state.cartProducts =items;
    },
  },
});

export const {addToCart ,removeCart} = cartSlice.actions;
export default cartSlice.reducer;
