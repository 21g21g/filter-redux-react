import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: "product",
  initialState: {
    item: [],
    count: 0,
  },
  reducers: {
    addtoCart(state, action) {
      const newItem = action.payload;

      const existingItem = state.item.find((item) => item.id === newItem.id);
      if (existingItem) {
        state.count++;
      } else {
        state.item.push({
          id: newItem.id,
          name: newItem.name,
          img: newItem.img,
          description: newItem.description,
        });
      }
    },
  },
});

export const productSliceActions = productSlice.actions;

export default productSlice;
