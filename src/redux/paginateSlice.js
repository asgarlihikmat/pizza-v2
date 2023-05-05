import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  page: 0,
  limit: 12,
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
      state.page = 0;
    },
  },
});

export const { setPage, setLimit } = paginateSlice.actions;
export default paginateSlice.reducer;
