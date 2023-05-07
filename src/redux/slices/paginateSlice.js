import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  page: 1,
  limit: 15,
};

export const paginateSlice = createSlice({
  name: "page",
  initialState,
  reducers: {
    setPage(state, action) {
      state.page = action.payload;
    },
    setLimit(state, action) {
      state.limit = action.payload;
      state.page = 1;
    },
  },
});

export const { setPage, setLimit } = paginateSlice.actions;
export default paginateSlice.reducer;
