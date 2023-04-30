import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    categories: []
}

export const categorySlice = createSlice({
    name:'pizza',
    initialState,
    reducers: {
       setCategoryIndex(state,action){
            state.categories = action.payload;
       }
    }
})

export const {setCategoryIndex} = categorySlice.actions;
export default categorySlice.reducer;