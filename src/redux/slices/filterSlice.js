import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  filter: "",
  sort: {}
};

export const filterSlice = createSlice({
  name: "pizza",
  initialState,
  reducers: {
    setFilter(state, action) {
      state.filter = action.payload;
    },
    setSort(state,action){
      state.sort = action.payload;
    }
  },
});

export const { setFilter,setSort } = filterSlice.actions;
export default filterSlice.reducer;
