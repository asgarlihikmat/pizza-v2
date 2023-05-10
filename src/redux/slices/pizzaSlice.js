import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  pizza: [],
  like: [],
  status: 'loading',
  render: ''
};

export const fetchPizzas = createAsyncThunk(
  "pizza/fetchPizzasStatus",
  async (params) => {
    const { category, filters, sortPizza, pagesAndLimit } = params;
    const { data } = await axios.get(
      `https://644e03da4e86e9a4d8ef5d12.mockapi.io/pizz?${category}${filters}${sortPizza}${pagesAndLimit}`
    );
    return data;
  }
);

export const postPizzas = createAsyncThunk(
  "pizza/postPizzasStatus",
  async (add) => {
    axios.post('https://644e03da4e86e9a4d8ef5d12.mockapi.io/pizz',add)
    
  }
);
export const updatePizza = createAsyncThunk(
  "pizza/updatePizzasStatus",
  async (item) => {
    axios.put(`https://644e03da4e86e9a4d8ef5d12.mockapi.io/pizz/${item.id}`,item);
    
  }
);

export const deletePizza = createAsyncThunk(
  "pizza/deletePizzasStatus",
  async (item) => {
    axios.delete('https://644e03da4e86e9a4d8ef5d12.mockapi.io/pizz/'+ item,)
    
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
  },
  extraReducers: {
    [fetchPizzas.pending]: (state) => {
      state.pizza = [];
      state.status = 'loading'
    },
    [fetchPizzas.fulfilled]: (state, action) => {
      state.pizza = action.payload;
      state.status = 'success'
    },
    [fetchPizzas.rejected]: (state) => {
      state.pizza = [];
      state.status = 'error'
    },
  },
});

export const { getAllPizzas, setLike } = pizzaSlice.actions;
export default pizzaSlice.reducer;
