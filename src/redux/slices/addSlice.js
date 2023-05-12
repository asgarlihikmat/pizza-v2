import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  addedPizza: [],
  groupAdd:[]
};

export const addSlice = createSlice({
  name: "add",
  initialState,
  reducers: {
    pizzaAddedGroup(state, action){
      const groupAdd = state.groupAdd.find((obj) => {
        if (
          obj.title === action.payload.title
        ) {
          return obj;
        }
      });

      if (groupAdd) {
        groupAdd.countGroup++;
      } else {
        state.groupAdd.push({ ...action.payload, countGroup: 1 });
      }
      
    },
    addPizza(state, action) {
      const newState = state.addedPizza.find((obj) => {
        if (
          obj.id === action.payload.id &&
          obj.types === action.payload.types &&
          obj.sizes === action.payload.sizes){return obj;}
          
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
          obj.types === action.payload.types &&
          obj.sizes === action.payload.sizes
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
          obj.types === action.payload.types &&
          obj.sizes === action.payload.sizes
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

export const { addPizza, clearAllPizzas, plusAdd, minusAdd, removeOnePizza,pizzaAddedGroup } =
  addSlice.actions;
export default addSlice.reducer;
