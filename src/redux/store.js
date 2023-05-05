import { configureStore } from "@reduxjs/toolkit";
import pizzaSlice from "./pizzaSlice";
import categorySlice from "./categorySlice";
import filterSlice from "./filterSlice";
import addSlice from "./addSlice";
import paginateSlice from "./paginateSlice";
import orderedSlice from "./orderedSlice";

export const store = configureStore({
  reducer: {
    pizzaSlice,
    categorySlice,
    filterSlice,
    addSlice,
    paginateSlice,
    orderedSlice
  },
});
