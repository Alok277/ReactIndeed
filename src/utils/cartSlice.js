import { createSlice, current } from "@reduxjs/toolkit";
const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItems: (state, action) => {
      console.log(current(state))
      state.items.push(action.payload);
    },
    removeItem: (state, action) => {
      state.items.pop();
    },
    removeAllItems: (state, action) => {
      state.items.length = 0;
    },
  },
});

export const { addItems, removeAllItems, removeItem } = cartSlice.actions;
export default cartSlice.reducer;
