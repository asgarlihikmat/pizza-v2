import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  page: 1,
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
    },
  },
});

export const { setPage, setLimit } = paginateSlice.actions;
export default paginateSlice.reducer;
