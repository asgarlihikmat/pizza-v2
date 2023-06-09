import { configureStore } from "@reduxjs/toolkit";

import pizzaSlice from "./slices/pizzaSlice";
import categorySlice from "./slices/categorySlice";
import filterSlice from "./slices/filterSlice";
import addSlice from "./slices/addSlice";
import orderedSlice from "./slices/orderedSlice";
import adminSlice from "./slices/adminSlice";
import searchSlice from "./slices/searchSlice";

export const store = configureStore({
  reducer: {
    pizzaSlice,
    categorySlice,
    filterSlice,
    addSlice,
    orderedSlice,
    adminSlice,
    searchSlice
  },
});
