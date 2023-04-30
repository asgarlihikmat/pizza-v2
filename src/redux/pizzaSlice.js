import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    pizza: []
}

export const pizzaSlice = createSlice({
    name:'pizza',
    initialState,
    reducers: {
        getAllPizzas(state,action){
            state.pizza = action.payload;
        }
    }
})

export const {getAllPizzas} = pizzaSlice.actions;
export default pizzaSlice.reducer;