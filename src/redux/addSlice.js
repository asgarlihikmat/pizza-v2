import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    addedPizza: [],
    totalPrice: 0
}

export const addSlice = createSlice({
    name:'add',
    initialState,
    reducers: {
       addPizza(state,action){
        
        const newState = state.addedPizza.find(obj => obj.id === action.payload.id);
        if(newState) {
                newState.count ++;
        }else{
            state.addedPizza.push({...action.payload,count: 1})
        }

        state.totalPrice = state.addedPizza.reduce((sum,obj)=>{
                return(obj.price * obj.count) + sum;
        },0)
    },
    clearAllPizzas(state,action){
        state.addedPizza = []
        state.totalPrice = 0
    },
    plusAdd(state,action){
        const newState = state.addedPizza.find(obj => obj.id === action.payload)
        if(newState) {
            newState.count ++;
        }
    },
    minusAdd(state,action){
        const newState = state.addedPizza.find(obj => obj.id === action.payload)
        if(newState) {
            newState.count --;
        }
    },
    removeOnePizza(state,action){
        console.log(action.payload);
        const total = state.addedPizza.splice(action.payload,1)
        state.totalPrice = state.totalPrice - 30;
    }
        
    }
})

export const {addPizza,clearAllPizzas,plusAdd,minusAdd,removeOnePizza} = addSlice.actions;
export default addSlice.reducer;