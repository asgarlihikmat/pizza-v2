import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  pizza: [],
  like: [],
  status: 'loading',
  page: 1,
  limit: 15
};

export const fetchPizzas = createAsyncThunk(
  "pizza/fetchPizzasStatus",
  async (params) => {
    const { category,filters:filter, page,limit,sort } = params;

    const categoryId = category > 0 ? `category=${category}` : "";
    const filters = filter ? `&search=${filter}` : "";
    const pagesAndLimit = limit === 15 ? '' : `&page=${page}&limit=${limit}`;
    const sortPizza = sort.name ? `&sortby=${sort.nameType}&order=${sort.type}` : "";

    const { data } = await axios.get(
      `https://644e03da4e86e9a4d8ef5d12.mockapi.io/pizz?${categoryId}${filters}${sortPizza}${pagesAndLimit}`
    );
    return data; 
    
  } 
);




export const pizzaSlice = createSlice({
  name: "pizza",
  initialState,
  reducers: {
    getAllPizzas(state, action) {
      state.pizza = action.payload;
    },
    setLike(state, action) {
      const newState = state.pizza.find((obj) => obj.id === action.payload);
      newState.like = 1;
      if (newState) {
        const newLiked = state.like.find((obj) => obj.id === newState.id);

        if (newLiked) {
          const objWithIdIndex = state.like.findIndex(
            (obj) => obj.id === newState.id
          );
          state.like.splice(objWithIdIndex, 1);
          newState.like = 0;
        } else {
          state.like.push(newState);
        }
      } else {
        newState.like = 1;
        state.like.push(newState);
      }
    },
    setPage(state,action){
      state.page = action.payload;
    },
    setLimit(state,action){
      state.limit = action.payload;

    }
  },
  extraReducers: {
    // [fetchPizzas.pending]: (state) => {
    //   state.pizza = [];
    //   state.status = 'loading'
    // },
    [fetchPizzas.fulfilled]: (state, action) => {
      state.pizza = action.payload;
       state.status = 'success'
    },
    // [fetchPizzas.rejected]: (state) => {
    //   state.pizza = [];
    //   state.status = 'error'
    // },
  },
});

export const { getAllPizzas, setLike,setPage,setLimit } = pizzaSlice.actions;
export default pizzaSlice.reducer;
