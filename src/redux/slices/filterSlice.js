import { createSlice } from "@reduxjs/toolkit";

const initialState = {
 
  sort: {}
};

export const filterSlice = createSlice({
  name: "pizza",
  initialState,
  reducers: {
 
    setSort(state,action){
      state.sort = action.payload;
    }
  },
});

export const { setSort } = filterSlice.actions;
export default filterSlice.reducer;
