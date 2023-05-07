import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  page: 1,
  limit: 15,
  pizzaCount: []
};

export const pizzaCountFetch = createAsyncThunk("pizza/pizzaCountStatus",
async () => {
  const { data } = await axios.get(
    `https://644e03da4e86e9a4d8ef5d12.mockapi.io/pizz`
  );
  return data;
})

export const paginateSlice = createSlice({
  name: "page",
  initialState,
  reducers: {
    setPage(state, action) {
      state.page = action.payload;
    },
    setLimit(state, action) {
      state.limit = action.payload;
      
    }
  },
  extraReducers: {
    [pizzaCountFetch.fulfilled]: (state, action) => {
      state.pizzaCount = action.payload;
      state.status = 'success'
    }
   
  },
});

export const { setPage, setLimit } = paginateSlice.actions;
export default paginateSlice.reducer;
