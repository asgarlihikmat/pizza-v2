import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  ordered: [],
};

export const orderedSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    setOrderedPizza(state, action) {
    state.ordered.push([...action.payload])
    },
  },
});

export const { setOrderedPizza } = orderedSlice.actions;
export default orderedSlice.reducer;
