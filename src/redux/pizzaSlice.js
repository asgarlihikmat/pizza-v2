import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  pizza: [],
  like: [],
};

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
});

export const { getAllPizzas, setLike } = pizzaSlice.actions;
export default pizzaSlice.reducer;
