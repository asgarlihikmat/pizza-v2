import { configureStore } from "@reduxjs/toolkit";
import pizzaSlice from "./pizzaSlice";
import categorySlice from "./categorySlice";
import filterSlice from "./filterSlice";
import addSlice from "./addSlice";
export const store = configureStore({
    reducer:{
        pizzaSlice,
        categorySlice,
        filterSlice,
        addSlice
    }
})