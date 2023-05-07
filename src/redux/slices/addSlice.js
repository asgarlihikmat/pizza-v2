import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  addedPizza: [],
};

export const addSlice = createSlice({
  name: "add",
  initialState,
  reducers: {
    addPizza(state, action) {
      const newState = state.addedPizza.find((obj) => {
        if (
          obj.id === action.payload.id &&
          obj.type === action.payload.type &&
          obj.size === action.payload.size
        ) {
          return obj;
        }
      });

      if (newState) {
        newState.count++;
      } else {
        state.addedPizza.push({ ...action.payload, count: 1 });
      }
    },
    clearAllPizzas(state, action) {
      state.addedPizza = [];
      state.totalPrice = 0;
    },
    plusAdd(state, action) {
      const newState = state.addedPizza.find((obj) => {
        if (
          obj.id === action.payload.id &&
          obj.type === action.payload.type &&
          obj.size === action.payload.size
        ) {
          return obj;
        }
      });
      if (newState) {
        newState.count++;
      }
    },
    minusAdd(state, action) {
      const newState = state.addedPizza.find((obj) => {
        if (
          obj.id === action.payload.id &&
          obj.type === action.payload.type &&
          obj.size === action.payload.size
        ) {
          return obj;
        }
      });
      if (newState) {
        newState.count--;
      }
    },
    removeOnePizza(state, action) {
      console.log(action.payload);
      const total = state.addedPizza.splice(action.payload, 1);
      state.totalPrice = state.totalPrice - 30;
    },
  },
});

export const { addPizza, clearAllPizzas, plusAdd, minusAdd, removeOnePizza } =
  addSlice.actions;
export default addSlice.reducer;
