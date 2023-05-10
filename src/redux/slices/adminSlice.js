import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  allpizza: [],
  status: 'loading',
};

export const fetchAdminPizzas = createAsyncThunk(
  "pizza/fetchAdminPizzas",
  async () => {
    const { data } = await axios.get(
      'https://644e03da4e86e9a4d8ef5d12.mockapi.io/pizz'
    );
    return data;
  }
);



export const postPizzas = createAsyncThunk(
  "pizza/postAdminPizzas",
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
  "pizza/deleteAdminPizzas",
  async (item) => {
    axios.delete('https://644e03da4e86e9a4d8ef5d12.mockapi.io/pizz/'+ item,)
    
  }
);

export const adminSlice = createSlice({
  name: "admin",
  initialState,
  reducers: {
 
  
  },
  extraReducers: {
    [fetchAdminPizzas.pending]: (state) => {
      state.allpizza = [];
      state.status = 'loading'
    },
    [fetchAdminPizzas.fulfilled]: (state, action) => {
      state.allpizza = action.payload;
      state.status = 'success'
    },
    [fetchAdminPizzas.rejected]: (state) => {
      state.allpizza = [];
      state.status = 'error'
    },
  },
});

export const {  } = adminSlice.actions;
export default adminSlice.reducer;
